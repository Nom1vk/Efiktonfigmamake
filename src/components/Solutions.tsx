import { useInView } from '../hooks/useInView';

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
      style={{ backgroundColor: '#F5F2ED', scrollMarginTop: '64px' }}
      aria-labelledby="solutions-heading"
    >
      {/* Header */}
      <div
        className="w-full px-6 lg:px-10"
        style={{ maxWidth: '1200px', margin: '0 auto', paddingTop: '128px', paddingBottom: '80px' }}
      >
        <div
          ref={headerRef}
          className={`animate-reveal${headerVisible ? ' is-visible' : ''}`}
        >
          <div className="flex items-center gap-3 mb-8">
            <div style={{ width: '28px', height: '1px', backgroundColor: '#C17F3E' }} aria-hidden="true" />
            <span style={{ color: '#C17F3E', fontSize: '11px', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase' }}>
              The Efikton Method
            </span>
          </div>
          <h2
            id="solutions-heading"
            style={{
              color: '#0A1628',
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
          <p style={{ color: '#8B8680', fontSize: '1.0625rem', lineHeight: 1.75, maxWidth: '480px' }}>
            A <strong style={{ color: '#0A1628', fontWeight: 600 }}>methodology</strong> for running manufacturing with control. The software enforces the method across every dimension of your operation.
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
          <div className="grid grid-cols-2 md:grid-cols-4">
            {narrativeSteps.map((step, i) => (
              <div
                key={step.label}
                style={{
                  padding: '28px 0',
                  paddingRight: i < narrativeSteps.length - 1 ? '24px' : '0',
                  borderRight: i < narrativeSteps.length - 1 ? '1px solid rgba(10, 22, 40, 0.1)' : 'none',
                  paddingLeft: i > 0 ? '24px' : '0',
                }}
                role="listitem"
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                  <div
                    style={{
                      width: '8px',
                      height: '8px',
                      borderRadius: '50%',
                      backgroundColor: i === 3 ? '#C17F3E' : i === 0 ? 'rgba(10, 22, 40, 0.25)' : 'rgba(10, 22, 40, 0.15)',
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
                      color: i === 3 ? '#C17F3E' : i === 0 ? '#0A1628' : '#8B8680',
                    }}
                  >
                    {step.label}
                  </span>
                </div>
                <p style={{ fontSize: '13px', color: '#8B8680', lineHeight: 1.65 }}>
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
                backgroundColor: '#C17F3E',
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
          {pillars.map((pillar, index) => (
            <article
              key={index}
              className="group"
              style={{
                borderBottom: '1px solid rgba(10, 22, 40, 0.1)',
                cursor: 'default',
                transition: 'background-color 0.25s ease',
                borderRadius: '2px',
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.backgroundColor = 'rgba(193, 127, 62, 0.035)';
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.backgroundColor = 'transparent';
              }}
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
                      color: '#C17F3E',
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
                    <span style={{ fontSize: '12px', fontWeight: 700, color: '#C17F3E', opacity: 0.65, letterSpacing: '0.05em' }}>
                      {pillar.num}
                    </span>
                    <span
                      style={{
                        fontSize: '10px',
                        fontWeight: 700,
                        letterSpacing: '0.1em',
                        textTransform: 'uppercase',
                        color: '#C17F3E',
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
                        color: '#C17F3E',
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
                      color: '#0A1628',
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
                      color: '#8B8680',
                      lineHeight: 1.75,
                      marginBottom: '20px',
                    }}
                  >
                    {pillar.description}
                  </p>
                  <div
                    style={{
                      fontSize: '12px',
                      fontWeight: 600,
                      color: '#0A1628',
                      letterSpacing: '0.02em',
                      paddingLeft: '12px',
                      borderLeft: '2px solid #C17F3E',
                      lineHeight: 1.5,
                    }}
                  >
                    {pillar.outcome}
                  </div>
                </div>
              </div>
            </article>
          ))}
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
              color: '#0A1628',
              maxWidth: '700px',
            }}
          >
            "Quality becomes stable —{' '}
            <span style={{ color: '#C17F3E' }}>not a daily fight.</span>"
          </p>
          <p style={{ marginTop: '12px', fontSize: '14px', color: '#8B8680' }}>
            When you control Materials, Time, and Money — Quality follows.
          </p>
        </div>
      </div>
    </section>
  );
}
