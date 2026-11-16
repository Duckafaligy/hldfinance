"use client";

import Link from "next/link";
import { useState, useSyncExternalStore } from "react";
import { Lockup } from "./Brand";

const links = [
  { href: "/#practice", label: "Practice" },
  { href: "/#leagues", label: "Leagues" },
  { href: "/#coach", label: "Coach" },
  { href: "/#faq", label: "FAQ" },
];

// Shrinks after 24px of scroll; returns only at scrollY = 0 (hysteresis kept in module state).
let shrunk = false;
function getShrunk() {
  const y = window.scrollY;
  if (y > 24) shrunk = true;
  else if (y <= 0) shrunk = false;
  return shrunk;
}
function subscribe(cb: () => void) {
  window.addEventListener("scroll", cb, { passive: true });
  return () => window.removeEventListener("scroll", cb);
}

// Island nav. Rest: glass, 80%, 64 tall, links showing. Scrolled: Ink, 64%, 56 tall, links fold into the menu.
// 400ms on the move ease; links fade out over the first 150ms.
export function Nav() {
  const scrolled = useSyncExternalStore(subscribe, getShrunk, () => false);
  const [open, setOpen] = useState(false);
  const menuOnlyPhone = scrolled ? "" : "md:hidden";

  return (
    <header className="fixed inset-x-0 top-4 z-50 flex justify-center px-5">
      <nav
        aria-label="Main"
        style={{ width: `max(${scrolled ? "var(--nav-scrolled)" : "var(--nav-rest)"}, min(100%, 22rem))` }}
        className={`relative rounded-pill shadow-float transition-[width,background-color] duration-400 ease-move ${
          scrolled ? "bg-ink text-paper" : "bg-paper/70 text-ink backdrop-blur-xl"
        }`}
        onKeyDown={(e) => e.key === "Escape" && setOpen(false)}
      >
        <div
          className={`relative flex items-center justify-between gap-3 transition-[height,padding] duration-400 ease-move ${
            scrolled ? "h-14 pl-4.5 pr-1.5" : "h-16 pl-5 pr-2"
          }`}
        >
          <Link href="/" aria-label="HLD Finance home" onClick={() => setOpen(false)} className="rounded-pill">
            <Lockup cap={scrolled ? 17 : 18} reveal />
          </Link>

          <ul
            aria-hidden={scrolled || undefined}
            className={`absolute left-1/2 hidden -translate-x-1/2 items-center gap-7 transition-[opacity,visibility] duration-150 md:flex ${
              scrolled ? "invisible opacity-0" : "opacity-100"
            }`}
          >
            {links.map((l) => (
              <li key={l.href}>
                <Link href={l.href} tabIndex={scrolled ? -1 : undefined} className="text-nav font-medium text-slate hover:text-ink">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-1.5">
            <Link href="/#waitlist" className={`btn btn-primary ${scrolled ? "h-11 px-4.5" : "h-12 px-5"}`}>
              {scrolled ? (
                "Join"
              ) : (
                <>
                  <span className="lg:hidden">Join</span>
                  <span className="hidden lg:inline">Join the waitlist</span>
                </>
              )}
            </Link>
            <button
              type="button"
              aria-expanded={open}
              aria-controls="nav-menu"
              aria-label={open ? "Close menu" : "Open menu"}
              onClick={() => setOpen(!open)}
              className={`grid size-11 place-items-center rounded-pill transition-colors duration-120 ${
                scrolled ? "bg-night-raised text-paper hover:bg-ink-pressed" : "bg-mist text-ink hover:bg-line"
              } ${menuOnlyPhone}`}
            >
              <svg aria-hidden="true" viewBox="0 0 24 24" className="size-5" fill="none" stroke="currentColor" strokeWidth="2.25" strokeLinecap="round">
                {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M6 9h12M6 15h12" />}
              </svg>
            </button>
          </div>
        </div>

        {open && (
          <ul
            id="nav-menu"
            className={`msg-rise absolute right-0 top-full mt-2 w-56 rounded-row bg-paper p-2 text-ink shadow-float ${menuOnlyPhone}`}
          >
            {links.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-chip px-3 py-2.5 text-nav font-medium hover:bg-mist"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </nav>
    </header>
  );
}
