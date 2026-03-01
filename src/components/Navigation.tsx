import { useState, useEffect, useRef } from 'react';
import { useParams, useNavigate, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';

const caseStudies = [
  { label: 'Thermotech Hellas', href: 'case-study' },
  // Add future case studies here
];

export function Navigation() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [csOpen, setCsOpen] = useState(false);
  const [phiRotation, setPhiRotation] = useState(0);
  const rafRef = useRef<number | null>(null);
  const csRef = useRef<HTMLDivElement>(null);
  const { paletteId = '1' } = useParams();
  const navigate = useNavigate();
  const location = useLocation();

  const basePath = `/${paletteId}/`;
  const isOnMain = location.pathname === basePath || location.pathname === `/${paletteId}`;

  // Navigate to anchor — works from any page
  const goToAnchor = (hash: string) => {
    setMobileOpen(false);
    setCsOpen(false);
    if (isOnMain) {
      const el = document.querySelector(hash);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    } else {
      navigate(basePath);
      // Wait for page to render, then scroll
      setTimeout(() => {
        const el = document.querySelector(hash);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  };

  const goToHome = () => {
    setMobileOpen(false);
    setCsOpen(false);
    if (isOnMain) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      navigate(basePath);
    }
  };

  const goToCaseStudy = (slug: string) => {
    setMobileOpen(false);
    setCsOpen(false);
    navigate(`/${paletteId}/${slug}`);
  };

  // Close dropdown on outside click
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (csRef.current && !csRef.current.contains(e.target as Node)) setCsOpen(false);
    };
    document.addEventListener('click', onClick);
    return () => document.removeEventListener('click', onClick);
  }, []);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
      if (rafRef.current) return;
      rafRef.current = requestAnimationFrame(() => {
        rafRef.current = null;
        setPhiRotation(window.scrollY / 100);
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

  const navLinks = [
    { label: 'The Method', action: () => goToAnchor('#solutions') },
    { label: 'System', action: () => goToAnchor('#method') },
    { label: 'Results', action: () => goToAnchor('#results') },
    { label: 'About', action: () => goToAnchor('#about') },
    { label: 'Contact', action: () => goToAnchor('#contact') },
  ];

  const linkStyle = { color: 'rgba(232, 228, 223, 0.55)', fontWeight: 500, letterSpacing: '0.01em' } as const;

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
        <button
          onClick={goToHome}
          className="focus-visible:ring-2 focus-visible:ring-[var(--ef-copper)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--ef-navy)] outline-none rounded-sm px-1"
          aria-label="eφikton — go to homepage"
          style={{ display: 'flex', flexDirection: 'column', gap: '1px', lineHeight: 1, background: 'none', border: 'none', cursor: 'pointer' }}
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
        </button>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((item) => (
            <button
              key={item.label}
              onClick={item.action}
              className="ef-nav-link text-sm transition-colors duration-150 focus-visible:ring-2 focus-visible:ring-[var(--ef-copper)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--ef-navy)] outline-none rounded-sm px-1"
              style={{ ...linkStyle, background: 'none', border: 'none', cursor: 'pointer' }}
              onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--ef-text-primary)')}
              onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(232, 228, 223, 0.55)')}
            >
              {item.label}
            </button>
          ))}

          {/* Case Studies dropdown */}
          <div ref={csRef} className="relative">
            <button
              onClick={() => setCsOpen((o) => !o)}
              className="ef-nav-link text-sm transition-colors duration-150 focus-visible:ring-2 focus-visible:ring-[var(--ef-copper)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--ef-navy)] outline-none rounded-sm px-1 flex items-center gap-1"
              style={{ ...linkStyle, background: 'none', border: 'none', cursor: 'pointer' }}
              onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--ef-text-primary)')}
              onMouseLeave={(e) => { if (!csOpen) e.currentTarget.style.color = 'rgba(232, 228, 223, 0.55)'; }}
              aria-expanded={csOpen}
              aria-haspopup="true"
            >
              Case Studies
              <ChevronDown
                className="w-3 h-3 transition-transform duration-200"
                style={{ transform: csOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}
              />
            </button>
            {csOpen && (
              <div
                className="absolute top-full mt-2 py-2"
                style={{
                  left: '50%',
                  transform: 'translateX(-50%)',
                  minWidth: '200px',
                  backgroundColor: 'rgba(10, 22, 40, 0.96)',
                  backdropFilter: 'blur(16px)',
                  border: '1px solid rgba(184, 115, 51, 0.15)',
                }}
              >
                {caseStudies.map((cs) => (
                  <button
                    key={cs.href}
                    onClick={() => goToCaseStudy(cs.href)}
                    className="w-full text-left px-4 py-2 text-sm transition-colors duration-150"
                    style={{ color: 'rgba(232, 228, 223, 0.7)', background: 'none', border: 'none', cursor: 'pointer', display: 'block' }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = 'var(--ef-text-primary)';
                      e.currentTarget.style.backgroundColor = 'rgba(193, 127, 62, 0.08)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = 'rgba(232, 228, 223, 0.7)';
                      e.currentTarget.style.backgroundColor = 'transparent';
                    }}
                  >
                    {cs.label}
                  </button>
                ))}
              </div>
            )}
          </div>

          <button
            onClick={() => goToAnchor('#contact')}
            className="ef-cta-btn text-sm font-semibold focus-visible:ring-2 focus-visible:ring-[var(--ef-copper-light)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--ef-navy)] outline-none"
            style={{
              backgroundColor: 'var(--ef-copper)',
              color: '#fff',
              padding: '9px 20px',
              letterSpacing: '0.01em',
              minHeight: '38px',
              display: 'inline-flex',
              alignItems: 'center',
              borderRadius: '2px',
              border: 'none',
              cursor: 'pointer',
              transition: 'background-color 0.15s ease, box-shadow 0.15s ease',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = 'var(--ef-copper-light)')}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'var(--ef-copper)')}
          >
            Book a Demo
          </button>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden p-2 touch-manipulation active:scale-95"
          style={{
            color: 'var(--ef-text-primary)',
            minWidth: '48px',
            minHeight: '48px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            transition: 'transform 0.1s ease, opacity 0.15s ease',
            background: 'none',
            border: 'none',
          }}
          onClick={() => setMobileOpen((o) => !o)}
          onTouchStart={(e) => (e.currentTarget.style.opacity = '0.7')}
          onTouchEnd={(e) => (e.currentTarget.style.opacity = '1')}
          aria-expanded={mobileOpen}
          aria-controls="mobile-menu"
          aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        id="mobile-menu"
        className="md:hidden"
        style={{
          maxHeight: mobileOpen ? '500px' : '0',
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
                <button
                  onClick={item.action}
                  className="flex items-center w-full py-3 text-base font-medium touch-manipulation active:translate-x-1"
                  style={{
                    color: 'rgba(232, 228, 223, 0.75)',
                    minHeight: '52px',
                    letterSpacing: '0.01em',
                    transition: 'color 0.2s ease, transform 0.15s ease, background-color 0.2s ease',
                    paddingLeft: '12px',
                    paddingRight: '12px',
                    marginLeft: '-12px',
                    marginRight: '-12px',
                    borderRadius: '4px',
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    textAlign: 'left',
                  }}
                  tabIndex={mobileOpen ? 0 : -1}
                  onTouchStart={(e) => {
                    e.currentTarget.style.color = 'var(--ef-text-primary)';
                    e.currentTarget.style.backgroundColor = 'rgba(193, 127, 62, 0.08)';
                  }}
                  onTouchEnd={(e) => {
                    e.currentTarget.style.color = 'rgba(232, 228, 223, 0.75)';
                    e.currentTarget.style.backgroundColor = 'transparent';
                  }}
                >
                  {item.label}
                </button>
              </li>
            ))}

            {/* Case Studies — expandable in mobile */}
            <li>
              <button
                onClick={() => setCsOpen((o) => !o)}
                className="flex items-center justify-between w-full py-3 text-base font-medium touch-manipulation"
                style={{
                  color: 'rgba(232, 228, 223, 0.75)',
                  minHeight: '52px',
                  letterSpacing: '0.01em',
                  paddingLeft: '12px',
                  paddingRight: '12px',
                  marginLeft: '-12px',
                  marginRight: '-12px',
                  borderRadius: '4px',
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  textAlign: 'left',
                  transition: 'color 0.2s ease',
                }}
                tabIndex={mobileOpen ? 0 : -1}
                aria-expanded={csOpen}
              >
                Case Studies
                <ChevronDown
                  className="w-4 h-4 transition-transform duration-200"
                  style={{ transform: csOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}
                />
              </button>
              {csOpen && (
                <ul className="pl-6 flex flex-col gap-1">
                  {caseStudies.map((cs) => (
                    <li key={cs.href}>
                      <button
                        onClick={() => goToCaseStudy(cs.href)}
                        className="flex items-center w-full py-2 text-sm touch-manipulation"
                        style={{
                          color: 'rgba(193, 127, 62, 0.8)',
                          minHeight: '44px',
                          background: 'none',
                          border: 'none',
                          cursor: 'pointer',
                          textAlign: 'left',
                          transition: 'color 0.2s ease',
                        }}
                        tabIndex={mobileOpen ? 0 : -1}
                        onTouchStart={(e) => (e.currentTarget.style.color = 'var(--ef-copper)')}
                        onTouchEnd={(e) => (e.currentTarget.style.color = 'rgba(193, 127, 62, 0.8)')}
                      >
                        {cs.label}
                      </button>
                    </li>
                  ))}
                </ul>
              )}
            </li>

            <li className="mt-4">
              <button
                onClick={() => goToAnchor('#contact')}
                className="ef-cta-btn flex items-center justify-center w-full text-sm font-semibold touch-manipulation active:scale-98 focus-visible:ring-2 focus-visible:ring-[var(--ef-copper-light)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--ef-navy)] outline-none"
                style={{
                  backgroundColor: 'var(--ef-copper)',
                  color: '#fff',
                  minHeight: '52px',
                  transition: 'background-color 0.2s ease, transform 0.15s ease, box-shadow 0.15s ease',
                  borderRadius: '2px',
                  border: 'none',
                  cursor: 'pointer',
                }}
                tabIndex={mobileOpen ? 0 : -1}
                onTouchStart={(e) => (e.currentTarget.style.backgroundColor = 'var(--ef-copper-light)')}
                onTouchEnd={(e) => (e.currentTarget.style.backgroundColor = 'var(--ef-copper)')}
              >
                Book a Demo
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
