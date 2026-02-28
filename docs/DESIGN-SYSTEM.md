# Efikton Design System
**Version:** 1.0  
**Stack:** React + Vite + Tailwind CSS v4  
**Positioning:** Manufacturing Operating System — precision, control, enterprise grade

---

## Philosophy

Efikton is the OS that runs factories. The design language reflects this:

- **Precision over decoration** — sharp angles, not rounded bubbles. Engineers respect geometry.
- **Whitespace as signal** — generous breathing room communicates confidence, not emptiness.
- **Copper as punctuation** — used sparingly so it hits hard when it appears.
- **Typography-first** — large, confident headings. The words carry weight; decoration is minimal.
- **φ (phi) proportions** — golden ratio informs grid spacing (144px = 6 × 24px base), layout divisions, and visual rhythm.

Reference quality bar: **Stripe, Linear, Vercel** — clean, purposeful, premium.

---

## Color Tokens

| Token | Hex | Usage |
|-------|-----|-------|
| `--ef-navy` | `#002B5C` | Primary brand. Headlines, buttons, borders. |
| `--ef-navy-deep` | `#001B3A` | Hero background. Dark sections. |
| `--ef-navy-darkest` | `#001226` | Footer. Deepest dark. |
| `--ef-copper` | `#B87333` | **KEY accent.** Metrics, CTAs, hover states, wordmark φ. Use sparingly. |
| `--ef-copper-dark` | `#9e632c` | Copper hover state. |
| `--ef-gray` | `#4A4A4A` | Body text, descriptions. |
| `--ef-blue` | `#0066CC` | Secondary accent. Links, "read more", phase wins. |
| `--ef-offwhite` | `#F8F6F3` | Warm off-white. Content section backgrounds. Avoids cold clinical white. |

