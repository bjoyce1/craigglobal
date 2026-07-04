import { useEffect, useRef, useState } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { Crest } from "./Crest";
import { cn } from "@/lib/utils";

const links = [
  { to: "/about", label: "About" },
  { to: "/leadership", label: "Leadership" },
  { to: "/holdings", label: "Holdings" },
  { to: "/approach", label: "Approach" },
] as const;

/**
 * Nav — sticky, minimal. Transparent over the hero; gains a solid surface
 * after ~80px of scroll. Mobile: fully-opaque navy full-screen overlay.
 */
export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [behindDark, setBehindDark] = useState(true);
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const overlayRef = useRef<HTMLDivElement>(null);

  // Sample the background color directly behind the bar to decide text color.
  const detectBehind = () => {
    if (typeof window === "undefined") return;
    const header = document.querySelector("header");
    const headerH = header?.getBoundingClientRect().height ?? 72;
    const x = window.innerWidth / 2;
    const y = headerH + 8;

    // Temporarily disable pointer events on the fixed header so we hit the
    // element underneath it.
    const prevPe = header ? (header as HTMLElement).style.pointerEvents : "";
    if (header) (header as HTMLElement).style.pointerEvents = "none";
    let el = document.elementFromPoint(x, y) as HTMLElement | null;
    if (header) (header as HTMLElement).style.pointerEvents = prevPe;

    let rgb: [number, number, number] = [5, 8, 15]; // default midnight
    while (el) {
      const c = getComputedStyle(el).backgroundColor;
      const m = c.match(/rgba?\(([^)]+)\)/);
      if (m) {
        const parts = m[1].split(",").map((s) => parseFloat(s));
        const a = parts[3] === undefined ? 1 : parts[3];
        if (a > 0.1) {
          rgb = [parts[0], parts[1], parts[2]];
          break;
        }
      }
      el = el.parentElement;
    }
    const [r, g, b] = rgb;
    const lum = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
    setBehindDark(lum < 0.55);
  };

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 80);
      detectBehind();
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", detectBehind);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", detectBehind);
    };
  }, []);

  // re-detect after route change (next frame so the new DOM has painted)
  useEffect(() => {
    setOpen(false);
    const id = requestAnimationFrame(() => detectBehind());
    return () => cancelAnimationFrame(id);
  }, [pathname]);

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

  // Dark text-on-light when the bar is transparent over a light surface.
  // Scrolled bar is navy, and the open overlay is navy → light text.
  const onDark = scrolled || open || behindDark;

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
            <span
              className={cn(
                "font-serif text-lg font-semibold tracking-wide transition-colors",
                onDark ? "text-bone" : "text-ink",
              )}
            >
              CGE
            </span>
          </Link>

          <div className="hidden items-center gap-9 lg:flex">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                className={cn(
                  "group relative font-sans text-sm font-medium transition-colors",
                  onDark
                    ? "text-bone/80 hover:text-bone data-[status=active]:text-bone"
                    : "text-ink/70 hover:text-ink data-[status=active]:text-ink",
                )}
              >
                {l.label}
                <span className="absolute -bottom-1.5 left-0 h-px w-full origin-left scale-x-0 bg-gold transition-transform duration-300 group-hover:scale-x-100 group-data-[status=active]:scale-x-100" />
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
