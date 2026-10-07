import { TrendingUp, Users, Globe2, Plane } from 'lucide-react';

const stats = [
  {
    icon: Users,
    value: '18.9M',
    label: 'International visitors in 2025',
    sub: 'New all-time high, surpassing 2019 by 8.2%',
  },
  {
    icon: TrendingUp,
    value: '+8.2%',
    label: 'Growth vs. pre-pandemic peak',
    sub: 'Structural expansion beyond recovery',
  },
  {
    icon: Globe2,
    value: '+45.8%',
    label: 'Growth from the Americas',
    sub: 'Long-haul markets surging',
  },
  {
    icon: Plane,
    value: '29.6M',
    label: 'Korean outbound trips in 2025',
    sub: 'Record number of Koreans traveling abroad',
  },
];

const topCountries = [
  { rank: 1, country: 'China', visitors: '5.48M', share: 29, note: 'Largest source market, ~90% of 2019 level' },
  { rank: 2, country: 'Japan', visitors: '3.65M', share: 19, note: '+11.7% above pre-pandemic figure' },
  { rank: 3, country: 'Taiwan', visitors: '1.80M', share: 10, note: 'Steady recovery from Asian market' },
  { rank: 4, country: 'United States', visitors: '1.65M', share: 9, note: 'Strong long-haul growth' },
  { rank: 5, country: 'Hong Kong', visitors: '1.20M', share: 6, note: 'Continuing post-pandemic rebound' },
];

export function TourismStats() {
  return (
    <section id="tourism" className="py-24 border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section header */}
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-sm font-medium text-brand-green/80">Tourism Insights</span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-semibold tracking-tight">
            South Korea tourism is surging
          </h2>
          <p className="mt-4 text-slate-600 leading-relaxed">
            Inbound arrivals hit a record 18.9 million in 2025, breaking the
            pre-pandemic high and signaling sustained structural growth across
            both Asian and long-haul markets.
          </p>
        </div>

        {/* Stat cards */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((s) => (
            <div
              key={s.label}
              className="rounded-2xl border border-slate-100 p-6 hover:shadow-lg hover:shadow-slate-100 transition-all duration-300"
            >
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-brand-blue to-brand-green flex items-center justify-center">
                <s.icon className="w-5 h-5 text-slate-900" />
              </div>
              <div className="mt-5 text-3xl font-semibold tracking-tight">{s.value}</div>
              <div className="mt-1 text-sm font-medium text-slate-700">{s.label}</div>
              <div className="mt-1 text-xs text-slate-400 leading-relaxed">{s.sub}</div>
            </div>
          ))}
        </div>

        {/* Top 5 countries list */}
        <div className="mt-16 max-w-3xl mx-auto">
          <h3 className="text-lg font-semibold text-center">
            Top 5 source countries for inbound visitors
          </h3>
          <div className="mt-8 space-y-3">
            {topCountries.map((c) => (
              <div
                key={c.country}
                className="flex items-center gap-4 rounded-xl border border-slate-100 p-4 hover:border-slate-200 transition-colors"
              >
                {/* Rank badge */}
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-brand-blue/30 flex items-center justify-center text-sm font-semibold text-slate-700">
                  {c.rank}
                </div>

                {/* Country name */}
                <div className="w-32 sm:w-40 flex-shrink-0">
                  <div className="text-sm font-medium">{c.country}</div>
                  <div className="text-xs text-slate-400 sm:hidden">{c.visitors} visitors</div>
                </div>

                {/* Bar */}
                <div className="flex-1 hidden sm:block">
                  <div className="h-2 rounded-full bg-slate-100 overflow-hidden">
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-brand-blue to-brand-green transition-all duration-700"
                      style={{ width: `${c.share * 3}%` }}
                    />
                  </div>
                </div>

                {/* Visitors count */}
                <div className="hidden sm:block w-16 text-right text-sm font-semibold tabular-nums">
                  {c.visitors}
                </div>

                {/* Note */}
                <div className="hidden lg:block w-56 text-right text-xs text-slate-400">
                  {c.note}
                </div>
              </div>
            ))}
          </div>
          <p className="mt-6 text-center text-xs text-slate-400">
            Source: Korea Ministry of Culture, Sports and Tourism (MCST) & Korea
            Tourism Organization (KTO), 2025 data via Yanolja Research.
          </p>
        </div>
      </div>
    </section>
  );
}
