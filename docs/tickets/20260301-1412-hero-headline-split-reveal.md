# NEXT-IMPROVEMENT: Hero Section — Scroll-Triggered Headline Choreography

**Reviewer:** Khalid Al-Rashidi (CEO, Al-Rashidi Industrial Group, Riyadh)
**Date:** 2026-03-01
**Cycle Focus:** Dynamic design, motion, and creative polish

---

## Persona Review

I have been burned by four Oracle implementations and a SAP rollout that cost more than my second factory line. When I land on a site that claims to fix manufacturing chaos, the first three seconds decide whether I read or leave.

I reviewed the Efikton site code in full. Here is my honest assessment against the six questions:

**1. Does the site feel ALIVE?**
Yes — more than last cycle. The CHAOS→CONTROL scroll arc with jitter, noise overlay, and spring snap is genuinely well done. The pipeline pulse dots, the staggered strikethrough list, the ERP comparison table building row by row — these are alive. The middle and lower sections have real choreography now. But the **hero** — the first thing anyone sees — is still CSS `opacity` fades with class toggles. `animate-reveal-heading`, `animate-reveal-body`. Fade in, done. No choreography. No moment.

**2. Micro-interactions that reward exploration?**
The 3D tilt on pillar cards is subtle and premium. The pipeline pulse is satisfying. The comparison table's dual-slide (ERP from left, Efikton from right) is clever. Good coverage in the mid-page. Nothing in the hero rewards interaction.

**3. Do numbers animate in?**
Yes. Hero stats count up with φ-timed stagger + OTIF letter reveal. Case study results count up. ✓ Well executed.

**4. Does the strikethrough list animate?**
Yes. Staggered striking with "One system. Nothing else." summary reveal. ✓ Polished.

**5. Sense of craftsmanship?**
The φ geometry background, 1618ms timing constants, `prefers-reduced-motion` respect throughout, scroll-linked CSS custom properties bypassing React renders — the engineering is excellent. The bones say craftsmanship. But the hero entrance says "template."

**6. "Wow, these people are serious" in 3 seconds?**
No. The hero fades in like every SaaS landing page. The headline "From Chaos to Control." appears via opacity. The subhead follows. The quote follows. All opacity. No spatial movement, no timing drama, no sense that this company obsesses over the details of *how things appear*. The φ background breathes, the stats count — but those are below the fold on mobile and at the bottom of a tall hero on desktop. The first impression is a fade.

---

## The One Thing: Hero Headline Split-Reveal with Spatial Choreography

### What It Is

Replace the current `animate-reveal-heading` / `animate-reveal-body` opacity fades in the Hero section with a choreographed entrance sequence where each content block enters from a distinct spatial origin with staggered timing, creating a "pieces assembling into position" effect that mirrors the CHAOS→CONTROL promise.

### The Interaction

**T+0ms (page load, mounted = true):**
- The copper vertical accent rule on the right draws downward (height 0% → 100%, 800ms, ease-out)
- The φ symbol fades in at 3% opacity (already subtle, just needs a 400ms fade instead of instant)

**T+200ms — Headline enters:**
- "From Chaos to" slides in from left (-30px → 0) + opacity (0 → 1), duration 600ms, `cubic-bezier(0.22, 1, 0.36, 1)`
- "Control." slides in from right (+20px → 0) + opacity, 150ms later, same easing but slightly faster (500ms) — the two halves converge, mirroring the brand promise of bringing scattered things together

**T+600ms — Subhead enters:**
- Slides up from below (+15px → 0) + opacity, 500ms, ease-out
- Subtle: text starts at `letter-spacing: 0.02em` and settles to `-0.01em` over the animation — a micro-refinement that registers subconsciously as "tightening up"

**T+900ms — Body paragraph enters:**
- Same upward slide but gentler (+10px), 450ms
- Slightly faster than subhead — momentum builds

**T+1200ms — Quote block enters:**
- The copper left border draws downward (like the vertical rule did), 400ms
- Quote text fades in 150ms after border starts drawing
- Cite line follows 200ms later

