interface ReflectionGridProps {
  dosDifferently: string[];
  lessonsLearned: string[];
}

export function ReflectionGrid({
  dosDifferently,
  lessonsLearned,
}: ReflectionGridProps) {
  const sections = [
    { title: "What I\u2019d do differently", items: dosDifferently },
    { title: "Lessons learned", items: lessonsLearned },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {sections.map((section) => (
        <div
          key={section.title}
          className="rounded-xl px-6 py-6"
          style={{ border: "0.5px solid var(--border)" }}
        >
          <h3
            className="text-[11px] tracking-[0.15em] uppercase text-muted-foreground mb-5"
            style={{ fontFamily: "var(--blog-font-mono)" }}
          >
            {section.title}
          </h3>
          <ul className="space-y-3">
            {section.items.map((item, idx) => (
              <li key={idx} className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-muted-foreground mt-[7px] flex-shrink-0" />
                <span
                  className="text-sm text-muted-foreground leading-relaxed"
                  style={{ fontFamily: "var(--blog-font-ui)" }}
                >
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
