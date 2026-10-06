import { ArrowRight } from 'lucide-react';

export function CTA() {
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="relative rounded-3xl bg-slate-900 px-8 py-16 sm:px-16 sm:py-20 text-center overflow-hidden">
          {/* Decorative gradient */}
          <div className="absolute inset-0 -z-0 opacity-30">
            <div className="absolute top-0 left-0 w-72 h-72 bg-sky-500 rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-0 w-72 h-72 bg-emerald-500 rounded-full blur-3xl" />
          </div>

          <div className="relative z-10">
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-white">
              Ready to get started?
            </h2>
            <p className="mt-4 text-slate-300 max-w-lg mx-auto leading-relaxed">
              Join thousands of teams already building faster with Nimbus. Set
              up takes less than two minutes.
            </p>
            <a
              href="#"
              className="mt-8 inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white text-slate-900 font-medium hover:bg-slate-100 transition-colors group"
            >
              Start for free
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
