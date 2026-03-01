import { useEffect, useRef, useState } from 'react';
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
  { num: '01', name: 'Foundation', timeline: '4 to 6 weeks', desc: 'Product data, inventory, purchasing, costing', win: 'Single source of truth' },
  { num: '02', name: 'Planning', timeline: '4 to 6 weeks', desc: 'Orders, scheduling, capacity', win: 'Reliable delivery dates' },
  { num: '03', name: 'Execution', timeline: '6 to 10 weeks', desc: 'Real-time monitoring, production tracking', win: 'Less firefighting' },
  { num: '04', name: 'Quality', timeline: '4 to 6 weeks', desc: 'QC, traceability, continuous improvement', win: 'Fewer defects' },
  { num: '05', name: 'Control', timeline: '4 to 8 weeks', desc: 'Financials, forecasting, early warnings', win: 'Margin protection' },
];

/** Conveyor belt flow animation */
function PipelineFlow() {
  const [containerRef, containerVisible] = useInView<HTMLDivElement>({ threshold: 0.1 });
  const [visibleSteps, setVisibleSteps] = useState<boolean[]>(Array(flowSteps.length).fill(false));
  const [visibleConnectors, setVisibleConnectors] = useState<boolean[]>(Array(flowSteps.length - 1).fill(false));
  const [pulseActive, setPulseActive] = useState(false);
  const triggered = useRef(false);

  useEffect(() => {
    if (!containerVisible || triggered.current) return;
    triggered.current = true;

    flowSteps.forEach((_, i) => {
      setTimeout(() => {
        setVisibleSteps(prev => {
          const next = [...prev];
          next[i] = true;
          return next;
        });
        // Connector after step (except last)
        if (i < flowSteps.length - 1) {
          setTimeout(() => {
            setVisibleConnectors(prev => {
              const next = [...prev];
              next[i] = true;
              return next;
            });
          }, 100);
        }
        // Activate pulse after all steps land
        if (i === flowSteps.length - 1) {
          setTimeout(() => setPulseActive(true), 400);
        }
      }, i * 150);
    });
  }, [containerVisible]);

  return (
    <div ref={containerRef} style={{ marginBottom: '80px' }} aria-label="Order-to-cash flow diagram">
      <p style={{
        fontSize: '11px',
        fontWeight: 600,
        color: 'var(--ef-text-secondary)',
        letterSpacing: '0.12em',
        textTransform: 'uppercase',
        marginBottom: '24px',
      }}>
        Order-to-Cash in Efikton
      </p>

      {/* Desktop horizontal flow */}
      <div className="hidden lg:block" style={{ position: 'relative' }}>
        <div
          className="flex items-center"
          style={{ gap: '0', position: 'relative' }}
          role="list"
          aria-label="Efikton order-to-cash stages"
        >
          {flowSteps.map((step, i) => (
            <div key={step.label} className="flex items-center" role="listitem">
              {/* Step node */}
              <div
                className={`flow-step-item${visibleSteps[i] ? ' is-visible' : ''}${step.accent ? ' flow-step-accent' : ''}`}
                style={{
                  padding: '10px 20px',
                  fontSize: '13px',
                  fontWeight: 600,
                  whiteSpace: 'nowrap',
                  backgroundColor: step.accent ? 'var(--ef-copper)' : 'rgba(255,255,255,0.06)',
                  color: step.accent ? 'var(--ef-white)' : 'var(--ef-text-primary)',
                  letterSpacing: '0.02em',
                  borderLeft: step.accent ? 'none' : '1px solid rgba(184,115,51,0.15)',
                  position: 'relative',
                  transitionDelay: `${i * 150}ms`,
                }}
              >
                {/* Station dot */}
                {!step.accent && (
                  <span
                    style={{
                      position: 'absolute',
                      top: '50%',
                      left: '-4px',
                      transform: 'translateY(-50%)',
                      width: '6px',
                      height: '6px',
                      borderRadius: '50%',
                      backgroundColor: 'rgba(184,115,51,0.5)',
                      opacity: visibleSteps[i] ? 1 : 0,
                      transition: 'opacity 0.3s ease 0.1s',
                    }}
                    aria-hidden="true"
                  />
                )}
                {step.label}
              </div>

              {/* Connector with pulse track */}
              {i < flowSteps.length - 1 && (
                <div
                  className={`flow-connector${visibleConnectors[i] ? ' is-visible' : ''}`}
                  aria-hidden="true"
                  style={{ transitionDelay: `${i * 150 + 100}ms`, position: 'relative', overflow: 'hidden' }}
                >
                  {/* Traveling pulse dot */}
                  {pulseActive && (
                    <div
                      className={`pipeline-track-pulse${pulseActive ? ' is-animating' : ''}`}
                      style={{ animationDelay: `${i * 0.3}s` }}
                    />
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Mobile vertical flow */}
      <div className="lg:hidden" style={{ position: 'relative', paddingLeft: '24px' }}>
        {/* Vertical track line */}
        <div style={{
          position: 'absolute',
          left: '10px',
          top: '16px',
          bottom: '16px',
          width: '1px',
          background: 'rgba(184,115,51,0.2)',
        }} aria-hidden="true" />
        <div role="list" aria-label="Efikton order-to-cash stages" style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          {flowSteps.map((step, i) => (
            <div
              key={step.label}
              role="listitem"
              className={`flow-step-item${visibleSteps[i] ? ' is-visible' : ''}`}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                transitionDelay: `${i * 150}ms`,
              }}
            >
              {/* Node dot */}
              <div style={{
                width: '8px',
                height: '8px',
                borderRadius: '50%',
                backgroundColor: step.accent ? 'var(--ef-copper)' : 'rgba(184,115,51,0.4)',
                flexShrink: 0,
                marginLeft: '-20px',
                zIndex: 1,
                transition: `background-color 0.3s ease ${i * 150 + 200}ms`,
              }} aria-hidden="true" />
              <div
                className={step.accent ? 'flow-step-accent' : ''}
                style={{
                  padding: '10px 16px',
                  fontSize: 'clamp(12px, 2.5vw, 13px)',
                  fontWeight: 600,
                  backgroundColor: step.accent ? 'var(--ef-copper)' : 'rgba(255,255,255,0.06)',
                  color: step.accent ? 'var(--ef-white)' : 'var(--ef-text-primary)',
                  letterSpacing: '0.02em',
                  borderRadius: '2px',
                  borderLeft: step.accent ? 'none' : '1px solid rgba(184,115,51,0.15)',
                }}
              >
                {step.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/** Phase timeline that builds itself like construction */
function PhaseTimeline() {
  const [containerRef, containerVisible] = useInView<HTMLDivElement>({ threshold: 0.05 });
  const [visiblePhases, setVisiblePhases] = useState<boolean[]>(Array(phases.length).fill(false));
  const [visibleWins, setVisibleWins] = useState<boolean[]>(Array(phases.length).fill(false));
  const [lineVisible, setLineVisible] = useState(false);
  const triggered = useRef(false);

  useEffect(() => {
    if (!containerVisible || triggered.current) return;
    triggered.current = true;

    // Start drawing the progress line
    setTimeout(() => setLineVisible(true), 100);

    phases.forEach((_, i) => {
      const delay = i * 250;
      setTimeout(() => {
        setVisiblePhases(prev => {
          const next = [...prev];
          next[i] = true;
          return next;
        });
        // Win text fades in 200ms after bar lands
        setTimeout(() => {
          setVisibleWins(prev => {
            const next = [...prev];
            next[i] = true;
            return next;
          });
        }, 200);
      }, delay);
    });
  }, [containerVisible]);

  return (
    <div ref={containerRef}>
      <h3 style={{
        color: 'var(--ef-text-primary)',
        fontSize: 'clamp(1.125rem, 3vw, 1.375rem)',
        fontWeight: 700,
        letterSpacing: '-0.02em',
        marginBottom: '8px',
        lineHeight: 1.25,
      }}>
        We implement without stopping production
      </h3>
      <p style={{
        fontSize: 'clamp(13px, 2.2vw, 14px)',
        color: 'var(--ef-text-secondary)',
        marginBottom: '32px',
        lineHeight: 1.65,
      }}>
        Each phase delivers measurable wins. No big-bang disruption.
      </p>

      <div style={{ position: 'relative', paddingLeft: '20px' }}>
        {/* Vertical progress line drawing downward */}
        <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: '1px', overflow: 'hidden' }} aria-hidden="true">
          <div
            className={`phase-progress-line${lineVisible ? ' is-visible' : ''}`}
            style={{ transitionDelay: '0ms' }}
          />
        </div>

        <ol role="list" aria-label="Five phases of Efikton implementation" style={{ borderTop: '1px solid rgba(255,255,255,0.07)' }}>
          {phases.map((phase, i) => (
            <li
              key={phase.num}
              className={`phase-bar${visiblePhases[i] ? ' is-visible' : ''}`}
              style={{
                display: 'flex',
                gap: 'clamp(12px, 3vw, 20px)',
                padding: 'clamp(14px, 2.5vw, 16px) 0',
                borderBottom: '1px solid rgba(255,255,255,0.07)',
                transitionDelay: `${i * 250}ms`,
              }}
            >
              {/* Phase number with copper light-up */}
              <div
                className={`phase-num${visiblePhases[i] ? ' is-visible' : ''}`}
                style={{
                  fontSize: '12px',
                  fontWeight: 700,
                  flexShrink: 0,
                  width: '28px',
                  paddingTop: '2px',
                  transitionDelay: `${i * 250 + 100}ms`,
                }}
                aria-hidden="true"
              >
                {phase.num}
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ display: 'flex', alignItems: 'baseline', gap: '10px', marginBottom: '2px', flexWrap: 'wrap' }}>
                  <span style={{ fontSize: '14px', fontWeight: 600, color: 'var(--ef-text-primary)' }}>{phase.name}</span>
                  <span style={{
                    fontSize: '11px',
                    fontWeight: 600,
                    color: 'rgba(184,115,51,0.7)',
                    letterSpacing: '0.06em',
                    backgroundColor: 'rgba(184,115,51,0.08)',
                    padding: '2px 7px',
                    borderRadius: '2px',
                    whiteSpace: 'nowrap',
                  }}>
                    {phase.timeline}
                  </span>
                </div>
                <div style={{ fontSize: '13px', color: 'var(--ef-text-secondary)', marginBottom: '8px' }}>
                  {phase.desc}
                </div>
                <div
                  className={`phase-win${visibleWins[i] ? ' is-visible' : ''}`}
                  style={{
                    fontSize: '12px',
                    fontWeight: 600,
                    color: 'var(--ef-copper)',
                    transitionDelay: `${i * 250 + 200}ms`,
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
  );
}

export function Features() {
  const [headerRef, headerVisible] = useInView<HTMLDivElement>({ threshold: 0.1 });
  const [colsRef, colsVisible] = useInView<HTMLDivElement>({ threshold: 0.05 });
  const [stopUsingRef, stopUsingInView] = useInView<HTMLUListElement>({ threshold: 0.35 });
  const [strikingStarted, setStrikingStarted] = useState(false);
  const [summaryVisible, setSummaryVisible] = useState(false);

  useEffect(() => {
    if (stopUsingInView && !strikingStarted) {
      setStrikingStarted(true);
      // Show summary after all 6 items are struck: 300ms settle + 5×350ms stagger + 600ms draw + 450ms pause = ~3450ms
      const timer = setTimeout(() => setSummaryVisible(true), 3450);
      return () => clearTimeout(timer);
    }
  }, [stopUsingInView, strikingStarted]);

  return (
    <section
      id="method"
      style={{ backgroundColor: 'var(--ef-navy)', scrollMarginTop: '64px' }}
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
            <div style={{ width: '28px', height: '1px', backgroundColor: 'var(--ef-copper)' }} aria-hidden="true" />
            <span style={{ color: 'var(--ef-copper)', fontSize: '11px', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase' }}>
              Complete System of Record
            </span>
          </div>
          <h2
            id="features-heading"
            style={{
              color: 'var(--ef-text-primary)',
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
          <p style={{ color: 'var(--ef-text-secondary)', fontSize: '1.0625rem', lineHeight: 1.75, maxWidth: '480px' }}>
            From order to cash. From supplier to shipment. Run the business on Efikton. No patchwork, no compromises.
          </p>
        </div>

        {/* Pipeline conveyor belt */}
        <PipelineFlow />

        {/* Two columns: φ-based 61.8 / 38.2 split on desktop */}
        <div
          ref={colsRef}
          style={{ alignItems: 'start' }}
        >
          <div
            className={`grid gap-16 lg:gap-24 animate-reveal${colsVisible ? ' is-visible' : ''}`}
            style={{
              gridTemplateColumns: 'repeat(1, minmax(0, 1fr))',
            }}
          >
            <div className="grid lg:grid-cols-[38.2fr_61.8fr] gap-16 lg:gap-24" style={{ alignItems: 'start' }}>
              {/* Stop using */}
              <div>
                <h3 style={{
                  color: 'var(--ef-text-primary)',
                  fontSize: '1.375rem',
                  fontWeight: 700,
                  letterSpacing: '-0.02em',
                  marginBottom: '8px',
                }}>
                  What you can stop using
                </h3>
                <p style={{ fontSize: '14px', color: 'var(--ef-text-secondary)', marginBottom: '32px', lineHeight: 1.6 }}>
                  Replace the patchwork with a single system that covers everything.
                </p>
                <ul
                  ref={stopUsingRef}
                  role="list"
                  aria-label="Systems to replace with Efikton"
                  className={`stop-using-list${strikingStarted ? ' is-striking' : ''}`}
                  style={{ borderTop: '1px solid rgba(255,255,255,0.07)' }}
                >
                  {stopUsing.map((item, i) => (
                    <li
                      key={i}
                      className="stop-using-item"
                      data-strike-index={i}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '16px',
                        padding: '16px 8px',
                        borderBottom: '1px solid rgba(255,255,255,0.07)',
                        borderRadius: '2px',
                      }}
                    >
                      <span
                        className="stop-using-text"
                        style={{ fontSize: '14px', color: 'var(--ef-text-secondary)' }}
                      >
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
                {/* Summary line — appears after all items are struck */}
                <p
                  className={`stop-using-summary${summaryVisible ? ' is-visible' : ''}`}
                  aria-live="polite"
                >
                  One system. Nothing else.
                </p>
              </div>

              {/* Phase timeline — builds like construction */}
              <PhaseTimeline />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
