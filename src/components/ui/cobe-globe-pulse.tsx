import { useEffect, useRef, useCallback } from "react";

export interface PulseMarker {
  id: string;
  location: [number, number];
  delay: number;
}

interface GlobePulseProps {
  markers?: PulseMarker[];
  className?: string;
  speed?: number;
}

const defaultMarkers: PulseMarker[] = [
  { id: "pulse-lagos", location: [6.52, 3.38], delay: 0 },
  { id: "pulse-abuja", location: [9.06, 7.49], delay: 0.4 },
  { id: "pulse-jhb", location: [-26.2, 28.04], delay: 0.8 },
  { id: "pulse-london", location: [51.51, -0.13], delay: 1.2 },
  { id: "pulse-nyc", location: [40.71, -74.01], delay: 1.6 },
];

/** Brand-tuned interactive globe: antique gold markers on deep navy. */
export function GlobePulse({
  markers = defaultMarkers,
  className = "",
  speed = 0.0018,
}: GlobePulseProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const pointerInteracting = useRef<{ x: number; y: number } | null>(null);
  const dragOffset = useRef({ phi: 0, theta: 0 });
  const phiOffsetRef = useRef(0);
  const thetaOffsetRef = useRef(0);
  const isPausedRef = useRef(false);

  const handlePointerDown = useCallback((e: React.PointerEvent) => {
    pointerInteracting.current = { x: e.clientX, y: e.clientY };
    if (canvasRef.current) canvasRef.current.style.cursor = "grabbing";
    isPausedRef.current = true;
  }, []);

  const handlePointerUp = useCallback(() => {
    if (pointerInteracting.current !== null) {
      phiOffsetRef.current += dragOffset.current.phi;
      thetaOffsetRef.current += dragOffset.current.theta;
      dragOffset.current = { phi: 0, theta: 0 };
    }
    pointerInteracting.current = null;
    if (canvasRef.current) canvasRef.current.style.cursor = "grab";
    isPausedRef.current = false;
  }, []);

  useEffect(() => {
    const handlePointerMove = (e: PointerEvent) => {
      if (pointerInteracting.current !== null) {
        dragOffset.current = {
          phi: (e.clientX - pointerInteracting.current.x) / 300,
          theta: (e.clientY - pointerInteracting.current.y) / 1000,
        };
      }
    };
    window.addEventListener("pointermove", handlePointerMove, { passive: true });
    window.addEventListener("pointerup", handlePointerUp, { passive: true });
    return () => {
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("pointerup", handlePointerUp);
    };
  }, [handlePointerUp]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    let globe: { update: (s: Record<string, number>) => void; destroy: () => void } | null =
      null;
    let animationId = 0;
    let cancelled = false;
    let phi = 0;

    async function init() {
      if (!canvas || cancelled || globe) return;
      const width = canvas.offsetWidth;
      if (width === 0) return;
      const { default: createGlobe } = await import("cobe");
      if (cancelled) return;

      globe = createGlobe(canvas, {
        devicePixelRatio: Math.min(window.devicePixelRatio || 1, 2),
        width,
        height: width,
        phi: 0,
        theta: 0.2,
        dark: 1,
        diffuse: 1.1,
        mapSamples: 16000,
        mapBrightness: 4.2,
        baseColor: [0.11, 0.18, 0.31],
        markerColor: [0.77, 0.64, 0.33],
        glowColor: [0.13, 0.2, 0.34],
        markerElevation: 0,
        markers: markers.map((m) => ({ location: m.location, size: 0.03, id: m.id })),
        opacity: 0.95,
      } as never) as never;

      const animate = () => {
        if (!isPausedRef.current) phi += speed;
        globe?.update({
          phi: phi + phiOffsetRef.current + dragOffset.current.phi,
          theta: 0.2 + thetaOffsetRef.current + dragOffset.current.theta,
        });
        animationId = requestAnimationFrame(animate);
      };
      animate();
      canvas.style.opacity = "1";
    }

    if (canvas.offsetWidth > 0) {
      void init();
    } else {
      const ro = new ResizeObserver((entries) => {
        if ((entries[0]?.contentRect.width ?? 0) > 0) {
          ro.disconnect();
          void init();
        }
      });
      ro.observe(canvas);
      return () => {
        cancelled = true;
        ro.disconnect();
        if (animationId) cancelAnimationFrame(animationId);
        globe?.destroy();
      };
    }

    return () => {
      cancelled = true;
      if (animationId) cancelAnimationFrame(animationId);
      globe?.destroy();
    };
  }, [markers, speed]);

  return (
    <div className={`relative ${className}`}>
      <style>{`
        @keyframes cge-pulse-expand {
          0% { transform: scale(0.3); opacity: 0.7; }
          100% { transform: scale(1.5); opacity: 0; }
        }
      `}</style>
      <canvas
        ref={canvasRef}
        onPointerDown={handlePointerDown}
        onPointerUp={handlePointerUp}
        className="h-full w-full cursor-grab opacity-0 transition-opacity duration-1000 [contain:layout_paint_size]"
        style={{ aspectRatio: "1 / 1" }}
      />
      {markers.map((m) => (
        <div
          key={m.id}
          style={{
            position: "absolute",
            // @ts-expect-error CSS Anchor Positioning
            positionAnchor: `--cobe-${m.id}`,
            bottom: "anchor(center)",
            left: "anchor(center)",
            translate: "-50% 50%",
            width: 36,
            height: 36,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            pointerEvents: "none" as const,
            opacity: `var(--cobe-visible-${m.id}, 0)`,
            filter: `blur(calc((1 - var(--cobe-visible-${m.id}, 0)) * 8px))`,
            transition: "opacity 0.4s, filter 0.4s",
          }}
        >
          <span
            style={{
              position: "absolute",
              inset: 0,
              border: "1px solid var(--gold)",
              borderRadius: "50%",
              opacity: 0,
              animation: `cge-pulse-expand 2.6s ease-out infinite ${m.delay}s`,
            }}
          />
          <span
            style={{
              position: "absolute",
              inset: 0,
              border: "1px solid var(--gold)",
              borderRadius: "50%",
              opacity: 0,
              animation: `cge-pulse-expand 2.6s ease-out infinite ${m.delay + 0.8}s`,
            }}
          />
          <span
            style={{
              width: 6,
              height: 6,
              background: "var(--gold-hi)",
              borderRadius: "50%",
              boxShadow: "0 0 0 2px var(--navy), 0 0 10px 2px var(--gold)",
            }}
          />
        </div>
      ))}
    </div>
  );
}
