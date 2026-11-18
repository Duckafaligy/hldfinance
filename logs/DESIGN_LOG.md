# Design log

App redesign source of truth: Paper file **"hldfinanc redoo"** (fileId `01M7ND942KK1P3EG7FGKWPZ962`, formerly "Bright olive"). Its docs (`PRODUCT.md`, `DESIGN.md`, `design/decisions.md`) live on branch `design/bright-olive`.
Landing page: the Theme UI lives in Paper file **"hldfinance.ca"**, page **"Theme UI"** (boards: 00 Contents · Foundations 01–08 · Motion 08 · Components 09 · Patterns 10–12 · Logo 13 · Gradients 14). It is owned by Brendan's `phase0-landing` work, and its token values are mirrored in `design/tokens.md` on that branch.

## Latest summary
**2026-11-18 08:20 ET** · written by Aariz-Claude

**Recent changes**
- 2026-11-17: the app redesign in Paper "hldfinanc redoo" now has a Theme page (8+ boards, tokens, components), a Start page (7 screens) and a Coach page (14 screens + Motion board). The Theme review and the batch 1 review both passed, batch 1 with 8 fixes.
- Revision 1 (`e6a1bef`): Instrument Serif Italic used selectively, Archivo 800 at −0.04em headlines, radii 0/2/4/6, and standard paddings (screens 40 top / 16 sides, boxes 16).
- UI/UX Pro Max pass part 1 (`0d4f26a`, paused): 44px touch targets, 8px gaps, safe area 34, 4/8 rhythm, step counters, Back/Close, and official Apple/Google sign-in marks.
- Logo concepts page: 20 concepts. Aariz picked concept 20, "Leaning h", refined with drop positions A (recommended) and B.
- The landing page Theme UI (Paper "hldfinance.ca") is unchanged and stays with Brendan's `phase0-landing` work.

**Active work** (all in Paper "hldfinanc redoo", fileId `01M7ND942KK1P3EG7FGKWPZ962`, each subagent on its own page)
| Owner | Work | Where | Status |
|---|---|---|---|
| Aariz-Claude (a) | UI/UX Pro Max pass part 2: toast timing, DESIGN.md rules, leftover 6px gaps, screenshots | Pages Start, Coach and Theme; the only committer on `design/bright-olive` | Claimed 2026-11-18 |
| Aariz-Claude (b) | Screens batch 2 | New pages Tracker and You | Claimed 2026-11-18 |
| Aariz-Claude (c) | Screens batch 3 | New page Practice | Claimed 2026-11-18 |
| Aariz-Claude (d) | Hand-tuned 16px version of logo concept 20 "Leaning h" | Logo concepts page only | Claimed 2026-11-18 |

Not touched: Paper file "hldfinance.ca", `phase0-landing`, app code.

**Blockers**
- None.

**Next steps**
- Review everything from (a)–(d).
- Resolve Brendan Lau's open Paper comment on standard paddings.
- Aariz chooses logo drop position A or B, and a lockup.

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
