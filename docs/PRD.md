# Efikton Website — Product Requirements Document

**Epic:** ROCKET-237
**Status:** In Progress
**Created:** 2026-02-28

---

## 1. Overview

Build the Efikton website — a marketing site for a manufacturing operating system. The site should convey:

> **"Efikton turns manufacturing from firefighting into predictable control."**

### Source Materials
- **Figmamake scaffold:** React + Vite + Tailwind (from `AlexRFD/Efiktonfigmamake`)
- **Rebrand research:** `/home/node/.openclaw/workspace/laboratory/efikton-rebrand/` (6 deliverables + synthesis)
- **Key reference:** `05-AZOTH-SYNTHESIS.md` — the canonical positioning doc

### What Exists Now
The Figmamake export is a generic "ManufactureSoft" template with placeholder content. Every section needs to be rewritten with Efikton's actual brand, copy, and visual identity.

---

## 2. Brand Identity

### Name Treatment
- **Logo/Media:** eφikton (with Greek phi φ) — distinctive, ownable
- **Copy/Text:** Efikton — readable, typeable
- **Greek contexts:** εφικτόν — "achievable"

### Color Palette

| Color | Hex | CSS Variable | Usage |
|-------|-----|-------------|-------|
| Deep Navy | `#002B5C` | `--color-navy` | Primary backgrounds, headings |
| Forge Gray | `#4A4A4A` | `--color-gray` | Body text, secondary elements |
| **Copper** | `#B87333` | `--color-copper` | **Key accent**, CTAs, phi symbol, highlights |
| Precision Blue | `#0066CC` | `--color-blue` | Links, tech elements, interactive |
| Safety Orange | `#FF6600` | `--color-orange` | Alerts, critical actions only |
| Off-White | `#F8F6F3` | `--color-offwhite` | Warm background sections |

**Replace all `blue-600` Tailwind defaults with the Efikton palette.**

### Typography
- **Headings:** Bold, uppercase or title case, Deep Navy
- **Body:** Forge Gray, clean sans-serif
- **Accents:** Copper for highlights, metrics, phi symbol

### Logo
- eφikton wordmark with copper phi accent
- Logo files in `/laboratory/efikton-rebrand/logo-concept-*.png`

---

## 3. Content — Section by Section

### Navigation
- Logo: eφikton (left)
- Links: Solutions, The Method, Results, About, Contact
- CTA: "Book a Demo" (copper accent button)

### Hero Section

**Headline (Option A — Outcome-first, PREFERRED):**
> **Deliver on time. Eliminate problems. Protect margin.**

**Subheadline:**
> The manufacturing operating system that turns chaos into control.

**Supporting text:**
> Efikton is the complete manufacturing operating system — from order to cash, from supplier to shipment. One method. One system. Proven results.

**CTAs:**
- Primary: "See the Results" or "Book a Demo"
- Secondary: "Watch the Method"

**Hero Stats (above the fold):**
| Metric | Value |
|--------|-------|
| Profit Increase | **5x** in 2 years |
| Problems Reduced | **90%** fewer |
| On-Time Delivery | **OTIF** within 1 year |

**Hero Image:** Modern factory floor with control panels, OR abstract "chaos → order" visual. Use manufacturing imagery, NOT stock office photos.

### Solutions Section → "The Efikton Method" (Four Pillars)

Replace generic "solutions" grid with the four pillars:

| Pillar | Icon | Headline | Description |
|--------|------|----------|-------------|
| **Materials** | 📦 | Know What You Have | Full traceability — from raw material lot to finished product. No surprises in inventory. |
| **Time** | ⏱️ | Run Plan vs Actual | Every shift, every line. Remove bottlenecks systematically. Hit delivery dates. |
| **Money** | 💰 | True Cost Per Product | Know your margin before you quote. Stop leaking profit. |
| **Knowledge** | 🧠 | Improvements That Stick | The factory doesn't reset when people change. Institutional memory, continuous improvement. |

**Narrative arc visual:** `CHAOS → METHOD → CONTROL → RESULTS`

### Features Section → "Complete System of Record"

**Headline:** One Place for Everything

**Visual:** Order-to-Cash flow diagram:
```
Orders → Purchasing → Inventory → Production → Quality → Costing → Billing → Delivery
```

**What you can stop using:**
- Spreadsheets for planning
- Shadow costing sheets
- Standalone traceability tools
- Disconnected quality systems
- Manual production reporting
- Multiple systems that don't talk

### Testimonials → "Proof Points / Results"

Replace fake testimonials with real proof metrics:

| Metric | Result | Timeframe |
|--------|--------|-----------|
| **Profit** | 5x increase | 2 years |
| **Problems** | 90% reduction | Ongoing |
| **OTIF** | Streamlined delivery | Within 1 year |

