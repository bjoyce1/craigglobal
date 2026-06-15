import { holdings } from "@/lib/content";

/**
 * OrgChart — architectural CSS org diagram (not an image).
 * Top: CGE Corporate (holding company). Governance tier: Board (oversight,
 * dashed) and Executive Leadership (operating). Below: holding nodes.
 * Collapses to a vertical stack on mobile.
 */
function Node({
  label,
  sub,
  primary = false,
}: {
  label: string;
  sub?: string;
  primary?: boolean;
}) {
  return (
    <div
      className={
        primary
          ? "surface-dark border border-gold px-7 py-5 text-center"
          : "border border-[var(--line-light)] bg-paper-2 px-5 py-4 text-center"
      }
    >
      <p
        className={
          primary
            ? "font-serif text-lg font-semibold text-bone"
            : "font-serif text-base font-semibold text-ink"
        }
      >
        {label}
      </p>
      {sub && (
        <p
          className={
            primary
              ? "eyebrow mt-1 justify-center text-center"
              : "mt-1 font-sans text-[0.68rem] uppercase tracking-[0.2em] text-[var(--ink-dim)]"
          }
        >
          {sub}
        </p>
      )}
    </div>
  );
}

export function OrgChart() {
  return (
    <div className="surface-light">
      {/* top node */}
      <div className="flex flex-col items-center">
        <div className="w-full max-w-md">
          <Node label="CGE Corporate" sub="Assets Holding Company" primary />
        </div>

        {/* governance tier */}
        <div className="h-10 w-px bg-gold" aria-hidden="true" />
        <div className="grid w-full max-w-2xl grid-cols-1 gap-6 md:grid-cols-2">
          <div className="flex flex-col items-center">
            {/* dashed = oversight */}
            <div
              className="mb-4 h-6 w-px border-l border-dashed border-gold md:hidden"
              aria-hidden="true"
            />
            <Node label="Board of Directors" sub="Oversight" />
          </div>
          <div className="flex flex-col items-center">
            <div
              className="mb-4 h-6 w-px bg-gold md:hidden"
              aria-hidden="true"
            />
            <Node label="Executive Leadership" sub="Operating" />
          </div>
        </div>

        {/* connector to holdings */}
        <div className="h-10 w-px bg-gold" aria-hidden="true" />
        <div className="hidden h-px w-3/4 bg-gold md:block" aria-hidden="true" />

        {/* holdings row */}
        <div className="grid w-full grid-cols-1 gap-6 pt-0 md:grid-cols-4 md:pt-10">
          {holdings.map((h) => (
            <div key={h.name} className="flex flex-col items-center">
              <div className="mb-4 h-6 w-px bg-gold md:-mt-10" aria-hidden="true" />
              {/* [PLACEHOLDER holding] */}
              <Node label={h.name} sub={h.sector} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
