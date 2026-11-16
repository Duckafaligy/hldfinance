import type { CSSProperties, ReactNode } from "react";
import { Lockup } from "./components/Brand";
import { CountUp } from "./components/CountUp";
import { HeroGlow } from "./components/HeroGlow";
import { Icon, type IconName } from "./components/Icon";
import { Reveal } from "./components/Reveal";
import { WaitlistForm } from "./components/WaitlistForm";

const v = (vars: Record<string, string | number>) => vars as CSSProperties;

// Each feature gets the tile of its job colour (tokens.md, Icon set).
const features: { title: string; body: string; icon: IconName; tile: string }[] = [
  { title: "$10,000 in fake CAD", body: "Start with a practice balance. No deposits, no real money, nothing to lose.", icon: "wallet", tile: "bg-indigo text-paper" },
  { title: "TSX and US stocks", body: "Search Canadian and US stocks and ETFs with delayed quotes, the same names you'd see at a real broker.", icon: "trade", tile: "bg-ink text-paper" },
  { title: "Free leagues", body: "Make a league with friends, share an invite link, and see who manages their practice money best.", icon: "league", tile: "bg-league-tint text-league" },
  { title: "Coach questions", body: "Before each trade, a few quick questions: what's your plan, how long will you hold, what would make you sell?", icon: "coach", tile: "bg-coach-tint text-coach" },
  { title: "Trade journal", body: "Every answer is saved with the trade, so you can look back at what you were thinking, not just what happened.", icon: "journal", tile: "bg-journal-tint text-journal" },
  { title: "Practice TFSA", body: "Learn how TFSA contribution room works by trading inside a practice TFSA with a real room limit.", icon: "practice-tfsa", tile: "bg-indigo-tint text-indigo" },
];

const leagueSteps = [
  { title: "Start or join a league", body: "Create one in a few taps, or join with an invite link from a friend." },
  { title: "Everyone gets the same start", body: "Each player trades their own $10,000 in practice money." },
  { title: "Climb the leaderboard", body: "Rankings use % return over the week or the month, so a fair start stays fair." },
  { title: "Free, for bragging rights", body: "No entry fees and no cash prizes. It's practice, and it stays that way." },
];

