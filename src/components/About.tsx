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
  { value: '12', label: 'Years in manufacturing', sub: 'Not consulting. Operations.' },
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
      className="bg-[var(--ef-charcoal)]"
      style={{ scrollMarginTop: '64px' }}
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
            <div
              className="w-7 bg-[var(--ef-copper)]"
              style={{ height: '1px' }}
              aria-hidden="true"
            />
            <span className="text-[var(--ef-copper)] text-[11px] font-semibold tracking-[0.12em] uppercase">
              Who We Are
            </span>
          </div>
          <h2
            id="about-heading"
            className="text-[var(--ef-text-primary)] font-extrabold leading-[1.05] mb-0"
            style={{
              fontSize: 'clamp(2rem, 4.5vw, 3.5rem)',
              letterSpacing: '-0.03em',
              maxWidth: '620px',
            }}
          >
            Built inside factories,<br />
            <span className="text-[var(--ef-copper)]">not boardrooms.</span>
          </h2>
        </div>
      </div>

      {/* Story + Team — 2-column on desktop */}
      <div
        ref={storyRef}
        className={`w-full px-6 lg:px-10 animate-reveal${storyVisible ? ' is-visible' : ''}`}
        style={{ maxWidth: '1200px', margin: '0 auto', paddingTop: '64px', paddingBottom: '80px' }}
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          {/* Story column */}
          <div className="lg:col-span-7">
            <p
              className="text-[rgba(232,228,223,0.75)] leading-[1.8] mb-8"
              style={{ fontSize: '1.0625rem', maxWidth: '580px' }}
            >
              Efikton was built alongside Greek manufacturing teams dealing with real floor-level pressure: delayed purchase orders, ad-hoc planning, and firefighting between departments. We translated that lived reality into a practical operating method, not a consulting slide deck.
            </p>
            <p
              className="text-[rgba(232,228,223,0.75)] leading-[1.8] mb-8"
              style={{ fontSize: '1.0625rem', maxWidth: '580px' }}
            >
              Our mission is simple: help Greek factories move from chaos to control with systems people actually use. We understand the family business culture, the supplier relationships built over decades, and the pressure of delivering into a global supply chain from a plant in Thessaloniki or Volos.
            </p>

            {/* Method origin — pull quote */}
            <div
              className="border-l-2 border-[var(--ef-copper)] pl-6 mt-10"
            >
              <p
                className="text-[var(--ef-text-primary)] leading-[1.75] italic font-medium"
                style={{ fontSize: '0.9375rem' }}
              >
                "Our four-pillar method was shaped in live factory implementations, then standardized so each deployment compounds operational discipline. Not prescribed by academics who have never seen a shop floor."
              </p>
              <p
                className="mt-3 text-[var(--ef-text-secondary)] text-[11px] font-semibold tracking-[0.08em] uppercase"
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
                  className="ef-team-card"
                  tabIndex={0}
                >
                  <div className="flex items-start gap-4">
                    {/* Avatar — initials */}
                    <div
                      className="flex items-center justify-center font-bold text-[14px] text-[var(--ef-copper)] tracking-[0.04em] shrink-0"
                      style={{
                        width: '52px',
                        height: '52px',
                        backgroundColor: 'rgba(193, 127, 62, 0.12)',
                        border: '1px solid rgba(193, 127, 62, 0.25)',
                      }}
                      aria-hidden="true"
                    >
                      {member.initials}
                    </div>
                    <div>
                      <p className="text-[15px] font-bold text-[var(--ef-text-primary)] tracking-[-0.01em] mb-0.5">
                        {member.name}
                      </p>
                      <p className="text-[11px] font-semibold text-[var(--ef-copper)] tracking-[0.08em] uppercase mb-2.5">
                        {member.title}
                      </p>
                      <p
                        className="text-[13px] text-[var(--ef-text-secondary)] leading-[1.65]"
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
          <div className="grid grid-cols-1 sm:grid-cols-3">
            {credibilityStats.map((stat, i) => (
              <div
                key={i}
                role="listitem"
                data-index={i}
                className={`ef-stat-item py-10 ${
                  i < credibilityStats.length - 1 ? 'pr-0 sm:pr-10' : ''
                } ${i > 0 ? 'pl-0 sm:pl-10' : ''}`}
              >
                <div
                  className="font-extrabold text-[var(--ef-copper)] leading-none mb-2"
                  style={{
                    fontSize: 'clamp(1.75rem, 3.5vw, 2.75rem)',
                    letterSpacing: '-0.03em',
                  }}
                  aria-label={`${stat.value}: ${stat.label}`}
                >
                  {stat.value}
                </div>
                <div className="text-[15px] font-semibold text-[var(--ef-text-primary)] tracking-[-0.01em] mb-1">
                  {stat.label}
                </div>
                <div className="text-[13px] text-[var(--ef-text-secondary)]">
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
