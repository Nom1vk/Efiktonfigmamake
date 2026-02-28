import { useInView } from '../hooks/useInView';

const flowSteps = [
  { label: 'Orders', accent: true },
  { label: 'Purchasing', accent: false },
  { label: 'Inventory', accent: false },
  { label: 'Production', accent: false },
  { label: 'Quality', accent: false },
  { label: 'Costing', accent: false },
  { label: 'Billing', accent: false },
  { label: 'Delivery', accent: true },
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
      style={{ backgroundColor: '#0A1628', scrollMarginTop: '64px' }}
      aria-labelledby="features-heading"
    >
      <div
        className="w-full px-6 lg:px-10"
        style={{ maxWidth: '1200px', margin: '0 auto', paddingTop: '128px', paddingBottom: '128px' }}
      >
        {/* Header */}
        <div
          ref={headerRef}
          className={`animate-reveal${headerVisible ? ' is-visible' : ''}`}
          style={{ marginBottom: '80px' }}
        >
          <div className="flex items-center gap-3 mb-8">
            <div style={{ width: '28px', height: '1px', backgroundColor: '#C17F3E' }} aria-hidden="true" />
            <span style={{ color: '#C17F3E', fontSize: '11px', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase' }}>
              Complete System of Record
            </span>
          </div>
          <h2
            id="features-heading"
            style={{
              color: '#E8E4DF',
              fontSize: 'clamp(2rem, 4.5vw, 3.5rem)',
              fontWeight: 800,
              letterSpacing: '-0.03em',
              lineHeight: 1.05,
              maxWidth: '600px',
              marginBottom: '24px',
            }}
          >
            One Place for Everything
          </h2>
          <p style={{ color: '#8B8680', fontSize: '1.0625rem', lineHeight: 1.75, maxWidth: '480px' }}>
            From order to cash. From supplier to shipment. Run the business on Efikton. No patchwork, no compromises.
          </p>
        </div>

        {/* Order-to-Cash pipeline */}
        <div
          ref={flowRef}
          className={`animate-reveal${flowVisible ? ' is-visible' : ''}`}
          style={{ marginBottom: '80px' }}
          aria-label="Order-to-cash flow diagram"
        >
          <p
            style={{
              fontSize: '11px',
              fontWeight: 600,
              color: '#8B8680',
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              marginBottom: '24px',
            }}
          >
            Order-to-Cash in Efikton
          </p>
          {/* Scroll container with fade-right hint on mobile */}
          <div
            style={{
              position: 'relative',
            }}
          >
            <div
              className="overflow-x-auto"
              style={{
                WebkitOverflowScrolling: 'touch',
                paddingBottom: '4px',
              }}
            >
              <div
                className="flex items-center"
                style={{ gap: '0', minWidth: 'max-content', paddingRight: '1px' }}
                role="list"
                aria-label="Efikton order-to-cash stages"
              >
                {flowSteps.map((step, i) => (
                  <div key={step.label} className="flex items-center" role="listitem">
                    <div
                      style={{
                        padding: '10px 20px',
                        fontSize: '13px',
                        fontWeight: 600,
                        whiteSpace: 'nowrap',
                        backgroundColor: step.accent ? '#C17F3E' : 'rgba(255, 255, 255, 0.06)',
                        color: step.accent ? '#ffffff' : '#E8E4DF',
                        letterSpacing: '0.02em',
                        borderLeft: step.accent ? 'none' : '1px solid rgba(193, 127, 62, 0.15)',
                        transition: 'background-color 0.2s ease',
                      }}
                    >
                      {step.label}
                    </div>
                    {i < flowSteps.length - 1 && (
                      <div
                        style={{
                          width: '24px',
                          height: '1px',
                          backgroundColor: 'rgba(193, 127, 62, 0.3)',
                          position: 'relative',
                          flexShrink: 0,
                        }}
                        aria-hidden="true"
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
                            borderLeft: '5px solid rgba(193, 127, 62, 0.4)',
                          }}
                        />
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
            {/* Fade-right scroll hint — only visible on small screens where content overflows */}
            <div
              className="lg:hidden pointer-events-none absolute right-0 top-0 bottom-0"
              style={{
                width: '48px',
                background: 'linear-gradient(to right, transparent, #0A1628)',
              }}
              aria-hidden="true"
            />
          </div>
          <p className="lg:hidden" style={{ fontSize: '11px', color: 'rgba(139, 134, 128, 0.5)', marginTop: '10px', letterSpacing: '0.04em' }}>
            ← scroll to see full pipeline →
          </p>
        </div>

        {/* Two columns */}
        <div
          ref={colsRef}
          className={`grid lg:grid-cols-2 gap-16 lg:gap-24 animate-reveal-stagger${colsVisible ? ' is-visible' : ''}`}
          style={{ alignItems: 'start' }}
        >
          {/* Stop using */}
          <div>
            <h3
              style={{
                color: '#E8E4DF',
                fontSize: '1.375rem',
                fontWeight: 700,
                letterSpacing: '-0.02em',
                marginBottom: '8px',
              }}
            >
              What you can stop using
            </h3>
            <p style={{ fontSize: '14px', color: '#8B8680', marginBottom: '32px', lineHeight: 1.6 }}>
              Replace the patchwork with a single system that covers everything.
            </p>
            <ul
              role="list"
              aria-label="Systems to replace with Efikton"
              style={{ borderTop: '1px solid rgba(255, 255, 255, 0.07)' }}
            >
              {stopUsing.map((item, i) => (
                <li
                  key={i}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '16px',
                    padding: '16px 0',
                    borderBottom: '1px solid rgba(255, 255, 255, 0.07)',
                  }}
                >
                  <span
                    style={{
                      fontSize: '14px',
                      color: '#8B8680',
                      textDecoration: 'line-through',
                      textDecorationColor: 'rgba(193, 127, 62, 0.5)',
                      textDecorationThickness: '1.5px',
                    }}
                  >
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Implementation phases */}
          <div>
            <h3
              style={{
                color: '#E8E4DF',
                fontSize: '1.375rem',
                fontWeight: 700,
                letterSpacing: '-0.02em',
                marginBottom: '8px',
              }}
            >
              We implement without stopping production
            </h3>
            <p style={{ fontSize: '14px', color: '#8B8680', marginBottom: '32px', lineHeight: 1.6 }}>
              Each phase delivers measurable wins. No big-bang disruption.
            </p>
            <ol
              role="list"
              aria-label="Five phases of Efikton implementation"
              style={{ borderTop: '1px solid rgba(255, 255, 255, 0.07)' }}
            >
              {phases.map((phase) => (
                <li
                  key={phase.num}
                  style={{
                    display: 'flex',
                    gap: '20px',
                    padding: '16px 0',
                    borderBottom: '1px solid rgba(255, 255, 255, 0.07)',
                  }}
                >
                  <div
                    style={{
                      fontSize: '12px',
                      fontWeight: 700,
                      color: 'rgba(193, 127, 62, 0.5)',
                      flexShrink: 0,
                      width: '28px',
                      paddingTop: '2px',
                    }}
                    aria-hidden="true"
                  >
                    {phase.num}
                  </div>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontSize: '14px', fontWeight: 600, color: '#E8E4DF', marginBottom: '2px' }}>
                      {phase.name}
                    </div>
                    <div style={{ fontSize: '13px', color: '#8B8680', marginBottom: '8px' }}>
                      {phase.desc}
                    </div>
                    <div
                      style={{
                        fontSize: '12px',
                        fontWeight: 600,
                        color: '#C17F3E',
                      }}
                    >
                      → {phase.win}
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
