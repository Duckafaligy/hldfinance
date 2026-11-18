---
name: HLD Finance
description: Think before you buy.
colors:
  cream-50: "#FFFCF8"
  cream-75: "#FCF8F2"
  cream-100: "#F5EFE7"
  cream-150: "#EDE5D9"
  cream-200: "#E3D7C8"
  cream-300: "#CDBAA6"
  brown-400: "#AD937A"
  brown-500: "#91745B"
  brown-600: "#795D46"
  brown-700: "#614734"
  brown-800: "#453023"
  brown-900: "#1E120C"
  surface-page: "#FCF8F2"
  surface-raised: "#FFFCF8"
  surface-sunken: "#F5EFE7"
  surface-hover: "#EDE5D9"
  surface-inverse: "#1E120C"
  text-primary: "#1E120C"
  text-secondary: "#614734"
  text-tertiary: "#795D46"
  text-disabled: "#AD937A"
  text-inverse: "#FCF8F2"
  text-inverse-secondary: "#CDBAA6"
  text-inverse-tertiary: "#AD937A"
  border-subtle: "#E3D7C8"
  border-default: "#CDBAA6"
  border-control: "#91745B"
  focus-ring: "#1E120C"
  focus-ring-inverse: "#FCF8F2"
  accent: "#1E120C"
  accent-pressed: "#453023"
  accent-subtle: "#EDE5D9"
  on-accent: "#FCF8F2"
  accent-inverse: "#FCF8F2"
  accent-inverse-pressed: "#EDE5D9"
  accent-inverse-subtle: "#453023"
  on-accent-inverse: "#1E120C"
  border-control-inverse: "#CDBAA6"
  border-inverse-subtle: "#614734"
  skeleton: "#EDE5D9"
  skeleton-shimmer: "#F5EFE7"
  skeleton-inverse: "#614734"
  skeleton-inverse-shimmer: "#795D46"
  state-gain: "#453023"
  state-loss: "#453023"
  state-warning: "#614734"
  state-error: "#1E120C"
  state-bg: "#EDE5D9"
  brand-apple: "#000000"
  brand-google-blue: "#4285F4"
  brand-google-red: "#EA4335"
  brand-google-yellow: "#FBBC05"
  brand-google-green: "#34A853"
typography:
  serif-hero:
    fontFamily: "Instrument Serif, Georgia, serif"
    fontStyle: italic
    fontSize: "64px"
    fontWeight: 400
    lineHeight: "62px"
    letterSpacing: "-0.01em"
  serif-display:
    fontFamily: "Instrument Serif, Georgia, serif"
    fontStyle: italic
    fontSize: "44px"
    fontWeight: 400
    lineHeight: "46px"
    letterSpacing: "-0.01em"
  serif-title:
    fontFamily: "Instrument Serif, Georgia, serif"
    fontStyle: italic
    fontSize: "32px"
    fontWeight: 400
    lineHeight: "36px"
    letterSpacing: "-0.01em"
  display:
    fontFamily: "Archivo, system-ui, sans-serif"
    fontSize: "36px"
    fontWeight: 800
    lineHeight: "38px"
    letterSpacing: "-0.04em"
  figure-xl:
    fontFamily: "Archivo, system-ui, sans-serif"
    fontSize: "48px"
    fontWeight: 700
    lineHeight: "52px"
    letterSpacing: "-0.03em"
  title-1:
    fontFamily: "Archivo, system-ui, sans-serif"
    fontSize: "28px"
    fontWeight: 800
    lineHeight: "30px"
    letterSpacing: "-0.04em"
  title-2:
    fontFamily: "Archivo, system-ui, sans-serif"
    fontSize: "22px"
    fontWeight: 700
    lineHeight: "26px"
    letterSpacing: "-0.03em"
  title-3:
    fontFamily: "Archivo, system-ui, sans-serif"
    fontSize: "18px"
    fontWeight: 600
    lineHeight: "24px"
    letterSpacing: "-0.01em"
  body-lg:
    fontFamily: "Archivo, system-ui, sans-serif"
    fontSize: "18px"
    fontWeight: 400
    lineHeight: "28px"
    letterSpacing: "0em"
  body:
    fontFamily: "Archivo, system-ui, sans-serif"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: "24px"
    letterSpacing: "0em"
  button:
    fontFamily: "Archivo, system-ui, sans-serif"
    fontSize: "16px"
    fontWeight: 600
    lineHeight: "20px"
    letterSpacing: "0em"
  label:
    fontFamily: "Archivo, system-ui, sans-serif"
    fontSize: "14px"
    fontWeight: 500
    lineHeight: "20px"
    letterSpacing: "0.01em"
  caption:
    fontFamily: "Archivo, system-ui, sans-serif"
    fontSize: "13px"
    fontWeight: 400
    lineHeight: "18px"
    letterSpacing: "0.01em"
  table:
    fontFamily: "Archivo, system-ui, sans-serif"
    fontSize: "14px"
    fontWeight: 400
    lineHeight: "20px"
    letterSpacing: "0em"
rounded:
  none: "0px"
  sm: "2px"
  md: "4px"
  lg: "6px"
  full: "999px"
spacing:
  hairline: "1px"
  "2": "2px"
  "4": "4px"
  "8": "8px"
  "12": "12px"
  "16": "16px"
  "20": "20px"
  "24": "24px"
  "32": "32px"
  "40": "40px"
  touch: "44px"
  "48": "48px"
  "64": "64px"
  "80": "80px"
  safe-bottom: "34px"
