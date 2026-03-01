import { useInView } from '../hooks/useInView';
import { useCountUp } from '../hooks/useCountUp';

// Animated metric component
function AnimatedMetric({
  metric,
  countEnd,
  suffix,
  visible,
}: {
  metric: string;
  countEnd: number | null;
  suffix: string;
  visible: boolean;
}) {
  const count = useCountUp({
    end: countEnd ?? 0,
    duration: 1400,
    suffix,
    enabled: visible && countEnd !== null,
  });

  if (countEnd === null) {
    // Non-numeric metric (e.g. OTIF) — just reveal with fade
    return <>{metric}</>;
  }
  // Always show the final value as fallback; animate once visible
  return <>{visible ? count : metric}</>;
}

const proofPoints = [
  {
    metric: '5×',
    countEnd: 5,
    suffix: '×',
    label: 'Profit Increase',
    timeframe: 'In 2 years',
    description: 'A Greek auto parts manufacturer transformed margins by running all four Efikton pillars as one system.',
    industry: 'Automotive Manufacturing',
  },
  {
    metric: '90%',
    countEnd: 90,
    suffix: '%',
    label: 'Fewer Problems',
    timeframe: 'Ongoing, sustained',
    description: 'Early warnings surface issues before they become crises. Production chaos reduced by 90%.',
    industry: 'Industrial Manufacturing',
  },
  {
    metric: 'OTIF',
    countEnd: null,
    suffix: '',
    label: 'On-Time In-Full',
    timeframe: 'Within 1 year',
    description: 'Delivery streamlined across the full order-to-cash cycle. Customers trust dates again.',
    industry: 'Multi-Site Operations',
  },
  {
    metric: '31%',
    countEnd: 31,
    suffix: '%',
    label: 'Faster Planning Cycles',
    timeframe: 'In 4 months',
    description: 'Industrial components manufacturer, Riyadh. Multi-plant operations across 3 facilities. Planning cycle time cut from weeks to days.',
    industry: 'Industrial Valves & Fittings · Middle East',
  },
];

const ownerQuotes = [
  {
    text: "I can sleep — I know what's happening in the factory. Problems are visible early, not discovered when a customer calls to complain.",
    name: 'Giorgos Konstantinidis',
    title: 'Operations Director',
    companyType: 'Auto Parts Manufacturer',
    companySize: '85 employees · €9M revenue',
    city: 'Thessaloniki',
  },
  {
    text: 'We stopped firefighting. We run the plant now. I can trust our delivery dates again — and so can our customers.',
    name: 'Nikos Papadimitriou',
    title: 'Managing Director',
    companyType: 'Industrial Components',
    companySize: '140 employees · €18M revenue',
    city: 'Athens',
  },
  {
    text: 'After an Oracle rollout that consumed 18 months and left us with consultants we could not get rid of, Efikton gave us a system our own plant managers actually run. We turned off the legacy system in month six.',
    name: 'Operations Director',
    title: 'Operations Director',
    companyType: 'Industrial Valves & Fittings Manufacturer',
    companySize: '~380 employees · Multi-plant, Riyadh',
    city: 'Middle East',
  },
];

