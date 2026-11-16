# HLD Finance design tokens

Source: Paper file "hldfinance.ca", board "Theme UI". Values were read from Paper with get_computed_styles.
Board image: C:\Users\brend\OneDrive\Videos\Media\Testing\HLD Finance\Theme UI.png

Mode: light, plus one dark section style ("Night"). There is no full dark theme yet. On Night, cards stay white with a 2px Ink border.

## Colour

### Primaries
| Token | Hex | Job |
|---|---|---|
| --color-ink | #0E1016 | Text, card borders (2px), secondary-button hover, active tab |
| --color-paper | #FFFFFF | Page ground, card fill |
| --color-indigo | #4B3BF5 | Brand, primary button, links, ghost text, focus ring, success/confirm |
| --color-indigo-hover | #3A2BD9 | Primary hover, ghost hover text |
| --color-indigo-pressed | #2D20B5 | Primary pressed, ghost pressed text, success text |
| --color-indigo-tint | #EEECFF | Ghost hover bg, success field bg, progress track |
| --color-indigo-tint-2 | #DDD9FF | Ghost pressed bg, input focus halo |
| --color-indigo-on-dark | #A99FFF | Italic accent words on Night |

### Accents (one job each, never decoration)
| Token | Hex | Tint | Job |
|---|---|---|---|
| --color-gain | #0A8A4A | #E3F5EA | Money up. ALWAYS with "▲" and "+" |
| --color-loss | #D93A3F | #FDE8E8 | Money down, field errors. ALWAYS with "▼" and "−" (U+2212) |
| --color-coach | #1F8FFF | #E4F1FF | The coach: avatar, question accent, selected answer chip |
| --color-league | #F2601F | #FEEBE1 | Leagues: ranks, streaks, the user's own row (rank text #C2410C on tint) |
| --color-journal | #B03FD1 | #F6E6FB | Trade journal: left bar, tag (tag text #8A2BA6) |

The success state uses Indigo, not Gain. Gain only means money up. No yellow or amber anywhere.

### Neutrals
| Token | Hex | Job |
|---|---|---|
| --color-mist | #F5F5F8 | Quiet section ground, inner panels, range-tab track, chip bg |
| --color-line | #E3E4EA | Dividers, 1px row borders, disabled bg and border |
| --color-field-border | #CFD1DA | Input border, outline chips, chart baseline |
| --color-placeholder | #8B8E9C | Placeholder and disabled text |
| --color-slate | #5B5F6E | Secondary text (6.3:1 on white) |
| --color-night | #151826 | Dark section ground |
| --color-night-card | #1F2334 | Card on dark, if not white |
| --color-night-raised | #262A3A | Menu button on the scrolled nav |
| --color-ink-pressed | #2A2D3A | Secondary pressed bg/border |
| --color-on-night-muted | #B4B7C5 | Body text on Night |

## Type

Google Fonts: **Hanken Grotesk** (400–900 + italics) for display and headings, **Inter** (400–700 + italics) for UI, body and all numbers.
Emphasis uses a true italic (font-style: italic) of the same family. Never a script font. No mono fonts.
All money, percentages, ranks and dates use `font-feature-settings: "tnum"` (font-variant-numeric: tabular-nums), right-aligned in columns.

| Style | Family | Size / line-height (px) | Weight | Tracking |
|---|---|---|---|---|
| Display XL (board hero) | Hanken Grotesk | 96 / 96 | 800 | -0.035em |
| Display | Hanken Grotesk | 64 / 68 | 800 | -0.03em |
| H1 / section title | Hanken Grotesk | 44 / 48 | 800 | -0.025em |
| H2 | Hanken Grotesk | 28 / 34 | 700 | -0.015em |
| H3 / card title | Hanken Grotesk | 20 / 26 | 700 | -0.01em |
| Body L | Inter | 18 / 28 | 400 | 0 |
| Body | Inter | 16 / 24 | 400 | 0 |
| Label | Inter | 14 / 20 | 500 | 0 |
| Caption | Inter | 13 / 18 | 500 | 0 |
| Money XL | Inter + tnum | 56 / 60 (card), 48 / 52 (scale) | 700 | -0.025em / -0.02em |
| Money row | Inter + tnum | 16 / 24 (price 500, change 600) | | 0 |
| Button | Inter | 16 / 20 (nav 15 / 20) | 600 | 0 |
| Wordmark "HLD" | Hanken Grotesk | any | 800 | -0.03em; "finance" = 500 italic in Indigo |