Add case study cards (can be anonymized for now):
- "How a Greek auto parts manufacturer hit 5x profit in 24 months"
- "Reducing production chaos by 90% — an Efikton implementation story"

### CTA Section

**Headline:** Stop firefighting. Start running the plant.

**Subtext:** See how Efikton turns chaos into control — in your factory.

**CTAs:**
- "Book a Demo" (primary, copper)
- "Talk to an Expert" (secondary, outlined)

### Footer
- eφikton logo
- Quick links: Solutions, Method, Results, About, Contact, Privacy
- Contact info
- Social links
- Copyright: © 2026 Efikton. All rights reserved.
- Market regions: Greece & EU • Middle East • Egypt

---

## 4. Implementation Sections (New Pages / Sections)

### Implementation Methodology

**Headline:** We implement without stopping production

| Phase | Focus | Measurable Win |
|-------|-------|----------------|
| Foundation | Product data, inventory, purchasing, costing | Single source of truth |
| Planning | Orders, scheduling, capacity | Reliable dates |
| Execution | Real-time monitoring, production tracking | Less firefighting |
| Quality | QC, traceability, continuous improvement | Fewer defects |
| Control | Financials, forecasting, early warnings | Margin protection |

### Services (Outcome-Framed)

- **Manufacturing Management:** Predictable delivery, fewer fire drills
- **Quality Management:** Quality becomes stable, not a daily fight
- **The Efikton Platform:** One source of truth, no patchwork
- **Extended:** Early warnings, financial control, traceability, knowledge management

---

## 5. Technical Requirements

### Stack (from Figmamake scaffold)
- **Framework:** React 18 + TypeScript
- **Build:** Vite
- **Styling:** Tailwind CSS + class-variance-authority
- **Components:** Radix UI primitives + shadcn/ui
- **Icons:** Lucide React
- **Charts:** Recharts (for metrics visualization)

### Performance Targets
- Lighthouse score > 90 (all categories)
- First Contentful Paint < 1.5s
- Total bundle < 200KB gzipped
- All images optimized (WebP, lazy loading)

### SEO Requirements
- Page title: "Efikton — Manufacturing Operating System | From Chaos to Control"
- Meta description with key proof points
- OpenGraph + Twitter card meta
- Structured data (Organization, Product)
- Greek language meta for `.gr` variant

### Responsive
- Mobile-first design
- Breakpoints: 640px (sm), 768px (md), 1024px (lg), 1280px (xl)
- Touch-friendly CTAs

---

## 6. Sub-Tasks

| Ticket | What | Priority |
|--------|------|----------|
| ROCKET-238 | Brand identity & design system | P1 — do first |
| ROCKET-239 | Content — apply rebrand copy | P1 |
| ROCKET-240 | Hero, Navigation, Footer | P1 |
| ROCKET-241 | Solutions → Four Pillars + modules | P2 |
| ROCKET-242 | Testimonials → Proof points | P2 |
| ROCKET-243 | CTA, contact form, demo booking | P3 |
| ROCKET-244 | SEO, meta, OG images, perf audit | P3 |

### CI Loop Order
1. **Forge pass 1:** Apply design system (colors, typography) + rewrite Hero/Nav/Footer
2. **Salt review 1:** Brand consistency, copy quality, accessibility
3. **Forge pass 2:** Solutions, Features, Testimonials sections
4. **Salt review 2:** Full-page review, mobile responsiveness
5. **Forge pass 3:** SEO, meta, performance, contact form
6. **Salt review 3:** Final audit

---

## 7. Success Criteria

- [ ] All "ManufactureSoft" references replaced with Efikton branding
- [ ] Copper (#B87333) accent visible throughout
- [ ] Hero section with outcome-first messaging + 3 proof stats
- [ ] Four Pillars section clearly presented
- [ ] "Chaos → Control" narrative arc visible
- [ ] No stock placeholder testimonials — real proof points
- [ ] Mobile responsive, Lighthouse > 90
- [ ] Build succeeds (`npm run build` clean)
- [ ] SEO meta tags complete

---

## 8. Reference Files

| File | Location |
|------|----------|
| Brand Synthesis (V2) | `laboratory/efikton-rebrand/05-AZOTH-SYNTHESIS.md` |
| Research Findings | `laboratory/efikton-rebrand/01-research-findings.md` |
| Creative Direction | `laboratory/efikton-rebrand/02-creative-direction.md` |
| Messaging & Copy | `laboratory/efikton-rebrand/03-messaging-copy.md` |
| Logo Concepts | `laboratory/efikton-rebrand/logo-concept-*.png` |
| Website Hero Concepts | `laboratory/efikton-rebrand/website-hero-concept-*.png` |
| Color Palette SVG | `laboratory/efikton-rebrand/visual-03-color-palette.svg` |
| Typography SVG | `laboratory/efikton-rebrand/visual-04-typography-specimen.svg` |
