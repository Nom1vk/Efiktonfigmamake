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
          <div className="grid grid-cols-1 md:grid-cols-3">
          {proofPoints.map((point, i) => (
            <div
              key={i}
              className={`proof-point-item${i === 0 ? ' proof-point-first' : i === 1 ? ' proof-point-mid' : ' proof-point-last'}`}
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
            {ownerQuotes.map((quote, i) => (
              <blockquote
                key={i}
                className="ef-quote-card"
                style={{
                  padding: '28px 32px 28px 24px',
                  borderLeft: '2px solid var(--ef-copper)',
                  backgroundColor: 'rgba(10, 22, 40, 0.04)',
                }}
              >
                <p
                  style={{
                    fontSize: 'clamp(0.9375rem, 1.5vw, 1.125rem)',
                    fontWeight: 500,
                    color: '#0A1628',
                    lineHeight: 1.7,
                    letterSpacing: '-0.01em',
                    fontStyle: 'italic',
                    marginBottom: '16px',
                  }}
                >
                  "{quote.text}"
                </p>
                <cite style={{ fontStyle: 'normal', display: 'block' }}>
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
            ))}
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
