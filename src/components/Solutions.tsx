import { useInView } from '../hooks/useInView';

const pillars = [
  {
    symbol: '◈',
    title: 'Materials',
    headline: 'Know What You Have',
    description:
      'Full traceability — from raw material lot to finished product. No surprises in inventory. You always know what you have, where it is, and what it becomes.',
    control: 'Full traceability, no surprises',
  },
  {
    symbol: '◷',
    title: 'Time',
    headline: 'Run Plan vs Actual',
    description:
      'Every shift, every line. Remove bottlenecks systematically. Hit delivery dates consistently. See the gap between plan and reality before it becomes a crisis.',
    control: 'Reliable schedules, predictable delivery',
  },
  {
    symbol: '◎',
    title: 'Money',
    headline: 'True Cost Per Product',
    description:
      'Know your margin before you quote. Stop leaking profit. Accurate costing from production data — not spreadsheet guesses. Quote with confidence.',
    control: 'Quote with confidence, protect profit',
  },
  {
    symbol: '◉',
    title: 'Knowledge',
    headline: 'Improvements That Stick',
    description:
      "The factory doesn't reset when people change. Institutional memory, continuous improvement. Expertise stays in the system — not in someone's head.",
    control: 'Institutional memory, continuous improvement',
  },
];

const narrativeSteps = [
  { label: 'CHAOS', desc: 'Firefighting, hidden losses, tribal knowledge' },
  { label: 'METHOD', desc: 'Four-pillar discipline across the plant' },
  { label: 'CONTROL', desc: 'Early warnings, plan/actual truth' },
  { label: 'RESULTS', desc: '5× profit, 90% fewer problems, OTIF' },
];

