# NEXT-IMPROVEMENT: Case Study Implementation Phases — Scroll-Triggered Timeline Build

**Reviewer:** Nikos Papadopoulos (Owner, Papadopoulos Metal Works, Volos)
**Date:** 2026-03-01
**Cycle Focus:** Dynamic design, motion, and creative polish

---

## Persona Review

I make steel shelving and industrial racks. Forty-two employees. I have been through two ERP disasters — one Greek vendor who disappeared, one SAP partner who charged me €180K and left me with a system my foreman refuses to touch. When someone tells me they can fix my factory, I need to FEEL it, not just read it.

I went through the Efikton site code section by section. Here is my honest assessment:

**1. Does the site feel ALIVE?**
The CHAOS→METHOD→CONTROL→RESULTS scroll arc is the best thing on this site. The jitter, the noise, the snap to clarity — this is storytelling through motion. The pipeline flow with traveling pulse dots, the strikethrough list scratching out tools one by one, the comparison table building from both sides — these sections breathe.

But the **Case Study implementation phases** (01 → 02 → 03) are completely static. Three boxes sitting there. No build. No progression. No sense of "and then, and then, and then." For a story about TRANSFORMATION over 4 months, the phases just... appear. Like a PDF. Like a consultant's PowerPoint slide. This is the part of the site that should feel like watching a factory come to life, and instead it reads like a printed timeline.

**2. Micro-interactions that reward exploration?**
The 3D tilt on pillar cards is premium. Pipeline pulse is satisfying. Stats count up beautifully with φ timing. The hero headline split-reveal (from previous ticket) will add choreography up top. But the case study mid-section — the implementation journey that IS the product story — has zero interactive reward.

**3. Do numbers animate in?**
Results section: yes, count-up works. Case study results grid: yes, `AnimatedResultMetric` fires on scroll. ✓

**4. Does the strikethrough list animate?**
Yes. Staggered striking with summary reveal. ✓ Well done.

**5. Sense of craftsmanship?**
The φ geometry, the 1618ms constants, the `prefers-reduced-motion` respect, the CSS custom property scroll binding — the engineering is genuinely excellent. But craftsmanship means EVERY section gets love. The case study phases are the unloved child.

**6. "Wow, these people are serious" in 3 seconds?**
The hero and scroll arc do heavy lifting. But when I scroll to the case study — the proof, the thing that should close me — it goes flat. The emotional momentum built by CHAOS→CONTROL dissipates into static cards.

---

## The One Thing: Progressive Timeline Build for Implementation Phases

### What exists now
The three implementation phases (Materials & Costing → Production Planning → Full System Live) render as a static grid with `animate-reveal` fade-in. One fade. Done. No progression, no connection between phases, no sense of journey.

### What it should be
A **scroll-triggered sequential timeline build** where each phase constructs itself as you scroll, with a connecting progress line that draws between them — like watching a factory being built floor by floor.

### Specific interaction design

**The vertical progress line:**
- A copper line (`var(--ef-copper)`) that draws downward from Phase 01 to Phase 03 as the section scrolls into view
- Uses CSS custom property bound to scroll progress (same pattern as the CHAOS→CONTROL arc in `useScrollProgress`)
- `height` driven by `--case-phase-progress` from 0% to 100%
- Sits on the left edge where the phase numbers live (the `80px` grid column)

**Phase entrance choreography:**
- Each phase starts with `opacity: 0; transform: translateY(24px)`
- Phase 01 enters when progress line reaches ~15% (about 200ms after section enters viewport)
- Phase 02 enters at ~45% — the line has drawn down to meet it
- Phase 03 enters at ~75%
- Each phase: number scales from 0.8→1.0 with a spring ease, then title slides in from left (100ms delay), then description fades (200ms delay), then checkmark wins stagger in one by one (80ms intervals)
- Total per-phase choreography: ~600ms

**Phase number pulse:**
- When each phase "activates," its large copper number (`01`, `02`, `03`) briefly pulses brighter — `rgba(193,127,62,0.25)` → `rgba(193,127,62,0.6)` → back to `0.25` over 400ms
- Creates a "heartbeat" feeling, like the system coming online

**Win checkmarks:**
- The `✓` icons for each phase's wins currently just exist. They should draw their stroke path with `stroke-dashoffset` animation, like a hand checking items off a list
- 80ms stagger between each win within a phase

