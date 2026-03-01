# Efikton Website — Product Requirements Document

**Epic:** ROCKET-237
**Status:** In Progress (Creative Development Phase)
**Created:** 2026-02-28
**Last Updated:** 2026-03-01

---

## 1. Overview

Build the Efikton website — a marketing site for a manufacturing operating system. The site should convey:

> **"From Chaos to Control."**

### Source Materials
- **Figmamake scaffold:** React + Vite + Tailwind (from `AlexRFD/Efiktonfigmamake`)
- **Rebrand research:** `/home/node/.openclaw/workspace/laboratory/efikton-rebrand/` (6 deliverables + synthesis)
- **Key reference:** `05-AZOTH-SYNTHESIS.md` — the canonical positioning doc

### What's Built (as of 2026-03-01)
- Full single-page marketing site with all sections
- Route-based palette A/B testing system (5 palettes at /1/ through /5/)
- Case study on separate subpage (`/:paletteId/case-study`)
- Scroll-driven CHAOS→CONTROL transformation arc
- Animated pipeline flow, phase timeline, counting stats
- International copy (Europe, Middle East & Africa, Global)
- Enterprise tone copy refresh

### Live Preview
- **URL:** https://efikton-preview.surge.sh
- **Palette routes:** /1/ (Copper Navy default), /2/ (Bronze Charcoal), /3/ (Aegean Slate), /4/ (Steel Amber), /5/ (Marble Verde)
- **Case study:** /1/case-study

---

## 2. Brand Identity

### Name Treatment
- **Logo/Media:** eφikton (with Greek phi φ) — distinctive, ownable
- **Copy/Text:** Efikton — readable, typeable
- **Greek contexts:** εφικτόν — "achievable" (brand heritage, NOT geographic limitation)

### Positioning
- **Primary tagline:** "From Chaos to Control."
- **Tone:** Enterprise, confident, professional. NOT startup-punchy.
- **Geography:** International. Serviced factories in Greece, Italy, Poland, Egypt, Saudi Arabia, and Africa.
- **No em dashes** in any visible copy.

### Color Palette (Primary — Copper Navy)

| Color | Hex | CSS Variable | Usage |
|-------|-----|-------------|-------|
| Deep Navy | `#0A1628` | `--ef-navy` | Primary backgrounds |
| Charcoal | `#1A1F2E` | `--ef-charcoal` | Elevated surfaces |
| **Copper** | `#C17F3E` | `--ef-copper` | Key accent, CTAs, highlights |
| Copper Light | `#D4A574` | `--ef-copper-light` | Hover states |
| Copper Dark | `#A06830` | `--ef-copper-dark` | Pressed states |
| Text Primary | `#E8E4DF` | `--ef-text-primary` | Text on dark |
| Text Secondary | `#B8B3AD` | `--ef-text-secondary` | Muted text |
| Surface | `#F5F2ED` | `--ef-surface` | Light sections |
| Surface Alt | `#EDEAE5` | `--ef-surface-alt` | Alternating cream |

**IMPORTANT:** All colors MUST use CSS custom properties (`var(--ef-*)`) — never hardcode hex values. The palette A/B testing system overrides these vars per route.

### Alternative Palettes (for A/B testing)
| # | Name | Accent | Route |
|---|------|--------|-------|
| 1 | Copper Navy (default) | `#C17F3E` | `/1/` |
| 2 | Bronze Charcoal | `#B87333` | `/2/` |
| 3 | Aegean Slate | `#2E7D9A` | `/3/` |
| 4 | Steel Amber | `#D9A441` | `/4/` |
| 5 | Marble Verde | `#4A7C5B` | `/5/` |

---

## 3. Architecture

### Tech Stack
- React + Vite + Tailwind v4
- React Router DOM (palette routing)
- No CMS — static build deployed to Surge

