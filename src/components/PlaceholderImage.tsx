import { cn } from "@/lib/utils";

/**
 * [PLACEHOLDER IMAGE] — on-palette stand-in until real photography arrives.
 * Navy-to-black gradient with a faint gold hairline grid. No external deps.
 */
export function PlaceholderImage({
  className,
  label,
  ratio,
}: {
  className?: string;
  label?: string;
  ratio?: string;
}) {
  return (
    <div
      role="img"
      aria-label={label ?? "Placeholder image"}
      className={cn("relative overflow-hidden bg-midnight", className)}
      style={ratio ? { aspectRatio: ratio } : undefined}
    >
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(120% 120% at 30% 20%, #0d2747 0%, #0a1d38 45%, #05080f 100%)",
        }}
      />
      {/* faint gold hairline grid */}
      <div
        className="absolute inset-0 opacity-[0.10]"
        style={{
          backgroundImage:
            "linear-gradient(var(--gold) 1px, transparent 1px), linear-gradient(90deg, var(--gold) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />
      {label && (
        <span className="absolute bottom-4 left-4 font-sans text-[0.62rem] uppercase tracking-[0.24em] text-[var(--bone-dim)]">
          {label}
        </span>
      )}
    </div>
  );
}
