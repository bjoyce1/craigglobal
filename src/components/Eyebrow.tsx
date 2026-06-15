import { cn } from "@/lib/utils";

/**
 * Eyebrow — small tracked gold label, optionally preceded by a 40px gold rule.
 */
export function Eyebrow({
  children,
  className,
  rule = true,
  centered = false,
}: {
  children: React.ReactNode;
  className?: string;
  rule?: boolean;
  centered?: boolean;
}) {
  return (
    <p
      className={cn(
        "eyebrow flex items-center gap-4",
        centered && "justify-center",
        className,
      )}
    >
      {rule && <span className="h-px w-10 bg-gold" aria-hidden="true" />}
      {children}
    </p>
  );
}
