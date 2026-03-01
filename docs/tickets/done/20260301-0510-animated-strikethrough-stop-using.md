# NEXT-IMPROVEMENT: Animated Strikethrough on "What You Can Stop Using" List

**Filed by:** Nikos Papadopoulos (Client Reviewer — Creative & Motion Focus)
**Date:** 2026-03-01
**Priority:** High
**Focus:** Single highest-impact dynamic element

---

## Nikos Says

Ρε παιδιά, I scroll through the site and most things move nice — the numbers count up, the comparison table builds row by row, the pipeline flows across. Good. But then I get to "What you can stop using" and it's just... sitting there. Six lines of text. Dead. No movement. Nothing.

This is your **KILL SHOT** moment. You're telling the customer "throw away your spreadsheets, throw away your shadow costing, throw away your disconnected quality system" — and the page just *lists* them? Like a grocery list? Malaka, this should feel like crossing things OFF. Like the relief of finally deleting that cursed Excel file at 2am.

The site is maybe 70% alive. The hero counts up nicely, the ERP comparison table builds itself — that's good craftsmanship. But the strikethrough list is the single element where motion would create the most emotional impact, because it's the **transformation moment**. CHAOS → CONTROL happens RIGHT HERE. And right now it's static like a PDF.

---

## The Problem

The `stop-using-list` in `Features.tsx` has:
- A CSS class `.is-striking` that gets toggled when in view
- A `data-strike-index` attribute on each item for staggering
- But **zero actual animation**. The CSS (line ~1867 in `index.css`) only defines a hover background change. No strikethrough, no scratch, no fade, no nothing.

The component sets `strikingStarted` state when `stopUsingInView` triggers, but nothing visual happens.

---

## The Fix: Scroll-Triggered Animated Strikethrough

### Interaction Design

When the list scrolls into view:

1. **Items appear normal** for 300ms (let the eye land)
2. **One by one** (staggered 400ms apart), each item gets:
   - A copper-colored `text-decoration: line-through` that **draws itself from left to right** over 600ms using a CSS gradient mask or pseudo-element width animation
   - The text simultaneously fades to 40% opacity (not gone — still readable, just "dismissed")
   - A subtle 2px horizontal translate (nudge right) suggesting "pushed aside"
3. **After all 6 are struck**, pause 500ms, then a small summary line fades in below: **"One system. Nothing else."** in copper, 12px, uppercase tracking

### CSS Implementation (pseudo-element approach)

```css
.stop-using-item {
  position: relative;
  transition: opacity 0.5s ease, transform 0.5s ease;
}

.stop-using-list.is-striking .stop-using-item {
  opacity: 0.4;
  transform: translateX(4px);
}

/* Stagger each item */
.stop-using-list.is-striking .stop-using-item[data-strike-index="0"] { transition-delay: 300ms; }
.stop-using-list.is-striking .stop-using-item[data-strike-index="1"] { transition-delay: 700ms; }
.stop-using-list.is-striking .stop-using-item[data-strike-index="2"] { transition-delay: 1100ms; }
.stop-using-list.is-striking .stop-using-item[data-strike-index="3"] { transition-delay: 1500ms; }
.stop-using-list.is-striking .stop-using-item[data-strike-index="4"] { transition-delay: 1900ms; }
.stop-using-list.is-striking .stop-using-item[data-strike-index="5"] { transition-delay: 2300ms; }

/* The drawing strikethrough line */
.stop-using-text {
  position: relative;
}

.stop-using-text::after {
  content: '';
  position: absolute;
  left: 0;
  top: 50%;
  height: 2px;
  width: 0;
  background: linear-gradient(90deg, rgba(184,115,51,0.8), rgba(184,115,51,0.4));
  transition: width 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

.stop-using-list.is-striking .stop-using-item[data-strike-index="0"] .stop-using-text::after { width: 100%; transition-delay: 300ms; }
.stop-using-list.is-striking .stop-using-item[data-strike-index="1"] .stop-using-text::after { width: 100%; transition-delay: 700ms; }
.stop-using-list.is-striking .stop-using-item[data-strike-index="2"] .stop-using-text::after { width: 100%; transition-delay: 1100ms; }
.stop-using-list.is-striking .stop-using-item[data-strike-index="3"] .stop-using-text::after { width: 100%; transition-delay: 1500ms; }
.stop-using-list.is-striking .stop-using-item[data-strike-index="4"] .stop-using-text::after { width: 100%; transition-delay: 1900ms; }
.stop-using-list.is-striking .stop-using-item[data-strike-index="5"] .stop-using-text::after { width: 100%; transition-delay: 2300ms; }
```

