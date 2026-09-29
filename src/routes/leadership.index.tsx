import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { SectionReveal } from "@/components/SectionReveal";
import { PageHero } from "@/components/PageHero";
import { PersonCard } from "@/components/PersonCard";
import { CTABand } from "@/components/CTABand";
import { executives } from "@/lib/content";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/leadership/")({
  head: () => ({
    meta: [
      { title: "Meet the Team — Craig Global Enterprises" },
      {
        name: "description",
        content:
          "Get to know those who steward your success — the executive officers and wider team of Craig Global Enterprises.",
      },
      { property: "og:type", content: "website" },
      { property: "og:title", content: "Meet the Team — Craig Global Enterprises" },
      {
        property: "og:description",
        content: "Get to know those who steward your success.",
      },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:url", content: "/leadership" },
    ],
    links: [{ rel: "canonical", href: "/leadership" }],
  }),
  component: Leadership,
});

const EXECUTIVE_OFFICER_SLUGS = [
  "keith-l-craig",
  "taalib-saber",
  "lynn",
  "ken-merritt",
] as const;

const TABS = [
  { id: "overview", label: "Overview" },
  { id: "officers", label: "Executive Officers" },
] as const;

function Leadership() {
  const [tab, setTab] = useState<(typeof TABS)[number]["id"]>("overview");
  const visible = executives.filter((p) => !p.hidden);

  const officers = EXECUTIVE_OFFICER_SLUGS.map((slug) =>
    visible.find((p) => p.slug === slug),
  ).filter((p): p is (typeof visible)[number] => Boolean(p));

  const people = tab === "officers" ? officers : visible;


  return (
    <main>
      <PageHero
        eyebrow="Meet the Team"
        title="Meet the Team."
        intro="Get to know those who steward your success."
      />

      {/* Team */}
      <section className="surface-light">
        <SectionReveal className="section-pad mx-auto max-w-6xl px-6 pb-0">
          <div
            role="tablist"
            aria-label="Team categories"
            className="flex flex-wrap items-center gap-2 border-b border-[var(--line-light)]"
          >
            {TABS.map((t) => (
              <button
                key={t.id}
                type="button"
                role="tab"
                aria-selected={tab === t.id}
                onClick={() => setTab(t.id)}
                className={cn(
                  "-mb-px cursor-pointer border-b-2 px-1 pb-4 pt-2 font-sans text-[0.8rem] font-semibold uppercase tracking-[0.18em] transition-colors duration-200 sm:px-3",
                  tab === t.id
                    ? "border-gold text-gold"
                    : "border-transparent text-[var(--ink-dim)] hover:text-ink",
                )}
              >
                {t.label}
              </button>
            ))}
          </div>
        </SectionReveal>
        <SectionReveal
          key={tab}
          stagger
          className="mx-auto grid max-w-6xl grid-cols-1 gap-x-8 gap-y-14 px-6 pb-24 pt-14 md:grid-cols-2 lg:grid-cols-3"
        >
          {people.map((p) => (
            <PersonCard
              key={p.name}
              person={p}
              showBio={false}
              profileSlug={p.slug}
            />
          ))}
        </SectionReveal>
      </section>

      {/* Board of Directors — hidden for now; restore when briefed */}
      {/*
      <section className="surface-dark">
        <SectionReveal className="section-pad mx-auto max-w-6xl px-6 pb-0">
          <Eyebrow>Board of Directors</Eyebrow>
        </SectionReveal>
        <SectionReveal
          stagger
          className="mx-auto grid max-w-6xl grid-cols-1 gap-x-8 gap-y-14 px-6 pb-24 pt-14 sm:grid-cols-2 lg:grid-cols-3"
        >
          {board.map((p, i) => (
            <PersonCard
              key={i}
              person={p}
              showBio={false}
              profileSlug={p.slug}
            />
          ))}
        </SectionReveal>
      </section>
      */}

      <CTABand
        title="Build with us, for the long term."
        line="Speak with the people accountable for the standard."
      />
    </main>
  );
}
