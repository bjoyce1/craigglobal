import { createFileRoute } from "@tanstack/react-router";
import { SectionReveal } from "@/components/SectionReveal";
import { PageHero } from "@/components/PageHero";
import { Eyebrow } from "@/components/Eyebrow";
import { CTABand } from "@/components/CTABand";
import { mission, vision } from "@/lib/content";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Craig Global Enterprises" },
      {
        name: "description",
        content:
          "The mission and vision of Craig Global Enterprises — an international holding company built on stewardship, alignment, and the long view.",
      },
      { property: "og:type", content: "website" },
      { property: "og:title", content: "About — Craig Global Enterprises" },
      {
        property: "og:description",
        content:
          "The mission and vision of Craig Global Enterprises — stewardship, alignment, and the long view.",
      },
      { name: "twitter:card", content: "summary_large_image" },
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
        title="Who we are."
        intro="An international holding company, guided by a single mission and a clear vision."
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

      {/* Closing statement */}
      <section className="surface-dark">
        <SectionReveal className="section-pad mx-auto max-w-4xl px-6 text-center">
          <Eyebrow centered rule={false}>
            The Standard
          </Eyebrow>
          <p className="mt-8 font-serif text-2xl leading-snug text-bone md:text-4xl">
            Protected by the strategic alignment that supports the outcomes and
            opportunities of your choosing.
          </p>
        </SectionReveal>
      </section>

      <CTABand
        title="Build with us, for the long term."
        line="Speak with CGE about partnership and stewardship."
      />
    </main>
  );
}
