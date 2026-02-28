import { ArrowRight } from 'lucide-react';
import { useInView } from '../hooks/useInView';

export function CTA() {
  const [ref, visible] = useInView<HTMLDivElement>({ threshold: 0.1 });

  return (
    <section
      id="contact"
      style={{ backgroundColor: '#0A1628', scrollMarginTop: '64px' }}
      aria-labelledby="cta-heading"
    >
      <div
        ref={ref}
        className={`w-full px-6 lg:px-10 animate-reveal${visible ? ' is-visible' : ''}`}
        style={{ maxWidth: '1200px', margin: '0 auto', paddingTop: '128px', paddingBottom: '128px' }}
      >
        {/* Eyebrow */}
        <div className="flex items-center gap-3 mb-10">
          <div style={{ width: '28px', height: '1px', backgroundColor: '#C17F3E' }} aria-hidden="true" />
          <span style={{ color: '#C17F3E', fontSize: '11px', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase' }}>
            Ready to make the shift?
          </span>
        </div>

        <div
          className="flex flex-col gap-16 lg:grid lg:gap-20"
          style={{
            gridTemplateColumns: '1fr auto',
            alignItems: 'end',
          }}
        >
          <div>
            <h2
              id="cta-heading"
              style={{
                color: '#E8E4DF',
                fontSize: 'clamp(2rem, 5vw, 4rem)',
                fontWeight: 800,
                letterSpacing: '-0.03em',
                lineHeight: 1.05,
                maxWidth: '680px',
                marginBottom: '24px',
              }}
            >
              Stop firefighting.{' '}
              <br className="hidden sm:block" />
              <span style={{ color: '#C17F3E' }}>Start running the plant.</span>
            </h2>
            <p
              style={{
                color: '#8B8680',
                fontSize: '1.0625rem',
                lineHeight: 1.75,
                maxWidth: '440px',
                marginBottom: '48px',
              }}
            >
              See how Efikton applies to your factory — your operation, your numbers, your complexity.
              We'll show you the method and where you'll win first.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="mailto:hello@efikton.com"
                className="group inline-flex items-center justify-center gap-2"
                style={{
                  backgroundColor: '#C17F3E',
                  color: '#ffffff',
                  padding: '16px 32px',
                  fontSize: '15px',
                  fontWeight: 600,
                  letterSpacing: '0.01em',
                  minHeight: '52px',
                  transition: 'background-color 0.15s ease',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#D4A574')}
                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#C17F3E')}
              >
                Book a Demo
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
              </a>
              <a
                href="tel:+302101234567"
                className="inline-flex items-center justify-center gap-2"
                style={{
                  color: '#E8E4DF',
                  padding: '16px 32px',
                  fontSize: '15px',
                  fontWeight: 500,
                  letterSpacing: '0.01em',
                  minHeight: '52px',
                  border: '1px solid rgba(232, 228, 223, 0.2)',
                  opacity: 0.75,
                  transition: 'opacity 0.15s ease, border-color 0.15s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.opacity = '1';
                  e.currentTarget.style.borderColor = 'rgba(232, 228, 223, 0.5)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.opacity = '0.75';
                  e.currentTarget.style.borderColor = 'rgba(232, 228, 223, 0.2)';
                }}
              >
                Talk to an Expert
              </a>
            </div>
          </div>

          {/* Market regions — minimal */}
          <div
            className="hidden lg:block"
            style={{
              paddingBottom: '8px',
            }}
          >
            <p style={{ fontSize: '11px', color: '#8B8680', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '16px' }}>
              Serving
            </p>
            {['Greece & EU', 'Middle East', 'Egypt'].map((region) => (
              <div
                key={region}
                style={{
                  fontSize: '14px',
                  fontWeight: 500,
                  color: '#E8E4DF',
                  opacity: 0.5,
                  marginBottom: '8px',
                }}
              >
                {region}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
