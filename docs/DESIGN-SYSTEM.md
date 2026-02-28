# Efikton Design System — v2 φ-Inspired Redesign

## Philosophy

**Three words:** Precision. Substance. Clarity.

This is a manufacturing operating system for Greek factory owners. The aesthetic communicates: control, reliability, heritage. Every pixel earns its place. Empty space IS the design.

Reference aesthetics: Apple product pages (air and drama), Stripe (typographic hierarchy), Linear (dark elegance). NOT Salesforce, HubSpot, or generic SaaS.

---

## Color Palette

| Token | Hex | Use |
|-------|-----|-----|
| `--ef-navy` | `#0A1628` | Primary background (dark sections, hero, system-of-record, CTA) |
| `--ef-charcoal` | `#1A1F2E` | Elevated surfaces, cards on dark |
| `--ef-copper` | `#C17F3E` | Accent — copper, not orange. Brushed metal warmth. All CTAs, highlights, key data |
| `--ef-copper-light` | `#D4A574` | Copper hover state |
| `--ef-copper-dark` | `#A06830` | Copper pressed/active |
| `--ef-copper-border` | `rgba(193,127,62,0.2)` | Subtle copper-tinted borders |
| `--ef-text-primary` | `#E8E4DF` | Warm off-white — text on dark backgrounds |
| `--ef-text-secondary` | `#8B8680` | Muted warm gray — secondary text, captions |
| `--ef-surface` | `#F5F2ED` | Warm cream — light sections (pillars, proof points) |
| `--ef-surface-alt` | `#EDEAE5` | Slightly deeper cream for contrast within light sections |

### Color Rules

