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
  state-gain: "#453023"
  state-loss: "#453023"
  state-warning: "#614734"
  state-error: "#1E120C"
  state-bg: "#EDE5D9"
typography:
  display:
    fontFamily: "Archivo, system-ui, sans-serif"
    fontSize: "36px"
    fontWeight: 600
    lineHeight: "42px"
    letterSpacing: "-0.02em"
  figure-xl:
    fontFamily: "Archivo, system-ui, sans-serif"
    fontSize: "48px"
    fontWeight: 600
    lineHeight: "52px"
    letterSpacing: "-0.02em"
  title-1:
    fontFamily: "Archivo, system-ui, sans-serif"
    fontSize: "28px"
    fontWeight: 600
    lineHeight: "34px"
    letterSpacing: "-0.01em"
  title-2:
    fontFamily: "Archivo, system-ui, sans-serif"
    fontSize: "22px"
    fontWeight: 600
    lineHeight: "28px"
    letterSpacing: "-0.01em"
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
  xs: "4px"
  sm: "8px"
  md: "12px"
  lg: "16px"
  xl: "20px"
  2xl: "36px"
  pill: "999px"
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
components:
  button-primary:
    backgroundColor: "{colors.accent}"
    textColor: "{colors.on-accent}"
    typography: "{typography.label}"
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
    rounded: "{rounded.md}"
    height: "52px"
    padding: "0 16px"
  chip:
    backgroundColor: "{colors.surface-page}"
    textColor: "{colors.text-primary}"
    rounded: "{rounded.pill}"
    height: "40px"
    padding: "0 16px"
  chip-selected:
    backgroundColor: "{colors.accent-subtle}"
    textColor: "{colors.text-primary}"
  card:
    backgroundColor: "{colors.surface-raised}"
    rounded: "{rounded.xl}"
    padding: "16px"
  coach-card:
    backgroundColor: "{colors.surface-inverse}"
    textColor: "{colors.text-inverse}"
    rounded: "{rounded.2xl}"
    padding: "24px"
  list-row:
    backgroundColor: "{colors.surface-raised}"
    textColor: "{colors.text-primary}"
    rounded: "{rounded.md}"
    height: "64px"
  segmented-track:
    backgroundColor: "{colors.surface-sunken}"
    rounded: "{rounded.md}"
    padding: "4px"
  segmented-segment-selected:
    backgroundColor: "{colors.cream-50}"
    rounded: "{rounded.sm}"
    height: "36px"
  toast:
    backgroundColor: "{colors.surface-inverse}"
    textColor: "{colors.text-inverse}"
    rounded: "{rounded.lg}"
  tab-bar:
    backgroundColor: "{colors.surface-raised}"
    textColor: "{colors.text-secondary}"
---

# Design System: HLD Finance

The source of truth is the Paper file **Bright olive**, page **Theme**, with seven artboards: Principles, Colour roles, Typography, Spacing & radii, Components & states, Icons, Motion. Tokens in that file match the frontmatter above. Accent and state values are provisional and point into the cream and brown ramp until Aariz chooses the accent.

## Overview

HLD is a pause before a purchase or a trade. The coach asks a question, shows the facts, and steps aside; the person decides. The interface is cream and brown, set in one family (Archivo) at two widths: full width and generous spacing where the coach talks, 87.5% width and tight rows where people compare numbers. The Coach check-in is the hero: the most room, the largest type, and the only dark card on any screen.

Platform: phone-first at 390×844, scaling up to desktop web. Light mode only for now.

### Principles

