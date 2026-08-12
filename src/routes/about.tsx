import { createFileRoute } from "@tanstack/react-router";
import { SectionReveal } from "@/components/SectionReveal";
import { PageHero } from "@/components/PageHero";
import { Eyebrow } from "@/components/Eyebrow";
import { TheStandard } from "@/components/TheStandard";
import { CTABand } from "@/components/CTABand";
import { mission, vision } from "@/lib/content";
import holdingModelImage from "@/assets/about-holding-model.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — CGE Corporate" },
      {
        name: "description",
        content:
          "CGE Corporate is a holding company built to endure — owning and stewarding operating businesses with discipline and the long view.",
      },
      { property: "og:title", content: "About — CGE Corporate" },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: About,
});

function About() {
  return (
    <main>
      <PageHero
        eyebrow="About"
        title="A holding company, built to endure."
        // [PLACEHOLDER intro]
        intro="CGE Corporate exists to own and steward businesses worth building for the long term — and to hold them to a standard that does not move."
      />

      {/* Mission & Vision */}
      <section className="surface-light">
        <SectionReveal
          stagger
          className="section-pad mx-auto grid max-w-6xl grid-cols-1 gap-x-16 gap-y-14 px-6 lg:grid-cols-2"
        >
          <div>
            <Eyebrow>Our Mission</Eyebrow>
            <p className="mt-7 font-serif text-2xl leading-snug md:text-3xl">
              {mission}
            </p>
          </div>
          <div className="lg:border-l lg:border-[var(--line-light)] lg:pl-16">
            <Eyebrow>Our Vision</Eyebrow>
            <p className="mt-7 font-serif text-2xl leading-snug text-gold md:text-3xl">
              {vision}
            </p>
          </div>
        </SectionReveal>
      </section>

      {/* The company — two column */}
      <section className="surface-light-2 border-t border-[var(--line-light)]">
        <SectionReveal
          stagger
          className="section-pad mx-auto grid max-w-6xl grid-cols-1 items-center gap-14 px-6 lg:grid-cols-2"
        >
          <img
            src={holdingModelImage}
            alt="A quiet executive boardroom at night, representing the long-term stewardship of the holding-company model."
            loading="lazy"
            width={1024}
            height={1280}
            className="w-full object-cover"
            style={{ aspectRatio: "4 / 5" }}
          />
          <div>
            <h2 className="display-h2">The holding-company model.</h2>
            {/* [PLACEHOLDER, refine with brief] */}
            <p className="body-measure mt-7 text-[var(--ink-dim)]">
              A holding company owns operating businesses and assets, and bears
              responsibility for their long-term health. We do not trade
              positions. We acquire businesses we intend to keep, then apply
              capital, structure, and operating discipline so they can endure.
            </p>
            <p className="body-measure mt-5 text-[var(--ink-dim)]">
              The thesis is patience. We measure in decades, governing each
              holding to a consistent standard regardless of the market's mood.
            </p>
          </div>
        </SectionReveal>
      </section>

      {/* Origin / ethos — dark interlude */}
      <section className="surface-dark">
        <SectionReveal className="section-pad mx-auto max-w-4xl px-6">
          {/* boardroom language, not military imagery */}
          <p className="body-measure text-dim">
            CGE was founded on an ethos of earned discipline — chain of command,
            accountability, and stewardship applied to ownership. That ethos is
            expressed in the boardroom, not in symbols: clear standards, patient
            judgment, and responsibility for what we hold.
          </p>
          <blockquote className="mt-12 border-l-2 border-gold pl-8">
            <p className="font-serif text-2xl italic text-gold md:text-3xl">
              "We measure in decades, not quarters. Patience is a position."
            </p>
            {/* [PLACEHOLDER quote attribution] */}
            <footer className="eyebrow mt-5">
              Sergeant Major Keith L. Craig, CEO
            </footer>
          </blockquote>
        </SectionReveal>
      </section>

      <TheStandard />

      <CTABand
        title="Build with us, for the long term."
        line="Speak with CGE about partnership and stewardship."
      />
    </main>
  );
}