## Spacing (4px base)
4, 8, 12, 16, 24, 32, 48, 64, 96.
Section padding: 80–96 desktop / 64 tablet / 48 phone. Side gutter: 96 / 40 / 20. Card padding: 32 (large), 28, 24 (small).

## Radii
| Token | Value | Use |
|---|---|---|
| --radius-chip | 8px | Tags ("Practice money", "Journal") |
| --radius-input | 12px | Text inputs, textarea |
| --radius-row | 16px | Leaderboard rows, inner panels |
| --radius-toast | 20px | Toast |
| --radius-card | 28px | Product cards, panels |
| --radius-pill | 999px | Buttons, waitlist field, nav, range tabs, answer chips |

## Elevation
| Level | Spec | Use |
|---|---|---|
| 0 Flat | 1px solid #E3E4EA | Rows, inputs |
| 1 Card | 2px solid #0E1016, no shadow | All product cards |
| 2 Lifted | 2px Ink border + box-shadow 4px 4px 0 #0E1016 | Card hover |
| 3 Floating | box-shadow 0 12px 32px rgba(14,16,22,0.16), 0 0 0 1px rgba(14,16,22,0.08) | Island nav, menus. Toast on Night: 0 12px 32px rgba(0,0,0,0.32), 0 0 0 1px rgba(14,16,22,0.08) |

No grey glow shadows on cards. No gradients on buttons or surfaces.

## Components

### Buttons (all: height 48, radius 999, Inter 600 16/20, centred)
| Variant | Default | Hover | Pressed | Focus | Disabled |
|---|---|---|---|---|---|
| Primary (pad 0 22) | bg #4B3BF5, text #FFF | bg #3A2BD9 | bg #2D20B5 | box-shadow 0 0 0 3px #FFF, 0 0 0 5px #4B3BF5 | bg #E3E4EA, text #8B8E9C |
| Secondary (pad 0 22, 2px border) | bg #FFF, border/text #0E1016 | bg #0E1016, text #FFF | bg/border #2A2D3A, text #FFF | default + same ring | border #E3E4EA, text #8B8E9C |
| Ghost (pad 0 18) | no bg, text #4B3BF5 | bg #EEECFF, text #3A2BD9 | bg #DDD9FF, text #2D20B5 | box-shadow 0 0 0 2px #4B3BF5 | text #8B8E9C |

Desktop: magnetic. Within about 10–12px the button eases toward the cursor, up to 8px max. Hover and press take 120ms.

### Text input
- Label: Inter 500 14/20 Ink, 8px gap above the field.
- Field: height 52, padding 0 16, radius 12, bg #FFF, 1px #CFD1DA. Text: Inter 400 16/24; placeholder #8B8E9C.
- Focus: border #4B3BF5 + box-shadow 0 0 0 3px #DDD9FF. The ring wraps the whole rounded box; never an inner square outline.
- Error: border #D93A3F + box-shadow 0 0 0 3px #FDE8E8. The message is Inter 500 13/18 #D93A3F and starts with "✕".
- Helper: Inter 400 13/18 Slate.

### Email waitlist field
- Pill: height 60, radius 999, bg #FFF, 2px #0E1016, padding 0 6 0 22, space-between. Placeholder "you@email.com".
- Inner button: height 44, padding 0 20, radius 999, Indigo, Inter 600 16 white ("Get early access").
- Success: the same pill turns into bg #EEECFF, 2px #4B3BF5, padding 0 22, a 20px Indigo check circle + Inter 600 16 #2D20B5 ("You're on the list. Check your inbox."). The pill stays the same size, so nothing jumps.

### Island nav
- At rest: width 80% of the page, height 64, radius 999, bg #FFF, Floating shadow, padding 0 8 0 20. Mark 28 + "HLD" (Hanken 800 20/24). Links: Inter 15/20, active 600 Ink, others 500 Slate, gap 28. CTA 48 tall, padding 0 20.
- Scrolled: width 64%, height 56, bg #0E1016, padding 0 6 0 18. White mark 24 + "HLD" 18/22. Buttons: "Join" (44 tall, padding 0 18) and a 44x44 menu button (bg #262A3A, two-bar icon). The links fold into the menu card. It returns to 80% only at scrollY = 0. Transition 240ms.

