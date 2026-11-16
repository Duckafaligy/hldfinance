"use client";

import { useEffect } from "react";

// Desktop only: a .btn within ~12px of the cursor eases toward it, up to 8px. Off for reduced motion.
export function Magnetic() {
  useEffect(() => {
    if (!matchMedia("(hover: hover) and (pointer: fine) and (prefers-reduced-motion: no-preference)").matches) return;
    const RANGE = 12; // pull starts within 12px; eases home via .btn translate transition (settle)
    const MAX = 8;
    function onMove(e: PointerEvent) {
      for (const el of document.querySelectorAll<HTMLElement>(".btn")) {
        const r = el.getBoundingClientRect();
        const near =
          e.clientX > r.left - RANGE && e.clientX < r.right + RANGE && e.clientY > r.top - RANGE && e.clientY < r.bottom + RANGE;
        if (!near) {
          el.style.translate = "";
          continue;
        }
        const dx = ((e.clientX - (r.left + r.width / 2)) / (r.width / 2 + RANGE)) * MAX;
        const dy = ((e.clientY - (r.top + r.height / 2)) / (r.height / 2 + RANGE)) * MAX;
        el.style.translate = `${dx.toFixed(1)}px ${dy.toFixed(1)}px`;
      }
    }
    window.addEventListener("pointermove", onMove, { passive: true });
    return () => window.removeEventListener("pointermove", onMove);
  }, []);
  return null;
}
