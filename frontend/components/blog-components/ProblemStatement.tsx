interface ProblemStatementProps {
  quote: string;
  body: string;
}

export function ProblemStatement({ quote, body }: ProblemStatementProps) {
  return (
    <div
      className="pl-6 md:pl-8"
      style={{ borderLeft: "2px solid var(--primary)" }}
    >
      <blockquote
        className="text-xl md:text-2xl text-foreground italic leading-relaxed mb-6"
        style={{ fontFamily: "var(--blog-font-display)" }}
      >
        {quote}
      </blockquote>
      <p
        className="text-base text-muted-foreground leading-relaxed"
        style={{ fontFamily: "var(--blog-font-ui)" }}
      >
        {body}
      </p>
    </div>
  );
}
