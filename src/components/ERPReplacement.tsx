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

export function ERPReplacement() {
  const [headerRef, headerVisible] = useInView<HTMLDivElement>({ threshold: 0.1 });
  const [painRef, painVisible] = useInView<HTMLDivElement>({ threshold: 0.05 });
  const [tableRef, tableVisible] = useInView<HTMLDivElement>({ threshold: 0.05 });

  return (
    <section
      id="erp-replacement"
      className="bg-[#F5F2ED] scroll-mt-16"
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
            className="text-[#0A1628] font-extrabold leading-[1.05] tracking-[-0.03em] max-w-[680px] mb-6"
            style={{ fontSize: 'clamp(2rem, 4.5vw, 3.5rem)' }}
          >
            Already running an ERP that still leaves your factory in chaos?
          </h2>

          <p className="text-[#4A4540] text-[1.0625rem] leading-[1.75] max-w-[560px]">
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

          <div
            className="grid grid-cols-1 md:grid-cols-2 border-t border-[rgba(10,22,40,0.1)]"
          >
            {painPoints.map((point, i) => (
              <div
                key={point.num}
                className={[
                  'py-8 border-b border-[rgba(10,22,40,0.1)] pain-point-cell',
                  i % 2 === 0
                    ? 'pr-12 md:border-r border-[rgba(10,22,40,0.1)]'
                    : 'md:pl-12',
                ].join(' ')}
              >
                <div
                  className="text-[11px] font-bold tracking-[0.1em] mb-3 text-[var(--ef-copper-border)]"
                  style={{ color: 'rgba(193,127,62,0.6)' }}
                  aria-hidden="true"
                >
                  {point.num}
                </div>
                <h3 className="text-[#0A1628] text-[1.0625rem] font-bold tracking-[-0.01em] mb-2.5 leading-[1.3]">
                  {point.title}
                </h3>
                <p className="text-[#4A4540] text-sm leading-[1.75]">
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
          <h3 className="text-[#0A1628] font-bold leading-[1.15] tracking-[-0.02em] mb-5" style={{ fontSize: 'clamp(1.125rem, 2vw, 1.5rem)' }}>
            Your team runs it independently by Phase 3 —<br className="hidden md:block" />
            <span className="text-[var(--ef-copper)]">and your data stays yours. Always.</span>
          </h3>
          <ul className="space-y-3" aria-label="Vendor continuity and data portability commitments">
            {[
              { icon: '↓', text: 'Export your operational data anytime — full CSV and API export, on demand, no request required.' },
              { icon: '◻', text: 'Open standards and documented schemas. No black-box data structures, no proprietary lock-in.' },
              { icon: '◎', text: 'Your team owns operations by Phase 3. We transfer control, not dependency.' },
              { icon: '⊡', text: 'Contractual continuity protection: transition support and data handoff provisions are built into every engagement — regardless of what happens to us.' },
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3 text-sm md:text-[0.9375rem] text-[#4A4540] leading-[1.7]">
                <span className="text-[var(--ef-copper)] font-bold mt-[2px] shrink-0 text-[15px]" aria-hidden="true">{item.icon}</span>
                <span>{item.text}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Comparison table */}
        <div
          ref={tableRef}
          className={`animate-reveal${tableVisible ? ' is-visible' : ''}`}
        >
          <p className="ef-eyebrow text-[var(--ef-text-secondary)] mb-8">
            How Efikton compares to traditional ERP
          </p>

          {/* Desktop comparison — semantic table for accessibility */}
          <table
            className="hidden md:table w-full border border-[rgba(10,22,40,0.12)] rounded-[4px] overflow-hidden border-collapse"
            aria-label="Efikton vs Traditional ERP comparison"
          >
            <colgroup>
              <col style={{ width: '25%' }} />
              <col style={{ width: '37.5%' }} />
              <col style={{ width: '37.5%' }} />
            </colgroup>
            <thead>
              <tr className="bg-[var(--ef-navy)]">
                <th scope="col" className="p-0" />
                <th
                  scope="col"
                  className="px-6 py-4 text-left text-[11px] font-bold tracking-[0.12em] uppercase border-l border-[rgba(255,255,255,0.07)]"
                  style={{ color: 'rgba(232,228,223,0.45)' }}
                >
                  Traditional ERP
                  <span
                    className="block text-[10px] font-normal tracking-[0.08em] mt-0.5"
                    style={{ color: 'rgba(232,228,223,0.25)' }}
                  >
                    Oracle · SAP · legacy ERP
                  </span>
                </th>
                <th
                  scope="col"
                  className="px-6 py-4 text-left text-[11px] font-bold text-[var(--ef-copper)] tracking-[0.12em] uppercase border-l border-[var(--ef-copper-border)]"
                >
                  Efikton
                </th>
              </tr>
            </thead>
            <tbody>
              {comparison.map((row, i) => (
                <tr
                  key={row.dimension}
                  className={`border-t border-[rgba(10,22,40,0.08)] ${i % 2 === 0 ? 'bg-[var(--ef-surface)]' : 'bg-[var(--ef-surface-alt)]'}`}
                >
                  <th
                    scope="row"
                    className="px-6 py-5 text-left text-xs font-semibold text-[#0A1628] tracking-[0.01em] leading-[1.5]"
                  >
                    {row.dimension}
                  </th>
                  <td
                    className="px-6 py-5 text-[13px] text-[#4A4540] leading-[1.65] border-l border-[rgba(10,22,40,0.08)]"
                  >
                    {row.erp}
                  </td>
                  <td
                    className="px-6 py-5 text-[13px] text-[#0A1628] font-medium leading-[1.65] border-l border-[rgba(193,127,62,0.15)]"
                  >
                    {row.efikton}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* Mobile comparison: stacked cards */}
          <div className="md:hidden flex flex-col gap-4">
            {comparison.map((row) => (
              <div
                key={row.dimension}
                className="border border-[rgba(10,22,40,0.12)] rounded-[4px] overflow-hidden"
              >
                <div className="px-4 py-3 bg-[var(--ef-navy)] text-[11px] font-bold text-[var(--ef-text-primary)] tracking-[0.06em] uppercase">
                  {row.dimension}
                </div>
                <div className="grid grid-cols-2">
                  <div className="p-4 bg-[var(--ef-surface-alt)] border-r border-[rgba(10,22,40,0.08)]">
                    <div className="text-[10px] font-bold text-[var(--ef-text-secondary)] tracking-[0.1em] uppercase mb-1.5">
                      Legacy ERP
                    </div>
                    <p className="text-xs text-[#4A4540] leading-[1.6]">{row.erp}</p>
                  </div>
                  <div className="p-4 bg-[var(--ef-surface)]">
                    <div className="text-[10px] font-bold text-[var(--ef-copper)] tracking-[0.1em] uppercase mb-1.5">
                      Efikton
                    </div>
                    <p className="text-xs text-[#0A1628] font-medium leading-[1.6]">{row.efikton}</p>
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
