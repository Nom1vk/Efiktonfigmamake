import { ArrowRight, Phone } from 'lucide-react';

export function CTA() {
  return (
    <section
      id="contact"
      className="py-20 lg:py-28"
      style={{ backgroundColor: '#fff' }}
      aria-labelledby="cta-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className="relative rounded-3xl overflow-hidden p-8 sm:p-12 lg:p-16 text-center"
          style={{
            background: 'linear-gradient(135deg, #002B5C 0%, #001a38 100%)',
          }}
        >
          {/* Background accent */}
          <div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: `radial-gradient(circle at 10% 90%, #B87333 0%, transparent 50%),
                radial-gradient(circle at 90% 10%, #0066CC 0%, transparent 40%)`,
            }}
            aria-hidden="true"
          />

          <div className="relative max-w-3xl mx-auto">
            <div
              className="inline-block px-4 py-2 rounded-full text-sm font-medium mb-6"
              style={{ backgroundColor: 'rgba(184,115,51,0.2)', color: '#B87333' }}
            >
              Ready to make the shift?
            </div>

            <h2
              id="cta-heading"
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              Stop firefighting.{' '}
              <span style={{ color: '#B87333' }}>Start running the plant.</span>
            </h2>

            <p
              className="text-lg mb-10"
              style={{ color: 'rgba(255,255,255,0.7)' }}
            >
              See how Efikton turns chaos into control — in your factory. We'll show you
              the method, the system, and exactly how it applies to your operation.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:hello@efikton.com"
                className="group inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-semibold text-base transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#B87333]"
                style={{ backgroundColor: '#B87333', color: '#fff' }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#a0652c';
                  e.currentTarget.style.boxShadow = '0 8px 25px rgba(184,115,51,0.4)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = '#B87333';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                Book a Demo
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" aria-hidden="true" />
              </a>
              <a
                href="tel:+302101234567"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-semibold text-base transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
                style={{
                  backgroundColor: 'transparent',
                  border: '2px solid rgba(255,255,255,0.3)',
                  color: '#fff',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(255,255,255,0.7)';
                  e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.05)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(255,255,255,0.3)';
                  e.currentTarget.style.backgroundColor = 'transparent';
                }}
              >
                <Phone className="w-5 h-5" aria-hidden="true" />
                Talk to an Expert
              </a>
            </div>

            {/* Market regions */}
            <p
              className="mt-10 text-xs"
              style={{ color: 'rgba(255,255,255,0.35)' }}
            >
              Serving manufacturers in{' '}
              <span style={{ color: 'rgba(255,255,255,0.6)' }}>Greece & EU</span> •{' '}
              <span style={{ color: 'rgba(255,255,255,0.6)' }}>Middle East</span> •{' '}
              <span style={{ color: 'rgba(255,255,255,0.6)' }}>Egypt</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
