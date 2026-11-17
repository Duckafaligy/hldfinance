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

## 2026-11-17 · Button labels get their own type token, 16/20/600, and Label stays 14/500 for chips and field labels
- Decided by: design subagent, default, applying theme review 1, fix 6
- Why: Buttons already computed at 16/600 while the Label token and DESIGN.md said 14/500. A separate `--text-button` makes the drawn size and the documented size the same thing.
- Rejected: Shrinking buttons to 14/500 (weakens the primary action on a phone). Overloading Label with two weights.
- Rests on: theme-review-1.md, fix 6; get_computed_styles on the Buttons rows

## 2026-11-17 · Every 15px text moves to Table (14/20) and every 12px tab label moves to Caption (13/18); no size sits off the scale
- Decided by: design subagent, default, applying theme review 1, fix 6
- Why: 15 and 12 were outside the scale. Board notes and ledes moved with the product text so one sweep leaves zero off-scale nodes. `--text-table` and `--leading-table` were added so Table is a token, not a remembered number.
- Rejected: A separate `--text-tab` at 12 (below the 13 floor for small text). Keeping 15 for board notes only (a second exception to remember).
- Rests on: find_nodes fontSize 15px and 12px on the Theme page, 0 after the change

## 2026-11-17 · The Coach card's actions use an inverse accent pair, and Buy anyway's outline there is Cream 300
- Decided by: design subagent, default, applying theme review 1, fix 7 and the visual misdirection ruling
- Why: The card's buttons were bound to raw ramp tokens, so an accent swap would miss them. `--color-accent-inverse`, `--color-accent-inverse-pressed`, `--color-on-accent-inverse`, `--color-accent-inverse-subtle` and `--color-border-control-inverse` follow the swap. Cream 300 is 9.74:1 on Brown 900; Brown 500 was 4.23:1, which read as a fainter door.
- Rejected: Reusing the light-surface accent tokens on the dark card (wrong contrast direction). Brown 500 outline (visual misdirection).
- Rests on: theme-review-1.md, fix 7 and "Visual Misdirection ruling"; Colour roles board, new Controls rows

## 2026-11-17 · Primary emphasis on Remind me is kept, bounded by four written rules as Principle 4
- Decided by: theme review 1 (ruling), written into the system by the design subagent
- Why: Remind me is the pause, so it leads; the four rules (same 16/600 full-strength label, fixed order with both always shown, no confirmation or lock on Buy anyway, Cream 300 outline on the Coach card) keep that emphasis from becoming visual misdirection.
- Rejected: Equal-weight buttons (no primary on the main screen). A text-link Buy anyway (suppressed opt-out).
- Rests on: theme-review-1.md, "Visual Misdirection ruling"; Intent anti-pattern catalogue, visual misdirection and low-contrast opt-out

## 2026-11-17 · Track and row-group edges are inset shadows, so the 4 inset is measured from the outer edge
- Decided by: design subagent, default, applying theme review 1, fix 8
- Why: A 1px border plus 4px padding made a 5px inset, so inner = outer − padding gave 7 and 11 while 8 and 12 were drawn. An inset shadow keeps the edge without taking space. The dashed disabled track keeps its border with 3px padding, which is also 4 from the outer edge.
- Rejected: Documenting the border as excluded from the rule (a second rule to remember). Redrawing segments at 7 and rows at 11 (off the radius scale).
- Rests on: theme-review-1.md, fix 8; get_computed_styles on the segmented tracks and row groups

