# HLD Finance design tokens

**Source of truth:** the Paper file "hldfinance.ca", page **"Theme UI"**.
- Boards, left to right: 00 Contents · Foundations (01–08) · Motion (08) · Components (09) · Patterns (10–12) · Logo (13) · Gradients (14).
- Every token below is registered as a Paper file token with exactly this name and value: 200 tokens (138 color, 3 fontFamily, 5 fontWeight, 12 fontSize, 6 letterSpacing, 11 lineHeight, 9 spacing, 8 radius, 1 opacity, 3 breakpoint, 4 container).
- Board colours and fonts are bound to these tokens, except where text has mixed inline spans or the value lives in gradients, shadows or SVG paint.
- Paper can't store gradients or shadows as tokens. Gradient stop colours are tokens (`--color-gradient-*`); the full CSS is listed below.

## 1. Paper file tokens (exact)
### 1.1 Semantic colours, light and dark
| Light token | Value | Dark token | Value | Use |
|---|---|---|---|---|
| `--color-text-primary` | `#0E1016` | `--color-dark-text-primary` | `#F5F5F8` | Headings, body, numbers |
| `--color-text-secondary` | `#5B5F6E` | `--color-dark-text-secondary` | `#B4B7C5` | Supporting text, labels |
| `--color-text-muted` | `#8B8E9C` | `--color-dark-text-muted` | `#8B8E9C` | Placeholders, disabled text |
| `--color-text-inverse` | `#FFFFFF` | `--color-dark-text-inverse` | `#0E1016` | Text on the opposite surface |
| `--color-text-link` | `#4B3BF5` | `--color-dark-text-link` | `#A99FFF` | Links, ghost buttons |
| `--color-surface-page` | `#FFFFFF` | `--color-dark-surface-page` | `#0E1016` | App and page ground |
| `--color-surface-sunken` | `#F5F5F8` | `--color-dark-surface-sunken` | `#0A0B10` | Sections, inner panels |
| `--color-surface-raised` | `#FFFFFF` | `--color-dark-surface-raised` | `#151826` | Cards (level 1) |
| `--color-surface-overlay` | `#FFFFFF` | `--color-dark-surface-overlay` | `#1F2334` | Menus, sheets, toasts (level 3) |
| `--color-surface-modal` | `#FFFFFF` | `--color-dark-surface-modal` | `#262A3A` | Modals (level 4) |
| `--color-border-subtle` | `#E3E4EA` | `--color-dark-border-subtle` | `#262A3A` | Dividers, row lines |
| `--color-border-strong` | `#CFD1DA` | `--color-dark-border-strong` | `#3A3F55` | Inputs, outline chips |
| `--color-accent-primary` | `#4B3BF5` | `--color-dark-accent-primary` | `#6A5BFF` | Primary actions |
| `--color-accent-primary-hover` | `#3A2BD9` | `--color-dark-accent-primary-hover` | `#7D70FF` | Hover on primary |
| `--color-accent-primary-subtle` | `#EEECFF` | `--color-dark-accent-primary-subtle` | `#24215A` | Selected rows, ghost hover |
| `--color-focus-ring` | `#4B3BF5` | `--color-dark-focus-ring` | `#A99FFF` | 2 px ring + 2 px gap |

