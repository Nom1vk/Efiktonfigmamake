import { ArrowRight, ChevronDown } from 'lucide-react';

const stats = [
  { value: '5×', label: 'Profit increase', sub: 'in 2 years' },
  { value: '90%', label: 'Fewer problems', sub: 'ongoing' },
  { value: 'OTIF', label: 'On-time delivery', sub: 'within 1 year' },
];

export function Hero() {
  return (
    <section
      className="relative min-h-screen flex items-center pt-16 overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #002B5C 0%, #001a38 60%, #002B5C 100%)',
      }}
      aria-label="Hero section"
    >
      {/* Background texture */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `radial-gradient(circle at 20% 50%, #B87333 0%, transparent 50%),
            radial-gradient(circle at 80% 20%, #0066CC 0%, transparent 40%)`,
        }}
      />

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `linear-gradient(rgba(184,115,51,0.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(184,115,51,0.3) 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28 w-full">
        <div className="max-w-4xl mx-auto text-center">
          {/* Eyebrow */}
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium mb-8"
            style={{
              backgroundColor: 'rgba(184,115,51,0.15)',
              border: '1px solid rgba(184,115,51,0.4)',
              color: '#B87333',
            }}
          >
            <span
              className="w-2 h-2 rounded-full animate-pulse"
              style={{ backgroundColor: '#B87333' }}
            />
            Manufacturing Operating System
          </div>

          {/* Headline */}
          <h1
            className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-6"
            style={{ fontFamily: "'Space Grotesk', sans-serif", color: '#fff' }}
          >
            Deliver on time.{' '}
            <span style={{ color: '#B87333' }}>Eliminate</span> problems.{' '}
            Protect margin.
          </h1>

          {/* Subheadline */}
          <p
            className="text-lg sm:text-xl lg:text-2xl mb-4 max-w-3xl mx-auto"
            style={{ color: 'rgba(255,255,255,0.75)', lineHeight: 1.6 }}
          >
            The manufacturing operating system that turns chaos into control.
          </p>

          <p
            className="text-base sm:text-lg mb-10 max-w-2xl mx-auto"
            style={{ color: 'rgba(255,255,255,0.55)' }}
          >
            Efikton is the complete manufacturing OS — from order to cash, from supplier
            to shipment. One method. One system. Proven results.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <a
              href="#results"
              className="group inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-semibold text-base transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#B87333]"
              style={{ backgroundColor: '#B87333', color: '#fff' }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#a0652c';
                e.currentTarget.style.transform = 'translateY(-1px)';
                e.currentTarget.style.boxShadow = '0 8px 25px rgba(184,115,51,0.4)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = '#B87333';
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              See the Results
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#contact"
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
              Book a Demo
            </a>
          </div>

          {/* Stats */}
          <div
            className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto"
            role="list"
            aria-label="Key results"
          >
            {stats.map((stat, i) => (
              <div
                key={i}
                className="flex flex-col items-center p-6 rounded-2xl"
                style={{
                  backgroundColor: 'rgba(255,255,255,0.05)',
                  border: '1px solid rgba(184,115,51,0.25)',
                }}
                role="listitem"
              >
                <div
                  className="text-4xl sm:text-5xl font-bold mb-1"
                  style={{ fontFamily: "'Space Grotesk', sans-serif", color: '#B87333' }}
                >
                  {stat.value}
                </div>
                <div className="text-sm font-semibold mb-0.5" style={{ color: '#fff' }}>
                  {stat.label}
                </div>
                <div className="text-xs" style={{ color: 'rgba(255,255,255,0.45)' }}>
                  {stat.sub}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50">
          <span className="text-xs" style={{ color: 'rgba(255,255,255,0.5)' }}>
            Scroll to explore
          </span>
          <ChevronDown className="w-5 h-5 text-white animate-bounce" aria-hidden="true" />
        </div>
      </div>
    </section>
  );
}