1. **Coach first.** The check-in gets the most room, the largest type and the only dark card on the screen.
2. **Ask, don't advise.** Coach copy is a question or a fact. It never says buy, sell, should, or advisor. It is "financial help".
3. **Both doors open.** The coach never blocks. Buy anyway sits beside Remind me, the same size, always visible, with no guilt in the label.
4. **Facts in tabular figures.** Comparable numbers line up on the digit. Gain is ▲ and +, loss is ▼ and a true minus (U+2212); colour is never the only cue.
5. **Honest labels.** The label sits next to the number: "fake money", "money not spent, not money saved", "an assumption, not a promise".
6. **Calm by default.** No streaks, countdowns, badges or red dots. One follow-up per purchase, check-ins can be switched off, and motion only marks a change of state.
7. **Dense to compare, roomy to decide.** Journal, leagues, holdings and subscriptions are tight tables in narrow figures. Coach screens get one question, wide type and open space.

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

### Primary (accent, provisional)

| Slot | Token | Current value | Pair | Ratio |
|---|---|---|---|---|
| Primary fill, selected tab, ring progress | `--color-accent` | Brown 900 | Cream 75 text on it | 17.30 |
| Pressed primary | `--color-accent-pressed` | Brown 800 | Cream 75 text on it | 11.67 |
| Selected chip or segment | `--color-accent-subtle` | Cream 150 | Brown 900 text on it | 14.66 |
| Text on accent | `--color-on-accent` | Cream 75 | | |

When the accent arrives, change these four tokens only, and recheck each pair against AA.

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

## Typography

One family: **Archivo** (Google Fonts, variable weight 100–900 and width 62–125). Weights in use: 400, 500, 600.

- **Width 100** for the coach, body copy, titles and buttons.
- **Width 87.5** (`font-stretch: 87.5%`) for tables: journal, leagues, holdings, subscriptions, ramp captions and token names. This fits five columns across a 390 phone at 14px.
- **Tabular figures everywhere numbers meet:** set `font-variant-numeric: tabular-nums` on every figure, not only tables. Right-align columns of money. Amounts keep two decimals; share quantities keep four.
- **Signs:** ▲ + for gain, ▼ − (U+2212) for loss, `0.00%` with no arrow for flat.

### Hierarchy

| Style | Size / line | Weight | Tracking | Use |
|---|---|---|---|---|
| Display | 36 / 42 | 600 | −0.02em | The coach question, one per screen |
| Figure XL | 48 / 52 | 600 | −0.02em, tabular | Skipped total, portfolio value |
| Title 1 | 28 / 34 | 600 | −0.01em | Screen titles |
| Title 2 | 22 / 28 | 600 | −0.01em | Section titles |
| Title 3 | 18 / 24 | 600 | −0.01em | Card titles |
| Body large | 18 / 28 | 400 | 0 | Coach explanations and answers |
| Body | 16 / 24 | 400 | 0 | Default copy |
| Label | 14 / 20 | 500 | 0.01em | Buttons, chips, field labels |
| Caption | 13 / 18 | 400 | 0.01em | Timestamps, "Quotes delayed 15 minutes", fine print |
| Table | 14 / 20 at width 87.5 | 400, 600 for symbols | 0 | Dense rows |

### Named Rules

- No italics, no small caps, no all-caps labels, no monospace. Headings carry their own weight without a kicker above them.

## Layout

- **Spacing:** 4px base. Tokens: 1 (hairline), 2, 4, 8, 12, 16, 20, 24, 32, 40, 48, 64, 80, and 44 (touch).
- **Phone:** 16 gutter, 32 between sections, 40 above a screen title, 80 above the coach question, 48 between the question and its answers.
- **Groups:** 8 inside a group, 24 between related groups.
- **Touch targets:** at least 44 × 44, even when the visible control is smaller (chips are 40 high inside a 44 target).
- **Breakpoints:** phone 390, tablet 768, desktop 1280. Containers: coach content max 560, page content max 1200.
- **Repeated rows** use fixed-width lanes for icons, amounts and chevrons, so columns align across rows.

## Elevation & Depth

Most surfaces sit flat with a 1px Cream 200 edge. Shadow marks only what is lifted above the page.

