# HLD Finance

HLD (spoken "Hold") is a Canadian money app for 18–30 year olds. Tagline: *Think before you buy.*
"Hold" works two ways: hold off on impulse buys, and hold investments long term.

The full plan is in the Google Doc "HLD Finance Project": https://docs.google.com/document/d/1UkjBy3yjwSxKpvv108pIKKJ0E9tRwRV3h7ns_OfjNug/edit

## Phases
| Phase | What |
|---|---|
| 0 | Domains, handles, landing page, demo video, waitlist |
| 1 | **HLD Practice**: paper trading, leagues, coach on practice trades, trade journal, practice TFSA (free) |
| 2 | Spending coach: Flinks/Plaid read-only bank linking, purchase check-ins; launch HLD Pro |
| 3 | Real investing through the user's own broker via SnapTrade (Simple / Standard / Pro screens) |
| 4 | HLD balance + card via a banking-as-a-service partner; parent-first teen accounts |
| 5 | Own dealer licence (CIRO), only if big enough |

## Phase 1 MVP scope (HLD Practice)
1. Sign up / log in (email + Google/Apple).
2. $10,000 CAD fake starting balance.
3. Search US **and TSX** stocks/ETFs; 15-minute delayed quotes are fine.
4. Buy/sell (market orders first, limit later; fractional OK).
5. Portfolio: holdings, P&L, simple chart.
6. Coach questions before each trade ("What's your plan? How long will you hold? What would make you sell?"), stored with the trade.
7. Trade journal, with pattern insights later.
8. Leagues: create, invite link, % return leaderboard (weekly/monthly).
9. Practice TFSA with a contribution-room limit.

## Proposed stack (confirm with the user before scaffolding)
- Web: Next.js (App Router, TypeScript) + Tailwind. Mobile: Expo later.
- Supabase: Postgres + Auth, Row Level Security on every table.
- Market data: a provider with TSX coverage and delayed quotes (not chosen yet), behind a `MarketDataProvider` interface.
- AI coach: Claude API (Haiku for short prompts, Sonnet for insights), structured JSON output.
- Stripe only for HLD Pro subscriptions.

## Hard rules
- Never hold or move real user money in Phases 0–3.
- The coach asks questions and shows facts. It never says "buy this" or "sell that", and is never called an "advisor".
- Leagues are free to enter: no entry fee with a cash prize.
- PIPEDA: minimum data, encryption, full deletion, clear consent. Practice may have minors, so no ads and no selling data, ever.
- Never store government ID images.
- No hidden fees, no ads, no per-trade fees.
- Real investing is 18+ only.
- Coach tone: a friend, not a nag. One follow-up max, and check-ins can be turned off.
- Ask before adding paid services or per-user-cost dependencies. Secrets go in `.env.local` and are never committed.
