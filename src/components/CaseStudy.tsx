import { useInView } from '../hooks/useInView';
import { useCountUp } from '../hooks/useCountUp';
import { usePhaseScrollProgress } from '../hooks/usePhaseScrollProgress';
import { useParams } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';

// φ timing constants
const PHI_DURATION = 1618;
const PHASE_DURATION = PHI_DURATION / 2; // 809ms per phase reveal

// Activation thresholds per ticket spec
const PHASE_THRESHOLDS = [0.15, 0.45, 0.75];

/**
 * A single animated win checkmark using SVG stroke-dashoffset draw
 */
function AnimatedCheckmark({
  active,
  delay,
}: {
  active: boolean;
  delay: number;
}) {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="none"
      className={`case-phase-check${active ? ' case-phase-check--active' : ''}`}
      style={{ '--check-delay': `${delay}ms` } as React.CSSProperties}
      aria-hidden="true"
    >
      <path
        d="M2.5 7L5.5 10L11.5 4"
        stroke="var(--ef-copper)"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        pathLength="1"
        className="case-phase-check__path"
      />
    </svg>
  );
}

/**
 * A single implementation phase card that animates in when its threshold is crossed
 */
function PhaseCard({
  phase,
  index,
  active,
}: {
  phase: Phase;
  index: number;
  active: boolean;
}) {
  // Track if we've ever activated (latch forward — don't un-animate on reverse scroll)
  const [latched, setLatched] = useState(false);
  const [pulseKey, setPulseKey] = useState(0);
  const prevActive = useRef(false);

  useEffect(() => {
    if (active && !prevActive.current) {
      setLatched(true);
      setPulseKey((k) => k + 1); // trigger pulse re-animation
    }
    prevActive.current = active;
  }, [active]);

  const isVisible = latched;

  return (
    <div
      className={`case-phase-row${isVisible ? ' case-phase-row--active' : ''}`}
      style={{
        display: 'grid',
        gridTemplateColumns: '80px 1fr',
        gap: '32px',
        paddingTop: '40px',
        paddingBottom: '40px',
        borderTop: '1px solid rgba(232, 228, 223, 0.07)',
      }}
    >
      {/* Phase number column */}
      <div style={{ position: 'relative' }}>
        <span
          key={pulseKey}
          className={`case-phase-number${isVisible ? ' case-phase-number--pulse' : ''}`}
          style={{
            fontSize: 'clamp(2rem, 3vw, 2.5rem)',
            fontWeight: 800,
            color: 'rgba(193, 127, 62, 0.25)',
            letterSpacing: '-0.04em',
            display: 'block',
          }}
        >
          {phase.number}
        </span>
      </div>

      {/* Content column */}
      <div>
        {/* Title + duration */}
        <div
          className="case-phase-title"
          style={{ display: 'flex', alignItems: 'baseline', gap: '16px', marginBottom: '12px', flexWrap: 'wrap' }}
        >
          <h4
            style={{
              color: 'var(--ef-text-primary)',
              fontSize: '17px',
              fontWeight: 700,
              letterSpacing: '-0.02em',
            }}
          >
            {phase.title}
          </h4>
          <span
            style={{
              fontSize: '12px',
              color: 'var(--ef-text-secondary)',
              fontWeight: 500,
              letterSpacing: '0.04em',
            }}
          >
            {phase.duration}
          </span>
        </div>

        {/* Description */}
        <p
          className="case-phase-body"
          style={{
            color: 'rgba(232, 228, 223, 0.6)',
            fontSize: '14px',
            lineHeight: 1.8,
            marginBottom: '20px',
            maxWidth: '560px',
          }}
        >
          {phase.description}
        </p>

        {/* Win items with animated checkmarks */}
        <ul style={{ display: 'flex', flexDirection: 'column', gap: '8px', listStyle: 'none', padding: 0, margin: 0 }}>
          {phase.wins.map((win, j) => (
            <li
              key={j}
              className={`case-phase-win${isVisible ? ' case-phase-win--active' : ''}`}
              style={{ '--win-delay': `${200 + j * 80}ms` } as React.CSSProperties}
            >
              <AnimatedCheckmark active={isVisible} delay={200 + j * 80} />
              <span style={{ fontSize: '13px', color: 'rgba(232, 228, 223, 0.75)', lineHeight: 1.6 }}>
                {win}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

// Parse metric string → { count, suffix } or null if not numeric
function parseMetricCount(metric: string): { count: number; suffix: string } | null {
  const m = metric.match(/^(\d+(?:\.\d+)?)(x|%)?(\s+days)?$/i);
  if (!m) return null;
  const num = parseFloat(m[1]);
  const suffix = m[2] ? m[2].toLowerCase() : m[3] ? m[3] : '';
  return { count: num, suffix };
}

function AnimatedResultMetric({ metric, visible }: { metric: string; visible: boolean }) {
  const parsed = parseMetricCount(metric);
  const counted = useCountUp({
    end: parsed?.count ?? 0,
    duration: 1618,
    suffix: parsed?.suffix ?? '',
    enabled: visible && parsed !== null,
  });
  if (!parsed) return <>{metric}</>;
  return <>{visible ? counted : metric}</>;
}

interface Phase {
  number: string;
  title: string;
  duration: string;
  description: string;
  wins: string[];
}

interface Result {
  metric: string;
  label: string;
  detail: string;
}

interface CaseStudyData {
  company: string;
  industry: string;
  size: string;
  location: string;
  revenue: string;
  tagline: string;
  challenge: string;
  challenges: string[];
  phases: Phase[];
  results: Result[];
  quote: string;
  quotePerson: string;
  quoteTitle: string;
}

const thermotechCase: CaseStudyData = {
  company: 'Thermotech Hellas',
  industry: 'Heating Systems Manufacturing',
  size: '80 employees',
  location: 'Larissa, Greece',
  revenue: 'Family-owned, 3rd generation',
  tagline: 'Solar collectors, floor-standing boilers, and heat pump integration units for the Greek and Balkan markets.',
  challenge:
    'After 28 years in operation, Thermotech Hellas had outgrown the systems that built them. Every pre-winter peak season turned into an operational crisis. Delivery dates were promises nobody believed.',
  challenges: [
    'Production scheduling done on whiteboards and gut instinct. Solar collector orders for Q3 (peak pre-winter season) were routinely delivered 3 to 6 weeks late, costing repeat business from HVAC installers.',
    'Costing on spreadsheets across 3 product lines. After a margin analysis in late 2021, the owner discovered their 80L floor-standing boiler line had been sold at a net loss for 14 months due to a raw material cost formula error nobody caught.',
    'Their senior production manager of 19 years retired in March 2022. With him went the routing logic for 34 SKUs, the informal supplier relationships, and the institutional memory of every workaround in the plant.',
    'No reliable demand signal. Each September brought panic overtime, rushed supplier calls, and missed shipments to export partners in Bulgaria and Romania.',
  ],
  phases: [
    {
      number: '01',
      title: 'Materials and Costing',
      duration: 'Months 1 and 2',
      description:
        'Efikton was implemented starting with the bill of materials and product costing engine. Every SKU was repriced with real cost data: raw copper tube, insulation panels, storage tank steel, and labor routing per product line.',
      wins: [
        'Discovered 4 additional SKUs with negative contribution margins',
        'Recalculated pricing on 12 floor-standing boiler variants within 6 weeks',
        'First accurate cost-per-unit data the company had ever had',
      ],
    },
    {
      number: '02',
      title: 'Production Planning',
      duration: 'Months 3 and 4',
      description:
        'With accurate materials and costing live, production planning was activated. Capacity was mapped per work center: tube cutting, tank welding, insulation fitting, quality test bench. Seasonal demand patterns from 5 years of sales data were fed into the planning engine.',
      wins: [
        'First production schedule the floor team actually trusted and followed',
        'Pre-winter Q3 2023 planned 10 weeks in advance, not 10 days',
        'New production staff trained to full operation in 4 days using system documentation',
      ],
    },
    {
      number: '03',
      title: 'Full System Live',
      duration: 'End of Month 4',
      description:
        'The full Efikton system went live connecting sales orders, production planning, materials procurement, and financial reporting into one operating loop. Monthly P&L became a real-time view, not a quarterly reconstruction.',
      wins: [
        'Monthly close reduced from 3 weeks to 4 days',
        'Annual forecast achievable by June with sufficient confidence to commit to export contracts',
        'Zero production disruptions during the transition',
      ],
    },
  ],
  results: [
    { metric: '5x', label: 'Profit Growth', detail: 'Over 24 months post-implementation' },
    { metric: '94%', label: 'OTIF Delivery', detail: 'Up from 62% before Efikton' },
    { metric: '4 days', label: 'Monthly Close', detail: 'Down from 3 weeks of manual reconciliation' },
    { metric: '4 days', label: 'Staff Onboarding', detail: 'New production staff operational in days, not months' },
    { metric: 'Q2', label: 'Annual Forecast', detail: 'Full-year forecast locked by midyear with confidence' },
    { metric: '0', label: 'Year-End Surprises', detail: 'Predictable P&L every month, no quarterly reconstruction' },
  ],
  quote:
    'For the first time in 20 years, I know exactly where we stand financially every month. No surprises at year-end. We went from discovering we sold boilers at a loss, to knowing our margin on every unit before we quote the customer.',
  quotePerson: 'Dimitris Alexopoulos',
  quoteTitle: 'Owner, Thermotech Hellas',
};

export function CaseStudy() {
  const { paletteId } = useParams<{ paletteId: string }>();
  const homeHref = `/${paletteId || '1'}/#results`;
  const [headerRef, headerVisible] = useInView<HTMLDivElement>({ threshold: 0.1 });
  const [challengeRef, challengeVisible] = useInView<HTMLDivElement>({ threshold: 0.05 });
  const [phaseScrollRef, phaseProgress] = usePhaseScrollProgress<HTMLDivElement>(0.1);
  const [resultsRef, resultsVisible] = useInView<HTMLDivElement>({ threshold: 0.05 });
  const [quoteRef, quoteVisible] = useInView<HTMLDivElement>({ threshold: 0.1 });

  const cs = thermotechCase;

  return (
    <section
      id="case-study"
      style={{ backgroundColor: 'var(--ef-navy)', scrollMarginTop: '64px' }}
      aria-labelledby="case-study-heading"
    >
      {/* Header */}
      <div
        className="w-full px-6 lg:px-10"
        style={{ maxWidth: '1200px', margin: '0 auto', paddingTop: '128px', paddingBottom: '128px' }}
      >
        <div
          ref={headerRef}
          className={`animate-reveal${headerVisible ? ' is-visible' : ''}`}
        >
          <div className="flex items-center gap-3 mb-8">
            <div style={{ width: '28px', height: '1px', backgroundColor: 'var(--ef-copper)' }} aria-hidden="true" />
            <span style={{ color: 'var(--ef-copper)', fontSize: '11px', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase' }}>
              Case Study
            </span>
          </div>

          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '8px',
              marginBottom: '40px',
            }}
          >
            <h2
              id="case-study-heading"
              style={{
                color: 'var(--ef-text-primary)',
                fontSize: 'clamp(2rem, 4.5vw, 3.5rem)',
                fontWeight: 800,
                letterSpacing: '-0.03em',
                lineHeight: 1.05,
              }}
            >
              {cs.company}
            </h2>
            <p style={{ color: 'var(--ef-copper)', fontSize: '15px', fontWeight: 600, letterSpacing: '0.02em' }}>
              {cs.industry}
            </p>
          </div>

          {/* Company metadata */}
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '24px',
              marginBottom: '48px',
              paddingBottom: '48px',
              borderBottom: '1px solid rgba(193, 127, 62, 0.15)',
            }}
          >
            {[
              { label: 'Employees', value: cs.size },
              { label: 'Location', value: cs.location },
              { label: 'Heritage', value: cs.revenue },
            ].map((item) => (
              <div key={item.label}>
                <div style={{ fontSize: '11px', fontWeight: 600, color: 'var(--ef-text-secondary)', letterSpacing: '0.10em', textTransform: 'uppercase', marginBottom: '4px' }}>
                  {item.label}
                </div>
                <div style={{ fontSize: '14px', color: 'var(--ef-text-primary)', fontWeight: 500 }}>
                  {item.value}
                </div>
              </div>
            ))}
          </div>

          <p style={{ color: 'rgba(232, 228, 223, 0.7)', fontSize: '1.0625rem', lineHeight: 1.8, maxWidth: '640px' }}>
            {cs.tagline}
          </p>
        </div>
      </div>

      {/* Challenge */}
      <div
        className="w-full px-6 lg:px-10"
        style={{ maxWidth: '1200px', margin: '0 auto', paddingBottom: '96px' }}
      >
        <div
          ref={challengeRef}
          className={`animate-reveal${challengeVisible ? ' is-visible' : ''}`}
        >
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '64px',
              alignItems: 'start',
            }}
          >
            <div>
              <h3 style={{ color: 'var(--ef-copper)', fontSize: '11px', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '24px' }}>
                The Challenge
              </h3>
              <p style={{ color: 'var(--ef-text-primary)', fontSize: '1.125rem', fontWeight: 500, lineHeight: 1.7, letterSpacing: '-0.01em' }}>
                {cs.challenge}
              </p>
            </div>
            <div>
              <ul style={{ display: 'flex', flexDirection: 'column', gap: '20px', listStyle: 'none', padding: 0, margin: 0 }}>
                {cs.challenges.map((c, i) => (
                  <li
                    key={i}
                    style={{
                      display: 'flex',
                      gap: '16px',
                      paddingBottom: '20px',
                      borderBottom: i < cs.challenges.length - 1 ? '1px solid rgba(193, 127, 62, 0.1)' : 'none',
                    }}
                  >
                    <div
                      style={{
                        flexShrink: 0,
                        width: '6px',
                        height: '6px',
                        borderRadius: '50%',
                        backgroundColor: 'var(--ef-copper)',
                        marginTop: '8px',
                      }}
                      aria-hidden="true"
                    />
                    <p style={{ color: 'rgba(232, 228, 223, 0.65)', fontSize: '14px', lineHeight: 1.75 }}>
                      {c}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Implementation phases — scroll-driven timeline build */}
      <div
        className="w-full px-6 lg:px-10"
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          paddingBottom: '96px',
          borderTop: '1px solid rgba(193, 127, 62, 0.12)',
          paddingTop: '80px',
        }}
      >
        <div
          ref={phaseScrollRef as React.RefObject<HTMLDivElement>}
          className="case-phases-container"
          style={{ '--case-phase-progress': '0' } as React.CSSProperties}
        >
          <h3 style={{ color: 'var(--ef-copper)', fontSize: '11px', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '48px' }}>
            The Implementation
          </h3>
          <p style={{ color: 'rgba(232, 228, 223, 0.6)', fontSize: '14px', marginBottom: '48px', maxWidth: '480px', lineHeight: 1.7 }}>
            Phased rollout over 4 months. Production never stopped. Each phase delivered measurable value before the next began.
          </p>

          {/* Timeline layout: copper line on left + phase cards */}
          <div style={{ position: 'relative' }}>
            {/* Copper progress line — draws downward with scroll */}
            <div
              className="case-phase-timeline-track"
              aria-hidden="true"
            >
              <div className="case-phase-timeline-fill" />
            </div>

            {/* Phase cards */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
              {cs.phases.map((phase, i) => (
                <PhaseCard
                  key={i}
                  phase={phase}
                  index={i}
                  active={phaseProgress >= PHASE_THRESHOLDS[i]}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Results */}
      <div
        className="w-full px-6 lg:px-10"
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          paddingBottom: '96px',
          borderTop: '1px solid rgba(193, 127, 62, 0.12)',
          paddingTop: '80px',
        }}
      >
        <div
          ref={resultsRef}
          className={`animate-reveal${resultsVisible ? ' is-visible' : ''}`}
        >
          <h3 style={{ color: 'var(--ef-copper)', fontSize: '11px', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '48px' }}>
            The Results
          </h3>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
              gap: '1px',
              backgroundColor: 'rgba(193, 127, 62, 0.1)',
            }}
            role="list"
            aria-label="Case study results"
          >
            {cs.results.map((result, i) => (
              <div
                key={i}
                role="listitem"
                style={{
                  backgroundColor: 'var(--ef-navy)',
                  padding: '32px 28px',
                }}
              >
                <div
                  style={{
                    fontSize: 'clamp(2rem, 4vw, 3rem)',
                    fontWeight: 800,
                    color: 'var(--ef-copper)',
                    letterSpacing: '-0.04em',
                    lineHeight: 1,
                    marginBottom: '8px',
                  }}
                >
                  <AnimatedResultMetric metric={result.metric} visible={resultsVisible} />
                </div>
                <div style={{ fontSize: '14px', fontWeight: 700, color: 'var(--ef-text-primary)', marginBottom: '4px' }}>
                  {result.label}
                </div>
                <div style={{ fontSize: '12px', color: 'var(--ef-text-secondary)', lineHeight: 1.5 }}>
                  {result.detail}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Quote */}
      <div
        className="w-full px-6 lg:px-10"
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          paddingBottom: '128px',
          borderTop: '1px solid rgba(193, 127, 62, 0.12)',
          paddingTop: '80px',
        }}
      >
        <div
          ref={quoteRef}
          className={`animate-reveal${quoteVisible ? ' is-visible' : ''}`}
        >
          <blockquote
            style={{
              borderLeft: '3px solid var(--ef-copper)',
              paddingLeft: '32px',
              maxWidth: '680px',
            }}
          >
            <p
              style={{
                fontSize: 'clamp(1.125rem, 2.5vw, 1.5rem)',
                fontWeight: 500,
                color: 'var(--ef-text-primary)',
                lineHeight: 1.65,
                letterSpacing: '-0.02em',
                fontStyle: 'italic',
                marginBottom: '24px',
              }}
            >
              "{cs.quote}"
            </p>
            <cite style={{ fontStyle: 'normal', display: 'block' }}>
              <span style={{ fontSize: '14px', fontWeight: 700, color: 'var(--ef-text-primary)', display: 'block', marginBottom: '2px' }}>
                {cs.quotePerson}
              </span>
              <span style={{ fontSize: '12px', fontWeight: 600, color: 'var(--ef-copper)', letterSpacing: '0.06em', textTransform: 'uppercase' }}>
                {cs.quoteTitle}
              </span>
            </cite>
          </blockquote>

          {/* Back link */}
          <div style={{ marginTop: '64px' }}>
            <a
              href={homeHref}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                fontSize: '13px',
                fontWeight: 600,
                color: 'var(--ef-copper)',
                letterSpacing: '0.04em',
                textDecoration: 'none',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--ef-copper-light)')}
              onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--ef-copper)')}
            >
              ← Back to Results
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
