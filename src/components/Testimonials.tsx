import { TrendingUp, Clock, Shield } from 'lucide-react';

const proofPoints = [
  {
    metric: '5×',
    label: 'Profit Increase',
    timeframe: 'In 2 years',
    icon: TrendingUp,
    description:
      'How a Greek auto parts manufacturer transformed margins by running all four Efikton pillars as one system.',
    tag: 'Case Study: Automotive',
  },
  {
    metric: '90%',
    label: 'Fewer Problems',
    timeframe: 'Ongoing, sustained',
    icon: Shield,
    description:
      'Reducing production chaos by 90% — an Efikton implementation story. Early warnings surface issues before they become crises.',
    tag: 'Case Study: Industrial',
  },
  {
    metric: 'OTIF',
    label: 'On-Time In-Full',
    timeframe: 'Within 1 year',
    icon: Clock,
    description:
      'Streamlined delivery across the full order-to-cash cycle. Customers trust dates again. The plant runs, not the firefighters.',
    tag: 'Case Study: Multi-site',
  },
];

const ownerQuotes = [
  '"I can sleep — I know what\'s happening in the factory."',
  '"We\'re in control. Problems are visible early, not discovered late."',
  '"We stopped firefighting; we run the plant."',
  '"I can trust dates and numbers again."',
];

export function Testimonials() {
  return (
    <section
      id="results"
      className="py-20 lg:py-28"
      style={{ backgroundColor: '#F8F6F3' }}
      aria-labelledby="results-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div
            className="inline-block px-4 py-2 rounded-full text-sm font-medium mb-4"
            style={{ backgroundColor: 'rgba(184,115,51,0.12)', color: '#B87333' }}
          >
            Proven Results
          </div>
          <h2
            id="results-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4"
            style={{ fontFamily: "'Space Grotesk', sans-serif", color: '#002B5C' }}
          >
            Numbers don't firefight.
          </h2>
          <p className="text-lg" style={{ color: '#4A4A4A' }}>
            Lead with results. These are the outcomes Efikton clients experience — measurable,
            operational, and sustained.
          </p>
        </div>

        {/* Proof points */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16" role="list">
          {proofPoints.map((point, i) => (
            <article
              key={i}
              className="rounded-2xl p-6 flex flex-col transition-all duration-300"
              style={{
                backgroundColor: '#fff',
                border: '1px solid rgba(0,43,92,0.09)',
                boxShadow: '0 2px 8px rgba(0,43,92,0.05)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = '0 12px 32px rgba(0,43,92,0.12)';
                e.currentTarget.style.borderColor = 'rgba(184,115,51,0.35)';
                e.currentTarget.style.transform = 'translateY(-3px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = '0 2px 8px rgba(0,43,92,0.05)';
                e.currentTarget.style.borderColor = 'rgba(0,43,92,0.09)';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
              role="listitem"
            >
              {/* Tag */}
              <div
                className="text-xs font-bold uppercase tracking-widest mb-4"
                style={{ color: '#B87333' }}
              >
                {point.tag}
              </div>

              {/* Metric */}
              <div className="flex items-start gap-4 mb-4">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: 'rgba(0,43,92,0.07)' }}
                  aria-hidden="true"
                >
                  <point.icon className="w-6 h-6" style={{ color: '#002B5C' }} />
                </div>
                <div>
                  <div
                    className="text-4xl font-bold leading-none"
                    style={{ fontFamily: "'Space Grotesk', sans-serif", color: '#B87333' }}
                  >
                    {point.metric}
                  </div>
                  <div className="font-semibold text-sm mt-1" style={{ color: '#002B5C' }}>
                    {point.label}
                  </div>
                  <div className="text-xs mt-0.5" style={{ color: '#4A4A4A' }}>
                    {point.timeframe}
                  </div>
                </div>
              </div>

              {/* Description */}
              <p className="text-sm flex-grow" style={{ color: '#4A4A4A', lineHeight: 1.7 }}>
                {point.description}
              </p>

              <button
                className="mt-4 text-sm font-semibold flex items-center gap-1 transition-colors"
                style={{ color: '#0066CC' }}
                onMouseEnter={(e) => (e.currentTarget.style.color = '#002B5C')}
                onMouseLeave={(e) => (e.currentTarget.style.color = '#0066CC')}
                aria-label={`Read full case study: ${point.tag}`}
              >
                Read full case study →
              </button>
            </article>
          ))}
        </div>

        {/* Owner quotes */}
        <div
          className="rounded-2xl p-8 sm:p-12"
          style={{ backgroundColor: '#002B5C' }}
          aria-label="Client testimonial quotes"
        >
          <p
            className="text-xs font-bold uppercase tracking-widest mb-6 text-center"
            style={{ color: 'rgba(184,115,51,0.8)' }}
          >
            What factory owners say after Efikton
          </p>
          <div className="grid sm:grid-cols-2 gap-4">
            {ownerQuotes.map((quote, i) => (
              <blockquote
                key={i}
                className="p-4 rounded-xl text-sm sm:text-base"
                style={{
                  backgroundColor: 'rgba(255,255,255,0.06)',
                  color: 'rgba(255,255,255,0.85)',
                  borderLeft: '3px solid #B87333',
                  fontStyle: 'italic',
                  lineHeight: 1.6,
                }}
              >
                {quote}
              </blockquote>
            ))}
          </div>

          {/* Tagline */}
          <div className="text-center mt-8">
            <p
              className="text-2xl sm:text-3xl font-bold"
              style={{ fontFamily: "'Space Grotesk', sans-serif", color: '#B87333' }}
            >
              Εφικτόν.
            </p>
            <p className="text-sm mt-1" style={{ color: 'rgba(255,255,255,0.5)' }}>
              Achievable. It's what the name means.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