components:
  button-primary:
    backgroundColor: "{colors.accent}"
    textColor: "{colors.on-accent}"
    typography: "{typography.button}"
    rounded: "{rounded.md}"
    height: "48px"
    padding: "0 20px"
  button-primary-pressed:
    backgroundColor: "{colors.accent-pressed}"
    textColor: "{colors.on-accent}"
  button-primary-disabled:
    backgroundColor: "{colors.surface-hover}"
    textColor: "{colors.text-disabled}"
  button-secondary:
    backgroundColor: "{colors.surface-page}"
    textColor: "{colors.text-primary}"
    typography: "{typography.button}"
    rounded: "{rounded.md}"
    height: "48px"
  button-secondary-pressed:
    backgroundColor: "{colors.surface-hover}"
    textColor: "{colors.text-primary}"
  button-ghost:
    textColor: "{colors.text-primary}"
    rounded: "{rounded.md}"
    height: "48px"
  input:
    backgroundColor: "{colors.surface-sunken}"
    textColor: "{colors.text-primary}"
    rounded: "{rounded.lg}"
    height: "52px"
    padding: "0 16px"
  chip:
    backgroundColor: "{colors.surface-page}"
    textColor: "{colors.text-primary}"
    typography: "{typography.label}"
    rounded: "{rounded.md}"
    height: "40px"
    padding: "0 16px"
  chip-selected:
    backgroundColor: "{colors.accent-subtle}"
    textColor: "{colors.text-primary}"
  card:
    backgroundColor: "{colors.surface-raised}"
    rounded: "{rounded.lg}"
    padding: "16px"
  coach-card:
    backgroundColor: "{colors.surface-inverse}"
    textColor: "{colors.text-inverse}"
    rounded: "{rounded.lg}"
    padding: "16px"
  coach-button-primary:
    backgroundColor: "{colors.accent-inverse}"
    textColor: "{colors.on-accent-inverse}"
    typography: "{typography.button}"
    rounded: "{rounded.sm}"
    height: "52px"
  coach-button-secondary:
    textColor: "{colors.text-inverse}"
    typography: "{typography.button}"
    rounded: "{rounded.sm}"
    height: "52px"
  coach-chip-selected:
    backgroundColor: "{colors.accent-inverse-subtle}"
    textColor: "{colors.text-inverse}"
    rounded: "{rounded.sm}"
    height: "40px"
  switch-off:
    backgroundColor: "{colors.surface-sunken}"
    rounded: "{rounded.full}"
    height: "28px"
    width: "48px"
  switch-on:
    backgroundColor: "{colors.accent}"
    rounded: "{rounded.full}"
    height: "28px"
    width: "48px"
  inline-notice:
    backgroundColor: "{colors.state-bg}"
    textColor: "{colors.text-primary}"
    typography: "{typography.table}"
    rounded: "{rounded.md}"
    padding: "12px 16px"
  list-row:
    backgroundColor: "{colors.surface-raised}"
    textColor: "{colors.text-primary}"
    rounded: "{rounded.sm}"
    height: "64px"
  segmented-track:
    backgroundColor: "{colors.surface-sunken}"
    rounded: "{rounded.lg}"
    padding: "4px"
  segmented-segment-selected:
    backgroundColor: "{colors.cream-50}"
    rounded: "{rounded.sm}"
    height: "36px"
  toast:
    backgroundColor: "{colors.surface-inverse}"
    textColor: "{colors.text-inverse}"
    typography: "{typography.table}"
    rounded: "{rounded.lg}"
    padding: "12px 8px 12px 16px"
  tab-bar:
    backgroundColor: "{colors.surface-raised}"
    textColor: "{colors.text-secondary}"
    padding: "8px 8px 34px"
  auth-button:
    backgroundColor: "{colors.surface-raised}"
    textColor: "{colors.text-primary}"
    typography: "{typography.button}"
    rounded: "{rounded.md}"
    height: "52px"
    padding: "0 16px"
---

# Design System: HLD Finance

The source of truth is the Paper file **hldfinanc redoo** (fileId 01M7ND942KK1P3EG7FGKWPZ962, formerly "Bright olive"), page **Theme**, with eight artboards: Principles, Colour roles, Typography, Spacing & radii, Components & states, Icons, Motion, Components: product. Tokens in that file match the frontmatter above. Accent and state values are provisional and point into the cream and brown ramp until Aariz chooses the accent.

## Overview

HLD is a pause before a purchase or a trade. The coach asks a question, shows the facts, and steps aside; the person decides. The interface is cream and brown, with small, square-shouldered corners. Two voices: Instrument Serif Italic for the coach at a moment (the question on the Coach card, the Welcome tagline, "Your call."), and Archivo for everything else, heavy and tight in titles, regular where people read, and 87.5% wide where they compare numbers. The Coach check-in is the hero: the most room, the largest type, and the only dark card on any screen.

Platform: phone-first at 390×844, scaling up to desktop web. Light mode only for now.

### Principles

1. **Coach first.** The check-in gets the most room, the largest type and the only dark card on the screen.
2. **Ask, don't advise.** Coach copy is a question or a fact. It never says buy, sell, should, or advisor. It is "financial help".
3. **Both doors open.** The coach never blocks. Buy anyway sits beside Remind me, the same size, always visible, with no guilt in the label.
4. **Equal weight, both ways.** Remind me leads because it is the pause; Buy anyway is never made harder to see or reach. These four rules keep the primary emphasis from becoming visual misdirection:
   1. Buy anyway's label is full-strength text at the same 16/600 as Remind me: Brown 900 on cream, Cream 75 on the Coach card.
   2. The order is fixed, Remind me above Buy anyway, and both are always on screen.
   3. Buy anyway goes straight through. There is no confirmation step, and it never locks while Remind me is saving.
   4. On the Coach card, Buy anyway's outline is Cream 300 (`--color-border-control-inverse`, 9.74:1), never Brown 500 (4.23:1).
5. **Facts in tabular figures.** Comparable numbers line up on the digit. Gain is ▲ and +, loss is ▼ and a true minus (U+2212); colour is never the only cue.
6. **Honest labels.** The label sits next to the number: "fake money", "money not spent, not money saved", "an assumption, not a promise".
7. **Calm by default.** No streaks, countdowns, badges or red dots. One follow-up per purchase, check-ins can be switched off, and motion only marks a change of state.
8. **Dense to compare, roomy to decide.** Journal, leagues, holdings and subscriptions are tight tables in narrow figures. Coach screens get one question, wide type and open space.

## Colors

Two pinned colours, Cream 75 `#FCF8F2` and Brown 900 `#1E120C`, with ten steps derived between them in OKLCH. The middle steps carry a little extra chroma so they read as brown rather than grey.

| Step | Hex | On Cream 75 | On Brown 900 |
|---|---|---|---|
| Cream 50 | `#FFFCF8` | 1.03 | 17.90 |
| Cream 75 (pinned) | `#FCF8F2` | 1.00 | 17.30 |
| Cream 100 | `#F5EFE7` | 1.08 | 16.03 |
| Cream 150 | `#EDE5D9` | 1.18 | 14.66 |
| Cream 200 | `#E3D7C8` | 1.34 | 12.92 |
| Cream 300 | `#CDBAA6` | 1.78 | 9.74 |
| Brown 400 | `#AD937A` | 2.74 | 6.30 |
| Brown 500 | `#91745B` | 4.09 | 4.23 |
| Brown 600 | `#795D46` | 5.72 | 3.02 |
| Brown 700 | `#614734` | 8.07 | 2.14 |
| Brown 800 | `#453023` | 11.67 | 1.48 |
| Brown 900 (pinned) | `#1E120C` | 17.30 | 1.00 |