export function Testimonials() {
  const [headerRef, headerVisible] = useInView<HTMLDivElement>({ threshold: 0.1 });
  const [numbersRef, numbersVisible] = useInView<HTMLDivElement>({ threshold: 0.1 });
  const [quotesRef, quotesVisible] = useInView<HTMLDivElement>({ threshold: 0.1 });

  return (
    <section
      id="results"
      style={{ backgroundColor: '#F5F2ED', scrollMarginTop: '64px' }}
      aria-labelledby="results-heading"
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
            Proven Results
          </span>
        </div>
        <h2
          id="results-heading"
          style={{
            color: '#0A1628',
            fontSize: 'clamp(2rem, 4.5vw, 3.5rem)',
            fontWeight: 800,
            letterSpacing: '-0.03em',
            lineHeight: 1.05,
            maxWidth: '500px',
            marginBottom: '24px',
          }}
        >
          Numbers don't firefight.
        </h2>
        <p style={{ color: 'var(--ef-text-secondary)', fontSize: '1.0625rem', lineHeight: 1.75, maxWidth: '440px' }}>
          Measurable, operational, sustained. These are the outcomes Efikton clients experience.
        </p>
        </div>
      </div>

      {/* Proof point metrics — responsive grid */}
      <div
        ref={numbersRef}
        className={`w-full px-6 lg:px-10 animate-reveal-stagger${numbersVisible ? ' is-visible' : ''}`}
        style={{ maxWidth: '1200px', margin: '0 auto', paddingBottom: '96px' }}
        role="list"
        aria-label="Proof metrics"
      >
        <div
          style={{ borderTop: '1px solid rgba(10, 22, 40, 0.12)' }}
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4">
          {proofPoints.map((point, i) => (
            <div
              key={i}
              className={`proof-point-item${i === 0 ? ' proof-point-first' : i === proofPoints.length - 1 ? ' proof-point-last' : ' proof-point-mid'}`}
              role="listitem"
              aria-label={`${point.metric} ${point.label} — ${point.timeframe}`}
              data-index={i}
            >
              <div>
                {/* Giant metric */}
                <div
                  className="ef-proof-metric"
                  aria-label={`${point.metric} — ${point.label}`}
                >
                  <AnimatedMetric
                    metric={point.metric}
                    countEnd={point.countEnd}
                    suffix={point.suffix}
                    visible={numbersVisible}
                  />
                </div>
                <div
                  style={{
                    fontSize: '16px',
                    fontWeight: 700,
                    color: '#0A1628',
                    letterSpacing: '-0.01em',
                    marginBottom: '4px',
                  }}
                >
                  {point.label}
                </div>
                <div style={{ fontSize: '13px', color: 'var(--ef-text-secondary)', marginBottom: '20px' }}>
                  {point.timeframe}
                </div>
                <p style={{ fontSize: '14px', color: 'var(--ef-text-secondary)', lineHeight: 1.7, maxWidth: '280px' }}>
                  {point.description}
                </p>
                <div
                  style={{
                    marginTop: '16px',
                    fontSize: '11px',
                    fontWeight: 600,
                    color: '#C17F3E',
                    letterSpacing: '0.08em',
                    textTransform: 'uppercase',
                  }}
                >
                  {point.industry}
                </div>
                {i === 0 && (
                  <a
                    href="#case-study"
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '6px',
                      marginTop: '20px',
                      fontSize: '12px',
                      fontWeight: 600,
                      color: '#C17F3E',
                      textDecoration: 'none',
                      letterSpacing: '0.02em',
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = '#D4A574')}
                    onMouseLeave={(e) => (e.currentTarget.style.color = '#C17F3E')}
                  >
                    Read full case study
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                      <path d="M2.5 6H9.5M6.5 3L9.5 6L6.5 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </a>
                )}
              </div>
            </div>
          ))}
          </div>
        </div>
      </div>

      {/* Owner quotes */}
      <div
        ref={quotesRef}
        className={`w-full px-6 lg:px-10 animate-reveal${quotesVisible ? ' is-visible' : ''}`}
        style={{ maxWidth: '1200px', margin: '0 auto', paddingBottom: '128px' }}
        aria-label="What factory owners say after implementing Efikton"
      >
        <div
          style={{
            borderTop: '1px solid rgba(10, 22, 40, 0.1)',
            paddingTop: '64px',
          }}
        >
          <p
            style={{
              fontSize: '11px',
              fontWeight: 600,
              color: 'var(--ef-text-secondary)',
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              marginBottom: '48px',
            }}
          >
            What factory owners say
          </p>
          <div
            className="grid grid-cols-1 md:grid-cols-2"
            style={{ gap: '32px' }}
          >
            {ownerQuotes.map((quote, i) => {
              const staggerBase = i * 180; // ms — slightly longer for elegance
              return (
                <blockquote
                  key={i}
                  className="ef-quote-card ef-testimonial-card"
                  style={{
                    padding: '28px 32px 28px 24px',
                    borderLeft: '2px solid var(--ef-copper)',
                    backgroundColor: 'rgba(10, 22, 40, 0.04)',
                    position: 'relative',
                    overflow: 'hidden',
                    transform: quotesVisible ? 'translateY(0)' : 'translateY(12px)',
                    opacity: quotesVisible ? 1 : 0,
                    transition: `opacity 0.6s cubic-bezier(0.22, 1, 0.36, 1) ${staggerBase}ms, transform 0.6s cubic-bezier(0.22, 1, 0.36, 1) ${staggerBase}ms`,
                  }}
                >
                  {/* Animated large quote mark */}
                  <span
                    aria-hidden="true"
                    style={{
                      position: 'absolute',
                      top: '12px',
                      left: '20px',
                      fontSize: '72px',
                      lineHeight: 1,
                      fontWeight: 800,
                      color: 'rgba(193,127,62,0.15)',
                      fontStyle: 'normal',
                      transform: quotesVisible ? 'scale(1) rotate(0deg)' : 'scale(0.8) rotate(-8deg)',
                      transformOrigin: 'top left',
                      opacity: quotesVisible ? 1 : 0,
                      transition: quotesVisible
                        ? `transform 0.7s cubic-bezier(0.34, 1.56, 0.64, 1) ${staggerBase + 100}ms, opacity 0.5s ease ${staggerBase + 100}ms`
                        : 'none',
                      display: 'block',
                      userSelect: 'none',
                    }}
                  >
                    "
                  </span>

                  {/* Quote text — fades in 250ms after quote mark */}
                  <p
                    style={{
                      fontSize: 'clamp(0.9375rem, 1.5vw, 1.125rem)',
                      fontWeight: 500,
                      color: '#0A1628',
                      lineHeight: 1.7,
                      letterSpacing: '-0.01em',
                      fontStyle: 'italic',
                      marginBottom: '16px',
                      marginTop: '40px',
                      opacity: quotesVisible ? 1 : 0,
                      transition: quotesVisible
                        ? `opacity 0.6s ease ${staggerBase + 250}ms`
                        : 'none',
                    }}
                  >
                    {quote.text}
                  </p>

                  {/* Attribution — slides up 250ms after text */}
                  <cite
                    style={{
                      fontStyle: 'normal',
                      display: 'block',
                      transform: quotesVisible ? 'translateY(0)' : 'translateY(8px)',
                      opacity: quotesVisible ? 1 : 0,
                      transition: quotesVisible
                        ? `opacity 0.5s ease ${staggerBase + 500}ms, transform 0.5s cubic-bezier(0.22,1,0.36,1) ${staggerBase + 500}ms`
                        : 'none',
                    }}
                  >
                    <span
                      style={{
                        fontSize: '13px',
                        fontWeight: 700,
                        color: '#0A1628',
                        letterSpacing: '-0.01em',
                        display: 'block',
                        marginBottom: '2px',
                      }}
                    >
                      {quote.name}
                    </span>
                    <span
                      style={{
                        fontSize: '11px',
                        fontWeight: 600,
                        color: '#C17F3E',
                        letterSpacing: '0.06em',
                        textTransform: 'uppercase',
                        display: 'block',
                        marginBottom: '2px',
                      }}
                    >
                      {quote.title} · {quote.companyType}, {quote.city}
                    </span>
                    <span
                      style={{
                        fontSize: '11px',
                        color: 'var(--ef-text-secondary)',
                        letterSpacing: '0.04em',
                      }}
                    >
                      {quote.companySize}
                    </span>
                  </cite>
                </blockquote>
              );
            })}
          </div>

          {/* Case study CTA */}
          <div style={{ marginTop: '48px', display: 'flex', alignItems: 'center', gap: '24px', flexWrap: 'wrap' }}>
            <a
              href="#case-study"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                fontSize: '13px',
                fontWeight: 600,
                color: '#C17F3E',
                textDecoration: 'none',
                letterSpacing: '0.04em',
                borderBottom: '1px solid rgba(193, 127, 62, 0.3)',
                paddingBottom: '2px',
              }}
              onMouseEnter={(e) => { e.currentTarget.style.color = '#A06830'; e.currentTarget.style.borderBottomColor = '#A06830'; }}
              onMouseLeave={(e) => { e.currentTarget.style.color = '#C17F3E'; e.currentTarget.style.borderBottomColor = 'rgba(193, 127, 62, 0.3)'; }}
            >
              Read the Thermotech Hellas case study
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                <path d="M2.5 6H9.5M6.5 3L9.5 6L6.5 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </div>

          {/* Greek anchor */}
          <div style={{ marginTop: '64px', paddingTop: '48px', borderTop: '1px solid rgba(10, 22, 40, 0.1)' }}>
            <p
              style={{
                fontSize: 'clamp(1.5rem, 3vw, 2.5rem)',
                fontWeight: 800,
                letterSpacing: '-0.03em',
                color: '#C17F3E',
              }}
              lang="el"
            >
              Εφικτόν.
            </p>
            <p style={{ marginTop: '8px', fontSize: '14px', color: 'var(--ef-text-secondary)' }}>
              From Greek — achievable. That's the promise.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
