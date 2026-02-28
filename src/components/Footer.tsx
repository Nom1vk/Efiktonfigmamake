import { Linkedin, Twitter, Mail, Globe } from 'lucide-react';

const links = {
  Solutions: [
    { label: 'Manufacturing Management', href: '#solutions' },
    { label: 'Quality Management', href: '#solutions' },
    { label: 'The Efikton Platform', href: '#solutions' },
    { label: 'Extended Capabilities', href: '#solutions' },
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
      style={{ backgroundColor: '#001a38', color: 'rgba(255,255,255,0.6)' }}
      aria-label="Site footer"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <a
              href="#"
              className="inline-block mb-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#B87333] rounded"
              aria-label="Efikton home"
            >
              <span
                className="text-2xl font-bold"
                style={{ fontFamily: "'Space Grotesk', sans-serif", color: '#fff' }}
              >
                e<span style={{ color: '#B87333' }}>φ</span>ikton
              </span>
            </a>
            <p className="text-sm mb-4" style={{ lineHeight: 1.7 }}>
              The manufacturing operating system that turns chaos into predictable control. Manage
              Materials, Time, Money, and Knowledge as one system.
            </p>
            <div
              className="inline-block px-3 py-1 rounded-full text-xs font-medium"
              style={{ backgroundColor: 'rgba(184,115,51,0.15)', color: '#B87333' }}
            >
              Εφικτόν — Achievable
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(links).map(([heading, items]) => (
            <div key={heading}>
              <h3 className="font-semibold text-sm mb-4" style={{ color: '#fff' }}>
                {heading}
              </h3>
              <ul className="space-y-2 text-sm">
                {items.map((item) => (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      className="transition-colors duration-150 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#B87333] rounded"
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

        {/* Divider + bottom bar */}
        <div
          className="border-t pt-8 flex flex-col md:flex-row justify-between items-center gap-4"
          style={{ borderColor: 'rgba(255,255,255,0.08)' }}
        >
          <div className="flex flex-col sm:flex-row gap-2 sm:gap-6 text-xs items-center">
            <p style={{ color: 'rgba(255,255,255,0.4)' }}>
              © 2026 Efikton. All rights reserved.
            </p>
            <div className="flex gap-1 text-xs" style={{ color: 'rgba(255,255,255,0.35)' }}>
              <Globe className="w-3.5 h-3.5" aria-hidden="true" />
              <span>Greece & EU • Middle East • Egypt</span>
            </div>
          </div>

          <div className="flex items-center gap-4">
            {[
              { Icon: Linkedin, label: 'LinkedIn', href: '#' },
              { Icon: Twitter, label: 'Twitter / X', href: '#' },
              { Icon: Mail, label: 'Email', href: 'mailto:hello@efikton.com' },
            ].map(({ Icon, label, href }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="transition-colors duration-150 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#B87333] rounded p-1"
                onMouseEnter={(e) => (e.currentTarget.style.color = '#B87333')}
                onMouseLeave={(e) => (e.currentTarget.style.color = '')}
              >
                <Icon className="w-5 h-5" aria-hidden="true" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
