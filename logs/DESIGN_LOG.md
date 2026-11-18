# Design log

App redesign source of truth: Paper file **"hldfinanc redoo"** (fileId `01M7ND942KK1P3EG7FGKWPZ962`, formerly "Bright olive"). Its docs (`PRODUCT.md`, `DESIGN.md`, `design/decisions.md`) live on branch `design/bright-olive`.
Landing page: the Theme UI lives in Paper file **"hldfinance.ca"**, page **"Theme UI"** (boards: 00 Contents · Foundations 01–08 · Motion 08 · Components 09 · Patterns 10–12 · Logo 13 · Gradients 14). It is owned by Brendan's `phase0-landing` work, and its token values are mirrored in `design/tokens.md` on that branch.

## Latest summary
**2026-11-18 09:58 ET** · written by Aariz-Claude

**Recent changes** (all in Paper "hldfinanc redoo", fileId `01M7ND942KK1P3EG7FGKWPZ962`; commits on `design/bright-olive`, local only)
- Muted pink accent exploration done (`be5941e`, `3279249`). New page "Accent · Muted pink" with 8 Original/Pink-accent pairs: Welcome, Coach · Home, Check-in 1 of 3, Decision, Tracker · Home, Practice · Home, League · Leaderboard, Logo 20B. Theme board "Accent · Muted pink" with 7 tokens and 18 measured pairs. Tokens: pink `#D0A4B5`, deep pink `#8D4963` (text on cream, 6.08:1), subtle `#F3E7EC`, Brown 900 for text on pink (8.42:1). Review fixes applied: deep-pink tip edge, the missing pair row, range-control nesting (original Practice · Home fixed too: track padding 2), Tracker rings reverted to brown. DESIGN.md documents it as an exploration, not adopted.
- UI/UX Pro Max pass part 2 done (`4eff513`).
- Logo: Aariz chose concept 20 "Leaning h", drop position B. Hand-tuned 16/32/60px versions are on "20 · Small sizes".
- New screens: Tracker (10 artboards), You (5), Practice (21).
- Theme follow-ups: icon size tokens, ring and inverse text-area components, page order (`58c279d`).
- Three parallel reviews found 21 fixes, all applied. Verify pass (`17a31cc`), then a final verification found 4 misses, fixed in `efd587b`. Key fixes: budget rings show money left, Subscriptions shows monthly and yearly columns, the journal lists all 7 trades, the AAPL screen shows the FX fee and portfolio share, the check-in step counter is in the top bar only, primary buttons are 48.
- Brendan Lau's Paper comment c-tii8f0 ("standardise box padding") is resolved: screens 40 top / 16 sides, boxes 16, verified on all 54 phone screens. No reply was posted (Paper has no reply tool).
- The landing page Theme UI (Paper "hldfinance.ca") is unchanged and stays with Brendan's `phase0-landing` work.

**Active work**
- Aariz-Claude · Claimed (09:58 ET): (1) restore point. New page "Restore point · Pre-pink · 2026-11-18" duplicating every primary screen and Theme board; `design/restore/pre-pink-tokens.json` and local tag `restore/pre-pink-2026-11-18` on `design/bright-olive` (tag not pushed without Aariz's approval). The restore page is not touched once verified.
- Aariz-Claude · Claimed (09:58 ET): (2) adopt muted pink `#D0A4B5` as the active accent on Theme, Start, Coach, Tracker, Practice, You, Logo concepts and DESIGN.md. Cream and brown stay the base. Not touched: "hldfinance.ca", `phase0-landing`, app code.
- Aariz-Claude · Done (09:51 ET): muted pink accent exploration, page "Accent · Muted pink" and Theme board "Accent · Muted pink". Aariz chose to adopt it (claim (2) above). Not touched: "hldfinance.ca", `phase0-landing`, app code.

**Blockers**
- None.

**Next steps** (for Aariz)
- Choose the logo lockup: "Hold" in the serif, or "hld" in the heavy sans.
- Decide whether to push `design/bright-olive` to GitHub.
- Decide whether chart gridlines in the below-zero band can stay nearly invisible (about 1.1:1), with the axis labels carrying the scale.

---

## History

### 2026-11-17
All in Paper file "hldfinanc redoo" (fileId `01M7ND942KK1P3EG7FGKWPZ962`; Aariz renamed it from "Bright olive" during the day). This is a new app UI redesign from the project brief PDF, covering the Phase 1 pillars Coach, Tracker and Practice, with the Coach check-in as the main feature. Main palette Cream 75 `#FCF8F2` / Brown 900 `#1E120C`; accent and state colours are provisional. Docs are on `design/bright-olive`.

- **Theme page:** 8+ boards (Principles, Colour roles, Typography, Spacing & radii, Components & states, Icons, Motion and more), with tokens and components. All text pairs pass WCAG AA. Theme review passed (`821387b`, `15d3504`).
- **Start page:** 7 screens. **Coach page:** 14 screens plus a Motion board. Batch 1 review passed with 8 fixes (`f72271a`).
- **Revision 1** (`e6a1bef`), Theme, Start and Coach pages:
  - Type: Instrument Serif Italic used selectively for expression; Archivo 800 at −0.04em for headlines; readable UI text.
  - Shape: radii 0/2/4/6. Tight nests follow Outer = Inner + Padding, and padded cards cap at 6.
  - Standard paddings: screens 40 top / 16 sides, boxes 16. These came from a Paper comment by Brendan Lau, which is still open.
- **UI/UX Pro Max pass part 1** (`0d4f26a`), paused by Aariz: 44px touch targets and 8px gaps, safe area 34, a 4/8 rhythm, step counters and Back/Close, and the official Apple/Google sign-in marks.
- **Logo concepts page:** 20 concepts, with the 5 strongest called out. Aariz picked concept 20, "Leaning h" (an italic serif h app icon). It was refined with two drop positions, A (recommended) and B. Still open: Aariz's choice of A or B, and a lockup.
- **Carried forward to 2026-11-18:** pass part 2, screens batch 2 (Tracker and You, nothing drawn yet), batch 3 (Practice), and a 16px logo version.

### 2026-11-16
Reconstructed from commit messages on `phase0-landing`. The designer's own notes aren't recorded here, so the "why" is missing where the commits don't give it.

- **Theme UI tokens** (Paper "Theme UI", Foundations 01–08): first token set wired into the site (`9369c78`, `5b7412a`).
- **Theme v2** (Foundations): replaced the first type and shadow set with Urbanist / Figtree / Manrope, soft shadows, meshes, and motion tokens (`92cc83e`).
- **Gradients** (board 14): brand gradients, Dawn / Aurora / Indigo mesh, halos, edge card, chart fills. Paper can't store gradients as tokens, so stop colours are tokens and the full CSS lives in `design/tokens.md` (`4762b23`).
- **Logo** (board 13): new HLD logo, then the final Bridge H tile with a drawn HLD wordmark, and Night tile icons (`3b7fd13`, `0604e78`, `3f0ff25`).
- **Final Theme UI tokens**: ramps, semantic light/dark, state tokens (gain ▲ + / loss ▼ −), and a prefers-color-scheme mapping. In dark mode, elevation comes from surface colour plus a hairline, with no shadows (`ca2a337`).
- **Landing hero redo**: trust row, phone mockup in the centre with floating cards on halos, parallax, and a stacked phone layout on mobile (`313b499`).
- **Pricing**: Free / Pro (planned) cards, billing toggle, comparison table (`5f64212`).
