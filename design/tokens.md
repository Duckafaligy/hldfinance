# HLD Finance design tokens (round 2)

Source: Paper file "hldfinance.ca". Boards: Theme UI, Logo, Motion, SaaS Assets.
Board PNGs: C:\Users\brend\OneDrive\Videos\Media\Testing\HLD Finance\ (Theme UI.png, Logo.png, Motion.png, SaaS Assets.png)
Assets: hld-design\assets\ (hld-mark.svg, hld-mark-glyph.svg, hld-app-icon.svg, hld-app-icon-1024.png, hld-lockup-horizontal@4x.png, hld-lockup-stacked@4x.png, hld-social-share-1200x630.png, hld-social-avatar-400.png, icons\icon-*.svg ×16)

Mode: light, plus "Night" dark sections. On Night, cards stay white and float on soft shadows.

## Logo (final: Bridge H + drawn HLD)
**Files** (assets folder):
| File | What it is |
|---|---|
| hld-mark.svg | Indigo tile with a white coin H, 64 grid |
| hld-mark-glyph.svg | The coin H alone, `currentColor`, viewBox 0 0 90 100 |
| hld-wordmark.svg | Drawn "HLD", `currentColor`, viewBox 0 0 258 100. Recolour with CSS `color` |
| hld-app-icon.svg / hld-app-icon-1024.png | App icon on the Hold gradient |
| hld-lockup-horizontal.svg / @4x.png | Horizontal lockup |
| hld-lockup-stacked.svg / @4x.png | Stacked lockup |
| hld-social-share-1200x630.png | Social share image |
| hld-social-avatar-400.png | Social avatar |

**Construction** (cap height = 100 units):
- The H: two stems, 28 wide, 100 tall, with round ends (radius 14), 34 apart, so the H is 90 wide.
- The coin: radius 20 (1.43× the stem), at the centre (45, 50).
- The cut: radius 25, concentric with the coin. It is cut into the inner edge of each stem, from y 31.67 to 68.33, leaving a 5-unit ring of clear space round the coin. It is real geometry (no background-coloured circle), so the logo works on any background and in one colour.
- L and D: drawn with the same 28 stroke, round caps and joins.
  - L: 60 wide.
  - D: 76 wide.
  - Gaps: H→L 16, L→D 14.
- Mark tile: 64 grid, corner 18 (28%), with the H at 38/64 of the tile height, centred. The favicon (16/32) uses corner 16 (25%).
- App icon: rx 14.3 (22.4%). Fill `linear-gradient(135deg, #6A5BFF → #3424D6)` with a top light `rgba(255,255,255,.22) → 0` by half height.

**Colour:**
- The coin is always the same colour as the stems: white on Indigo, Ink on light, white on dark. Mint or any accent coin is not used.
- Approved colourways:
  - light: Indigo tile + Ink wordmark;
  - Ink or Aurora: Indigo tile + white wordmark;
  - Indigo: white tile with an Indigo H + white wordmark;
  - wordmark alone in Ink, Indigo or white.

**Lockups:**
- Horizontal: tile = 1.5× the wordmark cap height, gap = 0.36× cap height, centred vertically.
- Stacked: tile = 2.2× cap height, gap 0.5× cap height, centred.

**Clear space:** half the tile height on every side (for the wordmark alone, half its cap height).

**Minimum sizes:**
- tile 16 px;
- wordmark 10 px cap height (≈26 px wide);
- horizontal lockup 72 px wide;
- stacked lockup 40 px wide.

**Usage:**
- **Nav:** horizontal lockup, cap 14–20 px.
- **Footer:** wordmark alone.
- **Favicon:** the tile.
- **Social avatar:** the H without a tile, on Indigo mesh, about 44% of the circle.
- **App icon:** the gradient tile.

**Don'ts:**
- Don't stretch it, outline it, colour the coin, or set "HLD" in a font (the H must be the drawn coin H).
- No animated bounce: the reveal settles (see Motion: logo reveal, 1200 ms, settle ease).

