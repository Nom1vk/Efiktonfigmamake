# NEXT-IMPROVEMENT: Hero Stats Bar — Scroll-Triggered Counting With Physical Weight

**Reviewer:** Nikos Papadopoulos (Owner, Papadopoulos Metal Fabrication, Volos)  
**Date:** 2026-03-01  
**Cycle Focus:** Dynamic design, motion, and creative polish

---

## Persona Review

Let me tell you something. I run a factory with 45 people. Stamping, welding, powder coating, assembly. I've been doing this since I took over from my father in 2003. I don't have time for websites. When I open a page, I either believe these people within five seconds or I close the tab. Here is what I think.

**1. Does the site feel ALIVE?**
More alive than 95% of what I see from software companies. The headline split — "From Chaos to" sliding from the left, "Control." from the right — that made me sit up. It feels like a factory door opening. The copper rule drawing, the quote border animating, the CTAs popping in — these details say "we give a damn." The strikethrough list scratching out all the garbage tools I currently use? Brilliant. I actually smiled. The case study phases building with the copper timeline as I scroll — that felt like watching an implementation unfold. Good.

But here's the thing: the hero stats bar at the bottom — "5×", "90%", "OTIF" — those numbers count up, yes. But they count up like a spreadsheet cell updating. There is no *weight* to them. When I say my OTIF went from 60% to 97%, that number has blood and sweat behind it. Those stats are the most important proof on the entire page and they land like footnotes.

**2. Micro-interactions that reward exploration?**
The pillar card tilt is nice. Pipeline pulse is satisfying. The comparison table rows sliding from opposite sides — clever, and it makes the ERP feel like it's getting pushed out. The φ geometric background is art. I didn't notice it at first but my eye kept going to the right side of the hero and I couldn't explain why — that's good design. But the stats bar is passive. I scroll to it, numbers tick up, done. No drama.

**3. Do numbers animate in?**
Yes, they count. The φ-timed stagger is technically excellent. The OTIF letter reveal is creative. But counting alone isn't enough for the most critical proof point on the page. A number going from 0 to 90 should feel like the pressure gauge on my compressor rising. It should have *tension and release*.

**4. Does the strikethrough list animate?**
Beautifully. Each item gets scratched out one by one, text fades, then "One system. Nothing else." appears. This is the best animation on the site. It tells a story in motion. The stats bar should learn from this — it should tell the story of achievement, not just display a number.

**5. Sense of CRAFTSMANSHIP?**
Very strong now. The φ constants, the `prefers-reduced-motion` respect, the CSS custom property scroll performance bypass — these are people who measure in milliseconds. My factory measures in microns. We understand each other. But the stats bar — the final thing the visitor sees before scrolling — doesn't match this standard.

**6. "Wow, these people are serious" in 3 seconds?**
The hero headline does it. But the stats bar is the *closer*. It's the evidence that seals the deal on first impression. Right now it closes softly when it should close hard.

---

## The One Thing: Stats Bar Numbers With Overshoot Easing and Arrival Impact

### What It Is

Give the hero stats bar numbers a physical, mechanical feel — numbers that accelerate, overshoot slightly past their target, then settle back with a subtle bounce. Like a precision instrument needle swinging to its reading. Combined with a brief scale pulse on each stat when it "lands," and a hairline copper flash that sweeps across the stats bar left-to-right after all three numbers have settled.

### The Interaction

**Phase 1 — Count-up with overshoot (staggered, already triggered by `useInView`):**
- Each number counts up as it does now, but the easing curve changes from linear to a custom cubic-bezier that overshoots. For "5×": counts to 5.3× then settles to 5×. For "90%": counts to 93% then settles to 90%. Duration remains φ (1618ms). The overshoot occupies the final 25% of the duration.
- The OTIF letter reveal keeps its current sequential behavior — it's already excellent.

**Phase 2 — Landing impact (per stat, 80ms after count-up completes):**
- Each `.ef-stat-value` gets a one-shot `transform: scale(1.06)` → `scale(1.0)` pulse. Duration: 300ms, `ease-out`. Staggered per stat (matching their count-up stagger).
- Simultaneously, the stat value's `color` briefly intensifies — copper goes from current opacity to full brightness for 200ms, then eases back. A micro-flash that says "locked in."

**Phase 3 — Completion sweep (fires once, 400ms after last stat lands):**
- A 1px-tall copper gradient line (`rgba(193,127,62,0.4)` → transparent) sweeps left-to-right across the top border of the stats bar. Width ~60px, duration 600ms, `ease-in-out`. One shot, never replays.
- This is the "seal" — it says "all metrics confirmed."

**Phase 4 — Sublabel reveal (already exists, unchanged):**
- The sublabels ("in 2 years", "ongoing, sustained", "within 1 year") fade in after their parent stat lands. This is already implemented and well-timed.

### Why This Specific Animation

