import { Link } from "@tanstack/react-router";
import type { ReactNode, MouseEventHandler } from "react";
import { cn } from "@/lib/utils";

/**
 * ArrowLink — the primary "go deeper" affordance.
 * Gold text + " →"; on hover the arrow nudges +6px and a gold underline
 * wipes in left-to-right.
 */
const base =
  "group inline-flex items-center gap-2 font-sans text-[0.82rem] font-semibold uppercase tracking-[0.12em] text-gold transition-colors hover:text-gold-hi";

function Inner({ children }: { children: ReactNode }) {
  return (
    <>
      <span className="relative">
        {children}
        <span className="absolute -bottom-1 left-0 h-px w-full origin-left scale-x-0 bg-gold transition-transform duration-500 ease-out group-hover:scale-x-100" />
      </span>
      <span className="transition-transform duration-300 ease-out group-hover:translate-x-1.5">
        &rarr;
      </span>
    </>
  );
}

export function ArrowLink({
  to,
  href,
  onClick,
  children,
  className,
}: {
  to?: string;
  href?: string;
  onClick?: MouseEventHandler;
  children: ReactNode;
  className?: string;
}) {
  if (to) {
    return (
      <Link to={to} onClick={onClick} className={cn(base, className)}>
        <Inner>{children}</Inner>
      </Link>
    );
  }
  if (href) {
    return (
      <a
        href={href}
        onClick={onClick}
        target={href.startsWith("http") ? "_blank" : undefined}
        rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
        className={cn(base, className)}
      >
        <Inner>{children}</Inner>
      </a>
    );
  }
  return (
    <button type="button" onClick={onClick} className={cn(base, className)}>
      <Inner>{children}</Inner>
    </button>
  );
}
