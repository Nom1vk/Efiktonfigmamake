import { useEffect, useRef, useState } from 'react';

interface UseCountUpOptions {
  end: number;
  duration?: number; // ms — default 1618 (φ × 1000)
  decimals?: number;
  /**
   * Decimals to display during overshoot phase (value > end).
   * Defaults to 1 when overshoot > 0, so "5×" can show "5.3×" at peak.
   */
  overshootDecimals?: number;
  prefix?: string;
  suffix?: string;
  enabled?: boolean;
  /**
   * Fraction of `end` to overshoot before settling. e.g. 0.06 → peaks at end * 1.06.
   * Overshoot occupies the final 25% of duration via a damped sine arc.
   * Default: 0 (no overshoot — original behavior).
   */
  overshoot?: number;
  /**
   * Called once when the count-up animation completes (including settle).
   * Stable across renders via internal ref — safe to pass inline functions.
   */
  onComplete?: () => void;
}

/**
 * Animated counter from 0 to `end` when `enabled` becomes true.
 * Duration: 1618ms (φ-based). Easing: ease-out-expo.
 *
 * Optional overshoot: in the final 25% of duration, value rises past `end`
 * by (overshoot × end) via a sine arc, then settles back — creating the
 * "precision instrument needle" feel (tension → resolution).
 *
 * Returns formatted string with optional prefix/suffix.
 */
export function useCountUp({
  end,
  duration = 1618,
  decimals = 0,
  overshootDecimals,
  prefix = '',
  suffix = '',
  enabled = false,
  overshoot = 0,
  onComplete,
}: UseCountUpOptions): string {
  const prefersReducedMotion =
    typeof window !== 'undefined' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const [value, setValue] = useState(0);
  const rafRef = useRef<number | null>(null);
  const startTimeRef = useRef<number | null>(null);

  // Stable callback ref — callers can pass inline functions without restarting animation
  const onCompleteRef = useRef(onComplete);
  useEffect(() => { onCompleteRef.current = onComplete; });

  useEffect(() => {
    if (!enabled) return;

    // Respect reduced-motion: snap to end value immediately, then notify
    if (prefersReducedMotion) {
      setValue(end);
      onCompleteRef.current?.();
      return;
    }

    const animate = (timestamp: number) => {
      if (!startTimeRef.current) startTimeRef.current = timestamp;
      const elapsed = timestamp - startTimeRef.current;
      const progress = Math.min(elapsed / duration, 1);

      let currentValue: number;

      if (overshoot > 0 && progress >= 0.75 && progress < 1) {
        // ── Overshoot phase (progress 0.75 → 1.0) ──────────────────────────
        // Sine arc: starts at `end`, peaks at `end × (1 + overshoot)` at t=0.5,
        // returns to `end` at t=1. Like a precision gauge needle overshooting
        // then settling to its exact reading.
        //
        // Local t: 0 at progress=0.75, 1 at progress=1.0
        const t = (progress - 0.75) / 0.25;
        currentValue = end + end * overshoot * Math.sin(Math.PI * t);
      } else if (progress >= 1) {
        currentValue = end;
      } else {
        // ── Normal ease-out-expo phase (progress 0 → 0.75+) ────────────────
        // At progress=0.75: eased ≈ 0.994 (< 1), so transition to sine is smooth.
        const eased = 1 - Math.pow(2, -10 * progress);
        currentValue = eased * end;
      }

      setValue(currentValue);

      if (progress < 1) {
        rafRef.current = requestAnimationFrame(animate);
      } else {
        // Snap to exact final value, fire completion callback
        setValue(end);
        onCompleteRef.current?.();
      }
    };

    rafRef.current = requestAnimationFrame(animate);
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      startTimeRef.current = null;
    };
  }, [enabled, end, duration, overshoot, prefersReducedMotion]);

  // ── Format the display value ──────────────────────────────────────────────
  // During overshoot (value > end), switch to overshootDecimals so "5×" can
  // display "5.3×" at peak. Falls back to decimals once settled.
  const activeDecimals =
    overshoot > 0 && value > end ? (overshootDecimals ?? 1) : decimals;
  const formatted = value.toFixed(activeDecimals);
  return `${prefix}${formatted}${suffix}`;
}
