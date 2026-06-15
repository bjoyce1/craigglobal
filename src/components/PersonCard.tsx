import { cn } from "@/lib/utils";
import type { Person } from "@/lib/content";

/**
 * PersonCard — leadership / board. Square portrait placeholder with the
 * person's initials in gold Playfair until headshots arrive.
 * `primary` gives the CEO / Chairman a gold hairline frame + scale.
 */
export function PersonCard({
  person,
  primary = false,
  showBio = true,
}: {
  person: Person;
  primary?: boolean;
  showBio?: boolean;
}) {
  return (
    <article
      className={cn(
        "group flex flex-col",
        primary && "ring-1 ring-gold p-5",
      )}
    >
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
      </div>
      <h3 className="mt-5 font-serif text-xl font-semibold leading-snug">
        {person.name}
      </h3>
      <p className="eyebrow mt-2" style={{ letterSpacing: "0.2em" }}>
        {person.role}
      </p>
      {showBio && person.bio && (
        <p className="text-dim mt-4 text-[0.95rem] leading-relaxed">
          {person.bio}
        </p>
      )}
    </article>
  );
}
