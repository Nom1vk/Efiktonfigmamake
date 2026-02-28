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

  // Close menu on resize to desktop
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 768) setMobileOpen(false);
    };
    window.addEventListener('resize', onResize, { passive: true });
    return () => window.removeEventListener('resize', onResize);
  }, []);

  // Prevent body scroll when mobile menu open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        backgroundColor: scrolled
          ? 'rgba(0,27,58,0.94)'
          : mobileOpen
          ? 'rgba(0,27,58,0.98)'
          : 'transparent',
        backdropFilter: scrolled || mobileOpen ? 'blur(12px) saturate(1.4)' : 'none',
        borderBottom:
          scrolled || mobileOpen
            ? '1px solid rgba(184,115,51,0.15)'
            : '1px solid transparent',
      }}
      aria-label="Main navigation"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Wordmark */}
          <a
            href="#"
            className="focus:outline-none focus-visible:ring-2 focus-visible:ring-[#B87333] focus-visible:ring-offset-2 focus-visible:ring-offset-[#001B3A] rounded"
            aria-label="Efikton — go to top of page"
          >
            <span
              className="text-xl font-bold tracking-tight"
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                color: '#fff',
                letterSpacing: '-0.02em',
              }}
            >
              e<span style={{ color: '#B87333' }}>φ</span>ikton
            </span>
          </a>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-8" role="list">
            {navLinks.map((item) => (
              <a
                key={item.label}
                href={item.href}
                role="listitem"
                className="text-sm font-medium transition-colors duration-150 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#B87333] rounded px-1"
                style={{ color: 'rgba(255,255,255,0.65)', letterSpacing: '0.02em' }}
                onMouseEnter={(e) => (e.currentTarget.style.color = '#fff')}
                onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(255,255,255,0.65)')}
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contact"
              className="px-5 py-2.5 text-sm font-semibold transition-all duration-150 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#B87333] focus-visible:ring-offset-2 focus-visible:ring-offset-[#001B3A]"
              style={{
                backgroundColor: '#B87333',
                color: '#fff',
                letterSpacing: '0.01em',
                minHeight: '40px',
                display: 'inline-flex',
                alignItems: 'center',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#9e632c')}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#B87333')}
            >
              Book a Demo
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            className="md:hidden p-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#B87333] rounded"
            style={{ color: '#fff', minWidth: '44px', minHeight: '44px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
            onClick={() => setMobileOpen((o) => !o)}
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
            aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile menu */}
        <div
          id="mobile-menu"
          className="md:hidden"
          style={{
            maxHeight: mobileOpen ? '400px' : '0',
            overflow: 'hidden',
            transition: 'max-height 0.3s cubic-bezier(0.22, 1, 0.36, 1)',
          }}
          aria-hidden={!mobileOpen}
        >
          <nav
            className="py-6 border-t"
            style={{ borderColor: 'rgba(184,115,51,0.15)' }}
            aria-label="Mobile navigation"
          >
            <ul className="flex flex-col gap-1">
              {navLinks.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="flex items-center py-3 px-2 text-base font-medium transition-colors rounded focus:outline-none focus-visible:ring-2 focus-visible:ring-[#B87333]"
                    style={{ color: 'rgba(255,255,255,0.8)', letterSpacing: '0.02em', minHeight: '48px' }}
                    onClick={() => setMobileOpen(false)}
                    tabIndex={mobileOpen ? 0 : -1}
                    onMouseEnter={(e) => (e.currentTarget.style.color = '#fff')}
                    onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(255,255,255,0.8)')}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
              <li className="mt-3">
                <a
                  href="#contact"
                  className="flex items-center justify-center py-3.5 text-sm font-semibold transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#B87333]"
                  style={{ backgroundColor: '#B87333', color: '#fff', minHeight: '48px' }}
                  onClick={() => setMobileOpen(false)}
                  tabIndex={mobileOpen ? 0 : -1}
                  onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#9e632c')}
                  onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#B87333')}
                >
                  Book a Demo
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </nav>
  );
}
