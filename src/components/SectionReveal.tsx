import { useEffect, useRef, type ReactNode, type ElementType } from "react";
import { getGsap, prefersReducedMotion } from "@/lib/gsap";

/**
 * The signature reveal — the ONLY entrance motion on the site.
 * opacity 0 -> 1, y 28 -> 0, dur 0.9, power3.out, start 'top 82%', once.
 * Staggers direct children 0.08 when `stagger` is set.
 * No-op under prefers-reduced-motion.
 */
export function SectionReveal({
  children,
  className,
  stagger = false,
  as: Tag = "div",
}: {
  children: ReactNode;
  className?: string;
  stagger?: boolean;
  as?: ElementType;
}) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || typeof window === "undefined") return;
    if (prefersReducedMotion()) return;

    let ctx: { revert: () => void } | undefined;
    let cancelled = false;

    getGsap().then(({ gsap }) => {
      if (cancelled || !ref.current) return;
      ctx = gsap.context(() => {
        const targets = stagger
          ? (Array.from(ref.current!.children) as HTMLElement[])
          : [ref.current as HTMLElement];
        gsap.from(targets, {
          opacity: 0,
          y: 28,
          duration: 0.9,
          ease: "power3.out",
          stagger: stagger ? 0.08 : 0,
          scrollTrigger: {
            trigger: ref.current,
            start: "top 82%",
            once: true,
          },
        });
      }, ref.current!);
    });

    return () => {
      cancelled = true;
      ctx?.revert();
    };
  }, [stagger]);

  return (
    <Tag ref={ref as never} className={className}>
      {children}
    </Tag>
  );
}
