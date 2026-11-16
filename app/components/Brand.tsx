// Logo mark: rounded tile with an H drawn as a pause button (see design/tokens.md, Logo).
// tone "indigo" = on white; "white" = white tile with Ink bars, for Ink/Night grounds.
export function Mark({ size = 28, tone = "indigo" }: { size?: number; tone?: "indigo" | "white" }) {
  const [tile, bars] = tone === "indigo" ? ["var(--color-indigo)", "#fff"] : ["#fff", "var(--color-ink)"];
  return (
    <svg aria-hidden="true" width={size} height={size} viewBox="0 0 32 32" className="shrink-0">
      <rect width="32" height="32" rx="8.96" fill={tile} />
      <g fill={bars}>
        <rect x="9" y="8" width="4.5" height="16" rx="2.25" />
        <rect x="18.5" y="8" width="4.5" height="16" rx="2.25" />
        <rect x="12" y="14.75" width="8" height="2.5" rx="1.25" />
      </g>
    </svg>
  );
}

// Full wordmark: "HLD" Hanken 800 + "finance" 500 italic in Indigo.
export function Wordmark({ onDark = false }: { onDark?: boolean }) {
  return (
    <span className="inline-flex items-center gap-2.5">
      <Mark size={32} tone={onDark ? "white" : "indigo"} />
      <span className="font-display text-h3 font-extrabold tracking-[-0.03em]">
        HLD{" "}
        <i className={`font-medium ${onDark ? "text-indigo-on-dark" : "text-indigo"}`}>finance</i>
      </span>
    </span>
  );
}
