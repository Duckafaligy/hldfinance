// HLD master logo: the drawn "HLD" wordmark (the H holds a coin between its stems), no tile.
// Geometry from public/brand/hld-wordmark.svg (design/tokens.md, Logo). Cap height = 100 units.

// One stem of the H with the coin's cut in its inner edge; the right stem is this path mirrored.
const STEM =
  "M14 0A14 14 0 0 1 28 14V31.67A25 25 0 0 0 28 68.33V86A14 14 0 0 1 14 100A14 14 0 0 1 0 86V14A14 14 0 0 1 14 0Z";

function Stems() {
  return (
    <>
      <path d={STEM} />
      <path d={STEM} transform="translate(90 0) scale(-1 1)" />
    </>
  );
}

// Wordmark in currentColor: Ink on light, white on dark. `cap` = cap height in px (nav 17-20, min 10).
// `reveal`: letters rise in their mask with a 60ms stagger, then the coin sets into the cut (1300ms, no bounce).
export function Wordmark({ cap = 18, reveal = false }: { cap?: number; reveal?: boolean }) {
  const r = (cls: string) => (reveal ? cls : undefined);
  return (
    <svg aria-hidden="true" height={cap} width={cap * 2.58} viewBox="0 0 258 100" className="shrink-0">
      <g fill="currentColor" className={r("logo-letter")} style={{ ["--i" as string]: 0 }}>
        <Stems />
      </g>
      <circle cx="45" cy="50" r="20" fill="currentColor" className={r("logo-coin")} />
      <g fill="none" stroke="currentColor" strokeWidth="28" strokeLinejoin="round">
        <path d="M120 14V86H152" strokeLinecap="round" className={r("logo-letter")} style={{ ["--i" as string]: 1 }} />
        <path d="M194 14H206A36 36 0 0 1 206 86H194Z" className={r("logo-letter")} style={{ ["--i" as string]: 2 }} />
      </g>
    </svg>
  );
}

// Icon tile: Night tile with the white coin H (64 grid, corner 18). For small icon spots like the app mockup.
export function Mark({ size = 24 }: { size?: number }) {
  return (
    <svg aria-hidden="true" width={size} height={size} viewBox="0 0 64 64" className="shrink-0">
      <rect width="64" height="64" rx="18" fill="#151826" />
      <g transform="translate(14.9 13) scale(0.38)" fill="#FFFFFF">
        <Stems />
        <circle cx="45" cy="50" r="20" />
      </g>
    </svg>
  );
}
