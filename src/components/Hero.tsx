import { ArrowRight, ChevronDown } from 'lucide-react';
import { useInView } from '../hooks/useInView';

const stats = [
  { value: '5×', label: 'Profit increase', sub: 'in 2 years' },
  { value: '90%', label: 'Fewer problems', sub: 'sustained' },
  { value: 'OTIF', label: 'On-time delivery', sub: 'within 1 year' },
];

export function Hero() {
  const [contentRef, contentVisible] = useInView<HTMLDivElement>({ threshold: 0.05, once: true });
  const [statsRef, statsVisible] = useInView<HTMLDivElement>({ threshold: 0.1, once: true });

  return (
    <section
      className="relative flex flex-col overflow-hidden"
      style={{ minHeight: '100svh', backgroundColor: '#001B3A' }}
      aria-label="Hero section"
    >
      {/* Geometric pattern — golden ratio grid, CSS only */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(rgba(184,115,51,0.06) 1px, transparent 1px),
            linear-gradient(90deg, rgba(184,115,51,0.06) 1px, transparent 1px),
            linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)
          `,
          backgroundSize: '144px 144px, 144px 144px, 24px 24px, 24px 24px',
        }}
        aria-hidden="true"
      />

      {/* Vertical accent line — left edge, hidden on small screens */}
      <div
        className="absolute top-0 bottom-0 hidden lg:block"
        style={{ left: '8.33%', width: '1px', backgroundColor: 'rgba(184,115,51,0.12)' }}
        aria-hidden="true"
      />

      {/* Content — vertically centered */}
      <div
        ref={contentRef}
        className={`relative flex-1 flex flex-col justify-center max-w-7xl mx-auto w-full px-6 lg:px-8 pt-28 pb-8 animate-reveal${contentVisible ? ' is-visible' : ''}`}
      >
        {/* Eyebrow */}
        <div className="flex items-center gap-3 mb-8 md:mb-10">
          <div
            style={{ width: '32px', height: '1px', backgroundColor: '#B87333' }}
            aria-hidden="true"
          />
          <span
            className="text-xs font-semibold uppercase tracking-widest"
            style={{ color: '#B87333', letterSpacing: '0.15em' }}
          >
            Manufacturing Operating System
          </span>
        </div>

        {/* Headline */}
        <h1
          className="font-bold leading-none mb-6 md:mb-8"
          style={{
            fontFamily: "'Space Grotesk', sans-serif",
            color: '#fff',
            fontSize: 'clamp(2.25rem, 6vw, 5rem)',
            letterSpacing: '-0.03em',
            maxWidth: '820px',
          }}
        >
          Deliver on time.{' '}
          <br className="hidden sm:block" />
          Eliminate problems.{' '}
          <br className="hidden sm:block" />
          <span style={{ color: '#B87333' }}>Protect margin.</span>
        </h1>

        {/* Subheadline */}
        <p
          className="mb-3 font-medium"
          style={{
            color: 'rgba(255,255,255,0.65)',
            fontSize: 'clamp(1rem, 2vw, 1.25rem)',
            lineHeight: 1.65,
            maxWidth: '600px',
          }}
        >
          The manufacturing OS that turns chaos into control — across Materials, Time, Money, and
          Knowledge.
        </p>
        <p
          className="mb-10 md:mb-12"
          style={{
            color: 'rgba(255,255,255,0.4)',
            fontSize: '0.9375rem',
            lineHeight: 1.6,
            maxWidth: '520px',
          }}
        >
          One method. One system. From order to cash, from supplier to shipment.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-3 mb-16 md:mb-20">
          <a
            href="#results"
            className="group inline-flex items-center justify-center gap-2 px-7 py-4 font-semibold text-sm transition-all duration-150 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#B87333] focus-visible:ring-offset-2 focus-visible:ring-offset-[#001B3A]"
            style={{ backgroundColor: '#B87333', color: '#fff', letterSpacing: '0.01em', minHeight: '48px' }}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#9e632c')}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#B87333')}
          >
            See the Results
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center justify-center gap-2 px-7 py-4 font-semibold text-sm transition-all duration-150 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#001B3A]"
            style={{
              border: '1px solid rgba(255,255,255,0.2)',
              color: 'rgba(255,255,255,0.85)',
              letterSpacing: '0.01em',
              minHeight: '48px',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = 'rgba(255,255,255,0.5)';
              e.currentTarget.style.color = '#fff';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = 'rgba(255,255,255,0.2)';
              e.currentTarget.style.color = 'rgba(255,255,255,0.85)';
            }}
          >
            Book a Demo
          </a>
        </div>
      </div>

      {/* Stats bar — pinned to bottom of hero */}
      <div
        ref={statsRef}
        className={`relative w-full animate-reveal-stagger${statsVisible ? ' is-visible' : ''}`}
        style={{ borderTop: '1px solid rgba(255,255,255,0.08)' }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-3">
            {stats.map((stat, i) => (
              <div
                key={i}
                className="flex flex-col items-center py-5 sm:py-6 px-2 sm:px-4"
                style={{ borderRight: i < 2 ? '1px solid rgba(255,255,255,0.08)' : 'none' }}
              >
                <div
                  className="font-bold leading-none mb-1"
                  style={{
                    fontFamily: "'Space Grotesk', sans-serif",
                    color: '#B87333',
                    fontSize: 'clamp(1.5rem, 4vw, 2.5rem)',
                    letterSpacing: '-0.02em',
                  }}
                >
                  {stat.value}
                </div>
                <div
                  className="font-semibold text-center"
                  style={{ color: 'rgba(255,255,255,0.8)', fontSize: 'clamp(0.625rem, 1.5vw, 0.75rem)' }}
                >
                  {stat.label}
                </div>
                <div
                  className="text-center"
                  style={{ color: 'rgba(255,255,255,0.35)', fontSize: 'clamp(0.5625rem, 1.2vw, 0.6875rem)' }}
                >
                  {stat.sub}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className="absolute bottom-28 right-6 lg:right-8 hidden lg:flex flex-col items-center gap-2"
        style={{ opacity: 0.3 }}
        aria-hidden="true"
      >
        <ChevronDown className="w-4 h-4 text-white animate-bounce" />
      </div>
    </section>
  );
}
