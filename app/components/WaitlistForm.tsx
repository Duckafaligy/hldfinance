"use client";

import { useActionState, useId, useState, type FormEvent } from "react";
import { joinWaitlist, type WaitlistState } from "../actions";
import { normaliseEmail } from "../lib/email";

const initial: WaitlistState = { status: "idle" };

export function WaitlistForm() {
  const [state, formAction, pending] = useActionState(joinWaitlist, initial);
  const [clientError, setClientError] = useState<string | null>(null);
  const id = useId();

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    const email = new FormData(e.currentTarget).get("email");
    if (!normaliseEmail(email)) {
      e.preventDefault();
      setClientError("Enter a valid email address, like name@example.com.");
    } else {
      setClientError(null);
    }
  }

  const error = clientError ?? (state.status === "error" ? state.message : null);
  const notice = !clientError && (state.status === "ok" || state.status === "not_connected") ? state : null;

  return (
    <form action={formAction} onSubmit={onSubmit} noValidate className="w-full max-w-md">
      <label htmlFor={`${id}-email`} className="sr-only">
        Email address
      </label>
      <div className="flex flex-col gap-2 sm:flex-row">
        <input
          id={`${id}-email`}
          name="email"
          type="email"
          autoComplete="email"
          inputMode="email"
          required
          placeholder="you@example.com"
          aria-invalid={error ? true : undefined}
          aria-describedby={`${id}-msg`}
          onChange={() => clientError && setClientError(null)}
          className="h-12 w-full min-w-0 rounded-pill sm:flex-1 border-2 border-ink bg-bg px-5 text-base text-ink placeholder:text-ink-muted aria-invalid:border-danger"
        />
        <button
          type="submit"
          disabled={pending}
          className="h-12 shrink-0 rounded-pill bg-brand px-6 font-semibold text-on-brand transition-colors hover:bg-brand-hover disabled:opacity-60"
        >
          {pending ? "Joining…" : "Join the waitlist"}
        </button>
      </div>
      <p id={`${id}-msg`} aria-live="polite" className="mt-3 min-h-6 text-sm">
        {error ? (
          <span className="font-medium text-danger">{error}</span>
        ) : notice ? (
          <span className={notice.status === "ok" ? "font-medium text-success" : "font-medium text-ink"}>
            {notice.message}
          </span>
        ) : (
          <span className="text-ink-muted">Launch news only. No ads, and we never sell your data.</span>
        )}
      </p>
    </form>
  );
}
