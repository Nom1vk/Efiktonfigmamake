import { ArrowRight, ChevronDown } from 'lucide-react';
import { useEffect, useState } from 'react';

const stats = [
  { value: '5×', label: 'Profit increase', sub: 'in 2 years' },
  { value: '90%', label: 'Fewer problems', sub: 'ongoing, sustained' },
  { value: 'OTIF', label: 'On-Time In-Full', sub: 'within 1 year' },
];

export function Hero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const t = requestAnimationFrame(() => setMounted(true));
    return () => cancelAnimationFrame(t);
  }, []);

  return (
    <section
      className={`ef-hero-section relative flex flex-col${mounted ? ' is-mounted' : ''}`}
      style={{ minHeight: '100svh', backgroundColor: 'var(--ef-navy)' }}
      aria-label="Hero section"
    >
      {/* Subtle noise texture overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.04'/%3E%3C/svg%3E")`,
          opacity: 0.5,
        }}
        aria-hidden="true"
      />

      {/* φ — floating ambient symbol */}
      <div
        className="phi-ambient absolute pointer-events-none select-none hidden lg:flex items-center justify-center"
        style={{
          right: '8%',
          top: '50%',
          fontSize: '320px',
          fontWeight: 800,
          color: 'rgba(193, 127, 62, 0.045)',
          lineHeight: 1,
          letterSpacing: '-0.05em',
          userSelect: 'none',
        }}
        aria-hidden="true"
      >
        φ
      </div>

      {/* Vertical copper accent rule */}
      <div
        className="ef-hero-vert-rule absolute pointer-events-none hidden lg:block"
        style={{
          right: '0',
          top: '0',
          bottom: '0',
          width: '1px',
          background: `linear-gradient(to bottom, transparent 0%, rgba(193,127,62,0.2) 30%, rgba(193,127,62,0.08) 70%, transparent 100%)`,
        }}
        aria-hidden="true"
      />

      {/* Main content */}
      <div
        className="relative flex-1 flex flex-col justify-center w-full px-6 lg:px-10 pt-28 pb-0"
        style={{ maxWidth: '1200px', margin: '0 auto' }}
      >
        {/* Headline */}
        <h1
          className="ef-hero-item"
          data-delay="1"
          style={{
            color: 'var(--ef-text-primary)',
            fontSize: 'clamp(2.5rem, 6.5vw, 5rem)',
            fontWeight: 800,
            letterSpacing: '-0.03em',
            lineHeight: 1.05,
            maxWidth: '800px',
            marginBottom: '28px',
          }}
        >
          Deliver on time.{' '}
          <br />
          <span style={{ color: 'var(--ef-copper)' }}>Eliminate</span> problems.
          <br />
          Protect margin.
        </h1>

        {/* Subhead */}
        <p
          className="ef-hero-item"
          data-delay="3"
          style={{
            color: 'var(--ef-text-secondary)',
            fontSize: 'clamp(1rem, 1.8vw, 1.2rem)',
            lineHeight: 1.7,
            maxWidth: '520px',
            marginBottom: '40px',
            fontWeight: 400,
          }}
        >
          The manufacturing OS that turns chaos into control. Across Materials, Time, Money, and
          Knowledge. One method. One system.
        </p>

        {/* Named social proof */}
        <div
          className="ef-hero-item"
          data-delay="4"
          style={{ marginTop: '-8px', marginBottom: '32px', maxWidth: '520px' }}
        >
          <blockquote
            style={{
              margin: 0,
              padding: 0,
              borderLeft: '2px solid rgba(193,127,62,0.5)',
              paddingLeft: '16px',
            }}
          >
            <p
              style={{
                color: 'var(--ef-text-secondary)',
                fontSize: 'clamp(0.875rem, 1.4vw, 0.9375rem)',
                fontStyle: 'italic',
                lineHeight: 1.65,
                marginBottom: '6px',
                fontWeight: 400,
              }}
            >
              "We went from missing 30% of deliveries to 97% OTIF in 11 months.{' '}
              I wish we had started five years earlier."
            </p>
            <cite
              style={{
                display: 'block',
                fontSize: '11px',
                fontWeight: 600,
                color: 'var(--ef-copper)',
                fontStyle: 'normal',
                letterSpacing: '0.06em',
                textTransform: 'uppercase',
              }}
            >
              Giorgos K.
              <span style={{ color: 'rgba(139,134,128,0.6)', fontWeight: 400, letterSpacing: '0.03em' }}>
                {' '}· Auto Parts Manufacturer, Thessaloniki
              </span>
            </cite>
          </blockquote>
        </div>

        {/* CTAs — hover/focus handled by CSS classes; no JS event handlers */}
        <div className="ef-hero-item flex flex-wrap gap-3 pl-0" data-delay="5" style={{ marginLeft: 0 }}>
          <a href="#contact" className="ef-cta-primary group" style={{ whiteSpace: 'nowrap', minWidth: 0 }}>
            <span style={{ whiteSpace: 'nowrap' }}>Book a Demo</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 flex-shrink-0" aria-hidden="true" />
          </a>
          <a href="#results" className="ef-cta-secondary" style={{ whiteSpace: 'nowrap', minWidth: 0 }}>
            See Results →
          </a>
        </div>

        {/* Scroll indicator */}
        <div
          className="ef-scroll-indicator hidden md:flex items-center gap-2 mt-16"
          aria-hidden="true"
        >
          <div
            style={{
              width: '1px',
              height: '32px',
              background: 'linear-gradient(to bottom, transparent, rgba(193,127,62,0.6))',
            }}
          />
          <ChevronDown
            className="w-3.5 h-3.5 scroll-bounce"
            style={{ color: 'var(--ef-copper)' }}
          />
        </div>
      </div>

      {/* Stats bar */}
      <div
        className="ef-stats-bar"
        style={{ borderTop: '1px solid rgba(193, 127, 62, 0.15)', marginTop: '80px' }}
        aria-label="Key proof metrics"
        role="region"
      >
        <div
          className="grid grid-cols-3 w-full"
          style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1.5rem' }}
        >
          {stats.map((stat, i) => (
            <div
              key={i}
              className="flex flex-col items-center py-6 sm:py-8 px-2"
              style={{
                borderRight: i < 2 ? '1px solid rgba(193, 127, 62, 0.12)' : 'none',
              }}
              role="figure"
              aria-label={`${stat.value}: ${stat.label}`}
            >
              <div className="ef-stat-value" aria-hidden="true">
                {stat.value}
              </div>
              <div
                style={{
                  color: 'var(--ef-text-primary)',
                  fontSize: 'clamp(9px, 1.5vw, 12px)',
                  fontWeight: 600,
                  letterSpacing: '0.03em',
                  textTransform: 'uppercase',
                  marginBottom: '2px',
                  textAlign: 'center',
                }}
                aria-hidden="true"
              >
                {stat.label}
              </div>
              <div
                style={{
                  color: 'var(--ef-text-secondary)',
                  fontSize: 'clamp(9px, 1.2vw, 11px)',
                  textAlign: 'center',
                }}
                aria-hidden="true"
              >
                {stat.sub}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
