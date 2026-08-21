import { createFileRoute } from "@tanstack/react-router";
import { SectionReveal } from "@/components/SectionReveal";
import { PageHero } from "@/components/PageHero";
import { Eyebrow } from "@/components/Eyebrow";
import { CTABand } from "@/components/CTABand";
import { CgiLeadership } from "@/components/CgiLeadership";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

export const Route = createFileRoute("/cgi")({
  head: () => ({
    meta: [
      { title: "CGI — Craig Global International Ltd" },
      {
        name: "description",
        content:
          "Craig Global International Ltd (CGI) is the international branch of Craig Global Enterprises — a Nigerian private company delivering technology, digital commerce, and merchant trade across Africa.",
      },
      { property: "og:type", content: "website" },
      { property: "og:title", content: "CGI — Craig Global International Ltd" },
      {
        property: "og:description",
        content:
          "The international branch of Craig Global Enterprises, registered in Nigeria and operating across technology, commerce, and trade.",
      },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:url", content: "/cgi" },
    ],
    links: [{ rel: "canonical", href: "/cgi" }],
  }),
  component: CGIPage,
});

const registry: { label: string; value: string }[] = [
  { label: "Registered name", value: "Craig Global International Ltd" },
  { label: "Registration number", value: "RC 9691749" },
  { label: "Date of registration", value: "17 July 2026" },
  { label: "Company type", value: "Private company limited by shares" },
  { label: "Jurisdiction", value: "Federal Republic of Nigeria — CAMA 2020" },
  { label: "Status", value: "Active" },
  { label: "Share capital", value: "₦100,000,000 — 100,000,000 ordinary shares" },
  {
    label: "Principal activity",
    value: "General merchandise and information technology services",
  },
];

const capabilities: { title: string; body: string }[] = [
  {
    title: "Technology consultancy",
    body: "Software development, systems design, database management, cloud solutions, and digital transformation for commercial and governmental clients.",
  },
  {
    title: "Networks & telecommunications",
    body: "Network design, installation, configuration, optimisation, monitoring, and the ongoing management of IT infrastructure.",
  },
  {
    title: "Cybersecurity",
    body: "Vulnerability assessment, penetration testing, security audit, incident response, and the deployment of security technologies and protocols.",
  },
  {
    title: "Managed services",
    body: "Helpdesk operations, systems integration, hardware and software maintenance, and full technology lifecycle management.",
  },
  {
    title: "Software & platforms",
    body: "Developing, licensing, and maintaining software products, mobile applications, and enterprise tools for commercial and consumer use.",
  },
  {
    title: "Digital commerce",
    body: "E-commerce platforms, online marketplaces, digital storefronts, and technology-enabled trading systems.",
  },
  {
    title: "Merchant trade",
    body: "Importation, exportation, wholesale, retail, distribution, and supply of goods, wares, and commodities.",
  },
  {
    title: "Logistics & supply chain",
    body: "Warehousing, storage, transportation, and supply-chain coordination for the movement of goods within and beyond Nigeria.",
  },
];

const directors: { name: string; role: string; note: string }[] = [
  {
    name: "Keith L. Craig",
    role: "Director · Shareholder · Person with significant control",
    note: "Chairman & Chief Executive Officer of Craig Global Enterprises. Holds 70,000,000 ordinary shares (70%) and 70% of voting rights.",
  },
  {
    name: "Engr. Ikechukwu Nnamani",
    role: "Director · Shareholder · Person with significant control",
    note: "Chief Executive Officer Holds ordinary shares and voting rights. Appointed July 17, 2026.",
  },
];