## 2026-11-17 · Elevation colours are written as color-mix of Brown 900, never as hex
- Decided by: design subagent, default
- Why: The selected segment computed as one 10% layer in hex; it now carries the documented two 6% layers, and all level 1 and level 2 shadows reference `--color-brown-900` so no raw hex remains in a node.
- Rejected: Hex with alpha (breaks the no-raw-value rule and won't follow a palette change).
- Rests on: theme-review-1.md, fix 8; find_nodes boxShadow on the Theme page

## 2026-11-17 · In check-in records only Held keeps an icon; Bought and Let go are text only
- Decided by: design subagent, default, applying theme review 1, fix 5
- Why: A ✓ on Bought and a ✕ on Let go graded the outcome. The clock on Held marks waiting, not a verdict. An empty 16 lane keeps the status column aligned.
- Rejected: Matching neutral icons for both (adds glyphs that say nothing the words don't).
- Rests on: theme-review-1.md, fix 5

## 2026-11-17 · Consent has four separate purposes, all off: usage counts, coach uses past check-ins, weekly tip by email, research invitations
- Decided by: design subagent, default
- Why: One purpose per row, each saying exactly what is used, matches "consent is separate for each purpose" and "privacy defaults to the highest level". Nothing that is required to run the app is presented as a choice.
- Rejected: A single "help improve HLD" toggle (bundled consent). Any purpose drawn on by default.
- Rests on: design-brief.md, "Privacy"; CLAUDE.md, "Hard rules" (PIPEDA)

## 2026-11-17 · The Coach card keeps Remind me and Buy anyway live while the next question loads or fails
- Decided by: design subagent, default
- Why: The coach never blocks. A slow or failed question must not hold the purchase decision hostage; the error says the earlier answer is saved and offers Try again beside both doors.
- Rejected: Disabling the actions until the question loads (a block disguised as loading).
- Rests on: design-brief.md, "Before-you-buy check-in"; Principle 4, rule 3

## 2026-11-17 · Chart scales are fixed at $2,000 either side of zero for net worth and 10% for practice returns, widening only when a value passes them
- Decided by: design subagent, default
- Why: Auto-fitted axes make a $40 move look like a cliff. The practice chart plots % return so its zero is the $10,000 start, and the band below zero is tinted so a negative month reads without colour.
- Rejected: Auto-scaled axes. Plotting the practice dollar value with a $10,000 baseline that isn't zero.
- Rests on: impeccable concept-seed catalogue challenger "botanical folio" (fixed scale across comparisons); design-brief.md, net worth "can go below zero"

## 2026-11-17 · Practice applies a 1.5% FX fee on US listings, shown as its own row in CAD before the order
- Decided by: design subagent, default
- Why: The brief asks for the cost in CAD including any FX fee. 1.5% is in the range Canadian brokers charge, so the lesson carries over to real investing, and it is shown, never folded into the price.
- Rejected: No FX fee in Practice (teaches that US stocks cost the same as Canadian ones). A hidden spread in the rate.
- Rests on: design-brief.md, "Plain-English trade screen"

## 2026-11-17 · Sign-in buttons are three equal outlined buttons, Apple first, with drawn placeholder marks; the build uses each company's official mark unaltered
- Decided by: design subagent, default
- Why: Equal treatment keeps email as easy as either company. Apple's guidance asks that Sign in with Apple be no less prominent than other providers, so it goes first. The marks on the board are drawn simply to avoid copying assets; Google's standard G is four-colour, so whether a one-colour G is allowed in the build has to be checked against Google's branding rules before launch.
- Rejected: Filled black Apple and white Google buttons (two brand styles fighting the cream system). Copying logo files from the web.
- Rests on: brief for this run, "Auth buttons"; Apple Human Interface Guidelines, Sign in with Apple; Google Identity branding guidelines

## 2026-11-17 · Account deletion is the only dialog; it lists what goes, says 30 days, and offers "Download my data first"
- Decided by: design subagent, default
- Why: Deletion is the one irreversible action, so it gets protected focus. Listing every category makes the consequence transparent; Keep my account is plain, with no guilt. Delete uses `--color-state-error`, which equals the accent until the accent arrives.
- Rejected: Typed-word confirmation (friction beyond what an informed tap needs). Copy like "We'll miss you" (confirmshaming).
- Rests on: design-brief.md, "Privacy"; decisions.md entry on onboarding, consent and deletion

## 2026-11-17 · The daily tip is a light card that carries the fine print and hides itself if it doesn't load in 8 s
- Decided by: design subagent, default
- Why: The Coach card stays the only dark surface. A tip is coach content, so the fine print goes with it. A missing tip is not worth an error message.
- Rejected: A second dark card. An error state for a tip.
- Rests on: Principle 1, "Coach first"; design-brief.md, "Fine print goes on coach screens only"

## 2026-11-17 · Ethical review of the review-1 additions: no anti-patterns found
- Decided by: design subagent, default
- Why: Checked against the Intent anti-pattern catalogue. Buy anyway meets the four misdirection rules on both surfaces. Consent rows are all off and separate. The leaderboard has no trophies, medals or dollar balances, and its copy says bragging rights and free to join. Empty states name a single step with no pressure. Deletion lists what goes and keeping the account is one plain tap. The category picker preselects nothing, and the reminder sheet opens on the option the person already tapped. Not covered: real screen flows, which come in the next run.
- Rejected: Nothing.
- Rests on: Principles, Components & states and Components: product boards in Paper, Bright olive / Theme

## 2026-11-17 · Screens batch 1 lives on two pages, Start and Coach, with flows left to right and Motion beside the Coach flow
- Decided by: design subagent, default
- Why: One page per pillar keeps the Theme page free for review. Artboards sit 470 apart in flow order, so the left-to-right path is the user's path.
- Rejected: Putting screens on the Theme page (a reviewer may be reading it). One artboard per state with no order.
- Rests on: coordinator brief, "Pages and screens"

## 2026-11-17 · The check-in entry asks which budget the item would come from
- Decided by: design subagent, default; coordinator accepted
- Why: Question 2 has to show a real Tracker fact ($142.00 left for Fun until payday). Without a category there's no budget to compare against. Nothing is preselected, and "Not sure" is a choice; then question 2 shows no fact.
- Rejected: Guessing the category from the item name (opaque personalization). Comparing against the whole pay period (less useful, and still a guess).
- Rests on: design-brief.md, "Before-you-buy check-in"; Category picker on Components: product

## 2026-11-17 · An item counts toward the Skipped total only when it's let go, never while it's held
- Decided by: design subagent, default; coordinator accepted
- Why: A held item may still be bought, so counting it would inflate the total. That would break "money not spent, not money saved" and the honest-numbers principle.
- Rejected: Adding the price when Remind me is tapped, then subtracting it if the item is bought (a number that goes backwards).
- Rests on: PRODUCT.md, Product Principle 3

## 2026-11-17 · The coach fine print appears once per screen
- Decided by: design subagent, default; coordinator accepted
- Why: Coach home has the Coach card and the daily tip, and the line twice reads as legal noise. It stays on the Coach card, which is the larger coach surface; the tip card leaves it off on that screen.
- Rejected: Repeating it on every coach surface on the same screen.
- Rests on: design-brief.md, "Fine print goes on coach screens only"

## 2026-11-17 · Payday is Friday, Nov 27, and dark-card dividers use Brown 700 until an inverse divider role exists
- Decided by: coordinator, on the design subagent's flag
- Why: Nov 28, 2026 is a Saturday. The pay-date picker already says every other Friday. The Theme has no divider role for the Coach card, so `--color-brown-700` stands in until `--color-border-inverse-subtle` exists.
- Rejected: Copying the Theme example's Nov 28. Using a light-surface border token on the dark card.
- Rests on: Components: product, pay-date picker; coordinator message, resume 2

## 2026-11-17 · The decision screen reads "Your call." with the three answers, and the coach adds nothing after them
- Decided by: design subagent, default
- Why: The coach asks and shows facts; the person decides. Restating the answers is a fact. A summary sentence like "Sounds like a want" would be a verdict.
- Rejected: A recommendation line. A score or "2 of 3 say wait" tally (grades the purchase).
- Rests on: PRODUCT.md, Principle 1; Intent anti-pattern catalogue, opaque personalization

## 2026-11-17 · After a check-in, Coach returns to Home scrolled to Recent check-ins, with the new line tinted and a toast
- Decided by: design subagent, default
- Why: The record changes state in place, so the person has to see the line itself, not only a confirmation. The toast carries the one reversible action (Change for a reminder, Undo for a bought item).
- Rejected: A separate success screen (adds a step and a place where outcomes could be styled as wins). Toast only (the record never shows).
- Rests on: DESIGN.md, Check-in record; Motion row "Held item resolves"

## 2026-11-17 · Buy anyway logs the purchase in Tracker under the category picked at entry, with Undo
- Decided by: design subagent, default
- Why: Tracker is manual, so a purchase decided inside HLD shouldn't have to be typed twice. Undo in the toast keeps it reversible. The toast states the fact and nothing else ("Logged in Tracker under Fun.").
- Rejected: Asking "Add to Tracker?" (a second question after the decision). Not logging it (a Tracker that disagrees with Coach).
- Rests on: design-brief.md, Tracker "Log a purchase"

## 2026-11-17 · The 3-day follow-up offers three equal outlined buttons: I'm getting it, Let it go, Keep holding
- Decided by: design subagent, default
- Why: This is the one follow-up, and no outcome may look better than another, so none gets the primary fill. Each label is in the person's own voice; the app never says "buy it". The card says it is the only time it will ask.
- Rejected: Let it go as primary (grades the outcome). A second reminder from Keep holding (breaks one follow-up max).
- Rests on: design-brief.md, "One follow-up max"; coordinator note 4 on "buy" wording; Check-in record rule

## 2026-11-17 · The budget check-in answers, Worth it and Not really, are equal outlined buttons with Skip, and change nothing in the budget
- Decided by: design subagent, default
- Why: They are answers, not actions, so neither leads. Saying the budget won't change removes the fear that "Not really" triggers a penalty.
- Rejected: Worth it as primary (nudges toward a comforting answer). Following Not really with a suggestion (advice).
- Rests on: design-brief.md, "Budget check-in"

## 2026-11-17 · An offline save keeps both doors live, keeps answers on the phone, and retries by itself
- Decided by: design subagent, default
- Why: The coach never blocks. Try again sits in the error, and Remind me and Buy anyway stay where they were. The reminder is set automatically once the phone is back online.
- Rejected: Disabling the buttons until online. A modal error.
- Rests on: decisions.md entry "The Coach card keeps Remind me and Buy anyway live while the next question loads or fails"

## 2026-11-17 · Check-in settings live in You › Check-ins: three on/off switches, a Tomorrow / In 3 days segment, and a reminder time of 6:00 p.m.
- Decided by: design subagent, default
- Why: Check-ins can be switched off, and the reminder timing is the person's call. The segment sets what Remind me says on the Coach card. 6:00 p.m. is after a typical work or school day. Turning check-ins off keeps every record.
- Rejected: Settings on the Coach tab (crowds the main feature). Reminder time on by default in the morning (reads as a nag).
- Rests on: design-brief.md, "Check-ins can be switched off"

## 2026-11-17 · Sign-up shows three equal provider buttons with no single primary; the other Start screens have one primary each
- Decided by: design subagent, default
- Why: The auth choice is three equal doors (Apple's guidance, and email as easy as either). Create account is disabled with its reason written under it until the password reaches 10 characters.
- Rejected: Making one provider primary.
- Rests on: decisions.md entry on sign-in buttons

## 2026-11-17 · The status bar keeps the system font
- Decided by: design subagent, default
- Why: The status bar is OS chrome drawn from Paper's iOS reference, not product type. Every product string is Archivo.
- Rejected: Setting the clock in Archivo (misrepresents the device).
- Rests on: Paper mobile-status-bar guide

## 2026-11-17 · Ethical review of screens batch 1: no anti-patterns found
- Decided by: design subagent, default
- Why: Checked against the Intent anti-pattern catalogue. Buy anyway is the same size, full contrast, always on screen and never locked on every Coach card, including loading and error. Consent is four separate rows, all off. The follow-up and budget answers are equal. Nothing grades an outcome. There are no streaks, badges or countdowns. The coach copy only asks or states facts. Not covered: Tracker, Practice and You screens beyond Check-in settings, which come in later batches.
- Rejected: Nothing.
- Rests on: Paper file 01M7ND942KK1P3EG7FGKWPZ962, pages Start and Coach
