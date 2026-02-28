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

## Acceptance Criteria

1. **Hero component** (`Hero.tsx`): A single customer quote with real attribution (minimum: first name, industry segment, city) appears between the subhead and the CTA buttons
2. **Testimonials component** (`Testimonials.tsx`): At least 2 of 4 quotes have named attribution (first name + company type + city). Remove any quote that cannot be attributed to a real person — anonymous quotes actively harm trust
3. The named quote in the hero is visually subtle (not a testimonial card — just an italic line with a dash and attribution, in `#8B8680` or similar muted tone) so it feels like quiet confidence, not shouting
4. No layout shifts — the quote fits naturally in the existing visual flow
5. Content is sourced from real customer conversations (coordinate with sales/founder for attribution approval)

## Files to Change

- `src/components/Hero.tsx` — Add proof quote between subhead paragraph and CTA div
- `src/components/Testimonials.tsx` — Update `ownerQuotes` array with real names; reduce array if needed

## Notes

This is a **content-dependent ticket** — the code change is trivial (2-3 lines in Hero, data change in Testimonials). The hard part is getting real customer names approved. If legal/customer approval is the blocker, at minimum use "Giorgos K." style (first name + last initial) which is standard in B2B SaaS and still 10× more credible than "Factory Owner, Greece."

The site's design, structure, and methodology messaging are strong. The gap is purely **trust evidence**. Fix that and the conversion path is clear.
