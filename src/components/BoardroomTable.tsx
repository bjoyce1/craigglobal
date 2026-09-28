import { useState } from "react";
import { SectionReveal } from "@/components/SectionReveal";
import { Eyebrow } from "@/components/Eyebrow";
import { ArrowLink } from "@/components/ArrowLink";
import { cn } from "@/lib/utils";
import tableImage from "@/assets/boardroom-table.jpg";

type Seat = {
  id: string;
  label: string;
  heading: string;
  body: string;
  to: "/holdings" | "/leadership" | "/cgi" | "/approach";
  linkLabel: string;
  /** Position of the marker over the table image, in percent. */
  x: number;
  y: number;
};

const seats: Seat[] = [
  {
    id: "holdings",
    label: "The Portfolio",
    heading: "Holdings making an impact.",
    body: "Operating companies across film and media, technology, consumer goods, and trade — held here, grown everywhere.",
    to: "/holdings",
    linkLabel: "See the holdings",
    x: 17,
    y: 30,
  },
  {
    id: "people",
    label: "The Seats",
    heading: "Those who steward your success.",
    body: "Executive officers and advisors who bring military discipline, legal rigor, and financial stewardship to every decision.",
    to: "/leadership",
    linkLabel: "Meet the team",
    x: 80,
    y: 27,
  },
  {
    id: "international",
    label: "Across Continents",
    heading: "Continuity across continents.",
    body: "Craig Global International carries the standard abroad — technology, commerce, and trade from Africa to Europe and North America.",
    to: "/cgi",
    linkLabel: "Explore CGI",
    x: 68,
    y: 76,
  },
  {
    id: "standard",
    label: "The Standard",
    heading: "One standard, applied everywhere.",
    body: "Ownership, oversight, and alignment — the disciplines that protect the outcomes and opportunities of your choosing.",
    to: "/approach",
    linkLabel: "Our approach",
    x: 22,
    y: 78,
  },
];

/**
 * BoardroomTable — the table motif: a seat for each part of CGE. Selecting a
 * seat reveals what that part of the enterprise does, without leaving the page.
 */
export function BoardroomTable() {
  const [active, setActive] = useState(0);
  const seat = seats[active];

  return (
    <section className="surface-dark border-t border-[var(--line-dark)]">
      <SectionReveal className="section-pad mx-auto max-w-6xl px-6">
        <Eyebrow>A Seat at the Table</Eyebrow>
        <h2 className="display-h2 mt-6 max-w-2xl text-bone">
          Everything CGE does begins at the table.
        </h2>
        <p className="text-dim body-measure mt-6">
          Relationships, transactions, oversight, ownership. Choose a seat to
          see what it holds.
        </p>

        <div className="mt-14 grid grid-cols-1 gap-10 lg:grid-cols-[1.25fr_1fr] lg:items-center">
          {/* The table */}
          <div className="relative overflow-hidden rounded-lg border border-[var(--line-dark)]">
            <img
              src={tableImage}
              alt="A long boardroom table at dusk, with hands, documents, and glasses placed around it"
              loading="lazy"
              width={1920}
              height={1088}
              className="h-full w-full object-cover"
            />
            <div
              className="absolute inset-0 bg-[linear-gradient(to_top,rgba(5,8,15,0.75),rgba(5,8,15,0.15))]"
              aria-hidden="true"
            />
            {seats.map((s, i) => (
              <button
                key={s.id}
                type="button"
                onClick={() => setActive(i)}
                onMouseEnter={() => setActive(i)}
                aria-label={`${s.label} — ${s.heading}`}
                aria-pressed={i === active}
                className="absolute -translate-x-1/2 -translate-y-1/2 cursor-pointer"
                style={{ left: `${s.x}%`, top: `${s.y}%` }}
              >
                <span className="relative flex h-11 w-11 items-center justify-center">
                  <span
                    className={cn(
                      "absolute inset-0 rounded-full border transition-all duration-300",
                      i === active
                        ? "scale-100 border-gold bg-gold/20"
                        : "scale-75 border-gold/50 bg-gold/5",
                    )}
                  />
                  <span
                    className={cn(
                      "relative h-2 w-2 rounded-full transition-colors duration-300",
                      i === active ? "bg-gold" : "bg-gold/70",
                    )}
                  />
                </span>
              </button>
            ))}
          </div>

          {/* The seat detail */}
          <div>
            <div className="flex flex-wrap gap-2">
              {seats.map((s, i) => (
                <button
                  key={s.id}
                  type="button"
                  onClick={() => setActive(i)}
                  className={cn(
                    "cursor-pointer border px-4 py-2 font-sans text-[0.68rem] font-semibold uppercase tracking-[0.14em] transition-colors duration-200",
                    i === active
                      ? "border-gold text-gold"
                      : "border-[var(--line-dark)] text-bone/60 hover:text-bone",
                  )}
                >
                  {s.label}
                </button>
              ))}
            </div>

            <div key={seat.id} className="mt-8">
              <h3 className="font-serif text-3xl leading-snug text-bone">
                {seat.heading}
              </h3>
              <p className="text-dim body-measure mt-5 leading-relaxed">
                {seat.body}
              </p>
              <div className="mt-8">
                <ArrowLink to={seat.to}>{seat.linkLabel}</ArrowLink>
              </div>
            </div>
          </div>
        </div>
      </SectionReveal>
    </section>
  );
}
