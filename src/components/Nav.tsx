import { useEffect, useRef, useState } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { Crest } from "./Crest";
import { cn } from "@/lib/utils";

const links = [
  { to: "/about", label: "About" },
  { to: "/leadership", label: "Leadership" },
  { to: "/holdings", label: "Holdings" },
  { to: "/approach", label: "Approach" },
  { to: "/newsroom", label: "Newsroom" },
] as const;

/**
 * Nav — sticky, minimal. Transparent over the hero; gains a solid surface
 * after ~80px of scroll. Mobile: fully-opaque navy full-screen overlay.
 */
export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const overlayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // close menu on route change
  useEffect(() => setOpen(false), [pathname]);

  // lock scroll + focus trap while overlay open
  useEffect(() => {
    if (!open) return;
    document.body.style.overflow = "hidden";
    const node = overlayRef.current;
    const focusable = node?.querySelectorAll<HTMLElement>(
      'a, button, [tabindex]:not([tabindex="-1"])',
    );
    focusable?.[0]?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
      if (e.key === "Tab" && focusable && focusable.length) {
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };
    document.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const onDark = scrolled; // solid navy bar once scrolled

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-all duration-300",
          scrolled
            ? "bg-navy/95 backdrop-blur-sm border-b border-[var(--line-dark)] py-3"
            : "bg-transparent py-6",
        )}
      >
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6">
          <Link to="/" className="flex items-center gap-3" aria-label="CGE home">
            <Crest size={28} />
            <span className="font-serif text-lg font-semibold tracking-wide text-bone">
              CGE
            </span>
          </Link>

          <div className="hidden items-center gap-9 lg:flex">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                className="relative font-sans text-sm font-medium text-bone/80 transition-colors hover:text-bone"
                activeProps={{
                  className: "text-bone after:scale-x-100",
                }}
              >
                <span className="relative">
                  {l.label}
                  <span className="absolute -bottom-1.5 left-0 h-px w-full origin-left scale-x-0 bg-gold transition-transform duration-300 data-[active]:scale-x-100" />
                </span>
              </Link>
            ))}
            <Link
              to="/contact"
              className="rounded-full bg-gold px-6 py-2.5 font-sans text-[0.78rem] font-semibold uppercase tracking-[0.12em] text-ink transition-colors hover:bg-gold-hi"
            >
              Contact
            </Link>
          </div>

          {/* mobile burger */}
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="relative z-50 flex h-9 w-9 flex-col items-center justify-center gap-1.5 lg:hidden"
          >
            <span
              className={cn(
                "h-px w-6 bg-gold transition-all duration-300",
                open && "translate-y-[3.5px] rotate-45",
              )}
            />
            <span
              className={cn(
                "h-px w-6 bg-gold transition-all duration-300",
                open && "-translate-y-[3.5px] -rotate-45",
              )}
            />
          </button>
        </nav>
      </header>

      {/* mobile full-screen overlay — fully opaque navy */}
      <div
        ref={overlayRef}
        className={cn(
          "fixed inset-0 z-40 flex flex-col bg-navy transition-opacity duration-300 lg:hidden",
          open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0",
        )}
        aria-hidden={!open}
      >
        <div className="flex flex-1 flex-col justify-center gap-7 px-8 pt-20">
          {links.map((l, i) => (
            <Link
              key={l.to}
              to={l.to}
              className="flex items-baseline gap-4 font-serif text-4xl font-medium text-bone"
            >
              <span className="font-serif text-base italic text-gold">
                {String(i + 1).padStart(2, "0")}
              </span>
              {l.label}
            </Link>
          ))}
        </div>
        <div className="px-8 pb-14">
          <Link
            to="/contact"
            className="inline-flex w-full items-center justify-center rounded-full bg-gold px-8 py-4 font-sans text-[0.82rem] font-semibold uppercase tracking-[0.12em] text-ink"
          >
            Contact
          </Link>
        </div>
      </div>
    </>
  );
}