function CGIPage() {
  return (
    <main>
      <PageHero
        variant="dark"
        globe
        eyebrow="Craig Global International"
        title="CGI — the international branch of CGE."
        intro="Craig Global International Ltd carries the CGE standard beyond the United States: a Nigerian-registered company built for technology, digital commerce, and cross-border trade across Africa and the wider world."
      />

      {/* Positioning */}
      <section className="surface-light border-t border-[var(--line-light)]">
        <SectionReveal
          stagger
          className="section-pad mx-auto grid max-w-6xl grid-cols-1 gap-x-16 gap-y-14 px-6 lg:grid-cols-2"
        >
          <div>
            <Eyebrow>Mandate</Eyebrow>
            <p className="mt-7 font-serif text-2xl leading-snug md:text-3xl">
              To extend Craig Global Enterprises into international markets —
              owning and operating technology and trade businesses on the
              ground, under the same governance and the same standard.
            </p>
          </div>
          <div className="lg:border-l lg:border-[var(--line-light)] lg:pl-16">
            <Eyebrow>Why Nigeria</Eyebrow>
            <p className="body-measure mt-7 text-[var(--ink-dim)]">
              Incorporated in Abuja with a Lagos service presence, CGI is
              structured under the Companies and Allied Matters Act, 2020 as a
              private company limited by shares. Local incorporation gives the
              enterprise a permanent seat in one of the fastest-moving
              technology and commerce markets on the continent.
            </p>
            <p className="body-measure mt-5 text-[var(--ink-dim)]">
              The company is jointly held by CGE's chairman and its technology
              leadership — ownership and operating capability in the same room.
            </p>
          </div>
        </SectionReveal>
      </section>


      {/* Capabilities */}
      <section className="surface-light-2">
        <SectionReveal className="section-pad mx-auto max-w-6xl px-6">
          <Eyebrow>Objects & capabilities</Eyebrow>
          <h2 className="display-h2 mt-6 max-w-3xl">
            What CGI is chartered to do.
          </h2>
          <div className="mt-14 grid grid-cols-1 gap-x-14 gap-y-10 md:grid-cols-2">
            {capabilities.map((c, i) => (
              <div
                key={c.title}
                className="border-t border-[var(--line-light)] pt-6"
              >
                <span className="font-serif text-sm italic text-gold">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-2 font-serif text-xl">{c.title}</h3>
                <p className="body-measure mt-3 text-[var(--ink-dim)]">
                  {c.body}
                </p>
              </div>
            ))}
          </div>
        </SectionReveal>
      </section>

      {/* Governance */}
      <section className="surface-dark">
        <SectionReveal className="section-pad mx-auto max-w-6xl px-6">
          <Eyebrow>Directors & control</Eyebrow>
          <h2 className="display-h2 mt-6 text-bone">Ownership is explicit.</h2>
          <div className="mt-12 grid grid-cols-1 gap-10 lg:grid-cols-2">
            {directors.map((d) => (
              <div
                key={d.name}
                className="border-l-2 border-gold pl-8"
              >
                <h3 className="font-serif text-2xl text-bone">{d.name}</h3>
                <p className="eyebrow mt-3 text-gold">{d.role}</p>
                <p className="text-dim body-measure mt-4">{d.note}</p>
              </div>
            ))}
          </div>
        </SectionReveal>
      </section>

      <CgiLeadership />

      {/* Offices */}
      <section className="surface-light border-t border-[var(--line-light)]">
        <SectionReveal
          stagger
          className="section-pad mx-auto grid max-w-6xl grid-cols-1 gap-x-16 gap-y-12 px-6 md:grid-cols-2"
        >
          <div>
            <Eyebrow>Registered office</Eyebrow>
            <address className="mt-6 not-italic font-serif text-xl leading-relaxed">
              No. 1, Smart Bridge Plaza
              <br />
              O.P. Fingesi Street, Utako District
              <br />
              Abuja, AMAC, FCT — Nigeria
            </address>
          </div>
          <div className="md:border-l md:border-[var(--line-light)] md:pl-16">
            <Eyebrow>Lagos presence</Eyebrow>
            <address className="mt-6 not-italic font-serif text-xl leading-relaxed">
              8A, Saka Tinubu Street
              <br />
              Victoria Island, Eti-Osa
              <br />
              Lagos State — Nigeria
            </address>
          </div>
        </SectionReveal>
      </section>

      {/* Corporate registry */}
      <section className="surface-midnight border-y border-[var(--line-dark)]">
        <SectionReveal className="section-pad mx-auto max-w-6xl px-6">
          <Eyebrow>Corporate registry</Eyebrow>
          <h2 className="display-h2 mt-6 text-bone">On the record.</h2>
          {/* Mobile accordion */}
          <Accordion
            type="single"
            collapsible
            className="mt-12 border-t border-[var(--line-dark)] sm:hidden"
          >
            {registry.map((r) => (
              <AccordionItem
                key={r.label}
                value={r.label}
                className="border-b border-[var(--line-dark)]"
              >
                <AccordionTrigger className="py-5 text-left hover:no-underline">
                  <span className="eyebrow text-gold">{r.label}</span>
                </AccordionTrigger>
                <AccordionContent className="pb-6">
                  <p className="font-serif text-lg text-bone">{r.value}</p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          {/* Desktop grid */}
          <dl className="mt-12 hidden grid-cols-2 gap-px overflow-hidden border border-[var(--line-dark)] sm:grid">
            {registry.map((r) => (
              <div
                key={r.label}
                className="border border-[var(--line-dark)] p-7"
              >
                <dt className="eyebrow text-gold">{r.label}</dt>
                <dd className="mt-3 font-serif text-lg text-bone">{r.value}</dd>
              </div>
            ))}
          </dl>
          <p className="text-dim mt-8 text-sm">
            Source: Corporate Affairs Commission certified extract, 24 July 2026.
          </p>
        </SectionReveal>
      </section>

      <CTABand
        title="Partner with CGI."
        line="Technology, commerce, and trade mandates across Africa and beyond."
      />
    </main>
  );
}
