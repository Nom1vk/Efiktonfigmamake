import { useEffect, useRef, useState } from 'react';
import { useInView } from '../hooks/useInView';

const painPoints = [
  {
    num: '01',
    title: 'Consultant dependency',
    body: 'Every change, every report, every configuration requires the implementer back on-site. Your team never owns the system. They rent access to it.',
  },
  {
    num: '02',
    title: 'Workaround-heavy operations',
    body: 'The ERP said it could handle your process. It couldn\'t. Now you have a $2M system and a spreadsheet forest growing around it.',
  },
  {
    num: '03',
    title: 'Process-model mismatch',
    body: 'Oracle and SAP model how generic manufacturers work. Your factory has specific workflows, bill-of-materials structures, and costing logic. The ERP bent your process to fit its model, not the other way around.',
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
    erp: '12 to 24 months. Often longer.',
    efikton: 'Phase 1 live in 4 to 6 weeks.',
  },
  {
    dimension: 'Cost profile',
    erp: 'Upfront license + multi-year consultant engagement. Cost scales with complexity.',
    efikton: 'Phased rollout. Each phase funds the next. No big-bang budget risk.',
  },
  {
    dimension: 'Implementation dependency',
    erp: 'Permanent: changes require vendor or SI involvement. Your team is a user, not an owner.',
    efikton: 'Transfer of control is part of delivery. Your team runs it independently by Phase 3. Legacy ERP can be decommissioned after full rollout.',
  },
  {
    dimension: 'Operational fit',
    erp: 'Generic manufacturing model. You adapt to the software.',
    efikton: 'Configured to your factory\'s actual workflows, costing structure, and production logic.',
  },
];

