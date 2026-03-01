# Add "Replace Your ERP" Comparison Section — Address Failed ERP Migration Buyers

**Priority:** P1  
**Persona:** Khalid Al-Rashidi — CEO, Al-Rashidi Manufacturing Group, Riyadh (3 factories, 400 employees, $45M revenue, industrial valves & fittings for oil & gas). Burned by a failed $2M Oracle ERP implementation.

## Description

The site does an excellent job positioning Efikton's methodology and showing proof metrics — but it completely fails to address the **ERP-refugee buyer**: someone who already spent millions on Oracle/SAP/etc, got burned, and is now evaluating alternatives with deep skepticism.

The "What you can stop using" list mentions "spreadsheets" and "standalone tools" — but the #1 thing Khalid wants to stop using is **Oracle**. The site never mentions ERP by name. It never says "this replaces your ERP." It never addresses the fear that Efikton is just *another layer on top of the mess*.

The site also has **zero Middle East references or social proof**. Both testimonials are Greek. The "Serving: Middle East" line in the footer actually makes this worse — it claims to serve the region but offers no evidence of having done so.

### What's missing (Khalid's exact objections):

1. **No ERP replacement messaging.** "What you can stop using" lists small tools but not the elephant in the room. Khalid needs to hear: "Yes, this replaces Oracle/SAP for manufacturing operations."
2. **No failed-ERP empathy.** The "chaos" narrative is generic. It doesn't acknowledge that the chaos often comes FROM the ERP itself — workarounds, consultant dependency, systems that don't match how the factory actually works.
3. **No Middle East proof.** Two Greek testimonials. Zero Gulf references. If you say "Serving: Middle East" you need at minimum a case study or a named reference.
4. **No answer to "what happens when your 5-person company disappears?"** — No team size, no backing, no continuity assurance. For a buyer who got burned by a large vendor, a small vendor with no visible team is even scarier.
5. **Implementation timeline is vague.** "Each phase delivers measurable wins" — but HOW LONG? Khalid's Oracle took 18 months. He needs to see "Phase 1: 6-8 weeks" or similar concrete timelines.

## Acceptance Criteria

- [ ] Add a new section (between Features/System and CTA) titled something like **"Already running an ERP that doesn't work?"** or **"Replace the system that was supposed to fix everything"**
- [ ] Explicitly name Oracle, SAP, and generic "legacy ERP" as systems Efikton replaces for manufacturing operations
- [ ] Include 3-4 bullet points addressing ERP-refugee pain: consultant dependency, workarounds, systems that don't match reality, cost of maintaining vs value delivered
- [ ] Add a brief comparison: Traditional ERP (18+ months, $500K+, consultant-dependent, generic) vs Efikton (phased, weeks not years, methodology-first, manufacturing-specific)
- [ ] Add concrete timeline estimates to the implementation phases (e.g., "Phase 1: 4-6 weeks")
- [ ] Either add a Middle East testimonial/reference OR remove "Middle East" from the Serving list until one exists (don't claim what you can't prove)

## Files to Change

- `src/components/Features.tsx` — Add concrete timeline durations to each implementation phase
- **New file:** `src/components/ERPReplacement.tsx` — New section targeting ERP-refugee buyers with comparison table and specific pain-point messaging
- `src/App.tsx` (or equivalent layout) — Insert new section between Features and CTA
- `src/components/Testimonials.tsx` — Add Middle East proof point OR flag for content team
- `src/components/CTA.tsx` — Add "Industrial Valves & Fittings" and "Oil & Gas" to industry dropdown options
