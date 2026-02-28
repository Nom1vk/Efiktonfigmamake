# Salt QA Review — ROCKET-237

**Project:** Efikton website  
**Path reviewed:** `/home/node/.openclaw/workspace/projects/efikton-website`  
**Date:** 2026-03-01 (Europe/Athens)  
**Reviewer:** Salt (Design/Copy QA)

---

## Verdict

**Overall rating: GOOD (close to ship), with 3 fixes required before final sign-off.**

Build is clean, positioning is mostly strong, Four Pillars are correctly framed as a method, and visual execution is significantly above generic template quality. The main remaining gap is copy fidelity to the approved synthesis language in a few places.

---

## Review Criteria Findings

### 1) Positioning “Manufacturing Operating System” clarity (NOT ERP, NOT generic software)
**Status: PASS**

What’s working:
- Hero eyebrow explicitly says **“Manufacturing Operating System”**.
- Core value proposition appears repeatedly as **operating system**, not “ERP”.
- Messaging consistently frames outcome: chaos → control, predictability, margin protection.

Evidence:
- `src/components/Hero.tsx`
- `index.html` title/meta/OG descriptions
- `src/components/Footer.tsx`

Notes:
- No “ERP” framing found in user-facing copy.

---

### 2) Four Pillars (Materials/Time/Money/Knowledge) as interconnected method
**Status: PASS**

What’s working:
- Pillars are explicitly introduced as **“The Efikton Method”** and **“One System.”**
- Narrative arc (**CHAOS → METHOD → CONTROL → RESULTS**) reinforces interconnection, not module shopping.
- Pillar outcomes map correctly to control outcomes.

Evidence:
- `src/components/Solutions.tsx` (pillars + narrative arc)
- `src/components/Hero.tsx` (subhead references all four dimensions together)

---

### 3) Visual style elegant/minimalist (φ-inspired, clean, not busy corporate SaaS)
**Status: PASS (with one polish suggestion)**

What’s working:
- Clean editorial spacing and restrained visual hierarchy.
- φ motif used tastefully in hero background and logo treatment.
- Typography + whitespace feel intentional, not template-heavy.

Polish suggestion (non-blocking):
- The line **“Numbers don’t firefight.”** in Results can read clever/marketing-first vs premium-industrial calm. Consider a more timeless heading such as:
  - “Proof, not promises.”
  - “Measured operational outcomes.”

Evidence:
- `src/components/Hero.tsx`
- `src/components/Testimonials.tsx`

---

### 4) Copper `#B87333` accent used intentionally throughout
**Status: PASS**

What’s working:
- Copper consistently used for primary accents, CTAs, highlights, progress indicators, focus rings.
- Accent usage appears deliberate (not over-saturated).
- CSS tokens and direct style references align with approved copper.

Evidence:
- `src/styles/globals.css`
- `src/components/*` across hero/nav/solutions/results/cta/footer
- `public/og-image.svg`

---

### 5) No ManufactureSoft/generic placeholder content remaining
**Status: PASS**

What’s working:
- No ManufactureSoft strings found.
- No lorem/placeholder body copy found in user-facing sections.
- Core sections are rewritten for Efikton context.

Evidence:
- repo-wide grep on `src`, `public`, `index.html`

---

### 6) Stripe/Linear quality vs WordPress template feel
**Status: PASS (GOOD, not EXCELLENT yet)**

What’s working:
- Visual system is cohesive and premium-leaning.
- Motion and section transitions are restrained and modern.
- Content architecture reads as custom brand work, not stock template.

What keeps it at GOOD:
- Minor copy tone inconsistency in results section (see criterion 8).
- Some sections could tighten verbal precision to feel more “elite B2B” and less marketing flourish.

---

### 7) `npm run build` passes
**Status: PASS**

Command run:
- `npm run build`

Result:
- Build succeeded with Vite.
- Output bundles generated successfully.

---

### 8) Copy matches approved messaging from `05-AZOTH-SYNTHESIS.md`
**Status: PARTIAL PASS (Needs fixes)**

Most core lines are aligned (hero, wedge, pillars, proof points), but a few lines drift from approved phrasing and should be corrected for message discipline.

#### Required fixes (blocking for final copy sign-off)

1. **Use canonical phrase “from order to cash” (not “order-to-cash cycle”) in Results description**
   - Current: `src/components/Testimonials.tsx` (OTIF card description)
   - Suggested: “Delivery streamlined across the full **order to cash** flow. Customers trust dates again.”

2. **Use canonical phrase “One method. One system. Proven results.” at least once in primary fold or immediate below-fold**
   - Currently hero subhead ends with “One method. One system.” but omits **“Proven results.”**
   - Add the complete approved triad in hero subhead or a nearby supporting line.

3. **Tighten the OS line for synthesis parity**
   - Current hero subhead: “The manufacturing OS that turns chaos into control — across Materials, Time, Money, and Knowledge.”
   - Preferred for consistency with synthesis: “The manufacturing operating system that turns chaos into control.”
   - Recommendation: Use full phrase at least in one prominent location (hero subhead or nav microcopy), keep “OS” only as secondary shorthand.

---

## Final Recommendation

**Ship readiness:** 90%  
**Decision:** Implement the 3 copy fixes above, then approve for release.

The implementation is strong, clearly differentiated from ERP framing, and visually on-brand with a premium minimalist direction. This is no longer template content; it reads as a real brand system.

---

## QA commands executed

- `npm run build` (PASS)
- repo-wide string checks for placeholder/legacy and messaging terms
