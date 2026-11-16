// Logo mark ("Pause, then grow"): 64 grid, tile rx 18, two bars on a y-49 baseline (public/brand/hld-mark.svg).
// tone "indigo" = Indigo tile + white bars (light and Night grounds); "white" = white tile + Ink bars (on Ink).
export function Mark({ size = 24, tone = "indigo" }: { size?: number; tone?: "indigo" | "white" }) {
  const [tile, bars] = tone === "indigo" ? ["#4B3BF5", "#FFFFFF"] : ["#FFFFFF", "#0E1016"];
  return (
    <svg aria-hidden="true" width={size} height={size} viewBox="0 0 64 64" className="shrink-0">
      <rect width="64" height="64" rx="18" fill={tile} />
      <rect x="16" y="27" width="12" height="22" rx="6" fill={bars} />
      <rect x="36" y="15" width="12" height="34" rx="6" fill={bars} />
    </svg>
  );
}

// Horizontal lockup: mark = 1.05x the font size, gap = 0.2x. Wordmark "hld", Urbanist 800, -0.045em.
export function Lockup({ fontSize = 22, tone = "indigo" }: { fontSize?: number; tone?: "indigo" | "white" }) {
  return (
    <span className="inline-flex items-center" style={{ gap: fontSize * 0.2 }}>
      <Mark size={Math.round(fontSize * 1.05)} tone={tone} />
      <span className="font-display font-extrabold leading-none tracking-[-0.045em]" style={{ fontSize }}>
        hld
      </span>
    </span>
  );
}
