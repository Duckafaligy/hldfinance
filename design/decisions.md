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

## 2026-11-17 · The expressive serif is Instrument Serif Italic
- Decided by: design subagent, default, applying revision 1 (Aariz's reference: a condensed, high-contrast true italic)
- Why: It is the closest match Paper offers: narrow letterforms, hairline serifs and joins, a tall ascender-to-x-height ratio and a true italic. It keeps its hairlines on the Brown 900 Coach card at 44px. It is free on Google Fonts with no per-user cost.
- Rejected: Bodoni Moda Italic (its hairlines vanished on Brown 900 in a render test, and it sets wider). Playfair Display Italic (less condensed). DM Serif Display Italic and Gloock (heavier, and Gloock has no italic).
- Rests on: revision-1.md, "Typography direction"; get_font_family_info on Instrument Serif, Bodoni Moda, Playfair Display, Gloock, DM Serif Display; render test on the Typography board, since deleted

## 2026-11-17 · The heavy tight sans stays Archivo, at 800 with −0.04em tracking
- Decided by: design subagent, default, under revision 1 ("keep Archivo if it's close enough")
- Why: In a side-by-side render of "Your onboarding is losing users", Archivo 800 at −0.04em matched Inter Tight 800 closely: large x-height, compact counters, letters nearly touching. Keeping it means one sans family for headlines and UI, and the 87.5 width axis for tables stays. −0.04em is the tracking floor; −0.045 started to merge "rn".
- Rejected: Inter Tight (a second sans family for a near-identical result). Inter Display (no separate display cut in Paper). −0.05em (letters collide in Archivo).
- Rests on: revision-1.md; get_font_family_info on Archivo, Inter Tight, Inter; render test on the Typography board, since deleted

## 2026-11-17 · Every Coach card headline is in the serif; screen titles stay in the sans
- Decided by: design subagent, default
- Why: The serif is the coach's voice at a moment. The spec names the check-in question, "Your call." and the Welcome tagline; the follow-up ("Still want the wireless earbuds?"), the budget check-in ("Was dinner out worth it?") and the Home card ("Thinking about buying something?") are the same card asking a question, so they match. Screen titles on light pages ("What are you thinking of buying?", "When do you get paid?") are the app talking, so they are Archivo 800.
- Rejected: The serif on light-page screen titles (it would stop being selective). Leaving the follow-up and budget questions in the sans (two voices on one card type).
- Rests on: revision-1.md, "Rules"; Coach and Start pages

## 2026-11-17 · Type roles: three serif sizes and a heavier, tighter sans scale
- Decided by: design subagent, default
- Why: Serif hero 64/62 (Welcome only), Serif display 44/46 (Coach card), Serif title 32/36 (boards). Display 36/38 and Title 1 28/30 at 800 and −0.04em; Title 2 22/26 and Figure XL 48/52 at 700 and −0.03em; Title 3 and everything readable keep their sizes, weights and normal tracking. Tighter leading suits heavy, tight headlines. The smallest serif role is 32, above the 28 floor.
- Rejected: A single serif size (the Welcome tagline needs more presence than a card question; board titles need less). Serif under 32 on screens.
- Rests on: revision-1.md, "Typography direction" and "Rules"

## 2026-11-17 · Principle titles move to Serif title (32); board headers get a board-only token
- Decided by: design subagent, default, applying the queued Theme cleanup
- Why: The 26px principle titles were off the scale. As key moments they take Serif title, a scale token. The 64px board headers and the 28/22px section titles were raw values; section titles now use Title 1 and Title 2, and board headers use `--text-board-title` / `--leading-board-title` (64/64), documented as never appearing on a screen.
- Rejected: A board-only exemption for raw sizes (a second rule to remember).
- Rests on: revision-1.md, "Queued Theme cleanup"

## 2026-11-17 · Radius scale is none 0 / sm 2 / md 4 / lg 6 / full; xs, xl and 2xl are removed and pill is renamed full
- Decided by: Aariz chose "Cap outer, square inner" (2/4/6); token names are a design subagent default
- Why: lg 6 is the container maximum (cards, Coach card, sheets, dialogs, toasts, row groups, inputs, segmented tracks). md 4 is for standalone controls on the page (buttons, chips, chip tracks, tab selection, notices). sm 2 is for anything inside a container. full is for circles only. Renaming pill to full keeps the meaning honest now that chips are square-shouldered.
- Rejected: Keeping xs/xl/2xl as aliases (three names for two values). Making chips and the tab selection full (a pill reads soft against 2–6 corners).
- Rests on: revision-1.md, "Shape direction"

## 2026-11-17 · Outer = inner + padding holds for tight nests; padded containers cap at 6 and everything inside takes 2, or 0 when flush
- Decided by: Aariz (revision 1 rule), worked examples by the design subagent
- Why: Measured with get_computed_styles. Tight: segmented track 6 / 4 / segment 2; invite input 6 / 4 / Copy 2; row group 6 / 4 / pressed row 2; chip track 4 / 2 / chip 2. Padded (after the padding standard): Coach card 6 / 16 / buttons and chips 2; card 6 / 16 / plot 2 with a flush footer at 0; dialog 6 / 16 / buttons 2; error card 6 / 16 / Try again 2. A button therefore takes 4 on the page and 2 inside a card. Switch tracks stay full because 11 (knob) + 3 (inset) = 14, which is half the 28 height.
- Rejected: One radius per component regardless of context (the Coach card's 2 buttons and the page's 4 buttons would have to match the larger one). Rounding a container past 6 to satisfy the formula.
- Supersedes: "Radius 2xl is 36 so the Coach card's 24 padding nests 12 buttons"
- Rests on: revision-1.md, "Nesting rule"; Spacing & radii board, "Cap outer, square inner"

## 2026-11-17 · Coach-card dividers and skeletons get their own tokens
- Decided by: design subagent, applying the queued Theme cleanup and batch 1 fix 2
- Why: `--color-border-inverse-subtle` (Brown 700, 2.14:1) replaces the stand-in `--color-brown-700` on the dark-card dividers. `--color-skeleton-inverse` (Brown 700) with a `--color-skeleton-inverse-shimmer` (Brown 600) band replaces Brown 800 bars, which were 1.48:1 and disappeared. The light skeleton gets matching `--color-skeleton` / `--color-skeleton-shimmer` names (Cream 150 / Cream 100). Paper can't animate, so the shimmer is drawn as a band frozen mid-sweep, aligned across the bars.
- Rejected: Brown 600 bars (3.02:1 makes a placeholder louder than the Cream 300 caption beside it).
- Supersedes: the dividers half of "Payday is Friday, Nov 27, and dark-card dividers use Brown 700 until an inverse divider role exists"
- Rests on: revision-1.md, batch 1 fix 2 and "Queued Theme cleanup"; contrast ratios on the Colour roles table in DESIGN.md

## 2026-11-17 · The loading Coach card mirrors question 2: two serif-line bars, three 24px budget-table rows, then the chips
- Decided by: batch 1 review, fix 2
- Why: The skeleton is the shape of what's coming. Question 2 has a two-line question and a three-row table with a label lane and an 88-wide amount lane, so the skeleton has the same lanes.
- Rejected: Question and chip bars only (the card jumped when the table arrived).
- Rests on: revision-1.md, batch 1 fix 2

## 2026-11-17 · The fine print appears once per coach screen and never on the tip card
- Decided by: Aariz-Claude (coordinator), queued Theme cleanup
- Why: The Coach card always carries it. The tip card on the Theme board was the last place showing it twice; it now shows none, in every context.
- Rejected: Keeping it on the tip card when it stands alone (a tip never appears without the Coach card on Coach home).
- Supersedes: "The coach fine print appears once per screen" and the tip-card half of "The daily tip is a light card that carries the fine print and hides itself if it doesn't load in 8 s"
- Rests on: revision-1.md, "Fine print rule"

## 2026-11-17 · Brand marks are exempt from the 1.5 outline icon rule
- Decided by: Aariz-Claude (coordinator), queued Theme cleanup
- Why: The solid Apple logo and Google's G belong to their owners and follow their brand rules. The board placeholders stand in for the official marks, which the build uses unaltered. Every other icon is a 1.5 outline with token strokes; the drawn G placeholder is now 1.5, down from 2.25.
- Rejected: Redrawing the Apple logo as an outline (alters a trademark).
- Rests on: revision-1.md, batch 1 fix 7 and "Brand marks"; Icons board, "Brand marks are exempt"

## 2026-11-17 · Budget answers read "$12.01 before tax", and the decision's answer lane fits its content
- Decided by: batch 1 review, fix 1; lane change a design subagent default
- Why: About 13% HST puts the $129.99 earbuds near $146.89, which is more than the $142.00 left, so "left" overstated it. The fixed 124 lane wrapped the longer value, so the answer lane is fit-content, right-aligned, and the question label takes the rest.
- Rejected: Showing a tax-included total (HLD doesn't know the buyer's province).
- Rests on: revision-1.md, batch 1 fix 1

## 2026-11-17 · Daily tip is on by default in Check-in settings
- Decided by: batch 1 review, fix 8
- Why: A tip is general information on the Coach tab, it sends nothing and shares nothing, and it can be switched off on the same row. Off-by-default stays the rule for anything that shares data or sends a message.
- Rejected: Off by default (hides the feature with no privacy gain).
- Rests on: revision-1.md, batch 1 fix 8; DESIGN.md, Switch

## 2026-11-17 · Ethical review of revision 1: no anti-patterns found
- Decided by: design subagent, default
- Why: Checked against the Intent anti-pattern catalogue. Remind me and Buy anyway changed radius together (2 on the Coach card) and kept their size, order and contrast; Buy anyway's outline is still Cream 300. The serif is used only for questions and "Your call.", never for a verdict. The "before tax" label makes the budget fact more honest. The loading and offline states keep both doors live. Not covered: Tracker, Practice and You screens, which come in later batches.
- Rejected: Nothing.
- Rests on: Paper file 01M7ND942KK1P3EG7FGKWPZ962, pages Theme, Start and Coach

## 2026-11-17 · Two standard paddings: screen content is 40 top and 16 sides; every box is 16 inside
- Decided by: Brendan Lau (Paper comment c-tii8f0), applied by Aariz-Claude
- Why: One rule per level makes the screens read as one system. Every screen's content frame on Start and Coach is now `--spacing-40` top and `--spacing-16` left and right; it was 8, 16 or 24 on Welcome, Pay dates, Coach home, Settings and every check-in. Every box (cards, the Coach card, tip cards, sheets, dialogs, on screens and on the Theme boards) is `--spacing-16` on all sides; the Coach card, sheet and dialog were 24. Row groups stay a 4 tight nest, so their rows take 12 and the content still lands 16 in. Footers keep 16 sides and the 34 home-indicator inset, now `--spacing-safe-bottom`. The Coach card's question offset went from 64 to 40 below the progress row, so the question stays where it was on screen and the loading card still fits 844.
- Rejected: Padding row groups at 16 (breaks the pressed-row tight nest). Keeping 24 inside the Coach card (one box would differ from the rest). Applying the 40/16 screen padding to the 1440 Coach · Motion board, which is documentation, not a screen.
- Supersedes: the Coach card's "24 padding (12 at the top)" and "80 above the coach question" in earlier DESIGN.md text
- Rests on: Paper comment thread on Start · Email sign-up, "Content" frame (40 top, 16 sides); coordinator message, 2026-11-17

## 2026-11-17 · UI/UX Pro Max pass, part 1 (paused): targets, spacing rhythm, step progress, escape routes and official sign-in marks are applied in Paper
- Decided by: design subagent, default, from the ui-ux-pro-max checklist; paused by Aariz before DESIGN.md was updated
- Why: Measured with get_computed_styles. Skip on every Coach card was about 35 wide by 44, now min 44 × 44. The offline Try again was 40 high, now 44 (screen and Theme). Pay dates had 4 between Save pay dates and Skip for now, now 8. Category chips on the check-in entry had 8 between 40-high chips, so their 44 targets touched; the gap is now 12, as on the Coach card. Tab bars ended 28 above the bottom edge, now `--spacing-safe-bottom` (34), and toasts sit 16 above them again (bottom 113, was 103 at 12 above). Off-rhythm values moved to the 4/8 scale: record, consent and settings rows 14 to 12, the empty check-ins row 14 to 16, decision answer rows 10 to 12, budget-table rows 6 to 4, selected-chip icon gap 6 to 4, the pay-date legend gap 6 to 8. Onboarding (Birth year, Consent, Pay dates) gained "Step 1 of 3" to "Step 3 of 3" centred in the top bar. Inside a check-in, Back now returns to the previous step and a Close in the right slot leaves without deciding; entry, follow-up and budget check-in keep Back to Coach. The first-run "Your check-ins" empty state names its action: "Start a check-in above and it becomes one line here…".
- Rejected: 8 gaps between pay-date day cells (seven 44 cells plus six 8 gaps is 356, wider than the 326 inside the card; adjacent non-overlapping 44 cells are kept). 44-high chips (would push the loading Coach card past 844). A second primary in the empty state (one primary per screen; the Coach card's Start a check-in is the action). A red or confirmation step anywhere (palette and Buy anyway rules).
- Rests on: ui-ux-pro-max Quick Reference §2, §5, §8, §9; searches "touch target size mobile", "touch spacing gap between targets", "multi-step progress back", "toast undo timing", "safe area bottom bar", "empty state action", "inline link target size exception", "skeleton loading shimmer"

## 2026-11-17 · Sign-in buttons use the official Apple logo and Google G, on brand-only tokens outside the cream/brown palette
- Decided by: Aariz-Claude (coordinator) brief, applied by the design subagent
- Why: ui-ux-pro-max "Correct Brand Logos" asks for official assets. Apple allows only a black or white logo, so the Apple mark and its "Continue with Apple" label use `--color-brand-apple` (#000000). Google's G keeps its four colours: `--color-brand-google-blue` #4285F4, `-red` #EA4335, `-yellow` #FBBC05, `-green` #34A853. These five tokens are for the marks only, never UI or state, so Google red never stands in for an error or a destructive action. Applied on Start · Sign up and on Components: product (default, pressed and focus Google buttons).
- Rejected: Drawn one-colour placeholders (not the official marks). Recolouring the marks Brown 900 (alters a trademark).
- Open: Google's guidelines put the G on a white surface; Cream 50 (#FFFCF8) is near white, and whether that passes Google's review needs checking before launch.
- Supersedes: "Sign-in buttons are three equal outlined buttons, Apple first, with drawn placeholder marks"
- Rests on: ui-ux-pro-max Common Rules, "Correct Brand Logos" (no dataset match for "brand logo sign in official" or "brand logo"); Apple HIG, Sign in with Apple; Google Identity branding guidelines

## 2026-11-18 · Toasts hold 5 s plain and 8 s with an action, stop while touched, and their action also lives on the check-in's record row
- Decided by: Aariz-Claude (coordinator) for the timings; design subagent, default, for restarting in full on release and for the record-row path
- Why: An action needs time to read and reach one-handed in a store line, so it gets 8 s; a plain confirmation needs 5. A finger on the toast or keyboard focus on its action stops the clock, and release restarts the full time, which is simpler to build and more generous than resuming. Because a toast can be missed, Change when we ask (held) and Remove from Tracker (bought) also open from the check-in's row, so nothing depends on catching it. Enter 220 ease-out with an 8 rise, exit 160 ease-in by fading in place, reduced motion fades over 120 with the same hold. Drawn on Components & states (Toast, Timing) and Coach · Motion section 5. Theme toast actions grew from 36 to 44 high, so every toast is 68 high, like the screens.
- Rejected: ui-ux-pro-max `toast-dismiss` 3 to 5 s for every toast (too short for an action, and WCAG 2.2.1 asks for adjustable timing). Resuming the remaining time after release. Toasts that stack.
- Rests on: ui-ux-pro-max Quick Reference §7 `exit-faster-than-enter`, §8 `toast-dismiss`, `toast-accessibility`, `undo-support`; search "toast undo timing" (ux); WCAG 2.2.1 Timing Adjustable

## 2026-11-18 · Inline legal links keep their text size and get a 44 high tap area as a build spec, not a drawn change
- Decided by: Aariz-Claude (coordinator), applied by the design subagent
- Why: Terms and Privacy Policy on Start · Sign up are Caption on an 18 line. Making them 44 high would break the sentence. Each link's tap area is 44 high (13 above and below the line) and runs 4 past each end of the words, at least 44 wide; the two areas are 42 apart and clear of the buttons and the home indicator. Drawn as a dashed spec on Components: product under Sign in, never on a screen.
- Rejected: Moving the links out of the sentence into two buttons (adds weight to fine print). Relying on WCAG 2.5.8's inline exception alone (HLD's floor is 44).
- Rests on: ui-ux-pro-max Quick Reference §2 `touch-target-size`, §1 `web-target-size`; search "inline link target size exception" (ux); WCAG 2.5.8

## 2026-11-18 · UI/UX Pro Max pass, part 2: rhythm on the Theme boards, Coach card pressed and focus states, and DESIGN.md caught up with parts 1 and 2
- Decided by: design subagent, default, from the ui-ux-pro-max checklist (second pass over Start and Coach, measured with get_computed_styles)
- Why: Theme had 36 gaps at 6 (headings, state frames, the invite Copy button, error rows) now 8, and selected-chip icon gaps at 6 now 4 as on the screens; 39 doc-table rows at 10 padding now 12; 42 gaps at 10 now 8; record and consent rows, the text area and segment and notice padding at 14 now 12 or 16; type-scale rows 6 now 8; the light skeleton card gap 14 now 16. Coach: Coach · Motion spec rows 10 now 12, the loading card's question skeleton gap 14 now 12 (still fits 844). The Coach card on Theme put the item 20 below the progress row while the screens and DESIGN.md say 40; the four state cards, the anatomy row and the Motion board excerpts are now 40. Theme had no pressed or focus state for Remind me, Buy anyway, chips or Skip on the dark card; a "Pressed and focus" card now shows both doors treated the same. Spinners on Theme buttons, the loading toast, the Opening Google button and the Saving button were 18 or 20 with 2 to 2.5 strokes; all are now 20 with 1.5. The secondary-button sample read "Buy anyway" in a disabled state, which contradicts the Buy anyway rules, so the sample label is now "Edit amount". Pay dates said "Tracker counts down to each payday"; Principle 7 rules out countdowns, so it says "Tracker shows what's left until each payday." The Sign in heading still said "one-colour mark"; it now says official mark. Checked and passing with no change: tab bar labels and active state (600 label, Cream 150 block, Brown 700 at rest, 8.07:1), Back and Close slots 96 × 44, chip gaps 12, toast action 44 on screens, field labels above fields with helper text 8 under, the disabled Create account with its reason, icon sizes 16/20/24 only, body measure at most about 50 characters at 358.
- Rejected: ui-ux-pro-max `destructive-emphasis` red and `confirmation-dialogs` (no red anywhere; Buy anyway is not destructive and has no confirm step). `disabled-states` 0.38 to 0.5 opacity (disabled uses token colours plus a written reason). `spring-physics` (motion stays on the cubic-bezier tokens). A Close button in onboarding (no "leave without deciding" there; the birth year is required and Pay dates has Skip for now). A chevron on check-in record rows (the 358 row has no room for it without wrapping the item name; the whole row is the target).
- Rests on: ui-ux-pro-max Quick Reference §1 `focus-states`, §2 `press-feedback`, §5 `spacing-scale`, `line-length-control`, §8 `disabled-states`, `error-placement`, `input-labels`, §9 `nav-label-icon`, `nav-state-active`, Common Rules "Consistent Icon Sizing"; Paper file 01M7ND942KK1P3EG7FGKWPZ962, pages Theme, Start and Coach

## 2026-11-18 · Subscription renewal reminders are off by default
- Decided by: design subagent (b), default
- Why: A reminder sends a message, and DESIGN.md makes off the default for anything that sends one. The switch sits beside the renewal date, and the list says how to turn it on.
- Rejected: On by default (opt-out messaging).
- Rests on: DESIGN.md, Switch; Intent, "Opt-in over opt-out"

## 2026-11-18 · Tracker · Home rings show whole dollars, rounded down
- Decided by: design subagent (b), default
- Why: Four rings fit at 390 wide, and rounding down never overstates what's left. Detail screens show cents.
- Rejected: Cents on Home (wraps at 22px).
- Rests on: Tracker · Home

## 2026-11-18 · Net worth lists accounts and debts with a running-total column
- Decided by: design subagent (b), default
- Why: It shows how each line moves the total. Debts are marked with "debt" and −, not colour.
- Rejected: Separate subtotal boxes.
- Rests on: brief, "running total"

## 2026-11-18 · Ethical review of Tracker and You: no anti-patterns found
- Decided by: design subagent (b), default
- Why: Consent is four separate switches, all off. Deleting the account takes one confirmation, with no guilt wording and no red. Nothing is preselected in the category or type pickers. No streaks or badges.
- Rejected: Nothing.
- Rests on: Paper pages Tracker and You

## 2026-11-18 · Buy and Sell are equal outlined buttons with no primary
- Decided by: design subagent (c), default
- Why: Neither button is primary, so the screen never nudges anyone toward trading. That fits "not primarily a trading app" and "the coach never suggests trades".
- Rejected: Buy as the filled primary.
- Rests on: brief, Practice; Intent, Visual Misdirection

## 2026-11-18 · Journal tags are set by the user only
- Decided by: design subagent (c), default
- Why: A Planned/FOMO tag from the coach would be a judgement. The label reads "Your tag: Planned", and the filter offers All / Planned / FOMO / No tag.
- Rejected: Tags the coach sets.
- Rests on: brief, trade journal; coach rules (never shames)

## 2026-11-18 · Practice TFSA is a second account; orders over the room are stopped
- Decided by: design subagent (c), default
- Why: Buying in the TFSA uses up room. An order over the room shows a notice with "Place it in my regular account" and "Change amount". Place order is aria-disabled, with the reason written out.
- Rejected: A penalty mechanic.
- Rests on: brief, Practice TFSA ($7,000 room)

## 2026-11-18 · The trade flow shows both a step counter and a question counter
- Decided by: design subagent (c), default
- Why: The flow has 5 steps, so the top bar shows "Step n of 5". The coach card shows "Question n of 3".
- Rejected: Dropping either counter.
- Rests on: DESIGN.md, step counter rule

## 2026-11-18 · Theme follow-ups: icon size tokens, the 72 ring and inverse text area on the board, the TFSA bar at its true share, and chart offsets on the 4/8 scale
- Decided by: Aariz-Claude (coordinator), applied by design subagent (e)
- Why: The queued Theme follow-ups from batches 2 and 3. Paper has no size token type, so `--icon-sm` 16, `--icon-md` 20 and `--icon-lg` 24 are file tokens of type spacing, and every 16, 20 and 24 icon on Theme, Start, Coach, Tracker, Practice and You (270 SVGs: 24 at 16, 79 at 20, 167 at 24, counted by get_jsx after the change, none left raw) has its width and height bound to them. Components: product gains "Ring · 72, Tracker home grid", copied from Tracker · Home (72, 8 stroke, whole dollars), and "Text area · inverse", copied from Trade · Coach 1 of 3 (Cream 50 field at `--radius-sm` on a Brown 900 sample card, focus a 2 Brown 900 gap plus a 2 `--color-focus-ring-inverse` ring, helper and counter in `--color-text-inverse-secondary`). The TFSA bar fill was 268 of 358 (74.9%); it is now 82.29% of the track (about 295), matching $5,760 of $7,000. Chart Y labels were 18 high in a 178 lane with the plot 9 down, so labels centred on gridlines at a 9 offset; labels are now Caption on a 16 line in a 176 lane (156 for the three-label Stock chart) with the plot 8 down, so each label still centres on its gridline and on the zero line. The net-worth month row had 18 gaps between 32 wide labels under points 50 apart; labels are now 34 wide with 16 gaps, still 50 apart, and the points moved 1 right (17 to 267) to stay centred over them. Applied to the Theme charts, Tracker · Net worth, Practice · Home, Stock · Plain English and the Practice · Loading Y lane, then re-screenshotted. Pages now run Theme, Start, Coach, Tracker, Practice, You, Logo concepts.
- Rejected: Keeping 32 wide month labels with points 48 apart (leaves 26 on the right of a 282 plot against 16 on the left). Shrinking the plot to 272 (would also change the Practice charts, outside this pass). Binding the 48 specimens on the Icons board (they are enlargements, not a fourth size).
- Rests on: the Theme follow-ups queued by design subagents (b) and (c) in batches 2 and 3; coordinator brief to design subagent (e), 2026-11-18; Paper file 01M7ND942KK1P3EG7FGKWPZ962, pages Theme, Tracker and Practice

## 2026-11-18 · The Practice range control stays in its card, with smaller corners
- Decided by: fix subagent F3, default
- Why: It filters the chart beside it. Inside a card with 16px padding, the track takes radius 2 and its segments take 0.
- Rejected: Moving the control out of the card, which separates it from the chart.
- Rests on: review-fixes R3.4; DESIGN.md, Shapes

## 2026-11-18 · Journal: the two Practice TFSA buys are dated, and the FX-fee status sits on two lines
- Decided by: fix subagent F3, default
- Why: VFV.TO was bought Nov 6, the same day as the ZEB.TO sale that cites it. XEQT was bought Oct 16, a payday. "Open · down by the FX fee" can't fit on one line, so it's set as "Open" over "down by the FX fee" in the 120 lane.
- Rejected: One line, which leaves "fee" alone on its own line. Widening the lane, which pushes the trade line onto a second line.
- Rests on: review-fixes R3.1 and R3.6

## 2026-11-18 · The check-in shows the step counter in the top bar only; the question counter appears only where the counts differ
- Decided by: Aariz-Claude (coordinator), under Aariz's "no redundant labels" rule
- Why: The check-in has 3 steps and 3 questions, so "Step 1 of 3" plus "Question 1 of 3" says the same thing twice. Practice has 5 steps and 3 questions, so both counters carry information there. The Coach card component makes the question counter optional, and the card keeps Skip in that row.
- Rejected: Both counters on the check-in (F1's version, which repeats the label); no counter on the Practice card (it would hide the question count).
- Rests on: review-fixes R1.2; Aariz's checklist; decision "The trade flow shows both a step counter and a question counter"

## 2026-11-18 · 16px icons use a 1.5 stroke
- Decided by: fix subagent F1, under R1.3
- Why: One stroke for every icon size.
- Rejected: 1.75 at 16px.
- Rests on: review-fixes.md R1.3

## 2026-11-18 · Category chips on the check-in entry are 44 high and 108 wide
- Decided by: fix subagent F1, under R1.4
- Why: Three per row, so "Not sure" never ends up alone on a line.
- Rejected: Chips sized to their labels.
- Rests on: review-fixes.md R1.4

## 2026-11-18 · Focus halo and shadow colour get their own tokens
- Decided by: fix subagent F1, default
- Why: The input focus halo and the elevation shadows get role names, like every other colour, so a palette change reaches them without touching the ramp. `--color-focus-halo` points to Cream 200. `--color-shadow` points to Brown 900 and is always used through color-mix at the level's opacity (6%, 8%, 14%), never as a solid fill.
- Rejected: Pointing the halo and shadows straight at ramp steps.
- Rests on: pending-decisions.md, "New tokens from F1"; DESIGN.md, Elevation & Depth

## 2026-11-18 · Budget rings show money left, not money spent
- Decided by: R2 review, applied by fix subagent F2
- Why: The figure beside each ring is the amount left, so an arc showing money spent contradicted it. Arc = left ÷ budget × circumference. Butt caps keep short arcs from looking bigger than they are.
- Rejected: Keeping "fills as money is spent". Round caps, which add about 4 to each end of the arc.
- Rests on: review-fixes.md R2.1

## 2026-11-18 · Subscriptions compare Monthly and Yearly in columns, with one totals row
- Decided by: R2 review, applied by fix subagent F2
- Why: Mixed /mo and /yr prices couldn't be compared. Amazon converts to $8.25 a month. The renewal date moves to a caption.
- Rejected: Two split totals above the table.
- Rests on: review-fixes.md R2.2

## 2026-11-18 · Net worth month labels keep a 16 gap token instead of space-between
- Decided by: fix subagent F2, default
- Why: Each label stays centred under its data point.
- Rejected: space-between, as the review suggested, which shifts the labels off their points.
- Rests on: review-fixes.md R2.7

## 2026-11-18 · Check-in · What and how much keeps "Check-in" as its top-bar title
- Decided by: Aariz-Claude (coordinator), recorded by design subagent V1
- Why: It is a single-screen entry step before the questions, not one of the three counted steps, so it takes a title rather than "Step n of 3". Its Back goes to Coach.
- Rejected: "Step 1 of 4", which would count a form as a question step and shift every counter after it.
- Rests on: F1 verify-pass follow-ups; DESIGN.md, Navigation (Back and Close in a flow)

## 2026-11-18 · Over budget, the ring draws no arc; the words carry it
- Decided by: Aariz-Claude (coordinator), applied by design subagent V1
- Why: With rings showing money left, a negative amount has no arc to draw. The track stays alone and the figure reads "▼ −$18 over" in Title 2, with "spent $318 of $300 · payday in 6 days" under it, so colour and shape never carry the meaning alone. $0 left is also the bare track, told apart from over budget by its words. The old full ring with a Cream 50 notch is gone.
- Rejected: A full ring with a notch (reads as "full", the opposite of "nothing left"). A second arc or an alarm colour for the overspend.
- Rests on: F2 verify-pass follow-ups; DESIGN.md, Principle 5 and Budget ring

## 2026-11-18 · Verify pass V1: counters, rings, date picker, 16px strokes, chip token and the stock-chart baseline applied in Paper
- Decided by: Aariz-Claude (coordinator), applied by design subagent V1
- Why: The open follow-ups from fix rounds F1, F2 and F3.
  - Counters: "Question n of 3" removed from Check-in 1, 2 and 3 of 3 and Check-in · Loading; their 44 rows now justify Skip to the end. Coach · Motion's two cards had a bare counter row; it became a 44 Skip row, and its note now says only the top bar's Step n of 3 changes. On Theme "Components & states", the five Coach card examples lost the counter and the anatomy row is now "Skip row", documenting the optional counter. Practice keeps "Question n of 3".
  - Rings on "Components: product": 96 ring 127.9 of 270.2 ($142 of $300), 72 ring 95.2 of 201.1, both butt caps; $0 left and over budget are track only.
  - Theme date picker: card wrapper removed (no fill, edge, radius or padding), 8 between columns and between week rows, 12 between sections, width fit-content (7 × 44 + 6 × 8 = 356), matching Start · Pay dates.
  - 16px icons: of 24, 17 were at 1.75 and one check at 2; all 18 are now 1.5. Alert dots stay 2-unit round dots (one moved from 2.25 to 2).
  - Chip width: new token `--size-chip-category` 108 (type spacing), bound to the five category chips on Check-in · What and how much.
  - Stock · Plain English: the chart's bottom gridline moved from `--color-border-default` to `--color-border-subtle`, like the other two.
- Rejected: Documenting 108 as a raw exception instead of tokenising it.
- Rests on: pending-decisions.md, F1/F2/F3 follow-ups; Paper file 01M7ND942KK1P3EG7FGKWPZ962, pages Theme, Coach and Practice

## 2026-11-18 · Verify pass V2: 48 primaries, the Card ring, token binding, and the padding comment resolved
- Decided by: Aariz-Claude (coordinator), applied by design subagent V2
- Why: The last four verification findings, plus closing Brendan Lau's padding comment once the standard was confirmed file-wide.
  - Primary buttons 52 → `--spacing-48`, per DESIGN.md Buttons. Start: Get started, Continue on Birth year and Consent, Save pay dates, Create account (disabled). Coach: Next on Check-in · What and how much, plus Start a check-in on Coach · Home, Reminder set and Bought. The fourth Start a check-in sits on Start · First Coach screen and changed too. Kept at 52: the Coach card answers (Remind me, Buy anyway, Worth it, Not really, I'm getting it, Let it go, Keep holding), the Apple, Google and email auth buttons, and the 52 inputs. Every 844 frame still fits.
  - Theme "Components & states", Card: the three 72 rings (Default, Pressed, Focus; r=30) used round caps with a 99/189 dasharray. They now use butt caps with `89.2 188.5`, which is $142 left of $300. The spec line now reads "shows money left; shrinks as money is spent".
  - Tokens: every raw gap, padding and weight on Practice · Home, Stock · Plain English, Practice TFSA, Journal and Check-in · What and how much is now bound to `--spacing-*` / `--font-weight-*`, along with the 1W / 1M / All range controls on Practice · Loading and Practice · Motion. That covers card gaps 16/12/8/4/2, content gaps 32 and 24, the Stock Y-lane right padding 8, top bars 4/2/8, and weights 400/500/600/700. The status bar stays raw (allowed exception).
  - Theme charts: the two gridlines inside the below-zero band on the Net worth and Portfolio examples moved from `--color-border-default` to `--color-border-subtle`, matching "gridlines are Cream 200". The date picker was already 8 between rows with no card.
  - Comment c-tii8f0 (Start, "All boxes padding should resemble this box"): resolved. Final verification found screen content at 40 top / 16 sides on Start 7/7, Coach 13/13, Tracker 9/9, You 5/5 and Practice 20/20, and 16 inner padding on every box. Paper's MCP has no reply tool, so no reply was posted.
- Rejected: Changing the Coach card answer buttons to 48. DESIGN.md keeps them at 52 for the decision moment.
- Open: On the Cream 150 below-zero band, Cream 200 gridlines are almost invisible (about 1.1:1). The labels still carry the scale. If the lines need to show, the rule needs a band-specific exception rather than a raw value.
- Rests on: V1 final verification; DESIGN.md, Buttons, Layout and Charts; Paper file 01M7ND942KK1P3EG7FGKWPZ962, pages Theme, Start, Coach and Practice

## 2026-11-18 · Muted pink #D0A4B5 is drawn as an accent exploration beside the originals, not adopted
- Decided by: Aariz-Claude (coordinator) asked for it; values and placements are design subagent defaults
- Why: Aariz asked to see muted pink as an accent before choosing one. Pink is 2.05:1 on Cream 75, too light for text or a lone edge, so it needs a deep partner for text, a tint for surfaces, and Brown 900 on top of it (8.42). Seven file tokens hold the option (`--color-accent-pink` #D0A4B5, `-deep` #8D4963, `-subtle` #F3E7EC, `--color-on-accent-pink`, `--color-text-pink-inverse`, `--color-focus-ring-pink`, `-inverse`), so adopting it later remaps tokens rather than editing screens. Pink goes on selected states, one callout, brand and wayfinding marks and your own leaderboard row, one to three touches a screen. Rings use Pink deep (4.54 on the Cream 200 track) because Pink fails there (1.53). On Check-in · Decision pink sits only on the item and the recorded answers; Remind me and Buy anyway are unchanged and equal. The original screens stay untouched as the comparison; eight Original / Pink accent pairs sit on the new page "Accent · Muted pink", with a 1440 board of the same name on Theme.
- Rejected: Pink on Remind me alone (visual misdirection between the two doors). Pink for gain/loss, warnings or the practice return line (pink would carry meaning on its own). A Pink ring arc (1.53:1 on the track). A colored left stripe on your leaderboard row (side-stripe pattern); a full 1.5 inset edge is used instead. Swapping `--color-accent` itself to pink (would change every screen and drop the comparison).
- Rests on: WCAG 2.2 1.4.3 and 1.4.11, ratios computed from hex and checked against token bindings with get_computed_styles; DESIGN.md, Principle 4 and Accent option: Muted pink; Paper file 01M7ND942KK1P3EG7FGKWPZ962, Theme board and page "Accent · Muted pink"

## 2026-11-18 · The Practice range control's track pads 2, not 4, inside a 44 hit area
- Decided by: Aariz-Claude (coordinator), from the pink-accent review; applied by design subagent
- Why: On Practice · Home the range track was `--radius-sm` (2) with 4 padding around `--radius-none` (0) segments, which breaks Outer = Inner + Padding (0 + 4 = 4). Inside a 16-padded card the track must stay 2, so its padding is now `--spacing-2` (2 = 0 + 2). The track measures 40 high around 36 segments, centred in a new 44 high "Range · 44 target" frame, so the targets stay 44 and the card height is unchanged. Applied to Practice · Home on Practice and to both copies on "Accent · Muted pink", so the comparison stays fair. Stock · Plain English, Practice · Loading and Practice · Motion use a 6 / 4 / 2 nest that already satisfies the rule and were left as they are.
- Rejected: Raising the track to `--radius-md` (would break the 6 cap's rule of 2 inside a padded card). Growing the segments to 40 (changes the visual to fix a target).
- Rests on: DESIGN.md, Shapes (Outer = inner + padding) and Range control; get_node_info: track 40, hit area 44, segment 36

## 2026-11-18 · Pink accent review fixes: deep-pink tip edge, brown rings, segment pair recorded
- Decided by: Aariz-Claude (coordinator), from the review; applied by design subagent
- Why: The daily tip's 1px Pink edge measured 2.05 on Cream 75 and 1.81 on the fill, so it is now Pink deep (6.08 / 5.34). Tracker's ring arcs went back to `--color-accent` so pink is never a data colour, leaving the tab as the screen's one pink touch. The suggested deep-pink "10 days until payday" caption was not added: its line carries a money figure, and pink there would be decoration on data. The Theme board gained the pair "Pink segment on Cream 100 track · 1.90 · Not the only cue"; the deep-pink ring row was removed.
- Rejected: Keeping Pink deep rings (pink as a data colour).
- Rests on: review of commit be5941e; WCAG 2.2 1.4.11
