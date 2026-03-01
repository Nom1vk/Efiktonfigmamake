import { Linkedin, Twitter, Mail } from 'lucide-react';
import { useInView } from '../hooks/useInView';

const links = {
  Platform: [
    { label: 'Materials', href: '#solutions' },
    { label: 'Time & Scheduling', href: '#solutions' },
    { label: 'Cost & Margin', href: '#solutions' },
    { label: 'Knowledge & Quality', href: '#solutions' },
  ],
  Company: [
    { label: 'About', href: '#about' },
    { label: 'The Method', href: '#method' },
    { label: 'Results', href: '#results' },
    { label: 'Contact', href: '#contact' },
  ],
};

export function Footer() {
  const [footerRef, footerVisible] = useInView<HTMLDivElement>({ threshold: 0.1 });

  return (
    <footer
      style={{ backgroundColor: '#080E1A' }}
      aria-label="Site footer"
    >
      <div
        ref={footerRef}
        className={`px-6 lg:px-10 animate-reveal${footerVisible ? ' is-visible' : ''}`}
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          paddingTop: '64px',
          paddingBottom: '48px',
          borderTop: '1px solid rgba(184, 115, 51, 0.1)',
        }}
      >
        {/* Responsive grid: stacked on mobile, 3-col on md+ */}
        <div
          className="grid grid-cols-1 md:grid-cols-3"
          style={{ gap: '48px', marginBottom: '56px' }}
        >
          {/* Brand */}
          <div className="md:col-span-1">
            <a
              href="#"
              style={{ display: 'inline-block', marginBottom: '20px' }}
              aria-label="eφikton home"
            >
              <span
                style={{
                  fontSize: '22px',
                  fontWeight: 800,
                  letterSpacing: '-0.03em',
                  color: 'var(--ef-text-primary)',
                }}
              >
                e<span style={{ color: 'var(--ef-copper)' }}>φ</span>ikton
              </span>
            </a>
            <p
              style={{
                fontSize: '14px',
                color: 'rgba(139, 134, 128, 0.8)',
                lineHeight: 1.75,
                maxWidth: '280px',
                marginBottom: '24px',
              }}
            >
              The manufacturing operating system. Materials, Time, Money, and Knowledge. Managed as one.
            </p>
            <div
              style={{
                fontSize: '11px',
                fontWeight: 600,
                color: 'var(--ef-copper)',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
              }}
            >
              Εφικτόν. Achievable.
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(links).map(([heading, items]) => (
            <div key={heading}>
              <h3
                style={{
                  fontSize: '11px',
                  fontWeight: 600,
                  color: 'rgba(232, 228, 223, 0.4)',
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  marginBottom: '20px',
                }}
              >
                {heading}
              </h3>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                {items.map((item) => (
                  <li key={item.label} style={{ marginBottom: '12px' }}>
                    <a
                      href={item.href}
                      style={{
                        fontSize: '14px',
                        color: 'rgba(139, 134, 128, 0.8)',
                        textDecoration: 'none',
                        transition: 'color 0.15s ease',
                        display: 'inline-block',
                        minHeight: '24px',
                      }}
                      onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--ef-text-primary)')}
                      onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(139, 134, 128, 0.8)')}
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
          className="flex flex-col sm:flex-row sm:items-center sm:justify-between"
          style={{
            paddingTop: '32px',
            borderTop: '1px solid rgba(255, 255, 255, 0.05)',
            gap: '16px',
          }}
        >
          <p style={{ fontSize: '12px', color: 'rgba(139, 134, 128, 0.5)' }}>
            © 2026 Efikton. All rights reserved.{' '}
            <span style={{ color: 'rgba(139, 134, 128, 0.3)' }}>
              · Europe · Middle East & Africa · Global
            </span>
          </p>

          <div className="flex items-center gap-5">
            {[
              { Icon: Linkedin, label: 'LinkedIn', href: 'https://linkedin.com/company/efikton' },
              { Icon: Twitter, label: 'X / Twitter', href: 'https://x.com/efikton' },
              { Icon: Mail, label: 'Email Efikton', href: 'mailto:hello@efikton.com' },
            ].map(({ Icon, label, href }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                style={{
                  color: 'rgba(139, 134, 128, 0.4)',
                  transition: 'color 0.15s ease',
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  minWidth: '44px',
                  minHeight: '44px',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--ef-copper)')}
                onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(139, 134, 128, 0.4)')}
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
