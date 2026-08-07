import goldMark from "@/assets/cge-mark-gold.png.asset.json";
import navyMark from "@/assets/cge-mark-navy.png.asset.json";
import { cn } from "@/lib/utils";

/**
 * Crest — the official CGE hexagonal monogram mark.
 * `variant="gold"` for dark surfaces, `variant="navy"` for light surfaces.
 */
export function Crest({
  size = 28,
  className,
  title = "Craig Global Enterprises",
  variant = "gold",
}: {
  size?: number;
  className?: string;
  title?: string;
  variant?: "gold" | "navy";
}) {
  const src = variant === "navy" ? navyMark.url : goldMark.url;

  return (
    <img
      src={src}
      alt={title}
      width={size}
      height={size}
      loading="lazy"
      decoding="async"
      className={cn("block h-auto w-auto object-contain", className)}
      style={{ height: size, width: "auto" }}
    />
  );
}
