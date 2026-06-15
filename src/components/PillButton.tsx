import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

/**
 * PillButton — luxury pill. Variants:
 * - primary: solid gold, ink text; hover -> gold-hi
 * - dark-secondary: outline on dark surfaces; hover -> bone fill / navy text
 * - light-secondary: outline on light surfaces; hover -> ink fill / paper text
 */
type Variant = "primary" | "dark-secondary" | "light-secondary";

const base =
  "inline-flex items-center justify-center rounded-full px-8 py-3.5 font-sans text-[0.82rem] font-semibold uppercase tracking-[0.12em] transition-colors duration-300";

const variants: Record<Variant, string> = {
  primary: "bg-gold text-ink hover:bg-gold-hi",
  "dark-secondary":
    "border border-[var(--line-dark)] text-bone hover:bg-bone hover:text-navy",
  "light-secondary":
    "border border-[rgba(10,14,22,0.3)] text-ink hover:bg-ink hover:text-paper",
};

export function PillButton({
  to,
  href,
  type = "button",
  variant = "primary",
  children,
  className,
  onClick,
  disabled,
}: {
  to?: string;
  href?: string;
  type?: "button" | "submit";
  variant?: Variant;
  children: ReactNode;
  className?: string;
  onClick?: () => void;
  disabled?: boolean;
}) {
  const classes = cn(base, variants[variant], className);
  if (to) {
    return (
      <Link to={to} className={classes} onClick={onClick}>
        {children}
      </Link>
    );
  }
  if (href) {
    return (
      <a href={href} className={classes} onClick={onClick}>
        {children}
      </a>
    );
  }
  return (
    <button type={type} className={classes} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  );
}
