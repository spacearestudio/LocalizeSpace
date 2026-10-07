import { Zap, ShieldCheck, GitBranch, BarChart3, Inbox, Globe } from 'lucide-react';

const features = [
  {
    icon: Zap,
    title: 'Lightning fast',
    desc: 'Built on a modern stack with edge rendering. Pages load in milliseconds, not seconds.',
  },
  {
    icon: ShieldCheck,
    title: 'Enterprise-grade security',
    desc: 'SOC 2 Type II compliant with SSO, SAML, and end-to-end encryption included on every plan.',
  },
  {
    icon: GitBranch,
    title: 'Git-native workflows',
    desc: 'Connect your repositories and ship with review approvals, branching, and audit trails.',
  },
  {
    icon: BarChart3,
    title: 'Real-time analytics',
    desc: 'Track velocity, bottlenecks, and team health with dashboards that update live.',
  },
  {
    icon: Inbox,
    title: 'Unified inbox',
    desc: 'Comments, mentions, and requests in one place. No more switching between five tabs.',
  },
  {
    icon: Globe,
    title: 'Works everywhere',
    desc: 'Native apps for macOS, Windows, iOS, and Android. Plus a fast web app for everything else.',
  },
];

export function Features() {
  return (
    <section id="features" className="py-24 border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-sm font-medium text-brand-green/80">Features</span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-semibold tracking-tight">
            Everything you need, nothing you don't
          </h2>
          <p className="mt-4 text-slate-600 leading-relaxed">
            Powerful features designed to keep your team in flow — without the
            bloat of legacy tools.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f) => (
            <div
              key={f.title}
              className="group rounded-2xl border border-slate-100 p-6 hover:border-slate-200 hover:shadow-lg hover:shadow-slate-100 transition-all duration-300"
            >
              <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-brand-blue to-brand-green flex items-center justify-center group-hover:scale-105 transition-transform">
                <f.icon className="w-5 h-5 text-slate-900" />
              </div>
              <h3 className="mt-5 text-lg font-semibold">{f.title}</h3>
              <p className="mt-2 text-sm text-slate-600 leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
