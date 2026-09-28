import { useState } from "react";
import type { Holding } from "@/lib/content";
import { Eyebrow } from "@/components/Eyebrow";
import { PlaceholderImage } from "@/components/PlaceholderImage";

/**
 * HoldingCard — a "flashcard" for a portfolio company. The face shows the
 * company logo (with its hover variant crossfading in); flipping reveals a
 * concise description and a link out to the company's own site.
 * Flips on hover (pointer) and on tap/keyboard (touch + a11y).
 */
export function HoldingCard({ holding }: { holding: Holding }) {
  const [flipped, setFlipped] = useState(false);

  return (
    <div
      className="group relative h-[420px] w-full cursor-pointer select-none [perspective:1600px]"
      onMouseEnter={() => setFlipped(true)}
      onMouseLeave={() => setFlipped(false)}
      onClick={() => setFlipped((f) => !f)}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          setFlipped((f) => !f);
        }
      }}
      role="button"
      tabIndex={0}
      aria-label={`${holding.name} — reveal description`}
      aria-pressed={flipped}
    >
      <div
        className="relative h-full w-full transition-transform duration-700 ease-out motion-reduce:transition-none"
        style={{
          transformStyle: "preserve-3d",
          transform: flipped ? "rotateY(180deg)" : "rotateY(0deg)",
        }}
      >
        {/* Face */}
        <div
          className="absolute inset-0 flex flex-col items-center justify-center gap-8 rounded-lg border border-[var(--line-light)] bg-white px-8 py-10"
          style={{ backfaceVisibility: "hidden" }}
        >
          <div className="relative h-40 w-full">
            {holding.logo ? (
              <>
                <img
                  src={holding.logo}
                  alt={`${holding.name} logo`}
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-contain"
                />
                {holding.logoHover && (
                  <img
                    src={holding.logoHover}
                    alt=""
                    aria-hidden="true"
                    loading="lazy"
                    className="absolute inset-0 h-full w-full object-contain opacity-0 transition-opacity duration-500 ease-out group-hover:opacity-100"
                  />
                )}
              </>
            ) : (
              <PlaceholderImage
                className="w-full"
                ratio="4 / 3"
                label="[PLACEHOLDER LOGO]"
              />
            )}
          </div>
          <div className="text-center">
            <Eyebrow centered rule={false}>
              {holding.sector}
            </Eyebrow>
            <h3 className="mt-4 font-serif text-2xl leading-tight">
              {holding.name}
            </h3>
          </div>
        </div>

        {/* Back */}
        <div
          className="absolute inset-0 flex flex-col rounded-lg border border-gold/40 bg-navy px-8 py-10 text-bone"
          style={{
            backfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
          }}
        >
          <p
            className="eyebrow text-gold"
            style={{ letterSpacing: "0.18em" }}
          >
            {holding.sector}
          </p>
          <h3 className="mt-4 font-serif text-2xl leading-tight text-bone">
            {holding.name}
          </h3>
          <p className="mt-5 overflow-hidden text-[0.95rem] leading-relaxed text-bone/75">
            {holding.description}
          </p>
          <div className="mt-auto pt-6">
            {holding.established && (
              <p className="text-xs uppercase tracking-[0.18em] text-bone/50">
                Established {holding.established}
              </p>
            )}
            {holding.website && (
              <a
                href={holding.website}
                target="_blank"
                rel="noreferrer noopener"
                onClick={(e) => e.stopPropagation()}
                className="mt-4 inline-flex items-center gap-2 font-sans text-[0.8rem] font-semibold uppercase tracking-[0.14em] text-gold transition-colors hover:text-gold-hi"
              >
                Visit website
                <span aria-hidden="true">&rarr;</span>
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
