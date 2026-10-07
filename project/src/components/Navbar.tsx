import { useEffect, useState } from 'react';
import { Globe, Menu, X } from 'lucide-react';

const links = [
  { label: 'Temp', href: '#features' },
  { label: 'Temp', href: '#pricing' },
  { label: 'Temp', href: '#' },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/80 backdrop-blur-md border-b border-slate-200/80'
          : 'bg-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2 font-semibold text-lg">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-brand-blue to-brand-green flex items-center justify-center">
            <Globe className="w-5 h-5 text-slate-900" />
          </div>
          <span>LocalizeSpace</span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="text-sm text-slate-600 hover:text-slate-900 transition-colors"
            >
              {l.label}
            </a>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-3">
          <a
            href="#"
            className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors"
          >
            로그인
          </a>
          <a
            href="#"
            className="text-sm font-medium px-4 py-2 rounded-lg bg-gradient-to-r from-brand-blue to-brand-green text-slate-900 hover:opacity-90 transition-opacity"
          >
            시작하기
          </a>
        </div>

        <button
          className="md:hidden p-2 -mr-2 text-slate-700"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {open && (
        <div className="md:hidden bg-white border-b border-slate-200">
          <div className="px-6 py-4 flex flex-col gap-4">
            {links.map((l) => (
              <a
                key={l.label}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-sm text-slate-600 hover:text-slate-900"
              >
                {l.label}
              </a>
            ))}
            <div className="flex flex-col gap-3 pt-2 border-t border-slate-100">
              <a href="#" className="text-sm font-medium text-slate-600">
                Sign in
              </a>
              <a
                href="#"
                className="text-sm font-medium px-4 py-2 rounded-lg bg-gradient-to-r from-brand-blue to-brand-green text-slate-900 text-center hover:opacity-90 transition-opacity"
              >
                Get started
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
