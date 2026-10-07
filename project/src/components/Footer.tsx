import { Globe } from 'lucide-react';

const columns = [
  {
    title: 'Product',
    links: ['Features', 'Pricing', 'Changelog', 'Roadmap', 'Status'],
  },
  {
    title: 'Company',
    links: ['About', 'Blog', 'Careers', 'Contact'],
  },
  {
    title: 'Resources',
    links: ['Documentation', 'API Reference', 'Guides', 'Community'],
  },
  {
    title: 'Legal',
    links: ['Privacy', 'Terms', 'Security', 'DPA'],
  },
];

export function Footer() {
  return (
    <footer className="border-t border-slate-200 py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-6 gap-8">
          <div className="col-span-2">
            <a href="#" className="flex items-center gap-2 font-semibold text-lg">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-brand-blue to-brand-green flex items-center justify-center">
                <Globe className="w-5 h-5 text-slate-900" />
              </div>
              Nimbus
            </a>
            <p className="mt-4 text-sm text-slate-500 max-w-xs leading-relaxed">
              The workspace your team will actually enjoy using. Built for
              speed, designed for everyone.
            </p>
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <h4 className="text-sm font-semibold text-slate-900">{col.title}</h4>
              <ul className="mt-4 space-y-2.5">
                {col.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-slate-500 hover:text-slate-900 transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-8 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-slate-400">
            © {new Date().getFullYear()} Nimbus, Inc. All rights reserved.
          </p>
          <div className="flex items-center gap-4 text-sm text-slate-400">
            <a href="#" className="hover:text-slate-600 transition-colors">Twitter</a>
            <a href="#" className="hover:text-slate-600 transition-colors">GitHub</a>
            <a href="#" className="hover:text-slate-600 transition-colors">LinkedIn</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
