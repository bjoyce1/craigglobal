import { createFileRoute } from "@tanstack/react-router";
import { SectionReveal } from "@/components/SectionReveal";
import { PageHero } from "@/components/PageHero";
import { Eyebrow } from "@/components/Eyebrow";
import { PlaceholderImage } from "@/components/PlaceholderImage";
import { CTABand } from "@/components/CTABand";
import { holdings } from "@/lib/content";

export const Route = createFileRoute("/holdings")({
  head: () => ({
    meta: [
      { title: "Holdings — CGE Corporate" },
      {
        name: "description",
        content:
          "The portfolio CGE Corporate owns and stewards — operating businesses held for the long term.",
      },
      { property: "og:title", content: "Holdings — CGE Corporate" },
      { property: "og:url", content: "/holdings" },
    ],
    links: [{ rel: "canonical", href: "/holdings" }],
  }),
  component: Holdings,
});

function Holdings() {
  return (
    <main>
      <PageHero
        variant="dark"
        map
        eyebrow="Portfolio"
        title="What we hold."
        intro="A focused portfolio of operating businesses across four continents, held for the long term and governed to a single standard."
      />


      {/* Holdings — full portfolio grid */}
      <section className="surface-light">
        <SectionReveal className="mx-auto max-w-6xl px-6 py-16">
          <p className="eyebrow mb-10" style={{ letterSpacing: "0.18em" }}>
            The portfolio
          </p>

          <div className="grid grid-cols-1 gap-x-12 gap-y-16 md:grid-cols-2">
            {holdings.map((h) => (
              <article
                key={h.name}
                className="flex flex-col gap-6 border-t border-[var(--line-light)] pt-10"
              >
                <div
                  className="group relative w-full overflow-hidden rounded-lg"
                  style={{ aspectRatio: "4 / 3" }}
                >
                  {h.logo ? (
                    <>
                      <img
                        src={h.logo}
                        alt={`${h.name} logo`}
                        loading="lazy"
                        className="absolute inset-0 h-full w-full object-contain transition-opacity duration-500 ease-out group-hover:opacity-0"
                      />
                      {h.logoHover && (
                        <img
                          src={h.logoHover}
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
                <div className="flex flex-col">
                  <Eyebrow>{h.sector}</Eyebrow>
                  <h2 className="display-h2 mt-5 text-3xl md:text-4xl">
                    {h.name}
                  </h2>
                  <p className="body-measure mt-5 text-[var(--ink-dim)]">
                    {h.description}
                  </p>
                  <div className="mt-7">
                    <p className="eyebrow" style={{ letterSpacing: "0.18em" }}>
                      Established
                    </p>
                    <p className="mt-1 font-serif text-xl">{h.established}</p>
                  </div>
                  {h.website && (
                    <div className="mt-7">
                      <a
                        href={h.website}
                        target="_blank"
                        rel="noreferrer noopener"
                        className="group inline-flex items-center gap-2 font-sans text-[0.8rem] font-semibold uppercase tracking-[0.14em] text-gold transition-colors hover:text-gold-hi"
                      >
                        Visit website
                        <span className="transition-transform duration-300 ease-out group-hover:translate-x-1.5">
                          &rarr;
                        </span>
                      </a>
                    </div>
                  )}
                </div>
              </article>
            ))}
          </div>
        </SectionReveal>
      </section>

      <CTABand
        title="Considering a partnership or sale?"
        line="Talk to CGE."
        buttonLabel="Talk to CGE"
      />
    </main>
  );
}
