import type { ReactNode } from "react";

// Placeholder legal page. Marked draft until reviewed before launch.
export function LegalPage({ title, children }: { title: string; children: ReactNode }) {
  return (
    <article className="mx-auto max-w-3xl px-4 pb-24 pt-36 sm:px-6">
      <p className="inline-block rounded-pill border-2 border-ink px-3 py-1 text-sm font-semibold">Draft</p>
      <h1 className="mt-4 font-display text-4xl font-extrabold tracking-tight sm:text-5xl">{title}</h1>
      <p className="mt-4 text-ink-muted">
        This page is a draft and is not yet in effect. The final version will be published before HLD Practice opens.
      </p>
      <div className="mt-10 space-y-6 [&_h2]:text-xl [&_h2]:font-bold [&_p]:text-ink-muted">{children}</div>
    </article>
  );
}
