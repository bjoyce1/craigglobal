import { Link } from "@tanstack/react-router";
import { cn } from "@/lib/utils";
import type { Person } from "@/lib/content";

/**
 * PersonCard — leadership / board. Square portrait placeholder with the
 * person's initials in gold Playfair until headshots arrive.
 * `primary` gives the CEO / Chairman a gold hairline frame + scale.
 * When `to` is set, the whole card becomes a link to that person's profile.
 */
export function PersonCard({
  person,
  primary = false,
  showBio = true,
  profileSlug,
}: {
  person: Person;
  primary?: boolean;
  showBio?: boolean;
  profileSlug?: string;
}) {
  const to = profileSlug;
  const inner = (
    <>
      {/* [PLACEHOLDER portrait] — initials in gold Playfair on navy */}
      <div
        className="relative w-full overflow-hidden bg-navy"
        style={{ aspectRatio: "1 / 1" }}
        role="img"
        aria-label={`${person.name} portrait placeholder`}
      >
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(120% 120% at 50% 30%, #0d2747 0%, #0a1d38 60%, #05080f 100%)",
          }}
        />
        <span className="absolute inset-0 flex items-center justify-center font-serif text-5xl font-semibold text-gold">
          {person.initials}
        </span>
        {to && (
          <span
            className="pointer-events-none absolute inset-0 bg-midnight/0 transition-colors duration-500 group-hover:bg-midnight/15"
            aria-hidden="true"
          />
        )}
      </div>
      <h3 className="mt-5 font-serif text-xl font-semibold leading-snug">
        <span className="relative inline-block">
          {person.name}
          {to && (
            <span className="absolute -bottom-1 left-0 h-px w-full origin-left scale-x-0 bg-gold transition-transform duration-500 ease-out group-hover:scale-x-100" />
          )}
        </span>
      </h3>
      <p className="eyebrow mt-2" style={{ letterSpacing: "0.2em" }}>
        {person.role}
      </p>
      {showBio && person.bio && (
        <p className="text-dim mt-4 text-[0.95rem] leading-relaxed">
          {person.bio}
        </p>
      )}
      {to && (
        <span className="mt-5 inline-flex items-center gap-2 font-sans text-[0.78rem] font-semibold uppercase tracking-[0.12em] text-gold">
          View profile
          <span className="transition-transform duration-300 ease-out group-hover:translate-x-1.5">
            &rarr;
          </span>
        </span>
      )}
    </>
  );

  const className = cn(
    "group flex flex-col",
    primary && "ring-1 ring-gold p-5",
    to && "rounded-sm focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gold",
  );

  if (to) {
    return (
      <Link to={to} className={className}>
        {inner}
      </Link>
    );
  }

  return <article className={className}>{inner}</article>;
}
