import { ArrowRight, ChevronDown } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import { useCountUp } from '../hooks/useCountUp';
import { useInView } from '../hooks/useInView';

const PHI_DURATION = 1618; // φ × 1000ms
const STAGGER_MS = 200;
const SUBLABEL_DELAY_MS = 300;

// ─── OTIF letter-reveal component ───────────────────────────────────────────
function OtifReveal({ enabled }: { enabled: boolean }) {
  const letters = ['O', 'T', 'I', 'F'];
  const prefersReduced =
    typeof window !== 'undefined' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  return (
    <span aria-label="OTIF">
      {letters.map((letter, i) => (
        <span
          key={letter}
          style={{
            opacity: prefersReduced ? 1 : enabled ? 1 : 0,
            transition: prefersReduced ? 'none' : `opacity 0.25s ease`,
            transitionDelay: prefersReduced ? '0s' : enabled ? `${i * 0.18}s` : '0s',
            display: 'inline-block',
          }}
          aria-hidden="true"
        >
          {letter}
        </span>
      ))}
    </span>
  );
}

// ─── Animated stat number ────────────────────────────────────────────────────
interface StatConfig {
  value: string;
  label: string;
  sub: string;
  isLetterReveal?: boolean;
  countEnd?: number;
  suffix?: string;
}

