import { ArrowRight, Phone } from 'lucide-react';
import { useInView } from '../hooks/useInView';

export function CTA() {
  const [ref, visible] = useInView<HTMLDivElement>({ threshold: 0.1 });

  return (
    <section
      id="contact"
      className="py-16 md:py-24 lg:py-32"
      style={{ backgroundColor: '#fff', scrollMarginTop: '64px' }}
      aria-labelledby="cta-heading"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Main CTA block */}
        <div
          ref={ref}
          className={`relative overflow-hidden animate-reveal${visible ? ' is-visible' : ''}`}
          style={{ backgroundColor: '#001B3A' }}
        >
          {/* Geometric accent — subtle grid overlay */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              backgroundImage: `
                linear-gradient(rgba(184,115,51,0.04) 1px, transparent 1px),
                linear-gradient(90deg, rgba(184,115,51,0.04) 1px, transparent 1px)
              `,
              backgroundSize: '72px 72px',
            }}
            aria-hidden="true"
          />

          {/* Left copper accent bar */}
          <div
            className="absolute top-0 left-0 bottom-0"
            style={{ width: '3px', backgroundColor: '#B87333' }}
            aria-hidden="true"
          />

          <div className="relative px-8 sm:px-12 lg:px-20 xl:px-24 py-16 md:py-20 lg:py-28 max-w-4xl">
            {/* Eyebrow */}
            <div className="flex items-center gap-3 mb-7 md:mb-8" aria-hidden="true">
              <div style={{ width: '24px', height: '1px', backgroundColor: '#B87333' }} />
              <span
                className="text-xs font-semibold uppercase tracking-widest"
                style={{ color: '#B87333', letterSpacing: '0.15em' }}
              >
                Ready to make the shift?
              </span>
            </div>

            <h2
              id="cta-heading"
              className="font-bold text-white mb-5"
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: 'clamp(1.875rem, 4.5vw, 3.5rem)',
                letterSpacing: '-0.03em',
                lineHeight: 1.05,
              }}
            >
              Stop firefighting.{' '}
              <br className="hidden sm:block" />
              <span style={{ color: '#B87333' }}>Start running the plant.</span>
            </h2>

            <p
              className="mb-8 md:mb-10 text-base"
              style={{ color: 'rgba(255,255,255,0.6)', lineHeight: 1.75, maxWidth: '480px' }}
            >
              See how Efikton turns chaos into control — in your factory. We'll show you the
              method, the system, and exactly how it applies to your operation.
            </p>

            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="mailto:hello@efikton.com"
                className="group inline-flex items-center justify-center gap-2 px-6 md:px-7 py-4 font-semibold text-sm transition-all duration-150 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#B87333] focus-visible:ring-offset-2 focus-visible:ring-offset-[#001B3A]"
                style={{
                  backgroundColor: '#B87333',
                  color: '#fff',
                  letterSpacing: '0.01em',
                  minHeight: '48px',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#9e632c')}
                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#B87333')}
              >
                Book a Demo
                <ArrowRight
                  className="w-4 h-4 transition-transform group-hover:translate-x-0.5"
                  aria-hidden="true"
                />
              </a>
              <a
                href="tel:+302101234567"
                className="inline-flex items-center justify-center gap-2 px-6 md:px-7 py-4 font-semibold text-sm transition-all duration-150 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#001B3A]"
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
                <Phone className="w-4 h-4" aria-hidden="true" />
                Talk to an Expert
              </a>
            </div>

            {/* Market regions */}
            <p
              className="mt-8 md:mt-10 text-xs"
              style={{ color: 'rgba(255,255,255,0.25)', letterSpacing: '0.05em' }}
            >
              Serving manufacturers in{' '}
              <span style={{ color: 'rgba(255,255,255,0.5)' }}>Greece & EU</span>
              {'  ·  '}
              <span style={{ color: 'rgba(255,255,255,0.5)' }}>Middle East</span>
              {'  ·  '}
              <span style={{ color: 'rgba(255,255,255,0.5)' }}>Egypt</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