## Colour
### Primaries
| Token | Hex | Job |
|---|---|---|
| --color-ink | #0E1016 | Text, secondary-button border and hover, active tab, scrolled nav |
| --color-paper | #FFFFFF | Page ground, card fill |
| --color-indigo | #4B3BF5 | Brand, primary button, links, focus, success/confirm |
| --color-indigo-hover | #3A2BD9 | Primary hover |
| --color-indigo-pressed | #2D20B5 | Primary pressed, success text |
| --color-indigo-tint | #EEECFF | Ghost hover, success field, progress track |
| --color-indigo-tint-2 | #DDD9FF | Ghost pressed, input focus halo |
| --color-indigo-light | #6A5BFF / #5B4BFF | Gradient start (app icon, Pro card) |
| --color-indigo-deep | #3424D6 | Gradient end |
| --color-indigo-on-dark | #A99FFF / #CFC8FF | Italic accent words on Night / Indigo |

### Accents (one job each)
| Token | Hex | Tint | Job |
|---|---|---|---|
| --color-gain | #0A8A4A | #E3F5EA | Money up. Always with ▲ and + |
| --color-loss | #D93A3F | #FDE8E8 | Money down and errors. Always with ▼ and − (U+2212) |
| --color-coach | #1F8FFF | #E4F1FF | The coach |
| --color-league | #F2601F | #FEEBE1 | Leagues, ranks, streaks, your row (text on tint #C2410C; gradient #FF8A4C to #F2601F) |
| --color-journal | #B03FD1 | #F6E6FB | Journal (tag text #8A2BA6) |

No yellow anywhere.

### Neutrals
- Mist #F5F5F8
- Line #E3E4EA
- Field border #CFD1DA
- Placeholder / disabled #8B8E9C
- Slate #5B5F6E (secondary text)
- Night #151826
- Night card #1F2334
- Night raised #262A3A
- Ink pressed #2A2D3A
- Muted on Night #B4B7C5

### Gradients and glass
- Hero mesh (light): `radial-gradient(circle at 82% 18%, #CBC3FF 0%, rgba(203,195,255,0) 42%), radial-gradient(circle at 96% 92%, #CDE5FF 0%, rgba(205,229,255,0) 40%), radial-gradient(circle at 55% 110%, #E9E5FF 0%, rgba(233,229,255,0) 45%), #FFFFFF`
- Indigo mesh (social, Pro): `radial-gradient(circle at 85% 15%, #8E80FF 0%, transparent 45%), radial-gradient(circle at 100% 100%, #2F8FFF 0%, transparent 40%), radial-gradient(circle at 0% 100%, #2A1FA8 0%, transparent 50%), #3B2BE0`
- Night mesh: `radial-gradient(circle at 70% 20%, rgba(91,75,255,.55) 0%, transparent 45%), radial-gradient(circle at 20% 90%, rgba(31,143,255,.35) 0%, transparent 45%), #151826`
- Hero grid: 1 px lines in rgba(75,59,245,0.06) every 56 px. They stay straight; only a soft glow follows the cursor.
- Glass surface: background rgba(255,255,255,0.58), backdrop-filter blur(24px), border 1px rgba(255,255,255,0.85), radius 28, shadow `0 1px 2px rgba(52,36,214,.08), 0 24px 60px rgba(52,36,214,.18)`.
- Use glass only on hero surfaces (nav at rest, hero product card).

## Type (Google Fonts)
- **Urbanist** 700–800 + italic: display, headings, wordmark.
- **Figtree** 400–700 + italic: body, UI, labels, buttons.
- **Manrope** 600–800: every number (money, %, ranks, dates in tables). Always `font-feature-settings: "tnum"`, right-aligned.
- Emphasis is a true italic (Urbanist Italic). Never script or mono.

