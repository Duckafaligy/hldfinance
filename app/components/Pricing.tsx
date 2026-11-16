"use client";

import { useState } from "react";
import { money } from "../lib/money";

// Pricing (Theme UI · Patterns 10.7, SaaS Assets "Free, and Pro later"). Pro is planned, so both CTAs
// lead to the waitlist. Leagues stay free in both plans (CLAUDE.md: leagues are free).
const START = money(10000, { whole: true });

const free = [
  `${START} in practice money`,
  "TSX and US stocks, delayed prices",
  "Leagues with friends and leaderboards",
  "Coach questions before every trade",
  "Trade journal",
  "Practice TFSA",
];
const pro = [
  "Weekly coach review of your journal",
  "Advanced charts and indicators",
  `Reset or add a second ${START} portfolio`,
  "Hold-streak goals",
];
const compare: [string, string, string][] = [
  ["Practice money", START, `${START} + a second portfolio`],
  ["Stocks", "TSX and US", "TSX and US"],
  ["Leagues", "Public and private", "Public and private"],
  ["Coach", "Before every trade", "Plus a weekly review"],
  ["Charts", "Standard", "Advanced indicators"],
  ["Journal and Practice TFSA", "Included", "Included"],
  ["Ads", "None", "None"],
];

function Check({ plus = false }: { plus?: boolean }) {
  return (
    <svg aria-hidden="true" viewBox="0 0 20 20" className="size-5 shrink-0">
      <circle cx="10" cy="10" r="10" className={plus ? "fill-accent-primary" : "fill-accent-primary-subtle"} />
      {plus ? (
        <path d="M10 6v8M6 10h8" stroke="#fff" strokeWidth="2" strokeLinecap="round" />
      ) : (
        <path d="M6.2 10.3l2.4 2.4 5.2-5.4" fill="none" className="stroke-text-link" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      )}
    </svg>
  );
}

function Tag({ children }: { children: string }) {
  return (
    <span className="inline-flex h-6 items-center rounded-pill bg-accent-primary-subtle px-2.5 text-caption font-semibold text-text-link">
      {children}
    </span>
  );
}

export function Pricing() {
  const [yearly, setYearly] = useState(false);
  const per = yearly ? "CAD / year" : "CAD / month";

  return (
    <div>
      <div role="group" aria-label="Billing period" className="mx-auto flex w-fit gap-1 rounded-pill bg-surface-raised p-1 shadow-card">
        {[
          { label: "Monthly", on: !yearly, set: false },
          { label: "Yearly", on: yearly, set: true },
        ].map((o) => (
          <button
            key={o.label}
            type="button"
            aria-pressed={o.on}
            onClick={() => setYearly(o.set)}
            className={`inline-flex h-11 items-center gap-2 rounded-pill px-5 text-label font-semibold transition-colors duration-120 ${
              o.on ? "bg-text-primary text-text-inverse" : "text-text-secondary hover:text-text-primary"
            }`}
          >
            {o.label}
            {o.set && <Tag>Planned</Tag>}
          </button>
        ))}
      </div>

      <div className="mx-auto mt-10 grid max-w-[1000px] grid-cols-1 gap-6 tablet:grid-cols-2">
        <article className="card flex h-full flex-col p-7 tablet:p-9">
          <div className="flex items-center justify-between gap-3">
            <h3 className="font-display text-h2">Free</h3>
            <span className="inline-flex h-7 items-center rounded-pill bg-surface-sunken px-3 text-caption font-semibold text-text-secondary">
              Always free
            </span>
          </div>
          <p className="mt-3 text-text-secondary">Everything you need to learn by doing.</p>
          <p className="mt-6 flex items-baseline gap-2">
            <span className="num text-[56px] leading-[60px] font-extrabold tracking-[-0.03em]">{money(0, { whole: true })}</span>
            <span className="text-label font-semibold text-text-secondary">{per}</span>
          </p>
          <p className="text-caption text-text-secondary">No card needed</p>
          <a href="#waitlist" className="btn btn-ink mt-6 w-full">
            Join the waitlist
          </a>
          <ul className="mt-6 space-y-2 border-t border-border-subtle pt-6">
            {free.map((f) => (
              <li key={f} className="flex min-h-[30px] items-center gap-3">
                <Check />
                {f}
              </li>
            ))}
          </ul>
        </article>

        <div className="halo h-full">
          <article className="card edge flex h-full flex-col p-7 tablet:p-9">
            <div className="flex items-center justify-between gap-3">
              <h3 className="font-display text-h2">Pro</h3>
              <Tag>Planned</Tag>
            </div>
            <p className="mt-3 text-text-secondary">For when practice turns into a habit.</p>
            <p className="mt-6 flex items-baseline gap-2">
              {yearly ? (
                <span className="font-display text-[44px] leading-[60px] font-extrabold tracking-[-0.025em]">Planned</span>
              ) : (
                <span className="num text-[56px] leading-[60px] font-extrabold tracking-[-0.03em]">{money(11.99)}</span>
              )}
              <span className="text-label font-semibold text-text-secondary">{per}</span>
            </p>
            <p className="text-caption text-text-secondary">{yearly ? "We'll share a yearly price before Pro opens." : "Yearly price: planned"}</p>
            <a href="#waitlist" className="btn btn-primary mt-6 w-full">
              Get notified
            </a>
            <ul className="mt-6 space-y-2 border-t border-border-subtle pt-6">
              <li className="flex min-h-[30px] items-center gap-3 font-semibold">
                <Check plus />
                Everything in Free, plus…
              </li>
              {pro.map((f) => (
                <li key={f} className="flex min-h-[30px] items-center gap-3">
                  <Check />
                  {f}
                </li>
              ))}
            </ul>
          </article>
        </div>
      </div>

      <p className="mt-6 text-center text-caption text-text-secondary">
        Pro is planned; price and features may change. Practice stays free.
      </p>

      {/* Comparison: a table from 600px, a stacked list on phones. */}
      <div className="card mx-auto mt-10 hidden max-w-[1000px] overflow-hidden tablet:block">
        <table className="w-full text-left">
          <caption className="sr-only">Compare Free and Pro (planned)</caption>
          <thead>
            <tr className="border-b-2 border-text-primary text-label">
              <th scope="col" className="px-6 py-4 font-semibold">Compare</th>
              <th scope="col" className="px-6 py-4 font-semibold">Free</th>
              <th scope="col" className="px-6 py-4 font-semibold">Pro (planned)</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border-subtle">
            {compare.map(([k, f, p]) => (
              <tr key={k}>
                <th scope="row" className="px-6 py-3.5 font-semibold">{k}</th>
                <td className="px-6 py-3.5 text-text-secondary">{f}</td>
                <td className="px-6 py-3.5">{p}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <ul aria-label="Compare Free and Pro (planned)" className="mt-10 space-y-3 tablet:hidden">
        {compare.map(([k, f, p]) => (
          <li key={k} className="card rounded-row p-4">
            <p className="font-semibold">{k}</p>
            <dl className="mt-2 grid grid-cols-[auto_1fr] gap-x-4 gap-y-1 text-label">
              <dt className="text-text-secondary">Free</dt>
              <dd>{f}</dd>
              <dt className="text-text-secondary">Pro (planned)</dt>
              <dd>{p}</dd>
            </dl>
          </li>
        ))}
      </ul>
    </div>
  );
}
