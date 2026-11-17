# Design log

Paper source of truth: file **"hldfinance.ca"**, page **"Theme UI"** (boards: 00 Contents · Foundations 01–08 · Motion 08 · Components 09 · Patterns 10–12 · Logo 13 · Gradients 14). Token values are mirrored in `design/tokens.md` on `phase0-landing`.

## Latest summary
**2026-11-17 18:33 ET** · written by Aariz-Claude

**Recent changes**
- The Theme UI design system is in Paper: 200 file tokens (colour, type, spacing, radius, breakpoints, containers), Theme v2 fonts (Urbanist / Figtree / Manrope), gradients, final logo, and a 17-icon set. All of it is applied to the landing page in PR #1.

**Active work**
| Owner | Work | Where | Status |
|---|---|---|---|
| Aariz-Claude | New HLD Finance app UI redesign from the project brief PDF, covering Phase 1 Coach, Tracker and Practice (Coach check-in is the main feature). Main palette Cream 75 `#FCF8F2` / Brown 900 `#1E120C`; accent and state colours provisional. | Paper file "hldfinanc redoo" (renamed from "Bright olive", fileId `01M7ND942KK1P3EG7FGKWPZ962`) only. Done: Theme page; batch 1 pages Start (7 artboards) and Coach (14 artboards + Motion board), review passed with 8 fixes. Branch `design/bright-olive` (head `f72271a`, local only) with `PRODUCT.md`, `DESIGN.md`, `design/decisions.md`. Not touching Paper "hldfinance.ca", `phase0-landing`, or app code. | Batch 2 (Tracker and You) paused, nothing drawn. Next: batch 2, then batch 3 (Practice) |
| Aariz-Claude | Typography and shape revision: selective high-contrast italic serif, heavy tight sans headlines, readable UI text, updated type tokens; angular 2/4/6 px radii (Outer = Inner + Padding, padded cards max 6 px outer, square or 2 px inside). Plus the 8 batch-1 review fixes and queued Theme cleanup. | "hldfinanc redoo" pages Theme, Start and Coach; docs on `design/bright-olive`. | In progress |
| Aariz-Claude (logo subagent) | About 20 logo concepts. | "hldfinanc redoo", new page "Logo concepts" only; no screen pages. | In progress (parallel) |

**Blockers**
- None.

**Next steps**
- Log future Paper changes here with the board name.

---

## History

### 2026-11-16
Reconstructed from commit messages on `phase0-landing`. The designer's own notes aren't recorded here, so the "why" is missing where the commits don't give it.

- **Theme UI tokens** (Paper "Theme UI", Foundations 01–08): first token set wired into the site (`9369c78`, `5b7412a`).
- **Theme v2** (Foundations): replaced the first type and shadow set with Urbanist / Figtree / Manrope, soft shadows, meshes, and motion tokens (`92cc83e`).
- **Gradients** (board 14): brand gradients, Dawn / Aurora / Indigo mesh, halos, edge card, chart fills. Paper can't store gradients as tokens, so stop colours are tokens and the full CSS lives in `design/tokens.md` (`4762b23`).
- **Logo** (board 13): new HLD logo, then the final Bridge H tile with a drawn HLD wordmark, and Night tile icons (`3b7fd13`, `0604e78`, `3f0ff25`).
- **Final Theme UI tokens**: ramps, semantic light/dark, state tokens (gain ▲ + / loss ▼ −), and a prefers-color-scheme mapping. In dark mode, elevation comes from surface colour plus a hairline, with no shadows (`ca2a337`).
- **Landing hero redo**: trust row, phone mockup in the centre with floating cards on halos, parallax, and a stacked phone layout on mobile (`313b499`).
- **Pricing**: Free / Pro (planned) cards, billing toggle, comparison table (`5f64212`).
