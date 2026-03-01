ROCKET-237 — QA & Code Review (Anvil)
Date: 2026-03-01 02:35 Europe/Athens
Status: FIXES NEEDED

Summary
- Build: PASS (vite build succeeded, no warnings in build output)
- Overall: new ERP section is strong structurally, but fails code-style consistency and has a few content/alignment issues.

Blocking / Fix Requests

1) Excessive inline style usage ("inline style soup") in new component
- Issue: The new section is implemented with heavy inline styles across nearly every element instead of reusable Tailwind utility classes and/or design tokens.
- Why this matters: Violates project style consistency, makes responsive tuning harder, and drifts from tokenized design system maintenance.
- Files/lines:
  - src/components/ERPReplacement.tsx:57
  - src/components/ERPReplacement.tsx:62
  - src/components/ERPReplacement.tsx:68
  - src/components/ERPReplacement.tsx:71
  - src/components/ERPReplacement.tsx:73
  - src/components/ERPReplacement.tsx:87
  - src/components/ERPReplacement.tsx:101
  - src/components/ERPReplacement.tsx:118
  - src/components/ERPReplacement.tsx:121
  - src/components/ERPReplacement.tsx:135
  - src/components/ERPReplacement.tsx:140
  - src/components/ERPReplacement.tsx:150
  - src/components/ERPReplacement.tsx:162
  - src/components/ERPReplacement.tsx:174
  - src/components/ERPReplacement.tsx:193
  - src/components/ERPReplacement.tsx:208
  - src/components/ERPReplacement.tsx:218
  - src/components/ERPReplacement.tsx:225
  - src/components/ERPReplacement.tsx:236
  - src/components/ERPReplacement.tsx:250
  - src/components/ERPReplacement.tsx:269
  - src/components/ERPReplacement.tsx:276
  - src/components/ERPReplacement.tsx:288
  - src/components/ERPReplacement.tsx:299
  - src/components/ERPReplacement.tsx:314
  - src/components/ERPReplacement.tsx:319
  - src/components/ERPReplacement.tsx:326
  - src/components/ERPReplacement.tsx:339
  - src/components/ERPReplacement.tsx:345
  - src/components/ERPReplacement.tsx:352
  - src/components/ERPReplacement.tsx:362
  - src/components/ERPReplacement.tsx:364
  - src/components/ERPReplacement.tsx:367
  - src/components/ERPReplacement.tsx:379
- Requested fix:
  - Extract repeated visual patterns into semantic classes in stylesheet or Tailwind class composition.
  - Prefer Tailwind utilities for spacing/typography/layout; reserve inline style for truly dynamic values only.
  - Use CSS custom properties/tokens where applicable (navy/copper/surface/text colors).

2) Design-system token mismatch / hardcoded non-token colors
- Issue: Several colors are hardcoded in rgba/hex outside explicit token references, causing drift risk.
- Files/lines:
  - src/components/ERPReplacement.tsx:153 (rgba copper variant)
  - src/components/ERPReplacement.tsx:209 (custom border rgba)
  - src/components/ERPReplacement.tsx:228-231 (custom text/border rgba)
  - src/components/ERPReplacement.tsx:239 (custom muted rgba)
  - src/components/ERPReplacement.tsx:256 (custom copper-border rgba)
  - src/components/ERPReplacement.tsx:270 (custom divider rgba)
  - src/components/ERPReplacement.tsx:292 (custom divider rgba)
  - src/components/ERPReplacement.tsx:304 (custom copper divider rgba)
  - src/components/ERPReplacement.tsx:319 (custom border rgba)
  - src/components/ERPReplacement.tsx:347 (custom divider rgba)
- Requested fix:
  - Map to DESIGN-SYSTEM tokens (or corresponding CSS vars) instead of one-off color values where possible.
  - Keep copper usage within documented token family.

3) Messaging alignment gap with synthesis market focus
- Issue: CTA region options were changed from ['Greece & EU', 'Middle East', 'Egypt'] to ['Greece & EU', 'Egypt'], dropping Middle East.
- Why this matters: 05-AZOTH-SYNTHESIS market focus explicitly includes Middle East.
- File/line:
  - src/components/CTA.tsx:5
- Requested fix:
  - Restore Middle East unless there is an approved strategy change documented elsewhere.

4) Accessibility hardening for comparison table semantics
- Issue: Desktop comparison is visually tabular but implemented with generic divs; screen reader semantics are weaker than necessary.
- File/lines:
  - src/components/ERPReplacement.tsx:205-311
- Requested fix:
  - Either:
    a) use semantic <table><thead><tbody><th scope=...> structure for desktop, OR
    b) add ARIA grid/table roles and proper header associations if table element is intentionally avoided.

Non-blocking observations
- Build output is clean and bundle size remains reasonable.
- Section copy generally aligns with the "chaos → control" narrative and outcome framing.
- Mobile variant exists and appears intentionally structured (stacked cards).

Definition for re-review
- Convert major static inline styles to Tailwind/class-based tokens.
- Re-align region list with messaging source doc (or provide approved rationale).
- Improve table semantics for assistive tech.
