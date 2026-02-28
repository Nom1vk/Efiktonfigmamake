import { X, CheckCircle2 } from 'lucide-react';
import { useInView } from '../hooks/useInView';

const flowSteps = [
  { label: 'Orders', accent: true },
  { label: 'Purchasing', accent: false },
  { label: 'Inventory', accent: false },
  { label: 'Production', accent: false },
  { label: 'Quality', accent: false },
  { label: 'Costing', accent: false },
  { label: 'Billing', accent: false },
  { label: 'Delivery', accent: true, end: true },
];

const stopUsing = [
  'Spreadsheets for planning',
  'Shadow costing sheets',
  'Standalone traceability tools',
  'Disconnected quality systems',
  'Manual production reporting',
  "Multiple systems that don't talk",
];

const phases = [
  { num: '01', name: 'Foundation', desc: 'Product data, inventory, purchasing, costing', win: 'Single source of truth' },
  { num: '02', name: 'Planning', desc: 'Orders, scheduling, capacity', win: 'Reliable delivery dates' },
  { num: '03', name: 'Execution', desc: 'Real-time monitoring, production tracking', win: 'Less firefighting' },
  { num: '04', name: 'Quality', desc: 'QC, traceability, continuous improvement', win: 'Fewer defects' },
  { num: '05', name: 'Control', desc: 'Financials, forecasting, early warnings', win: 'Margin protection' },
];

