import { createFileRoute } from "@tanstack/react-router";
import { SectionReveal } from "@/components/SectionReveal";
import { PageHero } from "@/components/PageHero";
import { Eyebrow } from "@/components/Eyebrow";
import { CTABand } from "@/components/CTABand";
import { principles, process, coreValues } from "@/lib/content";
import { cn } from "@/lib/utils";
import approachHeroBg from "@/assets/approach-hero-bg.jpg.asset.json";

export const Route = createFileRoute("/approach")({
  head: () => ({
    meta: [
      { title: "Our Approach — CGE Corporate" },
      {
        name: "description",
        content:
          "Stewardship over speculation. The principles and process by which CGE Corporate holds and strengthens the businesses it owns.",
      },
      { property: "og:title", content: "Our Approach — CGE Corporate" },
      { property: "og:url", content: "/approach" },
    ],
    links: [{ rel: "canonical", href: "/approach" }],
  }),
  component: Approach,
});

function Approach() {
  return (
    <main>
      <PageHero
        variant="dark"
        eyebrow="Our Approach"
        image={approachHeroBg}
        title={
          <>
            Stewardship over{" "}
            <em className="font-serif italic text-gold">speculation</em>.
          </>
        }
      />

      {/* Core values — what supersedes business */}
      <section className="surface-light">
        <SectionReveal className="section-pad mx-auto max-w-3xl px-6 text-center">
          <Eyebrow centered>Core Values</Eyebrow>
          <h2 className="display-h2 mx-auto mt-7 max-w-[20ch]">
            Values that supersede business.
          </h2>
          <p className="body-measure mx-auto mt-8 text-[var(--ink-dim)]">
            Before we are a holding company, we are people accountable to one
            another and to the world we share. These are the convictions that come
            before profit — and outlast it.
          </p>
        </SectionReveal>
        <SectionReveal
          stagger
          className="mx-auto grid max-w-6xl grid-cols-1 border-l border-t border-[var(--line-light)] px-6 pb-24 md:grid-cols-2"
        >
          {coreValues.map((v) => (
            <div
              key={v.number}
              className="border-b border-r border-[var(--line-light)] p-8 md:p-12"
            >
              <span className="font-serif text-2xl font-semibold text-gold">
                {v.number}
              </span>
              <h3 className="mt-4 font-serif text-2xl font-semibold leading-snug">
                {v.title}
              </h3>
              <p className="text-dim mt-4 leading-relaxed">{v.body}</p>
            </div>
          ))}
        </SectionReveal>
      </section>

      {/* Four principles — alternating full-width bands */}
      {principles.map((p, i) => {
        const dark = i % 2 === 1;
        return (
          <section key={p.number} className={dark ? "surface-dark" : "surface-light"}>
            <SectionReveal className="section-pad mx-auto grid max-w-6xl grid-cols-1 gap-10 px-6 lg:grid-cols-[auto_1fr] lg:gap-20">
              <span className="font-serif text-6xl font-semibold text-gold md:text-7xl">
                {p.number}
              </span>
              <div>
                <h2 className="display-h2">{p.title}</h2>
                <p
                  className={cn(
                    "body-measure mt-6",
                    dark ? "text-dim" : "text-[var(--ink-dim)]",
                  )}
                >
                  {p.body}
                </p>
              </div>
            </SectionReveal>
          </section>
        );
      })}

      {/* How we work — process strip [PLACEHOLDER] */}
      <section className="surface-light-2 border-y border-[var(--line-light)]">
        <SectionReveal className="section-pad mx-auto max-w-6xl px-6">
          <Eyebrow>How We Work</Eyebrow>
          <h2 className="display-h2 mt-6">From identify to hold.</h2>
          <div className="mt-14 grid grid-cols-1 gap-px sm:grid-cols-2 lg:grid-cols-4">
            {process.map((s, i) => (
              <div
                key={s.number}
                className="relative border-t-2 border-gold pt-6"
              >
                <span className="font-serif text-2xl font-semibold text-gold">
                  {s.number}
                </span>
                <h3 className="mt-3 font-serif text-2xl font-semibold">
                  {s.title}
                </h3>
                <p className="text-dim mt-3 text-[0.95rem] leading-relaxed pr-6">
                  {s.body}
                </p>
                {i < process.length - 1 && (
                  <span
                    className="absolute right-3 top-8 hidden text-gold lg:block"
                    aria-hidden="true"
                  >
                    &rarr;
                  </span>
                )}
              </div>
            ))}
          </div>
        </SectionReveal>
      </section>

      {/* Pull quote */}
      <section className="surface-dark">
        <SectionReveal className="section-pad mx-auto max-w-4xl px-6 text-center">
          <p className="font-serif text-3xl italic text-gold md:text-4xl">
            "Ownership is a responsibility before it is an asset."
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
