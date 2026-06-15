import { useState } from "react";
import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { SectionReveal } from "@/components/SectionReveal";
import { Eyebrow } from "@/components/Eyebrow";
import { ArrowLink } from "@/components/ArrowLink";
import { CTABand } from "@/components/CTABand";
import { executiveBySlug } from "@/lib/content";
import type { Person, Stat, FilmCredit, PlaybookEntry } from "@/lib/content";

export const Route = createFileRoute("/leadership/$slug")({
  loader: ({ params }) => {
    const person = executiveBySlug(params.slug);
    if (!person) throw notFound();
    return { person };
  },
  head: ({ loaderData }) => {
    const name = loaderData?.person.name ?? "Leadership";
    return {
      meta: [
        { title: `${name} — CGE Corporate` },
        {
          name: "description",
          content:
            loaderData?.person.subtitle ??
            loaderData?.person.bio ??
            "CGE Corporate leadership profile.",
        },
        { property: "og:title", content: `${name} — CGE Corporate` },
      ],
    };
  },
  notFoundComponent: () => (
    <main className="surface-light">
      <div className="mx-auto max-w-3xl px-6 pb-32 pt-44 text-center">
        <Eyebrow centered rule={false}>
          Leadership
        </Eyebrow>
        <h1 className="display-h2 mt-6">Profile not found.</h1>
        <p className="text-dim body-measure mx-auto mt-6">
          That executive profile could not be located.
        </p>
        <div className="mt-10 flex justify-center">
          <ArrowLink to="/leadership">Back to leadership</ArrowLink>
        </div>
      </div>
    </main>
  ),
  component: Profile,
});

function Profile() {
  const { person } = Route.useLoaderData();
  const bioParas: string[] =
    person.fullBio && person.fullBio.length > 0 ? person.fullBio : [person.bio];

  return (
    <main>
      {/* Hero — name + role over a calm light surface */}
      <header className="surface-light">
        <div className="mx-auto max-w-6xl px-6 pb-16 pt-44">
          <SectionReveal>
            <Link
              to="/leadership"
              className="eyebrow inline-flex items-center gap-2 text-gold transition-colors hover:text-gold-hi"
            >
              <span aria-hidden="true">&larr;</span> Leadership
            </Link>
          </SectionReveal>
          <SectionReveal className="mt-12 grid grid-cols-1 gap-12 md:grid-cols-[minmax(0,360px)_1fr] md:items-end">
            {/* Portrait placeholder */}
            <div
              className="relative w-full overflow-hidden bg-navy ring-1 ring-gold"
              style={{ aspectRatio: "1 / 1" }}
              role="img"
              aria-label={`${person.name} portrait placeholder`}
            >
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "radial-gradient(120% 120% at 50% 30%, #0d2747 0%, #0a1d38 60%, #05080f 100%)",
                }}
              />
              <span className="absolute inset-0 flex items-center justify-center font-serif text-7xl font-semibold text-gold">
                {person.initials}
              </span>
            </div>
            <div>
              <Eyebrow>Executive Leadership</Eyebrow>
              <h1 className="display-hero mt-6">{person.name}</h1>
              <p className="eyebrow mt-5" style={{ letterSpacing: "0.2em" }}>
                {person.role}
              </p>
              {person.subtitle && (
                <p className="text-dim body-measure mt-6 text-[1.05rem]">
                  {person.subtitle}
                </p>
              )}
            </div>
          </SectionReveal>
        </div>
      </header>

      {/* Biography */}
      <section className="surface-light border-t border-[var(--line-light)]">
        <SectionReveal className="mx-auto grid max-w-6xl grid-cols-1 gap-12 px-6 py-24 md:grid-cols-[1fr_minmax(0,320px)]">
          <div>
            <Eyebrow>Biography</Eyebrow>
            <div className="mt-8 space-y-6">
              {bioParas.map((para, i) => (
                <p
                  key={i}
                  className="body-measure text-[1.05rem] leading-relaxed text-[var(--ink-dim)]"
                >
                  {para}
                </p>
              ))}
            </div>
            {person.quote && (
              <blockquote className="mt-12 border-l-2 border-gold pl-6">
                <p className="font-serif text-2xl leading-snug">
                  &ldquo;{person.quote}&rdquo;
                </p>
                {person.quoteAttribution && (
                  <cite className="eyebrow mt-4 block not-italic">
                    {person.quoteAttribution}
                  </cite>
                )}
              </blockquote>
            )}
          </div>

          {/* Areas of focus */}
          {person.focus && person.focus.length > 0 && (
            <aside className="md:pt-1">
              <Eyebrow>Areas of focus</Eyebrow>
              <ul className="mt-8 divide-y divide-[var(--line-light)] border-y border-[var(--line-light)]">
                {person.focus.map((f: string) => (
                  <li
                    key={f}
                    className="flex items-center gap-3 py-4 font-serif text-lg"
                  >
                    <span className="h-px w-6 bg-gold" aria-hidden="true" />
                    {f}
                  </li>
                ))}
              </ul>
            </aside>
          )}
        </SectionReveal>
      </section>

      {/* Impact dashboard */}
      {person.stats && person.stats.length > 0 && (
        <section className="surface-dark border-t border-[var(--line-dark)]">
          <SectionReveal className="mx-auto max-w-6xl px-6 py-24">
            <Eyebrow>Impact</Eyebrow>
            <h2 className="display-h2 mt-6 max-w-xl text-bone">
              Proof Points
            </h2>
            <div className="mt-14 grid grid-cols-1 border-l border-t border-[var(--line-dark)] sm:grid-cols-2 lg:grid-cols-4">
              {person.stats.map((s: Stat) => (
                <div
                  key={s.label}
                  className="border-b border-r border-[var(--line-dark)] p-8"
                >
                  <span className="font-serif text-5xl font-semibold text-gold">
                    {s.value}
                  </span>
                  <p className="text-dim mt-4 leading-relaxed">{s.label}</p>
                </div>
              ))}
            </div>
          </SectionReveal>
        </section>
      )}

      {/* Interactive bio — chapters */}
      {person.chapters && person.chapters.length > 0 && (
        <ChaptersSection person={person} />
      )}

      {/* Distribution reel */}
      {person.films && person.films.length > 0 && (
        <section className="surface-midnight border-t border-[var(--line-dark)]">
          <SectionReveal className="mx-auto max-w-6xl px-6 py-24">
            <Eyebrow>Distribution Reel</Eyebrow>
            <h2 className="display-h2 mt-6 max-w-xl text-bone">
              Big-screen fingerprints.
            </h2>
            <p className="text-dim body-measure mt-6">
              Titles publicly associated with his theatrical distribution career
              and film-media work.
            </p>
            <div className="mt-14 grid grid-cols-1 border-l border-t border-[var(--line-dark)] sm:grid-cols-2 lg:grid-cols-3">
              {person.films.map((f: FilmCredit) => (
                <div
                  key={f.title}
                  className="border-b border-r border-[var(--line-dark)] p-8"
                >
                  <h3 className="font-serif text-2xl font-semibold leading-snug text-bone">
                    {f.title}
                  </h3>
                  <p className="text-dim mt-3 leading-relaxed">{f.note}</p>
                </div>
              ))}
            </div>
          </SectionReveal>
        </section>
      )}

      {/* Leadership playbook */}
      {person.playbook && person.playbook.length > 0 && (
        <section className="surface-light border-t border-[var(--line-light)]">
          <SectionReveal className="mx-auto max-w-6xl px-6 py-24">
            <Eyebrow>Leadership Playbook</Eyebrow>
            <h2 className="display-h2 mt-6 max-w-xl">
              Short enough to remember.
            </h2>
            <div className="mt-14 grid grid-cols-1 border-l border-t border-[var(--line-light)] md:grid-cols-2 lg:grid-cols-3">
              {person.playbook.map((p: PlaybookEntry) => (
                <div
                  key={p.number}
                  className="border-b border-r border-[var(--line-light)] p-8 md:p-10"
                >
                  <span className="font-serif text-2xl font-semibold text-gold">
                    {p.number}
                  </span>
                  <h3 className="mt-4 font-serif text-2xl font-semibold leading-snug">
                    {p.title}
                  </h3>
                  <p className="text-dim mt-4 leading-relaxed">{p.body}</p>
                </div>
              ))}
            </div>
          </SectionReveal>
        </section>
      )}

      <CTABand
        title="Speak with our leadership."
        line="Connect with the people accountable for the standard."
      />
    </main>
  );
}

