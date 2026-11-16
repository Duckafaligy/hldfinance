import type { ReactNode } from "react";

// Placeholder legal page. Marked draft until reviewed before launch.
export function LegalPage({ title, children }: { title: string; children: ReactNode }) {
  return (
    <article className="mx-auto max-w-3xl px-gutter pb-24 pt-36">
      <p className="inline-flex h-7 items-center rounded-chip bg-surface-sunken px-2.5 text-caption font-semibold text-text-secondary">Draft</p>
      <h1 className="mt-4 font-display text-[40px] leading-[44px] font-extrabold tracking-[-0.025em] md:text-h1">{title}</h1>
      <p className="mt-4 text-body-l text-text-secondary">
        This page is a draft and is not yet in effect. The final version will be published before HLD Practice opens.
      </p>
      <div className="mt-10 space-y-4 [&_h2]:pt-4 [&_h2]:font-display [&_h2]:text-h3 [&_p]:text-text-secondary">{children}</div>
    </article>
  );
}
