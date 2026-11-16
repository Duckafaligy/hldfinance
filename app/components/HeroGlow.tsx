"use client";

import type { PointerEvent, ReactNode } from "react";

// Soft glow that follows the cursor over the hero grid. No loops, no self-animation.
export function HeroGlow({ children }: { children: ReactNode }) {
  function move(e: PointerEvent<HTMLElement>) {
    const r = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty("--mx", `${e.clientX - r.left}px`);
    e.currentTarget.style.setProperty("--my", `${e.clientY - r.top}px`);
    e.currentTarget.style.setProperty("--glow", "1");
  }
  function leave(e: PointerEvent<HTMLElement>) {
    e.currentTarget.style.setProperty("--glow", "0");
  }

  return (
    <section
      aria-labelledby="hero-title"
      onPointerMove={move}
      onPointerLeave={leave}
      className="hero-bg relative overflow-hidden"
    >
      <div aria-hidden="true" className="hero-glow pointer-events-none absolute inset-0" />
      <div className="relative">{children}</div>
    </section>
  );
}
