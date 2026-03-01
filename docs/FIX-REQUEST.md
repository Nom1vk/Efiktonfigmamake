ROCKET-237 — Anvil QA/Code Review

Status: FIXES NEEDED

Build
- PASS: `npm run build` completed cleanly (vite build succeeded, no warnings surfaced).

Blocking / Required Fixes

1) Inline style soup regression (violates code quality + maintainability guideline)
- File: `src/components/About.tsx`
- Lines: 35, 41, 48-56, 63-71, 74, 83, 85, 89-95, 100-106, 113-117, 121-126, 131-138, 154-159, 161-165, 170-183, 190-196, 201-208, 213-217, 234, 238, 246-250, 255-261, 267-273, 277
- Issue: New section is heavily inline-styled instead of using Tailwind classes / design tokens, making consistency and future updates difficult.
- Request: Refactor repeated inline style blocks into Tailwind utility classes and/or centralized CSS token classes (same pattern already used in other sections). Keep only truly dynamic values inline.

2) Design token mismatch risk (hardcoded hexes instead of tokenized usage)
- File: `src/components/About.tsx`
- Lines: 35, 48, 51, 64, 74, 91, 102, 114, 122, 135, 155-157, 161-165, 174-175, 181, 204, 215, 238, 247, 251, 257, 270, 277
- File: `src/App.tsx`
- Lines: 66-67, 75-76
- Issue: Colors are hardcoded repeatedly (#1A1F2E, #C17F3E, #E8E4DF, #8B8680 and rgba variants) rather than consistently referencing the design-system token approach (`var(--ef-...)`).
- Request: Replace hardcoded colors with design-system CSS variables/classes from `docs/DESIGN-SYSTEM.md` to guarantee consistency and reduce drift.

3) Accessibility — hover-only interaction logic and non-keyboard parity
- File: `src/components/About.tsx`
- Lines: 160-165
- Issue: Team cards change visual state only via `onMouseEnter/onMouseLeave` DOM style mutation. Keyboard users do not get equivalent focus interaction cue, and direct DOM mutation is brittle.
- Request: Move hover/focus styles to CSS/Tailwind (`hover:` + `focus-within:`) so interaction affordance is available to both mouse and keyboard users.

4) Potential duplicate vertical separators on stats cards (visual consistency)
- File: `src/components/About.tsx`
- Lines: 247 and 251
- Issue: Both `borderRight` (inline) and `sm:border-l` (Tailwind) are applied, which can create double divider lines between columns at `sm+`.
- Request: Use one divider strategy only (prefer a single-side border rule) and verify in responsive views.

5) Mobile spacing/tap comfort verification required after refactor
- File: `src/components/About.tsx`
- Lines: 150-224, 230-283
- Issue: Layout is likely acceptable, but due to heavy custom spacing with inline values, mobile consistency can drift from system rhythm.
- Request: After token/Tailwind refactor, confirm spacing rhythm (>=8px rule where relevant), readable line lengths, and no cramped presentation on 375px width.

Copy / Messaging Check
- PASS overall: New About copy aligns with synthesis narrative (“from chaos to control”, practical factory-floor method, regional credibility).
- Minor note: Keep proof language consistent with canonical claims (5x profit, 90% fewer problems, OTIF in year one) where relevant sections reference outcomes.

Reviewer note
- Build is green and core narrative direction is strong.
- Approval blocked until styling/token/accessibility issues above are corrected.