| Level | Use | Shadow |
|---|---|---|
| 0 Flat | Cards, row groups | none; 1px `--color-border-subtle` |
| 1 Lifted | Selected segment, dragged row | `0 1px 2px rgb(30 18 12 / 0.06), 0 4px 12px rgb(30 18 12 / 0.06)` |
| 2 Floating | Sheets, toasts, menus | `0 2px 6px rgb(30 18 12 / 0.08), 0 12px 32px rgb(30 18 12 / 0.14)` |
| Scrim | Behind a sheet | Brown 900 at 40% (`--opacity-scrim`) |

## Shapes

| Token | Value | Use |
|---|---|---|
| `--radius-xs` | 4 | Skeleton bars, images inside cards |
| `--radius-sm` | 8 | Segments inside a track |
| `--radius-md` | 12 | Buttons, inputs, segmented track, pressed rows |
| `--radius-lg` | 16 | Row groups, toasts |
| `--radius-xl` | 20 | Cards |
| `--radius-2xl` | 36 | Coach card, bottom sheets |
| `--radius-pill` | 999 | Choice chips, switches |

**Inner radius = outer radius − padding.** Worked examples:
- Coach card 36, padding 24 → buttons inside at 12.
- Segmented track 12, inset 4 → segment at 8.
- Row group 16, inset 4 → pressed row at 12.
- Card 20, padding 16 → chart or image inside at 4.

If the result is 4 or less, use `--radius-xs`.

Icons: outline only, 24 grid with a 20 live area, 1.5 stroke (1.75 at 16px), round caps and joins, 2 radius on corners, no fills or duotone. Sizes 24 (tab bar, rows), 20 (buttons, toasts), 16 (inline with 13px text). Brown 900 when active, Brown 700 at rest, Cream 75 on the Coach card. Core set: Coach (speech bubble with pause bars), Tracker, Practice, You, Journal, Leagues, Search, Add, Remind, Settings, Done, Close. Utility: Chevron, Alert, Held (clock). Every icon has a text label.

## Components

Every component is drawn in all its states on the Paper board "Components & states". Hover applies on the web only; on a phone the pressed state carries the same change.

### Buttons

- 48 high, `--radius-md`, label 16/600. One primary per screen. Coach answer buttons are 52 high.
- **Primary:** accent fill, on-accent text. Hover and pressed use accent-pressed; pressed also scales to 0.97.
- **Secondary:** 1.5px Brown 500 outline. Hover Cream 100, pressed Cream 150 with a Brown 700 outline.
- **Ghost:** underlined label (offset 4). Hover Cream 100, pressed Cream 150.
- **Focus:** 2px ring in `--color-focus-ring` with a 2px gap in the surface colour.
- **Disabled:** Cream 150 fill or Cream 200 outline with disabled text, always with a written reason next to it (for example, "Enter an amount first").
- **Loading:** a spinner and a short verb ("Saving") at the same width; taps are ignored until it finishes.
- **Remind me / Buy anyway:** the same size, stacked, both always visible. Remind is primary and Buy anyway is secondary; Buy anyway is never made smaller, fainter or lower-contrast.

### Chips (if used)

Coach answers and journal tags (Planned / FOMO). 40 high in a 44 target, pill. Default has a 1.5px Brown 500 outline. Selected uses accent-subtle fill, an accent outline and a check icon. Pressed is Cream 150 with a Brown 700 outline. Focus uses the ring. Disabled uses a Cream 200 outline with disabled text.

### Cards / Containers

- `--radius-xl`, 16 padding, Cream 50 on a Cream 200 edge. A card is tappable only when the whole card leads somewhere: pressed is Cream 150 with a Cream 300 edge, and focus uses the ring.
- **Error** state: an alert icon, a sentence saying what failed and that nothing was lost, and a Try again secondary button.
- **Budget ring:** 72px, 8 stroke. The track is Cream 200 and the progress is accent. It fills clockwise from 12 o'clock as money is spent, and the amount left is always shown beside it ("$142 left · of $300 · payday in 6 days").
- **Coach card:** Brown 900, `--radius-2xl`, 24 padding, the question in Display, with answers and actions inside at `--radius-md`.