### Card (basic)
- bg #FFF, 2px #0E1016, radius 28, padding 24–32, gap 14–24. Title H3. Hover = Lifted.
- Example (Practice TFSA): "Room left" label + Inter 700 22/28 tnum value; progress track 8px #EEECFF with an Indigo fill, radius 999.

### Portfolio value card
- Card padding 32, gap 24.
- Top row: "Practice portfolio" (Inter 500 15/20 Slate) + "Practice money" chip (h28, padding 0 10, r8, bg Mist, Inter 600 13 Slate).
- Value: Inter 700 56/60 tnum, -0.025em.
- Gain/loss chip: h32, padding 0 12, r999, gap 6, bg #E3F5EA (loss #FDE8E8), Inter 700 14/20 tnum, colour #0A8A4A (loss #D93A3F), e.g. "▲ +$482.16 · +4.82%".
- Sparkline: 140 tall, 3px stroke in the gain/loss colour, round joins, area fill of the same colour at 8% opacity. Start-value baseline: 1.5px #CFD1DA dashed 4/6.
- Range tabs: track padding 4, gap 4, r999, Mist. Tab h32, padding 0 14, Inter 600 13 Slate; active bg Ink, text white.

### Leaderboard row
- Height 60, padding 0 14, radius 16, gap 12.
- Rank: 28px fixed slot, Inter 700 16 tnum. Avatar: 36 circle, initials Inter 700 13. Name: flex 1, Inter 600 15, nowrap. Change: 96px fixed slot, right-aligned, Inter 700 15 tnum with ▲/▼.
- The user's row: bg #FEEBE1, 1.5px #F2601F, rank text #C2410C, avatar bg #F2601F with white "You".

### Coach question card
- Card width 480 (desktop), padding 32, gap 20.
- Header: 40 circle in #1F8FFF with "?" (Hanken 800 20 white) + "Coach" (Inter 600 15) and context (Inter 13 Slate).
- Question: Hanken 700 28/34 -0.015em; the second sentence is italic in #1F8FFF.
- Answer chips: h40, padding 0 16, r999, 1.5px #CFD1DA, Inter 600 14. Selected chip: bg and border #1F8FFF, white text.
- Reason textarea: min-height 72, r12, 1px #CFD1DA, padding 12 16.
- Actions: Primary "Save plan and buy" + Ghost "Wait a day". The primary button only enables 600ms after the card opens.

### Trade-journal entry
- Card padding 28, gap 20, row layout. Left bar: 4px wide, radius 4, #B03FD1.
- Meta: Inter 500 13/18 Slate tnum ("Nov 12 · Bought 5 SHOP.TO at $212.40"). Tag: h24, padding 0 8, r8, #F6E6FB, Inter 600 12 #8A2BA6.
- Body: Hanken 700 20/26 with "Why I bought:" in italic.
- Follow-up panel: Mist, r16, padding 14 16, with a gain/loss figure. Link: "Add a note" in Inter 600 14 Indigo.

### Toast
bg #FFF, radius 20, padding 14 14 14 16, gap 12, Floating shadow. Icon: 32 Indigo circle with a white check. Title Inter 600 14/20, detail Inter 13/18 Slate tnum, action Inter 600 14 Indigo ("Undo"). Enters in 240ms.

## Motion
- Enter: cubic-bezier(0.22, 1, 0.36, 1). Exit: cubic-bezier(0.4, 0, 1, 1).
- Durations: 120ms hover/press; 240ms cards, toasts, nav shrink; 480ms text rising into place.
- Numbers roll digit by digit (tabular). Gain/loss chips cross-fade the colour and the arrow together.
- Nothing bounces, pulses or loops on its own. The hero background only glows softly under the cursor; grid lines stay straight.
- prefers-reduced-motion: everything becomes a 120ms fade. No digit roll, no magnet.

## Logo
- Mark: rounded square (radius = 28% of its size), Indigo, with a white H drawn as a pause button. In a 32-unit box: bars at x 9 and x 18.5, each 4.5x16 with radius 2.25, starting at y 8; bridge 8x2.5 at (12, 14.75), radius 1.25.
- Versions: on white = Indigo tile; on Indigo = white bars without a tile; on Ink = white tile with Ink bars.
- Minimum size 20px. Clear space = one bar width on every side.
