import { useMemo } from "react";
import DottedMap from "dotted-map";
import { cn } from "@/lib/utils";

export type MapPoint = {
  id: string;
  label: string;
  lat: number;
  lng: number;
};

/**
 * LeadershipMap — flat midnight-blue world plate with fine lat/long geometry,
 * thin sovereign-gold routes and small gold location indicators.
 * Hovering a leadership card illuminates the matching node via `activeId`.
 */
export function LeadershipMap({
  points,
  activeId,
  className,
}: {
  points: MapPoint[];
  activeId?: string | null;
  className?: string;
}) {
  const svgMap = useMemo(() => {
    const map = new DottedMap({ height: 100, grid: "diagonal" });
    return map.getSVG({
      radius: 0.2,
      color: "#c8a24a33",
      shape: "circle",
      backgroundColor: "transparent",
    });
  }, []);

  const project = (lat: number, lng: number) => ({
    x: (lng + 180) * (800 / 360),
    y: (90 - lat) * (400 / 180),
  });

  const hub = points[0] ? project(points[0].lat, points[0].lng) : { x: 400, y: 200 };

  return (
    <div className={cn("relative aspect-[2/1] w-full", className)}>
      <img
        src={`data:image/svg+xml;utf8,${encodeURIComponent(svgMap)}`}
        alt=""
        aria-hidden="true"
        className="pointer-events-none h-full w-full select-none object-contain [mask-image:linear-gradient(to_bottom,transparent,black_14%,black_86%,transparent)]"
        draggable={false}
      />

      <svg
        viewBox="0 0 800 400"
        className="pointer-events-none absolute inset-0 h-full w-full select-none"
      >
        {/* fine latitude / longitude geometry */}
        <g stroke="var(--gold)" strokeOpacity="0.10" strokeWidth="0.5">
          {[50, 100, 150, 200, 250, 300, 350].map((y) => (
            <line key={`lat-${y}`} x1="0" y1={y} x2="800" y2={y} />
          ))}
          {[100, 200, 300, 400, 500, 600, 700].map((x) => (
            <line key={`lng-${x}`} x1={x} y1="0" x2={x} y2="400" />
          ))}
        </g>

        {/* thin gold routes from the Nigeria hub */}
        {points.slice(1).map((p) => {
          const to = project(p.lat, p.lng);
          const midX = (hub.x + to.x) / 2;
          const midY = Math.min(hub.y, to.y) - 42;
          const on = activeId === p.id || activeId === points[0]?.id;
          return (
            <path
              key={`route-${p.id}`}
              d={`M ${hub.x} ${hub.y} Q ${midX} ${midY} ${to.x} ${to.y}`}
              fill="none"
              stroke="var(--gold)"
              strokeWidth="0.75"
              strokeOpacity={on ? 0.85 : 0.22}
              className="transition-[stroke-opacity] duration-500"
            />
          );
        })}

        {points.map((p) => {
          const c = project(p.lat, p.lng);
          const on = activeId === p.id;
          return (
            <g key={p.id}>
              <circle
                cx={c.x}
                cy={c.y}
                r={on ? 3.2 : 2}
                fill="var(--gold)"
                opacity={on ? 1 : 0.7}
                className="transition-all duration-300"
              />
              <circle cx={c.x} cy={c.y} r="2.5" fill="var(--gold)" opacity="0.35">
                <animate
                  attributeName="r"
                  from="2.5"
                  to={on ? "16" : "9"}
                  dur={on ? "1.6s" : "2.6s"}
                  repeatCount="indefinite"
                />
                <animate
                  attributeName="opacity"
                  from="0.35"
                  to="0"
                  dur={on ? "1.6s" : "2.6s"}
                  repeatCount="indefinite"
                />
              </circle>
              <text
                x={c.x}
                y={c.y - 9}
                textAnchor="middle"
                fill="var(--bone)"
                fontSize="8"
                letterSpacing="1"
                opacity={on ? 1 : 0.5}
                className="font-sans transition-opacity duration-300"
              >
                {p.label}
              </text>
            </g>
          );
        })}
      </svg>
    </div>
  );
}
