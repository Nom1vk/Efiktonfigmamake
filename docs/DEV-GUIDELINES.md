# Efikton Website — Developer Guidelines

**Read this before touching any code. No exceptions.**

---

## 1. CSS Architecture

### Tailwind v4 + Custom Properties

This project uses **Tailwind CSS v4** with PostCSS. The pipeline is:

```
src/index.css → @import "tailwindcss" → PostCSS (@tailwindcss/postcss) → built CSS
```

**Key files:**
- `src/index.css` — Entry point (2 lines: imports Tailwind + globals)
- `src/styles/globals.css` — All custom CSS (tokens, animations, component styles)
- `postcss.config.js` — PostCSS plugin config

### ⚠️ CRITICAL: Tailwind classes work because PostCSS scans source files at build time

If you add a Tailwind class in JSX, it WILL be in the build output. If you write custom CSS, put it in `globals.css`. **Never** create a static CSS dump — the old 2600-line `index.css` was a frozen snapshot that broke everything.

---

## 2. Color System — CSS Custom Properties Only

Every color MUST use `var(--ef-*)` tokens. **Never hardcode hex values.**

### Why?
The palette A/B testing system (`src/PaletteProvider.tsx`) overrides these CSS vars per route. Hardcoded hex = broken on palettes 2-5.

### Available Tokens

| Token | Default (Palette 1) | Usage |
|-------|---------------------|-------|
| `--ef-navy` | `#0A1628` | Primary dark backgrounds |
| `--ef-charcoal` | `#1A1F2E` | Elevated dark surfaces |
| `--ef-copper` | `#C17F3E` | Primary accent, CTAs, highlights |
| `--ef-copper-light` | `#D4A574` | Hover states |
| `--ef-copper-dark` | `#A06830` | Pressed/active states |
| `--ef-copper-border` | `rgba(193,127,62,0.25)` | Subtle borders |
| `--ef-text-primary` | `#E8E4DF` | Text on dark backgrounds |
| `--ef-text-secondary` | `#B8B3AD` | Muted/secondary text |
| `--ef-surface` | `#F5F2ED` | Light section backgrounds |
| `--ef-surface-alt` | `#EDEAE5` | Alternating light sections |

### Usage Examples

```tsx
// ✅ CORRECT
style={{ color: 'var(--ef-copper)' }}
className="text-[var(--ef-copper)]"
background: 'var(--ef-navy)'

// ❌ WRONG — breaks palette switching
style={{ color: '#C17F3E' }}
className="text-[#C17F3E]"
background: '#0A1628'
```

### Verify Before Committing

```bash
# Find hardcoded hex colors in components (should return nothing)
grep -rn '#[0-9A-Fa-f]\{6\}' src/components/ --include='*.tsx' | grep -v '// palette\|// safe\|svg\|filter'
```

---

## 3. Palette A/B Testing

- 5 palettes at routes `/1/` through `/5/`
- Palette 1 = primary (Copper Navy) — **CI loops only modify palette 1 styles**
- `src/palettes.ts` defines overrides per palette
- `src/PaletteProvider.tsx` applies CSS var overrides on `:root`
- **Do NOT modify palette files** unless explicitly asked

---

## 4. Typography

- **Font:** Inter only. No other fonts.
- **Weight 800** is the premium signal — use for headlines, key numbers
- **Weight 600** for subheadings, labels
- **Weight 400** for body text
- Use `clamp()` for responsive sizing:

```css
font-size: clamp(1.75rem, 4vw, 3rem);  /* responsive headline */
```

---

## 5. Spacing

- **Section padding:** 128px top/bottom (`py-32`) on ALL major sections
- **Sharp edges:** No `border-radius` (manufacturing precision aesthetic)
- **Aggressive negative space** — when in doubt, add more whitespace

---

## 6. Copy Rules

