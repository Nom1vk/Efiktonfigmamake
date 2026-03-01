# ROCKET-237 — CI Step 4 QA (Performance + Polish)

Date: 2026-03-01 15:41 Europe/Athens  
Reviewer: Anvil  
Scope reviewed: latest commits through `cfdfbe5` in `/home/node/.openclaw/workspace/projects/efikton-website`

---

## Executive Verdict

**Status: CHANGES_REQUESTED (performance polish + lint gate).**

The new scroll-driven phase timeline is solid in concept and mostly well-implemented (passive scroll listener, RAF scheduling, reduced-motion fallback, no dependency bloat). Visual style fits the φ-inspired precision aesthetic.

Main issues are rendering-cost hotspots and one process-quality gap.

---

## 1) Animation PERFORMANCE (60fps / GPU / layout thrashing)

### What is good
- Hook uses `passive` scroll + `requestAnimationFrame` scheduling.
- Phase row entrances are transform/opacity-based (GPU-friendly).
- Progress is mostly decoupled from React re-render spam by rounded thresholds.

### Findings
- **🟡 Paint/layout-heavy property in hot path:** `.case-phase-timeline-fill` animates `height` continuously from scroll progress (`height: calc(var(--case-phase-progress) * 100%)`) plus glow shadow. Height updates on every scroll tick are more expensive than transform-based growth and can hurt low-end mobile smoothness.
- **🟡 Extra transition churn:** `transition: height 0.05s linear` is applied while JS continuously updates the same value. This can introduce tiny trailing/jitter artifacts instead of truly locked scroll-sync.

### Requested fix
1. Replace height-based fill animation with transform (`scaleY`) and `transform-origin: top`; keep the element full-height and animate only transform.
2. Remove the `height` transition for scroll-linked progress (direct mapping should be immediate).
3. Consider toning down box-shadow glow during scroll-linked updates (or apply only near phase activation points).

---

## 2) Reduced-motion (`prefers-reduced-motion`)

### What is good
- Hook snaps timeline progress to complete (`1`) and avoids scroll animation path when reduced motion is requested.
- CSS reduced-motion block correctly disables transitions/keyframes and renders final states.

### Findings
- **🟢 No blocking issue** in reduced-motion behavior.

### Suggested improvement
- Optional: listen for runtime changes to `prefers-reduced-motion` (media query change event), not only initial mount.

---

## 3) Mobile / touch / scroll behavior

### What is good
- Timeline rail hidden under `max-width: 480px`, reducing clutter.
- Scroll listener is passive; no obvious touch-blocking code added.

### Findings
- **🟡 Mobile threshold edge case:** timeline rail hide breakpoint (`480px`) is very narrow. Devices around 481–540px in portrait/small landscape may still show rail with cramped left gutter.

### Requested fix
1. Re-check rail visibility breakpoint against actual mobile QA targets (recommend testing 390/430/480/540 widths).
2. If cramped, raise hide breakpoint (e.g., 640px) or dynamically reduce left-column spacing.

---

## 4) Load time / bundle impact

### What is good
- No new dependencies were added in this commit.
- Production build is clean.

### Build output (current)
- `build/assets/index-BqClmQ-5.js`: **284.58 kB** (gzip **85.17 kB**)
- `build/assets/index-B56DCehb.css`: **117.51 kB** (gzip **19.86 kB**)

### Findings
- **🟢 No dependency ballooning** in this change set.
- **🟡 CSS continues growing in global stylesheet**; still manageable, but trend should be watched.

---

## 5) Design consistency (φ-inspired precision aesthetic)

### What is good
- Sequential reveals, copper accents, restrained timing, and per-phase rhythm are on-brand.
- Phase pulse/checkmark choreography feels intentional and aligned with current visual language.

### Findings
- **🟢 No aesthetic blocker found.**

---

## 6) Accessibility (keyboard + screen readers)

### What is good
- Semantic headings/lists remain intact.
- Decorative SVG checkmarks are `aria-hidden`.
- No keyboard trap introduced by the animation layer.

### Findings
- **🟢 No direct a11y regression found** in reviewed files.
- **🟡 Lint gate issue persists:** `npm run lint` fails due to missing `typescript` module in dev dependencies, so CI quality checks are not currently enforceable.

### Requested fix
1. Add `typescript` dev dependency (or align eslint config to avoid TS parser requirement) so lint can run in CI.
2. Ensure lint is part of mandatory pre-merge checks for this branch.

---

## 7) Build cleanliness

- ✅ `npm run build` passes.
- ⚠️ `npm run lint` fails with:
  - `Error: Cannot find module 'typescript'`

---

## Required Actions Summary

### 🔴 Blocking
- None.

### 🟡 Must-fix before Step 4 sign-off
1. Convert timeline fill from `height` animation to transform (`scaleY`) for scroll-linked performance.
2. Remove `height` transition from scroll-driven progress mapping.
3. Fix lint gate by adding/aligning `typescript` dependency so `npm run lint` runs clean.
4. Re-validate mobile breakpoint behavior around 481–540px widths for timeline rail/layout spacing.

### 🟢 Follow-up (non-blocking)
1. Consider runtime listener for reduced-motion preference changes.
2. Continue CSS modularization to slow global stylesheet growth.

---

## Final Recommendation

**One more performance/lint polish pass is required before QA approval.**
The implementation is close and visually strong, but scroll-linked rendering should be made fully transform-driven, and lint must be made operational in CI.