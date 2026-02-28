import { Package, Clock, DollarSign, Brain } from 'lucide-react';

const pillars = [
  {
    icon: Package,
    title: 'Materials',
    headline: 'Know What You Have',
    description:
      'Full traceability — from raw material lot to finished product. No surprises in inventory. You always know what you have, where it is, and what it becomes.',
    control: 'Full traceability, no surprises in inventory',
  },
  {
    icon: Clock,
    title: 'Time',
    headline: 'Run Plan vs Actual',
    description:
      'Every shift, every line. Remove bottlenecks systematically. Hit delivery dates consistently. See the gap between plan and reality — before it becomes a crisis.',
    control: 'Reliable schedules, predictable delivery',
  },
  {
    icon: DollarSign,
    title: 'Money',
    headline: 'True Cost Per Product',
    description:
      'Know your margin before you quote. Stop leaking profit. Accurate costing from production data — not spreadsheet guesses. Quote with confidence.',
    control: 'Quote with confidence, protect profit',
  },
  {
    icon: Brain,
    title: 'Knowledge',
    headline: 'Improvements That Stick',
    description:
      "The factory doesn't reset when people change. Institutional memory, continuous improvement. Expertise stays in the system — not in someone's head.",
    control: 'Institutional memory, continuous improvement',
  },
];

const narrativeSteps = ['CHAOS', 'METHOD', 'CONTROL', 'RESULTS'];

export function Solutions() {
  return (
    <section
      id="solutions"
      className="py-20 lg:py-28"
      style={{ backgroundColor: '#F8F6F3' }}
      aria-labelledby="solutions-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div
            className="inline-block px-4 py-2 rounded-full text-sm font-medium mb-4"
            style={{ backgroundColor: 'rgba(184,115,51,0.12)', color: '#B87333' }}
          >
            The Efikton Method
          </div>
          <h2
            id="solutions-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4"
            style={{ fontFamily: "'Space Grotesk', sans-serif", color: '#002B5C' }}
          >
            Four Pillars. One System. Proven Results.
          </h2>
          <p className="text-lg" style={{ color: '#4A4A4A' }}>
            Efikton is a <strong>methodology</strong> for running manufacturing with control. The
            software enforces the method across Materials, Time, Money, and Knowledge.
          </p>
        </div>

        {/* Narrative arc */}
        <div className="flex items-center justify-center gap-2 sm:gap-4 mb-16 flex-wrap">
          {narrativeSteps.map((step, i) => (
            <div key={step} className="flex items-center gap-2 sm:gap-4">
              <div
                className="px-4 py-2 rounded-lg text-sm font-bold tracking-wide"
                style={{
                  backgroundColor: i === 0 ? '#002B5C' : i === 3 ? '#B87333' : 'rgba(0,43,92,0.08)',
                  color: i === 0 || i === 3 ? '#fff' : '#002B5C',
                }}
              >
                {step}
              </div>
              {i < narrativeSteps.length - 1 && (
                <span style={{ color: '#B87333', fontSize: '1.25rem' }}>→</span>
              )}
            </div>
          ))}
        </div>

        {/* Pillars grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6" role="list">
          {pillars.map((pillar, index) => (
            <article
              key={index}
              className="group rounded-2xl p-6 transition-all duration-300 flex flex-col"
              style={{
                backgroundColor: '#fff',
                border: '1px solid rgba(0,43,92,0.1)',
                boxShadow: '0 2px 8px rgba(0,43,92,0.06)',
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget;
                el.style.boxShadow = '0 12px 32px rgba(0,43,92,0.14)';
                el.style.borderColor = 'rgba(184,115,51,0.4)';
                el.style.transform = 'translateY(-4px)';
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget;
                el.style.boxShadow = '0 2px 8px rgba(0,43,92,0.06)';
                el.style.borderColor = 'rgba(0,43,92,0.1)';
                el.style.transform = 'translateY(0)';
              }}
              role="listitem"
            >
              {/* Pillar label */}
              <div
                className="text-xs font-bold uppercase tracking-widest mb-3"
                style={{ color: '#B87333' }}
              >
                {pillar.title}
              </div>

              {/* Icon */}
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                style={{ backgroundColor: 'rgba(0,43,92,0.07)' }}
                aria-hidden="true"
              >
                <pillar.icon className="w-6 h-6" style={{ color: '#002B5C' }} />
              </div>

              {/* Headline */}
              <h3
                className="text-lg font-bold mb-3"
                style={{ fontFamily: "'Space Grotesk', sans-serif", color: '#002B5C' }}
              >
                {pillar.headline}
              </h3>

              {/* Description */}
              <p className="text-sm flex-grow" style={{ color: '#4A4A4A', lineHeight: 1.7 }}>
                {pillar.description}
              </p>

              {/* Control badge */}
              <div
                className="mt-4 pt-4 text-xs font-medium"
                style={{
                  borderTop: '1px solid rgba(0,43,92,0.08)',
                  color: '#0066CC',
                }}
              >
                → {pillar.control}
              </div>
            </article>
          ))}
        </div>

        {/* Bottom quote */}
        <div
          className="mt-16 text-center p-8 rounded-2xl"
          style={{
            backgroundColor: '#002B5C',
            color: '#fff',
          }}
        >
          <p
            className="text-xl sm:text-2xl font-bold mb-2"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            "Quality becomes stable — not a daily fight."
          </p>
          <p className="text-sm" style={{ color: 'rgba(255,255,255,0.6)' }}>
            When you control Materials, Time, and Money — Quality follows.
          </p>
        </div>
      </div>
    </section>
  );
}