function ChaptersSection({ person }: { person: Person }) {
  const chapters = person.chapters ?? [];
  const [active, setActive] = useState(0);
  const current = chapters[active];

  return (
    <section className="surface-light-2 border-t border-[var(--line-light)]">
      <SectionReveal className="mx-auto max-w-6xl px-6 py-24">
        <Eyebrow>Interactive Bio</Eyebrow>
        <h2 className="display-h2 mt-6 max-w-xl">Choose a chapter.</h2>
        <p className="text-dim body-measure mt-6">
          Each chapter reframes the story for a different intent — the arenas
          where the work has left its mark.
        </p>

        <div className="mt-14 grid grid-cols-1 gap-10 md:grid-cols-[300px_1fr]">
          {/* Tabs */}
          <div
            role="tablist"
            aria-label="Biography chapters"
            className="flex flex-col border-t border-[var(--line-light)]"
          >
            {chapters.map((c, i) => {
              const selected = i === active;
              return (
                <button
                  key={c.title}
                  type="button"
                  role="tab"
                  aria-selected={selected}
                  onClick={() => setActive(i)}
                  className={
                    "group flex flex-col items-start border-b border-l-2 border-b-[var(--line-light)] py-5 pl-5 pr-4 text-left transition-colors " +
                    (selected
                      ? "border-l-gold bg-paper"
                      : "border-l-transparent hover:bg-paper")
                  }
                >
                  <span
                    className={
                      "font-serif text-lg font-semibold leading-snug " +
                      (selected ? "text-gold" : "text-ink")
                    }
                  >
                    {c.title}
                  </span>
                  <span className="text-dim mt-1 text-sm leading-snug">
                    {c.note}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Story */}
          <div role="tabpanel" className="md:pt-1">
            <span className="eyebrow">
              Chapter {String(active + 1).padStart(2, "0")}
            </span>
            <h3 className="display-h2 mt-5">{current.heading}</h3>
            <p className="body-measure mt-6 text-[1.05rem] leading-relaxed text-[var(--ink-dim)]">
              {current.body}
            </p>
            {current.tags && current.tags.length > 0 && (
              <ul className="mt-8 flex flex-wrap gap-3">
                {current.tags.map((t) => (
                  <li
                    key={t}
                    className="border border-[var(--line-light)] px-4 py-2 font-sans text-[0.8rem] font-semibold uppercase tracking-[0.12em] text-ink"
                  >
                    {t}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </SectionReveal>
    </section>
  );
}
