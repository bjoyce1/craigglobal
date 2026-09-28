import { useState } from "react";
import type { Person } from "@/lib/content";
import { Eyebrow } from "@/components/Eyebrow";

/**
 * BioActions — "Download Bio" (generates a branded one-sheet PDF in the
 * browser) plus a "Stay Connected" block of professional links.
 */
export function BioActions({ person }: { person: Person }) {
  const [busy, setBusy] = useState(false);

  const paras =
    person.fullBio && person.fullBio.length > 0 ? person.fullBio : [person.bio];

  const download = async () => {
    setBusy(true);
    try {
      const { jsPDF } = await import("jspdf");
      const doc = new jsPDF({ unit: "pt", format: "letter" });
      const pageW = doc.internal.pageSize.getWidth();
      const pageH = doc.internal.pageSize.getHeight();
      const margin = 64;
      const width = pageW - margin * 2;
      let y = margin;

      // Header band
      doc.setFillColor(10, 29, 56);
      doc.rect(0, 0, pageW, 108, "F");
      doc.setTextColor(198, 164, 92);
      doc.setFont("helvetica", "bold");
      doc.setFontSize(11);
      doc.text("CRAIG GLOBAL ENTERPRISES", margin, 54);
      doc.setTextColor(240, 237, 230);
      doc.setFont("helvetica", "normal");
      doc.setFontSize(9);
      doc.text("Executive Biography", margin, 74);

      y = 156;
      doc.setTextColor(17, 24, 39);
      doc.setFont("times", "bold");
      doc.setFontSize(24);
      doc.text(person.name, margin, y);
      y += 24;

      doc.setFont("helvetica", "bold");
      doc.setFontSize(10);
      doc.setTextColor(150, 119, 51);
      doc.text(person.role.toUpperCase(), margin, y);
      y += 26;

      const writeBlock = (text: string, size: number, gap: number) => {
        doc.setFont("helvetica", "normal");
        doc.setFontSize(size);
        doc.setTextColor(55, 65, 81);
        const lines = doc.splitTextToSize(text, width) as string[];
        for (const line of lines) {
          if (y > pageH - margin) {
            doc.addPage();
            y = margin;
          }
          doc.text(line, margin, y);
          y += size + 4;
        }
        y += gap;
      };

      if (person.subtitle) writeBlock(person.subtitle, 11, 10);
      for (const p of paras) writeBlock(p, 10.5, 8);

      if (person.focus && person.focus.length) {
        y += 6;
        doc.setFont("helvetica", "bold");
        doc.setFontSize(10);
        doc.setTextColor(150, 119, 51);
        if (y > pageH - margin) {
          doc.addPage();
          y = margin;
        }
        doc.text("AREAS OF FOCUS", margin, y);
        y += 16;
        writeBlock(person.focus.join("  ·  "), 10, 4);
      }

      doc.setFontSize(8);
      doc.setTextColor(140, 140, 140);
      doc.text(
        "craigglobalenterprises.com",
        margin,
        doc.internal.pageSize.getHeight() - 36,
      );

      doc.save(
        `${person.name.replace(/[^a-z0-9]+/gi, "-").toLowerCase()}-bio.pdf`,
      );
    } finally {
      setBusy(false);
    }
  };

  return (
    <div className="mt-14 border-t border-[var(--line-light)] pt-10">
      <button
        type="button"
        onClick={download}
        disabled={busy}
        className="inline-flex cursor-pointer items-center gap-3 border border-gold px-7 py-3.5 font-sans text-[0.78rem] font-semibold uppercase tracking-[0.14em] text-gold transition-colors duration-200 hover:bg-gold hover:text-navy disabled:cursor-wait disabled:opacity-60"
      >
        {busy ? "Preparing…" : "Download Bio"}
        <span aria-hidden="true">&darr;</span>
      </button>

      <div className="mt-12">
        <Eyebrow>Stay Connected</Eyebrow>
        {person.links && person.links.length > 0 ? (
          <ul className="mt-6 flex flex-wrap gap-x-8 gap-y-3">
            {person.links.map((l) => (
              <li key={l.url}>
                <a
                  href={l.url}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="group inline-flex items-center gap-2 font-sans text-[0.8rem] font-semibold uppercase tracking-[0.14em] text-gold transition-colors hover:text-gold-hi"
                >
                  {l.label}
                  <span className="transition-transform duration-300 ease-out group-hover:translate-x-1.5">
                    &rarr;
                  </span>
                </a>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-dim mt-6 text-sm">
            Professional link to be confirmed.
          </p>
        )}
      </div>
    </div>
  );
}
