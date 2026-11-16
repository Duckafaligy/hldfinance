// Numbers and money (design/tokens.md, section 3). One place for every number shown on the site.
// en-CA, CAD by default, always 2 decimals, a real minus (U+2212), and changes carry arrow + sign together.

const MINUS = "−";
const cad = new Intl.NumberFormat("en-CA", { style: "currency", currency: "CAD" });
const cadWhole = new Intl.NumberFormat("en-CA", { style: "currency", currency: "CAD", maximumFractionDigits: 0 });
const usd = new Intl.NumberFormat("en-CA", { style: "currency", currency: "USD" }); // en-CA renders "US$"
const two = new Intl.NumberFormat("en-CA", { minimumFractionDigits: 2, maximumFractionDigits: 2 });

export type Tone = "gain" | "loss" | "flat";

/** "$1,234.56", "−$45.10", "US$231.52". `whole` drops cents, for prose like "$10,000 of fake money". */
export function money(n: number, opts: { currency?: "CAD" | "USD"; whole?: boolean } = {}): string {
  const f = opts.currency === "USD" ? usd : opts.whole ? cadWhole : cad;
  return (n < 0 ? MINUS : "") + f.format(Math.abs(n));
}

/** Unsigned percent with 2 decimals: "4.82%". */
export function percent(n: number): string {
  return `${two.format(Math.abs(n))}%`;
}

// Rounded at display precision, so -0.001% reads as flat, not "▼ −0.00%".
export function tone(n: number): Tone {
  const r = Math.round(n * 100);
  return r > 0 ? "gain" : r < 0 ? "loss" : "flat";
}

/** "▲ +$482.16 · +4.82%", "▼ −0.62%"; flat is "0.00%" with no arrow (tokens.md 3). */
export function change({ pct, amount }: { pct: number; amount?: number }): string {
  const t = tone(pct);
  const sign = t === "gain" ? "+" : t === "loss" ? MINUS : "";
  const arrow = t === "gain" ? "▲ " : t === "loss" ? "▼ " : "";
  const parts = amount === undefined ? [] : [sign + money(Math.abs(amount))];
  parts.push(sign + percent(pct));
  return arrow + parts.join(" · ");
}
