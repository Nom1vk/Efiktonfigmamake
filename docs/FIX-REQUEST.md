# ROCKET-237 CI Step 4 — QA (Performance + Polish)

Date: 2026-03-01 05:40 Europe/Athens
Reviewer: Anvil
Repo: /home/node/.openclaw/workspace/projects/efikton-website
Range reviewed: `e6dfeb9..e91368e`

## Scope Reviewed
1) Animation performance (60fps/GPU/layout thrash)
2) Reduced-motion behavior
3) Mobile touch/scroll smoothness
4) Load-time and bundle impact
5) Design consistency with φ aesthetic
6) Accessibility (keyboard/screen reader)
7) Build health

---

## Verdict

**Status: CHANGES REQUESTED (1 blocking, 2 non-blocking).**

---

## Findings

### 🔴 Blocking

1. **Runtime crash in browser due missing `useRef` import in `Features.tsx`**
   - `useRef` is used in both `PipelineFlow` and `PhaseTimeline`, but not imported.
   - File evidence:
     - `src/components/Features.tsx:1` imports only `{ useEffect, useState }`
     - `src/components/Features.tsx:38` uses `useRef(false)`
     - `src/components/Features.tsx` later also uses `useRef` in `PhaseTimeline`
   - Browser result: app renders blank page; React throws component errors for `<PipelineFlow>` and `<PhaseTimeline>`.
   - Why this matters: this is a functional failure in runtime despite successful production build output.

**Required fix:**
```ts
import { useEffect, useRef, useState } from 'react';
```

---

### 🟡 Non-blocking (polish/perf)

2. **Bundle size increased notably in this range**
   - Baseline (`e6dfeb9`):
     - JS: **219.40 kB** (gzip **64.99 kB**)
     - CSS: **33.75 kB** (gzip **7.14 kB**)
   - Current (`HEAD`):
     - JS: **269.22 kB** (gzip **81.43 kB**)
     - CSS: **41.86 kB** (gzip **8.53 kB**)
   - Delta:
     - JS: **+49.8 kB raw / +16.4 kB gzip**
     - CSS: **+8.1 kB raw / +1.39 kB gzip**

   Observed contributor in lockfile/package changes: `react-router-dom@7.13.1` was added.

3. **Reduced-motion fallback forces all stop-using items into struck/faded state**
   - In reduced-motion, `.stop-using-text` is hard-set to faded and struck state globally.
   - This is motion-safe, but semantically it may present “already crossed out” content before section intent is reached.
   - Suggestion: retain final state only when the section enters view, but without animation.

---

## QA Focus-by-Focus

### 1) Animation PERFORMANCE
- Mostly uses compositor-safe properties (`transform`, `opacity`).
- Uses `IntersectionObserver` patterns rather than expensive scroll loops.
- No obvious layout-thrashing patterns in reviewed code.
- **Assessment:** PASS (after runtime blocker is fixed).

### 2) Reduced-motion
- Multiple `@media (prefers-reduced-motion: reduce)` guards present.
- Animations/transition-heavy effects are disabled appropriately.
- **Assessment:** PASS with the semantic polish note above.

### 3) Mobile touch/scroll
- Touch patterns are generally safe (`-webkit-overflow-scrolling: touch`, CSS-driven transitions).
- No obvious JS-driven scroll jank introduced in reviewed range.
- **Assessment:** PASS.

### 4) Load time / deps
- Build succeeds, but payload increased significantly.
- New route dependency likely part of increase; worth confirming necessity and tree-shaking results.
- **Assessment:** NEEDS ATTENTION (non-blocking for this QA step unless perf budget is strict).

### 5) Design consistency (φ precision aesthetic)
- New motion language is restrained and aligned with the existing precision/copper aesthetic.
- Sequence/timing feels intentional (not flashy).
- **Assessment:** PASS.

### 6) Accessibility
- Focus-visible styling exists and appears consistent.
- Semantic list/section markup maintained in reviewed files.
- No clear SR-breaking patterns found in reviewed changes.
- **Assessment:** PASS (pending runtime fix).

### 7) Build clean
- `npm run build` succeeds.
- **Assessment:** PASS.

---

## Required Action Before Approval

1. Fix `useRef` import in `src/components/Features.tsx`.
2. Re-run quick browser smoke test to confirm page renders (`/1/`) and no console runtime errors.

After #1 and #2 are complete, this Step 4 QA can move to **APPROVED**.