**Rules:**
- Copper appears on: wordmark φ, stat numbers, CTA buttons, accent lines, section eyebrows, metric cards
- Navy is the dominant dark; never use pure black (#000)
- Never use gradients for decoration — only for geometric patterns at very low opacity

---

## Typography

### Fonts
- **Display:** Space Grotesk 600/700/800 — headings, wordmark, large numbers
- **Body:** Inter 400/500/600 — all body text, navigation, labels

### Scale

| Use | Size | Weight | Tracking | Family |
|-----|------|--------|----------|--------|
| Hero H1 | clamp(2.5rem, 6vw, 5rem) | 700 | -0.03em | Space Grotesk |
| Section H2 | clamp(2rem, 4vw, 3rem) | 700 | -0.03em | Space Grotesk |
| Card H3 | 1.125rem | 700 | -0.01em | Space Grotesk |
| Body large | 1rem–1.25rem | 400 | 0 | Inter |
| Body | 0.9375rem | 400 | 0 | Inter |
| Label/Eyebrow | 0.75rem | 600 | 0.15em | Inter |
| Caption | 0.75rem | 400 | 0 | Inter |
| Metric | clamp(3rem, 6vw, 4rem) | 700 | -0.04em | Space Grotesk |
| Nav links | 0.875rem | 500 | 0.02em | Inter |

### Rules
- Line height for headings: 1.05–1.15
- Line height for body: 1.7–1.8
- Never use browser default serif for display text
- Letter-spacing on eyebrow labels: always 0.12–0.15em uppercase

---

## Spacing

**Base unit:** 4px (0.25rem)

| Scale | px | rem |
|-------|----|-----|
| xs | 4 | 0.25 |
| sm | 8 | 0.5 |
| md | 16 | 1 |
| lg | 24 | 1.5 |
| xl | 32 | 2 |
| 2xl | 48 | 3 |
| 3xl | 64 | 4 |
| 4xl | 96 | 6 |

**φ-inspired layout:** 144px grid (6 × 24px) for background patterns. Section padding: 96px (6rem) vertical.

---

## Shape Language

**Sharp. Not rounded.** This is precision engineering.

| Element | Border Radius |
|---------|---------------|
| Buttons | 0 (square) |
| Cards | 0 (square) |
| Pipeline nodes | 0 |
| Inputs | 0 or 2px max |
| Nav | 0 |

The only exception: never add rounded corners just because Tailwind defaults provide them.

---

## Borders & Lines

- **Card borders:** `1px solid rgba(0,43,92,0.10)` on light backgrounds
- **Dark section dividers:** `1px solid rgba(255,255,255,0.08)`
- **Copper accent lines:** 1–3px solid `#B87333` — used as left-border accents, eyebrow decorators
- **Grid lines in hero:** `rgba(184,115,51,0.06)` — barely visible, geometric

---

## Shadows

**Minimal. Depth through layout, not dropshadows.**

The grid lines in backgrounds and divider lines create depth. No floating card shadows. On hover, background color change + border color shift communicates interaction without lifting cards off the page.

---

## Component Specifications

### Navigation

- Fixed, full-width, z-50
- **Default state (scroll = 0):** `background: transparent` — sits over hero, nav text white
- **Scrolled state:** `background: rgba(0,27,58,0.92)` + `backdrop-filter: blur(12px) saturate(1.4)`
- `border-bottom: 1px solid rgba(184,115,51,0.15)` when scrolled
- Wordmark: `e` + `φ` (copper) + `ikton` — Space Grotesk 700, letter-spacing -0.02em
- Nav links: Inter 500, 0.875rem, tracking 0.02em, `rgba(255,255,255,0.65)` → white on hover
- CTA: `background: #B87333`, sharp, hover `#9e632c`, no border-radius
- Mobile: hamburger icon, slide-down panel matching scrolled nav bg

**Transition:** `transition: all 300ms ease` on the nav element for smooth scroll transition

---

### Hero

- `min-height: 100vh`, flex column, `background: #001B3A`
- **Geometric pattern:** CSS `background-image` with 4 overlapping grids — major grid 144px at copper 6% opacity, minor grid 24px at white 2% opacity. NO radial blobs.
- Vertical copper accent line at 8.33% from left (1/12 column)
- Eyebrow: `width: 32px; height: 1px; background: #B87333` line + uppercase label in copper
- H1: `clamp(2.5rem, 6vw, 5rem)`, tracking -0.03em, white, line breaks after each phrase
- CTAs: Copper primary (square), ghost secondary with white border (square)
- **Stats bar:** pinned to bottom of hero section, `border-top: 1px solid rgba(255,255,255,0.08)`, 3-column grid with dividers, no cards — clean data display

---

### Solutions (The Efikton Method)

- Background: `#F8F6F3`
- Section padding: 96px top/bottom
- Header: left-aligned (not centered), max-width 3xl
- Eyebrow: copper line + label pattern
- **Narrative arc:** horizontal strip, full width, bordered top+bottom. 4 equal columns divided by vertical lines. CHAOS→METHOD→CONTROL→RESULTS. CHAOS bg: light navy tint. RESULTS bg: light copper tint.
- **Pillar grid:** `grid-cols-4` on desktop with `gap-px` and gray grid background — creates hairline dividers between cards (Stripe-style)
- Card hover: `background: #fff` (from #F8F6F3) — subtle but clear
- Geometric symbols (◈ ◷ ◎ ◉) as pillar icons — no Lucide icons, no rounded icon containers
- Bottom statement: navy full-width block, no rounding

---

### Features (System of Record)

- Background: `#fff`
- Section padding: 96px top/bottom
- Header: left-aligned
- Eyebrow: blue line + label (blue accent for this section)
- **Pipeline diagram:** dark navy block with `border-left: 3px solid #B87333`, no border-radius. Flow steps are square boxes with CSS arrow connectors (div + border triangle), no chevron icons.
- **What you stop using:** border-top/bottom list rows, not bullet points with icon circles
- **Implementation phases:** matching list row style, hover row highlight with off-white bg
- Phase numbers: faint navy, large, to the left of content

---

### Proof Points (Testimonials)

- Background: `#F8F6F3`
- Section padding: 96px top/bottom
- Header: left-aligned, eyebrow copper
- **Metric cards:** 3-column grid using `gap-px` with gray background (hairline dividers). Sharp corners, no shadows. Each card has copper accent bar at top (32px wide, 2px tall). Metric number: `clamp(3rem, 6vw, 4rem)` copper. Card hover: background → white.
- **Quote block:** dark navy, no rounding. Quotes use `border-left: 2px solid #B87333` (not background colors). Quote grid divided by thin opacity lines.
- Greek tagline: `Εφικτόν.` in copper, centered at bottom of quote block

---

### CTA

- Outer: `background: #fff`, 96px padding
- Inner block: `background: #001B3A`, no border-radius
- `border-left: 3px solid #B87333`
- Subtle grid overlay (same as hero, lower opacity)
- Eyebrow: copper line + label, left-aligned
- H2: large, white, with copper line-break
- Buttons: copper primary + ghost secondary, both square, left-aligned (not centered)
- Market regions: very faint text below buttons

---

### Footer

- Background: `#001226` (deepest navy)
- No rounding anywhere
- `border-top: 1px solid rgba(255,255,255,0.06)`
- Wordmark in white with copper φ
- Column headings: uppercase, very small tracking, `rgba(255,255,255,0.6)`
- Links: `rgba(255,255,255,0.45)` → white on hover
- Social icons: `rgba(255,255,255,0.3)` → copper on hover
- Bottom bar: divider line `rgba(255,255,255,0.06)`, copyright left, socials right

---

## Interaction States

| State | Pattern |
|-------|---------|
| Link hover | Color shift, 150ms ease |
| Card hover | Background color change (no lift), 200ms ease |
| Button hover | Darken by ~15%, 150ms ease |
| Nav scroll | Glass morphism transition, 300ms ease |
| Focus | `ring-2 ring-[#B87333]` (keyboard nav) |

**No transitions involving transform: translateY (no lift effect on cards).** State is communicated through color, not position.

---

## Responsive Breakpoints

| Breakpoint | Width | Notes |
|------------|-------|-------|
| Mobile | < 640px | Single column, 24px horizontal padding |
| Tablet | 640–1024px | 2-column grids |
| Desktop | > 1024px | Full layouts, 32px horizontal padding |
| Wide | > 1280px | Max-width 7xl (80rem), centered |

---

## Dos and Don'ts

### DO
- Use `rounded-none` or no rounding for all containers, buttons, cards
- Use the copper accent line pattern (32px wide, 1px tall) for eyebrows
- Use clamp() for fluid typography scaling
- Align content left when it's the dominant content; center only for isolated stats or taglines
- Use the gap-px grid technique for card grids (hairline dividers)

### DON'T
- `rounded-full` for pill badges — use plain text labels with accent lines
- Gradient backgrounds (linear or radial) for decorative purposes
- Box shadows on cards — use border + background color change
- Multiple font sizes in the same heading
- Center-align body paragraphs
- Use Unsplash or stock photos anywhere

---

*Efikton Design System — Precision engineering for precision manufacturing.*
