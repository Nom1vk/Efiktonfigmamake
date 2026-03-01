import { useEffect, useRef, useState } from 'react';

/**
 * usePhaseScrollProgress
 *
 * Scroll-linked progress for the implementation phases timeline.
 * Writes `--case-phase-progress` (0→1) directly to the DOM element on every
 * RAF tick. Returns [ref, progress] where progress is a React state value
 * updated at discrete thresholds only (max ~100 renders, not every pixel).
 *
 * topTarget: fraction of viewport height at which section is "complete"
 *
 * Respects prefers-reduced-motion: snaps to 1 immediately.
 */
export function usePhaseScrollProgress<T extends Element = Element>(
  topTarget = 0.1,
): [React.RefObject<T>, number] {
  const ref = useRef<T>(null);
  const [progress, setProgress] = useState(0);
  const rafRef = useRef<number>(0);
  const lastProgressRef = useRef<number>(-1);

  useEffect(() => {
    const el = ref.current as HTMLElement | null;

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      if (el) el.style.setProperty('--case-phase-progress', '1');
      setProgress(1);
      return;
    }

    const compute = () => {
      const target = ref.current as HTMLElement | null;
      if (!target) return;

      const rect = target.getBoundingClientRect();
      const vh = window.innerHeight;
      // Section starts animating when its top reaches the bottom of the viewport
      // Section completes when its top reaches topTarget * vh from top
      const startY = vh * 0.9;
      const endY = vh * topTarget;

      const raw = 1 - (rect.top - endY) / (startY - endY);
      const p = Math.max(0, Math.min(1, raw));

      target.style.setProperty('--case-phase-progress', String(p));

      // Throttle React state to avoid excessive re-renders: update in ~2% steps
      const rounded = Math.round(p * 50) / 50;
      if (rounded !== lastProgressRef.current) {
        lastProgressRef.current = rounded;
        setProgress(p);
      }
    };

    const onScroll = () => {
      cancelAnimationFrame(rafRef.current);
      rafRef.current = requestAnimationFrame(compute);
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    compute();

    return () => {
      window.removeEventListener('scroll', onScroll);
      cancelAnimationFrame(rafRef.current);
    };
  }, [topTarget]);

  return [ref, progress];
}
