import { Earth, Layers, CalendarDays, BarChart3, Hash, MessageSquare } from 'lucide-react';

const features = [
  {
    icon: Earth,
    title: '구글 활성화',
    desc: '영어권 국가의 여행객 대부분은 해외 여행 전 그리고 중에서도 구글 지도를 꼭 사용해요, 구글 지도 활성화를 통해 영어권 고객들이 사장님의 가게를 쉽게 찾게 해줘요!',
  },
  {
    icon: Layers,
    title: '웹사이트 제작',
    desc: '해외에서는 기업 고유 사이트를 통해 상품 설명, 예약, 질문 등 모든걸 한곳에서 편하게 할수 있는게 흔해요, 그래서 저희가 웹사이트 제작부터 관리까지 도와드려요',
  },
  {
    icon: CalendarDays,
    title: '네이버 연동',
    desc: '기존에 네이버 예약을 사용하고 계신가요? 저희가 네이버 예약과 연동하여 쉽게 예약 관리할수 있도록 도와드려요',
  },
  {
    icon: BarChart3,
    title: '통계 확인',
    desc: '영어권 고객님들의 방문 수, 예약 수, 리뷰 수 등 다양한 통계 저희 사이트에서 추척 해드리고 쉽게 확인이 가능해요',
  },
  {
    icon: Hash,
    title: 'SNS 전환',
    desc: '기본 존재하신 SNS 계정을 저희가 영어권 고객님들이 쉽게 접근할 수 있도록 계정 생선 부터 마케팅까지 해드려요',
  },
  {
    icon: MessageSquare,
    title: '고객 관리',
    desc: '영어권 고객님들의 예약, 문의, 리뷰 등 다양한 고객 관리는 저희가 다 해드려요, 사장님은 편하게 가게 운영만 하시면 돼요!',
  },
];

export function Features() {
  return (
    <section id="features" className="py-24 border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-sm font-medium text-brand-green/80">핵심</span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-semibold tracking-tight">
            영어를 잘 못하셔도 괜찮아요! <br className="hidden sm:block" />
          </h2>
          <p className="mt-4 text-slate-600 leading-relaxed">
            성공적인 해외 마케팅을 위해 필요한 모든 것을 저희가 해드려요,
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
