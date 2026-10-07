import { TrendingUp, Users, Globe2, Plane } from 'lucide-react';

const stats = [
  {
    icon: Users,
    value: '2025년',
    label: '국제 관광객 1,890만',
    sub: '2019 전 사상 최대 보다 8.2% 증가',
  },
  {
    icon: TrendingUp,
    value: '+8.2%',
    label: '지속적인 성장',
    sub: '코라나 관광 수치 회복 이후 지속적인 성장세',
  },
  {
    icon: Globe2,
    value: '+45.8%',
    label: '영미권 관심 상승',
    sub: '아시아뿐만 아니라 영미권도',
  },
  {
    icon: Plane,
    value: '29.6M',
    label: '2025년 한국인 해외 여행객',
    sub: '국내만 아니라 글로벌에 시대',
  },
];

const topCountries = [
  { rank: 1, country: '중국', visitors: '5.48M', share: 29, note: '2019 최고 수치에 비해 10% 인하' },
  { rank: 2, country: '일본', visitors: '3.65M', share: 19, note: '코로나19 전 보다 +11.7% 인상' },
  { rank: 3, country: '대만', visitors: '1.80M', share: 10, note: '아시아 시장에서 지속적인 회복세' },
  { rank: 4, country: '미국', visitors: '1.65M', share: 9, note: '영미권 관심 상승' },
  { rank: 5, country: '홍콩', visitors: '1.20M', share: 6, note: '홍콩인 58.7% 영어 유창' },
];

export function TourismStats() {
  return (
    <section id="tourism" className="py-24 border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section header */}
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-sm font-medium text-brand-green/80">관광 통계</span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-semibold tracking-tight">
            관광은 산업은 계속 성장하고 있어요! <br className="hidden sm:block" />
          </h2>
          <p className="mt-4 text-slate-600 leading-relaxed">
            2025년 해외 입국객은 사상 최대인 1,890만 명을 기록하며 코로나19 이전 최고치를 넘어서 전반적으로 아시아 및 영미권으로 부터 한국 관광산업에 지속적인 성장을 보여주고 있어요.
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
            국제 관광객 TOP 5 국가 (2025년 기준)
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
            자료 출처: 문화체육관광부(MCST)·한국관광공사(KTO), 야놀자리서치(Yanolja Research), 2025년 데이터.
          </p>
        </div>
      </div>
    </section>
  );
}
