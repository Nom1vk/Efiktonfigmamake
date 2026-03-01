import { useState, useEffect, useRef } from 'react';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { label: 'The Method', href: '#solutions' },
  { label: 'System', href: '#method' },
  { label: 'Results', href: '#results' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
];

export function Navigation() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [phiRotation, setPhiRotation] = useState(0);
  const rafRef = useRef<number | null>(null);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);

      // Throttle phi rotation to rAF
      if (rafRef.current) return;
      rafRef.current = requestAnimationFrame(() => {
        rafRef.current = null;
        const scrollY = window.scrollY;
        // 1 degree per 100px scroll
        setPhiRotation(scrollY / 100);
        lastScrollY.current = scrollY;
      });
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', onScroll);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 768) setMobileOpen(false);
    };
    window.addEventListener('resize', onResize, { passive: true });
    return () => window.removeEventListener('resize', onResize);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        backgroundColor: scrolled
          ? 'rgba(10, 22, 40, 0.95)'
          : mobileOpen
          ? 'rgba(10, 22, 40, 0.98)'
          : 'transparent',
        backdropFilter: scrolled || mobileOpen ? 'blur(16px) saturate(1.5)' : 'none',
        borderBottom: scrolled || mobileOpen
          ? '1px solid rgba(184, 115, 51, 0.12)'
          : '1px solid transparent',
      }}
      aria-label="Main navigation"
    >
      <div
        className="flex justify-between items-center h-16 px-6 lg:px-10"
        style={{ maxWidth: '1200px', margin: '0 auto' }}
      >
        {/* Wordmark */}
        <a
          href="#"
          className="focus:outline-none"
          aria-label="eφikton — go to top of page"
          style={{ display: 'flex', flexDirection: 'column', gap: '1px', lineHeight: 1 }}
        >
          <span
            style={{
              fontSize: '20px',
              fontWeight: 800,
              letterSpacing: '-0.03em',
              color: 'var(--ef-text-primary)',
            }}
          >
            e<span
              style={{
                color: 'var(--ef-copper)',
                display: 'inline-block',
                transform: `rotate(${phiRotation}deg)`,
                transition: 'transform 0.05s linear',
                willChange: 'transform',
              }}
              aria-hidden="true"
            >φ</span>ikton
          </span>
          <span
            style={{
              fontSize: '8px',
              fontWeight: 600,
              letterSpacing: '0.18em',
              color: 'rgba(193, 127, 62, 0.7)',
              textTransform: 'uppercase',
              fontVariant: 'small-caps',
            }}
          >
            Manufacturing Operating System
          </span>
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="ef-nav-link text-sm transition-colors duration-150"
              style={{ color: 'rgba(232, 228, 223, 0.55)', fontWeight: 500, letterSpacing: '0.01em' }}
              onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--ef-text-primary)')}
              onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(232, 228, 223, 0.55)')}
            >
              {item.label}
            </a>
          ))}
          <a
            href="#contact"
            className="ef-cta-btn text-sm font-semibold"
            style={{
              backgroundColor: 'var(--ef-copper)',
              color: '#ffffff',
              padding: '9px 20px',
              letterSpacing: '0.01em',
              minHeight: '38px',
              display: 'inline-flex',
              alignItems: 'center',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = 'var(--ef-copper-light)')}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'var(--ef-copper)')}
          >
            Book a Demo
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden p-2"
          style={{ color: 'var(--ef-text-primary)', minWidth: '44px', minHeight: '44px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
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
        <div
          style={{
            borderTop: '1px solid rgba(184, 115, 51, 0.12)',
            padding: '24px 24px',
          }}
        >
          <ul className="flex flex-col gap-1">
            {navLinks.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  className="flex items-center py-3 text-base font-medium transition-colors"
                  style={{ color: 'rgba(232, 228, 223, 0.75)', minHeight: '48px', letterSpacing: '0.01em' }}
                  onClick={() => setMobileOpen(false)}
                  tabIndex={mobileOpen ? 0 : -1}
                  onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--ef-text-primary)')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(232, 228, 223, 0.75)')}
                >
                  {item.label}
                </a>
              </li>
            ))}
            <li className="mt-3">
              <a
                href="#contact"
                className="ef-cta-btn flex items-center justify-center text-sm font-semibold"
                style={{ backgroundColor: 'var(--ef-copper)', color: '#fff', minHeight: '48px' }}
                onClick={() => setMobileOpen(false)}
                tabIndex={mobileOpen ? 0 : -1}
                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = 'var(--ef-copper-light)')}
                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'var(--ef-copper)')}
              >
                Book a Demo
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
