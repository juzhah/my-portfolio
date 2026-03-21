interface ChallengeListProps {
  items: Array<{ challenge: string; solution: string }>;
}

export function ChallengeList({ items }: ChallengeListProps) {
  return (
    <div className="space-y-4">
      {items.map((item, idx) => (
        <div
          key={idx}
          className="blog-cell-grid grid-cols-1 md:grid-cols-2"
        >
          {/* Problem column */}
          <div className="px-6 py-5">
            <div
              className="text-[10px] tracking-[0.15em] uppercase mb-2"
              style={{
                fontFamily: "var(--blog-font-mono)",
                color: "var(--blog-challenge)",
              }}
            >
              Challenge
            </div>
            <p
              className="text-sm text-foreground leading-relaxed"
              style={{ fontFamily: "var(--blog-font-ui)" }}
            >
              {item.challenge}
            </p>
          </div>

          {/* Solution column */}
          <div className="px-6 py-5">
            <div
              className="text-[10px] tracking-[0.15em] uppercase mb-2"
              style={{
                fontFamily: "var(--blog-font-mono)",
                color: "var(--blog-solution)",
              }}
            >
              Solution
            </div>
            <p
              className="text-sm text-foreground leading-relaxed"
              style={{ fontFamily: "var(--blog-font-ui)" }}
            >
              {item.solution}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