| Style | Font | Size / line-height | Weight | Tracking |
|---|---|---|---|---|
| Display XL | Urbanist | 96/96 (site hero 84/84) | 800 | −0.035 / −0.04em |
| Display | Urbanist | 64/68 | 800 | −0.035em |
| H1 / section | Urbanist | 44/48 | 800 | −0.025em |
| H2 | Urbanist | 28/34 | 700 | −0.015em |
| H3 / card title | Urbanist | 20–24/26–30 | 700–800 | −0.01em |
| Body L | Figtree | 18–19/28 | 400 | 0 |
| Body | Figtree | 16/24 | 400 | 0 |
| Label | Figtree | 14–15/20 | 500–600 | 0 |
| Caption | Figtree | 13/18 | 500 | 0 |
| Button | Figtree | 16/20 (nav 15) | 600–700 | 0 |
| Money XL | Manrope tnum | 56/60 card, 44/48 glass, 26 phone | 800 | −0.03em |
| Money row | Manrope tnum | 15–16/20–24 | 700–800 | 0 |
| Chip | Manrope tnum | 13–14/16–20 | 800 | 0 |

## Spacing
- 4 px base: 4, 8, 12, 16, 24, 32, 48, 64, 96.
- Section padding 72–96 desktop / 64 tablet / 48 phone. Side gutter 96 / 40 / 20.
- Card padding: 36 (pricing), 32, 28, 24.

## Radii
| Token | Value | Use |
|---|---|---|
| --radius-chip | 8px | Small tags |
| --radius-input | 14px | Inputs, textarea |
| --radius-row | 16px | List rows, inner panels |
| --radius-tile | 18–20px | Icon tiles (56 px → 18), toasts, motion frames |
| --radius-card | 24–28px | Cards (accent cards 24, product cards 28) |
| --radius-panel | 32px | Pricing cards, hero showcase |
| --radius-phone | 44px | Phone mockup bezel (screen 37) |
| --radius-pill | 999px | Buttons, nav, chips, waitlist field, tabs |

## Shadows (soft, layered; no hard offsets, no grey glow halos)
| Token | Value | Use |
|---|---|---|
| --shadow-card | 0 1px 2px rgba(14,16,22,.06), 0 8px 24px rgba(14,16,22,.08) | Cards on light |
| --shadow-hover | 0 2px 4px rgba(14,16,22,.08), 0 18px 40px rgba(14,16,22,.14) | Card hover (+2 px lift) |
| --shadow-float | 0 12px 32px rgba(14,16,22,.16), 0 0 0 1px rgba(14,16,22,.08) | Nav, menus, toast |
| --shadow-on-night | 0 1px 2px rgba(0,0,0,.20), 0 16px 40px rgba(0,0,0,.28) | White cards on Night |
| --shadow-brand | 0 2px 4px rgba(52,36,214,.2), 0 24px 60px rgba(52,36,214,.35) | Pro card, app icon |
| --shadow-device | 0 2px 4px rgba(14,16,22,.12), 0 24px 48px rgba(14,16,22,.22) | Phone mockups |

## Motion tokens
| Token | Value |
|---|---|
| --ease-settle | cubic-bezier(0.16, 1, 0.3, 1). Entering and settling; no overshoot |
| --ease-move | cubic-bezier(0.65, 0, 0.35, 1). State changes, position swaps, nav shrink |
| --ease-exit | cubic-bezier(0.4, 0, 1, 1). Leaving |
| --dur-press | 120ms |
| --dur-quick | 240ms (chips, toasts, card lift, button widen) |
| --dur-base | 400ms (cards, sheets, nav shrink, rank swap) |
| --dur-text | 700ms (text rise, 24 px inside a mask) |
| --dur-count | 900ms (number count-up) |
| --dur-reveal | 1200ms (logo reveal) |
| --stagger | 60ms between lines and list items |
| --rise | 24px (text), 12px (wordmark), 2px (card hover) |

