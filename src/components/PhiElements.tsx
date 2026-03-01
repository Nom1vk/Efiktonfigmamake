import { useInView } from '../hooks/useInView';

/** Fibonacci nested rectangles SVG — structural φ divider */
export function FibonacciDivider({ rotation = 0 }: { rotation?: number }) {
  const [ref, visible] = useInView<HTMLDivElement>({ threshold: 0.2 });

  return (
    <div
      ref={ref}
      className={`ef-phi-divider${visible ? ' is-visible' : ''}`}
      aria-hidden="true"
    >
      <svg
        width="120"
        height="74"
        viewBox="0 0 120 74"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ transform: `rotate(${rotation}deg)` }}
      >
        {/* Outer rectangle (φ ratio: 120 × 74.16...) */}
        <rect x="1" y="1" width="118" height="72" stroke="var(--ef-copper)" strokeWidth="0.8" />
        {/* Square portion: 72×72 on left */}
        <rect x="1" y="1" width="72" height="72" stroke="var(--ef-copper)" strokeWidth="0.6" />
        {/* Remaining rectangle: 46×72 on right → 46×28 square + 18×46 rect */}
        <rect x="73" y="1" width="46" height="28" stroke="var(--ef-copper)" strokeWidth="0.5" />
        {/* Sub-rectangle */}
        <rect x="73" y="29" width="28" height="44" stroke="var(--ef-copper)" strokeWidth="0.4" />
        {/* Innermost suggestion */}
        <rect x="84" y="29" width="17" height="27" stroke="var(--ef-copper)" strokeWidth="0.3" />
        {/* φ label */}
        <text x="60" y="42" textAnchor="middle" fontSize="10" fill="var(--ef-copper)" fontFamily="ui-sans-serif" fontWeight="600" letterSpacing="0.05em">φ</text>
      </svg>
    </div>
  );
}

/** Copper line that draws left-to-right as you scroll — φ-anchored position */
export function CopperDrawDivider() {
  const [ref, visible] = useInView<HTMLDivElement>({ threshold: 0.3 });

  return (
    <div
      ref={ref}
      className="ef-copper-divider-wrap"
      style={{ padding: '0', height: '1px', display: 'flex', justifyContent: 'center' }}
      aria-hidden="true"
    >
      <div
        className={`ef-copper-divider-line${visible ? ' is-visible' : ''}`}
      />
    </div>
  );
}

/** Golden spiral SVG that traces itself on scroll — for About section */
export function GoldenSpiral({ className = '' }: { className?: string }) {
  const [ref, visible] = useInView<HTMLDivElement>({ threshold: 0.1 });

  return (
    <div
      ref={ref}
      className={`ef-golden-spiral${visible ? ' is-visible' : ''}${className ? ' ' + className : ''}`}
      aria-hidden="true"
    >
      <svg
        width="320"
        height="320"
        viewBox="0 0 320 320"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ opacity: 0.9 }}
      >
        {/*
          Golden spiral approximated with quarter-circle arcs.
          Each arc radius: r, r*φ, r*φ², r*φ³, r*φ⁴, r*φ⁵
          φ = 1.618, start r = 8
          Radii: 8, 12.9, 20.9, 33.8, 54.7, 88.5, 143.2
        */}
        <path
          d="
            M 160 160
            A 8 8 0 0 1 168 160
            A 12.944 12.944 0 0 1 160 147.056
            A 20.944 20.944 0 0 1 139.056 160
            A 33.888 33.888 0 0 1 160 193.888
            A 54.833 54.833 0 0 1 214.833 160
            A 88.721 88.721 0 0 1 160 71.279
            A 143.554 143.554 0 0 1 16.446 160
          "
          stroke="var(--ef-copper)"
          strokeWidth="1.2"
          strokeLinecap="round"
          fill="none"
        />
      </svg>
    </div>
  );
}
