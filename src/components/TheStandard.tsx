import { SectionReveal } from "./SectionReveal";
import { Eyebrow } from "./Eyebrow";
import { principles } from "@/lib/content";

/**
 * TheStandard — the four principles as a 2x2 bordered grid.
 * Reused on Home and About.
 */
export function TheStandard() {
  return (
    <section className="surface-light">
      <SectionReveal className="section-pad mx-auto max-w-6xl px-6">
        <Eyebrow>The Standard</Eyebrow>
        <h2 className="display-h2 mt-6 max-w-xl">How we hold it.</h2>

        <div className="mt-14 grid grid-cols-1 border-l border-t border-[var(--line-light)] md:grid-cols-2">
          {principles.map((p) => (
            <div
              key={p.number}
              className="border-b border-r border-[var(--line-light)] p-8 md:p-12"
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
  );
}