### Moments (see the Motion board)
1. **Logo reveal (1200 ms, settle):**
   - The bars grow from the baseline: left 0–450 ms; right overlapping, 200–1000 ms.
   - At about 450 ms the bars are equal, so the mark reads as a pause.
   - The tile fades in at 94% → 100%. The word rises 12 px from 800 ms.
   - No bounce.
2. **Hero:** each line rises 24 px in a 700 ms mask, 60 ms stagger. Sub-copy and CTA follow at 600 ms. The glass card settles by 1000 ms. No zoom.
3. **Nav:** after 24 px of scroll, 400 ms on the move ease:
   - width 80% → 64%, height 64 → 56, white → Ink;
   - links fade out over the first 150 ms.
   - It reverses only at scrollY = 0.
4. **Waitlist submit:**
   - Press: 120 ms, Indigo-pressed, scale 0.98.
   - The button widens across the pill: 240 ms, move ease.
   - The pill turns Indigo-tint and the tick draws once: 280 ms.
   - The message rises: 360 ms, settle ease.
   - The pill never changes size. No spinner loop.
5. **Count-up:** 900 ms, settle ease, from the start value. Tabular digits; runs once when the card enters view.
6. **Gain/loss chip:** 240 ms cross-fade of the background, colour, arrow and sign together, on the move ease.
7. **Card hover:** lifts 2 px in 240 ms with the deeper shadow. Magnetic button (desktop only):
   - follows the cursor within 12 px, up to 8 px of pull, on the settle ease;
   - eases home on leave with no spring.
8. **Rank change:** only the two swapping rows move, 400 ms on the move ease. The rank digit rolls up. Your row keeps the League tint.
9. **Coach sheet:**
   - The backdrop fades to Ink 25%.
   - The sheet rises 24 px in 400 ms (settle). The question rises in 700 ms, starting at 120 ms.
   - Answer chips stagger 60 ms.
   - **Buy stays disabled until 600 ms.**
- **prefers-reduced-motion:** everything becomes a 120 ms opacity fade. No count-up, no magnet, no rises.

## Components
### Buttons
- All: pill, height 48 (nav 44, small 40), Figtree 16/20 600–700.
- Primary (padding 0 22): Indigo → hover #3A2BD9 → pressed #2D20B5. Focus ring `0 0 0 3px #FFF, 0 0 0 5px #4B3BF5`. Disabled: #E3E4EA background, #8B8E9C text.
- Secondary: white, 2px Ink border → hover Ink fill with white text → pressed #2A2D3A.
- Ghost (padding 0 18): Indigo text → hover #EEECFF → pressed #DDD9FF. Focus is a 2px Indigo ring.

### Inputs
- Height 52, radius 14, padding 0 16, 1px #CFD1DA. Figtree 16/24; placeholder #8B8E9C.
- Focus: border #4B3BF5 + `0 0 0 3px #DDD9FF`. The ring wraps the whole rounded box.
- Error: border #D93A3F + `0 0 0 3px #FDE8E8`, with a "✕" message in Figtree 13/18 500 #D93A3F.

### Waitlist field
- Pill: height 60, 2px Ink border, padding 0 6 0 22. Inner button: 44 tall, padding 0 20.
- Success: #EEECFF background, 2px #4B3BF5 border, Indigo tick, Figtree 16/700 text in #2D20B5. Same size as before.

### Island nav
- At rest: 80% wide, height 60–64, glass or white, `--shadow-float`, padding 0 8 0 20. Lockup at 22. Links: Figtree 15 (active 600 Ink, others 500 Slate), gap 28.
- Scrolled: 64% wide, height 56, Ink. The menu button is 44 round in #262A3A.

### Cards
White, radius 28, padding 24–32, `--shadow-card` (or `--shadow-on-night` on Night). Hover = `--shadow-hover` + 2 px lift.

### Portfolio card
- Label: Figtree 15 600 Slate. Value: Manrope 800 56/60 tnum.
- Chip: height 32, padding 0 12, pill, tint background, Manrope 800 14.
- Sparkline: 3 px stroke in the gain/loss colour, area fill at 8%. Dashed start-value line: #CFD1DA 4/6.
- Range tabs: track #F5F5F8 with padding 4; active tab Ink with white text.

