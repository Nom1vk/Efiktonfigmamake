# Add "About Us / Who We Are" Section with Team Credibility and Greek Manufacturing Roots

**Priority:** P1  
**Persona:** Nikos Papadopoulos — Operations Director, Greek auto parts manufacturer (120 employees, €15M revenue)  
**Date:** 2026-03-01

## Description

As a Greek manufacturer evaluating Efikton, I land on a polished site with strong messaging about pain I genuinely feel — the firefighting, the spreadsheet chaos, the missed deliveries. The "Chaos → Method → Control → Results" arc resonates. The Giorgos K. testimonial from Thessaloniki catches my eye — that's my world.

**But I would NOT book a demo yet.** Here's why:

I don't know who these people are. There is zero information about the company, the team, their background, or their track record. The Footer says "© 2026 Efikton" and that's it. No founding story, no team faces, no "we've been in Greek manufacturing for X years," no methodology origin story. The "Company" nav section links to Method, Results, and Contact — nothing about the actual company.

For a Greek operations director, **trust is built on people, not features.** I need to know: Who built this? Do they understand Greek manufacturing culture — the family businesses, the supplier relationships, the regulatory environment? Have they walked a factory floor? How many implementations have they done? Are they five consultants or fifty? Will they still exist in three years?

The testimonials help but feel thin — two quotes, first-name-only, no company names, no logos. In my world, I'd call Giorgos K. before I'd book a demo. But I can't, because there's no last name, no company, no way to verify.

**The single biggest blocker to conversion for a trust-first buyer like me is the complete absence of company/team credibility.**

## Acceptance Criteria

- [ ] New section between Results and CTA (or accessible from nav) titled "Who We Are" or "About Efikton"
- [ ] Contains: founding story (brief — 2-3 sentences rooted in Greek manufacturing), team size/experience indicator, years in manufacturing
- [ ] At least one named team member with photo, title, and a line about their manufacturing background
- [ ] Methodology origin: one sentence on where the four-pillar method came from (real factory experience, not academic theory)
- [ ] Testimonials upgraded: full names where possible, company type + size indicator, ideally a logo strip of 3-5 client industries
- [ ] Nav updated: "Company" footer section should include an "About" link
- [ ] Tone: confident but not corporate. This is a Greek company that knows factories — lean into that authenticity

## Files to Change

- `src/components/Testimonials.tsx` — upgrade quote attribution (fuller names, company details)
- `src/components/Footer.tsx` — add "About" link to Company section
- `src/components/Navigation.tsx` — optionally add "About" to nav links
- **New file:** `src/components/About.tsx` — the "Who We Are" section
- `src/App.tsx` (or equivalent layout) — integrate the new About section into page flow

## Nikos's Verdict

1. **Trust?** Not yet. Beautiful site, but I don't know who I'm talking to. In Greece, we do business with people, not landing pages.
2. **Speaking to my pain?** Yes — the firefighting language, the "stop using spreadsheets" list, the OTIF story. This is my life. But it's speaking AT me, not WITH me. I want to feel like they've sat in my chair.
3. **Would I book a demo?** Not today. I'd forward the site to my IT manager and say "look into this." I need one more trust signal before I pick up the phone.
4. **Generic vs understands me?** The four pillars, the order-to-cash flow, the phased implementation — that feels real. The ERP Replacement section is good but reads like it's aimed at bigger companies (Oracle, SAP — I run a mid-market system, not Oracle). The regions "Greece & EU, Middle East, Egypt" are listed but there's no sense of Greek identity beyond the name.
5. **One thing to make me click?** A photo of a real person from Efikton standing in a Greek factory, with a sentence like "We've implemented in 40+ factories across Greece." That's it. That's the trust trigger.
