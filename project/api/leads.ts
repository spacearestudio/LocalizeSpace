// Vercel serverless function: receives the popup's sign-up and posts it to a private Discord channel.
// Put this file at api/leads.ts in your landing project (the "api" folder next to "src", not inside it).
// Set DISCORD_WEBHOOK_URL in Vercel: Project, Settings, Environment Variables. Redeploy after adding it.
// There is no database. The Discord message is the record, so if Discord can't be reached the visitor
// sees an error and can try again, instead of the sign-up being silently lost.

type Req = { method?: string; body?: unknown };
type Res = {
  status(code: number): Res;
  json(body: unknown): void;
  setHeader(name: string, value: string): void;
};

const clean = (v: unknown, max: number): string =>
  typeof v === 'string' ? v.replace(/[\u0000-\u001f\u007f]/g, ' ').replace(/\s+/g, ' ').trim().slice(0, max) : '';
const cleanMessage = (v: unknown): string =>
  typeof v === 'string' ? v.replace(/[\u0000-\u0008\u000b\u000c\u000e-\u001f\u007f]/g, '').trim().slice(0, 500) : '';

const fail = (res: Res, status: number, error: string, message: string) => res.status(status).json({ error, message });

export default async function handler(req: Req, res: Res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return fail(res, 405, 'method_not_allowed', 'POST only.');
  }

  const webhook = process.env.DISCORD_WEBHOOK_URL;
  if (!webhook) {
    console.error('DISCORD_WEBHOOK_URL is not set.');
    return fail(res, 500, 'not_configured', 'Sign-ups are not set up yet.');
  }

  let body: Record<string, unknown> = {};
  try {
    const raw = typeof req.body === 'string' ? JSON.parse(req.body) : req.body;
    if (raw && typeof raw === 'object') body = raw as Record<string, unknown>;
  } catch {
    return fail(res, 400, 'bad_request', 'Invalid request.');
  }

  // Spam trap: real people never see or fill this field. Pretend it worked.
  if (typeof body.website === 'string' && body.website.trim()) return res.status(201).json({ ok: true });

  const name = clean(body.name, 80);
  const businessName = clean(body.businessName, 100);
  const contact = clean(body.contact, 120);
  const message = cleanMessage(body.message);

  if (body.consent !== true) return fail(res, 400, 'consent_required', 'Tick the box to agree to how we use your details.');
  if (!name) return fail(res, 400, 'name_required', 'Enter your name.');
  if (!businessName) return fail(res, 400, 'business_required', 'Enter your business name.');
  if (contact.length < 3) return fail(res, 400, 'contact_required', 'Tell us how to reach you.');

  const when = new Date().toLocaleString('ko-KR', { timeZone: 'Asia/Seoul' });
  const text =
    `**New sign-up** (${when} KST)\n` +
    `Business: ${businessName}\nName: ${name}\nContact: ${contact}` +
    (message ? `\nMessage: ${message}` : '');

  try {
    const r = await fetch(webhook, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      // allowed_mentions stops anything typed into the form from pinging @everyone.
      body: JSON.stringify({ content: text, allowed_mentions: { parse: [] } }),
      signal: AbortSignal.timeout(8000),
    });
    if (!r.ok) {
      console.error('Discord rejected the message:', r.status);
      return fail(res, 502, 'notify_failed', 'Could not send your sign-up. Please try again.');
    }
  } catch (e) {
    console.error('Discord request failed:', e instanceof Error ? e.message : e);
    return fail(res, 502, 'notify_failed', 'Could not send your sign-up. Please try again.');
  }

  return res.status(201).json({ ok: true });
}