### Leaderboard row
- Height 60 (phone 40), radius 16, gap 12.
- Rank slot 28 px; avatar 36 (phone 24); change slot 96 px, right-aligned.
- Your row: #FEEBE1 background, 1.5 px #F2601F border.

### Coach card / sheet
- Radius 28 (sheet 30). Avatar 40 (phone 28) in #1F8FFF.
- Question: Urbanist 800, with the second sentence italic in #1F8FFF.
- Answer chips: height 40 (phone 24), 1px #CFD1DA; selected = #1F8FFF background.
- Buttons: Primary "Save plan and buy" + Ghost "Wait a day".

### Journal entry
- Card radius 28 (phone 18). Left bar 3–4 px in #B03FD1.
- "Why I bought:" in italic. Follow-up line "Still on plan?" in Indigo, with a gain/loss figure.

### Toast
White, radius 20, padding 14 14 14 16, `--shadow-float`. 32 px Indigo tick circle. Action text in Indigo.

### Icon set
- 24 grid, stroke 2, round caps and joins, no fill.
- Tiles: 96 (radius 28) on the showcase; 56 (radius 18, icon 26) as accent tiles in the job colour.
- 16 icons: Portfolio, Trade, Coach, League, Journal, Practice TFSA, Watchlist, Search, Alerts, Settings, Learn, Hold timer, Gain, Loss, Wallet, Profile.

### Pricing (draft)
- Free $0 CAD.
- Pro $11.99 CAD / month, labelled "Planned".
- Cards: radius 32, padding 36. The Pro card uses the gradient #5B4BFF → #3424D6 and `--shadow-brand`.

### Badges
- Store badges are our own design: Ink, height 60, radius 16. Text: "Coming soon to iPhone / Android" and "Join the waitlist at hldfinance.ca". No Apple or Google logos until the apps are live.
- Feature pills: height 40, pill, tint background with the job colour: Free, Fake money real skills, No ads, TSX + US stocks, Free leagues, Made for Canada.

### Phone mockup
236×500, Ink bezel 7 px, radius 44/37, `--shadow-device`. Status bar 30. Tab bar 52 with 18 px icons; the active tab is Indigo.


## Gradients (round 3)
Values come from get_computed_styles on the "Gradients" board. Paper interpolates in oklab (`in oklab`); browsers that support CSS Color 4 can keep that, and for older ones, drop `in oklab`. Hex alpha: 8C=55%, 99=60%, 73=45%, 52=32%, 4D=30%, 40=25%, 38=22%.
No yellow stops, no grain or noise, no animated gradients or pulsing glows.

