import { SectionReveal } from "./SectionReveal";
import { PillButton } from "./PillButton";

/**
 * CTABand — closing call to action. Midnight surface, hairlines top/bottom.
 */
export function CTABand({
  title,
  line,
  buttonLabel = "Contact CGE",
}: {
  title: string;
  line?: string;
  buttonLabel?: string;
}) {
  return (
    <section className="surface-midnight border-y border-[var(--line-dark)]">
      <SectionReveal className="section-pad mx-auto max-w-3xl px-6 text-center">
        <h2 className="display-h2 text-bone">{title}</h2>
        {line && <p className="text-dim body-measure mx-auto mt-6">{line}</p>}
        <div className="mt-10 flex justify-center">
          <PillButton to="/contact">{buttonLabel}</PillButton>
        </div>
      </SectionReveal>
    </section>
  );
}
