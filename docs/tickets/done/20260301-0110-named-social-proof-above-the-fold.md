# Add Named Social Proof Above the Fold — Real Company, Real Person, Real Result

**Priority:** P1  
**Reviewer Persona:** Nikos Papadopoulos, Operations Director, Greek auto parts manufacturer (120 employees, €15M revenue)  
**Date:** 2026-03-01

---

## The Problem (Nikos's Perspective)

I land on this site and I see bold claims: **5× profit, 90% fewer problems, OTIF in year one.** My first reaction? *Prove it.* I've been burned by vendors who promise the world. Every ERP salesman who walked into my factory said something similar.

The hero section has impressive numbers but **zero attribution**. No company name. No person's name. No industry detail. The stats bar at the bottom of the hero feels like marketing, not evidence.

Then I scroll to Testimonials and find four quotes — but they're attributed to "Factory Owner, Greece" and "Operations Director" and "Plant Manager." **These could be made up.** I've seen this pattern on a hundred SaaS sites. Generic role titles with no company name = zero credibility to someone who's been lied to by software vendors for a decade.

### What DOES work:
- **The four pillars (Materials, Time, Money, Knowledge)** — this feels like someone who actually understands manufacturing, not just IT. I recognize my problems in those descriptions.
- **"We implement without stopping production"** — this single line addresses my #1 fear. Every ERP implementation I've seen was a disaster. The phased approach with named wins per phase is excellent.
- **The "What you can stop using" list** — I literally have 4 of those 6 things. This feels targeted.
- **The CTA form asking "Biggest challenge"** — smart. Makes it feel consultative, not salesy.
- **"No spam. No sales pressure."** — I appreciate this but I don't fully believe it yet.

### What's stopping me from clicking "Book a Demo":
1. **No named customer.** Not one. I need to see a company like mine — a Greek manufacturer, 50-200 employees — who actually did this.
2. **No specifics in the proof points.** "A Greek auto parts manufacturer" in the Testimonials section is tantalizingly close but still anonymous. Give me the company name or at least the owner's first name and city.
3. **No "before" picture.** I know what chaos looks like. Show me you know too — with a specific story, not abstract bullet points.
4. **No timeline or cost indication.** The phased implementation is good but I have no idea if this is a 6-month thing or a 3-year thing. Am I looking at €50K or €500K? I won't fill out a form without some frame of reference.

### What feels generic:
- The quotes in Testimonials — role-only attribution is the universal sign of fabricated testimonials
- "Manufacturing Operating System" eyebrow — sounds like marketing jargon, not how I'd describe what I need
- The narrative arc (Chaos → Method → Control → Results) — nice visual, but it's a framework, not a story

### What feels like they understand manufacturing:
- The four pillars — this maps to how I actually think about my operation
- "Plan vs Actual every shift" — this is specific enough that someone with factory experience wrote it
- "The factory doesn't reset when people change" — this is EXACTLY my nightmare. My best planner is 58 and knows everything. When he retires, we're screwed.
- The order-to-cash flow diagram — this is my actual process

### The ONE thing that would make me click right now:
**A named testimonial from a real factory owner — first name, company type, city — placed directly under the hero headline, before I have to scroll.** Something like: *"We went from missing 30% of deliveries to 97% OTIF in 11 months. I wish I'd done this five years ago." — Giorgos K., auto parts manufacturer, Thessaloniki.* That one sentence would do more than all the animated stats combined.

---

## Description

Add a real, named customer proof point (quote + attribution with first name, industry, and city minimum) directly below the hero headline and above the CTA buttons. This is the single highest-impact change to convert skeptical manufacturing decision-makers.

Secondary: upgrade the four anonymous quotes in `Testimonials.tsx` to include at minimum first name + company type + city. If full attribution isn't possible for all four, cut to two quotes with real names rather than four anonymous ones.

## Acceptance Criteria (Polished / Testable)

1. **Hero proof placement:** In `src/components/Hero.tsx`, one proof quote block renders **between** the hero supporting paragraph and the CTA button group, and is visible on first paint at 1440px and 375px widths without overlap.
2. **Hero proof attribution quality:** Hero quote includes at minimum: **first name + company type/industry + city** (example shape: `— Giorgos K., Auto Parts Manufacturer, Thessaloniki`). If legal constraints apply, first name + last initial is acceptable; role-only attribution is not.
3. **Hero visual treatment:** Quote text is styled as subtle supporting evidence (not a card): italic body text, muted color token (`text-stone-500` / `#8B8680` equivalent), max width aligned with hero copy column, and vertical spacing of at least `mt-4` from subhead and `mb-6` before CTA.
4. **Testimonials credibility floor:** In `src/components/Testimonials.tsx`, at least **2 testimonials** include named attribution with **first name + company type + city**. Any testimonial that cannot meet this standard is removed from rotation.
5. **No regressions:** Build passes (`npm run build`), no CLS-inducing layout jump is introduced in hero, and mobile viewport has no horizontal overflow.
6. **Source-of-truth requirement:** Final copy used for names/results is confirmed as real customer input (sales/founder approved) and stored in the ticket notes or linked internal source before release.

## Files to Change

- `src/components/Hero.tsx` — Add proof quote between subhead paragraph and CTA div
- `src/components/Testimonials.tsx` — Update `ownerQuotes` array with real names; reduce array if needed

## Implementation Hints

- **Hero component (`src/components/Hero.tsx`)**
  - Insert a semantic quote wrapper directly after the supporting paragraph:
    - `p` (existing subhead)
    - `blockquote` / `p` quote line (italic, muted)
    - attribution `span` on same line or next line
  - Suggested Tailwind baseline:
    - Wrapper: `mt-4 mb-6 max-w-2xl`
    - Quote: `text-sm md:text-base italic text-stone-500 leading-relaxed`
    - Attribution: `not-italic font-medium text-stone-400`
  - Keep this content in the same text column as headline/subhead (avoid new grid/card).

- **Testimonials component (`src/components/Testimonials.tsx`)**
  - Update testimonial data model to separate `quote`, `name`, `companyType`, `city`, optional `result`.
  - Enforce rendering pattern: `name, companyType, city` (single line or wrapped) with consistent punctuation.
  - Prefer **2 highly credible quotes** over 4 weak/anonymous ones.

- **Copy guidance (safe style):**
  - Avoid inflated language; keep concrete outcomes + timeframe.
  - Example hero line:
    - “We went from missed weekly shipments to 97% OTIF in 11 months. I wish we had started earlier.”
    - `— Giorgos K., Auto Parts Manufacturer, Thessaloniki`
  - Add only metrics that can be defended if challenged.

## Salt Review

### Feasibility
**Feasible:** Yes. Engineering effort is low (content + light component markup), with the main dependency being customer attribution approval.

### Will this improve the site?
**Yes, materially.** For skeptical B2B manufacturing buyers, named social proof near the decision point reduces perceived marketing risk and improves trust before CTA interaction.

### Quick QA Pass (latest commits)
- `npm run build`: ✅ Passed (Vite production build successful)
- Latest commits reviewed (`git log -n 8`): no obvious regression indicators in commit metadata; build artifact generation is healthy.

### Ticket Rating
**SHIP IT**

Rationale: high conversion impact, low implementation cost, clear scope. Only caveat is real-name approval workflow.

## Notes

This is a **content-dependent ticket** — code changes are straightforward; attribution governance is the true critical path. If full naming approval is blocked, first-name + last-initial format is the minimum acceptable compromise.

The site's design and methodology messaging are already strong; trust evidence is the missing conversion lever.