const leaderboard = [
  { rank: 1, initials: "MK", name: "maya.k", change: "▲ +9.84%", up: true },
  { rank: 2, initials: "You", name: "you · 3-wk streak", change: "▲ +4.82%", up: true, you: true },
  { rank: 3, initials: "DR", name: "dev.r", change: "▼ −0.62%", up: false },
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

function GainChip({ children, small = false }: { children: ReactNode; small?: boolean }) {
  return (
    <span className={`num inline-flex items-center rounded-pill bg-gain-tint font-extrabold text-gain ${small ? "h-5 px-1.5 text-[9px]" : "h-8 px-3 text-label"}`}>
      {children}
    </span>
  );
}

function Pill({ children, className }: { children: ReactNode; className: string }) {
  return <span className={`inline-flex h-8 items-center rounded-pill px-3.5 text-label font-semibold ${className}`}>{children}</span>;
}

function Section({
  id,
  className = "",
  dark = false,
  title,
  lead,
  children,
}: {
  id: string;
  className?: string;
  dark?: boolean;
  title: ReactNode;
  lead: string;
  children: ReactNode;
}) {
  return (
    <section id={id} aria-labelledby={`${id}-title`} className={`overflow-clip py-section ${className}`}>
      <div className="mx-auto max-w-page px-gutter">
        <h2 id={`${id}-title`} className="max-w-2xl font-display text-[34px] leading-[38px] font-extrabold tracking-[-0.025em] md:text-h1">
          {title}
        </h2>
        <p className={`mt-4 max-w-2xl text-body-l ${dark ? "text-on-night-muted" : "text-slate"}`}>{lead}</p>
        <div className="mt-12">{children}</div>
      </div>
    </section>
  );
}

// Phone mockup of the HLD Practice portfolio screen (SaaS Assets board). Illustration only.
function PhoneMockup() {
  const holdings = [
    { t: "SHOP.TO", n: "Shopify", p: "$1,062.00", c: "▲ +2.93%", up: true },
    { t: "RY.TO", n: "Royal Bank", p: "$884.25", c: "▼ −0.71%", up: false },
    { t: "AAPL", n: "Apple", p: "$694.56", c: "▲ +1.11%", up: true },
  ];
  const tabs: [IconName, string][] = [["portfolio", "Portfolio"], ["trade", "Trade"], ["league", "League"], ["journal", "Journal"], ["profile", "Profile"]];
  return (
    <figure className="halo mx-auto w-[236px] shrink-0">
      <figcaption className="sr-only">Example of the HLD Practice portfolio screen</figcaption>
      <div aria-hidden="true" className="h-[500px] rounded-phone border-[7px] border-ink bg-ink shadow-device">
        <div className="flex h-full flex-col overflow-hidden rounded-phone-screen bg-paper">
          <div className="num flex h-[30px] shrink-0 items-center justify-between px-5 text-[11px] font-bold">
            9:41 <span className="h-2.5 w-5 rounded-[3px] border-[1.5px] border-ink" />
          </div>
          <div className="flex-1 px-4">
            <div className="flex items-center justify-between">
              <Lockup fontSize={15} />
              <Icon name="alerts" size={14} />
            </div>
            <p className="mt-3 text-[9px] font-semibold text-slate">Practice portfolio</p>
            <p className="num text-[24px] leading-8 font-extrabold tracking-[-0.03em]">$10,482.16</p>
            <GainChip small>▲ +$482.16 · +4.82%</GainChip>
            <Sparkline id="fill-gain-phone" className="mt-3 h-12 w-full" />
            <div className="mt-2 flex justify-between rounded-pill bg-mist p-0.5 text-[8px] font-bold text-slate">
              {["1D", "1W", "1M", "1Y", "All"].map((r) => (
                <span key={r} className={`rounded-pill px-2 py-0.5 ${r === "1M" ? "bg-ink text-paper" : ""}`}>
                  {r}
                </span>
              ))}
            </div>
            <p className="mt-3 text-[10px] font-bold">Holdings</p>
            <ul className="mt-1 divide-y divide-line">
              {holdings.map((h) => (
                <li key={h.t} className="flex items-center gap-2 py-1.5">
                  <span className="grid size-5 place-items-center rounded-pill bg-mist text-[8px] font-bold">{h.t[0]}</span>
                  <span className="flex-1 leading-tight">
                    <span className="block text-[9px] font-bold">{h.t}</span>
                    <span className="block text-[7px] text-slate">{h.n}</span>
                  </span>
                  <span className="num text-right leading-tight">
                    <span className="block text-[9px] font-bold">{h.p}</span>
                    <span className={`block text-[7px] font-extrabold ${h.up ? "text-gain" : "text-loss"}`}>{h.c}</span>
                  </span>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex h-[52px] shrink-0 items-center justify-around border-t border-line">
            {tabs.map(([icon, label], i) => (
              <span key={label} className={`flex flex-col items-center gap-0.5 text-[7px] font-semibold ${i === 0 ? "text-indigo" : "text-slate"}`}>
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

// Coach card (Theme UI "Coach card"): the page's one featured card, so it gets the Edge ring + a night Halo.
// Reveals on scroll; the primary button waits 600ms. Illustration only.
function CoachCard() {
  const answers = ["Under a month", "1 to 5 years", "5+ years"];
  return (
    <Reveal className="halo-night w-full max-w-[480px]">
      <figure className="card edge p-6 text-left sm:p-8">
        <figcaption className="sr-only">Example of a coach check-in before a practice trade</figcaption>
        <div className="flex items-center gap-3">
          <span aria-hidden="true" className="grid size-10 shrink-0 place-items-center rounded-pill bg-coach font-display text-[20px] font-extrabold text-paper">
            ?
          </span>
          <div>
            <p className="text-nav font-semibold">Coach</p>
            <p className="text-caption text-slate">Before your practice trade</p>
          </div>
        </div>
        <p className="reveal-question mt-5 font-display text-[28px] leading-[34px] font-extrabold tracking-[-0.015em]">
          What&apos;s your plan? <i className="text-coach">How long will you hold?</i>
        </p>
        <div aria-hidden="true" className="mt-5 flex flex-wrap gap-2">
          {answers.map((a, i) => (
            <span
              key={a}
              style={v({ "--i": i })}
              className={`reveal-chip inline-flex h-10 items-center rounded-pill border px-4 text-label font-semibold ${
                i === 1 ? "border-coach bg-coach text-paper" : "border-field-border"
              }`}
            >
              {a}
            </span>
          ))}
        </div>
        <div aria-hidden="true" className="mt-5 min-h-18 rounded-input border border-field-border px-4 py-3 text-placeholder">
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
        <div className="mx-auto flex max-w-page flex-col items-center px-gutter pb-20 pt-32 text-center sm:pt-40">
          <div className="rise-line flex flex-wrap justify-center gap-2" style={v({ "--i": 0 })}>
            <Pill className="bg-indigo-tint text-indigo">Free</Pill>
            <Pill className="bg-gain-tint text-gain">Fake money, real skills</Pill>
            <Pill className="bg-paper text-ink shadow-card">No ads</Pill>
          </div>
          <h1
            id="hero-title"
            className="mt-6 font-display text-[54px] leading-[56px] font-extrabold tracking-[-0.04em] sm:text-display lg:text-display-xl"
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
          <p className="rise-late mt-6 max-w-xl text-body-l text-slate" style={v({ "--delay": "600ms" })}>
            Practise investing with $10,000 of fake money. Real TSX and US stocks, free leagues with friends, and a coach
            that asks before every trade.
          </p>
          <div className="rise-late mt-8 flex w-full justify-center" style={v({ "--delay": "640ms" })}>
            <WaitlistForm />
          </div>

          <div className="halo rise-late mt-10 w-full max-w-[560px]" style={v({ "--delay": "600ms" })}>
            <figure className="glass p-6 text-left sm:p-7">
              <figcaption className="sr-only">Example practice portfolio</figcaption>
              <div className="flex items-center justify-between gap-3">
                <span className="text-nav font-semibold text-slate">Practice portfolio</span>
                <GainChip>▲ +4.82%</GainChip>
              </div>
              <CountUp from={10000} to={10482.16} delay={1000} className="num mt-2 block text-[36px] leading-10 font-extrabold tracking-[-0.03em] sm:text-money-glass" />
              <Sparkline id="fill-gain-hero" className="mt-5 h-24 w-full" />
            </figure>
          </div>
        </div>
      </HeroGlow>

      <Section
        id="practice"
        className="bg-paper"
        title={
          <>
            What is <i className="text-indigo">HLD Practice?</i>
          </>
        }
        lead="A free paper-trading app for learning how investing works, with fake money and real (delayed) market prices."
      >
        <div className="grid gap-10 lg:grid-cols-[236px_minmax(0,1fr)] lg:items-start xl:gap-16">
          <PhoneMockup />
          <ul className="grid min-w-0 grid-cols-1 gap-4 sm:grid-cols-2">
            {features.map((f) => (
              <li key={f.title} className="card card-hover flex flex-col gap-5 p-7">
                <span className={`grid size-14 place-items-center rounded-tile ${f.tile}`}>
                  <Icon name={f.icon} size={26} />
                </span>
                <div>
                  <h3 className="font-display text-h3">{f.title}</h3>
                  <p className="mt-2 text-slate">{f.body}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </Section>

      <Section
        id="leagues"
        className="bg-mist"
        title={
          <>
            Leagues: practice <i className="text-league">with friends.</i>
          </>
        }
        lead="Investing is easier to learn when your friends are doing it too."
      >
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[minmax(0,1fr)_420px] lg:items-start">
          <ol className="grid min-w-0 grid-cols-1 gap-4 md:grid-cols-2">
            {leagueSteps.map((s, i) => (
              <li key={s.title} className="card card-hover flex gap-4 rounded-card-accent p-6">
                <span aria-hidden="true" className="num grid size-9 shrink-0 place-items-center rounded-pill bg-league-tint font-extrabold text-league-text">
                  {i + 1}
                </span>
                <div>
                  <h3 className="font-display text-h3">{s.title}</h3>
                  <p className="mt-2 text-slate">{s.body}</p>
                </div>
              </li>
            ))}
          </ol>

          <figure className="card p-6">
            <figcaption className="flex items-baseline justify-between gap-3">
              <span className="font-display text-h3">Friday league</span>
              <span className="text-caption text-slate">Example</span>
            </figcaption>
            <ol className="mt-4 space-y-2">
              {leaderboard.map((r) => (
                <li
                  key={r.rank}
                  className={`flex h-15 items-center gap-3 rounded-row px-3.5 ${r.you ? "border-[1.5px] border-league bg-league-tint" : ""}`}
                >
                  <span className={`num w-7 shrink-0 font-extrabold ${r.you ? "text-league-text" : ""}`}>{r.rank}</span>
                  <span
                    aria-hidden="true"
                    className={`grid size-9 shrink-0 place-items-center rounded-pill text-caption font-bold ${
                      r.you ? "bg-league text-paper" : "bg-indigo-tint text-indigo"
                    }`}
                  >
                    {r.initials}
                  </span>
                  <span className="min-w-0 flex-1 truncate text-nav font-semibold">{r.name}</span>
                  <span className={`num w-24 shrink-0 text-right text-nav font-extrabold ${r.up ? "text-gain" : "text-loss"}`}>
                    {r.change}
                  </span>
                </li>
              ))}
            </ol>
          </figure>
        </div>
      </Section>

      <Section
        id="coach"
        className="bg-aurora text-paper"
        dark
        title={
          <>
            A coach that asks, <i className="text-indigo-on-dark">never tells.</i>
          </>
        }
        lead="Before each practice trade, the coach asks a few quick questions, like a friend who wants you to think it through."
      >
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center">
          <ul className="space-y-8">
            {(
              [
                ["coach", "bg-coach-tint text-coach", "Questions, not advice", "It never says what to buy or sell. It asks about your plan and shows you the facts."],
                ["journal", "bg-journal-tint text-journal", "Your answers, saved", "Each answer goes into your trade journal, next to the trade it belongs to."],
                ["hold-timer", "bg-paper text-ink", "Never a nag", "One follow-up at most, and you can turn check-ins off."],
              ] as [IconName, string, string, string][]
            ).map(([icon, tile, title, body]) => (
              <li key={title} className="flex gap-5">
                <span className={`grid size-14 shrink-0 place-items-center rounded-tile ${tile}`}>
                  <Icon name={icon} size={26} />
                </span>
                <div>
                  <h3 className="font-display text-h3">{title}</h3>
                  <p className="mt-2 text-on-night-muted">{body}</p>
                </div>
              </li>
            ))}
          </ul>
          <div className="flex justify-center lg:justify-end">
            <CoachCard />
          </div>
        </div>
      </Section>

      <Section id="faq" className="bg-paper" title="Questions" lead="The short answers.">
        <div className="max-w-3xl divide-y divide-line border-y border-line">
          {faqs.map((f) => (
            <details key={f.q} className="group py-5">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 rounded-chip font-display text-h3 [&::-webkit-details-marker]:hidden">
                {f.q}
                <span
                  aria-hidden="true"
                  className="grid size-9 shrink-0 place-items-center rounded-pill bg-indigo-tint text-[22px] text-indigo transition-transform duration-240 ease-move group-open:rotate-45"
                >
                  +
                </span>
              </summary>
              <p className="mt-3 max-w-2xl text-slate">{f.a}</p>
            </details>
          ))}
        </div>
      </Section>

      <section id="waitlist" aria-labelledby="waitlist-title" className="bg-indigo-mesh py-section text-paper">
        <div className="mx-auto flex max-w-page flex-col items-center px-gutter text-center">
          <h2 id="waitlist-title" className="font-display text-[34px] leading-[38px] font-extrabold tracking-[-0.025em] md:text-h1">
            Get in <i className="text-indigo-tint-2">early.</i>
          </h2>
          <p className="mt-4 max-w-xl text-body-l text-indigo-tint">
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
