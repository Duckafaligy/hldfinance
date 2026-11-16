"use client";

import { useActionState, useId, useState, type FormEvent } from "react";
import { joinWaitlist, type WaitlistState } from "../actions";
import { normaliseEmail } from "../lib/email";

const initial: WaitlistState = { status: "idle" };
const PILL = "relative flex h-15 w-full items-center rounded-pill border-2";

// Waitlist pill (tokens.md "Waitlist field" + Motion moment 4). On success the pill itself becomes
// the confirmation at the same size: the button widens across, the tint fades in, the tick draws, the text rises.
export function WaitlistForm() {
  const [state, formAction, pending] = useActionState(joinWaitlist, initial);
  const [clientError, setClientError] = useState<string | null>(null);
  const id = useId();

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    if (!normaliseEmail(new FormData(e.currentTarget).get("email"))) {
      e.preventDefault();
      setClientError("Enter a valid email address, like name@example.com.");
    } else {
      setClientError(null);
    }
  }

  if (state.status === "ok") {
    return (
      <div role="status" className="w-full max-w-[460px] text-left">
        <div className={`${PILL} overflow-hidden border-indigo bg-paper`}>
          <span aria-hidden="true" className="wl-tint absolute inset-0 bg-indigo-tint" />
          <span aria-hidden="true" className="wl-widen absolute inset-0 bg-indigo" />
          <p className="relative flex items-center gap-3 px-5.5 font-bold text-indigo-pressed">
            <svg aria-hidden="true" viewBox="0 0 20 20" className="size-5 shrink-0">
              <circle cx="10" cy="10" r="10" fill="#4B3BF5" />
              <path className="wl-tick" d="M6 10.2l2.6 2.6L14 7.4" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <span className="wl-msg">{state.message}</span>
          </p>
        </div>
      </div>
    );
  }

  const error = clientError ?? (state.status === "error" ? state.message : null);
  const notice = !clientError && state.status === "not_connected" ? state.message : null;

  return (
    <form action={formAction} onSubmit={onSubmit} noValidate className="w-full max-w-[460px] text-left">
      <label htmlFor={`${id}-email`} className="sr-only">
        Email address
      </label>
      <div
        className={`${PILL} gap-2 bg-paper pl-5.5 pr-1.5 transition-[border-color,box-shadow] duration-120 ${
          error
            ? "border-loss shadow-[0_0_0_3px_var(--color-loss-tint)]"
            : "border-ink focus-within:border-indigo focus-within:shadow-[0_0_0_3px_var(--color-indigo-tint-2)]"
        }`}
      >
        <input
          id={`${id}-email`}
          name="email"
          type="email"
          autoComplete="email"
          inputMode="email"
          required
          placeholder="you@email.com"
          aria-invalid={error ? true : undefined}
          aria-describedby={`${id}-msg`}
          onChange={() => clientError && setClientError(null)}
          className="h-full min-w-0 flex-1 bg-transparent text-body text-ink outline-none placeholder:text-placeholder"
        />
        <button type="submit" disabled={pending} className="btn btn-primary h-11 px-5">
          {pending ? "Joining…" : "Get early access"}
        </button>
      </div>
      <p id={`${id}-msg`} aria-live="polite" className="mt-3 min-h-[18px] px-1 text-caption">
        {error ? (
          <span key={error} className="msg-rise block font-medium text-loss">
            ✕ {error}
          </span>
        ) : notice ? (
          <span className="msg-rise block font-medium text-ink">{notice}</span>
        ) : (
          <span className="text-slate">Free. No card. We only email when HLD Practice opens. No ads, and we never sell your data.</span>
        )}
      </p>
    </form>
  );
}
