import { useEffect, useState, useRef } from 'react';

interface UseCountUpOptions {
  end: number;
  duration?: number; // ms
  decimals?: number;
  prefix?: string;
  suffix?: string;
  enabled?: boolean;
}

/**
 * Animated counter from 0 to `end` when `enabled` becomes true.
 * Returns formatted string with optional prefix/suffix.
 */
export function useCountUp({
  end,
  duration = 1200,
  decimals = 0,
  prefix = '',
  suffix = '',
  enabled = false,
}: UseCountUpOptions): string {
  const prefersReducedMotion =
    typeof window !== 'undefined' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const [value, setValue] = useState(0);
  const rafRef = useRef<number | null>(null);
  const startTimeRef = useRef<number | null>(null);

  useEffect(() => {
    if (!enabled) return;

    // Respect reduced-motion: snap to end value immediately
    if (prefersReducedMotion) {
      setValue(end);
      return;
    }

    const animate = (timestamp: number) => {
      if (!startTimeRef.current) startTimeRef.current = timestamp;
      const elapsed = timestamp - startTimeRef.current;
      const progress = Math.min(elapsed / duration, 1);
      // Ease-out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(eased * end);

      if (progress < 1) {
        rafRef.current = requestAnimationFrame(animate);
      } else {
        setValue(end);
      }
    };

    rafRef.current = requestAnimationFrame(animate);
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      startTimeRef.current = null;
    };
  }, [enabled, end, duration]);

  const formatted = value.toFixed(decimals);
  return `${prefix}${formatted}${suffix}`;
}
