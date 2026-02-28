QA REVIEW — ROCKET-237 (Anvil)

Status: FIXES NEEDED

Build:
- ✅ `npm run build` passes clean (vite build successful)
- ✅ No build warnings emitted

Blocking / high-priority fixes:

1) Design-system token mismatch (copper color)
- The implementation uses `#B87333` in multiple places, but the design system token for copper is `#C17F3E` (`--ef-copper`).
- This creates visual inconsistency against the approved palette and hover states.
- Files:
  - `src/components/Hero.tsx` (multiple inline color assignments, e.g. eyebrow rule/text, highlighted headline word, CTA background, stats)
  - `src/components/Testimonials.tsx` (eyebrow rule/text, metrics, quote borders, Greek anchor)
- Required fix:
  - Replace hardcoded copper values with design token usage (preferred: CSS vars), or at minimum align all copper usages to `#C17F3E`, hover to `#D4A574`, active to `#A06830` per `docs/DESIGN-SYSTEM.md`.

2) Excessive inline style soup in newly changed components
- New code relies heavily on large inline style objects for typography, spacing, color, transitions, and layout.
- This conflicts with maintainability guidance and makes token enforcement/error-prone updates difficult.
- Files:
  - `src/components/Hero.tsx`
  - `src/components/Testimonials.tsx`
- Required fix:
  - Move repeated style rules to class-based utilities/component classes.
  - Keep inline style only where truly dynamic (small animation deltas, computed values).
  - Ensure typography/spacing/color map to design tokens in one place.

3) Accessibility: interactive controls are mouse-only for hover state
- CTA visual states are driven via `onMouseEnter/onMouseLeave` inline mutations and do not include equivalent keyboard focus-visible treatment in these components.
- File:
  - `src/components/Hero.tsx` (CTA anchors)
- Required fix:
  - Implement state styling via classes/CSS pseudo-classes (`:hover`, `:focus-visible`, `:active`) with clear focus indicators.
  - Preserve 48px target height (already good).

4) Design-system typography drift
- Design system specifies Inter-only approach; the Hero ambient φ and stat typography explicitly reference Space Grotesk.
- File:
  - `src/components/Hero.tsx`
- Required fix:
  - Align to documented typography standard in `docs/DESIGN-SYSTEM.md` (Inter).
  - If exception is intentional (brand motif), document and centralize as explicit approved token/class rather than ad-hoc inline font-family values.

5) Performance/maintainability concern: repeated per-render style object creation
- `fade()` returns fresh inline objects used throughout render; numerous large inline objects are recreated every render pass.
- Not a catastrophic perf issue in isolation, but avoidable and contributes to complexity.
- File:
  - `src/components/Hero.tsx`
- Required fix:
  - Prefer class toggles for mounted states + CSS transitions; memoize where dynamic styles are truly needed.

Copy check (against `05-AZOTH-SYNTHESIS.md`):
- ✅ Core messaging is aligned (hero line, proof direction, chaos→control framing).
- ✅ Named social proof above fold aligns with the requested direction.

Mobile/responsiveness:
- ✅ Uses responsive utility classes (`sm`, `md`, `lg`) and CTA touch target height is acceptable.
- ⚠️ Re-verify readability and spacing after token/class refactor (especially tiny 9–11px stat labels).

---
Please address the above and request re-review.