- **Copper = manufacturing heritage.** It should feel like BRUSHED METAL, not orange paint. Never use pure #FF6600 or #FF8C00 orange.
- **Navy = depth.** The near-black (#0A1628) creates drama without being harsh.
- **Cream = warmth.** Light sections use warm cream (#F5F2ED), never pure white. Pure white would feel clinical.
- Alternate between dark (navy) and light (cream) sections for rhythm.

---

## Typography

**One typeface: Inter.** No display font switching. Inter at the right weight and size IS premium.

| Use | Weight | Size | Letter-spacing |
|-----|--------|------|----------------|
| Hero headline | 800 | clamp(2.5rem, 6.5vw, 5rem) | -0.03em |
| Section headline | 800 | clamp(2rem, 4.5vw, 3.5rem) | -0.03em |
| Pillar headline | 700 | clamp(1.125rem, 2vw, 1.5rem) | -0.02em |
| Body | 400 | 15-17px | 0 |
| Eyebrow label | 600 | 11px | 0.12em, uppercase |
| Stat numbers | 700-800 | clamp(1.75rem, 4vw, 2.75rem) | -0.03em |
| Proof numbers | 800 | clamp(4rem, 8vw, 7rem) | -0.04em |
| Navigation | 500 | 14px | 0.01em |
| CTA button | 600 | 14-15px | 0.01em |

---

## Layout

- **Max content width:** `1200px` — tighter than 1280/1440 for premium feel
- **Horizontal padding:** `24px` mobile, `40px` desktop (lg:px-10)
- **Section vertical padding:** `128px` top/bottom (py-32 equivalent)
- **Grid:** 12-column, 24px gutter
- **Alignment:** Left-aligned by default. Center only for specific emphasis moments.
- **Negative space:** Use it aggressively. If in doubt, remove elements.

---

## Section Layout Decisions

### Hero
- Full viewport height (`100svh`)
- Dark navy background, no gradients, subtle noise texture
- Giant φ symbol as ambient background element (low opacity, right side)
- Left-aligned headline — "Eliminate" highlighted in copper (the ONE word)
- Stats bar pinned to bottom, copper numbers, copper-tinted dividers
- Two CTAs: solid copper "Book a Demo" + text link "See Results →"

### Four Pillars (Solutions)
- **Light cream background** (#F5F2ED)
- NOT a card grid — editorial row layout with 3-column grid: number | title | description
- Numbered 01-04 in copper
- Hover: subtle copper tint background
- CHAOS→METHOD→CONTROL→RESULTS arc as horizontal timeline with animated copper progress line

### System of Record (Features)
- **Dark navy** (#0A1628) — creates visual contrast after the cream pillars section
- Order-to-cash pipeline as connected horizontal flow with copper highlighted endpoints
- "What you can stop using" with strikethrough text (copper underline for the strikethrough)
- Implementation phases as numbered list rows

### Proof Points (Testimonials)
- **Light cream** — alternates back from dark
- Numbers at 7rem — HUGE. They breathe in space. No cards, no borders.
- Pull quotes with thin 2px copper left border
- Greek anchor: "Εφικτόν." in copper, large

### CTA
- **Dark navy** — final dark section
- Clean layout, generous whitespace
- Single dominant CTA (solid copper)
- Secondary (outlined, low opacity)

### Footer
- Deepest dark (#080E1A) — even darker than navy
- Minimal: wordmark, 2 link columns, social icons
- Copper accent on φ in wordmark

---

## Component Patterns

### Buttons

**Primary (solid copper):**
```css
background: #C17F3E;
color: #ffffff;
padding: 14px 28px;
font-size: 14px;
font-weight: 600;
min-height: 48px;
/* hover: background: #D4A574 */
```

**Secondary (ghost):**
```css
border: 1px solid rgba(232, 228, 223, 0.2);
color: #E8E4DF;
padding: 14px 28px;
opacity: 0.75;
/* hover: opacity: 1, border-color stronger */
```

No border-radius — sharp edges signal precision engineering.

### Eyebrow Labels
```css
font-size: 11px;
font-weight: 600;
letter-spacing: 0.12em;
text-transform: uppercase;
color: #C17F3E;
```
Always preceded by a 28px × 1px copper rule.

### Section Dividers
```css
border-top: 1px solid rgba(10, 22, 40, 0.1); /* on light */
border-top: 1px solid rgba(193, 127, 62, 0.12); /* on dark */
```

### Pull Quotes
```css
border-left: 2px solid #C17F3E;
padding-left: 24px;
font-style: italic;
color: #0A1628; /* on light */
```

---

## Animation

- **Entry animations:** `opacity 0 → 1`, `translateY(24px) → 0`, duration 0.7s, cubic-bezier(0.22, 1, 0.36, 1)
- **Stagger:** 80ms per child
- **Hover transitions:** 150ms ease — fast and responsive
- **CHAOS→RESULTS progress line:** scaleX 0→1, 1.2s with 0.3s delay on viewport entry
- **φ ambient symbol:** 2s opacity fade on mount

No decorative animations that distract. Motion serves meaning.

---

## The φ (phi) Identity

The Greek letter phi (φ) appears in three ways:
1. **Wordmark:** `eφikton` — the φ replaces 'f', colored copper in the nav/footer
2. **Hero ambient:** Giant faint φ (~320px) as background element, copper at 4% opacity
3. **Concept:** The golden ratio φ informs the proportional system and generous whitespace

---

## Accessibility

- All interactive elements have `focus:outline-none` with `focus-visible:ring` fallbacks
- Color contrast: copper (#C17F3E) on navy (#0A1628) — sufficient at large sizes
- Stats use `role="figure"` with aria-labels for screen readers
- `aria-hidden` on all decorative elements (φ symbol, dividers, icons)
- `prefers-reduced-motion` respected via CSS (no JS needed with CSS transitions)
- Touch targets: minimum 48px height on all interactive elements

---

## Don'ts

- ❌ No gradients in hero or section backgrounds
- ❌ No geometric pattern overlays
- ❌ No pure orange (#FF6600) — copper only
- ❌ No pure white backgrounds — cream (#F5F2ED) on light sections
- ❌ No border-radius on primary UI elements (sharp = precision)
- ❌ No card grids with equal columns for features — use editorial layouts
- ❌ No centered hero text — left-aligned for premium feel
- ❌ No Space Grotesk or other display fonts — Inter at weight 800 is enough
