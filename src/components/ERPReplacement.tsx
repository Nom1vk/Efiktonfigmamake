import { useInView } from '../hooks/useInView';

const painPoints = [
  {
    num: '01',
    title: 'Consultant dependency',
    body: 'Every change, every report, every configuration requires the implementer back on-site. Your team never owns the system — they rent access to it.',
  },
  {
    num: '02',
    title: 'Workaround-heavy operations',
    body: 'The ERP said it could handle your process. It couldn\'t. Now you have a $2M system and a spreadsheet forest growing around it.',
  },
  {
    num: '03',
    title: 'Process-model mismatch',
    body: 'Oracle and SAP model how generic manufacturers work. Your factory has specific workflows, bill-of-materials structures, and costing logic. The ERP bent your process to fit its model — not the other way around.',
  },
  {
    num: '04',
    title: 'Maintenance cost vs delivered value',
    body: 'Annual license + support + consultant retainers consume budget that should go into the operation. The ERP has become an overhead line item, not a strategic asset.',
  },
];

const comparison = [
  {
    dimension: 'Implementation timeline',
    erp: '12–24 months. Often longer.',
    efikton: 'Phase 1 live in 4–6 weeks.',
  },
  {
    dimension: 'Cost profile',
    erp: 'Upfront license + multi-year consultant engagement. Cost scales with complexity.',
    efikton: 'Phased rollout. Each phase funds the next. No big-bang budget risk.',
  },
  {
    dimension: 'Implementation dependency',
    erp: 'Permanent: changes require vendor or SI involvement. Your team is a user, not an owner.',
    efikton: 'Transfer of control is part of delivery. Your team runs it independently by Phase 3.',
  },
  {
    dimension: 'Operational fit',
    erp: 'Generic manufacturing model. You adapt to the software.',
    efikton: 'Configured to your factory\'s actual workflows, costing structure, and production logic.',
  },
];

