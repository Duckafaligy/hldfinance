import type { ReactNode } from "react";
import { HeroGlow } from "./components/HeroGlow";
import { WaitlistForm } from "./components/WaitlistForm";

const answers = ["Under a month", "1 to 5 years", "5+ years"];

const features: { title: string; body: string; visual: ReactNode }[] = [
  {
    title: "$10,000 in fake CAD",
    body: "Start with a practice balance. No deposits, no real money, nothing to lose.",
    visual: (
      <div className="flex items-center justify-between gap-3">
        <span className="text-h2 font-bold tabular-nums">$10,000.00</span>
        <Chip>Practice money</Chip>
      </div>
    ),
  },
  {
    title: "TSX and US stocks",
    body: "Search Canadian and US stocks and ETFs with delayed quotes, the same names you'd see at a real broker.",
    visual: (
      <div className="flex gap-2">
        <Chip>TSX</Chip>
        <Chip>NYSE</Chip>
        <Chip>NASDAQ</Chip>
      </div>
    ),
  },
  {
    title: "Free leagues",
    body: "Make a league with friends, share an invite link, and see who manages their practice money best.",
    visual: (
      <span className="inline-flex h-8 w-fit items-center rounded-pill bg-league-tint px-3 text-label font-bold text-league-text">
        #1 this week
      </span>
    ),
  },
  {
    title: "Coach questions",
    body: "Before each trade, a few quick questions: what's your plan, how long will you hold, what would make you sell?",
    visual: <CoachDot />,
  },
  {
    title: "Trade journal",
    body: "Every answer is saved with the trade, so you can look back at what you were thinking, not just what happened.",
    visual: (
      <span className="inline-flex h-6 w-fit items-center rounded-chip bg-journal-tint px-2 text-[12px] font-semibold text-journal-text">
        Journal
      </span>
    ),
  },
  {
    title: "Practice TFSA",
    body: "Learn how TFSA contribution room works by trading inside a practice TFSA with a real room limit.",
    visual: (
      <div>
        <div className="flex items-baseline justify-between">
          <span className="text-label text-slate">Room left</span>
          <span className="text-[22px] font-bold leading-7 tabular-nums">$4,250.00</span>
        </div>
        <div className="mt-3 h-2 rounded-pill bg-indigo-tint">
          <div className="h-2 w-[58%] rounded-pill bg-indigo" />
        </div>
      </div>
    ),
  },
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

function Chip({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex h-7 items-center rounded-chip bg-mist px-2.5 text-caption font-semibold text-slate">
      {children}
    </span>
  );
}

function CoachDot({ size = 40 }: { size?: number }) {
  return (
    <span
      aria-hidden="true"
      style={{ width: size, height: size }}
      className="grid shrink-0 place-items-center rounded-pill bg-coach font-display text-h3 font-extrabold text-paper"
    >
      ?
    </span>
  );
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
    <section id={id} aria-labelledby={`${id}-title`} className={`py-section ${className}`}>
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

// Matches the board's coach question card. Illustration only: nothing in it is interactive.
function CoachCard() {
  return (
    <figure className="card w-full max-w-[480px] p-6 text-left sm:p-8">
      <figcaption className="sr-only">Example of a coach check-in before a practice trade</figcaption>
      <div className="flex items-center gap-3">
        <CoachDot />
        <div>
          <p className="text-nav font-semibold">Coach</p>
          <p className="text-caption text-slate">Before your practice trade</p>
        </div>
      </div>
      <p className="mt-5 font-display text-h2">
        What&apos;s your plan? <i className="text-coach">How long will you hold?</i>
      </p>
      <div aria-hidden="true" className="mt-5 flex flex-wrap gap-2">
        {answers.map((a, i) => (
          <span
            key={a}
            className={`inline-flex h-10 items-center rounded-pill border-[1.5px] px-4 text-label font-semibold ${
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
        <span className="btn btn-primary">Save my plan</span>
        <span className="btn btn-ghost">Wait a day</span>
      </div>
    </figure>
  );
}

export default function Home() {
  return (
    <>
      <HeroGlow>
        <div className="mx-auto flex max-w-page flex-col items-center px-gutter pb-20 pt-36 text-center sm:pt-44">
          <h1
            id="hero-title"
            className="font-display text-[52px] leading-[54px] font-extrabold tracking-[-0.035em] sm:text-display lg:text-display-xl"
          >
            Think before <i className="text-indigo">you buy.</i>
          </h1>
          <p className="mt-6 max-w-xl text-body-l text-slate">
            HLD is a Canadian money app. It starts with HLD Practice: trade TSX and US stocks with $10,000 in fake
            money, compete in free leagues, and get a coach that asks before you act.
          </p>
          <div className="mt-8 flex w-full justify-center">
            <WaitlistForm />
          </div>
          <div className="mt-12 flex w-full justify-center">
            <CoachCard />
          </div>
        </div>
      </HeroGlow>

      <Section
        id="practice"
        className="bg-paper"
        title={
          <>
            What is <i>HLD Practice?</i>
          </>
        }
        lead="A free paper-trading app for learning how investing works, with fake money and real (delayed) market prices."
      >
        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f) => (
            <li key={f.title} className="card card-hover flex flex-col gap-5 p-6">
              <div className="min-h-10">{f.visual}</div>
              <div>
                <h3 className="font-display text-h3">{f.title}</h3>
                <p className="mt-2 text-slate">{f.body}</p>
              </div>
            </li>
          ))}
        </ul>
      </Section>

      <Section
        id="leagues"
        className="bg-mist"
        title={
          <>
            Leagues: practice <i>with friends.</i>
          </>
        }
        lead="Investing is easier to learn when your friends are doing it too."
      >
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[minmax(0,1fr)_440px] lg:items-start">
          <ol className="grid min-w-0 grid-cols-1 gap-4 md:grid-cols-2">
            {leagueSteps.map((s, i) => (
              <li key={s.title} className="flex gap-4 rounded-row border border-line bg-paper p-6">
                <span
                  aria-hidden="true"
                  className="grid size-9 shrink-0 place-items-center rounded-pill bg-league-tint font-bold tabular-nums text-league-text"
                >
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
                  className={`flex h-15 items-center gap-3 rounded-row px-3.5 ${
                    r.you ? "border-[1.5px] border-league bg-league-tint" : ""
                  }`}
                >
                  <span className={`w-7 shrink-0 font-bold tabular-nums ${r.you ? "text-league-text" : ""}`}>{r.rank}</span>
                  <span
                    aria-hidden="true"
                    className={`grid size-9 shrink-0 place-items-center rounded-pill text-caption font-bold ${
                      r.you ? "bg-league text-paper" : "bg-mist text-slate"
                    }`}
                  >
                    {r.initials}
                  </span>
                  <span className="min-w-0 flex-1 truncate text-nav font-semibold">{r.name}</span>
                  <span className={`w-24 shrink-0 text-right text-nav font-bold tabular-nums ${r.up ? "text-gain" : "text-loss"}`}>
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
        className="bg-night text-paper"
        dark
        title={
          <>
            A coach that asks, <i className="text-indigo-on-dark">never tells.</i>
          </>
        }
        lead="Before each practice trade, the coach asks a few quick questions, like a friend who wants you to think it through."
      >
        <ul className="grid gap-4 md:grid-cols-3">
          <li className="card flex flex-col gap-4 p-7">
            <CoachDot />
            <h3 className="font-display text-h3">Questions, not advice</h3>
            <p className="text-slate">It never says what to buy or sell. It asks about your plan and shows you the facts.</p>
          </li>
          <li className="card flex gap-5 p-7">
            <span aria-hidden="true" className="w-1 shrink-0 rounded-[4px] bg-journal" />
            <div className="flex flex-col gap-4">
              <span className="inline-flex h-6 w-fit items-center rounded-chip bg-journal-tint px-2 text-[12px] font-semibold text-journal-text">
                Journal
              </span>
              <h3 className="font-display text-h3">Your answers, saved</h3>
              <p className="text-slate">Each answer goes into your trade journal, next to the trade it belongs to.</p>
            </div>
          </li>
          <li className="card flex flex-col gap-4 p-7">
            <CoachDot />
            <h3 className="font-display text-h3">Never a nag</h3>
            <p className="text-slate">One follow-up at most, and you can turn check-ins off.</p>
          </li>
        </ul>
      </Section>

      <Section id="faq" className="bg-paper" title="Questions" lead="The short answers.">
        <div className="max-w-3xl divide-y divide-line border-y border-line">
          {faqs.map((f) => (
            <details key={f.q} className="group py-5">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 rounded-chip font-display text-h3 [&::-webkit-details-marker]:hidden">
                {f.q}
                <span aria-hidden="true" className="text-h2 text-indigo transition-transform duration-240 ease-enter group-open:rotate-45">
                  +
                </span>
              </summary>
              <p className="mt-3 max-w-2xl text-slate">{f.a}</p>
            </details>
          ))}
        </div>
      </Section>

      <section id="waitlist" aria-labelledby="waitlist-title" className="bg-mist py-section">
        <div className="mx-auto flex max-w-page flex-col items-center px-gutter text-center">
          <h2 id="waitlist-title" className="font-display text-[34px] leading-[38px] font-extrabold tracking-[-0.025em] md:text-h1">
            Get in <i className="text-indigo">early.</i>
          </h2>
          <p className="mt-4 max-w-xl text-body-l text-slate">
            Join the waitlist and we&apos;ll email you when HLD Practice opens. Free, with fake money only.
          </p>
          <div className="mt-8 flex w-full justify-center">
            <WaitlistForm />
          </div>
        </div>
      </section>
    </>
  );
}
