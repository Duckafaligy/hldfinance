import type { CSSProperties, ReactNode } from "react";
import { Wordmark } from "./components/Brand";
import { change, money, tone, type Tone } from "./lib/money";
import { CountUp } from "./components/CountUp";
import { HeroGlow } from "./components/HeroGlow";
import { Icon, type IconName } from "./components/Icon";
import { Parallax } from "./components/Parallax";
import { Pricing } from "./components/Pricing";
import { Reveal } from "./components/Reveal";
import { WaitlistForm } from "./components/WaitlistForm";

const v = (vars: Record<string, string | number>) => vars as CSSProperties;
const START = money(10000, { whole: true }); // "$10,000"

// Change text colour: the state tokens' 600 step (AA on white and tints), never colour alone.
const toneText: Record<Tone, string> = {
  gain: "text-state-gain-text",
  loss: "text-state-loss-text",
  flat: "text-state-neutral-text",
};
const toneChip: Record<Tone, string> = {
  gain: "bg-state-gain-bg text-state-gain-text",
  loss: "bg-state-loss-bg text-state-loss-text",
  flat: "bg-state-neutral-bg text-state-neutral-text",
};

// Each feature gets the tile of its job colour (tokens.md, Icon set).
const features: { title: string; body: string; icon: IconName; tile: string }[] = [
  { title: `${START} in fake CAD`, body: "Start with a practice balance. No deposits, no real money, nothing to lose.", icon: "wallet", tile: "bg-accent-primary text-paper" },
  { title: "TSX and US stocks", body: "Search Canadian and US stocks and ETFs with delayed quotes, the same names you'd see at a real broker.", icon: "trade", tile: "bg-text-primary text-text-inverse" },
  { title: "Free leagues", body: "Make a league with friends, share an invite link, and see who manages their practice money best.", icon: "league", tile: "bg-league-50 text-league-500" },
  { title: "Coach questions", body: "Before each trade, a few quick questions: what's your plan, how long will you hold, what would make you sell?", icon: "coach", tile: "bg-coach-50 text-coach-500" },
  { title: "Trade journal", body: "Every answer is saved with the trade, so you can look back at what you were thinking, not just what happened.", icon: "journal", tile: "bg-journal-50 text-journal-500" },
  { title: "Practice TFSA", body: "Learn how TFSA contribution room works by trading inside a practice TFSA with a real room limit.", icon: "practice-tfsa", tile: "bg-accent-primary-subtle text-text-link" },
];

const leagueSteps = [
  { title: "Start or join a league", body: "Create one in a few taps, or join with an invite link from a friend." },
  { title: "Everyone gets the same start", body: `Each player trades their own ${START} in practice money.` },
  { title: "Climb the leaderboard", body: "Rankings use % return over the week or the month, so a fair start stays fair." },
  { title: "Free, for bragging rights", body: "No entry fees and no cash prizes. It's practice, and it stays that way." },
];

const leaderboard = [
  { rank: 1, initials: "MK", name: "maya.k", pct: 9.84 },
  { rank: 2, initials: "You", name: "you · 3-wk streak", pct: 4.82, you: true },
  { rank: 3, initials: "DR", name: "dev.r", pct: -0.62 },
];

const faqs = [
  { q: "Is it real money?", a: "No. HLD Practice uses fake money only. You can't deposit, withdraw, win or lose real money." },
  { q: "Is it free?", a: "Yes. HLD Practice and its leagues are free. No ads, no per-trade fees, and we never sell your data." },
  {
    q: "Is the coach giving financial advice?",
    a: "No. The coach asks questions and shows facts. It never tells you what to buy or sell. The decisions, and the practice, are yours.",
  },
  {
    q: "When does it launch?",
    a: "We're building HLD Practice now and don't have a date yet. Join the waitlist and we'll email you when it opens.",
  },
];

