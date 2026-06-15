import { createFileRoute } from "@tanstack/react-router";
import { SectionReveal } from "@/components/SectionReveal";
import { PageHero } from "@/components/PageHero";
import { ArrowLink } from "@/components/ArrowLink";
import { PlaceholderImage } from "@/components/PlaceholderImage";
import { press } from "@/lib/content";

export const Route = createFileRoute("/newsroom")({
  head: () => ({
    meta: [
      { title: "Newsroom — CGE Corporate" },
      {
        name: "description",
        content:
          "Announcements and press from CGE Corporate, an assets holding company.",
      },
      { property: "og:title", content: "Newsroom — CGE Corporate" },
      { property: "og:url", content: "/newsroom" },
    ],
    links: [{ rel: "canonical", href: "/newsroom" }],
  }),
  component: Newsroom,
});

function Newsroom() {
  return (
    <main>
      <PageHero
        eyebrow="Newsroom"
        title="Newsroom."
        // [PLACEHOLDER intro]
        intro="Announcements, transactions, and statements from CGE Corporate."
      />

      <section className="surface-light">
        <SectionReveal
          stagger
          className="section-pad mx-auto grid max-w-6xl grid-cols-1 gap-x-10 gap-y-16 px-6 md:grid-cols-2 lg:grid-cols-3"
        >
          {/* [ALL PLACEHOLDER] press items */}
          {press.map((item, i) => (
            <article key={i} className="group flex flex-col">
              <PlaceholderImage
                className="w-full"
                ratio="16 / 10"
                label="[PLACEHOLDER IMAGE]"
              />
              <p className="eyebrow mt-6" style={{ letterSpacing: "0.2em" }}>
                {item.date}
              </p>
              <h2 className="mt-3 font-serif text-2xl font-semibold leading-snug">
                {item.headline}
              </h2>
              <p className="text-dim mt-3 text-[0.95rem] leading-relaxed">
                {item.excerpt}
              </p>
              <div className="mt-5">
                {/* route to # for now */}
                <ArrowLink href="#">Read</ArrowLink>
              </div>
            </article>
          ))}
        </SectionReveal>

        {/* empty-state note — placeholder until real content */}
        <div className="mx-auto max-w-6xl px-6 pb-24">
          <p className="text-dim text-sm italic">
            Press releases will appear here.
          </p>
        </div>
      </section>
    </main>
  );
}
