import { createFileRoute } from "@tanstack/react-router";
import { SectionReveal } from "@/components/SectionReveal";
import { PageHero } from "@/components/PageHero";
import { CTABand } from "@/components/CTABand";
import { HoldingCard } from "@/components/HoldingCard";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
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
        title="Holdings Making an Impact."
        intro="Held here, grown everywhere."
      />

      {/* Holdings — flashcard carousel */}
      <section className="surface-light">
        <SectionReveal className="mx-auto max-w-6xl px-6 py-20">
          <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="eyebrow" style={{ letterSpacing: "0.18em" }}>
                The portfolio
              </p>
              <p className="mt-3 text-sm text-[var(--ink-dim)]">
                Hover or tap a company to reveal what it does.
              </p>
            </div>
          </div>

          <Carousel opts={{ align: "start", loop: true }} className="w-full">
            <CarouselContent className="-ml-6">
              {holdings.map((h) => (
                <CarouselItem
                  key={h.name}
                  className="pl-6 sm:basis-1/2 lg:basis-1/3"
                >
                  <HoldingCard holding={h} />
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="mt-10 flex items-center justify-center gap-4">
              <CarouselPrevious className="static translate-y-0 cursor-pointer border-[var(--line-light)] text-ink hover:bg-navy hover:text-bone" />
              <CarouselNext className="static translate-y-0 cursor-pointer border-[var(--line-light)] text-ink hover:bg-navy hover:text-bone" />
            </div>
          </Carousel>
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
