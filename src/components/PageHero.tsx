import type { ReactNode } from "react";
import { SectionReveal } from "./SectionReveal";
import { Eyebrow } from "./Eyebrow";
import { PlaceholderImage } from "./PlaceholderImage";
import { cn } from "@/lib/utils";
import { GlobePulse } from "./ui/cobe-globe-pulse";
import { WorldMap } from "./ui/map";

/** Holdings footprint — arcs between CGE market hubs. */
const worldDots = [
  {
    start: { lat: 40.7128, lng: -74.006, label: "New York" },
    end: { lat: 51.5074, lng: -0.1278, label: "London" },
  },
  {
    start: { lat: 51.5074, lng: -0.1278, label: "London" },
    end: { lat: 6.5244, lng: 3.3792, label: "Lagos" },
  },
  {
    start: { lat: 6.5244, lng: 3.3792, label: "Lagos" },
    end: { lat: -26.2041, lng: 28.0473, label: "Johannesburg" },
  },
  {
    start: { lat: 43.6532, lng: -79.3832, label: "Toronto" },
    end: { lat: 40.7128, lng: -74.006, label: "New York" },
  },
  {
    start: { lat: 50.0, lng: 8.2711, label: "Mainz" },
    end: { lat: 40.7128, lng: -74.006, label: "New York" },
  },
];

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
  map = false,
}: {
  eyebrow: string;
  title: ReactNode;
  intro?: ReactNode;
  variant?: "light" | "dark";
  image?: { url: string } | string;
  video?: { url: string } | string;
  globe?: boolean;
  map?: boolean;
}) {
  if (variant === "dark") {
    return (
      <header className="surface-dark relative flex min-h-[68svh] items-end overflow-hidden">
        <div className={cn("absolute inset-0", !video && !globe && !map && "kenburns")}>
          {map ? (
            <div className="absolute inset-0 flex items-center justify-center overflow-hidden opacity-70">
              <div className="w-[180%] max-w-none sm:w-full">
                <WorldMap dots={worldDots} />
              </div>
            </div>
          ) : globe ? (

            <div className="starfield" aria-hidden="true">
              <div className="star-layer star-layer-1" />
              <div className="star-layer star-layer-2" />
            </div>
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
              className="pointer-events-none absolute inset-0 bg-[var(--navy)]/25"
              aria-hidden="true"
            />
            <div className="absolute left-1/2 top-[26%] w-[78vw] max-w-[420px] -translate-x-1/2 -translate-y-1/2 opacity-50 [mask-image:radial-gradient(closest-side,black_72%,transparent_100%)] sm:left-auto sm:right-[-12%] sm:top-1/2 sm:w-[46vw] sm:min-w-[420px] sm:max-w-[760px] sm:translate-x-0 sm:opacity-80 md:right-[-6%]">
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
        <div className="relative z-10 mx-auto w-full max-w-6xl px-5 pb-16 pt-32 sm:px-6 sm:pb-24 sm:pt-44">
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
      <SectionReveal className="mx-auto max-w-6xl px-5 pb-12 pt-32 sm:px-6 sm:pb-16 sm:pt-44">
        <Eyebrow>{eyebrow}</Eyebrow>
        <h1 className="display-hero mt-6 max-w-4xl">{title}</h1>
        {intro && (
          <p className="body-measure mt-7 text-[var(--ink-dim)]">{intro}</p>
        )}
      </SectionReveal>
    </header>
  );
}
