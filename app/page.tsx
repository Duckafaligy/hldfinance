import { HeroGlow } from "./components/HeroGlow";
import { WaitlistForm } from "./components/WaitlistForm";

const features = [
  { title: "$10,000 in fake CAD", body: "Start with a practice balance. No deposits, no real money, nothing to lose." },
  { title: "TSX and US stocks", body: "Search Canadian and US stocks and ETFs with delayed quotes, the same names you'd see at a real broker." },
  { title: "Free leagues", body: "Make a league with friends, share an invite link, and see who manages their practice money best." },
  { title: "Coach questions", body: "Before each trade, a few quick questions: what's your plan, how long will you hold, what would make you sell?" },
  { title: "Trade journal", body: "Every answer is saved with the trade, so you can look back at what you were thinking, not just what happened." },
  { title: "Practice TFSA", body: "Learn how TFSA contribution room works by trading inside a practice TFSA with a real room limit." },
];

const leagueSteps = [
  { title: "Start or join a league", body: "Create one in a few taps, or join with an invite link from a friend." },
  { title: "Everyone gets the same start", body: "Each player trades their own $10,000 in practice money." },
  { title: "Climb the leaderboard", body: "Rankings use % return over the week or the month, so a fair start stays fair." },
  { title: "Free, for bragging rights", body: "No entry fees and no cash prizes. It's practice, and it stays that way." },
];

const coachQuestions = ["What's your plan for this trade?", "How long do you think you'll hold it?", "What would make you sell?"];

const faqs = [
  {
    q: "Is it real money?",
    a: "No. HLD Practice uses fake money only. You can't deposit, withdraw, win or lose real money.",
  },
  {
    q: "Is it free?",
    a: "Yes. HLD Practice and its leagues are free. No ads, no per-trade fees, and we never sell your data.",
  },
  {
    q: "Is the coach giving financial advice?",
    a: "No. The coach asks questions and shows facts. It never tells you what to buy or sell. The decisions, and the practice, are yours.",
  },
  {
    q: "When does it launch?",
    a: "We're building HLD Practice now and don't have a date yet. Join the waitlist and we'll email you when it opens.",
  },
];

