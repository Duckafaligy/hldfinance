# Decisions

## 2026-11-17 · Screens are designed phone-first at 390×844, scaling up to desktop web
- Decided by: Aariz (brief), recorded as the platform default
- Why: The check-in happens in the moment, one-handed, often in a store line.
- Rejected: Desktop-first, which would leave the main moment cramped. Native-specific design, which waits for the Expo phase.
- Rests on: design-brief.md, "Platform default"; CLAUDE.md, "Proposed stack"

## 2026-11-17 · The visual direction is the assigned roll, without a decision round
- Decided by: design subagent, default
- Why: The run had no channel for Aariz to answer a decision page. The concept-seed roll assigned candidate 6 of 7: a sports-page standings table, giving aligned columns, tabular figures and a one-line record per event. It can carry every Phase 1 fact.
- Rejected: Library hold slip (top-ranked, but the literal reading of "Hold"). Coat-check claim ticket. Parks Canada trail signage. NTS topographic map. Pocket planner. Till receipt. Catalog challengers, each declined, with what was kept from it: variable-font specimen (hierarchy by scale contrast); jet-age ticket wallet (state changes in place, nothing disappears); airport wayfinding (one question per screen); botanical folio (fixed scale across comparisons); vertical video feed (rejected outright as an addictive pattern); design-annual plates (one family for display and caption).
- Rests on: impeccable concept-seed, seed:ab768ad26662982a

## 2026-11-17 · The standings discipline applies to tables only; Coach screens are generous and warm, with no sports-page ornament
- Decided by: Aariz-Claude (coordinator), default; Aariz was told and did not object
- Why: The Coach check-in is the hero and its tone is "a friend, not a nag". Dense, ruled tables suit Journal, Leagues, holdings and subscriptions, not a pause before a purchase.
- Rejected: Applying the standings look everywhere, which would make the coach feel like a scoreboard. Rules, dingbats and all-caps headlines, which are costume, not function.
- Rests on: coordinator message to the design subagent, 2026-11-17

## 2026-11-17 · Direction contract for HLD app surfaces
- Decided by: design subagent, default, under the coordinator adjustment above
- Why: THESIS: a pause, then a record. The coach asks one question at a time on generous cream space; every decision then becomes one aligned line that keeps its history. It refuses the category default of neon charts and gamified streaks. OWN-WORLD: Cream 75 ground, Brown 900 ink and the Coach card, ten derived steps; Archivo at width 100 for talking and 87.5 for comparing; tabular figures; ▲ + / ▼ −; 1.5-stroke outline icons; flat cards with hairline edges. STORY: the person sees the question, answers or skips, chooses either door, and later sees what they held and what happened. FIRST VIEWPORT: on the Coach check-in, the item and price as a caption, the question at Display size with 80 above it, answer chips, then Remind me in 3 days and Buy anyway stacked at equal size, and the fine print at the bottom. FORM: candidate 6 of 7, seed:ab768ad26662982a. FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance.
- Rejected: Keeping the contract in an impeccable surface brief, because the brief limits this branch to PRODUCT.md, DESIGN.md and design/decisions.md.
- Rests on: impeccable new-work.md §5; design-brief.md, "Destination"

## 2026-11-17 · One family, Archivo, at two widths
- Decided by: design subagent, default
- Why: The variable width axis gives a warm, open voice at 100 for the coach and a narrow, scannable set at 87.5 for tables, without a second family. Its figures are tabular, and it is free on Google Fonts with no per-user cost.
- Rejected: Libre Franklin (carries a newspaper sports-page voice the coordinator ruled out). Hanken Grotesk, Public Sans and Atkinson Hyperlegible Next (no width axis, so dense tables would need a second family or smaller type).
- Rests on: get_font_family_info on Bright olive (Archivo wght 100–900, wdth 62–125); render test of font-stretch and tabular-nums in Paper

## 2026-11-17 · The ramp has ten steps between Cream 75 and Brown 900, interpolated in OKLCH with a chroma lift in the middle
- Decided by: design subagent, default
- Why: Straight interpolation turns the 400–600 steps grey. A lift of up to 0.035 chroma keeps them brown.
- Rejected: Linear sRGB mixing (muddy mid-tones). Extra steps between 50 and 150 (the differences would be invisible).
- Rests on: scratchpad ramp.py; ratios on the Colour roles board

## 2026-11-17 · Tertiary text is Brown 600; Brown 500 is restricted to control outlines
- Decided by: design subagent, default
- Why: Brown 500 on Cream 75 is 4.09:1 and fails AA for body text. Brown 600 is 5.72:1 on Cream 75 and 4.85:1 on Cream 150. Brown 600 on Cream 200 is 4.27:1, so no text sits on Cream 200 or darker light steps.
- Rejected: Brown 500 for captions (fails). Brown 700 for every secondary level (collapses the hierarchy).
- Rests on: contrast table on the Colour roles board

