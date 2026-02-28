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

  const fade = (delay = 0) => ({
    opacity: mounted ? 1 : 0,
    transform: mounted ? 'none' : 'translateY(20px)',
    transition: `opacity 0.75s cubic-bezier(0.22, 1, 0.36, 1) ${delay}s, transform 0.75s cubic-bezier(0.22, 1, 0.36, 1) ${delay}s`,
  });

  return (
    <section
      className="relative flex flex-col"
      style={{ minHeight: '100svh', backgroundColor: '#0A1628' }}
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

      {/* φ — floating ambient symbol with subtle drift */}
      <div
        className="absolute pointer-events-none select-none hidden lg:flex items-center justify-center phi-ambient"
        style={{
          right: '8%',
          top: '50%',
          transform: 'translateY(-50%)',
          fontSize: '320px',
          fontWeight: 800,
          color: 'rgba(184, 115, 51, 0.045)',
          lineHeight: 1,
          letterSpacing: '-0.05em',
          fontFamily: "'Space Grotesk', serif",
          userSelect: 'none',
          opacity: mounted ? 1 : 0,
          transition: 'opacity 2s ease 0.5s',
        }}
        aria-hidden="true"
      >
        φ
      </div>

      {/* Geometric accent — diagonal copper rule */}
      <div
        className="absolute pointer-events-none hidden lg:block"
        style={{
          right: '0',
          top: '0',
          bottom: '0',
          width: '1px',
          background: `linear-gradient(to bottom, transparent 0%, rgba(193,127,62,0.2) 30%, rgba(193,127,62,0.08) 70%, transparent 100%)`,
          opacity: mounted ? 1 : 0,
          transition: 'opacity 1.5s ease 0.8s',
        }}
        aria-hidden="true"
      />

      {/* Main content */}
      <div
        className="relative flex-1 flex flex-col justify-center w-full px-6 lg:px-10 pt-28 pb-0"
        style={{ maxWidth: '1200px', margin: '0 auto' }}
      >
        {/* Eyebrow */}
        <div
          className="flex items-center gap-3 mb-8"
          style={fade(0.05)}
        >
          <div style={{ width: '28px', height: '1px', backgroundColor: '#B87333' }} aria-hidden="true" />
          <span
            style={{
              color: '#B87333',
              fontSize: '11px',
              fontWeight: 600,
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
            }}
          >
            Manufacturing Operating System
          </span>
        </div>

        {/* Headline */}
        <h1
          style={{
            ...fade(0.12),
            color: '#E8E4DF',
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
          <span style={{ color: '#B87333' }}>Eliminate</span> problems.
          <br />
          Protect margin.
        </h1>

        {/* Subhead */}
        <p
          style={{
            ...fade(0.22),
            color: '#8B8680',
            fontSize: 'clamp(1rem, 1.8vw, 1.2rem)',
            lineHeight: 1.7,
            maxWidth: '520px',
            marginBottom: '40px',
            fontWeight: 400,
          }}
        >
          The manufacturing OS that turns chaos into control — across Materials, Time, Money, and
          Knowledge. One method. One system.
        </p>

        {/* CTAs */}
        <div
          className="flex flex-col sm:flex-row gap-3"
          style={fade(0.3)}
        >
          <a
            href="#contact"
            className="group inline-flex items-center justify-center gap-2"
            style={{
              backgroundColor: '#B87333',
              color: '#ffffff',
              padding: '14px 28px',
              fontSize: '14px',
              fontWeight: 600,
              letterSpacing: '0.01em',
              minHeight: '48px',
              transition: 'background-color 0.15s ease',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#CA8A4B')}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#B87333')}
          >
            Book a Demo
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
          </a>
          <a
            href="#results"
            className="inline-flex items-center justify-center gap-2"
            style={{
              color: '#E8E4DF',
              padding: '14px 28px',
              fontSize: '14px',
              fontWeight: 500,
              letterSpacing: '0.01em',
              minHeight: '48px',
              opacity: 0.7,
              transition: 'opacity 0.15s ease',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.opacity = '1')}
            onMouseLeave={(e) => (e.currentTarget.style.opacity = '0.7')}
          >
            See Results →
          </a>
        </div>
        {/* Scroll indicator */}
        <div
          className="hidden md:flex items-center gap-2 mt-16"
          style={{
            opacity: mounted ? 0.35 : 0,
            transition: `opacity 0.75s cubic-bezier(0.22, 1, 0.36, 1) 0.6s`,
          }}
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
            style={{ color: '#B87333' }}
          />
        </div>
      </div>

      {/* Stats bar */}
      <div
        style={{
          borderTop: '1px solid rgba(184, 115, 51, 0.15)',
          marginTop: '80px',
          ...fade(0.45),
        }}
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
                borderRight: i < 2 ? '1px solid rgba(184, 115, 51, 0.12)' : 'none',
              }}
              role="figure"
              aria-label={`${stat.value} — ${stat.label}`}
            >
              <div
                style={{
                  color: '#B87333',
                  fontSize: 'clamp(1.5rem, 4vw, 2.75rem)',
                  fontWeight: 700,
                  letterSpacing: '-0.03em',
                  lineHeight: 1,
                  marginBottom: '6px',
                  fontFamily: "'Space Grotesk', 'Inter', sans-serif",
                  fontVariantNumeric: 'tabular-nums',
                }}
                aria-hidden="true"
              >
                {stat.value}
              </div>
              <div
                style={{
                  color: '#E8E4DF',
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
                  color: '#8B8680',
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
