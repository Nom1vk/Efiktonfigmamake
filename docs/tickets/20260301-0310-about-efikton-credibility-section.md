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

## Salt Review

### 1) Feasibility + Conversion Impact
**Feasibility:** High. This is a straightforward landing-page enhancement (new section + attribution/content upgrades + nav/footer links) with no backend risk.

**Will it improve the site?** Yes — materially. The current page persuades on pain/method but underperforms on trust proof. For Greek manufacturing buyers, founder/team credibility is often the final conversion unlock. This ticket addresses the strongest conversion blocker identified in the persona narrative.

### 2) Polished, Testable Acceptance Criteria
- [ ] A new section with `id="about"` is added in page flow **after Results and before final CTA** on desktop and mobile.
- [ ] Section heading is exactly one of: **"About Efikton"** or **"Who We Are"**, with supporting intro copy of **40–90 words**.
- [ ] Section includes a founding story block with:
  - [ ] 2–3 sentences
  - [ ] explicit mention of **Greek manufacturing context**
  - [ ] no generic placeholder text (e.g., lorem ipsum / "we are passionate")
- [ ] Section includes credibility metrics row with at least 3 concrete indicators (e.g., years in manufacturing, implementations, sectors served), each rendered as distinct stat cards/chips.
- [ ] Section includes at least 1 team profile card with:
  - [ ] real full name
  - [ ] role/title
  - [ ] one-line manufacturing background
  - [ ] photo/avatar rendered at all breakpoints without distortion
- [ ] Methodology origin sentence is present and explicitly ties the four-pillar method to field/factory operations experience.
- [ ] Testimonials attribution is upgraded so each visible testimonial includes:
  - [ ] full name (or explicitly anonymized format like "Name withheld — Operations Director, Athens")
  - [ ] company type/industry
  - [ ] size indicator (employees or revenue band)
- [ ] Footer "Company" column includes an "About" anchor link targeting `#about`.
- [ ] Primary navigation includes an "About" item targeting `#about` (desktop + mobile menu if mobile menu exists).
- [ ] No layout regressions at **375px, 768px, 1440px**:
  - [ ] no horizontal overflow
  - [ ] no overlapping text/elements
  - [ ] tap targets >= 44px on mobile for nav links/buttons
- [ ] Build passes with no new errors: `npm run build`.

### 3) Implementation Hints (Practical)

#### Components / Integration
- Create `src/components/About.tsx` with three sub-blocks:
  1. **Story** (headline + 2–3 sentence narrative)
  2. **Credibility stats** (3–4 stat tiles)
  3. **Team card(s)** (1–2 cards initially)
- Add `<About />` in `src/App.tsx` between Results and final CTA section.
- Update anchors:
  - `Navigation.tsx`: add `{ label: 'About', href: '#about' }`
  - `Footer.tsx`: add About under Company links.
- Update `Testimonials.tsx` data model to support richer attribution fields:
  - `name`, `title`, `industry`, `companySize`, `location`, `quote`.

#### Tailwind/UI guidance
- Section container: `py-20 md:py-24`
- Inner layout: `max-w-7xl mx-auto px-6 lg:px-8`
- Grid split (story + team): `grid gap-8 lg:grid-cols-12`
  - Story: `lg:col-span-7`
  - Team panel: `lg:col-span-5`
- Credibility stats grid: `grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8`
- Card styling (consistent with current dark theme):
  - `rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm`
  - `p-5 md:p-6`
- Team avatar: `h-16 w-16 rounded-full object-cover ring-2 ring-white/15`
- Typographic hierarchy:
  - Eyebrow: `text-xs uppercase tracking-[0.2em] text-white/60`
  - H2: `text-3xl md:text-4xl font-semibold text-white`
  - Body: `text-base leading-7 text-white/75`
- Keep density comfortable: minimum 16px vertical rhythm between semantic blocks.

#### Copy suggestions (ready-to-use draft)
- **Heading:** About Efikton
- **Story draft:**
  "Efikton was built alongside Greek manufacturing teams dealing with real floor-level pressure: delayed purchase orders, ad-hoc planning, and firefighting between departments. We translated that lived reality into a practical operating method — not a consulting slide deck. Our mission is simple: help factories move from chaos to control with systems people actually use."
- **Method origin sentence:**
  "Our four-pillar method was shaped in live factory implementations, then standardized so each deployment compounds operational discipline."
- **Team card example:**
  "Dimitris Alexiou — Implementation Lead. 12+ years across production planning and order-to-cash transformation in mid-market plants."

### 4) Ticket Rating
**SHIP IT**

Rationale: Clear conversion hypothesis, high feasibility, low technical risk, and directly aligned to persona trust barrier.

### 5) QA / Regression Pass
- Ran `npm run build` on latest commits: **PASS**
- Result: production build completed successfully (no errors).
