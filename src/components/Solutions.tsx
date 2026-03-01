import { useRef, useState, useEffect } from 'react';
import { useInView } from '../hooks/useInView';
import { useScrollProgress } from '../hooks/useScrollProgress';
import { useCountUp } from '../hooks/useCountUp';

/** 3D tilt effect — progressive enhancement, skipped on touch devices */
function useTilt() {
  const ref = useRef<HTMLElement>(null);

  const onMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const el = ref.current;
    if (!el || window.matchMedia('(hover: none)').matches) return;
    const rect = el.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    el.style.transform = `perspective(1200px) rotateX(${-y * 6}deg) rotateY(${x * 6}deg)`;
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

/**
 * Progress → stage index
 * 0 = CHAOS    (0 – 0.29)
 * 1 = METHOD   (0.3 – 0.59)
 * 2 = CONTROL  (0.6 – 0.84)
 * 3 = RESULTS  (0.85 – 1.0)
 */
function progressToStage(p: number): number {
  if (p < 0.3) return 0;
  if (p < 0.6) return 1;
  if (p < 0.85) return 2;
  return 3;
}

/** A single RESULTS count-up label — fires once when enabled. */
function ResultsStat({
  end,
  prefix = '',
  suffix = '',
  enabled,
}: {
  end: number;
  prefix?: string;
  suffix?: string;
  enabled: boolean;
}) {
  const value = useCountUp({ end, prefix, suffix, enabled, duration: 1618 });
  return <span>{value}</span>;
}

export function Solutions() {
  const [headerRef, headerVisible] = useInView<HTMLDivElement>({ threshold: 0.1 });
  const [arcScrollRef, arcProgress] = useScrollProgress<HTMLDivElement>(0.1);
  const [pillarsRef, pillarsVisible] = useInView<HTMLDivElement>({ threshold: 0.05 });

  // Derived arc stage (0–3)
  const arcStage = progressToStage(arcProgress);

  // One-shot RESULTS trigger: fire when stage reaches 3, never reset
  const [resultsFired, setResultsFired] = useState(false);
  useEffect(() => {
    if (arcStage >= 3 && !resultsFired) {
      setResultsFired(true);
    }
  }, [arcStage, resultsFired]);

  // Jitter intensity: 1.0 at stage 0, ramps to 0 at progress 0.35
  // Used in CSS via --arc-jitter-intensity
  const jitterIntensity = Math.max(0, 1 - arcProgress / 0.35);

  // Progress bar width: fills left→right with scroll
  const progressBarWidth = `${Math.round(arcProgress * 100)}%`;

  // Noise overlay opacity: 0.55 at start, gone by progress 0.45
  const noiseOpacity = Math.max(0, 0.55 - arcProgress * (0.55 / 0.45));

  // Per-step active state
  const stepActive = [
    arcStage >= 0, // CHAOS always "entered"
    arcStage >= 1,
    arcStage >= 2,
    arcStage >= 3,
  ];

  return (
    <section
      id="solutions"
      style={{ backgroundColor: 'var(--ef-surface)', scrollMarginTop: '64px' }}
      aria-labelledby="solutions-heading"
    >
      {/* ── Header ─────────────────────────────────────────────────────────── */}
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

      {/* ── CHAOS → CONTROL Narrative Arc ──────────────────────────────────── */}
      <div
        className="w-full px-6 lg:px-10"
        style={{ maxWidth: '1200px', margin: '0 auto', paddingBottom: '80px' }}
      >
        {/*
          Scroll-progress container.
          CSS custom props drive all visual states — no per-frame DOM writes.
        */}
        <div
          ref={arcScrollRef}
          className="arc-container"
          data-arc-stage={arcStage}
          style={{
            borderTop: '1px solid rgba(10, 22, 40, 0.1)',
            position: 'relative',
            // Custom props consumed by CSS
            '--arc-progress': arcProgress,
            '--arc-jitter': jitterIntensity,
          } as React.CSSProperties}
          role="list"
          aria-label="The journey from chaos to results"
        >
          {/* Noise grain overlay — fades as order emerges */}
          <div
            className="arc-noise-overlay"
            style={{ opacity: noiseOpacity }}
            aria-hidden="true"
          />

          <div className="narrative-arc-grid grid grid-cols-2 md:grid-cols-4">
            {(['CHAOS', 'METHOD', 'CONTROL', 'RESULTS'] as const).map((label, i) => {
              const descs = [
                'Firefighting, hidden losses, tribal knowledge, constant surprises',
                'Adopt the four-pillar discipline across the plant',
                'Early warnings, plan/actual truth, cost clarity',
                '5× profit · 90% fewer problems · OTIF delivery',
              ];

              const isResults = i === 3;
              const isActive = stepActive[i];

              return (
                <div
                  key={label}
                  className={`narrative-arc-item arc-step arc-step-${i}${isActive ? ' arc-step-active' : ''}${i === arcStage ? ' arc-step-current' : ''}`}
                  data-step={i}
                  style={{
                    padding: '24px',
                    borderRight: i < 3 ? '1px solid rgba(10, 22, 40, 0.1)' : 'none',
                    position: 'relative',
                    overflow: 'hidden',
                  }}
                  role="listitem"
                >
                  {/* Copper active border-left — slides in as step activates */}
                  {i > 0 && (
                    <div
                      className={`arc-step-copper-accent${isActive ? ' arc-step-copper-accent-active' : ''}`}
                      aria-hidden="true"
                    />
                  )}

                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                    <div
                      className={`arc-dot arc-dot-${i}${isActive ? ' arc-dot-active' : ''}`}
                      style={{
                        width: '8px',
                        height: '8px',
                        borderRadius: '50%',
                        flexShrink: 0,
                        transition: 'background-color 0.4s ease, box-shadow 0.4s ease',
                        backgroundColor: isResults && isActive
                          ? 'var(--ef-copper)'
                          : isActive && i > 0
                            ? 'rgba(193,127,62,0.6)'
                            : i === 0
                              ? 'rgba(10, 22, 40, 0.25)'
                              : 'rgba(10, 22, 40, 0.08)',
                        boxShadow: isResults && isActive
                          ? '0 0 6px 2px rgba(193,127,62,0.35)'
                          : 'none',
                      }}
                      aria-hidden="true"
                    />
                    <span
                      style={{
                        fontSize: '11px',
                        fontWeight: 700,
                        letterSpacing: '0.1em',
                        textTransform: 'uppercase',
                        transition: 'color 0.4s ease',
                        color: isResults && isActive
                          ? 'var(--ef-copper)'
                          : isActive && i > 0
                            ? 'var(--ef-navy)'
                            : i === 0
                              ? 'var(--ef-navy)'
                              : 'var(--ef-text-secondary)',
                      }}
                    >
                      {label}
                    </span>
                  </div>

                  <p
                    style={{
                      fontSize: '13px',
                      lineHeight: 1.65,
                      transition: 'color 0.4s ease, filter 0.6s ease',
                      color: isActive || i === 0 ? 'var(--ef-text-secondary)' : 'rgba(139,134,128,0.45)',
                      filter: i === 0 && arcStage === 0 ? `blur(${(1 - arcProgress / 0.3) * 0.3}px)` : 'none',
                    }}
                  >
                    {isResults ? (
                      resultsFired ? (
                        <>
                          <ResultsStat end={5} suffix="×" enabled={resultsFired} /> profit ·{' '}
                          <ResultsStat end={90} suffix="%" enabled={resultsFired} /> fewer problems · OTIF delivery
                        </>
                      ) : (
                        descs[i]
                      )
                    ) : (
                      descs[i]
                    )}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Scroll-linked progress bar */}
          <div
            style={{
              position: 'relative',
              height: '2px',
              backgroundColor: 'rgba(10, 22, 40, 0.08)',
            }}
          >
            <div
              className={resultsFired ? 'arc-progress-bar arc-progress-bar-complete' : 'arc-progress-bar'}
              style={{
                position: 'absolute',
                left: 0,
                top: 0,
                height: '100%',
                width: progressBarWidth,
                backgroundColor: 'var(--ef-copper)',
                transformOrigin: 'left',
                transition: 'width 0.05s linear',
              }}
              aria-hidden="true"
            />
          </div>
        </div>
      </div>

      {/* ── Pillars — editorial rows ────────────────────────────────────────── */}
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
                <div
                  className="grid lg:grid-cols-[80px_1fr_1fr]"
                  style={{ padding: '40px 0', gap: '0' }}
                >
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