**Timing constants:**
- Use `PHI_DURATION / 2` (809ms) for the per-phase entrance to keep it snappy
- Progress line draws over the full scroll range of the section
- `prefers-reduced-motion`: skip all motion, show everything immediately (maintain the existing pattern)

### Why this one thing?
The case study IS the close. It's the proof. A CEO reading this needs to feel the transformation happening — not just read that it happened. The scroll-driven progress line connecting three phases creates a visual metaphor: *this is a journey, each step builds on the last, and we'll walk you through it.* That's exactly what Efikton sells. The medium becomes the message.

Every other section on this site has earned its motion. The case study phases are the last static holdout in an otherwise alive page.

### Technical approach
- Add `useScrollProgress` ref to the phases container (same hook already used in Solutions.tsx)
- Write `--case-phase-progress` as CSS custom property on the container
- CSS handles the line height and phase visibility via custom property thresholds
- Checkmark SVG stroke animation via `stroke-dasharray`/`stroke-dashoffset`
- Zero additional dependencies. Same patterns already proven in the codebase.

### Feel reference
Think: Linear's changelog timeline where items build as you scroll. Or Stripe's documentation sidebar that fills as you progress. The line drawing down is the user's sense of progress through the story.

---

**Impact:** High — converts the proof section from static to alive, completes the motion story  
**Effort:** Medium — reuses existing scroll hooks and animation patterns  
**Risk:** Low — proven patterns, no new dependencies

---

*Review by Nikos Papadopoulos, 2026-03-01 15:02 EET*
*"If you want me to believe your system builds control step by step, show me step by step. Don't just tell me."*

---

## Ticket Review (Salt) — 2026-03-01 15:10 EET

### Verdict
**SHIP IT**

### Feasibility (CSS/React)
Feasible with current stack and patterns already present in the codebase:
- `useScrollProgress` + CSS custom properties already proven
- Sequential reveal can be done with class/state thresholds or CSS var gates
- SVG checkmark stroke draw is straightforward via `stroke-dasharray` / `stroke-dashoffset`
- No library additions required

### Conversion impact
This should **increase persuasive momentum** in the proof section if kept disciplined. It visually reinforces step-by-step implementation (how Efikton de-risks change), which maps directly to buyer anxiety in ERP/ops transformations.

### Distraction risk
Low if constrained. Risk appears only if overshooting with spring bounce, excessive glow, or long delays. Keep motion utilitarian and subordinate to readability.

### Timing & easing check
Current proposal is directionally strong but needs explicit, testable timing/easing constraints.

### Polished acceptance criteria
1. **Sequential activation thresholds:**
   - Phase 01 activates when `--case-phase-progress >= 0.15`
   - Phase 02 activates when `--case-phase-progress >= 0.45`
   - Phase 03 activates when `--case-phase-progress >= 0.75`
2. **Progress line behavior:**
   - Copper timeline line maps continuously from `0% -> 100%` over section scroll window
   - No jump discontinuities when scrolling up/down
3. **Per-phase choreography budget:**
   - Total phase reveal <= `PHI_DURATION/2` (~809ms)
   - Number pop: 180–240ms, ease `cubic-bezier(0.22, 1, 0.36, 1)`
   - Title slide: starts +100ms after number
   - Body fade: starts +200ms
   - Win items stagger: 80ms between items
4. **Pulse restraint:**
   - Number pulse lasts <= 400ms
   - Max glow alpha <= 0.6, returns to base <= 0.25
   - Exactly one pulse per phase activation
5. **Reduced motion compliance:**
   - Under `prefers-reduced-motion: reduce`, all phases/line/wins render fully visible immediately
   - No transform/opacity/stroke animations in reduced mode
6. **Readability guardrails:**
   - Text is readable before and during animation (no long hidden state)
   - No overlap or layout shift > negligible visual jitter
7. **Performance guardrails:**
   - No additional runtime dependencies
   - Scrolling remains smooth on mid-range mobile (no visible stutter)
8. **Done means done (QA):**
   - Behavior verified desktop + mobile
   - Reverse scroll returns states predictably (or remains intentionally latched, but documented)
   - Build passes with no new warnings/errors

