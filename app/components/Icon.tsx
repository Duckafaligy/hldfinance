// Icon from the HLD set (public/brand/icons), drawn as a mask so it takes the text colour.
export type IconName =
  | "alerts" | "coach" | "gain" | "hold-timer" | "journal" | "league" | "learn" | "loss"
  | "portfolio" | "practice-tfsa" | "profile" | "search" | "settings" | "trade" | "wallet" | "watchlist";

export function Icon({ name, size = 24, className = "" }: { name: IconName; size?: number; className?: string }) {
  return (
    <span
      aria-hidden="true"
      className={`icon ${className}`}
      style={{ width: size, height: size, ["--icon" as string]: `url(/brand/icons/icon-${name}.svg)` }}
    />
  );
}
