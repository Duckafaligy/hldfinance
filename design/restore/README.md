# Restore point: pre-pink, 2026-11-18

A snapshot of the primary design taken on 2026-11-18, before the muted pink accent was adopted. Do not edit these files or the matching Paper page.

- **Paper:** file "hldfinanc redoo" (fileId `01M7ND942KK1P3EG7FGKWPZ962`), page "Restore point · Pre-pink · 2026-11-18" (last in the page list). It holds copies of all 70 artboards from Theme (9, including the "Accent · Muted pink" board), Start (7), Coach (14), Tracker (10), Practice (21), You (5) and Logo concepts (4). There is one row per source page, labelled on the left, with a "Restore point · README" board at the top left. The "Accent · Muted pink" exploration page is not included.
- **Tokens:** `design/restore/pre-pink-tokens.json` holds all 136 file tokens (name, type, value, description), token hash `93aa7a0a`. The `--color-accent-pink*` tokens already existed then as an unadopted exploration.
- **Git:** annotated tag `restore/pre-pink-2026-11-18` on branch `design/bright-olive`.

## How to revert

1. **Tokens:** restore every token value from `design/restore/pre-pink-tokens.json` with Paper's `set_tokens` (or `create_tokens` for any that are missing). Pink tokens added after the snapshot can be removed or left unused.
2. **Screens:** on each primary page, delete the current artboards and duplicate the matching copies back from the restore page. Node IDs will change.
3. **Docs:** `git checkout restore/pre-pink-2026-11-18 -- DESIGN.md design/decisions.md`, or revert the adoption commits.
4. Leave the restore page in place until the new direction is final.
