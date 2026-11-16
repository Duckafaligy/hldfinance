"use client";

import Link from "next/link";
import { useState, useSyncExternalStore } from "react";

const links = [
  { href: "/#practice", label: "Practice" },
  { href: "/#leagues", label: "Leagues" },
  { href: "/#coach", label: "Coach" },
  { href: "/#faq", label: "FAQ" },
];

function subscribe(cb: () => void) {
  window.addEventListener("scroll", cb, { passive: true });
  return () => window.removeEventListener("scroll", cb);
}

export function Wordmark() {
  return (
    <span className="font-display text-lg font-extrabold tracking-tight">
      HLD <i className="font-semibold">Finance</i>
    </span>
  );
}

// Island nav: 80% wide at the top, 64% once scrolled; links fold into a menu on scroll.
export function Nav() {
  const scrolled = useSyncExternalStore(subscribe, () => window.scrollY > 0, () => false);
  const [open, setOpen] = useState(false);
  const atTopWide = scrolled ? "" : "md:hidden"; // menu only needed on phones while at the top

  return (
    <header className="fixed inset-x-0 top-4 z-50 flex justify-center px-4">
      <nav
        aria-label="Main"
        style={{ width: `max(${scrolled ? "var(--hld-nav-scrolled)" : "var(--hld-nav-rest)"}, min(100%, 22rem))` }}
        className="relative rounded-pill border-2 border-ink bg-bg transition-[width] duration-300 ease-out"
        onKeyDown={(e) => e.key === "Escape" && setOpen(false)}
      >
        <div className="flex h-14 items-center justify-between gap-3 pl-5 pr-2">
          <Link href="/" aria-label="HLD Finance home" onClick={() => setOpen(false)}>
            <Wordmark />
          </Link>

          <ul className={scrolled ? "hidden" : "hidden items-center gap-6 md:flex"}>
            {links.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="font-medium text-ink-muted hover:text-ink">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-2">
            <Link
              href="/#waitlist"
              className="rounded-pill bg-brand px-4 py-2 text-sm font-semibold text-on-brand transition-colors hover:bg-brand-hover"
            >
              Join waitlist
            </Link>
            <button
              type="button"
              aria-expanded={open}
              aria-controls="nav-menu"
              aria-label={open ? "Close menu" : "Open menu"}
              onClick={() => setOpen(!open)}
              className={`grid size-10 place-items-center rounded-pill hover:bg-surface ${atTopWide}`}
            >
              <svg aria-hidden="true" viewBox="0 0 24 24" className="size-5" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
              </svg>
            </button>
          </div>
        </div>

        {open && (
          <ul
            id="nav-menu"
            className={`absolute right-0 top-full mt-2 w-56 rounded-md border-2 border-ink bg-bg p-2 ${atTopWide}`}
          >
            {links.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-sm px-3 py-2 font-medium hover:bg-surface"
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
