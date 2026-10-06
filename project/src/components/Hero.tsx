import { ArrowRight, Check } from 'lucide-react';

const highlights = ['No credit card required', '14-day free trial', 'Cancel anytime'];

export function Hero() {
  return (
    <section className="relative pt-32 pb-24 overflow-hidden">
      {/* Background accent */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-gradient-to-br from-sky-100 to-transparent rounded-full blur-3xl opacity-60" />
      </div>

      <div className="max-w-7xl mx-auto px-6 text-center">
        <div className="animate-fade-up">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-100 border border-slate-200 text-sm text-slate-600">
            <span className="w-2 h-2 rounded-full bg-emerald-500" />
            Now in public beta
          </span>
        </div>

        <h1 className="animate-fade-up mt-6 text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight max-w-3xl mx-auto leading-[1.1]">
          The workspace your team will actually enjoy using
        </h1>

        <p className="animate-fade-up mt-6 text-lg text-slate-600 max-w-xl mx-auto leading-relaxed">
          Nimbus brings your projects, docs, and conversations together in one
          fast, beautifully designed platform built for modern teams.
        </p>

        <div className="animate-fade-up mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
          <a
            href="#"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-slate-900 text-white font-medium hover:bg-slate-800 transition-colors group"
          >
            Start for free
            <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </a>
          <a
            href="#features"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-slate-200 text-slate-700 font-medium hover:bg-slate-50 transition-colors"
          >
            See features
          </a>
        </div>

        <div className="animate-fade-in mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
          {highlights.map((h) => (
            <div key={h} className="flex items-center gap-1.5 text-sm text-slate-500">
              <Check className="w-4 h-4 text-emerald-500" />
              {h}
            </div>
          ))}
        </div>

        {/* Product preview card */}
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
                  { label: 'Active projects', value: '128', color: 'bg-sky-500' },
                  { label: 'Team members', value: '42', color: 'bg-emerald-500' },
                  { label: 'Completed tasks', value: '1,937', color: 'bg-amber-500' },
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
      </div>
    </section>
  );
}
