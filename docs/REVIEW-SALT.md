# ROCKET-237 — Salt QA Review (Efikton Website)

**Reviewer:** Salt  
**Date:** 2026-02-28 22:20 (Europe/Athens)  
**Repo:** `/home/node/.openclaw/workspace/projects/efikton-website`  
**References reviewed:**
- `docs/PRD.md`
- `/home/node/.openclaw/workspace/laboratory/efikton-rebrand/05-AZOTH-SYNTHESIS.md`

---

## Executive Verdict

**Rating: GOOD (close to EXCELLENT, but one blocking messaging/implementation bug and a few polish fixes remain).**

The site clearly carries the Efikton positioning and is materially aligned with the approved synthesis narrative. Visual direction is elegant/minimal and not generic template trash. Copper is used intentionally. Build passes.

The main issue: **Proof metric cards currently animate to `0×` and `0%` in the rendered state captured during QA**, which undermines trust and directly conflicts with approved proof messaging.

---

## Criteria-by-Criteria Assessment

### 1) Positioning “Manufacturing Operating System” clear (NOT ERP / generic software)?
**Status: PASS**

Evidence observed:
- Hero eyebrow: “Manufacturing Operating System”
- Hero/body and footer consistently frame Efikton as a manufacturing OS
- “Methodology, not just software” framing is present in the method section
- No ERP framing language observed

**Notes:** Positioning is crisp and repeats at key conversion points without overstuffing.

---

### 2) Four Pillars presented as interconnected method?
**Status: PASS**

Evidence observed:
- Section title: “The Efikton Method — Four Pillars. One System.”
- Explicit statement that software enforces a methodology
- Narrative arc included: `CHAOS → METHOD → CONTROL → RESULTS`
- Pillars (Materials/Time/Money/Knowledge) described as a system, not isolated features
- Supporting quality statement: “When you control Materials, Time, and Money — Quality follows.”

**Notes:** This is one of the strongest parts of the page.

---

### 3) Visual style elegant + minimalist (φ-inspired, clean, not busy SaaS)?
**Status: PASS (with minor polish opportunities)**

What works:
- Page reads premium and restrained, with good whitespace rhythm
- Typography hierarchy is clear and modern
- Sections are well-sequenced and scan fast
- Not overloaded with noisy enterprise dashboard motifs

Polish opportunities:
1. Ensure motion of counters/metrics feels premium and deterministic (see blocking issue below)
2. On small screens, “← scroll to see full pipeline →” copy reads slightly utility-like; consider subtler treatment to keep premium tone

---

### 4) Copper `#B87333` accent used intentionally throughout?
**Status: PASS**

Observed usage is coherent:
- CTA emphasis and key accents
- Brand moments (eφikton/Greek cueing)
- Highlight treatment appears deliberate, not sprayed randomly

**Notes:** Accent restraint is good. Keep it focused on CTA, key metrics, and identity marks.

---

### 5) No ManufactureSoft/generic placeholder content remaining?
**Status: PASS**

- No “ManufactureSoft” strings observed in rendered page content.
- Sections are rewritten with Efikton-specific messaging and proof structure.

---

### 6) Stripe/Linear quality vs WordPress template feel?
**Status: PASS (GOOD tier, almost EXCELLENT)**

- Overall composition and spacing feel intentionally designed
- Messaging architecture feels strategic, not templated filler
- Conversion flow (Hero → Method → System → Proof → CTA) is coherent

Why not EXCELLENT yet:
- Animated proof counters showing `0×` / `0%` during QA is a quality trust-break and feels “unfinished.”

---

### 7) `npm run build` passes?
**Status: PASS**

Command run in repo root:
- `npm run build`

Result:
- Build completed successfully (`exit code 0`)
- Vite production build generated without errors

---

### 8) Copy matches approved messaging from `05-AZOTH-SYNTHESIS.md`?
**Status: MOSTLY PASS (high alignment)**

Strong alignment observed:
- Core hero line: “Deliver on time. Eliminate problems. Protect margin.”
- Core positioning: “turns manufacturing from firefighting into predictable control”
- Four-pillar methodology language
- Proof points and timeline framing
- “Stop firefighting. Start running the plant.” CTA language
- Greek root/achievable concept appears

Minor copy consistency recommendations:
1. Keep proof metric labels/tenses perfectly stable across page (e.g., “90% fewer problems” vs “90% reduction in problems”) to avoid subtle inconsistency.
2. Keep OTIF phrasing consistent between “OTIF within 1 year” and “On-Time In-Full” elaborations; both are acceptable, but consistency reads sharper.

---

## Blocking / High-Priority Fixes

### P1 — Fix proof counter rendering/animation bug (trust-critical)
**Issue:** In the “Proven Results” cards, values were observed rendering as `0×` and `0%` during QA snapshot state.  
**Why it matters:** These are headline proof claims; showing zeros even transiently harms credibility and conversion confidence.  
**Required fix:**
- Ensure final stable values always render as `5×`, `90%`, and `OTIF`
- If using intersection/animation logic, guarantee deterministic end-state and no visible “stuck at zero” behavior
- Add guard for reduced-motion and hydration timing edge cases

---

## Medium-Priority Improvements

### P2 — Tighten microcopy consistency for proof section
- Normalize proof language across hero stats and results cards to exact approved phrasing set.
- Choose one canonical style and apply globally:
  - `5x profit in 2 years`
  - `90% fewer problems`
  - `OTIF within 1 year`

### P2 — Refine mobile pipeline helper text style
- Current “← scroll to see full pipeline →” utility tone can be softened visually/textually to preserve premium feel.

---

## Final Recommendation

**Approve after P1 counter fix.**  
Once proof counters are reliable and copy is slightly normalized, this can be called **EXCELLENT** and shipped.