### Neutral (roles)

| Role | Token | Value | Pair checked | Ratio | Result |
|---|---|---|---|---|---|
| Page | `--color-surface-page` | Cream 75 | | | |
| Cards, rows | `--color-surface-raised` | Cream 50 | | | |
| Fields, tracks | `--color-surface-sunken` | Cream 100 | | | |
| Pressed, selected | `--color-surface-hover` | Cream 150 | | | |
| Coach card, toast | `--color-surface-inverse` | Brown 900 | | | |
| Primary text | `--color-text-primary` | Brown 900 | on Cream 75 / 100 / 150 | 17.30 / 16.03 / 14.66 | AAA |
| Secondary text | `--color-text-secondary` | Brown 700 | on Cream 75 / 150 | 8.07 / 6.84 | AAA / AA |
| Tertiary text | `--color-text-tertiary` | Brown 600 | on Cream 75 / 100 / 150 | 5.72 / 5.30 / 4.85 | AA |
| Inverse text | `--color-text-inverse` | Cream 75 | on Brown 900 | 17.30 | AAA |
| Inverse secondary | `--color-text-inverse-secondary` | Cream 300 | on Brown 900 | 9.74 | AAA |
| Inverse fine print | `--color-text-inverse-tertiary` | Brown 400 | on Brown 900 | 6.30 | AA |
| Disabled label | `--color-text-disabled` | Brown 400 | on Cream 75 | 2.74 | Exempt; inactive controls only, with a reason shown |
| Card edge, row divider | `--color-border-subtle` | Cream 200 | on Cream 75 | 1.34 | Decorative; never the only cue |
| Section divider, gridline | `--color-border-default` | Cream 300 | | | |
| Input and chip outline | `--color-border-control` | Brown 500 | on Cream 75 / 100 | 4.09 / 3.79 | Passes 3:1 UI |
| Focus ring | `--color-focus-ring` | Brown 900 | on Cream 75 | 17.30 | Passes 3:1 UI |
| Focus ring on Coach | `--color-focus-ring-inverse` | Cream 75 | on Brown 900 | 17.30 | Passes 3:1 UI |
| Divider on the Coach card | `--color-border-inverse-subtle` | Brown 700 | on Brown 900 | 2.14 | Decorative; never the only cue |
| Skeleton, light | `--color-skeleton` / `--color-skeleton-shimmer` | Cream 150 / Cream 100 | on Cream 75 | 1.18 / 1.08 | Placeholder shape, not content |
| Skeleton, Coach card | `--color-skeleton-inverse` / `--color-skeleton-inverse-shimmer` | Brown 700 / Brown 600 | on Brown 900 | 2.14 / 3.02 | Placeholder shape; Brown 800 (1.48) disappeared |

### Primary (accent, provisional)

| Slot | Token | Current value | Pair | Ratio |
|---|---|---|---|---|
| Primary fill, selected tab, ring progress | `--color-accent` | Brown 900 | Cream 75 text on it | 17.30 |
| Pressed primary | `--color-accent-pressed` | Brown 800 | Cream 75 text on it | 11.67 |
| Selected chip or segment | `--color-accent-subtle` | Cream 150 | Brown 900 text on it | 14.66 |
| Text on accent | `--color-on-accent` | Cream 75 | | |

When the accent arrives, change these four tokens only, and recheck each pair against AA.

### Primary on the Coach card (inverse accent, provisional)

The Coach card's actions use their own role pair, so an accent swap reaches them without touching the ramp.

| Slot | Token | Current value | Pair | Ratio |
|---|---|---|---|---|
| Remind me fill on the Coach card | `--color-accent-inverse` | Cream 75 | Brown 900 label on it | 17.30 |
| Pressed | `--color-accent-inverse-pressed` | Cream 150 | Brown 900 label on it | 14.66 |
| Label on that fill | `--color-on-accent-inverse` | Brown 900 | | |
| Selected answer chip | `--color-accent-inverse-subtle` | Brown 800 | Cream 75 label on it | 11.67 |
| Buy anyway and chip outline | `--color-border-control-inverse` | Cream 300 | on Brown 900 | 9.74 |

### Tertiary (state slots, provisional)

| Slot | Token | Current value | Pair | Ratio |
|---|---|---|---|---|
| Gain | `--color-state-gain` | Brown 800 | on Cream 75 | 11.67 |
| Loss | `--color-state-loss` | Brown 800 | on Cream 75 | 11.67 |
| Warning | `--color-state-warning` | Brown 700 | on Cream 150 | 6.84 |
| Error | `--color-state-error` | Brown 900 | on Cream 75 | 17.30 |
| State tint | `--color-state-bg` | Cream 150 | | |

Gain and loss share a value on purpose: the ▲ + / ▼ − glyphs carry direction, and the screens stay readable if hue is lost.

### Named Rules

