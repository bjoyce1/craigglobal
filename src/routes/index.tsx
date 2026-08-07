import { createFileRoute } from "@tanstack/react-router";
import { SectionReveal } from "@/components/SectionReveal";
import { Eyebrow } from "@/components/Eyebrow";
import { ArrowLink } from "@/components/ArrowLink";
import { PlaceholderImage } from "@/components/PlaceholderImage";
import { PersonCard } from "@/components/PersonCard";
import { TheStandard } from "@/components/TheStandard";
import { CTABand } from "@/components/CTABand";
import { smoothScrollTo } from "@/lib/gsap";
import { executives, chairmanLetter } from "@/lib/content";
import heroBg from "@/assets/cge-hero-bg-2.png.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "CGE Corporate — Assets Holding Company" },
      {
        name: "description",
        content:
          "CGE Corporate owns and stewards a portfolio of operating businesses for the long term — with discipline, structure, and the patience to build across decades.",
      },
      { property: "og:title", content: "CGE Corporate — Assets Holding Company" },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Home,
});

function Home() {
  return (
    <main>
      {/* 1. HERO */}
      <header className="surface-dark relative flex min-h-[100svh] items-end overflow-hidden">
        <div className="absolute inset-0 kenburns">
          <img
            src={heroBg.url}
            alt="Classical columns at dusk"
            className="h-full w-full object-cover"
          />
        </div>
        <div className="scrim-bottom absolute inset-0" aria-hidden="true" />

        <div className="relative z-10 mx-auto w-full max-w-6xl px-6 pb-28 pt-40">
          <Eyebrow>Assets Holding Company</Eyebrow>
          <h1 className="display-hero mt-7 max-w-4xl text-bone">
            We hold for the <em className="font-serif italic text-gold">long</em>{" "}
            view.
          </h1>
          <p className="body-measure mt-7 max-w-[52ch] text-bone/80">
            CGE Corporate owns and stewards a portfolio of operating businesses —
            with discipline, structure, and the patience to build across decades.
          </p>
          <div className="mt-9">
            <ArrowLink onClick={() => smoothScrollTo("#statement")}>
              Discover CGE
            </ArrowLink>
          </div>
        </div>

        {/* scroll cue */}
        <div className="absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-3">
          <span className="relative block h-12 w-px overflow-hidden bg-[var(--line-dark)]">
            <span
              className="absolute inset-x-0 top-0 h-1/2 bg-gold"
              style={{ animation: "cge-scroll-pulse 2.4s ease-in-out infinite" }}
            />
          </span>
          <span className="font-sans text-[0.6rem] uppercase tracking-[0.3em] text-bone/60">
            Scroll
          </span>
        </div>
      </header>

      {/* 2. STATEMENT */}
      <section id="statement" className="surface-light">
        <SectionReveal className="section-pad mx-auto max-w-4xl px-6 text-center">
          <Eyebrow centered>Who We Are</Eyebrow>
          <h2 className="display-h2 mx-auto mt-8 max-w-[18ch]">
            Nine Holdings.{" "}
            <em className="font-serif italic text-gold">Four Verticals.</em> One
            Standard.
          </h2>
          <div className="mt-9 flex justify-center">
            <ArrowLink to="/approach">Our approach</ArrowLink>
          </div>
        </SectionReveal>
      </section>

      {/* 2b. LETTER FROM THE CHAIRMAN */}
      <section className="surface-light-2 border-t border-[var(--line-light)]">
        <SectionReveal className="section-pad mx-auto max-w-3xl px-6">
          <Eyebrow>{chairmanLetter.eyebrow}</Eyebrow>
          <div className="mt-8 space-y-6">
            {chairmanLetter.paragraphs.map((para, i) => (
              <p
                key={i}
                className="body-measure text-[1.05rem] leading-relaxed text-[var(--ink-dim)]"
              >
                {para}
              </p>
            ))}
          </div>
          <div className="mt-10 border-t border-[var(--line-light)] pt-6">
            <p className="font-serif text-xl font-semibold">
              {chairmanLetter.signature}
            </p>
            <p className="eyebrow mt-2" style={{ letterSpacing: "0.18em" }}>
              {chairmanLetter.signatureTitle}
            </p>
          </div>
        </SectionReveal>
      </section>


      {/* 4. THE STANDARD */}
      <TheStandard />

      {/* 5. CLOSING CTA */}
      <CTABand
        title="Build with us, for the long term."
        line="For partnership, investment, and acquisition inquiries."
      />
    </main>
  );
}
