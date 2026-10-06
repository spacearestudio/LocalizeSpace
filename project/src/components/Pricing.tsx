import { Check } from 'lucide-react';

const plans = [
  {
    name: 'Starter',
    price: '$0',
    period: '/mo',
    desc: 'For individuals getting started.',
    features: ['Up to 3 projects', '1 workspace', 'Community support', '7-day history'],
    cta: 'Get started',
    highlighted: false,
  },
  {
    name: 'Pro',
    price: '$24',
    period: '/mo',
    desc: 'For growing teams that need more.',
    features: [
      'Unlimited projects',
      'Up to 25 members',
      'Priority support',
      '90-day history',
      'Advanced analytics',
      'SSO & SAML',
    ],
    cta: 'Start free trial',
    highlighted: true,
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    period: '',
    desc: 'For organizations at scale.',
    features: [
      'Everything in Pro',
      'Unlimited members',
      'Dedicated support',
      'Custom contracts & SLA',
      'On-prem deployment',
    ],
    cta: 'Contact sales',
    highlighted: false,
  },
];

export function Pricing() {
  return (
    <section id="pricing" className="py-24 border-t border-slate-100 bg-slate-50/50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-sm font-medium text-sky-600">Pricing</span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-semibold tracking-tight">
            Simple, transparent pricing
          </h2>
          <p className="mt-4 text-slate-600 leading-relaxed">
            Start free, upgrade when you need. No hidden fees.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`rounded-2xl p-8 flex flex-col ${
                plan.highlighted
                  ? 'bg-slate-900 text-white shadow-2xl shadow-slate-300/50 md:scale-105'
                  : 'bg-white border border-slate-200'
              }`}
            >
              <div>
                <h3 className="text-lg font-semibold">{plan.name}</h3>
                <p className={`mt-1 text-sm ${plan.highlighted ? 'text-slate-300' : 'text-slate-500'}`}>
                  {plan.desc}
                </p>
              </div>

              <div className="mt-6 flex items-baseline gap-1">
                <span className="text-4xl font-semibold tracking-tight">{plan.price}</span>
                <span className={`text-sm ${plan.highlighted ? 'text-slate-400' : 'text-slate-500'}`}>
                  {plan.period}
                </span>
              </div>

              <ul className="mt-8 space-y-3 flex-1">
                {plan.features.map((feat) => (
                  <li key={feat} className="flex items-start gap-2.5 text-sm">
                    <Check
                      className={`w-4 h-4 mt-0.5 flex-shrink-0 ${
                        plan.highlighted ? 'text-emerald-400' : 'text-emerald-500'
                      }`}
                    />
                    <span className={plan.highlighted ? 'text-slate-200' : 'text-slate-700'}>
                      {feat}
                    </span>
                  </li>
                ))}
              </ul>

              <a
                href="#"
                className={`mt-8 inline-flex items-center justify-center px-5 py-2.5 rounded-xl text-sm font-medium transition-colors ${
                  plan.highlighted
                    ? 'bg-white text-slate-900 hover:bg-slate-100'
                    : 'border border-slate-200 text-slate-700 hover:bg-slate-50'
                }`}
              >
                {plan.cta}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
