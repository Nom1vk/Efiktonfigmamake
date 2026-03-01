# Add "ERP Migration" Risk Mitigation & Middle East Social Proof

**Priority:** P1  
**Persona:** Khalid Al-Rashidi — CEO, Al-Rashidi Manufacturing Group (Riyadh, 3 factories, 400 employees, $45M revenue, industrial valves & fittings)  
**Created:** 2026-03-01

## Description

The ERPReplacement section is the strongest part of the site for someone like Khalid — it directly names Oracle/SAP pain, consultant dependency, and workaround culture. **But it stops short of closing the deal** because it fails to address three critical objections from a burned ERP buyer:

1. **No Middle East references or proof.** Every testimonial, every case study, every named person is Greek. Khalid sees "Greece, Cyprus, Romania, Egypt" in the footer — but zero evidence of Middle East work. The Thermotech Hellas case study is excellent but irrelevant to his context (family heating company in Larissa ≠ industrial valves for Saudi Aramco supply chain).

2. **No vendor continuity/risk mitigation.** Khalid got burned by a $2M Oracle implementation. His #1 fear: "What happens when your 5-person company disappears?" The site says NOTHING about data portability, contractual protections, escrow, open standards, or what happens if Efikton ceases operations. For a buyer who's been burned, this is a dealbreaker that's completely unaddressed.

3. **The comparison table undersells the ERP replacement angle.** It says "Phase 1 live in 4-6 weeks" but doesn't explicitly say "replaces Oracle/SAP" — it positions alongside, not as a replacement. Khalid needs to hear: "You can turn Oracle OFF after Phase 3."

## What Would Make Khalid Click "Book a Demo" Right Now

A single line in the ERP Replacement section: **"Your team runs it independently by Phase 3 — and your data stays yours. Always."** paired with a concrete Middle East reference (even anonymized: "Industrial valve manufacturer, Riyadh, 380 employees").

## Acceptance Criteria

- [ ] Add a "Vendor Continuity" or "Your Data, Your Control" subsection to ERPReplacement.tsx with 3-4 bullet points: data export/portability, open standards, no lock-in, contractual protections
- [ ] Add at least one Middle East proof point to the Testimonials or CaseStudy section (can be anonymized: industry, city, size, one metric)
- [ ] Update the comparison table's "Implementation dependency" row to explicitly state the ERP can be decommissioned after full rollout
- [ ] Add "Oil & Gas" and "Industrial Valves & Fittings" to visible industry references (currently only in the form dropdown, not in proof/credibility)

## Files to Change

- `src/components/ERPReplacement.tsx` — Add vendor continuity section, update comparison table
- `src/components/Testimonials.tsx` — Add Middle East proof point or anonymized reference
- `src/components/About.tsx` — Add Middle East to credibility stats geography (currently "Greece, Cyprus, Romania, Egypt")
- `src/components/CaseStudy.tsx` — Consider adding a second brief case study card for ME market (optional, P2)

---

## Full Persona Review — Khalid Al-Rashidi

### 1. Does this site make me TRUST this company?

**Partially.** The About section is strong — "Built inside factories, not boardrooms" is exactly the right message. Named team members with real backgrounds help. The Thermotech case study is detailed and credible. BUT — every single reference is Greek. I'm in Riyadh. I need to know they can operate in my regulatory environment, my supply chain context, my culture. And there's ZERO on what happens if they go under. After Oracle, I'm not signing with anyone who doesn't address vendor risk upfront.

### 2. Is the messaging speaking to MY specific pain?

**The ERP Replacement section speaks directly to me** — "consultant dependency," "workaround-heavy operations," "process-model mismatch" — that's exactly what happened with Oracle. The "$2M system and a spreadsheet forest" line hits home. But the rest of the site talks about "Greek factories," "Thessaloniki," "family business culture." I run 3 factories making industrial valves for oil & gas. I need to see my world reflected somewhere.

### 3. Would I book a demo? What's stopping me?

**I'd consider it, but I wouldn't click today.** What stops me: (a) No evidence they've worked in the Middle East despite listing it as a market, (b) No answer to "what if you disappear?", (c) The form asks for my info but I have no idea who I'm talking to — no phone number, no named person for ME inquiries, no Arabic-speaking contact mentioned.

### 4. What feels generic vs what feels like they understand MY situation?

**Generic:** The four pillars (Materials/Time/Money/Knowledge) feel like a consulting framework. Clean, but I've heard similar from SAP consultants before deployment. The "chaos to control" arc is good storytelling but it's the same promise Oracle made.

**They understand me:** The ERP pain points are specific and accurate. "The ERP bent your process to fit its model" — yes, exactly. The phased implementation with "each phase funds the next" addresses my budget trauma. "We implement without stopping production" — that's critical for me.

### 5. The ONE thing that would make me click "Book a Demo" right now?

A testimonial from a Middle East manufacturer (even anonymized) saying: "We replaced [legacy ERP] with Efikton in 5 months. Our plant managers actually use it." That's it. One proof point that says "we've done this in your world, not just in Greece."
