import { useEffect, useRef, useState } from 'react';

/**
 * Scroll-linked progress hook: returns [ref, progress].
 * progress is 0→1 as the element scrolls through the viewport.
 *
 * Calculation:
 *  - progress = 0: element's top edge enters from the bottom of viewport
 *  - progress = 1: element's top edge reaches `topTarget` fraction from viewport top
 *
 * Respects prefers-reduced-motion: immediately returns 1.0 (final state).
 */
export function useScrollProgress<T extends Element = Element>(
  topTarget = 0.15, // viewport fraction — element top at this point = progress 1.0
): [React.RefObject<T>, number] {
  const ref = useRef<T>(null);
  const [progress, setProgress] = useState(0);
  const rafRef = useRef<number>(0);

  useEffect(() => {
    // Reduced-motion: snap to final state, no animation
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setProgress(1);
      return;
    }

    const compute = () => {
      const el = ref.current;
      if (!el) return;

      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight;

      // start: element top is at viewport bottom (just entering)
      // end: element top is at topTarget% from viewport top
      const startY = vh;
      const endY = vh * topTarget;

      const raw = 1 - (rect.top - endY) / (startY - endY);
      const clamped = Math.max(0, Math.min(1, raw));
      setProgress(clamped);
    };

    const onScroll = () => {
      cancelAnimationFrame(rafRef.current);
      rafRef.current = requestAnimationFrame(compute);
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    // Initial compute (in case section is already visible on mount)
    compute();

    return () => {
      window.removeEventListener('scroll', onScroll);
      cancelAnimationFrame(rafRef.current);
    };
  }, [topTarget]);

  return [ref, progress];
}
