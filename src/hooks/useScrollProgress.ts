import { useEffect, useRef, useState } from 'react';

/**
 * Scroll-linked progress hook — performance-optimised.
 *
 * Writes continuous values directly to the DOM element as CSS custom props on
 * every RAF tick, bypassing React's render cycle entirely:
 *
 *   --arc-progress          (0 → 1)
 *   --arc-jitter-intensity  (1 → 0 over first 35% of progress)
 *   --arc-noise-opacity     (0.55 → 0 over first 45% of progress)
 *
 * Returns only [ref, arcStage] — React state is updated only on discrete stage
 * transitions (max 4 updates total per scroll session), keeping the render tree
 * completely still between transitions.
 *
 * Respects prefers-reduced-motion: snaps immediately to final state.
 */

function progressToStage(p: number): number {
  if (p < 0.3) return 0;
  if (p < 0.6) return 1;
  if (p < 0.85) return 2;
  return 3;
}

export function useScrollProgress<T extends Element = Element>(
  topTarget = 0.15,
): [React.RefObject<T>, number] {
  const ref = useRef<T>(null);
  const [arcStage, setArcStage] = useState(0);
  const rafRef = useRef<number>(0);
  const stageRef = useRef<number>(0);

  useEffect(() => {
    const el = ref.current as HTMLElement | null;

    // Reduced-motion: snap to final state, write props once, no listeners
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      if (el) {
        el.style.setProperty('--arc-progress', '1');
        el.style.setProperty('--arc-jitter-intensity', '0');
        el.style.setProperty('--arc-noise-opacity', '0');
      }
      stageRef.current = 3;
      setArcStage(3);
      return;
    }

    const compute = () => {
      const target = ref.current as HTMLElement | null;
      if (!target) return;

      const rect = target.getBoundingClientRect();
      const vh = window.innerHeight;
      const startY = vh;
      const endY = vh * topTarget;

      const raw = 1 - (rect.top - endY) / (startY - endY);
      const progress = Math.max(0, Math.min(1, raw));

      // Write continuous CSS custom props directly — zero React renders here
      target.style.setProperty('--arc-progress', String(progress));
      target.style.setProperty(
        '--arc-jitter-intensity',
        String(Math.max(0, 1 - progress / 0.35)),
      );
      target.style.setProperty(
        '--arc-noise-opacity',
        String(Math.max(0, 0.55 - progress * (0.55 / 0.45))),
      );

      // React state only on discrete stage transition (max 4 updates total)
      const newStage = progressToStage(progress);
      if (newStage !== stageRef.current) {
        stageRef.current = newStage;
        setArcStage(newStage);
      }
    };

    const onScroll = () => {
      cancelAnimationFrame(rafRef.current);
      rafRef.current = requestAnimationFrame(compute);
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    compute(); // initial compute in case section is already visible

    return () => {
      window.removeEventListener('scroll', onScroll);
      cancelAnimationFrame(rafRef.current);
    };
  }, [topTarget]);

  return [ref, arcStage];
}