### Brand gradients (one job each)
| Token | CSS | Job |
|---|---|---|
| --grad-hold | linear-gradient(in oklab 150deg, #6A5BFF 0%, #4B3BF5 45%, #3424D6 100%) | Brand surfaces: app icon, Pro card fill, splash (never buttons) |
| --grad-tide | linear-gradient(in oklab 120deg, #4B3BF5 0%, #3B6BFF 50%, #1F8FFF 100%) | The one gradient-text word, featured accents |
| --grad-ember | linear-gradient(in oklab 135deg, #FF8A4C 0%, #F2601F 100%) | Your league rank card only |
| --grad-orchid | linear-gradient(in oklab 140deg, #C65BE6 0%, #7C5CFF 100%) | Journal streak / reflection cards only |

### Backgrounds
- **--bg-dawn** (light hero): `background-color:#FFFFFF; background-image: radial-gradient(ellipse 60% 70% at 82% 18% in oklab, #CBC3FF 0%, #CBC3FF00 100%), radial-gradient(ellipse 50% 60% at 96% 92% in oklab, #CDE5FF 0%, #CDE5FF00 100%), radial-gradient(ellipse 60% 60% at 50% 115% in oklab, #E9E5FF 0%, #E9E5FF00 100%)`
- **--bg-aurora** (dark / Night sections; now used on the Theme UI dark section): `background-color:#151826; background-image: radial-gradient(ellipse 55% 70% at 75% 15% in oklab, #6A5BFF8C 0%, #6A5BFF00 100%), radial-gradient(ellipse 45% 60% at 15% 95% in oklab, #1F8FFF52 0%, #1F8FFF00 100%), radial-gradient(ellipse 40% 50% at 95% 90% in oklab, #C65BE638 0%, #C65BE600 100%)`
- **--bg-indigo-mesh** (brand panels, social, Pro hero): `background-color:#3B2BE0; background-image: radial-gradient(ellipse 50% 60% at 85% 15% in oklab, #8E80FF 0%, #8E80FF00 100%), radial-gradient(ellipse 45% 55% at 100% 100% in oklab, #2F8FFF 0%, #2F8FFF00 100%), radial-gradient(ellipse 55% 60% at 0% 100% in oklab, #2A1FA8 0%, #2A1FA800 100%)`
- **Grid overlay** (hero only, straight lines): `background-image: linear-gradient(rgba(75,59,245,.06) 1px, transparent 1px), linear-gradient(90deg, rgba(75,59,245,.06) 1px, transparent 1px); background-size: 48px 48px` (56px on desktop).

### Glows (behind, never on top; static)
- **--glow-halo** (light): an element sized about 1.3× the card, `border-radius:999px; background-image: radial-gradient(ellipse 50% 50% at 50% 50% in oklab, #4B3BF573 0%, #4B3BF500 100%); filter: blur(48px)`. Place it behind the card, offset about 40% down.
- **--glow-halo-night** (on Night, behind phones): `radial-gradient(ellipse 50% 50% at 50% 50% in oklab, #6A5BFF99 0%, #6A5BFF00 100%); filter: blur(48px)`.

### Gradient stroke (featured card, one per page)
- **--grad-edge**: `linear-gradient(in oklab 135deg, #8E80FF 0%, #4B3BF5 40%, #1F8FFF 100%)`.
- Build it as a wrapper with `padding:2px; border-radius:30px` (card radius + 2) and the card inside on #FFFFFF with radius 28. Pair it with `box-shadow: 0 24px 60px rgba(52,36,214,.18)`.
- Alternatively, use `border:2px solid transparent; background: linear-gradient(#fff,#fff) padding-box, var(--grad-edge) border-box`.

### Buttons: solid only
Buttons never use gradients: rest #4B3BF5, hover #3A2BD9, pressed #2D20B5 (see Components > Buttons). Gradients are only for backgrounds, glows, the featured-card Edge stroke, chart fills, the app icon and the one gradient-text word.

### Chart area fills
- **--fill-gain**: SVG `<linearGradient x1=0 y1=0 x2=0 y2=1>` with stops `rgba(10,138,74,0.24)` at 0 and `rgba(10,138,74,0)` at 1. In CSS: `linear-gradient(180deg, rgba(10,138,74,.24) 0%, rgba(10,138,74,0) 100%)`.
- **--fill-loss**: the same with `rgba(217,58,63,0.22)` → `rgba(217,58,63,0)`.
- The line is a 3px stroke in #0A8A4A / #D93A3F with round caps. Note: use rgba stop-colors; Paper (and some renderers) handle `stop-opacity` poorly.

### App icon gradient
`linearGradient 135deg: #6A5BFF 0% → #3424D6 100%`, plus a top-light overlay `linear-gradient(180deg, rgba(255,255,255,.22) 0%, rgba(255,255,255,0) 50%)`, with corner radius 22.4%.

### Gradient text rule
- **Allowed:** one italic word in a headline of 40px or more, using --grad-tide: `background-image: var(--grad-tide); -webkit-background-clip: text; background-clip: text; color: transparent`.
- **Never:** numbers, prices, percentages, body text, buttons, nav, the logo, gain/loss.
