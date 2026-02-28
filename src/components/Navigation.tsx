import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { label: 'Solutions', href: '#solutions' },
  { label: 'Method', href: '#method' },
  { label: 'Results', href: '#results' },
  { label: 'Contact', href: '#contact' },
];

export function Navigation() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        backgroundColor: scrolled ? 'rgba(0,27,58,0.92)' : 'transparent',
        backdropFilter: scrolled ? 'blur(12px) saturate(1.4)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(184,115,51,0.15)' : '1px solid transparent',
      }}
      aria-label="Main navigation"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Wordmark */}
          <a
            href="#"
            className="focus:outline-none focus-visible:ring-2 focus-visible:ring-[#B87333]"
            aria-label="Efikton home"
          >
            <span
              className="text-xl font-bold tracking-tight"
              style={{ fontFamily: "'Space Grotesk', sans-serif", color: '#fff', letterSpacing: '-0.02em' }}
            >
              e<span style={{ color: '#B87333' }}>φ</span>ikton
            </span>
          </a>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-sm font-medium transition-colors duration-150 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#B87333]"
                style={{ color: 'rgba(255,255,255,0.65)', letterSpacing: '0.02em' }}
                onMouseEnter={(e) => (e.currentTarget.style.color = '#fff')}
                onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(255,255,255,0.65)')}
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contact"
              className="px-5 py-2 text-sm font-semibold transition-all duration-150 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#B87333]"
              style={{
                backgroundColor: '#B87333',
                color: '#fff',
                letterSpacing: '0.01em',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#9e632c')}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#B87333')}
            >
              Book a Demo
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            className="md:hidden p-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#B87333]"
            style={{ color: '#fff' }}
            onClick={() => setMobileOpen((o) => !o)}
            aria-expanded={mobileOpen}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div
            className="md:hidden py-6 border-t"
            style={{ borderColor: 'rgba(184,115,51,0.15)' }}
          >
            <div className="flex flex-col gap-5">
              {navLinks.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-sm font-medium transition-colors"
                  style={{ color: 'rgba(255,255,255,0.8)', letterSpacing: '0.02em' }}
                  onClick={() => setMobileOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <a
                href="#contact"
                className="mt-2 px-5 py-3 text-sm font-semibold text-center"
                style={{ backgroundColor: '#B87333', color: '#fff' }}
                onClick={() => setMobileOpen(false)}
              >
                Book a Demo
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