- **Restricted pairs.** Brown 500 is never text (4.09:1 fails 4.5:1); it is the control outline only. Cream 200 and darker are never a text surface (Brown 600 on Cream 200 is 4.27:1).
- **One dark card.** Brown 900 as a surface belongs to the Coach card and transient toasts.
- **Brand-only tokens.** `--color-brand-apple` (#000000) and `--color-brand-google-blue` / `-red` / `-yellow` / `-green` sit outside the cream and brown ramp and colour only the official Apple logo, its "Continue with Apple" label and Google's G on the sign-in buttons. They never colour UI, state, charts or text elsewhere, so Google red never stands in for an error or a destructive action.

## Typography

Two families, each with one job.

- **Instrument Serif Italic** (`--font-serif`, Google Fonts, 400 italic only): a condensed, high-contrast italic with hairline serifs. It is the coach's voice at a moment, used selectively: the question on the Coach card (every Coach card headline, including the follow-up and the budget check-in), "Your call." on the decision, "Think before you buy." on Welcome, and the Principles titles on the Theme board.
- **Archivo** (`--font-sans`, Google Fonts, variable weight 100–900 and width 62–125) for everything else. Display and Title 1 are 800 with −0.04em tracking, Title 2 and Figure XL are 700 with −0.03em, and readable UI text (body, labels, tables, buttons, inputs) stays at 400–600 with normal tracking.
  - **Width 100** for answers, body copy, titles and buttons.
  - **Width 87.5** (`font-stretch: 87.5%`) for tables: journal, leagues, holdings, subscriptions, ramp captions and token names. This fits five columns across a 390 phone at 14px.
- **Tabular figures everywhere numbers meet:** set `font-variant-numeric: tabular-nums` on every figure, not only tables. Right-align columns of money. Amounts keep two decimals; share quantities keep four.
- **Signs:** ▲ + for gain, ▼ − (U+2212) for loss, `0.00%` with no arrow for flat.

### Hierarchy

| Style | Family | Size / line | Weight | Tracking | Use |
|---|---|---|---|---|---|
| Serif hero | Instrument Serif Italic | 64 / 62 | 400 | −0.01em | The Welcome tagline only |
| Serif display | Instrument Serif Italic | 44 / 46 | 400 | −0.01em | The Coach card question, one per card; "Your call." |
| Serif title | Instrument Serif Italic | 32 / 36 | 400 | −0.01em | Principles titles and other key moments on boards |
| Display | Archivo | 36 / 38 | 800 | −0.04em | Screen display headlines ("What are you thinking of buying?") |
| Figure XL | Archivo | 48 / 52 | 700 | −0.03em, tabular | Skipped total, portfolio value |
| Title 1 | Archivo | 28 / 30 | 800 | −0.04em | Screen titles |
| Title 2 | Archivo | 22 / 26 | 700 | −0.03em | Section titles |
| Title 3 | Archivo | 18 / 24 | 600 | −0.01em | Card titles |
| Body large | Archivo | 18 / 28 | 400 | 0 | Coach explanations and answers |
| Body | Archivo | 16 / 24 | 400 | 0 | Default copy |
| Button | Archivo | 16 / 20 | 600 | 0 | Every button label, including Remind me and Buy anyway |
| Label | Archivo | 14 / 20 | 500 | 0.01em | Chips, segments, field labels, toast actions |
| Table | Archivo at width 87.5 | 14 / 20 | 400, 600 for symbols | 0 | Dense rows, check-in records, notes on the Theme boards |
| Caption | Archivo | 13 / 18 | 400 | 0.01em | Timestamps, tab labels, "Quotes delayed 15 minutes", fine print |

Tokens: `--font-sans`, `--font-serif`; sizes `--text-serif-hero`, `--text-serif-display`, `--text-serif-title`, `--text-display`, `--text-figure-xl`, `--text-title-1/2/3`, `--text-body-lg`, `--text-body`, `--text-button`, `--text-label`, `--text-table`, `--text-caption`, each with a matching `--leading-*`; weights `--font-weight-regular` 400, `-medium` 500, `-semibold` 600, `-bold` 700, `-extrabold` 800; tracking `--tracking-display` −0.04em (Display, Title 1), `--tracking-headline` −0.03em (Title 2, Figure XL), `--tracking-title` −0.01em (Title 3), `--tracking-serif` −0.01em, `--tracking-normal` 0, `--tracking-small` 0.01em. There are no other sizes on screens. Theme board headers use `--text-board-title` / `--leading-board-title` (64/64, Archivo 800), which never appear on a screen.

### Named Rules

- **The serif is selective.** It never sets figures, tables, buttons, inputs, labels, body copy or screen titles. Its hairlines need size: 28px and up, never below 24px (the smallest role is 32). It appears only in full-strength colour: Cream 75 on Brown 900 or Brown 900 on Cream 75, both 17.30:1.
- **Heavy and tight is for headlines only.** −0.04em is the tracking floor. Body, labels, tables, buttons and inputs keep normal tracking.
- **Line breaks are set by hand between phrases** on every headline at phone width: "Will you still / want it in 3 days?", "Make an account so / your check-ins are kept.", "Think before / you buy.", "Thinking about / buying something?".
- No small caps, no all-caps labels, no monospace. Italic belongs to the serif only. Headings carry their own weight without a kicker above them.

## Layout

- **Spacing:** 4px base. Tokens: 1 (hairline), 2, 4, 8, 12, 16, 20, 24, 32, 40, 48, 64, 80, 44 (touch) and 34 (`--spacing-safe-bottom`, the home-indicator inset; never a gap).
- **Two standard paddings:**
  - **Screen content:** every screen's main content frame is 40 top (`--spacing-40`, measured from the top bar or status bar) and 16 left and right (`--spacing-16`). Footers keep 16 sides and `--spacing-safe-bottom` (34) under the last button; a full-height Coach card area also ends 34 above the bottom edge. Content never sits under a fixed footer or tab bar.
  - **Every box:** cards, the Coach card, tip cards, panels, sheets and dialogs are 16 inside on all four sides (`--spacing-16`). A row group is a tight nest: 4 inset (`--spacing-4`) plus 12 inside each row (`--spacing-12`), so its content also sits 16 in.
- **Phone:** 16 gutter, 32 between sections, 48 between the coach question and its answers. On the Coach card the question sits 40 below the 44 high progress row.
- **Groups:** 8 inside a group, 24 between related groups.
- **4/8 rhythm:** every gap and padding is a spacing token, so a multiple of 4 (2 only for a chevron-to-label nudge or a tight-nest inset, 1 for hairlines). No 6, 10 or 14 anywhere, on screens or boards: a label above its control is 8 apart, a heading above its description is 8, a table row is 12 top and bottom, a chip or segment is 16 at the sides.
- **Touch targets:** at least 44 × 44 (`--spacing-touch`), even when the visible control is smaller: chips are 40 high inside a 44 target, a toast's action is a 44 high slot, Skip is min 44 × 44, the top bar's Back and Close slots are 96 × 44, and the switch sits in a 44 target. Adjacent targets are at least 8 apart, measured between targets, not between visible edges.
- **Chip collections** (answers, categories, tags) use a 12 gap in both directions, so two 44 targets around 40 high chips keep 8 between them. They wrap before a label shrinks.
- **Inline links (exception):** links inside a sentence, like Terms and Privacy Policy under the sign-in buttons, keep their text size (Caption, 18 line). Each gets a 44 high tap area, 13 above and 13 below the line, running 4 past each end of the words and never under 44 wide; neighbouring areas stay 8 or more apart and clear of other targets. WCAG 2.5.8 exempts inline links; HLD gives them 44 anyway. The area is a build spec, drawn on the Theme board "Components: product" under Sign in, never on a screen.
- **Safe area:** a tab bar or a footer ends with `--spacing-safe-bottom` (34) under its last row, so nothing tappable sits on the home indicator. A toast floats 16 above the tab bar (bottom 113 on a 390 × 844 screen) or 16 above a footer.
- **Breakpoints:** phone 390, tablet 768, desktop 1280. Containers: coach content max 560, page content max 1200.
- **Repeated rows** use fixed-width lanes for icons, amounts and chevrons, so columns align across rows.

## Elevation & Depth

Most surfaces sit flat with a 1px Cream 200 edge. Shadow marks only what is lifted above the page.

| Level | Use | Shadow |
|---|---|---|
| 0 Flat | Cards, row groups | none; 1px `--color-border-subtle` |
| 1 Lifted | Selected segment, dragged row | `0 1px 2px` and `0 4px 12px`, both Brown 900 at 6% |
| 2 Floating | Sheets, toasts, menus, dialogs | `0 2px 6px` Brown 900 at 8%, `0 12px 32px` Brown 900 at 14% |

In Paper and in code the shadow colour is `color-mix(in srgb, var(--color-brown-900) 6%, transparent)`, never a hex value.
| Scrim | Behind a sheet | Brown 900 at 40% (`--opacity-scrim`) |

## Shapes

Cap outer, square inner: small, consistent corners, 6 at most.

| Token | Value | Use |
|---|---|---|
| `--radius-none` | 0 | An element flush with a container's edge; the container clips it |
| `--radius-sm` | 2 | Inside a container: segments, Coach card chips and buttons, pressed rows, buttons in cards and dialogs, skeleton bars, plots, progress bars |
| `--radius-md` | 4 | Standalone controls on the page: buttons, choice chips, chip tracks, the tab-bar selection, inline notices, highlighted rows |
| `--radius-lg` | 6 | Containers, the maximum: cards, the Coach card, sheets (top corners), dialogs, toasts, row groups, inputs, segmented tracks |
| `--radius-full` | 999 | Circles only: switch tracks and knobs, budget rings, pay-date circles, radio and legend dots |

**Outer = inner + padding**, where the padding is the distance between the two edges.

- **Tight nests (padding 4 or less) follow it exactly:**
  - Segmented track 6, inset 4, segment 2.
  - Input 6, inset 4, button inside 2 (the invite link's Copy).
  - Row group 6, inset 4, pressed row 2.
  - Chip track 4, inset 2, chip 2.
  - Switch track full, inset 3, knob full (11 + 3 = 14 = half the 28 height, so the track stays round).
- **Padded containers (padding more than 4) cap the outer radius at 6.** Everything inside takes 2, or 0 where it meets the container's edge.
  - Coach card 6, padding 16: chips and buttons 2 (uncapped it would be 18).
  - Card 6, padding 16: a plot inside 2, a footer band flush with the edge 0, clipped by the card.
  - Dialog and sheet 6, padding 16: buttons 2.

The padding is measured from the outer edge. A track or row group draws its 1px edge as an inset shadow (`inset 0 0 0 1px var(--color-border-subtle)`), so the 4 inset is exactly 4. A dashed edge cannot be a shadow, so the disabled segmented track keeps a 1px dashed border with 3px padding: still 4 from the outer edge.

Icons: outline only, 24 grid with a 20 live area, 1.5 stroke (1.75 at 16px), round caps and joins, 2 radius on corners, no fills or duotone. Sizes are three tokens, implemented as CSS custom properties beside the motion tokens: `--icon-lg` 24 (tab bar, top bar chevron, list rows), `--icon-md` 20 (buttons, toasts, inline notices, sign-in marks, spinners), `--icon-sm` 16 (inline with 13 and 14px text: chip checks, the record row's clock). No other sizes. Spinners follow the icon stroke: 1.5 at 20. Strokes are tokens, never hex: `--color-text-primary` when active, `--color-text-secondary` at rest, `--color-text-inverse` on the Coach card. **Brand marks are exempt:** the solid Apple logo and Google's G on the sign-in buttons follow their owners' rules, not the 1.5 outline rule, and the build uses each official mark unaltered. Core set: Coach (speech bubble with pause bars), Tracker, Practice, You, Journal, Leagues, Search, Add, Remind, Settings, Done, Close. Utility: Chevron, Alert, Held (clock). Every icon has a text label.

## Components

Controls are drawn in all their states on the Paper board "Components & states"; the pieces specific to Coach, Tracker and Practice are on "Components: product". Hover applies on the web only; on a phone the pressed state carries the same change. Every text node is bound to a text role token; none is set to a raw colour.

### Buttons

- 48 high, `--radius-md` on the page and `--radius-sm` inside a card, sheet or dialog, Button type (16/20/600). One primary per screen. Coach answer buttons are 52 high.
- **Primary:** accent fill, on-accent text. Hover and pressed use accent-pressed; pressed also scales to 0.97.
- **Secondary:** 1.5px Brown 500 outline. Hover Cream 100, pressed Cream 150 with a Brown 700 outline.
- **Ghost:** underlined label (offset 4). Hover Cream 100, pressed Cream 150.
- **Focus:** 2px ring in `--color-focus-ring` with a 2px gap in the surface colour.
- **Disabled:** Cream 150 fill or Cream 200 outline with disabled text, always with a written reason next to it (for example, "Add 2 more characters to your password first."). It is marked disabled for assistive tech (`aria-disabled="true"`), stays in the focus order so the reason, tied with `aria-describedby`, is read out, and ignores taps. Colour is never the only sign: the reason is there in words. Buy anyway is never disabled.
- **Loading:** a spinner and a short verb ("Saving") at the same width; taps are ignored until it finishes.
- **Remind me / Buy anyway:** the same size, stacked, both always visible. Remind is primary and Buy anyway is secondary; Buy anyway is never made smaller, fainter or lower-contrast. Principle 4 holds the four rules.

### Chips (if used)

Coach answers and journal tags (Planned / FOMO). 40 high in a 44 target, `--radius-md` on the page and `--radius-sm` on the Coach card. Default has a 1.5px Brown 500 outline. Selected uses accent-subtle fill, an accent outline and a check icon. Pressed is Cream 150 with a Brown 700 outline. Focus uses the ring. Disabled uses a Cream 200 outline with disabled text.

### Cards / Containers

- `--radius-lg`, 16 padding, Cream 50 on a Cream 200 edge. A card is tappable only when the whole card leads somewhere: pressed is Cream 150 with a Cream 300 edge, and focus uses the ring.
- **Error** state: an alert icon, a sentence saying what failed and that nothing was lost, and a Try again secondary button.
- **Budget ring:** 72px, 8 stroke. The track is Cream 200 and the progress is accent. It fills clockwise from 12 o'clock as money is spent, and the amount left is always shown beside it ("$142 left · of $300 · payday in 6 days").
- **Coach card:** see below.

### Coach card

The only dark surface. Brown 900, `--radius-lg`, 16 padding on all four sides, like every box. Drawn at phone width, 358. Top to bottom:

| Part | Spec |
|---|---|
| Progress and Skip | 44 high row. "1 of 3" in Caption, Cream 300, tabular. Skip is an underlined Label in Cream 75 with a 44 target. |
| Item and price | Caption, Cream 300, 40 below the progress row: "Wireless earbuds · $129.99". |
| Question | Serif display 44/46, Cream 75, 8 below the item. One question per card, broken by hand between phrases. |
| Fact (optional) | Body large, Cream 300: "You have $142 left for fun until payday on November 27." |
| Answer chips | 32 below. 40 high at `--radius-sm` with a 1.5 Cream 300 outline. Selected: Brown 800 fill, Cream 75 outline and a check. |
| Remind me / Buy anyway | 40 below. 52 high, 12 apart, `--radius-sm`. Remind me: `--color-accent-inverse` with `--color-on-accent-inverse`. Buy anyway: 1.5 `--color-border-control-inverse` outline, Cream 75 label. |
| Fine print | 16 below. Caption, `--color-text-inverse-tertiary` (6.30:1): "General information, not personalized advice." Every Coach card carries it. |

**Pressed and focus** (drawn on "Components & states", Coach card): pressed is scale 0.97 for 100 ms and one step darker; Remind me goes to `--color-accent-inverse-pressed` (Cream 150), while Buy anyway and answer chips fill `--color-accent-inverse-subtle` (Brown 800) and keep the Cream 300 outline. Focus is a 2px `--color-focus-ring-inverse` ring with a 2px gap in Brown 900; Skip takes an inset ring inside its 44 target. Both doors get the same treatment, and Buy anyway is never disabled, dimmed or locked.

States: **default**; **next question** (progress advances, the previous answer is recorded, the next question rises in); **loading** (the question, the budget-table lanes and the chips become `--color-skeleton-inverse` bars with the `--color-skeleton-inverse-shimmer` band, a Cream 300 caption says "Getting the next question. Both buttons below still work.", and both buttons stay live); **error** (alert icon and "The next question didn't load. Your first answer is saved." in Body large, a 44 high Try again outline, both buttons still live). Skip moves on without an answer; after the third question or three skips, only the two buttons remain.

### Inputs / Fields

- The label sits above the field, never inside. The field is 52 high, Cream 100, with a 1.5px Brown 500 outline and `--radius-lg`. Money fields show a "$" prefix and tabular figures.
- **Focus:** Cream 50 fill, a 1.5px Brown 900 border, and a 3px Cream 200 halo.
- **Disabled:** dashed Cream 300 outline, disabled text, and a reason underneath.
- **Error:** a 2px `--color-state-error` border, an alert icon, and a sentence that says how to fix it ("Enter an amount above $0."). It never depends on colour alone and never shakes.
- **Helper and error placement:** helper text and errors sit 8 under their own field in Caption, never at the top of the form or in a toast, and are tied to the field with `aria-describedby`. Live counts read as a sentence ("At least 10 characters. 8 so far."). When a footer button is disabled by a field, its reason sits under the button and names the field ("Add 2 more characters to your password first.").

### Navigation

- **Tab bar:** Coach, Tracker, Practice, You. Always labelled, 24 icons, Caption labels (13/18). Cream 50 with a Cream 200 top edge, 8 top and sides, `--spacing-safe-bottom` (34) under the labels. Each tab is a quarter of the width and 54 high (block 32, 4, label 18). The selected tab gets a Cream 150 block (56 × 32, `--radius-md`) behind its icon, a 600 label and Brown 900 icon and label; the others are 500 labels and icons in Brown 700 (8.07:1 on Cream 50). Pressed shows a Cream 100 block, and focus a 2px ring around the tab. No badges or dots. Pages reached from You (Check-in settings) keep You selected.
- **Segmented control:** Cream 100 track, `--radius-lg`, 4 inset with the edge as an inset shadow. The selected segment is Cream 50 at `--radius-sm` with level-1 elevation. Labels are Label (14). Pressed is Cream 150, focus a 2px ring on the segment, and disabled a dashed track (1 border + 3 padding) with disabled text.
- **Top bar:** 56 high on the page colour with a Cream 200 bottom edge, 4 at the sides. Back is a 96 × 44 slot: a 24 chevron, 2, then the previous place's name in Body ("Coach", "You", "Sign up") or "Back" inside a flow. The middle holds Title 3, centred, or the step counter. The right slot is 96 × 44, empty or holding one text action in Body, right-aligned 12 in so it lands on the 16 content edge (Close, Save). Focus puts a 2px ring around the slot.
- **Back and Close in a flow:** inside a multi-step flow, Back goes to the previous step and keeps every answer; Close leaves the flow without deciding and returns to where it started, with nothing logged and no confirmation. The check-in (questions 1 to 3, Your call, its loading and error states) has both. A flow's first step, a single-screen task (the check-in entry, the follow-up, the budget check-in) and onboarding keep Back only: onboarding has no "leave without deciding", since the birth year is required and Pay dates carries its own Skip for now.
- **Step counter:** a flow of three or more screens that aren't questions on the Coach card shows "Step n of N" in Caption 500, `--color-text-tertiary` (Brown 600, 5.72:1), tabular, centred in the top bar in place of a title (onboarding: Birth year, Consent, Pay dates). The Coach card keeps its own "1 of 3" in its progress row, so the check-in's top bar says "Check-in".

### Switch and consent

- **Switch:** 48 × 28 inside a 44 target, knob 22. Off (the default for anything that shares data or sends a message): Cream 100 track with a 1.5 Brown 500 inset edge and a Brown 500 knob on the left. On: accent track, Cream 75 knob on the right. Pressed: Cream 150 track with a Brown 700 edge and the knob stretched to 28. Focus: the 2px ring with a 2px gap. Disabled: dashed Cream 300 track and a Brown 400 knob, with a written reason.
- **Consent rows:** one purpose per row in a row group, each with a Body 500 name, a Caption that says exactly what is used and why, and a switch, all off until turned on. Under the group: "No ads, and nothing is sold. Change any of these in You › Privacy."

### List row

64 high inside a row group (`--radius-lg`, 4 inset, edge as an inset shadow). Fixed lanes, in order: name with a detail line, a right-aligned tabular amount, and a 20px chevron. Pressed is Cream 150 at `--radius-sm`; focus is a 2px inset ring.

### Check-in record (signature)

Every check-in and every trade becomes one line, in Item | Price | Status columns at width 87.5. A held item changes state in place: "Held · ask again Nov 18" becomes "Bought Nov 18" or "Let go Nov 18". It never disappears, and no outcome is styled as the better one: only Held carries an icon (the clock, because it is waiting); Bought and Let go are text only, with an empty 16 icon lane so the status column still aligns. Trades follow the same pattern in the journal: Date, Symbol, Side, Shares, Price CAD, Return, Tag.

The whole row is one target (pressed Cream 150 at `--radius-sm`, focus a 2px inset ring) and opens the check-in again, which carries whatever its toast offered: **Change when we ask** on a held item, **Remove from Tracker** on a bought one. A row that just changed tints Cream 150 and settles over 600.

### Toast

Brown 900, `--radius-lg`, level-2 elevation, 16 from each side and 16 above the tab bar (or footer). A 20 icon, one line of Table text, and at most one underlined Label 600 action (Undo, Change, Retry) in a 44 high slot, 12 at its sides. Padding 12 top and bottom, 16 left, 8 right, so every toast is 68 high. Kinds: confirmation, error, loading. It is announced politely and never takes focus.

| Phase | Spec |
|---|---|
| Enter | Rises 8 and fades in. `--duration-state` (220), `--ease-out` |
| On screen | 5 s with no action; 8 s with an action. While a finger is on the toast, or its action has keyboard focus, the clock stops; it starts again from the full time on release |
| Exit | Fades out in place. `--duration-exit` (160), `--ease-in`. A new toast waits for the old one to leave; toasts never stack |
| Reduced motion | No rise; fades in and out over 120. Time on screen is unchanged |
| Loading | Stays until the work ends, then becomes a confirmation or an error in place |

**The action is never only in the toast.** Undo, Change and Retry are a shortcut; the same action opens from the check-in's record row (Change when we ask, Remove from Tracker) or from the screen that failed (Try again). Missing a toast loses nothing. Drawn on Theme "Components & states" (Toast, Timing) and on "Coach · Motion" (section 5).

### Skeleton loader

The same shapes and lanes as the content it replaces, at `--radius-sm`. On light surfaces the shapes are `--color-skeleton` (Cream 150) with a `--color-skeleton-shimmer` (Cream 100) band; on the Coach card they are `--color-skeleton-inverse` (Brown 700, 2.14:1) with a `--color-skeleton-inverse-shimmer` (Brown 600) band. The band sweeps left to right every 1.4 s. After 8 s the skeleton is replaced by a sentence and a retry.

### Product components (board "Components: product")

All drawn at 358 (390 for the top bar), on the same tokens.

- **Daily tip card:** a light card, never a second dark one. Title 3 tip and a Body explanation in Brown 700. It carries no fine print: the line appears once per coach screen, on the Coach card. Loading is a skeleton; after 8 s the card hides itself and leaves no gap or error.
- **Skipped total:** Label "Skipped total", Figure XL amount, "+ $129.99 today" in Label when it just changed, and "Money not spent, not money saved." in Caption in every state. Empty shows $0.00 in Brown 600 with "When you hold off on something, its price shows up here."
- **Charts:** a 44 wide Y lane (Caption at width 87.5, tabular, right-aligned, one line) and a 282 wide plot. Zero is a 1.5 Brown 700 line and its label is 600 Brown 900; the band below zero is filled with `--color-state-bg`; gridlines are Cream 200. The line is 2px accent with the latest point filled. Scales are fixed, $2,000 either side of zero for net worth and 10% for practice returns, and widen only when a value passes them. The practice chart plots % return so its zero is the starting $10,000, and carries "Quotes delayed 15 minutes. Past returns are not a forecast." States: one point so far (a sentence explains when the line starts) and couldn't load (the chart pauses at its last date, holdings unchanged, Try again).
- **Budget ring, standalone:** 96, 10 stroke, Cream 200 track and accent fill from 12 o'clock as money is spent. Beside it: the category in Label, the amount in Title 2 ("$142 left", "$0 left", "$18 over") and "of $300 · payday in 6 days" in Caption. Over budget is a full ring with a short Cream 50 notch marking the overlap, stated in words, never in an alarm colour. Loading is a Cream 150 ring and bars.
- **Date and pay-date picker:** month header with 44 chevron targets, Sun-first weekday row in Caption, 44 day cells in Table. Pay dates are a 36 accent circle with Cream 75 figures; today is a 1.5 Brown 900 ring; focus is the 2px ring with a gap. A legend and a sentence sit under the grid: "Every other Friday · next payday Nov 27".
- **Category picker:** single-choice chips that wrap, plus a dashed "New category" chip. Nothing is preselected.
- **Search:** the input pattern with a search icon and a 44 clear target. Results sit in a row group at width 87.5: symbol (600) over "Company · exchange · currency", and a 96 lane with the price in its listing currency over ▲/▼ change. "Quotes delayed 15 minutes" sits once above the list. States: default, typing with results, loading (skeleton rows), no results ('No match for "shopfy". Try the company name, or a ticker like SHOP.TO for Shopify on the TSX.'), and error ("Search isn't responding. Check your connection, then try again." with Try again).
- **Share quantity:** the input pattern with a "shares" suffix and four decimals. Focus shows the CAD estimate including the FX fee under the field. Error: "Enter at least 0.0001 shares." Disabled while the quote loads, with that reason.
- **Order summary:** Title 3 "Buy 0.4200 AAPL", one plain sentence on what the company does, then rows at width 87.5: price per share (15 min delayed), exchange rate, cost in CAD, FX fee with its rate, Total in CAD (600, above a Cream 300 rule), share of the portfolio after. Closes with "Fake money. No per-trade fee."
- **Text area:** the input pattern at 112 high for the trade plan. Optional, saved with the trade, with a tabular counter to 280. At the limit typing stops and nothing is cut.
- **TFSA room:** Label and year, the amount left in Title 3, an 8px bar at `--radius-sm` (Cream 200 track, accent fill as room is used) and "$5,760 used of $7,000 · fake money". All used: "$7,000 used · new room on January 1, 2027".
- **Inline notice:** `--color-state-bg` tint, `--radius-md`, a 20 icon and Table text in Brown 900. Information ("Practice uses fake money. Nothing here touches a real account.") has no edge; a warning adds a 1.5 `--color-state-warning` inset edge and a bold first sentence ("This order is $1,580. You have $1,240 of TFSA room left.") followed by the way out.
- **Leaderboard rows:** 48 high at width 87.5 with fixed lanes: a 24 right-aligned rank, the display name, and a 96 right-aligned tabular % return with ▲ + / ▼ −. Your row is Cream 150 at `--radius-md` and 600. No trophies, medals, crowns or colour for first place. Footer: "Fake money · free to join · the prize is bragging rights."
- **Invite link:** a read-only field showing the end of the link and a 104 wide Copy primary. Copied keeps the width, adds a check and returns after 2 s. Error: "Your browser blocked copying. Press and hold the link to copy it yourself."
- **Bottom sheet:** `--radius-lg` top corners, 16 padding, level-2 elevation over the scrim, a 36 × 4 Cream 300 handle, Title 2 heading, radio rows, a primary and an underlined Cancel.
- **Dialog (deletion only):** `--radius-lg`, 16 padding, buttons inside at `--radius-sm`, level 2 over the scrim. "Delete your account?", a list of exactly what goes, "It's gone from our servers within 30 days and can't be undone.", then Delete my account (primary, `--color-state-error`), Keep my account (secondary) and an underlined "Download my data first".
- **Auth buttons:** three 52 high buttons with a 1.5 Brown 500 outline on Cream 50, `--radius-md`, 12 apart, Apple first, then Google, then email. Each has a 20 mark in a fixed left lane, a centred Button label "Continue with …", and an empty 20 lane on the right so the label centres on the button. The marks are the official ones, unaltered: Apple's logo and its label in `--color-brand-apple`, Google's four-colour G in the `--color-brand-google-*` tokens, and the email envelope as an ordinary 1.5 outline icon. Pressed (Cream 150), focus (the 2px ring with a gap), loading ("Opening Google" with a 1.5 spinner; the other two stay usable) and an error line under the group. Under the buttons, the legal line follows the inline-link exception in Layout.
- **Birth-year gate:** a 140 wide numeric field, "What year were you born?", "Only the year. It decides which features you see." Error: "Enter a four-digit year, like 2004." Under 18 gets an information notice listing what is open to them.
- **Empty states:** a card with a Title 3 that names the state, one sentence on what will appear and why, and the single primary that makes it appear: "No trades yet" / Find a stock; "Just you in here" / Copy invite link; "No subscriptions logged" / Add a subscription; "$10,000.00 in cash" / Find a stock. No illustration, no mascot.
- **Empty states name the action.** Every empty state says what to do to fill it, in its own words, even where its button lives elsewhere on the screen. A screen still has one primary: when the action is already on screen, the empty state points to it instead of repeating it. First-run "Your check-ins" on Coach: "Start a check-in above and it becomes one line here: what it was, the price, and what you decided." First-run Skipped total: $0.00 in Brown 600 and "When you hold off on something, its price shows up here."

### Motion

| Token | Value |
|---|---|
| `--duration-press` | 100ms |
| `--duration-exit` | 160ms |
| `--duration-state` | 220ms |
| `--duration-enter` | 320ms |
| `--duration-figure` | 600ms |
| `--duration-shimmer` | 1400ms, linear loop |
| `--ease-out` | `cubic-bezier(0.22, 1, 0.36, 1)`: arrivals and responses; the default |
| `--ease-in-out` | `cubic-bezier(0.65, 0, 0.35, 1)`: movement from one place on screen to another |
| `--ease-in` | `cubic-bezier(0.4, 0, 1, 1)`: leaving only |

| Change | Movement | Timing | Communicates | Reduced motion |
|---|---|---|---|---|
| Next coach question | Answered question rises 16 and fades; the next rises in from 16 below | 320 ease-out, exit 160 ease-in | You moved forward; one question at a time | Crossfade 120 |
| Held item resolves | Status and icon crossfade in place; the row tints Cream 150, then settles over 600 | 220 ease-in-out | Same item, new outcome; nothing deleted | Instant swap; tint holds 1 s |
| Skipped total changes | Figures roll to the new value; "+ $129.99" appears beside it | 600 ease-out | Exactly how much this decision added | Value swaps; delta still shown |
| Budget ring updates | Arc grows from the old value to the new, clockwise | 600 ease-out | How much of this pay period was used | Drawn at the final value |
| Press | Scale 0.97 and darken one step; returns with no overshoot | 100 ease-out | The tap registered | Colour only |
| Chip or segment selected | Pill slides to the new segment; the check draws in | 160 ease-in-out | Answer recorded; the other option is still there | Instant |
| Sheet | Slides up; scrim fades to 40%; closes downward | 320 ease-out, close 160 ease-in | A focused task on top; your place is kept | Fade 120 |
| Toast | Rises 8 and fades in; holds; leaves by fading | 220 ease-out; holds 5 s, 8 s with an action, paused while touched; exit 160 ease-in | Saved or not; the action stays on the record row | Fade 120, no rise; same hold |
| Field error | Border thickens to 2; the message fades in. No shake | 160 ease-out | What's wrong and where | Instant |
| Skeleton | Cream 100 band sweeps across Cream 150 shapes | 1400 linear loop | Still loading; this is the shape of what's coming | Static, no sweep |

Paper has no token type for shadows, durations or easing, so these values live here and on the Motion and Spacing & radii boards. Implement them as CSS custom properties alongside the Paper tokens.

## Do's and Don'ts

### Do:

- Give the coach question its own card in the serif (Serif display), 40 below the progress row.
- Put "fake money", "Quotes delayed 15 minutes" and "an assumption, not a promise" next to the number they qualify.
- Use ▲ + / ▼ − with tabular figures for every gain and loss.
- Keep the fine print "General information, not personalized advice." once per coach screen, in Caption on the Coach card (`--color-text-inverse-tertiary`). The daily tip card does not repeat it.
- Recheck every accent and state pair against AA when the accent is chosen.

### Don't:

- Don't make Buy anyway smaller, fainter or further away than Remind me, add a confirmation after it, or lock it while Remind me saves.
- Don't draw Buy anyway's Coach-card outline in Brown 500; it is `--color-border-control-inverse`.
- Don't mark first place in a league with a trophy, medal, crown or colour, and don't style one check-in outcome as the better one.
- Don't set a colour or a radius as a raw value in Paper or code, SVG strokes included; bind it to a token.
- Don't round a container past 6, or use `--radius-full` on anything that isn't a circle.
- Don't set the serif below 28px, or use it for figures, tables, buttons, inputs, labels or body.
- Don't use streaks, countdowns, badges, red dots, confetti, bounces or shakes.
- Don't use Brown 500 for text, or put text on Cream 200 or darker light steps.
- Don't add sports-page ornament (heavy rules, dingbats, all-caps headlines) to the dense tables. Their character comes from column rhythm alone.
- Don't use "advisor", "assistant", "bet", "wager", "jackpot" or "win cash" anywhere.
