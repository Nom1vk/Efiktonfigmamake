import { X, CheckCircle2 } from 'lucide-react';

const flowSteps = [
  'Orders',
  'Purchasing',
  'Inventory',
  'Production',
  'Quality',
  'Costing',
  'Billing',
  'Delivery',
];

const stopUsing = [
  'Spreadsheets for planning',
  'Shadow costing sheets',
  'Standalone traceability tools',
  'Disconnected quality systems',
  'Manual production reporting',
  'Multiple systems that don\'t talk',
];

const phases = [
  { num: '01', name: 'Foundation', desc: 'Product data, inventory, purchasing, costing', win: 'Single source of truth' },
  { num: '02', name: 'Planning', desc: 'Orders, scheduling, capacity', win: 'Reliable delivery dates' },
  { num: '03', name: 'Execution', desc: 'Real-time monitoring, production tracking', win: 'Less firefighting' },
  { num: '04', name: 'Quality', desc: 'QC, traceability, continuous improvement', win: 'Fewer defects' },
  { num: '05', name: 'Control', desc: 'Financials, forecasting, early warnings', win: 'Margin protection' },
];

export function Features() {
  return (
    <section
      id="method"
      className="py-20 lg:py-28"
      style={{ backgroundColor: '#fff' }}
      aria-labelledby="features-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div
            className="inline-block px-4 py-2 rounded-full text-sm font-medium mb-4"
            style={{ backgroundColor: 'rgba(0,102,204,0.1)', color: '#0066CC' }}
          >
            Complete System of Record
          </div>
          <h2
            id="features-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4"
            style={{ fontFamily: "'Space Grotesk', sans-serif", color: '#002B5C' }}
          >
            One Place for Everything
          </h2>
          <p className="text-lg" style={{ color: '#4A4A4A' }}>
            Efikton is the system of record for your factory — from order to cash, from supplier to
            shipment. Run the business on Efikton. No patchwork.
          </p>
        </div>

        {/* Order-to-Cash flow */}
        <div
          className="rounded-2xl p-6 sm:p-8 mb-16"
          style={{ backgroundColor: '#002B5C' }}
          aria-label="Order-to-cash flow diagram"
        >
          <p
            className="text-xs font-bold uppercase tracking-widest mb-4 text-center"
            style={{ color: 'rgba(255,255,255,0.5)' }}
          >
            Order-to-Cash in Efikton
          </p>
          <div className="flex flex-wrap items-center justify-center gap-2">
            {flowSteps.map((step, i) => (
              <div key={step} className="flex items-center gap-2">
                <div
                  className="px-3 py-2 rounded-lg text-sm font-semibold whitespace-nowrap"
                  style={{
                    backgroundColor:
                      i === 0
                        ? '#B87333'
                        : i === flowSteps.length - 1
                        ? '#0066CC'
                        : 'rgba(255,255,255,0.1)',
                    color: '#fff',
                  }}
                >
                  {step}
                </div>
                {i < flowSteps.length - 1 && (
                  <span style={{ color: 'rgba(255,255,255,0.4)', fontSize: '1rem' }}>→</span>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Two columns: Stop using / Implementation phases */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Stop using */}
          <div>
            <h3
              className="text-2xl font-bold mb-2"
              style={{ fontFamily: "'Space Grotesk', sans-serif", color: '#002B5C' }}
            >
              What you can stop using
            </h3>
            <p className="text-sm mb-6" style={{ color: '#4A4A4A' }}>
              Replace your patchwork with a single system that covers everything.
            </p>
            <ul className="space-y-3" role="list">
              {stopUsing.map((item, i) => (
                <li key={i} className="flex items-start gap-3" role="listitem">
                  <div
                    className="mt-0.5 w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: 'rgba(212,24,61,0.1)' }}
                    aria-hidden="true"
                  >
                    <X className="w-3 h-3" style={{ color: '#d4183d' }} />
                  </div>
                  <span className="text-sm" style={{ color: '#4A4A4A' }}>
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Implementation phases */}
          <div>
            <h3
              className="text-2xl font-bold mb-2"
              style={{ fontFamily: "'Space Grotesk', sans-serif", color: '#002B5C' }}
            >
              We implement without stopping production
            </h3>
            <p className="text-sm mb-6" style={{ color: '#4A4A4A' }}>
              Each phase delivers measurable wins. No big-bang disruption.
            </p>
            <ol className="space-y-3" role="list" aria-label="Implementation phases">
              {phases.map((phase) => (
                <li
                  key={phase.num}
                  className="flex gap-4 p-4 rounded-xl transition-all duration-200"
                  style={{
                    backgroundColor: '#F8F6F3',
                    border: '1px solid rgba(0,43,92,0.07)',
                  }}
                  role="listitem"
                >
                  <div
                    className="text-2xl font-bold flex-shrink-0 w-10 text-right"
                    style={{ color: 'rgba(0,43,92,0.2)', fontFamily: "'Space Grotesk', sans-serif" }}
                    aria-hidden="true"
                  >
                    {phase.num}
                  </div>
                  <div className="flex-grow">
                    <div className="font-semibold text-sm mb-0.5" style={{ color: '#002B5C' }}>
                      {phase.name}
                    </div>
                    <div className="text-xs mb-1" style={{ color: '#4A4A4A' }}>
                      {phase.desc}
                    </div>
                    <div className="flex items-center gap-1.5 text-xs font-medium" style={{ color: '#0066CC' }}>
                      <CheckCircle2 className="w-3.5 h-3.5" aria-hidden="true" />
                      {phase.win}
                    </div>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}