export function Solutions() {
  const [headerRef, headerVisible] = useInView<HTMLDivElement>({ threshold: 0.1 });
  const [arcRef, arcVisible] = useInView<HTMLDivElement>({ threshold: 0.1 });
  const [pillarsRef, pillarsVisible] = useInView<HTMLDivElement>({ threshold: 0.05 });
  const [closingRef, closingVisible] = useInView<HTMLDivElement>({ threshold: 0.1 });

  return (
    <section
      id="solutions"
      className="py-24 lg:py-32"
      style={{ backgroundColor: '#F8F6F3', scrollMarginTop: '64px' }}
      aria-labelledby="solutions-heading"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div
          ref={headerRef}
          className={`max-w-3xl mb-16 md:mb-20 animate-reveal${headerVisible ? ' is-visible' : ''}`}
        >
          <div className="flex items-center gap-3 mb-6" aria-hidden="true">
            <div style={{ width: '24px', height: '1px', backgroundColor: '#B87333' }} />
            <span
              className="text-xs font-semibold uppercase tracking-widest"
              style={{ color: '#B87333', letterSpacing: '0.15em' }}
            >
              The Efikton Method
            </span>
          </div>
          <h2
            id="solutions-heading"
            className="font-bold mb-5"
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              color: '#002B5C',
              fontSize: 'clamp(2rem, 4vw, 3rem)',
              letterSpacing: '-0.03em',
              lineHeight: 1.1,
            }}
          >
            Four Pillars.{' '}
            <br className="hidden sm:block" />
            One System.
          </h2>
          <p className="text-base" style={{ color: '#4A4A4A', lineHeight: 1.75, maxWidth: '520px' }}>
            Efikton is a <strong style={{ color: '#002B5C' }}>methodology</strong> for running
            manufacturing with control. The software enforces the method across Materials, Time,
            Money, and Knowledge.
          </p>
        </div>

        {/* Narrative arc — horizontal timeline */}
        <div
          ref={arcRef}
          className={`mb-16 md:mb-20 overflow-x-auto animate-reveal-stagger${arcVisible ? ' is-visible' : ''}`}
          style={{ borderTop: '1px solid rgba(0,43,92,0.12)', borderBottom: '1px solid rgba(0,43,92,0.12)' }}
          role="list"
          aria-label="Narrative arc: Chaos to Results"
        >
          <div className="flex items-stretch min-w-[480px]">
            {narrativeSteps.map((step, i) => (
              <div
                key={step.label}
                className="flex-1 py-5 px-4 md:py-6 md:px-5"
                style={{
                  borderRight: i < narrativeSteps.length - 1 ? '1px solid rgba(0,43,92,0.12)' : 'none',
                  backgroundColor:
                    i === 0
                      ? 'rgba(0,43,92,0.04)'
                      : i === 3
                      ? 'rgba(184,115,51,0.06)'
                      : 'transparent',
                }}
                role="listitem"
              >
                <div
                  className="text-xs font-bold uppercase tracking-widest mb-1.5"
                  style={{
                    color: i === 0 ? '#002B5C' : i === 3 ? '#B87333' : '#4A4A4A',
                    letterSpacing: '0.12em',
                  }}
                >
                  {i < narrativeSteps.length - 1 && (
                    <span style={{ color: 'rgba(0,43,92,0.25)', marginRight: '6px' }}>0{i + 1}</span>
                  )}
                  {step.label}
                </div>
                <div className="text-xs leading-relaxed" style={{ color: '#4A4A4A', opacity: 0.7 }}>
                  {step.desc}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Pillars grid */}
        <div
          ref={pillarsRef}
          className={`grid sm:grid-cols-2 lg:grid-cols-4 gap-px animate-reveal-stagger${pillarsVisible ? ' is-visible' : ''}`}
          style={{ backgroundColor: 'rgba(0,43,92,0.1)' }}
          role="list"
          aria-label="The four pillars of the Efikton method"
        >
          {pillars.map((pillar, index) => (
            <article
              key={index}
              className="group p-7 md:p-8 flex flex-col transition-all duration-200"
              style={{
                backgroundColor: '#F8F6F3',
                borderLeft: '2px solid transparent',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#fff';
                e.currentTarget.style.borderLeftColor = '#B87333';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = '#F8F6F3';
                e.currentTarget.style.borderLeftColor = 'transparent';
              }}
              role="listitem"
            >
              {/* Symbol + pillar label */}
              <div className="flex items-center gap-3 mb-5 md:mb-6">
                <span
                  style={{ color: '#B87333', fontSize: '1.25rem', lineHeight: 1 }}
                  aria-hidden="true"
                >
                  {pillar.symbol}
                </span>
                <span
                  className="text-xs font-bold uppercase tracking-widest"
                  style={{ color: '#B87333', letterSpacing: '0.14em' }}
                >
                  {pillar.title}
                </span>
              </div>

              {/* Headline */}
              <h3
                className="font-bold mb-3 md:mb-4"
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  color: '#002B5C',
                  fontSize: '1.125rem',
                  letterSpacing: '-0.01em',
                }}
              >
                {pillar.headline}
              </h3>

              {/* Description */}
              <p className="text-sm flex-grow" style={{ color: '#4A4A4A', lineHeight: 1.75 }}>
                {pillar.description}
              </p>

              {/* Control */}
              <div
                className="mt-5 md:mt-6 pt-4 md:pt-5 text-xs font-semibold"
                style={{
                  borderTop: '1px solid rgba(0,43,92,0.1)',
                  color: '#0066CC',
                }}
              >
                {pillar.control}
              </div>
            </article>
          ))}
        </div>

        {/* Bottom statement */}
        <div
          ref={closingRef}
          className={`mt-px p-8 md:p-10 text-center animate-reveal${closingVisible ? ' is-visible' : ''}`}
          style={{ backgroundColor: '#002B5C' }}
        >
          <p
            className="font-bold"
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              color: '#fff',
              fontSize: 'clamp(1.125rem, 2.5vw, 1.75rem)',
              letterSpacing: '-0.02em',
            }}
          >
            "Quality becomes stable —{' '}
            <span style={{ color: '#B87333' }}>not a daily fight.</span>"
          </p>
          <p className="mt-2 text-sm" style={{ color: 'rgba(255,255,255,0.45)' }}>
            When you control Materials, Time, and Money — Quality follows.
          </p>
        </div>
      </div>
    </section>
  );
}
