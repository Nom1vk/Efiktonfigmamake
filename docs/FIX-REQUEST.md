# ROCKET-237 — CI Step 4 QA (Performance + Polish)

Date: 2026-03-01 14:38 Europe/Athens
Reviewer: Anvil
Scope reviewed: latest commit set through `b0c14c7` in `/home/node/.openclaw/workspace/projects/efikton-website`

---

## Executive Verdict

**Status: CHANGES_REQUESTED (minor-to-moderate polish fixes, no architecture blockers).**

The new hero choreography is directionally strong and mostly performance-conscious (transform/opacity-first, reduced-motion branches present, will-change cleanup added). Build succeeds cleanly. 

However, there are still a few concrete polish/perf/a11y issues to resolve before final acceptance.

---

## 1) Animation PERFORMANCE (60fps, GPU, layout thrash)

### What looks good
- Entrances are primarily `transform` + `opacity` with staged keyframes.
- `will-change` is used and then cleaned up via `useAnimEndCleanup`.
- Scroll listeners in touched areas remain passive/RAF-throttled patterns.

### Findings
- **🟡 Paint-heavy path:** `hero-rule-draw` animates `clip-path` on `.ef-hero-vert-rule`. This can be paint-heavy on lower-end mobile GPUs compared to pure transform-based reveal.
- **🟡 Persistent promotion window:** `will-change` remains active for ~2.7s for multiple hero elements. This is acceptable but slightly long for weaker devices.

### Requested fix
1. Replace `clip-path` reveal with transform scale on a pseudo-element (`scaleY`) where possible.
2. Consider shortening cleanup timeout (or clean via `animationend` listeners for precision).

---

## 2) Reduced-motion compliance

### What looks good
- New hero choreography has explicit `@media (prefers-reduced-motion: reduce)` fallbacks.
- Entrances snap to final visible states; transitions/animations are disabled.

### Findings
- **🟢 No blocker found** in the newly introduced hero choreography paths.

### Requested fix
- Optional: centralize reduced-motion utility usage to avoid duplicated `matchMedia` calls across components.

---

## 3) Mobile behavior / touch / scroll smoothness

### What looks good
- Palette switcher spacing/positioning was adjusted for small screens.
- CTA targets remain comfortably tappable.

### Findings
- **🟡 Touch edge-case:** Hero CTA touch handlers use `onTouchStart`/`onTouchEnd` but do **not** handle `onTouchCancel`. Interrupted gestures can leave temporary visual state stuck.

### Requested fix
1. Add `onTouchCancel` handlers restoring default visual state for both CTAs.
2. Prefer CSS `:active` / utility classes over imperative inline style mutations when possible.

---

## 4) Load time / bundle impact

### What looks good
- No new dependency additions detected in this commit range.
- Production build completes successfully.

### Build output
- `build/assets/index-C1SwOCSF.js`: **279.07 kB** (gzip **83.77 kB**)
- `build/assets/index-c8BI17uD.css`: **109.81 kB** (gzip **18.58 kB**)

### Findings
- **🟡 CSS growth is notable** (large global stylesheet expansion). Not an immediate fail, but monitor and prevent continued unbounded growth.

### Requested fix
- Split animation-heavy CSS into scoped/module files or sectioned imports to keep global CSS maintainable.

---

## 5) Design consistency (φ precision aesthetic)

### What looks good
- Choreography sequencing and copper accents align with the φ-inspired precision language.
- Hardcoded whites/footer dark values were replaced by theme tokens (`--ef-white`, `--ef-footer-dark`).

### Findings
- **🟢 No aesthetic blocker found** in reviewed commits.

---

## 6) Accessibility (keyboard + SR)

### What looks good
- Focus-visible rings remain present on key interactive elements.
- Hero headline uses `aria-label` while split decorative spans are `aria-hidden`.

### Findings
- **🟡 Process gap:** no automated lint/a11y script exists (`package.json` has only `dev` and `build`), so regressions may slip undetected.

### Requested fix
1. Add at least one CI a11y/lint gate (eslint + jsx-a11y recommended).
2. Add keyboard regression check to CI QA checklist (tab order + focus visibility).

---

## 7) Build cleanliness

- ✅ `npm run build` passes.
- ⚠️ No lint/test scripts currently defined, so “clean” only covers compile/build.

---

## Required Actions Summary

### 🔴 Blocking
- None.

### 🟡 Must-fix before final QA sign-off
1. Add `onTouchCancel` handling (or CSS-only active states) for hero CTA touch interactions.
2. Replace/optimize `clip-path` rule-draw animation to a transform-driven reveal.
3. Add lint/a11y CI gate (minimum eslint baseline) so build quality is enforceable.

### 🟢 Follow-up (non-blocking)
1. Reduce global CSS surface area via modularization.
2. Consider animationend-driven `will-change` cleanup for tighter perf hygiene.

---

## Final Recommendation

**Request one more polish pass, then re-run CI Step 4 QA.**
Core direction is strong and close to ship quality; the remaining issues are manageable and should be addressed now to avoid mobile/perf regressions later.
