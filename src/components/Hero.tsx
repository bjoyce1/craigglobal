import type { ReactNode } from "react";
import { PlaceholderImage } from "./PlaceholderImage";
import { Eyebrow } from "./Eyebrow";
import { cn } from "@/lib/utils";

/**
 * Hero — full-bleed image + headline + arrow link.
 * Ken Burns on the background, bottom-up navy scrim for legibility.
 */
export function Hero({
  eyebrow,
  title,
  sub,
  children,
  fullViewport = false,
  imageLabel = "[PLACEHOLDER IMAGE]",
  id,
}: {
  eyebrow: string;
  title: ReactNode;
  sub?: ReactNode;
  children?: ReactNode;
  fullViewport?: boolean;
  imageLabel?: string;
  id?: string;
}) {
  return (
    <header
      id={id}
      className={cn(
        "surface-dark relative flex items-end overflow-hidden",
        fullViewport ? "min-h-[100svh]" : "min-h-[62vh]",
      )}
    >
      {/* [PLACEHOLDER IMAGE] background with Ken Burns */}
      <div className="absolute inset-0 kenburns">
        <PlaceholderImage className="h-full w-full" />
      </div>
      {/* bottom-up navy scrim */}
      <div className="scrim-bottom absolute inset-0" aria-hidden="true" />

      <div className="relative z-10 mx-auto w-full max-w-6xl px-5 pb-16 pt-32 sm:px-6 sm:pb-24 sm:pt-40 md:pb-32">
        <Eyebrow>{eyebrow}</Eyebrow>
        <h1 className="display-hero mt-6 max-w-4xl text-bone">{title}</h1>
        {sub && (
          <p className="body-measure text-dim mt-7 max-w-[52ch] text-bone">
            {sub}
          </p>
        )}
        {children && <div className="mt-9">{children}</div>}
      </div>
    </header>
  );
}
