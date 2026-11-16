"use client";

import { useEffect, useRef, type ReactNode } from "react";

// Hero stage depth: writes --px / --py (pointer, -1..1) and --sy (scroll px) on the stage once per frame.
// Children opt in with .depth and a --d weight; CSS turns that into a small translate. Off for reduced motion
// and touch-only devices.
export function Parallax({ children, className = "" }: { children: ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el || matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let raf = 0;
    let px = 0;
    let py = 0;
    const flush = () => {
      raf = 0;
      el.style.setProperty("--px", px.toFixed(3));
      el.style.setProperty("--py", py.toFixed(3));
      el.style.setProperty("--sy", String(Math.min(window.scrollY, 800)));
    };
    const queue = () => {
      if (!raf) raf = requestAnimationFrame(flush);
    };
    const onPointer = (e: PointerEvent) => {
      if (e.pointerType !== "mouse") return;
      px = (e.clientX / window.innerWidth) * 2 - 1;
      py = (e.clientY / window.innerHeight) * 2 - 1;
      queue();
    };
    window.addEventListener("pointermove", onPointer, { passive: true });
    window.addEventListener("scroll", queue, { passive: true });
    return () => {
      window.removeEventListener("pointermove", onPointer);
      window.removeEventListener("scroll", queue);
      cancelAnimationFrame(raf);
    };
  }, []);
  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