/** Animated comparison table — builds row by row */
function ComparisonTable() {
  const [containerRef, containerVisible] = useInView<HTMLDivElement>({ threshold: 0.05 });
  const [headerVisible, setHeaderVisible] = useState(false);
  const [visibleRows, setVisibleRows] = useState<boolean[]>(Array(comparison.length).fill(false));
  const triggered = useRef(false);

  useEffect(() => {
    if (!containerVisible || triggered.current) return;
    triggered.current = true;

    // Header first
    setTimeout(() => setHeaderVisible(true), 0);

    // Then rows with stagger
    comparison.forEach((_, i) => {
      setTimeout(() => {
        setVisibleRows(prev => {
          const next = [...prev];
          next[i] = true;
          return next;
        });
      }, 200 + i * 200);
    });
  }, [containerVisible]);

  return (
    <div ref={containerRef}>
      <p className="ef-eyebrow text-[var(--ef-text-secondary)] mb-8">
        How Efikton compares to traditional ERP
      </p>

      {/* Desktop comparison table */}
      <div className="hidden md:block border border-[rgba(10,22,40,0.12)] rounded-[4px] overflow-hidden">
        {/* Header row */}
        <div
          className={`animate-reveal${headerVisible ? ' is-visible' : ''}`}
          style={{ display: 'grid', gridTemplateColumns: '25% 37.5% 37.5%', backgroundColor: 'var(--ef-navy)' }}
          role="row"
        >
          <div className="px-6 py-4" />
          <div className="px-6 py-4 border-l border-[rgba(255,255,255,0.07)]" role="columnheader">
            <span className="text-[11px] font-bold tracking-[0.12em] uppercase block" style={{ color: 'rgba(232,228,223,0.45)' }}>
              Traditional ERP
            </span>
            <span className="text-[10px] font-normal tracking-[0.08em] block mt-0.5" style={{ color: 'rgba(232,228,223,0.25)' }}>
              Oracle · SAP · legacy ERP
            </span>
          </div>
          <div className="px-6 py-4 border-l border-[var(--ef-copper-border)] text-[11px] font-bold text-[var(--ef-copper)] tracking-[0.12em] uppercase" role="columnheader">
            Efikton
          </div>
        </div>

        {/* Data rows — each cell slides from opposite sides */}
        {comparison.map((row, i) => (
          <div
            key={row.dimension}
            style={{
              display: 'grid',
              gridTemplateColumns: '25% 37.5% 37.5%',
              borderTop: '1px solid rgba(10,22,40,0.08)',
              backgroundColor: i % 2 === 0 ? 'var(--ef-surface)' : 'var(--ef-surface-alt)',
            }}
            role="row"
          >
            {/* Dimension label */}
            <div
              className={`erp-row-erp${visibleRows[i] ? ' is-visible' : ''}`}
              style={{
                padding: '20px 24px',
                fontSize: '12px',
                fontWeight: 600,
                color: 'var(--ef-navy)',
                letterSpacing: '0.01em',
                lineHeight: 1.5,
                transitionDelay: `${i * 200 + 200}ms`,
              }}
              role="rowheader"
            >
              {row.dimension}
            </div>

            {/* ERP cell — slides from left, red indicator */}
            <div
              className={`erp-row-erp erp-neg-indicator${visibleRows[i] ? ' is-visible' : ''}`}
              style={{
                padding: '20px 24px',
                fontSize: '13px',
                color: 'var(--ef-navy)',
                lineHeight: 1.65,
                borderLeft: '1px solid rgba(10,22,40,0.08)',
                transitionDelay: `${i * 200 + 200}ms`,
              }}
              role="cell"
            >
              <span style={{
                display: 'inline-block',
                fontSize: '10px',
                fontWeight: 700,
                color: 'rgba(200,60,60,0.7)',
                marginRight: '6px',
                verticalAlign: 'middle',
              }} aria-hidden="true">✗</span>
              {row.erp}
            </div>

            {/* Efikton cell — slides from right, copper indicator */}
            <div
              className={`erp-row-efikton erp-pos-indicator${visibleRows[i] ? ' is-visible' : ''}`}
              style={{
                padding: '20px 24px',
                fontSize: '13px',
                color: 'var(--ef-navy)',
                fontWeight: 500,
                lineHeight: 1.65,
                borderLeft: '1px solid rgba(193,127,62,0.15)',
                transitionDelay: `${i * 200 + 200}ms`,
              }}
              role="cell"
            >
              <span style={{
                display: 'inline-block',
                fontSize: '10px',
                fontWeight: 700,
                color: 'var(--ef-copper)',
                marginRight: '6px',
                verticalAlign: 'middle',
              }} aria-hidden="true">✓</span>
              {row.efikton}
            </div>
          </div>
        ))}

        {/* Summary row — fades in last */}
        <div
          className={`animate-reveal${visibleRows[comparison.length - 1] ? ' is-visible' : ''}`}
          style={{
            display: 'grid',
            gridTemplateColumns: '25% 75%',
            borderTop: '2px solid rgba(193,127,62,0.25)',
            backgroundColor: 'var(--ef-navy)',
            transitionDelay: `${comparison.length * 200 + 300}ms`,
          }}
          role="row"
        >
          <div className="px-6 py-5" />
          <div className="px-6 py-5 border-l border-[rgba(193,127,62,0.2)]" role="cell">
            <p style={{
              fontSize: '14px',
              fontWeight: 600,
              color: 'var(--ef-text-primary)',
              letterSpacing: '-0.01em',
              lineHeight: 1.5,
            }}>
              Same factory. Same team. Efikton gives you control — without the ERP consultant on speed dial.
            </p>
          </div>
        </div>
      </div>

      {/* Mobile stacked cards */}
      <div className="md:hidden flex flex-col gap-4">
        {comparison.map((row, i) => (
          <div
            key={row.dimension}
            className={`animate-reveal${visibleRows[i] ? ' is-visible' : ''}`}
            style={{
              border: '1px solid rgba(10,22,40,0.12)',
              borderRadius: '4px',
              overflow: 'hidden',
              transitionDelay: `${i * 200}ms`,
            }}
          >
            <div className="px-4 py-3 bg-[var(--ef-navy)] text-[11px] font-bold text-[var(--ef-text-primary)] tracking-[0.06em] uppercase">
              {row.dimension}
            </div>
            <div className="grid grid-cols-2">
              <div className="p-4 bg-[var(--ef-surface-alt)] border-r border-[rgba(10,22,40,0.08)]" style={{ borderLeft: '3px solid rgba(200,60,60,0.3)' }}>
                <div className="text-[10px] font-bold text-[var(--ef-text-secondary)] tracking-[0.1em] uppercase mb-1.5">Legacy ERP</div>
                <p className="text-xs text-[var(--ef-navy)] leading-[1.6]">{row.erp}</p>
              </div>
              <div className="p-4 bg-[var(--ef-surface)]" style={{ borderLeft: '3px solid var(--ef-copper)' }}>
                <div className="text-[10px] font-bold text-[var(--ef-copper)] tracking-[0.1em] uppercase mb-1.5">Efikton</div>
                <p className="text-xs text-[var(--ef-navy)] font-medium leading-[1.6]">{row.efikton}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export function ERPReplacement() {
  const [headerRef, headerVisible] = useInView<HTMLDivElement>({ threshold: 0.1 });
  const [painRef, painVisible] = useInView<HTMLDivElement>({ threshold: 0.05 });

  return (
    <section
      id="erp-replacement"
      className="bg-[var(--ef-surface)] scroll-mt-16"
      aria-labelledby="erp-heading"
    >
      <div className="w-full px-6 lg:px-10 py-32 mx-auto max-w-[1200px]">
        {/* Header */}
        <div
          ref={headerRef}
          className={`animate-reveal mb-20${headerVisible ? ' is-visible' : ''}`}
        >
          <div className="flex items-center gap-3 mb-8">
            <div className="w-7 h-px bg-[var(--ef-copper)]" aria-hidden="true" />
            <span className="ef-eyebrow">ERP Replacement</span>
          </div>

          <h2
            id="erp-heading"
            className="text-[var(--ef-navy)] font-extrabold leading-[1.05] tracking-[-0.03em] max-w-[680px] mb-6"
            style={{ fontSize: 'clamp(2rem, 4.5vw, 3.5rem)' }}
          >
            Already running an ERP that still leaves your factory in chaos?
          </h2>

          <p className="text-[var(--ef-navy)] text-[1.0625rem] leading-[1.75] max-w-[560px]">
            If Oracle, SAP, or another legacy ERP forced workarounds instead of control, Efikton
            replaces consultant-heavy rollouts with phased, factory-first delivery. You get a system
            your team owns, not one you pay to maintain.
          </p>
        </div>

        {/* Four pain points */}
        <div
          ref={painRef}
          className={`animate-reveal mb-24${painVisible ? ' is-visible' : ''}`}
        >
          <p className="ef-eyebrow text-[var(--ef-text-secondary)] mb-10">
            Why legacy ERP implementations fail manufacturing operations
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 border-t border-[rgba(10,22,40,0.1)]">
            {painPoints.map((point, i) => (
              <div
                key={point.num}
                className={[
                  'py-8 pl-5 border-b border-[rgba(10,22,40,0.1)] pain-point-cell',
                  'border-l-2 border-l-[var(--ef-copper)] md:border-l-0',
                  i % 2 === 0
                    ? 'pr-12 md:border-r border-[rgba(10,22,40,0.1)]'
                    : 'md:pl-12',
                ].join(' ')}
              >
                <div
                  className="text-[11px] font-bold tracking-[0.1em] mb-3"
                  style={{ color: 'rgba(193,127,62,0.6)' }}
                  aria-hidden="true"
                >
                  {point.num}
                </div>
                <h3 className="text-[var(--ef-navy)] text-[1.0625rem] font-bold tracking-[-0.01em] mb-2.5 leading-[1.3]">
                  {point.title}
                </h3>
                <p className="text-[var(--ef-navy)] text-sm leading-[1.75]">
                  {point.body}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Vendor continuity / data portability */}
        <div className="mb-16 border border-[rgba(193,127,62,0.18)] bg-[rgba(10,22,40,0.03)] p-6 md:p-8">
          <div className="flex items-center gap-3 mb-5">
            <div className="w-7 h-px bg-[var(--ef-copper)]" aria-hidden="true" />
            <span className="text-[var(--ef-copper)] text-[11px] font-semibold tracking-[0.12em] uppercase">
              Your Data, Your Control
            </span>
          </div>
          <h3 className="text-[var(--ef-navy)] font-bold leading-[1.15] tracking-[-0.02em] mb-5" style={{ fontSize: 'clamp(1.125rem, 2vw, 1.5rem)' }}>
            Your team runs it independently by Phase 3 —<br className="hidden md:block" />
            <span className="text-[var(--ef-copper)]">and your data stays yours. Always.</span>
          </h3>
          <ul className="space-y-3" aria-label="Vendor continuity and data portability commitments">
            {[
              'Export your operational data anytime — full CSV and API export, on demand, no request required.',
              'Open standards and documented schemas. No black-box data structures, no proprietary lock-in.',
              'Your team owns operations by Phase 3. We transfer control, not dependency.',
              'Contractual continuity protection: transition support and data handoff provisions are built into every engagement — regardless of what happens to us.',
            ].map((text, i) => (
              <li key={i} className="flex items-start gap-3 text-sm md:text-[0.9375rem] text-[var(--ef-navy)] leading-[1.7]">
                <span className="mt-[7px] shrink-0 w-[6px] h-[6px] rounded-full bg-[var(--ef-copper)]" aria-hidden="true" />
                <span>{text}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Animated comparison table */}
        <ComparisonTable />
      </div>
    </section>
  );
}
