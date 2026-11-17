# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

Phone-first. Screens are designed at 390×844 (iPhone) and scale up to desktop web. A native Expo app comes later and is not designed for yet.

## Stack

Proposed, not yet confirmed by Aariz: Next.js (App Router, TypeScript) + Tailwind on the web, Supabase (Postgres + Auth, Row Level Security on every table), Claude API for the coach (Haiku for short prompts, Sonnet for insights), Stripe only for HLD Pro. Market data provider not chosen; it sits behind a `MarketDataProvider` interface. Expo for mobile later.

## Users

Canadians aged 18 to 30, early in their money life: first paycheques, first credit card, first TFSA, a phone in hand at the moment of an impulse buy. HLD Practice (fake money) also allows teens, so some users are minors.

Their jobs:
- Pause before a purchase and decide on purpose, without being lectured.
- See where their pay goes between paydays, without linking a bank.
- Learn investing with fake money before risking real money, with friends.

## Product Purpose

HLD (said "Hold") helps young Canadians think before they buy. "Hold" means two things: hold off on impulse buys, and hold investments for the long term. The product is not primarily a trading app.

Phase 1 ships three pillars, with the Coach check-in as the main feature:

1. **Coach** (main feature): a daily money tip; a before-you-buy check-in (item and price in, three questions out: "Need it or want it? Does it fit this month's budget? Will you still want it in 3 days?", then [Remind me in 3 days] / [Buy anyway], with Buy anyway always visible); optional reminders for tomorrow or in 3 days; a running Skipped total labelled "money not spent, not money saved"; a budget check-in with one friendly question and user-picked next steps ([Worth it] / [Not really]).
2. **Tracker** (manual): log a purchase (amount, category, optional note); category budgets as a ring with what's left until the next payday, from user-set pay dates; subscriptions with renewal reminders and monthly and yearly totals; hand-entered net worth (chequing, TFSA, RRSP, FHSA, credit card) with a month-by-month chart that can go below zero. Settings show "Tracking: manual" and "Bank sync: coming later".
3. **Practice** (fake money): $10,000 CAD start; search US and TSX stocks and ETFs with 15-minute delayed quotes, labelled as delayed; market buy and sell, fractional shares; holdings, P&L and a simple chart; coach questions before each trade ("What's your plan? How long will you hold? What would make you sell?") stored with the trade; a plain-English trade screen (what the company does, cost in CAD including any FX fee, share of portfolio it becomes); a trade journal with reason, outcome and Planned/FOMO tags; leagues (create, invite link, % return leaderboard weekly or monthly, prize is bragging rights); a Practice TFSA with a contribution-room limit.

Auth: email, Google, Apple.

Success means users pause before purchases they'd regret, and choose on purpose, whichever way they choose.

## Positioning

The coach asks before you act and then steps aside. It never blocks a purchase, never says buy or sell, and treats a skipped purchase as money not spent rather than money saved. The same question habit carries from spending to practice investing, so a young Canadian learns to hold in both senses.

## Operating Context

- Check-ins happen in the moment: in a store line, on a checkout page, one-handed, often distracted.
- Tracking is manual in Phase 1. Bank linking (Flinks/Plaid, read-only) comes in Phase 2.
- Practice quotes are 15-minute delayed and in fake money. US holdings convert to CAD with a shown FX fee.
- Canadian registered accounts are part of the vocabulary: TFSA, RRSP, FHSA. Contribution room is a real constraint the Practice TFSA mirrors.
- Leagues are social: invite links shared in group chats.

## Capabilities and Constraints

Hard rules:
- Never hold or move real user money in Phases 0 to 3.
- The coach is "financial help". It is never called "advisor" or "assistant". It asks questions and shows facts; it never says "buy this" or "sell that".
- Coach tone is a friend, not a nag. It never blocks or shames. One follow-up max per purchase. Check-ins can be switched off.
- Coach screens carry the fine print "General information, not personalized advice." Fine print lives on coach screens only.
- Practice always says "fake money". Growth math is labelled "an assumption, not a promise".
- Leagues are free to enter. Never use "bet", "wager", "jackpot" or "win cash".
- No ads, ever. No selling data. No per-trade fees, no hidden fees, no "for life" deals.
- No fake urgency, no streak-loss pressure, no confirmshaming.
- Privacy defaults to the highest setting. Consent is separate for each purpose. Full deletion is available. PIPEDA: minimum data, encryption.
- Never store government ID images.
- Real investing (Phase 3) is 18+ only.
- Ask before adding paid services or per-user-cost dependencies.

Undecided (defaults logged in `design/decisions.md`):
- Whether the trade coach asks all three questions every time, and whether it can be switched off.
- The Practice TFSA room amount and what happens on over-contribution.
- What minors see in leagues.
- How onboarding, consent, age-gate and deletion flows look.
- The accent colour. Aariz will supply options; until then accent and state slots point at cream/brown ramp values.

## Brand Commitments

- Name: HLD, said "Hold". Tagline: *Think before you buy.*
- Foundation colours pinned by Aariz: Cream 75 `#FCF8F2` and Brown 900 `#1E120C` carry surfaces, text, borders and hierarchy.
- Accent deferred to Aariz.
- Gain and loss must read without hue: ▲ + and ▼ − (true minus sign) with tabular numerals.

## Evidence on Hand

None yet: no users, testimonials, press, usage data or market-data provider. Demonstration data in designs is synthetic and must never read as real performance claims.

## Product Principles

1. Ask, don't advise. The coach's output is questions and facts; the decision is always the user's.
2. Never block. Every pause has an exit that is equally visible.
3. Honest numbers. Skipped is not saved; fake money is fake; growth is an assumption.
4. Calm over engagement. No streaks, urgency or nagging; one follow-up, and it can be turned off.
5. Protect the youngest user. Minors may be present, so privacy is maximal by default and nothing is sold or advertised.

## Accessibility & Inclusion

WCAG 2.2 AA minimum, including text contrast on every cream/brown step. Gain and loss never rely on colour alone. Plain language for readers new to money terms. Motion respects reduced-motion settings.