The stats bar is the last thing visible in the viewport before the visitor decides to scroll or leave. It carries the heaviest proof: 5× profit, 90% fewer problems, OTIF delivery. These are factory-floor numbers. They should arrive with factory-floor weight — like a stamping press completing its cycle, not like a calculator updating a cell.

The overshoot easing is key: it creates *tension* (will it go past?) then *resolution* (it settles exactly). This is how precision instruments behave. It communicates: "we measured this, and it's exact." The landing pulse makes each number feel like it physically impacts the page. The copper sweep ties the three stats together as a unified proof set.

The strikethrough list succeeds because each scratch *means* something — it's destruction with purpose. The stats bar needs the same intentionality: each number *arriving* with purpose. Not counting. *Landing*.

### Technical Approach

- **Overshoot easing:** Modify `useCountUp` hook to accept an optional `overshoot` parameter (e.g., `{ overshoot: 0.06, settleMs: 400 }`). In the final 25% of duration, count past target by `overshoot * target`, then ease back using a damped sine curve. Pure JS math in the existing `requestAnimationFrame` loop — no new dependencies.
- **Landing pulse:** CSS `@keyframes stat-land` (`scale(1.06) → scale(1.0)`) applied via a `.is-landed` class toggled by `AnimatedStat` when count-up completes. Timeout cleanup removes `will-change` 400ms after.
- **Color flash:** CSS `@keyframes stat-flash` on `.ef-stat-value` — `color` transitions from `var(--ef-copper-light)` to `var(--ef-copper)` over 200ms.
- **Copper sweep:** A `::after` pseudo-element on `.ef-stats-bar` with `@keyframes stat-sweep` — `translateX(-100%) → translateX(calc(100vw))`, triggered by a `.sweep-active` class set by the last `AnimatedStat`'s completion callback. One-shot via a ref flag.
- **prefers-reduced-motion:** No overshoot, no pulse, no sweep. Numbers appear at final value instantly. Sublabels appear immediately.
- **Performance:** `transform` and `opacity` only for pulse/sweep. The overshoot math runs in the existing rAF loop (no new frame budget). `will-change: transform` set only during pulse, cleaned up after.

### Files to Modify

- `src/hooks/useCountUp.ts` — Add optional overshoot/settle parameters to the counting math. ~15 lines of damped sine interpolation in the existing rAF callback.
- `src/components/Hero.tsx` — Add `.is-landed` class toggle in `AnimatedStat` on count-up completion. Add sweep trigger on last stat completion. ~12 lines.
- `src/styles/globals.css` — Add `@keyframes stat-land`, `@keyframes stat-flash`, `@keyframes stat-sweep`. Add `.is-landed` and `.sweep-active` selectors. Reduced-motion overrides. ~35 lines.

### Acceptance Criteria

#### Motion & Feel
- [ ] **Overshoot is subtle but perceptible:** numbers visibly pass their target value by 5–8% then settle. The settle feels like a precision instrument, not a rubber band.
- [ ] **Landing pulse registers as impact:** the `scale(1.06)` pulse is brief enough (300ms) to feel like arrival, not wobble.
- [ ] **Color flash is accent, not distraction:** copper brightens for ≤200ms, just enough to mark the moment.
- [ ] **Copper sweep reads as completion:** the 1px line crossing left-to-right says "confirmed" without competing with the CTA section below.
- [ ] **OTIF letter reveal unchanged:** the sequential character reveal already has strong personality and should not get overshoot treatment.
- [ ] **Stagger feels like a sequence, not simultaneous:** each stat lands distinctly, 200ms apart (matching existing STAGGER_MS).

#### Conversion & UX
- [ ] **Stats bar becomes a retention hook:** the overshoot creates micro-suspense that keeps the eye on the proof for ~500ms longer than a flat count-up.
- [ ] **No attention competition with CTAs:** the landing animations complete before a typical visitor would scroll, so "Book a Demo" remains the next natural action.
- [ ] **Mobile parity:** overshoot and pulse work identically on 375px viewport. Sweep scales to viewport width.

#### Technical & Performance
- [ ] **No new dependencies:** overshoot math is vanilla JS in existing rAF loop.
- [ ] **Compositor-only animations:** `transform`, `opacity`, `color` only. No layout triggers.
- [ ] **`will-change` discipline:** set on `.ef-stat-value` only during pulse window, removed after.
- [ ] **Reduced-motion:** all motion disabled. Final values render immediately.
- [ ] **No React render impact:** sweep and pulse driven by CSS classes, not state re-renders.

#### QA
- [ ] Desktop 1440px and mobile 375px verified.
- [ ] Overshoot values verified: 5× overshoots to ~5.3×, 90% overshoots to ~93–95%.
- [ ] Sweep fires exactly once, even with scroll oscillation around the trigger threshold.
- [ ] No visual regression in hero section (headline entrance, quote border, CTA animations).

---

*Filed by Nikos Papadopoulos — "In my factory, when the hydraulic press completes a cycle, you hear it. You feel it. Your numbers should land the same way. Make the proof hit like stamped steel, not like a spreadsheet refreshing."*
