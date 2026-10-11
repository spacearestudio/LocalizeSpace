import { useEffect, useRef, useState } from 'react';
import { CheckCircle2, Loader2, X } from 'lucide-react';

// Where sign-ups are sent. Empty means "the same address as the page" (use it with the Vite dev proxy,
// or when the booking server also serves this site). To use an API on another address, set VITE_API_URL
// (for example https://api.example.com) and list this site's address in the server's ALLOWED_ORIGINS.
const env = (import.meta as unknown as { env?: Record<string, string | undefined> }).env;
const LEADS_URL = `${(env?.VITE_API_URL ?? '').replace(/\/$/, '')}/api/leads`;

// Messages for the errors the server can send back, in Korean.
const ERRORS: Record<string, string> = {
  consent_required: '개인정보 수집·이용에 동의해 주세요.',
  name_required: '이름을 입력해 주세요.',
  business_required: '가게 이름을 입력해 주세요.',
  contact_required: '연락처를 입력해 주세요.',
  too_many_requests: '요청이 너무 많아요. 잠시 후 다시 시도해 주세요.',
};
const FALLBACK_ERROR = '전송하지 못했어요. 잠시 후 다시 시도해 주세요.';

const inputClass =
  'w-full px-4 py-2.5 text-sm rounded-xl border border-slate-300 bg-white placeholder:text-slate-400 outline-none focus:ring-2 focus:ring-brand-green focus:border-transparent transition-all';

export function LeadModal({ onClose }: { onClose: () => void }) {
  const [name, setName] = useState('');
  const [businessName, setBusinessName] = useState('');
  const [contact, setContact] = useState('');
  const [message, setMessage] = useState('');
  const [consent, setConsent] = useState(false);
  const [website, setWebsite] = useState(''); // spam trap: people never see it, bots fill it in
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [done, setDone] = useState(false);

  const firstField = useRef<HTMLInputElement>(null);
  const opener = useRef<Element | null>(null);

  // Focus the first field, close on Esc, stop the page behind from scrolling, and give focus back on close.
  useEffect(() => {
    opener.current = document.activeElement;
    firstField.current?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', onKey);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = previousOverflow;
      if (opener.current instanceof HTMLElement) opener.current.focus();
    };
  }, [onClose]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (!name.trim() || !businessName.trim() || !contact.trim()) {
      setError('이름, 가게 이름, 연락처를 모두 입력해 주세요.');
      return;
    }
    if (!consent) {
      setError(ERRORS.consent_required);
      return;
    }

    setSubmitting(true);
    try {
      const res = await fetch(LEADS_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: name.trim(),
          businessName: businessName.trim(),
          contact: contact.trim(),
          message: message.trim(),
          consent,
          website,
        }),
      });
      if (!res.ok) {
        const body = (await res.json().catch(() => null)) as { error?: string } | null;
        setError((body?.error && ERRORS[body.error]) || FALLBACK_ERROR);
        return;
      }
      setDone(true);
    } catch {
      setError(FALLBACK_ERROR); // network down, blocked, or the server isn't running
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/50 backdrop-blur-sm p-4"
      onMouseDown={(e) => {
        if (e.target === e.currentTarget) onClose(); // click on the dark area outside the box
      }}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="lead-modal-title"
        className="animate-fade-in bg-white rounded-2xl shadow-2xl w-full max-w-md max-h-[90vh] overflow-y-auto"
      >
        <div className="flex items-start justify-between gap-4 px-6 pt-6">
          <div>
            <h2 id="lead-modal-title" className="text-xl font-semibold text-slate-900">
              무료 체험 신청
            </h2>
            <p className="mt-1 text-sm text-slate-500">남겨주신 연락처로 확인 후 안내드릴게요.</p>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="닫기"
            className="shrink-0 w-8 h-8 flex items-center justify-center rounded-lg text-slate-500 hover:bg-slate-100 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {done ? (
          <div className="px-6 py-10 text-center">
            <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-brand-green/20 flex items-center justify-center">
              <CheckCircle2 className="w-8 h-8 text-brand-green" />
            </div>
            <p className="text-lg font-semibold text-slate-900">신청이 접수되었어요!</p>
            <p className="mt-2 text-sm text-slate-500 break-all">
              <span className="font-medium text-slate-700">{contact.trim()}</span>(으)로 연락드릴게요.
            </p>
            <button
              type="button"
              onClick={onClose}
              className="mt-6 w-full py-3 rounded-xl bg-gradient-to-r from-brand-blue to-brand-green text-slate-900 font-medium hover:opacity-90 transition-opacity"
            >
              확인
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="px-6 pb-6 pt-5 space-y-4" noValidate>
            {error && (
              <div role="alert" className="p-3 rounded-xl bg-red-50 border border-red-200 text-sm text-red-700">
                {error}
              </div>
            )}

            <div>
              <label htmlFor="lead-name" className="block text-sm font-medium text-slate-700 mb-1.5">
                이름
              </label>
              <input
                ref={firstField}
                id="lead-name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                maxLength={80}
                autoComplete="name"
                className={inputClass}
                required
              />
            </div>

            <div>
              <label htmlFor="lead-business" className="block text-sm font-medium text-slate-700 mb-1.5">
                가게 이름
              </label>
              <input
                id="lead-business"
                type="text"
                value={businessName}
                onChange={(e) => setBusinessName(e.target.value)}
                maxLength={100}
                autoComplete="organization"
                className={inputClass}
                required
              />
            </div>

            <div>
              <label htmlFor="lead-contact" className="block text-sm font-medium text-slate-700 mb-1.5">
                연락처
              </label>
              <input
                id="lead-contact"
                type="text"
                value={contact}
                onChange={(e) => setContact(e.target.value)}
                placeholder="전화번호, 카카오톡 ID 또는 이메일"
                maxLength={120}
                autoComplete="off"
                className={inputClass}
                required
              />
            </div>

            <div>
              <label htmlFor="lead-message" className="block text-sm font-medium text-slate-700 mb-1.5">
                문의사항 <span className="font-normal text-slate-400">(선택)</span>
              </label>
              <textarea
                id="lead-message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                rows={3}
                maxLength={500}
                className={`${inputClass} resize-y`}
              />
            </div>

            {/* Spam trap: hidden from people, but bots fill it in. */}
            <div aria-hidden="true" className="absolute -left-[9999px] w-px h-px overflow-hidden">
              <label>
                Website
                <input type="text" tabIndex={-1} autoComplete="off" value={website} onChange={(e) => setWebsite(e.target.value)} />
              </label>
            </div>

            <label className="flex items-start gap-2.5 text-sm text-slate-600 cursor-pointer">
              <input
                type="checkbox"
                checked={consent}
                onChange={(e) => setConsent(e.target.checked)}
                className="mt-0.5 w-4 h-4 accent-emerald-600 shrink-0"
              />
              <span>
                개인정보 수집·이용에 동의합니다. <span className="text-slate-400">(필수)</span>
              </span>
            </label>
            <p className="-mt-2 text-xs leading-relaxed text-slate-400">
              수집 항목: 이름, 가게 이름, 연락처, 문의사항 · 이용 목적: 체험 안내 및 연락 · 보유 기간: 안내가 끝나면 지체 없이
              삭제합니다.
            </p>

            <button
              type="submit"
              disabled={submitting}
              className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-brand-blue to-brand-green text-slate-900 font-medium hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {submitting ? (
                <span className="flex items-center justify-center gap-2">
                  <Loader2 className="w-4 h-4 animate-spin" />
                  보내는 중...
                </span>
              ) : (
                '신청하기'
              )}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
