import { cn } from "@/lib/utils";

/**
 * CgiPortrait — executive portrait, or a premium initials plate
 * (midnight blue field, sovereign-gold hairline, faint CGI monogram)
 * when no client photograph has been supplied.
 */
export function CgiPortrait({
  name,
  initials,
  photo,
  className,
}: {
  name: string;
  initials: string;
  photo?: string;
  className?: string;
}) {
  if (photo) {
    return (
      <div
        className={cn("relative w-full overflow-hidden bg-navy", className)}
        style={{ aspectRatio: "1 / 1" }}
      >
        <img
          src={photo}
          alt={`${name} portrait`}
          className="h-full w-full object-cover"
          loading="lazy"
        />
      </div>
    );
  }

  return (
    <div
      className={cn(
        "relative w-full overflow-hidden border border-gold/50 bg-midnight",
        className,
      )}
      style={{ aspectRatio: "1 / 1" }}
      role="img"
      aria-label={`${name} portrait placeholder`}
    >
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(120% 120% at 50% 25%, #0d2747 0%, #0a1d38 55%, #05080f 100%)",
        }}
      />
      <span
        aria-hidden="true"
        className="absolute inset-0 flex items-center justify-center font-serif text-[7rem] font-semibold text-gold opacity-[0.06]"
      >
        CGI
      </span>
      <span className="absolute inset-0 flex items-center justify-center font-serif text-5xl font-semibold tracking-[0.08em] text-gold">
        {initials}
      </span>
    </div>
  );
}