**T+1618ms (φ beat) — CTAs enter:**
- "Book a Demo" scales from 0.95 → 1.0 + opacity, with a very brief overshoot (`cubic-bezier(0.34, 1.56, 0.64, 1)`) — the spring says "ready, let's go"
- "See Results →" follows 100ms later, no spring, just smooth ease-out — secondary CTA is confident but not pushy

**T+2000ms — Scroll indicator appears:**
- The vertical line draws down + chevron fades in, completing the choreography

### Why This Specific Animation

The headline split-reveal (left + right converging) is the signature moment. It physically performs "bringing chaos into control" — two separate pieces finding their place. Every other entrance element follows in a cascade that feels like a factory line starting up: first piece, second piece, each one faster and more confident than the last, until the CTA springs into position like a finished product rolling off the line.

This is not decoration. It is the brand promise enacted in motion.

### Technical Approach

- All animations via CSS `@keyframes` + `animation-delay`, triggered by the existing `is-mounted` class on `ef-hero-section`
- Split the headline into two `<span>` wrappers: one for "From Chaos to" and one for "Control." — minimal JSX change
- Use `transform: translateX()` + `opacity` only — no layout-triggering properties, CLS stays 0.00
- `will-change: transform, opacity` on animated elements, removed after animation completes (via `animationend` listener or a 3s timeout)
- `prefers-reduced-motion`: all elements render at final position immediately, no motion
- Total JS change: ~15 lines (split headline into two spans, add animationend cleanup). Everything else is CSS.

### Files to Modify

- `src/components/Hero.tsx` — split headline text into two animated spans; add mounted-based class for quote border draw; animationend cleanup for will-change
- `src/index.css` — add `@keyframes hero-from-left`, `hero-from-right`, `hero-from-below`, `hero-border-draw`, `hero-cta-spring`; timing delays on `.ef-hero-item[data-delay]` selectors (already partially structured for this)

### Acceptance Criteria

#### Motion Quality
- [ ] Headline is split into two spans and enters from opposite horizontal directions: "From Chaos to" `translateX(-30px → 0)`, "Control." `translateX(20px → 0)`; mobile (<640px) uses `-15px` / `10px`
- [ ] Visual sequence order is preserved with no inversions: headline → subhead → body → quote → CTAs → scroll indicator
- [ ] Full entrance choreography completes in `<= 2200ms` after mount (including scroll indicator)
- [ ] Primary CTA spring uses at most one overshoot and reaches steady state in `<= 300ms`

#### Conversion Guardrails
- [ ] Main headline reaches full readability in `<= 800ms` from mount
- [ ] Primary CTA is visible and clickable in `<= 1800ms` from mount
- [ ] Secondary CTA appears after primary by `80–140ms` (stagger present but not sluggish)
- [ ] Motion supports message clarity ("chaos resolving into control") and does not obscure text at any point

#### Technical / Performance
- [ ] Only compositor-friendly properties animate (`transform`, `opacity`); no layout/reflow-triggering properties (`top/left/width/height/margin/padding`)
- [ ] Hero CLS remains `0.00` in Lighthouse
- [ ] `will-change` is removed within `<= 500ms` after each element’s animation completes
- [ ] `prefers-reduced-motion: reduce` renders final state immediately (no decorative movement)
- [ ] No hydration mismatch between SSR and client mount states
- [ ] Cross-browser validation passes on iOS Safari 16+, Chrome 100+, Firefox 110+

#### Reliability / UX
- [ ] Back/forward navigation and SPA route transitions replay animation cleanly without flash-of-final-state
- [ ] No scroll lock, pointer-event blocking, or input jank during entrance sequence
- [ ] On low-end/mobile devices, animation remains smooth (no sustained stutter > 2 consecutive dropped frames during first 2.2s)

---

*Filed by Khalid Al-Rashidi — "The first three seconds are not about information. They are about conviction. Make the entrance say: these people control every detail."*
