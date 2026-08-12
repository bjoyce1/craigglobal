import type { ReactNode } from "react";
import { SectionReveal } from "./SectionReveal";
import { Eyebrow } from "./Eyebrow";
import { PlaceholderImage } from "./PlaceholderImage";
import { cn } from "@/lib/utils";
import { GlobePulse } from "./ui/cobe-globe-pulse";

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
  video,
  globe = false,
}: {
  eyebrow: string;
  title: ReactNode;
  intro?: ReactNode;
  variant?: "light" | "dark";
  image?: { url: string } | string;
  video?: { url: string } | string;
  globe?: boolean;
}) {
  if (variant === "dark") {
    return (
      <header className="surface-dark relative flex min-h-[68svh] items-end overflow-hidden">
        <div className={cn("absolute inset-0", !video && !globe && "kenburns")}>
          {globe ? (
            image ? (
              <img
                src={imageUrl(image)}
                alt=""
                className="h-full w-full object-cover opacity-40"
                width={1920}
                height={1080}
                fetchPriority="high"
              />
            ) : null
          ) : video ? (
            <video
              src={imageUrl(video)}
              poster={imageUrl(image)}
              className="h-full w-full object-cover opacity-55 [filter:saturate(0.7)_contrast(0.95)]"
              autoPlay
              muted
              loop
              playsInline
              preload="auto"
              aria-hidden="true"
            />
          ) : image ? (
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

        {globe && (
          <>
            <div
              className="pointer-events-none absolute inset-0 bg-[var(--navy)]/70"
              aria-hidden="true"
            />
            <div className="absolute -right-[12%] top-1/2 w-[46vw] max-w-[760px] min-w-[420px] -translate-y-1/2 opacity-80 [mask-image:radial-gradient(closest-side,black_72%,transparent_100%)] md:-right-[6%]">
              <GlobePulse />
            </div>
          </>
        )}
        {video && (
          <div
            className="absolute inset-0 bg-[var(--navy,#0b1220)]/45 mix-blend-multiply"
            aria-hidden="true"
          />
        )}
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
