import { useRef, useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import DottedMap from "dotted-map";

interface MapProps {
  dots?: Array<{
    start: { lat: number; lng: number; label?: string };
    end: { lat: number; lng: number; label?: string };
  }>;
  lineColor?: string;
  showLabels?: boolean;
  animationDuration?: number;
  loop?: boolean;
}

/**
 * WorldMap — dotted world map with animated great-circle style arcs.
 * Brand-tuned: gold dots + gold arcs over transparent navy.
 */
export function WorldMap({
  dots = [],
  lineColor = "#c8a24a",
  showLabels = true,
  animationDuration = 2,
  loop = true,
}: MapProps) {
  const svgRef = useRef<SVGSVGElement>(null);
  const [hoveredLocation, setHoveredLocation] = useState<string | null>(null);

  const svgMap = useMemo(() => {
    const map = new DottedMap({ height: 100, grid: "diagonal" });
    return map.getSVG({
      radius: 0.22,
      color: "#c8a24a45",
      shape: "circle",
      backgroundColor: "transparent",
    });
  }, []);

  const projectPoint = (lat: number, lng: number) => ({
    x: (lng + 180) * (800 / 360),
    y: (90 - lat) * (400 / 180),
  });

  const createCurvedPath = (
    start: { x: number; y: number },
    end: { x: number; y: number },
  ) => {
    const midX = (start.x + end.x) / 2;
    const midY = Math.min(start.y, end.y) - 50;
    return `M ${start.x} ${start.y} Q ${midX} ${midY} ${end.x} ${end.y}`;
  };

  const staggerDelay = 0.3;
  const totalAnimationTime = dots.length * staggerDelay + animationDuration;
  const fullCycleDuration = totalAnimationTime + 2;

  return (
    <div className="relative aspect-[2/1] w-full">
      <img
        src={`data:image/svg+xml;utf8,${encodeURIComponent(svgMap)}`}
        alt=""
        aria-hidden="true"
        className="pointer-events-none h-full w-full select-none object-contain [mask-image:linear-gradient(to_bottom,transparent,black_18%,black_82%,transparent)]"
        draggable={false}
      />

      <svg
        ref={svgRef}
        viewBox="0 0 800 400"
        className="pointer-events-none absolute inset-0 h-full w-full select-none"
      >
        <defs>
          <linearGradient id="path-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="white" stopOpacity="0" />
            <stop offset="12%" stopColor={lineColor} stopOpacity="1" />
            <stop offset="88%" stopColor={lineColor} stopOpacity="1" />
            <stop offset="100%" stopColor="white" stopOpacity="0" />
          </linearGradient>
        </defs>

        {dots.map((dot, i) => {
          const startPoint = projectPoint(dot.start.lat, dot.start.lng);
          const endPoint = projectPoint(dot.end.lat, dot.end.lng);
          return (
            <motion.path
              key={`path-${i}`}
              d={createCurvedPath(startPoint, endPoint)}
              fill="none"
              stroke="url(#path-gradient)"
              strokeWidth="1"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: loop ? [0, 1, 1, 0] : 1 }}
              transition={{
                duration: loop ? fullCycleDuration : animationDuration,
                times: loop ? [0, 0.35, 0.85, 1] : undefined,
                delay: i * staggerDelay,
                repeat: loop ? Infinity : 0,
                ease: "easeOut",
              }}
            />
          );
        })}

        {dots.flatMap((dot, i) =>
          [dot.start, dot.end].map((point, j) => {
            const p = projectPoint(point.lat, point.lng);
            const label = point.label ?? `Location ${i}-${j}`;
            return (
              <g
                key={`pt-${i}-${j}`}
                className="pointer-events-auto cursor-pointer"
                onMouseEnter={() => setHoveredLocation(label)}
                onMouseLeave={() => setHoveredLocation(null)}
              >
                <circle cx={p.x} cy={p.y} r="2" fill={lineColor} />
                <circle cx={p.x} cy={p.y} r="2" fill={lineColor} opacity="0.5">
                  <animate
                    attributeName="r"
                    from="2"
                    to="10"
                    dur="2s"
                    repeatCount="indefinite"
                  />
                  <animate
                    attributeName="opacity"
                    from="0.5"
                    to="0"
                    dur="2s"
                    repeatCount="indefinite"
                  />
                </circle>
                {showLabels && point.label && (
                  <text
                    x={p.x}
                    y={p.y - 8}
                    textAnchor="middle"
                    className="font-sans"
                    fill="#e8ddc4"
                    fontSize="8"
                    letterSpacing="1"
                    opacity={hoveredLocation === label ? 1 : 0.65}
                  >
                    {point.label}
                  </text>
                )}
              </g>
            );
          }),
        )}
      </svg>

      <AnimatePresence>
        {hoveredLocation && (
          <motion.div
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 6 }}
            className="pointer-events-none absolute bottom-3 left-1/2 -translate-x-1/2 rounded-full border border-[var(--gold)]/40 bg-[var(--midnight)]/80 px-4 py-1.5 font-sans text-[0.7rem] uppercase tracking-[0.18em] text-[var(--gold)] md:hidden"
          >
            {hoveredLocation}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
