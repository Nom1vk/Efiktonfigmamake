import { useRef } from 'react';
import { useInView } from '../hooks/useInView';

/** 3D tilt effect — progressive enhancement, skipped on touch devices */
function useTilt(maxDeg = 3) {
  const ref = useRef<HTMLElement>(null);

  const onMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const el = ref.current;
    if (!el) return;
    // Skip on touch-primary devices
    if (window.matchMedia('(hover: none)').matches) return;

    const rect = el.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;  // -0.5 to 0.5
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    const rotateY = x * maxDeg * 2;
    const rotateX = -y * maxDeg * 2;
    el.style.transform = `perspective(1200px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  };

  const onMouseLeave = () => {
    if (!ref.current) return;
    ref.current.style.transform = 'perspective(1200px) rotateX(0deg) rotateY(0deg)';
  };

  return { ref, onMouseMove, onMouseLeave };
}

const pillars = [
  {
    num: '01',
    title: 'Materials',
    headline: 'Know What You Have',
    description:
      'Full traceability — from raw material lot to finished product. No inventory surprises. You always know what you have, where it is, and what it becomes.',
    outcome: 'Full traceability, zero surprises',
  },
  {
    num: '02',
    title: 'Time',
    headline: 'Run Plan vs Actual',
    description:
      'Every shift, every line. Remove bottlenecks systematically. Hit delivery dates consistently. See the gap between plan and reality before it becomes a crisis.',
    outcome: 'Reliable schedules, predictable delivery',
  },
  {
    num: '03',
    title: 'Money',
    headline: 'True Cost Per Product',
    description:
      'Know your margin before you quote. Stop leaking profit. Accurate costing from production data — not spreadsheet guesses. Quote with confidence.',
    outcome: 'Quote with confidence, protect profit',
  },
  {
    num: '04',
    title: 'Knowledge',
    headline: 'Improvements That Stick',
    description:
      "The factory doesn't reset when people change. Institutional memory. Continuous improvement. Expertise stays in the system — not in someone's head.",
    outcome: 'Institutional memory, continuous improvement',
  },
];

const narrativeSteps = [
  { label: 'CHAOS', desc: 'Firefighting, hidden losses, tribal knowledge, constant surprises' },
  { label: 'METHOD', desc: 'Adopt the four-pillar discipline across the plant' },
  { label: 'CONTROL', desc: 'Early warnings, plan/actual truth, cost clarity' },
  { label: 'RESULTS', desc: '5× profit · 90% fewer problems · OTIF delivery' },
];

export function Solutions() {
  const [headerRef, headerVisible] = useInView<HTMLDivElement>({ threshold: 0.1 });
  const [arcRef, arcVisible] = useInView<HTMLDivElement>({ threshold: 0.1 });
  const [pillarsRef, pillarsVisible] = useInView<HTMLDivElement>({ threshold: 0.05 });

  return (
    <section
      id="solutions"
      style={{ backgroundColor: 'var(--ef-surface)', scrollMarginTop: '64px' }}
      aria-labelledby="solutions-heading"
    >
      {/* Header */}
      <div
        className="w-full px-6 lg:px-10"
        style={{ maxWidth: '1200px', margin: '0 auto', paddingTop: '128px', paddingBottom: '128px' }}
      >
        <div
          ref={headerRef}
          className={`animate-reveal${headerVisible ? ' is-visible' : ''}`}
        >
          <div className="flex items-center gap-3 mb-8">
            <div style={{ width: '28px', height: '1px', backgroundColor: 'var(--ef-copper)' }} aria-hidden="true" />
            <span style={{ color: 'var(--ef-copper)', fontSize: '11px', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase' }}>
              The Efikton Method
            </span>
          </div>
          <h2
            id="solutions-heading"
            style={{
              color: 'var(--ef-navy)',
              fontSize: 'clamp(2rem, 4.5vw, 3.5rem)',
              fontWeight: 800,
              letterSpacing: '-0.03em',
              lineHeight: 1.05,
              maxWidth: '600px',
              marginBottom: '24px',
            }}
          >
            Four Pillars.{' '}
            <br className="hidden sm:block" />
            One System.
          </h2>
          <p style={{ color: 'var(--ef-text-secondary)', fontSize: '1.0625rem', lineHeight: 1.75, maxWidth: '480px' }}>
            A <strong style={{ color: 'var(--ef-navy)', fontWeight: 600 }}>methodology</strong> for running manufacturing with control. The software enforces the method across every dimension of your operation.
          </p>
        </div>
      </div>

      {/* Narrative arc */}
      <div
        className="w-full px-6 lg:px-10"
        style={{ maxWidth: '1200px', margin: '0 auto', paddingBottom: '80px' }}
      >
        <div
          ref={arcRef}
          className={`animate-reveal${arcVisible ? ' is-visible' : ''}`}
          style={{ borderTop: '1px solid rgba(10, 22, 40, 0.1)' }}
          role="list"
          aria-label="The journey from chaos to results"
        >
          <div className="narrative-arc-grid grid grid-cols-2 md:grid-cols-4">
            {narrativeSteps.map((step, i) => (
              <div
                key={step.label}
                className="narrative-arc-item"
                style={{
                  padding: '24px',
                  borderRight: i < narrativeSteps.length - 1 ? '1px solid rgba(10, 22, 40, 0.1)' : 'none',
                }}
                role="listitem"
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                  <div
                    style={{
                      width: '8px',
                      height: '8px',
                      borderRadius: '50%',
                      backgroundColor: i === 3 ? 'var(--ef-copper)' : i === 0 ? 'rgba(10, 22, 40, 0.25)' : 'rgba(10, 22, 40, 0.15)',
                      flexShrink: 0,
                    }}
                    aria-hidden="true"
                  />
                  <span
                    style={{
                      fontSize: '11px',
                      fontWeight: 700,
                      letterSpacing: '0.1em',
                      textTransform: 'uppercase',
                      color: i === 3 ? 'var(--ef-copper)' : i === 0 ? 'var(--ef-navy)' : 'var(--ef-text-secondary)',
                    }}
                  >
                    {step.label}
                  </span>
                </div>
                <p style={{ fontSize: '13px', color: 'var(--ef-text-secondary)', lineHeight: 1.65 }}>
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
          {/* Progress line */}
          <div style={{ position: 'relative', height: '2px', backgroundColor: 'rgba(10, 22, 40, 0.08)', marginTop: '-1px' }}>
            <div
              style={{
                position: 'absolute',
                left: 0,
                top: 0,
                height: '100%',
                width: '100%',
                backgroundColor: 'var(--ef-copper)',
                transformOrigin: 'left',
                transform: arcVisible ? 'scaleX(1)' : 'scaleX(0)',
                transition: 'transform 1.2s cubic-bezier(0.22, 1, 0.36, 1) 0.3s',
              }}
              aria-hidden="true"
            />
          </div>
        </div>
      </div>

      {/* Pillars — editorial rows with 3-col desktop grid */}
      <div
        ref={pillarsRef}
        className={`w-full px-6 lg:px-10 animate-reveal-stagger${pillarsVisible ? ' is-visible' : ''}`}
        style={{ maxWidth: '1200px', margin: '0 auto', paddingBottom: '128px' }}
        role="list"
        aria-label="The four pillars of the Efikton method"
      >
        <div style={{ borderTop: '1px solid rgba(10, 22, 40, 0.1)' }}>
          {pillars.map((pillar, index) => {
            const tiltRef = { current: null as HTMLElement | null };
            const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
              const el = tiltRef.current;
              if (!el || window.matchMedia('(hover: none)').matches) return;
              const rect = el.getBoundingClientRect();
              const x = (e.clientX - rect.left) / rect.width - 0.5;
              const y = (e.clientY - rect.top) / rect.height - 0.5;
              el.style.transform = `perspective(1200px) rotateX(${-y * 6}deg) rotateY(${x * 6}deg)`;
            };
            const handleMouseLeave = (e: React.MouseEvent<HTMLElement>) => {
              (e.currentTarget as HTMLElement).style.backgroundColor = 'transparent';
              (e.currentTarget as HTMLElement).style.transform = 'scale(1)';
              if (tiltRef.current) tiltRef.current.style.transform = 'perspective(1200px) rotateX(0deg) rotateY(0deg)';
            };
            return (
            <article
              key={index}
              className="group ef-tilt-card"
              ref={(el) => { tiltRef.current = el; }}
              style={{
                borderBottom: '1px solid rgba(10, 22, 40, 0.1)',
                cursor: 'default',
                transition: 'background-color 0.25s ease, transform 0.25s cubic-bezier(0.22, 1, 0.36, 1)',
                borderRadius: '2px',
                willChange: 'transform',
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.backgroundColor = 'rgba(184, 115, 51, 0.035)';
                (e.currentTarget as HTMLElement).style.transform = 'scale(1.01)';
              }}
              onMouseLeave={handleMouseLeave}
              onMouseMove={handleMouseMove}
              role="listitem"
            >
              {/* Mobile: stacked. Desktop: 3-col grid */}
              <div
                className="grid lg:grid-cols-[80px_1fr_1fr]"
                style={{ padding: '40px 0', gap: '0' }}
              >
                {/* Number + title (mobile: row; desktop: two separate cols) */}
                {/* Col 1: Number */}
                <div className="hidden lg:flex" style={{ alignItems: 'flex-start', paddingTop: '4px' }}>
                  <span
                    style={{
                      fontSize: '13px',
                      fontWeight: 700,
                      color: 'var(--ef-copper)',
                      letterSpacing: '0.05em',
                      opacity: 0.65,
                    }}
                  >
                    {pillar.num}
                  </span>
                </div>

                {/* Col 2: Title */}
                <div style={{ paddingRight: '40px' }}>
                  {/* Mobile number inline */}
                  <div className="flex items-center gap-3 lg:hidden" style={{ marginBottom: '12px' }}>
                    <span style={{ fontSize: '12px', fontWeight: 700, color: 'var(--ef-copper)', opacity: 0.65, letterSpacing: '0.05em' }}>
                      {pillar.num}
                    </span>
                    <span
                      style={{
                        fontSize: '10px',
                        fontWeight: 700,
                        letterSpacing: '0.1em',
                        textTransform: 'uppercase',
                        color: 'var(--ef-copper)',
                      }}
                    >
                      {pillar.title}
                    </span>
                  </div>

                  <div className="hidden lg:block" style={{ marginBottom: '10px' }}>
                    <span
                      style={{
                        fontSize: '11px',
                        fontWeight: 700,
                        letterSpacing: '0.1em',
                        textTransform: 'uppercase',
                        color: 'var(--ef-copper)',
                      }}
                    >
                      {pillar.title}
                    </span>
                  </div>
                  <h3
                    style={{
                      fontSize: 'clamp(1.125rem, 2vw, 1.5rem)',
                      fontWeight: 700,
                      letterSpacing: '-0.02em',
                      color: 'var(--ef-navy)',
                      lineHeight: 1.2,
                    }}
                  >
                    {pillar.headline}
                  </h3>
                </div>

                {/* Col 3: Description + outcome */}
                <div style={{ marginTop: '20px' }} className="lg:mt-0">
                  <p
                    style={{
                      fontSize: '15px',
                      color: 'var(--ef-text-secondary)',
                      lineHeight: 1.75,
                      marginBottom: '20px',
                    }}
                  >
                    {pillar.description}
                  </p>
                  <div
                    className="pillar-outcome-bar"
                    style={{
                      fontSize: '12px',
                      fontWeight: 600,
                      color: 'var(--ef-navy)',
                      letterSpacing: '0.02em',
                      paddingLeft: '12px',
                      borderLeft: '2px solid var(--ef-copper)',
                      lineHeight: 1.5,
                    }}
                  >
                    {pillar.outcome}
                  </div>
                </div>
              </div>
            </article>
            );
          })}
        </div>

        {/* Closing statement */}
        <div
          style={{
            marginTop: '64px',
            padding: '48px 0',
            borderTop: '1px solid rgba(10, 22, 40, 0.1)',
          }}
        >
          <p
            style={{
              fontSize: 'clamp(1.25rem, 2.5vw, 2rem)',
              fontWeight: 700,
              letterSpacing: '-0.02em',
              color: 'var(--ef-navy)',
              maxWidth: '700px',
            }}
          >
            "Quality becomes stable —{' '}
            <span style={{ color: 'var(--ef-copper)' }}>not a daily fight.</span>"
          </p>
          <p style={{ marginTop: '12px', fontSize: '14px', color: 'var(--ef-text-secondary)' }}>
            When you control Materials, Time, and Money — Quality follows.
          </p>
        </div>
      </div>
    </section>
  );
}
