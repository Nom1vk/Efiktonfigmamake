import { useInView } from '../hooks/useInView';

const proofPoints = [
  {
    metric: '5×',
    label: 'Profit Increase',
    timeframe: 'In 2 years',
    description:
      'A Greek auto parts manufacturer transformed margins by running all four Efikton pillars as one system.',
    tag: 'Automotive Manufacturing',
  },
  {
    metric: '90%',
    label: 'Fewer Problems',
    timeframe: 'Ongoing, sustained',
    description:
      'Early warnings surface issues before they become crises. Production chaos reduced by 90% — an Efikton implementation story.',
    tag: 'Industrial Manufacturing',
  },
  {
    metric: 'OTIF',
    label: 'On-Time In-Full',
    timeframe: 'Within 1 year',
    description:
      'Delivery streamlined across the full order-to-cash cycle. Customers trust dates again. The plant runs, not the firefighters.',
    tag: 'Multi-Site Operations',
  },
];

const ownerQuotes = [
  '"I can sleep — I know what\'s happening in the factory."',
  '"We\'re in control. Problems are visible early, not discovered late."',
  '"We stopped firefighting; we run the plant."',
  '"I can trust dates and numbers again."',
];

export function Testimonials() {
  const [headerRef, headerVisible] = useInView<HTMLDivElement>({ threshold: 0.1 });
  const [metricsRef, metricsVisible] = useInView<HTMLDivElement>({ threshold: 0.05 });
  const [quotesRef, quotesVisible] = useInView<HTMLDivElement>({ threshold: 0.1 });

  return (
    <section
      id="results"
      className="py-24 lg:py-32"
      style={{ backgroundColor: '#F8F6F3', scrollMarginTop: '64px' }}
      aria-labelledby="results-heading"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div
          ref={headerRef}
          className={`flex items-end justify-between mb-16 md:mb-20 flex-wrap gap-6 animate-reveal${headerVisible ? ' is-visible' : ''}`}
        >
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 mb-6" aria-hidden="true">
              <div style={{ width: '24px', height: '1px', backgroundColor: '#B87333' }} />
              <span
                className="text-xs font-semibold uppercase tracking-widest"
                style={{ color: '#B87333', letterSpacing: '0.15em' }}
              >
                Proven Results
              </span>
            </div>
            <h2
              id="results-heading"
              className="font-bold mb-4"
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                color: '#002B5C',
                fontSize: 'clamp(2rem, 4vw, 3rem)',
                letterSpacing: '-0.03em',
                lineHeight: 1.1,
              }}
            >
              Numbers don't firefight.
            </h2>
            <p className="text-base" style={{ color: '#4A4A4A', lineHeight: 1.75 }}>
              These are the outcomes Efikton clients experience — measurable, operational, and
              sustained.
            </p>
          </div>
        </div>

        {/* Metric cards */}
        <div
          ref={metricsRef}
          className={`grid sm:grid-cols-3 mb-16 md:mb-20 animate-reveal-stagger${metricsVisible ? ' is-visible' : ''}`}
          style={{ borderTop: '1px solid rgba(0,43,92,0.1)', borderLeft: '1px solid rgba(0,43,92,0.1)' }}
          role="list"
          aria-label="Proof metrics"
        >
          {proofPoints.map((point, i) => (
            <article
              key={i}
              className="p-7 md:p-8 flex flex-col transition-colors duration-200"
              style={{
                borderRight: '1px solid rgba(0,43,92,0.1)',
                borderBottom: '1px solid rgba(0,43,92,0.1)',
                backgroundColor: '#F8F6F3',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#fff';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = '#F8F6F3';
              }}
              role="listitem"
            >
              {/* Copper accent bar */}
              <div
                style={{
                  height: '2px',
                  backgroundColor: '#B87333',
                  marginBottom: '24px',
                  width: '32px',
                  opacity: 0.8,
                }}
                aria-hidden="true"
              />

              {/* Tag */}
              <div
                className="text-xs font-bold uppercase tracking-widest mb-5 md:mb-6"
                style={{ color: '#B87333', letterSpacing: '0.12em' }}
              >
                {point.tag}
              </div>

              {/* Metric — dominant */}
              <div
                className="font-bold leading-none mb-2"
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  color: '#B87333',
                  fontSize: 'clamp(2.75rem, 6vw, 4rem)',
                  letterSpacing: '-0.04em',
                }}
                aria-label={`${point.metric} — ${point.label}`}
              >
                {point.metric}
              </div>
              <div
                className="font-semibold mb-1"
                style={{ color: '#002B5C', fontSize: '1rem', letterSpacing: '-0.01em' }}
                aria-hidden="true"
              >
                {point.label}
              </div>
              <div className="text-xs mb-5 md:mb-6" style={{ color: '#4A4A4A', opacity: 0.7 }}>
                {point.timeframe}
              </div>

              {/* Description */}
              <p className="text-sm flex-grow" style={{ color: '#4A4A4A', lineHeight: 1.75 }}>
                {point.description}
              </p>

              <button
                className="mt-5 md:mt-6 text-xs font-semibold uppercase tracking-wider transition-colors text-left"
                style={{ color: '#0066CC', letterSpacing: '0.1em' }}
                onMouseEnter={(e) => (e.currentTarget.style.color = '#002B5C')}
                onMouseLeave={(e) => (e.currentTarget.style.color = '#0066CC')}
                aria-label={`Read full case study: ${point.tag}`}
              >
                Read case study →
              </button>
            </article>
          ))}
        </div>

        {/* Owner quotes — dark */}
        <div
          ref={quotesRef}
          className={`animate-reveal${quotesVisible ? ' is-visible' : ''}`}
          style={{ backgroundColor: '#002B5C' }}
          aria-label="What factory owners say after implementing Efikton"
        >
          <div
            className="px-6 md:px-8 py-5 md:py-6"
            style={{ borderBottom: '1px solid rgba(255,255,255,0.08)' }}
          >
            <span
              className="text-xs font-bold uppercase tracking-widest"
              style={{ color: 'rgba(184,115,51,0.8)', letterSpacing: '0.15em' }}
            >
              What factory owners say after Efikton
            </span>
          </div>
          <div className="grid sm:grid-cols-2">
            {ownerQuotes.map((quote, i) => (
              <blockquote
                key={i}
                className="p-6 md:p-8 transition-colors duration-200"
                style={{
                  color: 'rgba(255,255,255,0.8)',
                  borderRight: i % 2 === 0 ? '1px solid rgba(255,255,255,0.06)' : 'none',
                  borderBottom: '1px solid rgba(255,255,255,0.06)',
                  fontStyle: 'italic',
                  lineHeight: 1.7,
                  fontSize: 'clamp(0.875rem, 1.5vw, 0.9375rem)',
                  borderLeft: '2px solid #B87333',
                  paddingLeft: '1.5rem',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = '#fff')}
                onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(255,255,255,0.8)')}
              >
                {quote}
              </blockquote>
            ))}
          </div>

          {/* Tagline */}
          <div
            className="px-6 md:px-8 py-5 md:py-6 text-center"
            style={{ borderTop: '1px solid rgba(255,255,255,0.08)' }}
          >
            <p
              className="font-bold"
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                color: '#B87333',
                fontSize: '1.5rem',
                letterSpacing: '-0.02em',
              }}
              lang="el"
            >
              Εφικτόν.
            </p>
            <p className="text-xs mt-1" style={{ color: 'rgba(255,255,255,0.4)' }}>
              Achievable. It's what the name means.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
