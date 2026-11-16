// HLD logo: the Bridge H (an H whose crossbar is a coin) + the drawn "HLD" wordmark.
// Geometry copied from public/brand/*.svg (design/tokens.md, Logo). Cap height = 100 units.

// One stem of the H with the coin cut in its inner edge; the right stem is this path mirrored.
const STEM =
  "M14 0A14 14 0 0 1 28 14V31.67A25 25 0 0 0 28 68.33V86A14 14 0 0 1 14 100A14 14 0 0 1 0 86V14A14 14 0 0 1 14 0Z";

function BridgeH() {
  return (
    <>
      <path d={STEM} />
      <path d={STEM} transform="translate(90 0) scale(-1 1)" />
      <circle cx="45" cy="50" r="20" />
    </>
  );
}

// Tile mark: Indigo tile, white H (64 grid, corner 18). The same on light and dark grounds.
export function Mark({ size = 24, className = "" }: { size?: number; className?: string }) {
  return (
    <svg aria-hidden="true" width={size} height={size} viewBox="0 0 64 64" className={`shrink-0 ${className}`}>
      <rect width="64" height="64" rx="18" fill="#4B3BF5" />
      <g transform="translate(14.9 13) scale(0.38)" fill="#FFFFFF">
        <BridgeH />
      </g>
    </svg>
  );
}

// Drawn "HLD" in currentColor (Ink on light, white on dark). `cap` = cap height in px.
export function Wordmark({ cap = 18, className = "" }: { cap?: number; className?: string }) {
  return (
    <svg aria-hidden="true" height={cap} width={cap * 2.58} viewBox="0 0 258 100" className={`shrink-0 ${className}`}>
      <g fill="currentColor">
        <BridgeH />
      </g>
      <g fill="none" stroke="currentColor" strokeWidth="28" strokeLinejoin="round">
        <path d="M120 14V86H152" strokeLinecap="round" />
        <path d="M194 14H206A36 36 0 0 1 206 86H194Z" />
      </g>
    </svg>
  );
}

// Horizontal lockup: tile = 1.5x cap height, gap = 0.36x cap, centred. `reveal` = the nav's first-load settle.
export function Lockup({ cap = 18, reveal = false }: { cap?: number; reveal?: boolean }) {
  return (
    <span className="inline-flex items-center" style={{ gap: cap * 0.36 }}>
      <Mark size={cap * 1.5} className={reveal ? "logo-tile-in" : ""} />
      <Wordmark cap={cap} className={reveal ? "logo-word-in" : ""} />
    </span>
  );
}