- **No em dashes** ( — ) anywhere in visible copy. Use commas, periods, or colons.
- **Enterprise tone** — confident, professional. Not startup-punchy.
- **No staccato** — "Deliver. Ship. Win." style is banned. Write full sentences.
- **International** — Efikton serves Greece, Egypt, Saudi Arabia, Africa, Poland, Italy. Not Greece-only.

---

## 7. Animations & Scroll

### Scroll-Driven Arc (Solutions)
- `useScrollProgress` hook writes CSS custom props directly to DOM (no React re-renders)
- Returns `[ref, arcStage]` — `arcStage` is discrete (0-3)
- Continuous values (`--arc-progress`, `--arc-jitter-intensity`, `--arc-noise-opacity`) are CSS custom props on the container element
- **Do NOT** create a variable called `arcProgress` in component scope — use `--arc-progress` CSS var

### Scroll Reveal
- `useInView` hook for intersection observer triggers
- Add `is-visible` class for CSS-driven transitions

### Reduced Motion
- ALL animations must respect `prefers-reduced-motion: reduce`
- Snap to final state, no transitions

---

## 8. Build & Deploy

```bash
# Build (also creates 200.html for Surge SPA routing)
npm run build

# Deploy
npx surge ./build efikton-preview.surge.sh

# Verify no runtime errors (run after every build)
node -e "
const fs=require('fs');
const js=fs.readFileSync('build/assets/'+fs.readdirSync('build/assets').find(f=>f.endsWith('.js')),'utf8');
const problems=['arcProgress','useScrollProgress'].filter(v=>{
  const re=new RegExp('\\\\b'+v+'\\\\b');
  return re.test(js);
});
if(problems.length) console.log('❌ Found problematic refs:',problems);
else console.log('✅ Build clean');
"
```

### Pre-Commit Checklist

1. ✅ `npm run build` passes
2. ✅ No hardcoded hex colors in components
3. ✅ No em dashes in visible copy
4. ✅ Section padding is 128px (py-32)
5. ✅ All colors use `var(--ef-*)` tokens
6. ✅ Enterprise tone maintained
7. ✅ Deployed and verified on surge

---

## 9. Project Structure

```
src/
├── index.css              ← Tailwind entry point (DO NOT add static CSS here)
├── main.tsx               ← React Router setup
├── App.tsx                ← Section layout + φ dividers
├── palettes.ts            ← Palette definitions (DO NOT modify in CI loops)
├── PaletteProvider.tsx    ← Route-based CSS var overrides
├── styles/
│   └── globals.css        ← All custom CSS lives here
├── components/
│   ├── Hero.tsx
│   ├── Solutions.tsx      ← CHAOS→CONTROL arc
│   ├── Features.tsx       ← Pipeline, strikethrough, phases
│   ├── ERPReplacement.tsx
│   ├── Testimonials.tsx
│   ├── About.tsx
│   ├── CTA.tsx
│   ├── Navigation.tsx
│   ├── Footer.tsx
│   ├── PhiElements.tsx    ← φ dividers (Fibonacci, copper draw, spiral)
│   └── PaletteSwitcher.tsx
├── pages/
│   └── CaseStudyPage.tsx
└── hooks/
    ├── useInView.ts       ← Intersection observer
    └── useScrollProgress.ts ← Scroll-driven arc (CSS custom props)
```

---

## 10. Known Gotchas

1. **Tailwind was not wired up until March 2026.** The original `index.css` was a 2600-line static snapshot. If you ever see a massive static CSS file, something went wrong.

2. **`arcProgress` does not exist as a JS variable.** The continuous scroll value is written as `--arc-progress` CSS custom prop directly on the DOM element. Reference it in CSS only.

3. **Surge caching is aggressive.** After deploy, always test in incognito or hard-refresh. The build hash in filenames should bust cache, but Surge CDN can lag.

4. **`200.html` is required** for SPA routing on Surge. The build script copies `index.html` to `200.html`.

5. **φ dividers use `is-visible` class** driven by `useInView`. Don't override opacity with inline styles — let the CSS class handle it.

---

*Last updated: 2026-03-01. Maintained by the Alchemical Triad.*
