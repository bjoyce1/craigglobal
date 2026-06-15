import { useEffect } from "react";
import { useRouterState } from "@tanstack/react-router";

/**
 * GSAP foundation. Client-only — guarded for SSR.
 * - Registers ScrollTrigger + ScrollToPlugin
 * - Clears scroll memory, scrolls to top + refreshes on route change
 * - Debounced refresh on window load and lazy-image load
 * NOTE: never use CSS scroll-behavior: smooth — it corrupts ScrollTrigger.
 */
export function prefersReducedMotion() {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

let registered = false;

async function getGsap() {
  const { gsap } = await import("gsap");
  const { ScrollTrigger } = await import("gsap/ScrollTrigger");
  const { ScrollToPlugin } = await import("gsap/ScrollToPlugin");
  if (!registered) {
    gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);
    ScrollTrigger.clearScrollMemory("manual");
    registered = true;
  }
  return { gsap, ScrollTrigger };
}

export function useGsapFoundation() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  // One-time setup: debounced refresh on load and lazy image loads.
  useEffect(() => {
    if (typeof window === "undefined") return;
    let cancelled = false;
    let timer: ReturnType<typeof setTimeout>;

    const run = async () => {
      const { ScrollTrigger } = await getGsap();
      if (cancelled) return;

      const refresh = () => {
        clearTimeout(timer);
        timer = setTimeout(() => ScrollTrigger.refresh(), 200);
      };

      window.addEventListener("load", refresh);
      const imgs = Array.from(document.images);
      imgs.forEach((img) => {
        if (!img.complete) img.addEventListener("load", refresh, { once: true });
      });

      return () => {
        window.removeEventListener("load", refresh);
        clearTimeout(timer);
      };
    };

    let cleanup: (() => void) | undefined;
    run().then((c) => {
      cleanup = c;
    });

    return () => {
      cancelled = true;
      cleanup?.();
    };
  }, []);

  // On every route change: jump to top + refresh ScrollTrigger.
  useEffect(() => {
    if (typeof window === "undefined") return;
    window.scrollTo(0, 0);
    let cancelled = false;
    getGsap().then(({ ScrollTrigger }) => {
      if (!cancelled) ScrollTrigger.refresh();
    });
    return () => {
      cancelled = true;
    };
  }, [pathname]);
}

/**
 * Smooth-scroll to a target element selector or window position.
 * Falls back to instant under reduced motion.
 */
export async function smoothScrollTo(target: string | number) {
  if (typeof window === "undefined") return;
  if (prefersReducedMotion()) {
    if (typeof target === "number") {
      window.scrollTo(0, target);
    } else {
      document.querySelector(target)?.scrollIntoView();
    }
    return;
  }
  const { gsap } = await getGsap();
  gsap.to(window, { scrollTo: target, duration: 1.1, ease: "power3.inOut" });
}

export { getGsap };
