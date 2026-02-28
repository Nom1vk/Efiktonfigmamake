import { Linkedin, Twitter, Mail } from 'lucide-react';

const links = {
  Solutions: [
    { label: 'Materials Management', href: '#solutions' },
    { label: 'Time & Scheduling', href: '#solutions' },
    { label: 'Cost & Margin', href: '#solutions' },
    { label: 'Knowledge & Quality', href: '#solutions' },
  ],
  Company: [
    { label: 'The Method', href: '#method' },
    { label: 'Proven Results', href: '#results' },
    { label: 'About Efikton', href: '#about' },
    { label: 'Contact', href: '#contact' },
  ],
  Legal: [
    { label: 'Privacy Policy', href: '#' },
    { label: 'Terms of Service', href: '#' },
    { label: 'GDPR', href: '#' },
  ],
};

export function Footer() {
  return (
    <footer
      id="about"
      style={{ backgroundColor: '#001226', color: 'rgba(255,255,255,0.45)', scrollMarginTop: '64px' }}
      aria-label="Site footer"
    >
      <div
        className="max-w-7xl mx-auto px-6 lg:px-8 py-14 lg:py-16"
        style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}
      >
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <a
              href="#"
              className="inline-block mb-5 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#B87333]"
              aria-label="Efikton home"
            >
              <span
                className="text-xl font-bold"
                style={{ fontFamily: "'Space Grotesk', sans-serif", color: '#fff', letterSpacing: '-0.02em' }}
              >
                e<span style={{ color: '#B87333' }}>φ</span>ikton
              </span>
            </a>
            <p className="text-sm mb-5" style={{ lineHeight: 1.75 }}>
              The manufacturing operating system. Manage Materials, Time, Money, and Knowledge as
              one system.
            </p>
            <div
              className="text-xs font-semibold uppercase tracking-widest"
              style={{ color: '#B87333', letterSpacing: '0.12em' }}
            >
              Εφικτόν — Achievable
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(links).map(([heading, items]) => (
            <div key={heading}>
              <h3
                className="text-xs font-semibold uppercase tracking-widest mb-5"
                style={{ color: 'rgba(255,255,255,0.6)', letterSpacing: '0.12em' }}
              >
                {heading}
              </h3>
              <ul className="space-y-3 text-sm">
                {items.map((item) => (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      className="transition-colors duration-150 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#B87333]"
                      onMouseEnter={(e) => (e.currentTarget.style.color = '#fff')}
                      onMouseLeave={(e) => (e.currentTarget.style.color = '')}
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div
          className="pt-8 flex flex-col md:flex-row justify-between items-center gap-4"
          style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}
        >
          <p className="text-xs" style={{ color: 'rgba(255,255,255,0.3)' }}>
            © 2026 Efikton. All rights reserved.{' '}
            <span style={{ color: 'rgba(255,255,255,0.2)' }}>
              · Greece & EU · Middle East · Egypt
            </span>
          </p>

          <div className="flex items-center gap-5">
            {[
              { Icon: Linkedin, label: 'LinkedIn', href: '#' },
              { Icon: Twitter, label: 'X / Twitter', href: '#' },
              { Icon: Mail, label: 'Email', href: 'mailto:hello@efikton.com' },
            ].map(({ Icon, label, href }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="transition-colors duration-150 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#B87333]"
                style={{ color: 'rgba(255,255,255,0.3)' }}
                onMouseEnter={(e) => (e.currentTarget.style.color = '#B87333')}
                onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(255,255,255,0.3)')}
              >
                <Icon className="w-4 h-4" aria-hidden="true" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