export function Features() {
  const [headerRef, headerVisible] = useInView<HTMLDivElement>({ threshold: 0.1 });
  const [flowRef, flowVisible] = useInView<HTMLDivElement>({ threshold: 0.1 });
  const [colsRef, colsVisible] = useInView<HTMLDivElement>({ threshold: 0.05 });

  return (
    <section
      id="method"
      className="py-24 lg:py-32"
      style={{ backgroundColor: '#fff', scrollMarginTop: '64px' }}
      aria-labelledby="features-heading"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div
          ref={headerRef}
          className={`max-w-3xl mb-16 md:mb-20 animate-reveal${headerVisible ? ' is-visible' : ''}`}
        >
          <div className="flex items-center gap-3 mb-6" aria-hidden="true">
            <div style={{ width: '24px', height: '1px', backgroundColor: '#0066CC' }} />
            <span
              className="text-xs font-semibold uppercase tracking-widest"
              style={{ color: '#0066CC', letterSpacing: '0.15em' }}
            >
              Complete System of Record
            </span>
          </div>
          <h2
            id="features-heading"
            className="font-bold mb-5"
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              color: '#002B5C',
              fontSize: 'clamp(2rem, 4vw, 3rem)',
              letterSpacing: '-0.03em',
              lineHeight: 1.1,
            }}
          >
            One Place for Everything
          </h2>
          <p className="text-base" style={{ color: '#4A4A4A', lineHeight: 1.75, maxWidth: '520px' }}>
            Efikton is the system of record for your factory — from order to cash, from supplier to
            shipment. Run the business on Efikton. No patchwork.
          </p>
        </div>

        {/* Order-to-Cash pipeline */}
        <div
          ref={flowRef}
          className={`mb-16 md:mb-20 animate-reveal${flowVisible ? ' is-visible' : ''}`}
          style={{
            backgroundColor: '#002B5C',
            padding: '2rem 2.5rem',
            borderLeft: '3px solid #B87333',
          }}
          aria-label="Order-to-cash flow diagram"
        >
          <p
            className="text-xs font-bold uppercase tracking-widest mb-5"
            style={{ color: 'rgba(255,255,255,0.35)', letterSpacing: '0.15em' }}
          >
            Order-to-Cash in Efikton
          </p>
          {/* Scrollable on mobile */}
          <div className="overflow-x-auto -mx-2 px-2">
            <div className="flex items-center gap-0 min-w-max">
              {flowSteps.map((step, i) => (
                <div key={step.label} className="flex items-center">
                  <div
                    className="px-3 md:px-4 py-2 md:py-2.5 text-xs md:text-sm font-semibold whitespace-nowrap"
                    style={{
                      backgroundColor: step.accent ? '#B87333' : 'rgba(255,255,255,0.08)',
                      color: '#fff',
                      letterSpacing: '0.01em',
                    }}
                  >
                    {step.label}
                  </div>
                  {i < flowSteps.length - 1 && (
                    <div
                      style={{
                        width: '20px',
                        height: '1px',
                        backgroundColor: 'rgba(255,255,255,0.2)',
                        position: 'relative',
                        flexShrink: 0,
                      }}
                    >
                      <div
                        style={{
                          position: 'absolute',
                          right: '-1px',
                          top: '50%',
                          transform: 'translateY(-50%)',
                          width: 0,
                          height: 0,
                          borderTop: '4px solid transparent',
                          borderBottom: '4px solid transparent',
                          borderLeft: '5px solid rgba(255,255,255,0.2)',
                        }}
                      />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Two columns */}
        <div
          ref={colsRef}
          className={`grid lg:grid-cols-2 gap-12 lg:gap-16 items-start animate-reveal-stagger${colsVisible ? ' is-visible' : ''}`}
        >
          {/* Stop using */}
          <div>
            <h3
              className="font-bold mb-2"
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                color: '#002B5C',
                fontSize: '1.375rem',
                letterSpacing: '-0.02em',
              }}
            >
              What you can stop using
            </h3>
            <p className="text-sm mb-8" style={{ color: '#4A4A4A' }}>
              Replace your patchwork with a single system that covers everything.
            </p>
            <ul
              className="space-y-0"
              role="list"
              aria-label="Systems to replace with Efikton"
              style={{ borderTop: '1px solid rgba(0,43,92,0.08)' }}
            >
              {stopUsing.map((item, i) => (
                <li
                  key={i}
                  className="flex items-center gap-4 py-3.5 transition-colors duration-150"
                  style={{ borderBottom: '1px solid rgba(0,43,92,0.06)' }}
                  onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#F8F6F3')}
                  onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'transparent')}
                >
                  <X
                    className="w-3.5 h-3.5 flex-shrink-0"
                    style={{ color: '#d4183d' }}
                    aria-hidden="true"
                  />
                  <span className="text-sm" style={{ color: '#4A4A4A' }}>
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Implementation phases */}
          <div>
            <h3
              className="font-bold mb-2"
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                color: '#002B5C',
                fontSize: '1.375rem',
                letterSpacing: '-0.02em',
              }}
            >
              We implement without stopping production
            </h3>
            <p className="text-sm mb-8" style={{ color: '#4A4A4A' }}>
              Each phase delivers measurable wins. No big-bang disruption.
            </p>
            <ol
              className="space-y-0"
              role="list"
              aria-label="Five phases of Efikton implementation"
              style={{ borderTop: '1px solid rgba(0,43,92,0.08)' }}
            >
              {phases.map((phase) => (
                <li
                  key={phase.num}
                  className="flex gap-5 py-4 transition-colors duration-150 cursor-default"
                  style={{ borderBottom: '1px solid rgba(0,43,92,0.06)' }}
                  onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#F8F6F3')}
                  onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'transparent')}
                >
                  <div
                    className="font-bold flex-shrink-0 w-8 pt-0.5"
                    style={{
                      color: 'rgba(0,43,92,0.18)',
                      fontFamily: "'Space Grotesk', sans-serif",
                      fontSize: '0.875rem',
                    }}
                    aria-label={`Phase ${phase.num}`}
                  >
                    {phase.num}
                  </div>
                  <div className="flex-grow">
                    <div className="font-semibold text-sm mb-0.5" style={{ color: '#002B5C' }}>
                      {phase.name}
                    </div>
                    <div className="text-xs mb-1.5" style={{ color: '#4A4A4A' }}>
                      {phase.desc}
                    </div>
                    <div
                      className="flex items-center gap-1.5 text-xs font-semibold"
                      style={{ color: '#0066CC' }}
                    >
                      <CheckCircle2 className="w-3 h-3" aria-hidden="true" />
                      {phase.win}
                    </div>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}
