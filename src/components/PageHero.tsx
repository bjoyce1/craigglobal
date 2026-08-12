import type { ReactNode } from "react";
import { SectionReveal } from "./SectionReveal";
import { Eyebrow } from "./Eyebrow";
import { PlaceholderImage } from "./PlaceholderImage";
import { cn } from "@/lib/utils";

function imageUrl(image: { url: string } | string | undefined): string | undefined {
  if (!image) return undefined;
  return typeof image === "string" ? image : image.url;
}

/**
 * PageHero — inner-page hero. Light variant is a calm headline block;
 * dark variant is full-bleed with an optional background image + scrim.
 */
export function PageHero({
  eyebrow,
  title,
  intro,
  variant = "light",
  image,
}: {
  eyebrow: string;
  title: ReactNode;
  intro?: ReactNode;
  variant?: "light" | "dark";
  image?: { url: string } | string;
}) {
  if (variant === "dark") {
    return (
      <header className="surface-dark relative flex min-h-[68svh] items-end overflow-hidden">
        <div className="absolute inset-0 kenburns">
          {image ? (
            <img
              src={imageUrl(image)}
              alt=""
              className="h-full w-full object-cover"
              width={1920}
              height={1080}
              fetchPriority="high"
            />
          ) : (
            <PlaceholderImage className="h-full w-full" />
          )}
        </div>
        <div className="scrim-bottom absolute inset-0" aria-hidden="true" />
        <div className="relative z-10 mx-auto w-full max-w-6xl px-6 pb-24 pt-44">
          <Eyebrow>{eyebrow}</Eyebrow>
          <h1 className="display-hero mt-6 max-w-4xl text-bone">{title}</h1>
          {intro && (
            <p className="body-measure mt-7 max-w-[52ch] text-bone/80">{intro}</p>
          )}
        </div>
      </header>
    );
  }

  return (
    <header className={cn("surface-light")}>
      <SectionReveal className="mx-auto max-w-6xl px-6 pb-16 pt-44">
        <Eyebrow>{eyebrow}</Eyebrow>
        <h1 className="display-hero mt-6 max-w-4xl">{title}</h1>
        {intro && (
          <p className="body-measure mt-7 text-[var(--ink-dim)]">{intro}</p>
        )}
      </SectionReveal>
    </header>
  );
}