function AnimatedStat({
  stat,
  enabled,
  index,
}: {
  stat: StatConfig;
  enabled: boolean;
  index: number;
}) {
  const [active, setActive] = useState(false);
  const [subVisible, setSubVisible] = useState(false);
  const prefersReduced =
    typeof window !== 'undefined' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  useEffect(() => {
    if (!enabled) return;
    if (prefersReduced) {
      setActive(true);
      setSubVisible(true);
      return;
    }
    const t1 = setTimeout(() => setActive(true), index * STAGGER_MS);
    const t2 = setTimeout(
      () => setSubVisible(true),
      index * STAGGER_MS + PHI_DURATION + SUBLABEL_DELAY_MS
    );
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, [enabled, index, prefersReduced]);

  const counted = useCountUp({
    end: stat.countEnd ?? 0,
    duration: PHI_DURATION,
    suffix: stat.suffix ?? '',
    enabled: active && !stat.isLetterReveal,
  });

  return (
    <div
      className="flex flex-col items-center py-6 sm:py-8 px-2"
      style={{
        borderRight: index < 2 ? '1px solid rgba(193, 127, 62, 0.12)' : 'none',
      }}
      role="figure"
      aria-label={`${stat.value}: ${stat.label}`}
    >
      <div className="ef-stat-value" aria-hidden="true">
        {stat.isLetterReveal ? (
          <OtifReveal enabled={active} />
        ) : (
          <span>{active ? counted : `0${stat.suffix ?? ''}`}</span>
        )}
      </div>
      <div
        style={{
          color: 'var(--ef-text-primary)',
          fontSize: 'clamp(10px, 1.5vw, 12px)',
          fontWeight: 600,
          letterSpacing: '0.03em',
          textTransform: 'uppercase',
          marginBottom: '3px',
          textAlign: 'center',
          lineHeight: 1.3,
        }}
        aria-hidden="true"
      >
        {stat.label}
      </div>
      <div
        style={{
          color: 'var(--ef-text-secondary)',
          fontSize: 'clamp(10px, 1.2vw, 11px)',
          textAlign: 'center',
          lineHeight: 1.4,
          opacity: subVisible ? 1 : 0,
          transition: prefersReduced ? 'none' : 'opacity 0.4s ease',
        }}
        aria-hidden="true"
      >
        {stat.sub}
      </div>
    </div>
  );
}

// ─── Stats config ─────────────────────────────────────────────────────────────
const stats: StatConfig[] = [
  { value: '5×', label: 'Profit increase', sub: 'in 2 years', countEnd: 5, suffix: '×' },
  { value: '90%', label: 'Fewer problems', sub: 'ongoing, sustained', countEnd: 90, suffix: '%' },
  { value: 'OTIF', label: 'On-Time In-Full', sub: 'within 1 year', isLetterReveal: true },
];

// ─── φ Geometric background ──────────────────────────────────────────────────
function PhiGeometricBackground() {
  return (
    <div
      className="ef-phi-geo absolute inset-0 pointer-events-none overflow-hidden"
      aria-hidden="true"
    >
      <svg
        className="ef-phi-breathe"
        viewBox="0 0 1618 1000"
        xmlns="http://www.w3.org/2000/svg"
        style={{
          position: 'absolute',
          right: '-5%',
          top: '50%',
          transform: 'translateY(-50%)',
          width: '72%',
          height: 'auto',
          opacity: 1,
        }}
        preserveAspectRatio="xMidYMid meet"
      >
        {/* Golden rectangle spiral — nested rectangles at φ proportions */}
        {/* Outer: 1618×1000 (φ ≈ 1.618) */}
        <rect x="1" y="1" width="1616" height="998"
          fill="none" stroke="rgba(193,127,62,0.04)" strokeWidth="1" />

        {/* Remove 1000×1000 square from left → remaining 618×1000 on right (x=1000) */}
        <rect x="1000" y="0" width="618" height="1000"
          fill="none" stroke="rgba(193,127,62,0.037)" strokeWidth="1" />

        {/* Partition line: x=1000 */}
        <line x1="1000" y1="0" x2="1000" y2="1000"
          stroke="rgba(193,127,62,0.035)" strokeWidth="1" />

        {/* In left 1000×1000: inner golden rect 1000×618 at bottom (y=382) */}
        <rect x="0" y="382" width="1000" height="618"
          fill="none" stroke="rgba(193,127,62,0.03)" strokeWidth="0.8" />

        {/* Partition: y=382 */}
        <line x1="0" y1="382" x2="1000" y2="382"
          stroke="rgba(193,127,62,0.028)" strokeWidth="0.8" />

        {/* In top 1000×382: inner square 382×382 on right (x=618) */}
        <rect x="618" y="0" width="382" height="382"
          fill="none" stroke="rgba(193,127,62,0.025)" strokeWidth="0.7" />

        {/* Partition: x=618 */}
        <line x1="618" y1="0" x2="618" y2="382"
          stroke="rgba(193,127,62,0.023)" strokeWidth="0.7" />

        {/* In left 618×382: 236×382 on left (remaining after 382×382 square... wait) */}
        {/* 618×382 rect: remove 382×382 from right → 236×382 on left */}
        <rect x="0" y="0" width="236" height="382"
          fill="none" stroke="rgba(193,127,62,0.02)" strokeWidth="0.6" />

        {/* Partition: x=236 */}
        <line x1="236" y1="0" x2="236" y2="382"
          stroke="rgba(193,127,62,0.018)" strokeWidth="0.6" />

        {/* In 236×382: remove 236×236 from bottom → 236×146 on top */}
        <rect x="0" y="0" width="236" height="146"
          fill="none" stroke="rgba(193,127,62,0.015)" strokeWidth="0.5" />

        {/* In right 618×1000 region: subdivide */}
        {/* 618×1000 → remove 618×618 square from top → 618×382 at bottom */}
        <rect x="1000" y="618" width="618" height="382"
          fill="none" stroke="rgba(193,127,62,0.03)" strokeWidth="0.8" />

        {/* Partition: y=618 in right portion */}
        <line x1="1000" y1="618" x2="1618" y2="618"
          stroke="rgba(193,127,62,0.028)" strokeWidth="0.8" />

        {/* In 618×618 right-top: remove 382×618 from right → 236×618 on left */}
        <line x1="1236" y1="0" x2="1236" y2="618"
          stroke="rgba(193,127,62,0.02)" strokeWidth="0.6" />

        {/* Subtle accent dots at spiral convergence points */}
        <circle cx="236" cy="382" r="2" fill="rgba(193,127,62,0.06)" />
        <circle cx="618" cy="382" r="2" fill="rgba(193,127,62,0.05)" />
        <circle cx="1000" cy="382" r="2" fill="rgba(193,127,62,0.04)" />
        <circle cx="1000" cy="618" r="2" fill="rgba(193,127,62,0.04)" />
        <circle cx="1236" cy="618" r="2" fill="rgba(193,127,62,0.03)" />
      </svg>
    </div>
  );
}

// ─── will-change cleanup after animations complete ────────────────────────────
function useAnimEndCleanup(mounted: boolean) {
  useEffect(() => {
    if (!mounted) return;
    // Remove will-change promotions after all hero entrances complete (~2700ms)
    const t = setTimeout(() => {
      document.querySelectorAll<HTMLElement>(
        '.ef-hero-headline-left, .ef-hero-headline-right, .ef-hero-cta-primary, ' +
        '.ef-hero-cta-secondary, .ef-hero-item, .ef-scroll-indicator, .ef-hero-quote-border'
      ).forEach((el) => {
        el.classList.add('ef-hero-anim-done');
      });
    }, 2700);
    return () => clearTimeout(t);
  }, [mounted]);
}

// ─── Main Hero ────────────────────────────────────────────────────────────────
export function Hero() {
  const [mounted, setMounted] = useState(false);
  const [statsRef, statsInView] = useInView<HTMLDivElement>({ threshold: 0.3 });

  useEffect(() => {
    const t = requestAnimationFrame(() => setMounted(true));
    return () => cancelAnimationFrame(t);
  }, []);

  useAnimEndCleanup(mounted);

  return (
    <section
      className={`ef-hero-section relative flex flex-col${mounted ? ' is-mounted' : ''}`}
      style={{ minHeight: '100svh', backgroundColor: 'var(--ef-navy)' }}
      aria-label="Hero section"
    >
      {/* φ Geometric living background — replaces static noise */}
      <PhiGeometricBackground />

      {/* Subtle noise texture overlay (kept for micro-texture, reduced opacity) */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.04'/%3E%3C/svg%3E")`,
          opacity: 0.3,
        }}
        aria-hidden="true"
      />

      {/* φ — floating ambient symbol */}
      <div
        className="phi-ambient absolute pointer-events-none select-none hidden lg:flex items-center justify-center"
        style={{
          right: '8%',
          top: '50%',
          fontSize: '320px',
          fontWeight: 800,
          color: 'rgba(193, 127, 62, 0.045)',
          lineHeight: 1,
          letterSpacing: '-0.05em',
          userSelect: 'none',
        }}
        aria-hidden="true"
      >
        φ
      </div>

      {/* Vertical copper accent rule */}
      <div
        className="ef-hero-vert-rule absolute pointer-events-none hidden lg:block"
        style={{
          right: '0',
          top: '0',
          bottom: '0',
          width: '1px',
          background: `linear-gradient(to bottom, transparent 0%, rgba(193,127,62,0.2) 30%, rgba(193,127,62,0.08) 70%, transparent 100%)`,
        }}
        aria-hidden="true"
      />

      {/* Main content */}
      <div
        className="relative flex-1 flex flex-col justify-center w-full px-5 sm:px-6 lg:px-10 pt-28 sm:pt-32 lg:pt-28 pb-0"
        style={{ maxWidth: '1200px', margin: '0 auto' }}
      >
        {/* Headline — split into two halves that converge from opposite directions */}
        <h1
          style={{
            color: 'var(--ef-text-primary)',
            fontSize: 'clamp(2.5rem, 6.5vw, 5rem)',
            fontWeight: 800,
            letterSpacing: '-0.03em',
            lineHeight: 1.05,
            maxWidth: '800px',
            marginBottom: '28px',
          }}
          aria-label="From Chaos to Control."
        >
          <span className="ef-hero-headline-left" aria-hidden="true">From Chaos to{' '}</span>
          <span className="ef-hero-headline-right" aria-hidden="true">
            <span style={{ color: 'var(--ef-copper)' }}>Control</span>.
          </span>
        </h1>

        {/* Subhead */}
        <p
          className="ef-hero-item"
          data-delay="2"
          style={{
            color: 'var(--ef-text-secondary)',
            fontSize: 'clamp(1.0625rem, 2vw, 1.375rem)',
            lineHeight: 1.6,
            maxWidth: '600px',
            marginBottom: '20px',
            fontWeight: 500,
          }}
        >
          The manufacturing operating system for predictable output, protected margin, and fewer problems.
        </p>

        {/* Body */}
        <p
          className="ef-hero-item"
          data-delay="3"
          style={{
            color: 'var(--ef-text-secondary)',
            fontSize: 'clamp(0.9375rem, 1.8vw, 1.125rem)',
            lineHeight: 1.7,
            maxWidth: '520px',
            marginBottom: 'clamp(32px, 5vw, 40px)',
            fontWeight: 400,
          }}
        >
          Efikton manages Materials, Time, Money, and Knowledge as one disciplined system. From order to cash, from supplier to shipment. One method. Proven results across 40+ factory implementations.
        </p>

        {/* Named social proof — border draws first, then text fades in */}
        <div
          style={{ marginTop: 'clamp(-8px, -1vw, 0px)', marginBottom: 'clamp(24px, 4vw, 32px)', maxWidth: '520px', position: 'relative', paddingLeft: '18px' }}
        >
          {/* Animated copper left border */}
          <div
            className="ef-hero-quote-border"
            style={{
              position: 'absolute',
              left: 0,
              top: 0,
              bottom: 0,
              width: '2px',
              background: 'rgba(193,127,62,0.5)',
              transformOrigin: 'top',
            }}
            aria-hidden="true"
          />
          <blockquote
            className="ef-hero-item"
            data-delay="4"
            style={{
              margin: 0,
              padding: 0,
            }}
          >
            <p
              style={{
                color: 'var(--ef-text-secondary)',
                fontSize: 'clamp(0.875rem, 1.4vw, 0.9375rem)',
                fontStyle: 'italic',
                lineHeight: 1.65,
                marginBottom: '6px',
                fontWeight: 400,
              }}
            >
              "We went from missing 30% of deliveries to 97% OTIF in 11 months.{' '}
              I wish we had started five years earlier."
            </p>
            <cite
              style={{
                display: 'block',
                fontSize: '11px',
                fontWeight: 600,
                color: 'var(--ef-copper)',
                fontStyle: 'normal',
                letterSpacing: '0.06em',
                textTransform: 'uppercase',
              }}
            >
              Giorgos K.
              <span style={{ color: 'rgba(139,134,128,0.6)', fontWeight: 400, letterSpacing: '0.03em' }}>
                {' '}· Auto Parts Manufacturer, Thessaloniki
              </span>
            </cite>
          </blockquote>
        </div>

        {/* CTAs — each has its own entrance animation class */}
        <div className="flex flex-wrap gap-2.5 sm:gap-3" style={{ marginLeft: 0 }}>
          <a
            href="#contact"
            className="ef-hero-cta-primary ef-cta-primary group touch-manipulation active:scale-98 focus-visible:ring-2 focus-visible:ring-[var(--ef-copper-light)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--ef-navy)] outline-none"
            style={{
              whiteSpace: 'nowrap',
              minWidth: 0,
              fontSize: 'clamp(13px, 2vw, 14px)',
              transition: 'background-color 0.2s ease, transform 0.15s ease, box-shadow 0.15s ease',
              borderRadius: '2px',
            }}
            onTouchStart={(e) => (e.currentTarget.style.backgroundColor = 'var(--ef-copper-light)')}
            onTouchEnd={(e) => (e.currentTarget.style.backgroundColor = 'var(--ef-copper)')}
            onTouchCancel={(e) => (e.currentTarget.style.backgroundColor = 'var(--ef-copper)')}
          >
            <span style={{ whiteSpace: 'nowrap' }}>Book a Demo</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 flex-shrink-0" aria-hidden="true" />
          </a>
          <a
            href="#results"
            className="ef-hero-cta-secondary ef-cta-secondary touch-manipulation active:scale-98 focus-visible:ring-2 focus-visible:ring-[var(--ef-copper)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--ef-navy)] outline-none"
            style={{
              whiteSpace: 'nowrap',
              minWidth: 0,
              fontSize: 'clamp(13px, 2vw, 14px)',
              transition: 'opacity 0.2s ease, border-color 0.2s ease, transform 0.15s ease, box-shadow 0.15s ease',
              borderRadius: '2px',
            }}
            onTouchStart={(e) => {
              e.currentTarget.style.opacity = '1';
              e.currentTarget.style.borderColor = 'rgba(232, 228, 223, 0.35)';
            }}
            onTouchEnd={(e) => {
              e.currentTarget.style.opacity = '0.75';
              e.currentTarget.style.borderColor = 'rgba(232, 228, 223, 0.2)';
            }}
            onTouchCancel={(e) => {
              e.currentTarget.style.opacity = '0.75';
              e.currentTarget.style.borderColor = 'rgba(232, 228, 223, 0.2)';
            }}
          >
            See Results →
          </a>
        </div>

        {/* Scroll indicator */}
        <div
          className="ef-scroll-indicator hidden md:flex items-center gap-2"
          style={{ marginTop: 'clamp(48px, 8vw, 64px)' }}
          aria-hidden="true"
        >
          <div
            style={{
              width: '1px',
              height: '32px',
              background: 'linear-gradient(to bottom, transparent, rgba(193,127,62,0.6))',
            }}
          />
          <ChevronDown
            className="w-3.5 h-3.5 scroll-bounce"
            style={{ color: 'var(--ef-copper)' }}
          />
        </div>
      </div>

      {/* Stats bar — animated counting */}
      <div
        ref={statsRef}
        className="ef-stats-bar"
        style={{ borderTop: '1px solid rgba(193, 127, 62, 0.15)', marginTop: 'clamp(48px, 10vw, 80px)' }}
        aria-label="Key proof metrics"
        role="region"
      >
        <div
          className="grid grid-cols-3 w-full"
          style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 clamp(1rem, 3vw, 1.5rem)' }}
        >
          {stats.map((stat, i) => (
            <AnimatedStat
              key={stat.value}
              stat={stat}
              enabled={statsInView}
              index={i}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