export function ERPReplacement() {
  const [headerRef, headerVisible] = useInView<HTMLDivElement>({ threshold: 0.1 });
  const [painRef, painVisible] = useInView<HTMLDivElement>({ threshold: 0.05 });
  const [tableRef, tableVisible] = useInView<HTMLDivElement>({ threshold: 0.05 });

  return (
    <section
      id="erp-replacement"
      style={{ backgroundColor: '#F5F2ED', scrollMarginTop: '64px' }}
      aria-labelledby="erp-heading"
    >
      <div
        className="w-full px-6 lg:px-10"
        style={{ maxWidth: '1200px', margin: '0 auto', paddingTop: '128px', paddingBottom: '128px' }}
      >
        {/* Header */}
        <div
          ref={headerRef}
          className={`animate-reveal${headerVisible ? ' is-visible' : ''}`}
          style={{ marginBottom: '80px' }}
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
              ERP Replacement
            </span>
          </div>

          <h2
            id="erp-heading"
            style={{
              color: '#0A1628',
              fontSize: 'clamp(2rem, 4.5vw, 3.5rem)',
              fontWeight: 800,
              letterSpacing: '-0.03em',
              lineHeight: 1.05,
              maxWidth: '680px',
              marginBottom: '24px',
            }}
          >
            Already running an ERP that still leaves your factory in chaos?
          </h2>

          <p
            style={{
              color: '#4A4540',
              fontSize: '1.0625rem',
              lineHeight: 1.75,
              maxWidth: '560px',
            }}
          >
            If Oracle, SAP, or another legacy ERP forced workarounds instead of control, Efikton
            replaces consultant-heavy rollouts with phased, factory-first delivery. You get a system
            your team owns — not one you pay to maintain.
          </p>
        </div>

        {/* Four pain points */}
        <div
          ref={painRef}
          className={`animate-reveal${painVisible ? ' is-visible' : ''}`}
          style={{ marginBottom: '96px' }}
        >
          <p
            style={{
              fontSize: '11px',
              fontWeight: 600,
              color: '#8B8680',
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              marginBottom: '40px',
            }}
          >
            Why legacy ERP implementations fail manufacturing operations
          </p>

          <div
            className="grid grid-cols-1 md:grid-cols-2"
            style={{ gap: '0', borderTop: '1px solid rgba(10,22,40,0.1)' }}
          >
            {painPoints.map((point, i) => (
              <div
                key={point.num}
                style={{
                  padding: '32px 0',
                  paddingRight: i % 2 === 0 ? '48px' : '0',
                  paddingLeft: i % 2 === 1 ? '48px' : '0',
                  borderBottom: '1px solid rgba(10,22,40,0.1)',
                  borderRight: i % 2 === 0 ? '1px solid rgba(10,22,40,0.1)' : 'none',
                }}
                className="pain-point-cell"
              >
                <div
                  style={{
                    fontSize: '11px',
                    fontWeight: 700,
                    color: 'rgba(193,127,62,0.6)',
                    letterSpacing: '0.1em',
                    marginBottom: '12px',
                  }}
                  aria-hidden="true"
                >
                  {point.num}
                </div>
                <h3
                  style={{
                    color: '#0A1628',
                    fontSize: '1.0625rem',
                    fontWeight: 700,
                    letterSpacing: '-0.01em',
                    marginBottom: '10px',
                    lineHeight: 1.3,
                  }}
                >
                  {point.title}
                </h3>
                <p
                  style={{
                    color: '#4A4540',
                    fontSize: '14px',
                    lineHeight: 1.75,
                  }}
                >
                  {point.body}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Comparison table */}
        <div
          ref={tableRef}
          className={`animate-reveal${tableVisible ? ' is-visible' : ''}`}
        >
          <p
            style={{
              fontSize: '11px',
              fontWeight: 600,
              color: '#8B8680',
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              marginBottom: '32px',
            }}
          >
            How Efikton compares to traditional ERP
          </p>

          {/* Desktop comparison */}
          <div
            className="hidden md:block"
            style={{
              border: '1px solid rgba(10,22,40,0.12)',
              borderRadius: '4px',
              overflow: 'hidden',
            }}
          >
            {/* Header row */}
            <div
              className="grid"
              style={{
                gridTemplateColumns: '2fr 3fr 3fr',
                backgroundColor: '#0A1628',
              }}
            >
              <div style={{ padding: '16px 24px' }} />
              <div
                style={{
                  padding: '16px 24px',
                  fontSize: '11px',
                  fontWeight: 700,
                  color: 'rgba(232,228,223,0.45)',
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  borderLeft: '1px solid rgba(255,255,255,0.07)',
                }}
              >
                Traditional ERP
                <span
                  style={{
                    display: 'block',
                    fontSize: '10px',
                    color: 'rgba(232,228,223,0.25)',
                    fontWeight: 400,
                    letterSpacing: '0.08em',
                    marginTop: '2px',
                  }}
                >
                  Oracle · SAP · legacy ERP
                </span>
              </div>
              <div
                style={{
                  padding: '16px 24px',
                  fontSize: '11px',
                  fontWeight: 700,
                  color: '#C17F3E',
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  borderLeft: '1px solid rgba(193,127,62,0.2)',
                }}
              >
                Efikton
              </div>
            </div>

            {/* Data rows */}
            {comparison.map((row, i) => (
              <div
                key={row.dimension}
                className="grid"
                style={{
                  gridTemplateColumns: '2fr 3fr 3fr',
                  borderTop: '1px solid rgba(10,22,40,0.08)',
                  backgroundColor: i % 2 === 0 ? '#F5F2ED' : '#EDEAE5',
                }}
              >
                <div
                  style={{
                    padding: '20px 24px',
                    fontSize: '12px',
                    fontWeight: 600,
                    color: '#0A1628',
                    letterSpacing: '0.01em',
                    lineHeight: 1.5,
                  }}
                >
                  {row.dimension}
                </div>
                <div
                  style={{
                    padding: '20px 24px',
                    fontSize: '13px',
                    color: '#4A4540',
                    lineHeight: 1.65,
                    borderLeft: '1px solid rgba(10,22,40,0.08)',
                  }}
                >
                  {row.erp}
                </div>
                <div
                  style={{
                    padding: '20px 24px',
                    fontSize: '13px',
                    color: '#0A1628',
                    lineHeight: 1.65,
                    fontWeight: 500,
                    borderLeft: '1px solid rgba(193,127,62,0.15)',
                  }}
                >
                  {row.efikton}
                </div>
              </div>
            ))}
          </div>

          {/* Mobile comparison: stacked cards */}
          <div className="md:hidden" style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {comparison.map((row) => (
              <div
                key={row.dimension}
                style={{
                  border: '1px solid rgba(10,22,40,0.12)',
                  borderRadius: '4px',
                  overflow: 'hidden',
                }}
              >
                <div
                  style={{
                    padding: '12px 16px',
                    backgroundColor: '#0A1628',
                    fontSize: '11px',
                    fontWeight: 700,
                    color: '#E8E4DF',
                    letterSpacing: '0.06em',
                    textTransform: 'uppercase',
                  }}
                >
                  {row.dimension}
                </div>
                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: '1fr 1fr',
                  }}
                >
                  <div
                    style={{
                      padding: '16px',
                      backgroundColor: '#EDEAE5',
                      borderRight: '1px solid rgba(10,22,40,0.08)',
                    }}
                  >
                    <div
                      style={{
                        fontSize: '10px',
                        fontWeight: 700,
                        color: '#8B8680',
                        letterSpacing: '0.1em',
                        textTransform: 'uppercase',
                        marginBottom: '6px',
                      }}
                    >
                      Legacy ERP
                    </div>
                    <p style={{ fontSize: '12px', color: '#4A4540', lineHeight: 1.6 }}>{row.erp}</p>
                  </div>
                  <div style={{ padding: '16px', backgroundColor: '#F5F2ED' }}>
                    <div
                      style={{
                        fontSize: '10px',
                        fontWeight: 700,
                        color: '#C17F3E',
                        letterSpacing: '0.1em',
                        textTransform: 'uppercase',
                        marginBottom: '6px',
                      }}
                    >
                      Efikton
                    </div>
                    <p
                      style={{
                        fontSize: '12px',
                        color: '#0A1628',
                        lineHeight: 1.6,
                        fontWeight: 500,
                      }}
                    >
                      {row.efikton}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
