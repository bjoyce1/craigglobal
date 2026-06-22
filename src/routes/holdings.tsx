import { createFileRoute } from "@tanstack/react-router";
import { SectionReveal } from "@/components/SectionReveal";
import { PageHero } from "@/components/PageHero";
import { Eyebrow } from "@/components/Eyebrow";
import { ArrowLink } from "@/components/ArrowLink";
import { PlaceholderImage } from "@/components/PlaceholderImage";
import { CTABand } from "@/components/CTABand";
import { holdings } from "@/lib/content";
import { cn } from "@/lib/utils";

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
        eyebrow="Portfolio"
        title="What we hold."
        // [PLACEHOLDER intro]
        intro="A focused portfolio of operating businesses, held for the long term and governed to a single standard."
      />

      {/* Holdings — alternating two-column rows. [ALL PLACEHOLDER] */}
      <section className="surface-light">
        <div className="mx-auto max-w-6xl px-6 py-16">
          {holdings.map((h, i) => {
            const flip = i % 2 === 1;
            return (
              <SectionReveal
                key={h.name}
                className="grid grid-cols-1 items-center gap-12 border-t border-[var(--line-light)] py-16 lg:grid-cols-2"
              >
                <PlaceholderImage
                  className={cn("w-full", flip && "lg:order-2")}
                  ratio="4 / 3"
                  label="[PLACEHOLDER LOGO]"
                />
                <div className={cn(flip && "lg:order-1")}>
                  <Eyebrow>{h.sector}</Eyebrow>
                  <h2 className="display-h2 mt-5 text-3xl md:text-4xl">{h.name}</h2>
                  <p className="body-measure mt-5 text-[var(--ink-dim)]">
                    {h.description}
                  </p>
                  <div className="mt-7 flex gap-10">
                    <div>
                      <p className="eyebrow" style={{ letterSpacing: "0.18em" }}>
                        Established
                      </p>
                      <p className="mt-1 font-serif text-xl">{h.established}</p>
                    </div>
                  </div>
                  {h.website && (
                    <div className="mt-7">
                      <ArrowLink href={h.website}>Visit site</ArrowLink>
                    </div>
                  )}
                </div>
              </SectionReveal>
            );
          })}
        </div>
      </section>

      {/* Sector strip — [PLACEHOLDER] */}
      <section className="surface-light-2 border-y border-[var(--line-light)]">
        <SectionReveal className="mx-auto max-w-6xl px-6 py-14">
          <p className="eyebrow">Sectors Represented</p>
          <div className="mt-6 flex flex-wrap gap-x-10 gap-y-4 font-serif text-xl text-[var(--ink-dim)]">
            <span>[Sector One]</span>
            <span>[Sector Two]</span>
            <span>[Sector Three]</span>
            <span>[Sector Four]</span>
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
