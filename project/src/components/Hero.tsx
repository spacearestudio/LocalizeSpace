import { ArrowRight, Check } from 'lucide-react';

const highlights = ['무료', '엔제든지 취소 가능', '지속적인 서포트'];

export function Hero() {
  return (
    <section className="relative pt-32 pb-24 overflow-hidden">
      {/* Background accent */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-gradient-to-br from-brand-blue/40 to-brand-green/30 rounded-full blur-3xl opacity-70" />
      </div>

      <div className="max-w-7xl mx-auto px-6 text-center">
        <div className="animate-fade-up">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-green/20 border border-brand-green/40 text-sm text-slate-700">
            <span className="w-2 h-2 rounded-full bg-brand-green" />
            프로토타입
          </span>
        </div>

        <h1 className="animate-fade-up mt-6 text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight max-w-3xl mx-auto leading-[1.1]">
          영어권 고객님들도 우리 가게로!
        </h1>

        <p className="animate-fade-up mt-6 text-lg text-slate-600 max-w-xl mx-auto leading-relaxed">
          국내 고객들분만 아니라 영어권 고객님들도 우리 가게로! 유행 해외 플랫폼 등록 부터, 웹사이트 제작, SNS 마케팅까지 다 지금 바로 시작해보세요!
        </p>

        <div className="animate-fade-up mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
          <a
            href="#"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-brand-blue to-brand-green text-slate-900 font-medium hover:opacity-90 transition-opacity group"
          >
           체험하기
            <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </a>
        </div>

        <div className="animate-fade-in mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
          {highlights.map((h) => (
            <div key={h} className="flex items-center gap-1.5 text-sm text-slate-500">
              <Check className="w-4 h-4 text-brand-green" />
              {h}
            </div>
          ))}
        </div>

        {/* Product preview card */}
        {/*
        <div className="animate-fade-in mt-16 max-w-5xl mx-auto">
          <div className="rounded-2xl border border-slate-200 shadow-2xl shadow-slate-200/50 overflow-hidden">
            <div className="bg-slate-50 border-b border-slate-200 px-4 py-3 flex items-center gap-2">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-slate-300" />
                <div className="w-3 h-3 rounded-full bg-slate-300" />
                <div className="w-3 h-3 rounded-full bg-slate-300" />
              </div>
            </div>
            <div className="bg-white p-8 sm:p-12">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                {[
                  { label: 'Active projects', value: '128', color: 'bg-brand-blue' },
                  { label: 'Team members', value: '42', color: 'bg-brand-green' },
                  { label: 'Completed tasks', value: '1,937', color: 'bg-brand-blue/60' },
                ].map((stat) => (
                  <div key={stat.label} className="rounded-xl border border-slate-100 p-5">
                    <div className={`w-10 h-10 rounded-lg ${stat.color} opacity-80 mb-4`} />
                    <div className="text-3xl font-semibold">{stat.value}</div>
                    <div className="text-sm text-slate-500 mt-1">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        */}
      </div>
    </section>
  );
}