### Timing Reference
- Total sequence: ~3.5 seconds (300ms initial + 6 × 400ms stagger + 600ms final draw)
- Easing: `cubic-bezier(0.25, 0.46, 0.45, 0.94)` — smooth deceleration like a pen stroke
- Respect `prefers-reduced-motion`: skip animation, show final state immediately

### Why This One Element

1. **Emotional payoff** — It's the only place on the site where you're *removing* things. Motion should reinforce that feeling of liberation.
2. **Infrastructure already exists** — `is-striking` class, `data-strike-index` attributes, `useInView` hook all wired up. Just needs CSS.
3. **Low risk, high reward** — Pure CSS addition, no React refactoring needed. 30 minutes of work for a moment that visitors will remember.
4. **Narrative arc** — The site tells a story: chaos → method → control. This list is the bridge between chaos and method. It should *feel* like crossing a threshold.

---

## Score Card (1-10)

| Question | Score | Note |
|----------|-------|------|
| Does the site feel ALIVE? | 7 | Good animation in hero/stats/comparison. Pipeline flow is nice. But several sections are fade-only. |
| Micro-interactions that reward exploration? | 5 | Hover states exist but no scroll-driven surprises after the first fold. |
| Numbers animate in? | 9 | `useCountUp` with φ-duration is well done. Case study results too. |
| Pipeline stages build progressively? | 8 | PipelineFlow with staggered steps + pulse dots works well. |
| Strikethrough list animates? | 2 | Infrastructure exists, animation doesn't. This is the gap. |
| Craftsmanship impression? | 7 | The φ-based proportions and breathing background show care. But the dead zones lower it. |
| "Wow" in first 3 seconds? | 7 | Hero headline reveal + φ background is elegant. Not quite Apple-launch-level but solid. |

**Overall: 6.4/10** — Good bones, but the transformation moment is missing its soul.

---

## Salt Review (Ticket Triage)

**Verdict:** **SHIP IT**

### Feasibility (CSS/React)
- Technically feasible with current stack and markup.
- Existing `is-striking` state + `data-strike-index` wiring means implementation is mostly CSS.
- No dependency on JS animation libraries required.
- Recommend single replay only (trigger once on first in-view) to avoid repetitive distraction.

### Conversion Impact
- Supports conversion narrative by making the “remove old tools” moment emotionally legible.
- If kept subtle, it strengthens trust and clarity; if overdone, it can feel theatrical.
- Current proposal is directionally correct; timing needs guardrails to avoid drag.

### Risks / Guardrails
- Sequence can feel long on impatient scroll (~3.5s). Keep perceived completion under ~3.0s.
- Ensure line rendering works on wrapped text and different font metrics.
- Keep contrast/readability acceptable after fade (target min 4.5:1 where body text remains informational).

## Polished Acceptance Criteria

1. **Trigger behavior**
   - Animation starts when `.stop-using-list` enters viewport at least 35% visibility.
   - Sequence runs **once per page load** (no replay on minor scroll oscillation).

2. **Timing & easing**
   - Initial settle delay: **250–300ms**.
   - Per-item stagger: **320–380ms** (target 350ms).
   - Strike draw duration: **500–650ms** (target 600ms).
   - Easing: `cubic-bezier(0.25, 0.46, 0.45, 0.94)` or equivalent smooth deceleration.
   - Total sequence (first strike start → summary visible): **≤ 3.0s target, 3.2s hard max**.

3. **Per-item visual state**
   - Copper strike line draws left→right via pseudo-element or mask (no abrupt on/off).
   - Text opacity transitions to **0.4–0.5**.
   - Horizontal nudge limited to **2–4px**.
   - No layout shift/jank (CLS unaffected).

4. **Summary line**
   - After final item strike + 400–500ms pause, show: **“One system. Nothing else.”**
   - Style: copper tone, uppercase, subtle tracking, non-dominant size.

5. **Accessibility & user preferences**
   - Under `prefers-reduced-motion: reduce`, skip staged animation and render final state immediately.
   - Content remains fully readable with strike overlay.

6. **Responsive quality**
   - Verified at 375px, 768px, 1440px.
   - Strike line remains correctly aligned for wrapped lines and variable text length.
   - No horizontal overflow.

7. **Performance**
   - No additional runtime libraries.
   - Animation uses composited-friendly properties where possible (opacity/transform); paint-heavy work minimized.

8. **QA sign-off**
   - Manual check confirms sequence is noticeable but not distracting.
   - Animation supports (not competes with) nearby CTAs and comparison section.

---

*— Nikos Papadopoulos, Volos*
*"My nephew showed me the Stripe website last week. Every number moves, every section breathes. That's what I want to feel when I look at YOUR site. You're almost there. Fix this list."*
