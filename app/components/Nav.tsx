"use client";

import Link from "next/link";
import { useState, useSyncExternalStore } from "react";
import { Mark } from "./Brand";

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

// Island nav. At rest: white, 80% wide, links showing. Scrolled: Ink, 64% wide, links fold into the menu.
// Back to 80% only at scrollY = 0.
export function Nav() {
  const scrolled = useSyncExternalStore(subscribe, () => window.scrollY > 0, () => false);
  const [open, setOpen] = useState(false);
  const menuOnlyPhone = scrolled ? "" : "md:hidden"; // at rest, tablets+ show links instead of the menu

  return (
    <header className="fixed inset-x-0 top-4 z-50 flex justify-center px-5">
      <nav
        aria-label="Main"
        style={{ width: `max(${scrolled ? "var(--nav-scrolled)" : "var(--nav-rest)"}, min(100%, 22rem))` }}
        className={`relative rounded-pill shadow-floating transition-[width,background-color,height] duration-240 ease-enter ${
          scrolled ? "bg-ink text-paper" : "bg-paper text-ink"
        }`}
        onKeyDown={(e) => e.key === "Escape" && setOpen(false)}
      >
        <div
          className={`flex items-center justify-between gap-3 transition-[height,padding] duration-240 ease-enter ${
            scrolled ? "h-14 pl-4.5 pr-1.5" : "h-16 pl-5 pr-2"
          }`}
        >
          <Link href="/" aria-label="HLD Finance home" onClick={() => setOpen(false)} className="flex items-center gap-2.5 rounded-pill">
            <Mark size={scrolled ? 24 : 28} tone={scrolled ? "white" : "indigo"} />
            <span className={`font-display font-extrabold tracking-[-0.03em] ${scrolled ? "text-[18px] leading-[22px]" : "text-h3"}`}>
              HLD
            </span>
          </Link>

          <ul className={scrolled ? "hidden" : "hidden items-center gap-7 md:flex"}>
            {links.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="text-nav font-medium text-slate hover:text-ink">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-1.5">
            <Link href="/#waitlist" className={`btn btn-primary ${scrolled ? "h-11 px-4.5" : "px-5"}`}>
              {scrolled ? (
                "Join"
              ) : (
                <>
                  <span className="sm:hidden">Join</span>
                  <span className="hidden sm:inline">Join the waitlist</span>
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
            className={`absolute right-0 top-full mt-2 w-56 rounded-row bg-paper p-2 text-ink shadow-floating ${menuOnlyPhone}`}
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
