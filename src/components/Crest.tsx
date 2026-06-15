/**
 * Crest — the CGE monogram seal (our equivalent of the Rolex crown).
 * Thin gold ring, "CGE" in gold Playfair inside, short gold hairline above.
 * [PLACEHOLDER] — swap for the real logo file when supplied (/images/cge-crest.svg).
 */
export function Crest({
  size = 28,
  className,
  title = "CGE",
}: {
  size?: number;
  className?: string;
  title?: string;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      className={className}
      role="img"
      aria-label={title}
    >
      <title>{title}</title>
      {/* short gold hairline above the ring */}
      <line
        x1="38"
        y1="9"
        x2="62"
        y2="9"
        stroke="var(--gold)"
        strokeWidth="1.6"
      />
      {/* thin gold circular ring */}
      <circle
        cx="50"
        cy="54"
        r="38"
        fill="none"
        stroke="var(--gold)"
        strokeWidth="1.6"
      />
      <text
        x="50"
        y="54"
        textAnchor="middle"
        dominantBaseline="central"
        fontFamily="'Playfair Display', Georgia, serif"
        fontWeight="600"
        fontSize="26"
        letterSpacing="-1"
        fill="var(--gold)"
      >
        CGE
      </text>
    </svg>
  );
}