## 2026-11-17 · Accent and state slots point into the ramp until the accent is chosen
- Decided by: Aariz (accent deferred), with slot values as a design subagent default
- Why: Accent = Brown 900, accent-pressed = Brown 800, accent-subtle = Cream 150, on-accent = Cream 75. Gain and loss are both Brown 800, so direction is carried by ▲ + / ▼ − and the screens prove they read without hue. Warning = Brown 700 on Cream 150; error = Brown 900 with a 2px border, icon and message.
- Rejected: Placeholder hues, which would anchor the accent decision before Aariz makes it.
- Rests on: design-brief.md, "Accent: DEFERRED"

## 2026-11-17 · Radius 2xl is 36 so the Coach card's 24 padding nests 12 buttons
- Decided by: design subagent, default
- Why: Inner = outer − padding. A 28 radius with 24 padding would leave 4 on the buttons, which breaks the button radius everywhere else.
- Rejected: 28 with 16 padding (too tight for the hero). Breaking the nesting rule on the hero.
- Rests on: Spacing & radii board, nested-radius examples

## 2026-11-17 · Light mode only for Phase 1
- Decided by: design subagent, default
- Why: The pinned palette is a cream ground, and the scene is daylight or store lighting. A dark theme doubles the contrast work before the accent exists.
- Rejected: Shipping light and dark together now.
- Rests on: design-brief.md, "Visual brief"

## 2026-11-17 · Tab bar is Coach, Tracker, Practice, You; Journal and Leagues live inside Practice
- Decided by: design subagent, default
- Why: Three pillars plus account. The coach comes first because it is the main feature.
- Rejected: Five tabs with Journal or Leagues at the top level, which would weight Practice above the coach.
- Rests on: design-brief.md, "Scope"

## 2026-11-17 · Remind me is primary and Buy anyway is secondary, at the same size and always visible
- Decided by: design subagent, default
- Why: The brief asks for the primary CTA to be emphasised and for Buy anyway to be always visible. An equal size and a 17.30:1 label on a 4.09:1 outline keep Buy anyway a real choice, not visual misdirection.
- Rejected: Equal weight (no primary). A text-link Buy anyway (suppressed opt-out, a dark pattern).
- Rests on: design-brief.md, "Before-you-buy check-in"; Intent anti-pattern catalogue, visual misdirection and low-contrast opt-out

## 2026-11-17 · The budget ring fills as money is spent and always shows the amount left beside it
- Decided by: design subagent, default
- Why: The fill shows what is used; the number states what is left until payday. Colour is never needed to read it.
- Rejected: A ring that empties (reads as loss). A ring with no number.
- Rests on: design-brief.md, "Tracker"

## 2026-11-17 · Elevation and motion values live in DESIGN.md and on the boards, not as Paper tokens
- Decided by: design subagent, default
- Why: Paper's token types cover colour, type, spacing, radius, opacity, breakpoints and containers, but not shadow, duration or easing.
- Rejected: Encoding durations as spacing tokens (misleading types).
- Rests on: Paper create_tokens schema

## 2026-11-17 · The trade coach asks all three questions on every trade, one per screen, each skippable, and can be switched off
- Decided by: design subagent, default
- Why: Answers are what make the journal useful. "Skip" keeps it optional, and the setting is on by default so it can be switched off like purchase check-ins.
- Rejected: Asking only on the first trade of a symbol (thin journal). Making the questions mandatory (blocks the trade).
- Rests on: design-brief.md, "Open questions"

## 2026-11-17 · Practice TFSA room is $7,000; an over-contribution is stopped at the order with the room left shown
- Decided by: design subagent, default
- Why: $7,000 matches the current annual TFSA limit and keeps the lesson real. Stopping the order with "You have $1,240 of room left" teaches the limit without a penalty mechanic.
- Rejected: Simulating the 1%-per-month over-contribution tax (punitive in a practice app). Unlimited room (no lesson).
- Rests on: design-brief.md, "Practice TFSA"; CRA TFSA limit for 2024–2026

## 2026-11-17 · Minors in leagues see display names and % return only, in invite-link leagues with no public discovery
- Decided by: design subagent, default
- Why: Minimum data for a mixed-age audience. No photos, real names, balances or chat.
- Rejected: Public leagues. Showing dollar balances.
- Rests on: CLAUDE.md, "Hard rules" (PIPEDA, minors)

## 2026-11-17 · Onboarding asks birth year; consent is per purpose with every toggle off; deletion is one confirmation that lists what goes
- Decided by: design subagent, default
- Why: Birth year gates real investing (18+) without collecting a full date of birth. Off-by-default consent matches "privacy defaults to the highest level". Deletion is as easy as sign-up.
- Rejected: Full date of birth, or ID upload (never store ID images). Pre-checked consent. Typed-word confirmation for deletion (friction proportional to an action already confirmed).
- Rests on: design-brief.md, "Privacy"; CLAUDE.md, "Hard rules"

## 2026-11-17 · Ethical review of the Theme section: no anti-patterns found
- Decided by: design subagent, default
- Why: Checked against the Intent anti-pattern catalogue. Buy anyway is equal size and AA-contrast. There are no streaks, badges, red dots, countdowns or confetti. The Skipped total is labelled "money not spent, not money saved". Check-in outcomes are styled neutrally. Disabled states carry a written reason. Not covered: real copy flows, onboarding screens and league screens, which come in the next run.
- Rejected: Nothing.
- Rests on: Principles and Components & states boards in Paper, Bright olive / Theme
