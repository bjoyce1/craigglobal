import { Link } from "@tanstack/react-router";
import { Crest } from "./Crest";

const columns = [
  {
    heading: "Company",
    links: [
      { to: "/about", label: "About" },
      { to: "/leadership", label: "Meet the Team" },
      { to: "/approach", label: "Approach" },
    ],
  },
  {
    heading: "Portfolio",
    links: [
      { to: "/holdings", label: "Holdings" },
      { to: "/cgi", label: "CGI International" },
      { to: "/approach", label: "Stewardship" },
      { to: "/contact", label: "Partnerships" },
    ],
  },

  {
    heading: "Connect",
    links: [
      { to: "/contact", label: "Contact" },
      { to: "/contact", label: "Careers" },
    ],
  },
] as const;

/**
 * Footer — deep and organized, midnight surface. All [PLACEHOLDER] strings
 * are tagged for swap before launch.
 */
export function Footer() {
  return (
    <footer className="surface-midnight border-t border-[var(--line-dark)]">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-14 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <Crest size={92} variant="gold" />
            <p className="mt-6 font-serif text-2xl font-semibold text-bone">
              Craig Global Enterprises
            </p>
            <p className="text-dim mt-2 text-sm tracking-[0.18em] uppercase">
              Stewardship over speculation.
            </p>
          </div>


          {columns.map((col) => (
            <nav key={col.heading} aria-label={col.heading}>
              <p className="eyebrow" style={{ letterSpacing: "0.22em" }}>
                {col.heading}
              </p>
              <ul className="mt-6 space-y-3">
                {col.links.map((l, i) => (
                  <li key={`${l.to}-${i}`}>
                    <Link
                      to={l.to}
                      className="text-dim text-[0.95rem] transition-colors hover:text-bone"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        {/* bottom hairline row */}
        <div className="mt-16 flex flex-col gap-4 border-t border-[var(--line-dark)] pt-8 text-[0.8rem] md:flex-row md:items-center md:justify-between">
          {/* [PLACEHOLDER — confirm entity name] */}
          <p className="text-dim">
            © 2026 CGE Corporate. All rights reserved.
          </p>
          {/* [PLACEHOLDER registered office line] */}
          <p className="text-dim">Registered office: [PLACEHOLDER]</p>
          <div className="flex gap-6">
            <Link to="/contact" className="text-dim transition-colors hover:text-bone">
              Legal
            </Link>
            <Link to="/contact" className="text-dim transition-colors hover:text-bone">
              Privacy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
