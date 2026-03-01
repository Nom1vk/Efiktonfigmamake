import { useInView } from '../hooks/useInView';

// Team member data
const teamMembers = [
  {
    name: 'Dimitris Alexiou',
    title: 'Implementation Lead',
    background: '12+ years across production planning and order-to-cash transformation in mid-market Greek manufacturing plants.',
    initials: 'ΔΑ',
  },
  {
    name: 'Maria Stavrou',
    title: 'Head of Operations Design',
    background: 'Designed scheduling systems for 20+ factories across Greece, Cyprus, and Romania. Former plant manager.',
    initials: 'ΜΣ',
  },
];

// Credibility stats
const credibilityStats = [
  { value: '40+', label: 'Factory implementations', sub: 'Greece, Cyprus, Romania, Egypt' },
  { value: '12', label: 'Years in manufacturing', sub: 'Not consulting — operations' },
  { value: '8', label: 'Industries served', sub: 'Auto parts to food processing' },
];

export function About() {
  const [headerRef, headerVisible] = useInView<HTMLDivElement>({ threshold: 0.1 });
  const [storyRef, storyVisible] = useInView<HTMLDivElement>({ threshold: 0.1 });
  const [statsRef, statsVisible] = useInView<HTMLDivElement>({ threshold: 0.05 });
  const [teamRef, teamVisible] = useInView<HTMLDivElement>({ threshold: 0.1 });

  return (
    <section
      id="about"
      style={{ backgroundColor: '#1A1F2E', scrollMarginTop: '64px' }}
      aria-labelledby="about-heading"
    >
      {/* Header */}
      <div
        className="w-full px-6 lg:px-10"
        style={{ maxWidth: '1200px', margin: '0 auto', paddingTop: '128px', paddingBottom: '0' }}
      >
        <div
          ref={headerRef}
          className={`animate-reveal${headerVisible ? ' is-visible' : ''}`}
        >
          <div className="flex items-center gap-3 mb-8">
            <div style={{ width: '28px', height: '1px', backgroundColor: '#C17F3E' }} aria-hidden="true" />
            <span
              style={{
                color: '#C17F3E',
                fontSize: '11px',
                fontWeight: 600,
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
              }}
            >
              Who We Are
            </span>
          </div>
          <h2
            id="about-heading"
            style={{
              color: '#E8E4DF',
              fontSize: 'clamp(2rem, 4.5vw, 3.5rem)',
              fontWeight: 800,
              letterSpacing: '-0.03em',
              lineHeight: 1.05,
              maxWidth: '620px',
              marginBottom: '0',
            }}
          >
            Built inside factories,<br />
            <span style={{ color: '#C17F3E' }}>not boardrooms.</span>
          </h2>
        </div>
      </div>

      {/* Story + Team — 2-column on desktop */}
      <div
        ref={storyRef}
        className={`w-full px-6 lg:px-10 animate-reveal${storyVisible ? ' is-visible' : ''}`}
        style={{ maxWidth: '1200px', margin: '0 auto', paddingTop: '64px', paddingBottom: '80px' }}
      >
        <div className="grid grid-cols-1 lg:grid-cols-12" style={{ gap: '64px' }}>
          {/* Story column */}
          <div className="lg:col-span-7">
            <p
              style={{
                fontSize: '1.0625rem',
                color: 'rgba(232, 228, 223, 0.75)',
                lineHeight: 1.8,
                marginBottom: '32px',
                maxWidth: '580px',
              }}
            >
              Efikton was built alongside Greek manufacturing teams dealing with real floor-level pressure: delayed purchase orders, ad-hoc planning, and firefighting between departments. We translated that lived reality into a practical operating method — not a consulting slide deck.
            </p>
            <p
              style={{
                fontSize: '1.0625rem',
                color: 'rgba(232, 228, 223, 0.75)',
                lineHeight: 1.8,
                marginBottom: '32px',
                maxWidth: '580px',
              }}
            >
              Our mission is simple: help Greek factories move from chaos to control with systems people actually use. We understand the family business culture, the supplier relationships built over decades, and the pressure of delivering into a global supply chain from a plant in Thessaloniki or Volos.
            </p>

            {/* Method origin */}
            <div
              style={{
                borderLeft: '2px solid #C17F3E',
                paddingLeft: '24px',
                marginTop: '40px',
              }}
            >
              <p
                style={{
                  fontSize: '0.9375rem',
                  color: '#E8E4DF',
                  lineHeight: 1.75,
                  fontStyle: 'italic',
                  fontWeight: 500,
                }}
              >
                "Our four-pillar method was shaped in live factory implementations, then standardized so each deployment compounds operational discipline — not prescribed by academics who have never seen a shop floor."
              </p>
              <p
                style={{
                  marginTop: '12px',
                  fontSize: '11px',
                  fontWeight: 600,
                  color: '#8B8680',
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                }}
              >
                The method's origin
              </p>
            </div>
          </div>

          {/* Team panel */}
          <div
            ref={teamRef}
            className={`lg:col-span-5 animate-reveal${teamVisible ? ' is-visible' : ''}`}
          >
            <div className="flex flex-col gap-5">
              {teamMembers.map((member, i) => (
                <div
                  key={i}
                  style={{
                    backgroundColor: 'rgba(10, 22, 40, 0.5)',
                    border: '1px solid rgba(193, 127, 62, 0.15)',
                    padding: '24px',
                    transition: 'border-color 0.15s ease',
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLDivElement).style.borderColor = 'rgba(193, 127, 62, 0.35)';
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLDivElement).style.borderColor = 'rgba(193, 127, 62, 0.15)';
                  }}
                >
                  <div className="flex items-start gap-4">
                    {/* Avatar placeholder — initials */}
                    <div
                      style={{
                        width: '52px',
                        height: '52px',
                        minWidth: '52px',
                        backgroundColor: 'rgba(193, 127, 62, 0.12)',
                        border: '1px solid rgba(193, 127, 62, 0.25)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontWeight: 700,
                        fontSize: '14px',
                        color: '#C17F3E',
                        letterSpacing: '0.04em',
                      }}
                      aria-hidden="true"
                    >
                      {member.initials}
                    </div>
                    <div>
                      <p
                        style={{
                          fontSize: '15px',
                          fontWeight: 700,
                          color: '#E8E4DF',
                          letterSpacing: '-0.01em',
                          marginBottom: '2px',
                        }}
                      >
                        {member.name}
                      </p>
                      <p
                        style={{
                          fontSize: '11px',
                          fontWeight: 600,
                          color: '#C17F3E',
                          letterSpacing: '0.08em',
                          textTransform: 'uppercase',
                          marginBottom: '10px',
                        }}
                      >
                        {member.title}
                      </p>
                      <p
                        style={{
                          fontSize: '13px',
                          color: 'rgba(139, 134, 128, 0.9)',
                          lineHeight: 1.65,
                        }}
                      >
                        {member.background}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Credibility stats */}
      <div
        ref={statsRef}
        className={`w-full px-6 lg:px-10 animate-reveal-stagger${statsVisible ? ' is-visible' : ''}`}
        style={{ maxWidth: '1200px', margin: '0 auto', paddingBottom: '128px' }}
        role="list"
        aria-label="Efikton credentials"
      >
        <div style={{ borderTop: '1px solid rgba(193, 127, 62, 0.12)' }}>
          <div className="grid grid-cols-1 sm:grid-cols-3" style={{}}>
            {credibilityStats.map((stat, i) => (
              <div
                key={i}
                role="listitem"
                data-index={i}
                style={{
                  padding: '40px 0',
                  borderRight: i < credibilityStats.length - 1 ? '1px solid rgba(193, 127, 62, 0.08)' : 'none',
                  paddingRight: i < credibilityStats.length - 1 ? '40px' : '0',
                  paddingLeft: i > 0 ? '40px' : '0',
                }}
                className={i > 0 ? 'sm:border-l sm:border-l-[rgba(193,127,62,0.08)]' : ''}
              >
                <div
                  style={{
                    fontSize: 'clamp(1.75rem, 3.5vw, 2.75rem)',
                    fontWeight: 800,
                    color: '#C17F3E',
                    letterSpacing: '-0.03em',
                    lineHeight: 1,
                    marginBottom: '8px',
                  }}
                  aria-label={`${stat.value} — ${stat.label}`}
                >
                  {stat.value}
                </div>
                <div
                  style={{
                    fontSize: '15px',
                    fontWeight: 600,
                    color: '#E8E4DF',
                    letterSpacing: '-0.01em',
                    marginBottom: '4px',
                  }}
                >
                  {stat.label}
                </div>
                <div style={{ fontSize: '13px', color: '#8B8680' }}>
                  {stat.sub}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