### Inputs / Fields

- The label sits above the field, never inside. The field is 52 high, Cream 100, with a 1.5px Brown 500 outline and `--radius-md`. Money fields show a "$" prefix and tabular figures.
- **Focus:** Cream 50 fill, a 1.5px Brown 900 border, and a 3px Cream 200 halo.
- **Disabled:** dashed Cream 300 outline, disabled text, and a reason underneath.
- **Error:** a 2px `--color-state-error` border, an alert icon, and a sentence that says how to fix it ("Enter an amount above $0."). It never depends on colour alone and never shakes.

### Navigation

- **Tab bar:** Coach, Tracker, Practice, You. Always labelled, 24 icons, 12px labels. The selected tab gets a Cream 150 pill (56 × 32) behind its icon and a 600 label. Pressed shows a Cream 100 pill, and focus a 2px ring around the tab. No badges or dots.
- **Segmented control:** Cream 100 track, `--radius-md`, 4 inset. The selected segment is Cream 50 at `--radius-sm` with level-1 elevation. Pressed is Cream 150, focus a 2px ring on the segment, and disabled a dashed track with disabled text.

### List row

64 high inside a row group (`--radius-lg`, 4 inset). Fixed lanes, in order: name with a detail line, a right-aligned tabular amount, and a 20px chevron. Pressed is Cream 150 at `--radius-md`; focus is a 2px inset ring.

### Check-in record (signature)

Every check-in and every trade becomes one line, in Item | Price | Status columns at width 87.5. A held item changes state in place: "Held · ask again Nov 18" becomes "Bought Nov 18" or "Let go Nov 18". It never disappears, and no outcome is styled as the better one. Trades follow the same pattern in the journal: Date, Symbol, Side, Shares, Price CAD, Return, Tag.

### Toast

Brown 900, `--radius-lg`, level-2 elevation, 16 above the tab bar, with an optional underlined action (Undo, Retry). It stays 5 seconds, longer when it has an action, and pauses while touched. Kinds: confirmation, error, loading.

### Skeleton loader

The same shapes and lanes as the content it replaces, in Cream 150 at `--radius-xs`. A Cream 100 band sweeps left to right every 1.4 s. After 8 s the skeleton is replaced by a sentence and a retry.

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
| Toast | Rises 8 and fades in; leaves by fading | 220 ease-out, exit 160 ease-in | Saved or not; undo is still possible | Fade only |
| Field error | Border thickens to 2; the message fades in. No shake | 160 ease-out | What's wrong and where | Instant |
| Skeleton | Cream 100 band sweeps across Cream 150 shapes | 1400 linear loop | Still loading; this is the shape of what's coming | Static, no sweep |

Paper has no token type for shadows, durations or easing, so these values live here and on the Motion and Spacing & radii boards. Implement them as CSS custom properties alongside the Paper tokens.

## Do's and Don'ts

### Do:

- Give the coach question its own screen at Display size with 80 above it.
- Put "fake money", "Quotes delayed 15 minutes" and "an assumption, not a promise" next to the number they qualify.
- Use ▲ + / ▼ − with tabular figures for every gain and loss.
- Keep the fine print "General information, not personalized advice." on coach screens only, in Caption on the Coach card (`--color-text-inverse-tertiary`).
- Recheck every accent and state pair against AA when the accent is chosen.

### Don't:

- Don't make Buy anyway smaller, fainter or further away than Remind me.
- Don't use streaks, countdowns, badges, red dots, confetti, bounces or shakes.
- Don't use Brown 500 for text, or put text on Cream 200 or darker light steps.
- Don't add sports-page ornament (heavy rules, dingbats, all-caps headlines) to the dense tables. Their character comes from column rhythm alone.
- Don't use "advisor", "assistant", "bet", "wager", "jackpot" or "win cash" anywhere.
