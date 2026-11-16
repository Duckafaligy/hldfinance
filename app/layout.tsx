import type { Metadata } from "next";
import Link from "next/link";
import { Nav, Wordmark } from "./components/Nav";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://hldfinance.ca"),
  title: "HLD Finance: Think before you buy.",
  description:
    "HLD Practice: trade TSX and US stocks with $10,000 in fake money, join free leagues, and meet a coach that asks questions before every trade. Join the waitlist.",
};

const footerCols = [
  {
    title: "HLD Practice",
    links: [
      { href: "/#practice", label: "What is Practice" },
      { href: "/#leagues", label: "Leagues" },
      { href: "/#coach", label: "The coach" },
      { href: "/#faq", label: "FAQ" },
    ],
  },
  { title: "Get started", links: [{ href: "/#waitlist", label: "Join the waitlist" }] },
  {
    title: "Legal",
    links: [
      { href: "/privacy", label: "Privacy" },
      { href: "/terms", label: "Terms" },
    ],
  },
];

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en-CA" className="h-full antialiased">
      <body className="flex min-h-full flex-col">
        <a
          href="#main"
          className="sr-only z-[60] rounded-pill bg-brand px-4 py-2 text-on-brand focus:not-sr-only focus:fixed focus:left-4 focus:top-4"
        >
          Skip to content
        </a>
        <Nav />
        <main id="main" className="flex-1">
          {children}
        </main>

        <footer className="bg-dark text-on-dark">
          <div className="mx-auto grid max-w-page gap-12 px-4 py-16 sm:px-6 md:grid-cols-[1.5fr_1fr_1fr_1fr]">
            <div>
              <Wordmark />
              <p className="mt-3 max-w-xs text-on-dark-muted">
                Think before you buy. A Canadian money app that starts with free practice trading.
              </p>
              <p className="mt-6 text-sm text-on-dark-muted">No ads. No per-trade fees. We never sell your data.</p>
            </div>
            {footerCols.map((col) => (
              <div key={col.title}>
                <h2 className="font-semibold">{col.title}</h2>
                <ul className="mt-4 space-y-3">
                  {col.links.map((l) => (
                    <li key={l.href}>
                      <Link href={l.href} className="text-on-dark-muted hover:text-on-dark">
                        {l.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="border-t border-dark-raised">
            <p className="mx-auto max-w-page px-4 py-6 text-sm text-on-dark-muted sm:px-6">
              © 2026 HLD Finance. HLD Practice uses fake money only. Nothing on this site is
              financial advice.
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}
