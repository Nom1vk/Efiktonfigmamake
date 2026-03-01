# ROCKET-237 — CI Step 4 QA (Performance + Polish)

**Reviewer:** Anvil  
**Date:** 2026-03-01 13:36 (Europe/Athens)  
**Scope reviewed:** latest commit (`ce84736`) touching:
- `src/components/Solutions.tsx`
- `src/hooks/useScrollProgress.ts`
- `src/index.css`

## Verdict
**NEEDS-WORK** (2 blocking, 3 non-blocking)

---

## 🔴 Blocking findings

### 1) Scroll-linked arc is React state-driven on every scroll frame (mobile jank risk)
**Where:** `src/hooks/useScrollProgress.ts:17, 41, 44-47` and `src/components/Solutions.tsx:94-124, 182-188, 195, 316`  

`setProgress(clamped)` runs in `requestAnimationFrame` on scroll, causing component re-renders at scroll frequency. In `Solutions`, this rerender regenerates many inline style objects and recomputes the full narrative arc tree.

**Why this blocks:** The target here is smooth 60fps on mobile. Continuous React rerenders during scroll are a common source of dropped frames on mid/low-end devices.

**Fix request:**
- Keep scroll updates off React render path where possible.
- Write CSS custom props directly to `arc-container` via ref in RAF (`--arc-progress`, `--arc-jitter`) and only sync coarse state transitions (`arcStage`) when the stage changes.
- Avoid recomputing the entire section per pixel scrolled.

---

### 2) Reduced-motion coverage is incomplete for scroll indicator bounce in active stylesheet
**Where:** `src/index.css:1848-1850` and reduced-motion block at `1493-1507`  

`.scroll-bounce` animation is defined, but this file only disables `.animate-bounce`, not `.scroll-bounce`.

**Why this blocks:** `prefers-reduced-motion` must disable non-essential motion consistently.

**Fix request:**
- In `src/index.css`, add `.scroll-bounce { animation: none !important; }` inside a reduced-motion media query.

---

## 🟡 Non-blocking improvements

### 3) Progress bar animates via `width` every frame; prefer transform-based animation
**Where:** `src/components/Solutions.tsx:316-320`  

`width` updates cause layout work. Using `transform: scaleX(...)` avoids layout invalidation and is more compositor-friendly.

**Request:** Convert bar fill to `transform: scaleX(progress)` with fixed width and `transform-origin: left`.

---

### 4) Duplicate/unused tilt helper adds confusion and maintenance overhead
**Where:** `src/components/Solutions.tsx:6-25`  

`useTilt()` is defined but not used; an inline tilt implementation is duplicated inside `pillars.map`.

**Request:** Remove dead `useTilt` or refactor to a single reused implementation.

---

### 5) Accessibility semantics are mostly safe, but verify list semantics don’t over-announce
**Where:** `src/components/Solutions.tsx:189-223` and `327-370`  

`role="list"`/`role="listitem"` on non-native containers is acceptable; no keyboard traps introduced.

**Request:** Keep as-is unless SR testing shows verbose/duplicated announcements. If it does, prefer native list elements for cleaner semantics.

---

## Checklist against requested QA dimensions

1. **Animation performance (60fps / GPU / no thrash):** ❌ Needs optimization (state-driven scroll updates + width-based progress fill).  
2. **Reduced motion:** ❌ Incomplete (`.scroll-bounce` not explicitly disabled in active stylesheet).  
3. **Mobile touch / scroll smoothness:** ⚠️ Touch fallback behavior is okay (`hover:none` guards), but scroll path likely janky under load.  
4. **Load time / bundle size:** ✅ No dependency additions in this commit; build output remains reasonable.  
5. **Design consistency (φ precision aesthetic):** ✅ Directionally strong and on-brand (subtle copper, controlled transitions, structured progression).  
6. **Accessibility (keyboard / SR):** ✅ No regressions observed in code path; focus semantics unchanged.  
7. **Build clean:** ✅ `npm run build` passes.

Build output (current HEAD):
- `build/assets/index-CXbpaKYs.css`: **45.12 kB** (gzip 9.25 kB)
- `build/assets/index-gQTUtCFQ.js`: **274.92 kB** (gzip 83.05 kB)

---

## Required action before approval
Implement blocking fixes #1 and #2, then re-run QA for:
- scroll smoothness on mobile viewport,
- reduced-motion behavior across all animated elements in `Solutions`/Hero scroll indicators.
