import { cn } from "@/lib/utils";

/**
 * Grevya mark — a woven sphere of brand-colored shards, rebuilt as inline SVG
 * so it inherits crisp rendering and works in both themes.
 */
export function GrevyaMark({
  className,
  title = "Grevya",
}: {
  className?: string;
  title?: string;
}) {
  return (
    <svg
      viewBox="0 0 100 100"
      className={cn("shrink-0", className)}
      role="img"
      aria-label={title}
    >
      <g strokeLinecap="round">
        {/* top — amber */}
        <g fill="#f9b50b">
          <rect x="38" y="9" width="9" height="20" rx="4" transform="rotate(-18 42 19)" />
          <rect x="52" y="11" width="9" height="22" rx="4" transform="rotate(-6 56 22)" />
          <rect x="44" y="30" width="9" height="26" rx="4" transform="rotate(-8 48 43)" />
          <rect x="58" y="28" width="8" height="18" rx="4" transform="rotate(6 62 37)" />
        </g>
        {/* left — orange */}
        <g fill="#f0481f">
          <rect x="16" y="26" width="9" height="20" rx="4" transform="rotate(28 20 36)" />
          <rect x="13" y="44" width="9" height="22" rx="4" transform="rotate(8 17 55)" />
          <rect x="28" y="34" width="9" height="26" rx="4" transform="rotate(34 32 47)" />
          <rect x="24" y="58" width="8" height="16" rx="4" transform="rotate(20 28 66)" />
        </g>
        {/* bottom — green */}
        <g fill="#7cb928">
          <rect x="30" y="64" width="9" height="22" rx="4" transform="rotate(-12 34 75)" />
          <rect x="44" y="68" width="9" height="20" rx="4" transform="rotate(-4 48 78)" />
          <rect x="38" y="50" width="8" height="20" rx="4" transform="rotate(-16 42 60)" />
          <rect x="56" y="62" width="8" height="18" rx="4" transform="rotate(8 60 71)" />
        </g>
        {/* right — blue */}
        <g fill="#15a3e6">
          <rect x="70" y="34" width="9" height="22" rx="4" transform="rotate(-26 74 45)" />
          <rect x="76" y="52" width="9" height="20" rx="4" transform="rotate(-10 80 62)" />
          <rect x="60" y="44" width="9" height="26" rx="4" transform="rotate(-30 64 57)" />
          <rect x="66" y="20" width="8" height="16" rx="4" transform="rotate(-44 70 28)" />
        </g>
      </g>
    </svg>
  );
}

export function GrevyaLogo({
  className,
  wordClassName,
}: {
  className?: string;
  wordClassName?: string;
}) {
  return (
    <span className={cn("inline-flex items-center gap-2.5", className)}>
      <GrevyaMark className="h-8 w-8" />
      <span
        className={cn(
          "font-display text-[1.35rem] font-bold tracking-tight text-foreground",
          wordClassName
        )}
      >
        Grevya
      </span>
    </span>
  );
}