// Sparkline: 3px gain stroke, gradient area fill, dashed start-value line.
const spark = "M0 62 L40 60 L80 64 L120 52 L160 50 L200 42 L240 40 L280 34 L320 30 L360 22 L400 18 L440 10 L480 6";
// Area = --fill-gain (line colour 24% -> 0, top to bottom, rgba stops).
function Sparkline({ id, className = "" }: { id: string; className?: string }) {
  return (
    <svg aria-hidden="true" viewBox="0 0 480 72" preserveAspectRatio="none" className={className}>
      <defs>
        <linearGradient id={id} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="rgba(10,138,74,0.24)" />
          <stop offset="1" stopColor="rgba(10,138,74,0)" />
        </linearGradient>
      </defs>
      <path d={`${spark} L480 72 L0 72 Z`} fill={`url(#${id})`} />
      <line x1="0" y1="60" x2="480" y2="60" stroke="#CFD1DA" strokeWidth="1.5" strokeDasharray="4 6" vectorEffect="non-scaling-stroke" />
      <path d={spark} fill="none" stroke="#0A8A4A" strokeWidth="3" strokeLinejoin="round" strokeLinecap="round" vectorEffect="non-scaling-stroke" />
    </svg>
  );
}

// Change chip (Patterns 10.1): arrow + sign + colour together, from the money helper.
function ChangeChip({ pct, amount, small = false }: { pct: number; amount?: number; small?: boolean }) {
  return (
    <span className={`num inline-flex items-center rounded-pill font-extrabold ${toneChip[tone(pct)]} ${small ? "h-5 px-1.5 text-[9px]" : "h-8 px-3 text-label"}`}>
      {change({ pct, amount })}
    </span>
  );
}

function Section({
  id,
  className = "",
  center = false,
  title,
  lead,
  children,
}: {
  id: string;
  className?: string;
  center?: boolean;
  title: ReactNode;
  lead: string;
  children: ReactNode;
}) {
  return (
    <section id={id} aria-labelledby={`${id}-title`} className={`overflow-clip py-section ${className}`}>
      <div className="mx-auto max-w-page px-gutter">
        <h2 id={`${id}-title`} className={`max-w-2xl font-display text-[34px] leading-[38px] font-extrabold tracking-[-0.025em] md:text-h1 ${center ? "mx-auto text-center" : ""}`}>
          {title}
        </h2>
        <p className={`mt-4 max-w-2xl text-body-l text-text-secondary ${center ? "mx-auto text-center" : ""}`}>{lead}</p>
        <div className="mt-12">{children}</div>
      </div>
    </section>
  );
}

