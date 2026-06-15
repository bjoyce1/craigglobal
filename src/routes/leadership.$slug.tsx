import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { SectionReveal } from "@/components/SectionReveal";
import { Eyebrow } from "@/components/Eyebrow";
import { ArrowLink } from "@/components/ArrowLink";
import { CTABand } from "@/components/CTABand";
import { executiveBySlug } from "@/lib/content";

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
          content: loaderData?.person.bio ?? "CGE Corporate leadership profile.",
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
              <p
                className="eyebrow mt-5"
                style={{ letterSpacing: "0.2em" }}
              >
                {person.role}
              </p>
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

      <CTABand
        title="Speak with our leadership."
        line="Connect with the people accountable for the standard."
      />
    </main>
  );
}

// Keep the slug list referenced so unused imports stay meaningful.
void (executives satisfies Person[]);