In dark mode, elevation comes from surface colour (page #0E1016 → raised #151826 → overlay #1F2334 → modal #262A3A) plus a 1 px hairline. No shadows.

### 1.2 State colours
| Token | Value | Use |
|---|---|---|
| `--color-state-gain-text` | `#087540` | gain: text/icon on light. Always with ▲ + |
| `--color-state-gain-bg` | `#E3F5EA` | gain: chip background on light |
| `--color-dark-state-gain-text` | `#4ED38E` | gain: text/icon on dark |
| `--color-dark-state-gain-bg` | `#0F3324` | gain: chip background on dark |
| `--color-state-loss-text` | `#B92F34` | loss: text/icon on light. Always with ▼ − |
| `--color-state-loss-bg` | `#FDE8E8` | loss: chip background on light |
| `--color-dark-state-loss-text` | `#FF7A7E` | loss: text/icon on dark |
| `--color-dark-state-loss-bg` | `#3A1719` | loss: chip background on dark |
| `--color-state-neutral-text` | `#5B5F6E` | neutral: text/icon on light. Always with – |
| `--color-state-neutral-bg` | `#F5F5F8` | neutral: chip background on light |
| `--color-dark-state-neutral-text` | `#B4B7C5` | neutral: text/icon on dark |
| `--color-dark-state-neutral-bg` | `#1F2334` | neutral: chip background on dark |
| `--color-state-pending-text` | `#4B3BF5` | pending: text/icon on light. Always with hourglass |
| `--color-state-pending-bg` | `#EEECFF` | pending: chip background on light |
| `--color-dark-state-pending-text` | `#A99FFF` | pending: text/icon on dark |
| `--color-dark-state-pending-bg` | `#24215A` | pending: chip background on dark |
| `--color-state-delayed-text` | `#5B5F6E` | delayed: text/icon on light. Always with clock |
| `--color-state-delayed-bg` | `#ECEDF2` | delayed: chip background on light |
| `--color-dark-state-delayed-text` | `#B4B7C5` | delayed: text/icon on dark |
| `--color-dark-state-delayed-bg` | `#262A3A` | delayed: chip background on dark |

Gain and loss **text** uses the 600 step (#087540 / #B92F34) so it passes AA on white and on tints. The 500 step (#0A8A4A / #D93A3F) is for chart lines, fills and icons only.

### 1.3 Brand colours
| Token | Value | Use |
|---|---|---|
| `--color-ink` | `#0E1016` | Primary text, wordmark on light |
| `--color-paper` | `#FFFFFF` | Page and card fill |
| `--color-night` | `#151826` | Dark sections, signature badge, icon tile |
| `--color-indigo` | `#4B3BF5` | Brand, primary actions |

### 1.4 Ramps (`--color-{ramp}-{step}`)
| Ramp | 50 | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 |
|---|---|---|---|---|---|---|---|---|---|---|
| indigo | `#EEECFF` | `#DDD9FF` | `#BDB5FF` | `#9A8EFF` | `#7466FA` | `#4B3BF5` | `#3A2BD9` | `#2D20B5` | `#221889` | `#171060` |
| neutral | `#F5F5F8` | `#ECEDF2` | `#E3E4EA` | `#CFD1DA` | `#8B8E9C` | `#6B6F7E` | `#5B5F6E` | `#2A2D3A` | `#151826` | `#0E1016` |
| gain | `#E3F5EA` | `#C6EBD4` | `#94D8B0` | `#5CC289` | `#2FA868` | `#0A8A4A` | `#087540` | `#065F34` | `#054A29` | `#03341D` |
| loss | `#FDE8E8` | `#FAD0D1` | `#F4A3A5` | `#EC7276` | `#E24C51` | `#D93A3F` | `#B92F34` | `#96252A` | `#721C20` | `#4E1316` |
| coach | `#E4F1FF` | `#C9E3FF` | `#94C7FF` | `#5FAAFF` | `#3A9AFF` | `#1F8FFF` | `#0F74D9` | `#0B5BAD` | `#08437F` | `#052C54` |
| league | `#FEEBE1` | `#FDD4BF` | `#FBAE86` | `#F8894F` | `#F5732E` | `#F2601F` | `#D14A10` | `#B03C0B` | `#8A2E09` | `#5C1F06` |
| journal | `#F6E6FB` | `#EDCCF6` | `#DC9BEC` | `#CC6BE2` | `#BE52D9` | `#B03FD1` | `#9A33B4` | `#7F2894` | `#5F1E73` | `#3F144D` |

### 1.5 Gradient stops
| Token | Value | Use |
|---|---|---|
| `--color-gradient-hold-start` | `#6A5BFF` | Hold gradient stop 0% |
| `--color-gradient-hold-end` | `#3424D6` | Hold gradient stop 100% |
| `--color-gradient-tide-start` | `#4B3BF5` | Tide 0% |
| `--color-gradient-tide-end` | `#1F8FFF` | Tide 100% |
| `--color-gradient-ember-start` | `#FF8A4C` | Ember 0% |
| `--color-gradient-ember-end` | `#F2601F` | Ember 100% |
| `--color-gradient-orchid-start` | `#C65BE6` | Orchid 0% |
| `--color-gradient-orchid-end` | `#7C5CFF` | Orchid 100% |
| `--color-gradient-icon-start` | `#262A40` | Night app icon 0% |
| `--color-gradient-icon-end` | `#0E1016` | Night app icon 100% |
| `--color-gradient-dawn-violet` | `#CBC3FF` | Dawn mesh glow |
| `--color-gradient-dawn-sky` | `#CDE5FF` | Dawn mesh glow 2 |

### 1.6 Font families
| Token | Value | Note |
|---|---|---|
| `--font-display` | `Urbanist` | Headings, display |
| `--font-body` | `Figtree` | Body, UI, labels |
| `--font-number` | `Manrope` | All numbers, with tnum |

### 1.7 Font sizes
| Token | Value | Note |
|---|---|---|
| `--text-caption` | `13px` |  |
| `--text-number-s` | `13px` |  |
| `--text-label` | `14px` |  |
| `--text-body` | `16px` |  |
| `--text-number` | `16px` |  |
| `--text-body-l` | `18px` |  |
| `--text-h4` | `18px` |  |
| `--text-h3` | `22px` |  |
| `--text-h2` | `28px` |  |
| `--text-h1` | `44px` |  |
| `--text-number-xl` | `48px` |  |
| `--text-display` | `64px` |  |

### 1.8 Line heights
| Token | Value | Note |
|---|---|---|
| `--leading-number-s` | `16px` |  |
| `--leading-caption` | `18px` |  |
| `--leading-label` | `20px` |  |
| `--leading-body` | `24px` |  |
| `--leading-h4` | `24px` |  |
| `--leading-body-l` | `28px` |  |
| `--leading-h3` | `28px` |  |
| `--leading-h2` | `34px` |  |
| `--leading-h1` | `48px` |  |
| `--leading-number-xl` | `52px` |  |
| `--leading-display` | `68px` |  |

### 1.9 Letter spacing
| Token | Value | Note |
|---|---|---|
| `--tracking-display` | `-0.035em` |  |
| `--tracking-number` | `-0.03em` |  |
| `--tracking-h1` | `-0.025em` |  |
| `--tracking-h2` | `-0.015em` |  |
| `--tracking-h3` | `-0.01em` |  |
| `--tracking-normal` | `0em` |  |

### 1.10 Font weights
| Token | Value | Note |
|---|---|---|
| `--font-weight-regular` | `400` |  |
| `--font-weight-medium` | `500` |  |
| `--font-weight-semibold` | `600` |  |
| `--font-weight-bold` | `700` |  |
| `--font-weight-extrabold` | `800` |  |

### 1.11 Spacing
| Token | Value | Note |
|---|---|---|
| `--spacing-4` | `4px` |  |
| `--spacing-8` | `8px` |  |
| `--spacing-12` | `12px` |  |
| `--spacing-16` | `16px` |  |
| `--spacing-24` | `24px` |  |
| `--spacing-32` | `32px` |  |
| `--spacing-48` | `48px` |  |
| `--spacing-64` | `64px` |  |
| `--spacing-96` | `96px` |  |

### 1.12 Radii
| Token | Value | Note |
|---|---|---|
| `--radius-chip` | `8px` |  |
| `--radius-input` | `14px` |  |
| `--radius-row` | `16px` |  |
| `--radius-toast` | `20px` |  |
| `--radius-card` | `24px` |  |
| `--radius-card-lg` | `28px` |  |
| `--radius-panel` | `32px` |  |
| `--radius-pill` | `999px` |  |

### 1.13 Opacity
| Token | Value | Note |
|---|---|---|
| `--opacity-disabled` | `45%` |  |

### 1.14 Breakpoints
| Token | Value | Note |
|---|---|---|
| `--breakpoint-tablet` | `600px` |  |
| `--breakpoint-desktop` | `1024px` |  |
| `--breakpoint-wide` | `1440px` |  |

### 1.15 Containers
| Token | Value | Note |
|---|---|---|
| `--container-ticket` | `420px` |  |
| `--container-sheet` | `480px` |  |
| `--container-text` | `680px` |  |
| `--container-content` | `1248px` |  |

### 1.16 Shadows (not storable as Paper tokens)
| Name | Light (box-shadow) | Dark |
|---|---|---|
| elevation-0 | none | surface #0E1016 |
| elevation-1 (card) | 0 1px 2px rgba(14,16,22,.06), 0 8px 24px rgba(14,16,22,.08) | #151826 + 1px #1F2334 |
| elevation-2 (hover) | 0 2px 4px rgba(14,16,22,.08), 0 18px 40px rgba(14,16,22,.14) | #1B1F2E + 1px #262A3A |
| elevation-3 (overlay) | 0 12px 32px rgba(14,16,22,.16), 0 0 0 1px rgba(14,16,22,.08) | #1F2334 + 1px #2E3346 |
| elevation-4 (modal) | 0 24px 64px rgba(14,16,22,.24), 0 0 0 1px rgba(14,16,22,.06) | #262A3A + 1px #3A3F55 |
| focus | 0 0 0 2px #FFFFFF, 0 0 0 4px #4B3BF5 (dark ring #A99FFF) | |

## 2. Type styles
| Style | Family | Size / line-height | Weight | Tracking | Use |
|---|---|---|---|---|---|
| Display | Urbanist | 64/68 | 800 | -0.035em | Hero, one per page |
| H1 | Urbanist | 44/48 | 800 | -0.025em | Page and section titles |
| H2 | Urbanist | 28/34 | 700 | -0.015em | Card groups, sheet titles |
| H3 | Urbanist | 22/28 | 700 | -0.01em | Card titles |
| H4 | Urbanist | 18/24 | 700 | 0 | Small headings |
| Body L | Figtree | 18/28 | 400 | 0 | Lead paragraphs |
| Body | Figtree | 16/24 | 400 | 0 | Reading text |
| Label | Figtree | 14/20 | 600 | 0 | Labels, row titles (buttons 15–16/20 at 700) |
| Caption | Figtree | 13/18 | 500 | 0 | Helper text, disclaimers |
| Number XL | Manrope + tnum | 48/52 | 800 | -0.03em | Portfolio value |
| Number | Manrope + tnum | 16/24 | 700 | 0 | Prices, rows |
| Number S | Manrope + tnum | 13/16 | 800 | 0 | Chips, ranks, axes |

## 3. Numbers and money
- Locale **en-CA**. Money `$1,234.56`, always 2 decimals. Negative `−$45.10` with a real minus (U+2212).
- Changes: `▲ +2.40%` / `▼ −1.08%`. Arrow + sign + colour, always together. Flat is `0.00%`, grey, no arrow.
- Abbreviations (tight spaces only): `$1.2K`, `$3.4M`, `$1.1B`, one decimal, full value in a tooltip.
- Currency: CAD by default. US-listed prices show `US$231.52` + a `USD` tag. Portfolio totals are in CAD.
- Missing value: `—` in muted #8B8E9C, tooltip "No price yet". Never `$0.00`.
- Shares: whole numbers ("12 shares"). Market times in ET ("3:59 p.m. ET").
- All numbers: Manrope with `font-feature-settings: "tnum"`, right-aligned in columns.

## 4. Layout
| Breakpoint | Range | Columns | Gutter | Margin |
|---|---|---|---|---|
| Phone | 0–599 | 4 | 16 | 20 |
| Tablet | 600–1023 | 8 | 20 | 40 |
| Desktop | 1024+ | 12 | 24 | 96 (content max 1248) |

Spacing use:
- 4: icon to text;
- 8: inside chips;
- 12: row gaps, label to field;
- 16: phone margins, small card padding;
- 24: card padding and gaps;
- 32: between groups;
- 48 / 64 / 96: section padding (phone / tablet / desktop).

## 5. Icons
24 grid with a 2 px live-area padding. Round caps and joins, no fills.
- Sizes and strokes: 16 (stroke 1.5) for rows and chips, 20 (1.75) for buttons and tabs, 24 (2) for navigation and empty states.
- Icon-only buttons have an aria-label and a 44 px target.

## 6. Accessibility
- WCAG 2.2 AA minimum.
- Focus ring: 2 px with a 2 px gap.
- Touch targets at least 44×44.
- Never colour alone: an arrow and sign on every change, plus weight or a bar on selection.
- Every chart has a text summary and a table.
- prefers-reduced-motion: 120 ms fade only.

## 7. Voice
- A friend, not a nag. Plain Canadian English. Say "practice money" or "fake money".
- Never: advisor, guaranteed, "buy this", get rich, can't lose, to the moon, hot tip, risk-free.
- Errors: what happened → why → what to do. No blame, no codes, no exclamation marks.

## Components naming
Layer names follow `Component/Variant/State`. For example: `Button/Primary/Hover`, `Field/Text/Error`, `Checkbox/Indeterminate`, `Chip/Change/Gain/M`, `TickerRow/Hover`, `TradeTicket/Coach`, `PracticeIndicator/Pill`, `MarketStatus/Delayed`.

## 8. Detailed specs

## Logo (master: drawn HLD wordmark, from node 4YK-0)
**Primary logo:** the drawn "HLD" wordmark on its own, with no tile. Ink #0E1016 on light grounds, white on dark (Ink, Night, Aurora, Indigo).
**Signature badge:** a Night #151826 rounded panel with white HLD centred. Proportions from 4YK-0: 458×150 panel, corner 24, HLD cap 56. That is width 8.18×, height 2.68× and corner 0.43× the cap height.
**Icons:** a Night tile with the white coin H.
- App icon: squircle (rx 22.4%) with `linear-gradient(135deg, #262A40, #0E1016)` and a top light `rgba(255,255,255,.10) → 0` by half height.
- Favicon: flat Night tile, corner 25%.
- Avatar: Night circle with the coin H (or HLD from 120 px up).
- The full HLD appears inside an icon only at 120 px and up.
**Secondary (comparison only):** the Indigo tile versions on the Logo board.

**Files** (assets folder):
| File | What it is |
|---|---|
| hld-wordmark.svg | Master. `currentColor`, viewBox 0 0 258 100. Set CSS `color` to Ink or white |
| hld-badge.svg / hld-badge@4x.png | Signature badge (Night panel + white HLD) |
| hld-mark.svg | Night tile + white coin H (64 grid): favicon and small icon |
| hld-mark-glyph.svg | Coin H alone, `currentColor`, viewBox 0 0 90 100 |
| hld-app-icon.svg / hld-app-icon-1024.png | Night app icon |
| hld-lockup-horizontal.svg / @4x.png, hld-lockup-stacked.svg / @4x.png | Night tile + Ink HLD, for app-store and listing use only |
| hld-social-share-1200x630.png, hld-social-avatar-400.png | Social |

**Construction** (cap height = 100):
- H: stems 28 wide with round ends, 34 apart (H is 90 wide). Coin r 20 at (45, 50). A cut of r 25 is taken out of the inner stem edges (y 31.67–68.33), leaving a 5-unit ring. It is real geometry, so the logo is single-colour.
- L (60 wide) and D (78 box, 76 drawn): the same 28 stroke, round caps and joins.
- Gaps: H→L 16, L→D 14.

**Clear space:** half the cap height on every side of the wordmark. For the badge, the panel is the clear space. For icons, half the tile.

**Minimum sizes:**
- wordmark 10 px cap height (≈26 px wide);
- badge 12 px cap (98 px wide);
- icon tile 16 px.

**Usage:**
- **Nav:** wordmark, cap 17–20 px.
- **Footer:** wordmark.
- **Stickers / social posts / app splash:** badge.
- **Favicon:** Night tile.
- **App icon:** Night squircle.

**Don'ts:**
- Don't set HLD in a font, colour the coin, or stretch it.
- Don't put Ink on dark grounds.
- Don't bounce it. The reveal is letters rising 24 px in a mask (60 ms stagger), then the coin setting into the cut: 1300 ms total, settle ease, no tile.

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
| --grad-hold | linear-gradient(in oklab 150deg, #6A5BFF 0%, #4B3BF5 45%, #3424D6 100%) | Brand surfaces: Pro card fill, splash backgrounds (never buttons) |
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
Night: `linear-gradient(135deg, #262A40 0%, #0E1016 100%)` plus a top-light overlay `linear-gradient(180deg, rgba(255,255,255,.10) 0%, rgba(255,255,255,0) 50%)`, corner radius 22.4%. The Indigo version (#6A5BFF → #3424D6) is secondary.

### Gradient text rule
- **Allowed:** one italic word in a headline of 40px or more, using --grad-tide: `background-image: var(--grad-tide); -webkit-background-clip: text; background-clip: text; color: transparent`.
- **Never:** numbers, prices, percentages, body text, buttons, nav, the logo, gain/loss.

## 9. Store badges and pricing (added)
**Official badges** are in `assets/vendor/`, unaltered:
- `apple-app-store-black-en-us.svg`, from developer.apple.com;
- `google-play-en-us.png`, from play.google.com/intl/en_us/badges. It has built-in padding; the visible badge is about 67% of the image height.

Badge rules:
- Show both at the same visible height (48 px on the web, 40 px minimum).
- Clear space of at least a quarter of the badge height around each.
- Never recolour them or change their text.
- "Coming soon" sits as a separate caption outside the badges.
- Before launch, use them on the live site only with "Coming soon". After launch, they must link to the real store listings.
- Our own badge `Badge/Waitlist` ("Join the waitlist at hldfinance.ca") is the live call to action.

**Pricing card master** (Theme UI · Patterns 10.7):
- `Segmented/Billing/Monthly`: Monthly is selected; Yearly carries a "Planned" tag.
- `PricingCard/Free`: white card, radius 28, padding 36, elevation-1. Ink CTA "Join the waitlist".
- `PricingCard/Pro/Featured`: white inside a 2 px Edge gradient ring (radius 30) with a Halo glow behind. Indigo CTA "Get notified".
- Shared:
  - price: Number style (Manrope 800 56/60 tnum) + "CAD / month";
  - 6 aligned feature rows, 30 px tall, each with a 20 px check (Pro's first row is "Everything in Free, plus…" with a plus);
  - equal card heights.
- Footnote: "Pro is planned; price and features may change. Practice stays free."
