interface MetricsRowProps {
  metrics: Array<{ value: string; label: string }>;
  metric_type: "cards" | "seamless";
}

function SeparateCards({ metrics }: Pick<MetricsRowProps, "metrics">) {
  return (
    <div
      className="mb-16"
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))",
        gap: "0.75rem",
      }}
    >
      {metrics.map((metric, idx) => (
        <div key={idx} className="bg-muted rounded-xl px-6 py-6">
          <div
            className="text-3xl md:text-4xl text-foreground tracking-tight mb-2"
            style={{ fontFamily: "var(--blog-font-display)" }}
          >
            {metric.label}
          </div>
          <div
            className="text-[10px] tracking-[0.15em] uppercase text-muted-foreground"
            style={{ fontFamily: "var(--blog-font-mono)" }}
          >
            {metric.value}
          </div>
        </div>
      ))}
    </div>
  );
}

function SeamlessCards({ metrics }: Pick<MetricsRowProps, "metrics">) {
  return (
    <div
      className="blog-cell-grid mb-16"
      style={{
        gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))",
      }}
    >
      {metrics.map((metric, idx) => (
        <div key={idx} className="px-5 py-5">
          <div
            className="text-[10px] tracking-[0.15em] uppercase text-muted-foreground mb-1.5"
            style={{ fontFamily: "var(--blog-font-mono)" }}
          >
            {metric.label}
          </div>
          <div
            className="text-sm font-semibold text-foreground"
            style={{ fontFamily: "var(--blog-font-ui)" }}
          >
            {metric.value}
          </div>
        </div>
      ))}
    </div>
  );
}

const metricComponentRegistry: Record<string, React.ComponentType<any>> = {
  cards: SeparateCards,
  seamless: SeamlessCards,
};

export function MetricsRow({ metrics, metric_type }: MetricsRowProps) {
  const MetricsComponent = metricComponentRegistry[metric_type];

  if (!MetricsComponent) return null;
  return <MetricsComponent metrics={metrics} />;
}
