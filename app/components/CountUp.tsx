"use client";

import { useEffect, useRef } from "react";
import { money } from "../lib/money";

// Counts from `from` to `to` once when in view (after `delay` ms): 900ms, settle-like ease. Reduced motion: shows the value.
export function CountUp({ from, to, delay = 0, className = "" }: { from: number; to: number; delay?: number; className?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el || matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    el.textContent = money(from);
    let raf = 0;
    const io = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return;
      io.disconnect();
      const start = performance.now() + delay;
      const tick = (now: number) => {
        const t = Math.max(0, Math.min(1, (now - start) / 900));
        // ponytail: easeOutExpo stands in for cubic-bezier(0.16, 1, 0.3, 1); close enough for a 900ms count.
        const k = t === 1 ? 1 : 1 - Math.pow(2, -10 * t);
        el.textContent = money(from + (to - from) * k);
        if (t < 1) raf = requestAnimationFrame(tick);
      };
      raf = requestAnimationFrame(tick);
    });
    io.observe(el);
    return () => {
      io.disconnect();
      cancelAnimationFrame(raf);
    };
  }, [from, to, delay]);
  return (
    <span ref={ref} className={className}>
      {money(to)}
    </span>
  );
}
