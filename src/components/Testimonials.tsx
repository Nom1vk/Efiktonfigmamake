import { useInView } from '../hooks/useInView';

const proofPoints = [
  {
    metric: '5×',
    label: 'Profit Increase',
    timeframe: 'In 2 years',
    description: 'A Greek auto parts manufacturer transformed margins by running all four Efikton pillars as one system.',
    industry: 'Automotive Manufacturing',
  },
  {
    metric: '90%',
    label: 'Fewer Problems',
    timeframe: 'Ongoing, sustained',
    description: 'Early warnings surface issues before they become crises. Production chaos reduced by 90%.',
    industry: 'Industrial Manufacturing',
  },
  {
    metric: 'OTIF',
    label: 'On-Time In-Full',
    timeframe: 'Within 1 year',
    description: 'Delivery streamlined across the full order-to-cash cycle. Customers trust dates again.',
    industry: 'Multi-Site Operations',
  },
];

const ownerQuotes = [
  { text: 'I can sleep — I know what\'s happening in the factory.', role: 'Factory Owner, Greece' },
  { text: 'We\'re in control. Problems are visible early, not discovered late.', role: 'Operations Director' },
  { text: 'We stopped firefighting; we run the plant.', role: 'Plant Manager' },
  { text: 'I can trust dates and numbers again.', role: 'CEO, Manufacturing Group' },
];

export function Testimonials() {
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
        <p style={{ color: '#8B8680', fontSize: '1.0625rem', lineHeight: 1.75, maxWidth: '440px' }}>
          Measurable, operational, sustained. These are the outcomes Efikton clients experience.
        </p>
      </div>

      {/* Huge numbers — breathe in space */}
      <div
        ref={numbersRef}
        className={`w-full px-6 lg:px-10 animate-reveal-stagger${numbersVisible ? ' is-visible' : ''}`}
        style={{ maxWidth: '1200px', margin: '0 auto', paddingBottom: '96px' }}
        role="list"
        aria-label="Proof metrics"
      >
        <div
          className="grid grid-cols-1 md:grid-cols-3"
          style={{
            gap: '0',
            borderTop: '1px solid rgba(10, 22, 40, 0.12)',
          }}
        >
          {proofPoints.map((point, i) => (
            <div
              key={i}
              className="proof-point-item"
              style={{
                padding: '48px 0',
                borderBottom: '1px solid rgba(10, 22, 40, 0.08)',
              }}
              data-index={i}
              role="listitem"
            >
              {/* Giant metric */}
              <div
                style={{
                  fontSize: 'clamp(4rem, 8vw, 7rem)',
                  fontWeight: 800,
                  letterSpacing: '-0.04em',
                  lineHeight: 1,
                  color: '#C17F3E',
                  marginBottom: '16px',
                  display: 'block',
                }}
                aria-label={`${point.metric} — ${point.label}`}
              >
                {point.metric}
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
              <div style={{ fontSize: '13px', color: '#8B8680', marginBottom: '20px' }}>
                {point.timeframe}
              </div>
              <p style={{ fontSize: '14px', color: '#8B8680', lineHeight: 1.7, maxWidth: '280px' }}>
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
            </div>
          ))}
        </div>
      </div>

      {/* Owner quotes — elegant pull quotes */}
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
              color: '#8B8680',
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              marginBottom: '48px',
            }}
          >
            What factory owners say
          </p>
          <div
            className="grid grid-cols-1 md:grid-cols-2"
            style={{ gap: '0' }}
          >
            {ownerQuotes.map((quote, i) => (
              <blockquote
                key={i}
                style={{
                  padding: '32px 40px 32px 24px',
                  borderLeft: '2px solid #C17F3E',
                  marginBottom: '32px',
                }}
              >
                <p
                  style={{
                    fontSize: 'clamp(1rem, 1.5vw, 1.1875rem)',
                    fontWeight: 500,
                    color: '#0A1628',
                    lineHeight: 1.65,
                    letterSpacing: '-0.01em',
                    fontStyle: 'italic',
                    marginBottom: '16px',
                  }}
                >
                  "{quote.text}"
                </p>
                <cite
                  style={{
                    fontSize: '12px',
                    fontWeight: 600,
                    color: '#8B8680',
                    fontStyle: 'normal',
                    letterSpacing: '0.05em',
                    textTransform: 'uppercase',
                  }}
                >
                  {quote.role}
                </cite>
              </blockquote>
            ))}
          </div>

          {/* Greek anchor */}
          <div style={{ marginTop: '48px', paddingTop: '48px', borderTop: '1px solid rgba(10, 22, 40, 0.1)' }}>
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
            <p style={{ marginTop: '8px', fontSize: '14px', color: '#8B8680' }}>
              From Greek — achievable. That's the promise.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
