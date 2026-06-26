import { createFileRoute } from "@tanstack/react-router";
import { SectionReveal } from "@/components/SectionReveal";
import { PageHero } from "@/components/PageHero";
import { Eyebrow } from "@/components/Eyebrow";
import { PersonCard } from "@/components/PersonCard";
import { OrgChart } from "@/components/OrgChart";
import { CTABand } from "@/components/CTABand";
import { executives } from "@/lib/content";

export const Route = createFileRoute("/leadership/")({
  head: () => ({
    meta: [
      { title: "Leadership — CGE Corporate" },
      {
        name: "description",
        content:
          "The executive leadership accountable for the standard at CGE Corporate.",
      },
      { property: "og:title", content: "Leadership — CGE Corporate" },
      { property: "og:url", content: "/leadership" },
    ],
    links: [{ rel: "canonical", href: "/leadership" }],
  }),
  component: Leadership,
});

function Leadership() {
  const [ceo, ...rest] = executives;

  return (
    <main>
      <PageHero
        eyebrow="Leadership"
        title="The people accountable for the standard."
      />

      {/* Executive Leadership */}
      <section className="surface-light">
        <SectionReveal className="section-pad mx-auto max-w-6xl px-6 pb-0">
          <Eyebrow>Executive Leadership</Eyebrow>
        </SectionReveal>
        <SectionReveal
          stagger
          className="mx-auto grid max-w-6xl grid-cols-1 gap-x-8 gap-y-14 px-6 pb-24 pt-14 md:grid-cols-2 lg:grid-cols-3"
        >
          {/* CEO carries the Sergeant Major rank + visual primacy */}
          <div className="md:col-span-2 lg:col-span-1 lg:row-span-1">
            <PersonCard person={ceo} primary profileSlug={ceo.slug} />
          </div>
          {rest.map((p) => (
            <PersonCard key={p.name} person={p} profileSlug={p.slug} />
          ))}
        </SectionReveal>
      </section>

      {/* Board of Directors — dark */}
      <section className="surface-dark">
        <SectionReveal className="section-pad mx-auto max-w-6xl px-6 pb-0">
          <Eyebrow>Board of Directors</Eyebrow>
        </SectionReveal>
        <SectionReveal
          stagger
          className="mx-auto grid max-w-6xl grid-cols-1 gap-x-8 gap-y-14 px-6 pt-14 sm:grid-cols-2 lg:grid-cols-3"
        >
          {/* [ENTIRE BOARD IS PLACEHOLDER] — Chairman first, with primacy */}
          {board.map((p, i) => (
            <PersonCard key={i} person={p} primary={i === 0} showBio={false} />
          ))}
        </SectionReveal>
        {/* caption — tag for removal before launch */}
        <div className="mx-auto max-w-6xl px-6 pb-24 pt-10">
          <p className="text-dim text-sm italic">
            Board roster pending final confirmation.
          </p>
        </div>
      </section>

      {/* Corporate structure */}
      <section className="surface-light">
        <SectionReveal className="section-pad px-6">
          <Eyebrow>Corporate Structure</Eyebrow>
          <h2 className="display-h2 mt-6 max-w-xl">How CGE is organized.</h2>
          <div className="mt-16">
            <OrgChart />
          </div>
        </SectionReveal>
      </section>

      <CTABand
        title="Build with us, for the long term."
        line="Speak with the people accountable for the standard."
      />
    </main>
  );
}
