import { useState, type FormEvent } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { SectionReveal } from "@/components/SectionReveal";
import { Eyebrow } from "@/components/Eyebrow";
import { PillButton } from "@/components/PillButton";
import { Crest } from "@/components/Crest";
import { contact } from "@/lib/content";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — CGE Corporate" },
      {
        name: "description",
        content:
          "Speak with CGE Corporate about partnership, investment, press, or careers.",
      },
      { property: "og:title", content: "Contact — CGE Corporate" },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: Contact,
});

const inquiryTypes = ["Partnership", "Investor", "Press", "Careers", "Other"];

function Contact() {
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const next: Record<string, string> = {};
    if (!String(data.get("name") || "").trim()) next.name = "Please enter your name.";
    const email = String(data.get("email") || "").trim();
    if (!email) next.email = "Please enter your email.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
      next.email = "Please enter a valid email.";
    if (!String(data.get("message") || "").trim())
      next.message = "Please include a message.";

    setErrors(next);
    if (Object.keys(next).length) {
      setStatus("error");
      return;
    }
    // No backend in this build — local success state.
    setStatus("success");
    form.reset();
  };

  const fieldBase =
    "mt-2 w-full border bg-transparent px-4 py-3 font-sans text-[0.95rem] text-bone placeholder:text-bone/40 focus:outline-none";

  return (
    <main className="surface-dark">
      {/* hero */}
      <header className="border-b border-[var(--line-dark)]">
        <SectionReveal className="mx-auto max-w-6xl px-6 pb-16 pt-44">
          <Eyebrow>Contact</Eyebrow>
          <h1 className="display-hero mt-6">Speak with CGE.</h1>
          <p className="body-measure text-dim mt-7">
            For partnership, investment, press, and career inquiries.
          </p>
        </SectionReveal>
      </header>

      <SectionReveal className="section-pad mx-auto grid max-w-6xl grid-cols-1 gap-16 px-6 lg:grid-cols-[1.3fr_1fr]">
        {/* form */}
        <form onSubmit={onSubmit} noValidate>
          {status === "success" && (
            <div
              role="status"
              className="mb-8 border border-gold/40 bg-gold/5 px-5 py-4 text-[0.95rem] text-bone"
            >
              Thank you. Your inquiry has been received; CGE will respond in due
              course.
            </div>
          )}

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <div>
              <label htmlFor="name" className="eyebrow" style={{ letterSpacing: "0.18em" }}>
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                className={fieldBase}
                style={{ borderColor: errors.name ? "var(--gold)" : "var(--line-dark)" }}
              />
              {errors.name && (
                <p className="mt-2 text-sm text-gold">{errors.name}</p>
              )}
            </div>
            <div>
              <label htmlFor="company" className="eyebrow" style={{ letterSpacing: "0.18em" }}>
                Company
              </label>
              <input
                id="company"
                name="company"
                type="text"
                className={fieldBase}
                style={{ borderColor: "var(--line-dark)" }}
              />
            </div>
          </div>

          <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2">
            <div>
              <label htmlFor="email" className="eyebrow" style={{ letterSpacing: "0.18em" }}>
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                className={fieldBase}
                style={{ borderColor: errors.email ? "var(--gold)" : "var(--line-dark)" }}
              />
              {errors.email && (
                <p className="mt-2 text-sm text-gold">{errors.email}</p>
              )}
            </div>
            <div>
              <label htmlFor="inquiry" className="eyebrow" style={{ letterSpacing: "0.18em" }}>
                Nature of inquiry
              </label>
              <select
                id="inquiry"
                name="inquiry"
                className={fieldBase}
                style={{ borderColor: "var(--line-dark)" }}
                defaultValue="Partnership"
              >
                {inquiryTypes.map((t) => (
                  <option key={t} value={t} className="bg-navy text-bone">
                    {t}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="mt-6">
            <label htmlFor="message" className="eyebrow" style={{ letterSpacing: "0.18em" }}>
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={6}
              className={fieldBase}
              style={{ borderColor: errors.message ? "var(--gold)" : "var(--line-dark)" }}
            />
            {errors.message && (
              <p className="mt-2 text-sm text-gold">{errors.message}</p>
            )}
          </div>

          <div className="mt-9">
            <PillButton type="submit">Send inquiry</PillButton>
          </div>
        </form>

        {/* contact cards */}
        <aside className="flex flex-col gap-8">
          <div className="hidden lg:block">
            <Crest size={88} />
          </div>
          {/* [PLACEHOLDER contact details] */}
          <div className="border-t border-[var(--line-dark)] pt-6">
            <p className="eyebrow" style={{ letterSpacing: "0.18em" }}>
              Email
            </p>
            <p className="mt-2 font-serif text-lg text-bone">{contact.email}</p>
          </div>
          <div className="border-t border-[var(--line-dark)] pt-6">
            <p className="eyebrow" style={{ letterSpacing: "0.18em" }}>
              Phone
            </p>
            <p className="mt-2 font-serif text-lg text-bone">{contact.phone}</p>
          </div>
          <div className="border-t border-[var(--line-dark)] pt-6">
            <p className="eyebrow" style={{ letterSpacing: "0.18em" }}>
              Registered Office
            </p>
            <p className="mt-2 font-serif text-lg text-bone">{contact.address}</p>
          </div>
          <p className="text-dim text-sm leading-relaxed">
            For partnership and acquisition inquiries, select Partnership above.
          </p>
        </aside>
      </SectionReveal>
    </main>
  );
}