### Key Files
- `src/palettes.ts` — Palette definitions
- `src/PaletteProvider.tsx` — Route-based CSS var override
- `src/components/PaletteSwitcher.tsx` — Floating palette selector UI
- `src/pages/CaseStudyPage.tsx` — Case study subpage
- `src/styles/globals.css` — Design tokens
- `docs/DESIGN-SYSTEM.md` — Full design system spec

### Routing
- `/:paletteId/*` — All pages wrapped in PaletteProvider
- `/` — Redirects to `/1/`
- `/:paletteId/case-study` — Case study subpage

### Build & Deploy
- `npm run build` — Vite build + copies 200.html for SPA routing
- `npx surge ./build efikton-preview.surge.sh` — Deploy

---

## 4. Content Sections

### Hero
- **Headline:** "From Chaos to **Control.**" (Control in copper)
- **Subhead:** "The manufacturing operating system for predictable output, protected margin, and fewer problems."
- **Body:** Efikton manages Materials, Time, Money, and Knowledge as one disciplined system.
- **Social proof:** Giorgos K. quote (97% OTIF)
- **CTAs:** Book a Demo, See Results
- **Stats bar:** 5× profit, 90% fewer problems, OTIF

### Four Pillars (Solutions)
- Materials, Time, Money, Knowledge
- CHAOS→METHOD→CONTROL→RESULTS scroll-driven transformation arc
- Quality callout at bottom

### Features (System of Record)
- Pipeline flow animation (order-to-cash)
- Animated strikethrough (what you can stop using)
- Phase timeline (implementation phases)

### ERP Replacement
- Four pain points (consultant dependency, workarounds, process mismatch, maintenance cost)
- "Your Data, Your Control" vendor continuity section
- Side-by-side comparison table (Legacy ERP vs Efikton)

### Case Study (subpage)
- Solar collector manufacturer, Larissa
- Detailed metrics and implementation story

### Testimonials / Proof Points
- Large proof numbers (40+ implementations, etc.)
- Owner quotes
- Εφικτόν Greek anchor

### About
- Team profiles, method origin
- International footprint stats

### CTA
- Contact form (Formspree)
- Regions: Europe, Middle East & Africa, Global

### Footer
- Minimal, brand wordmark

---

## 5. CI Development Rules

When spawning CI loop agents:
1. **Only work on palette 1** (primary Copper Navy). Do NOT modify palette files.
2. **Never hardcode hex colors.** Always use `var(--ef-*)`.
3. **No em dashes** in visible copy.
4. **Build must pass** before deploying.
5. **Deploy to surge** after every change: `npx surge ./build efikton-preview.surge.sh`
6. **Verify in browser** — check for runtime errors in console.
7. **Section padding:** 128px top/bottom (py-32) on all sections.
8. **Enterprise tone** — confident professional, not punchy startup.

---

## 6. Outstanding Tasks

### Completed ✅
- [x] Full site build with all sections
- [x] Palette A/B testing system (5 palettes, route-based)
- [x] Case study subpage
- [x] Hardcoded colors → CSS vars
- [x] International copy (removed Greece-only positioning)
- [x] Enterprise tone copy refresh
- [x] Em dash removal
- [x] Hero copy: "From Chaos to Control."
- [x] Section margins restored (128px)
- [x] Nav/hero overlap fix on mobile
- [x] Consistent list icons
- [x] Runtime crash fixes (useRef, arcProgress)

### In Progress 🔄
- [ ] Continue visual polish (animations, micro-interactions)
- [ ] Mobile responsive refinement
- [ ] Section transition flow improvement
- [ ] Hover/focus state consistency

### Backlog 📋
- [ ] SEO optimization (meta tags are in place, need review)
- [ ] Performance audit (bundle size, lazy loading)
- [ ] Accessibility audit (WCAG AA)
- [ ] Contact form backend integration
- [ ] Analytics integration
- [ ] Custom domain setup
- [ ] Additional case studies