function Section({
  id,
  className = "",
  title,
  lead,
  children,
}: {
  id: string;
  className?: string;
  title: string;
  lead: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} aria-labelledby={`${id}-title`} className={`py-section ${className}`}>
      <div className="mx-auto max-w-page px-4 sm:px-6">
        <h2 id={`${id}-title`} className="max-w-2xl font-display text-3xl font-extrabold tracking-tight sm:text-5xl">
          {title}
        </h2>
        <p className="mt-4 max-w-2xl text-lg opacity-80">{lead}</p>
        <div className="mt-12">{children}</div>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <>
      <HeroGlow>
        <div className="mx-auto flex max-w-page flex-col items-center px-4 pb-20 pt-36 text-center sm:px-6 sm:pt-44">
          <h1
            id="hero-title"
            className="font-display text-5xl font-extrabold leading-[1.02] tracking-tight sm:text-7xl lg:text-8xl"
          >
            Think before <i>you buy.</i>
          </h1>
          <p className="mt-6 max-w-xl text-lg text-ink-muted sm:text-xl">
            HLD is a Canadian money app. It starts with HLD Practice: trade TSX and US stocks with $10,000 in fake
            money, compete in free leagues, and get a coach that asks before you act.
          </p>
          <div className="mt-8 flex w-full justify-center">
            <WaitlistForm />
          </div>

          <figure className="mt-12 w-full max-w-md rounded-lg border-2 border-ink bg-bg p-6 text-left">
            <figcaption className="sr-only">Example of a coach check-in in HLD Practice</figcaption>
            <div className="flex items-baseline justify-between gap-4">
              <span className="text-sm font-medium text-ink-muted">Practice balance</span>
              <span className="font-display text-2xl font-extrabold tabular-nums">$10,000.00</span>
            </div>
            <hr className="my-5 border-line" />
            <p className="font-semibold">Before this trade</p>
            <ol className="mt-3 space-y-2">
              {coachQuestions.map((q, i) => (
                <li key={q} className="flex gap-3 rounded-sm bg-surface px-3 py-2 text-sm">
                  <span className="font-bold tabular-nums">{i + 1}</span>
                  {q}
                </li>
              ))}
            </ol>
          </figure>
        </div>
      </HeroGlow>

      <Section
        id="practice"
        className="bg-bg"
        title="What is HLD Practice?"
        lead="A free paper-trading app for learning how investing works, with fake money and real (delayed) market prices."
      >
        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f) => (
            <li key={f.title} className="rounded-md border-2 border-ink bg-bg p-6">
              <div aria-hidden="true" className="mb-5 h-1.5 w-10 rounded-pill bg-accent-practice" />
              <h3 className="text-xl font-bold">{f.title}</h3>
              <p className="mt-2 text-ink-muted">{f.body}</p>
            </li>
          ))}
        </ul>
      </Section>

      <Section
        id="leagues"
        className="bg-surface"
        title="Leagues: practice with friends."
        lead="Investing is easier to learn when your friends are doing it too."
      >
        <ol className="grid gap-4 md:grid-cols-2">
          {leagueSteps.map((s, i) => (
            <li key={s.title} className="flex gap-5 rounded-md border-2 border-ink bg-bg p-6">
              <span
                aria-hidden="true"
                className="grid size-10 shrink-0 place-items-center rounded-pill bg-accent-leagues font-bold text-on-brand tabular-nums"
              >
                {i + 1}
              </span>
              <div>
                <h3 className="text-xl font-bold">{s.title}</h3>
                <p className="mt-2 text-ink-muted">{s.body}</p>
              </div>
            </li>
          ))}
        </ol>
      </Section>

      <Section
        id="coach"
        className="bg-dark text-on-dark"
        title="A coach that asks, never tells."
        lead="Before each practice trade, the coach asks a few quick questions, like a friend who wants you to think it through."
      >
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <ul className="space-y-6">
            <li>
              <h3 className="text-xl font-bold">Questions, not advice</h3>
              <p className="mt-2 text-on-dark-muted">
                It never says what to buy or sell. It asks about your plan and shows you the facts.
              </p>
            </li>
            <li>
              <h3 className="text-xl font-bold">Your answers, saved</h3>
              <p className="mt-2 text-on-dark-muted">
                Each answer goes into your trade journal, next to the trade it belongs to.
              </p>
            </li>
            <li>
              <h3 className="text-xl font-bold">Never a nag</h3>
              <p className="mt-2 text-on-dark-muted">One follow-up at most, and you can turn check-ins off.</p>
            </li>
          </ul>
          <div className="rounded-lg bg-dark-raised p-6 sm:p-8">
            <p className="text-on-dark-muted">The coach</p>
            <ul className="mt-4 space-y-3">
              {coachQuestions.map((q) => (
                <li key={q} className="rounded-md border-2 border-accent-coach px-4 py-3 text-lg font-semibold">
                  {q}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      <Section id="faq" className="bg-bg" title="Questions" lead="The short answers.">
        <div className="max-w-3xl divide-y-2 divide-line border-y-2 border-line">
          {faqs.map((f) => (
            <details key={f.q} className="group py-5">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-lg font-bold [&::-webkit-details-marker]:hidden">
                {f.q}
                <span aria-hidden="true" className="text-2xl transition-transform group-open:rotate-45">
                  +
                </span>
              </summary>
              <p className="mt-3 max-w-2xl text-ink-muted">{f.a}</p>
            </details>
          ))}
        </div>
      </Section>

      <section id="waitlist" aria-labelledby="waitlist-title" className="bg-surface py-section">
        <div className="mx-auto flex max-w-page flex-col items-center px-4 text-center sm:px-6">
          <h2 id="waitlist-title" className="font-display text-3xl font-extrabold tracking-tight sm:text-5xl">
            Get in early.
          </h2>
          <p className="mt-4 max-w-xl text-lg text-ink-muted">
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