// Phone mockup of the HLD Practice portfolio screen (SaaS Assets board). Illustration only.
function PhoneMockup({ className = "" }: { className?: string }) {
  const holdings = [
    { t: "SHOP.TO", n: "Shopify", value: 1062, pct: 2.93 },
    { t: "RY.TO", n: "Royal Bank", value: 884.25, pct: -0.71 },
    { t: "AAPL", n: "Apple", value: 694.56, pct: 1.11 },
  ];
  const tabs: [IconName, string][] = [["portfolio", "Portfolio"], ["trade", "Trade"], ["league", "League"], ["journal", "Journal"], ["profile", "Profile"]];
  return (
    <figure className={`w-[236px] shrink-0 ${className}`}>
      <figcaption className="sr-only">Example of the HLD Practice portfolio screen</figcaption>
      <div aria-hidden="true" className="h-[500px] rounded-phone border-[7px] border-ink bg-ink shadow-device">
        <div className="flex h-full flex-col overflow-hidden rounded-phone-screen bg-surface-raised">
          <div className="num flex h-[30px] shrink-0 items-center justify-between px-5 text-[11px] font-bold">
            9:41 <span className="h-2.5 w-5 rounded-[3px] border-[1.5px] border-text-primary" />
          </div>
          {/* Practice indicator (Patterns 10.6): same place on every Practice screen. */}
          <div className="flex h-5 shrink-0 items-center justify-center gap-1.5 bg-night text-[8px] font-bold text-paper">
            <span className="size-1 rounded-pill bg-indigo-300" />
            Practice · fake money
          </div>
          <div className="flex-1 px-4 pt-2">
            <div className="flex items-center justify-between">
              <Wordmark cap={12} />
              <Icon name="alerts" size={14} />
            </div>
            <p className="mt-2 text-[9px] font-semibold text-text-secondary">Practice portfolio</p>
            <CountUp from={10000} to={10482.16} delay={1000} className="num block text-[24px] leading-8 font-extrabold tracking-[-0.03em]" />
            <ChangeChip small pct={4.82} amount={482.16} />
            <Sparkline id="fill-gain-phone" className="mt-2 h-12 w-full" />
            <div className="mt-2 flex justify-between rounded-pill bg-surface-sunken p-0.5 text-[8px] font-bold text-text-secondary">
              {["1D", "1W", "1M", "1Y", "All"].map((r) => (
                <span key={r} className={`rounded-pill px-2 py-0.5 ${r === "1M" ? "bg-text-primary text-text-inverse" : ""}`}>
                  {r}
                </span>
              ))}
            </div>
            <p className="mt-3 text-[10px] font-bold">Holdings</p>
            <ul className="mt-1 divide-y divide-border-subtle">
              {holdings.map((h) => (
                <li key={h.t} className="flex items-center gap-2 py-1.5">
                  <span className="grid size-5 place-items-center rounded-pill bg-surface-sunken text-[8px] font-bold">{h.t[0]}</span>
                  <span className="flex-1 leading-tight">
                    <span className="block text-[9px] font-bold">{h.t}</span>
                    <span className="block text-[7px] text-text-secondary">{h.n}</span>
                  </span>
                  <span className="num text-right leading-tight">
                    <span className="block text-[9px] font-bold">{money(h.value)}</span>
                    <span className={`block text-[7px] font-extrabold ${toneText[tone(h.pct)]}`}>{change({ pct: h.pct })}</span>
                  </span>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex h-[52px] shrink-0 items-center justify-around border-t border-border-subtle">
            {tabs.map(([icon, label], i) => (
              <span key={label} className={`flex flex-col items-center gap-0.5 text-[7px] font-semibold ${i === 0 ? "text-text-link" : "text-text-secondary"}`}>
                <Icon name={icon} size={18} />
                {label}
              </span>
            ))}
          </div>
        </div>
      </div>
    </figure>
  );
}

// Hero floating cards (SaaS Assets "Landing hero"): small, illustrative, at depth around the phone.
function TrustRow() {
  const items: [IconName, string][] = [["wallet", "Free"], ["gain", "Fake money, real skills"], ["practice-tfsa", "No ads"], ["profile", "Made for Canada"]];
  return (
    <ul className="flex flex-wrap justify-center gap-2 tablet:gap-x-6 tablet:gap-y-2">
      {items.map(([icon, label]) => (
        <li
          key={label}
          className="inline-flex h-9 items-center gap-2 rounded-pill bg-surface-raised/70 px-3 text-label font-semibold tablet:h-auto tablet:bg-transparent tablet:px-0"
        >
          <Icon name={icon} size={16} className="text-text-link" />
          {label}
        </li>
      ))}
    </ul>
  );
}

function LeagueChip() {
  return (
    <div className="card flex items-center gap-3 rounded-card py-3 pl-3 pr-5 text-left">
      <span className="grid size-12 place-items-center rounded-tile bg-[image:var(--grad-ember)] text-paper">
        <Icon name="league" size={24} />
      </span>
      <span>
        <span className="num block text-[22px] leading-6 font-extrabold">#2</span>
        <span className="block text-caption text-text-secondary">Friday league</span>
      </span>
    </div>
  );
}

function HeroStage() {
  return (
    <>
      {/* Phone width: the portfolio card with the league chip tucked under its corner (board "phone width"). */}
      <div className="relative mx-auto w-full max-w-[400px] pb-10 tablet:hidden">
        <figure className="halo">
          <div className="glass p-5 text-left">
            <figcaption className="flex items-center gap-2 text-label font-semibold text-text-secondary">
              <span className="size-1.5 rounded-pill bg-indigo-300" />
              Practice portfolio
            </figcaption>
            <CountUp from={10000} to={10482.16} delay={1000} className="num mt-1 block text-[34px] leading-10 font-extrabold tracking-[-0.03em]" />
            <span className="mt-2 inline-block">
              <ChangeChip pct={4.82} />
            </span>
          </div>
        </figure>
        <div className="absolute bottom-0 right-0">
          <LeagueChip />
        </div>
      </div>

      {/* From 600px: the phone is the centre object; cards float at depth on Halo glows (Parallax). */}
      <Parallax className="relative mx-auto hidden h-[400px] w-full max-w-[1080px] tablet:block desktop:h-[480px]">
        <div className="depth absolute inset-x-0 top-0 flex justify-center" style={v({ "--d": 0.3 })}>
          <PhoneMockup className="halo text-left desktop:[zoom:1.3]" />
        </div>
        <div className="depth halo absolute left-0 top-4 desktop:left-[4%] desktop:top-10" style={v({ "--d": 1 })}>
          <figure className="card w-[230px] p-4 text-left desktop:w-[340px] desktop:p-6">
            <figcaption className="flex items-center gap-2.5 text-caption font-semibold desktop:text-label">
              <span className="grid size-8 place-items-center rounded-pill bg-coach-500 text-paper">
                <Icon name="coach" size={16} />
              </span>
              Coach · before you buy
            </figcaption>
            <p className="mt-3 font-display text-[18px] leading-6 font-extrabold tracking-[-0.015em] desktop:text-[22px] desktop:leading-7">
              What&apos;s your plan? <i className="text-coach-500">How long will you hold?</i>
            </p>
            <div aria-hidden="true" className="mt-3 flex flex-wrap gap-1.5">
              {["< 1 month", "1–5 years", "5+ years"].map((a, i) => (
                <span
                  key={a}
                  className={`inline-flex h-7 items-center rounded-pill border px-2.5 text-caption font-semibold desktop:h-8 desktop:px-3 ${
                    i === 1 ? "border-coach-500 bg-coach-500 text-paper" : "border-border-strong"
                  }`}
                >
                  {a}
                </span>
              ))}
            </div>
          </figure>
        </div>
        <div className="depth halo absolute left-6 top-[236px] desktop:left-[13%] desktop:top-[290px]" style={v({ "--d": 1.4 })}>
          <figure className="card flex w-[200px] gap-3 rounded-card p-4 text-left desktop:w-[290px] desktop:p-5">
            <span aria-hidden="true" className="w-1 shrink-0 rounded-[4px] bg-journal-500" />
            <span>
              <figcaption className="text-caption text-text-secondary">Journal · Nov 12</figcaption>
              <span className="mt-1 block font-display text-[16px] leading-[22px] font-bold desktop:text-[19px] desktop:leading-6">
                <i>Why I bought:</i> holding 2 years.
              </span>
            </span>
          </figure>
        </div>
        <div className="depth halo absolute right-0 top-6 desktop:right-[6%] desktop:top-12" style={v({ "--d": 1.2 })}>
          <LeagueChip />
        </div>
        <div className="depth halo absolute right-4 top-[150px] desktop:right-[13%] desktop:top-[200px]" style={v({ "--d": 0.8 })}>
          <figure className="card rounded-card p-4 text-left">
            <figcaption className="text-caption text-text-secondary">SHOP.TO · held 30 days</figcaption>
            <span className="mt-2 block">
              <ChangeChip pct={2.93} />
            </span>
          </figure>
        </div>
      </Parallax>
    </>
  );
}

// Coach card (Theme UI "Coach card") on a night Halo. (The page's one Edge ring is the Pro pricing card.)
// Reveals on scroll; the primary button waits 600ms. Illustration only.
function CoachCard() {
  const answers = ["Under a month", "1 to 5 years", "5+ years"];
  return (
    <Reveal className="halo-night w-full max-w-[480px]">
      <figure className="scheme-page card p-6 text-left sm:p-8">
        <figcaption className="sr-only">Example of a coach check-in before a practice trade</figcaption>
        <div className="flex items-center gap-3">
          <span aria-hidden="true" className="grid size-10 shrink-0 place-items-center rounded-pill bg-coach-500 font-display text-[20px] font-extrabold text-paper">
            ?
          </span>
          <div>
            <p className="text-label font-semibold">Coach</p>
            <p className="text-caption text-text-secondary">Before your practice trade</p>
          </div>
        </div>
        <p className="reveal-question mt-5 font-display text-[28px] leading-[34px] font-extrabold tracking-[-0.015em]">
          What&apos;s your plan? <i className="text-coach-500">How long will you hold?</i>
        </p>
        <div aria-hidden="true" className="mt-5 flex flex-wrap gap-2">
          {answers.map((a, i) => (
            <span
              key={a}
              style={v({ "--i": i })}
              className={`reveal-chip inline-flex h-10 items-center rounded-pill border px-4 text-label font-semibold ${
                i === 1 ? "border-coach-500 bg-coach-500 text-paper" : "border-border-strong"
              }`}
            >
              {a}
            </span>
          ))}
        </div>
        <div aria-hidden="true" className="mt-5 min-h-18 rounded-input border border-border-strong px-4 py-3 text-text-muted">
          Why this one, in one line…
        </div>
        <div aria-hidden="true" className="mt-5 flex flex-wrap items-center gap-2">
          <span className="btn btn-primary coach-wait">Save my plan</span>
          <span className="btn btn-ghost">Wait a day</span>
        </div>
      </figure>
    </Reveal>
  );
}

export default function Home() {
  return (
    <>
      <HeroGlow>
        <div className="mx-auto flex max-w-page flex-col items-center px-gutter pb-12 pt-32 text-center tablet:pb-0 tablet:pt-40">
          <h1
            id="hero-title"
            className="font-display text-[54px] leading-[56px] font-extrabold tracking-[-0.04em] tablet:text-display"
          >
            <span className="line-mask">
              <span className="rise-line" style={v({ "--i": 1 })}>
                Think before
              </span>
            </span>
            <span className="line-mask">
              <span className="rise-line" style={v({ "--i": 2 })}>
                <i className="text-tide pr-[0.08em]">you buy.</i>
              </span>
            </span>
          </h1>
          <p className="rise-late mt-6 max-w-xl text-body-l text-text-secondary" style={v({ "--delay": "600ms" })}>
            Practise investing with {START} of fake money. Real TSX and US stocks, free leagues, and a coach that asks
            before every trade.
          </p>
          <div className="rise-late mt-8 flex w-full justify-center" style={v({ "--delay": "640ms" })}>
            <WaitlistForm />
          </div>
          <div className="rise-late mt-4" style={v({ "--delay": "680ms" })}>
            <TrustRow />
          </div>
          <div className="rise-late mt-12 w-full" style={v({ "--delay": "600ms" })}>
            <HeroStage />
          </div>
        </div>
      </HeroGlow>

      <Section
        id="practice"
        className="bg-surface-page"
        title={
          <>
            What is <i className="text-text-link">HLD Practice?</i>
          </>
        }
        lead="A free paper-trading app for learning how investing works, with fake money and real (delayed) market prices."
      >
        <ul className="grid grid-cols-1 gap-4 tablet:grid-cols-2 desktop:grid-cols-3">
          {features.map((f) => (
            <li key={f.title} className="card card-hover flex flex-col gap-5 p-7">
              <span className={`grid size-14 place-items-center rounded-tile ${f.tile}`}>
                <Icon name={f.icon} size={26} />
              </span>
              <div>
                <h3 className="font-display text-h3">{f.title}</h3>
                <p className="mt-2 text-text-secondary">{f.body}</p>
              </div>
            </li>
          ))}
        </ul>
      </Section>

      <Section
        id="leagues"
        className="bg-surface-sunken"
        title={
          <>
            Leagues: practice <i className="text-league-500">with friends.</i>
          </>
        }
        lead="Investing is easier to learn when your friends are doing it too."
      >
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[minmax(0,1fr)_420px] lg:items-start">
          <ol className="grid min-w-0 grid-cols-1 gap-4 md:grid-cols-2">
            {leagueSteps.map((s, i) => (
              <li key={s.title} className="card card-hover flex gap-4 rounded-card p-6">
                <span aria-hidden="true" className="num grid size-9 shrink-0 place-items-center rounded-pill bg-league-50 font-extrabold text-league-700">
                  {i + 1}
                </span>
                <div>
                  <h3 className="font-display text-h3">{s.title}</h3>
                  <p className="mt-2 text-text-secondary">{s.body}</p>
                </div>
              </li>
            ))}
          </ol>

          <figure className="card p-6">
            <figcaption className="flex items-baseline justify-between gap-3">
              <span className="font-display text-h3">Friday league</span>
              <span className="text-caption text-text-secondary">Example</span>
            </figcaption>
            <ol className="mt-4 space-y-2">
              {leaderboard.map((r) => (
                <li
                  key={r.rank}
                  className={`flex h-15 items-center gap-3 rounded-row px-3.5 ${r.you ? "scheme-light border-[1.5px] border-league-500 bg-league-50" : ""}`}
                >
                  <span className={`num w-7 shrink-0 font-extrabold ${r.you ? "text-league-700" : ""}`}>{r.rank}</span>
                  <span
                    aria-hidden="true"
                    className={`grid size-9 shrink-0 place-items-center rounded-pill text-caption font-bold ${
                      r.you ? "bg-league-500 text-paper" : "bg-accent-primary-subtle text-text-link"
                    }`}
                  >
                    {r.initials}
                  </span>
                  <span className="min-w-0 flex-1 truncate text-label font-semibold">{r.name}</span>
                  <span className={`num w-24 shrink-0 text-right text-label font-extrabold ${toneText[tone(r.pct)]}`}>
                    {change({ pct: r.pct })}
                  </span>
                </li>
              ))}
            </ol>
          </figure>
        </div>
      </Section>

      <Section
        id="coach"
        className="scheme-dark bg-aurora"
        title={
          <>
            A coach that asks, <i className="text-indigo-300">never tells.</i>
          </>
        }
        lead="Before each practice trade, the coach asks a few quick questions, like a friend who wants you to think it through."
      >
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center">
          <ul className="space-y-8">
            {(
              [
                ["coach", "bg-coach-50 text-coach-500", "Questions, not advice", "It never says what to buy or sell. It asks about your plan and shows you the facts."],
                ["journal", "bg-journal-50 text-journal-500", "Your answers, saved", "Each answer goes into your trade journal, next to the trade it belongs to."],
                ["hold-timer", "bg-paper text-ink", "Never a nag", "One follow-up at most, and you can turn check-ins off."],
              ] as [IconName, string, string, string][]
            ).map(([icon, tile, title, body]) => (
              <li key={title} className="flex gap-5">
                <span className={`grid size-14 shrink-0 place-items-center rounded-tile ${tile}`}>
                  <Icon name={icon} size={26} />
                </span>
                <div>
                  <h3 className="font-display text-h3">{title}</h3>
                  <p className="mt-2 text-text-secondary">{body}</p>
                </div>
              </li>
            ))}
          </ul>
          <div className="flex justify-center lg:justify-end">
            <CoachCard />
          </div>
        </div>
      </Section>

      <Section
        id="pricing"
        className="bg-surface-sunken"
        center
        title="Free, and Pro later"
        lead="Practice is free for good. Pro is a planned add-on for people who make it a habit."
      >
        <Pricing />
      </Section>

      <Section id="faq" className="bg-surface-page" title="Questions" lead="The short answers.">
        <div className="max-w-3xl divide-y divide-border-subtle border-y border-border-subtle">
          {faqs.map((f) => (
            <details key={f.q} className="group py-5">
              <summary className="flex min-h-11 cursor-pointer list-none items-center justify-between gap-4 rounded-chip font-display text-h3 [&::-webkit-details-marker]:hidden">
                {f.q}
                <span
                  aria-hidden="true"
                  className="grid size-9 shrink-0 place-items-center rounded-pill bg-accent-primary-subtle text-[22px] text-text-link transition-transform duration-240 ease-move group-open:rotate-45"
                >
                  +
                </span>
              </summary>
              <p className="mt-3 max-w-2xl text-text-secondary">{f.a}</p>
            </details>
          ))}
        </div>
      </Section>

      <section id="waitlist" aria-labelledby="waitlist-title" className="bg-indigo-mesh py-section text-paper">
        <div className="mx-auto flex max-w-page flex-col items-center px-gutter text-center">
          <h2 id="waitlist-title" className="font-display text-[34px] leading-[38px] font-extrabold tracking-[-0.025em] md:text-h1">
            Get in <i className="text-indigo-100">early.</i>
          </h2>
          <p className="mt-4 max-w-xl text-body-l text-indigo-100">
            Join the waitlist and we&apos;ll email you when HLD Practice opens. Free, with fake money only.
          </p>
          <div className="mt-8 flex w-full justify-center">
            <WaitlistForm onBrand />
          </div>
        </div>
      </section>
    </>
  );
}
