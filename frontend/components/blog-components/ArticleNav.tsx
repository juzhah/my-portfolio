"use client";
import { useState, useEffect } from "react";

const toId = (label: string) => label.replaceAll(" ", "-");

export function ArticleNav({ sections }: { sections: string[] }) {
  const [activeSection, setActiveSection] = useState<string>(sections[0] ?? "");

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    sections.forEach((label) => {
      const el = document.getElementById(toId(label));
      if (!el) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveSection(label);
        },
        { rootMargin: "-25% 0px -65% 0px" },
      );
      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, [sections]);

  const activeIndex = sections.indexOf(activeSection);
  const progress =
    sections.length > 0 ? ((activeIndex + 1) / sections.length) * 100 : 0;

  return (
    <nav className="sticky top-28 flex flex-col select-none">
      {/* Header — current / total */}
      <div className="mb-5">
        <p
          className="text-[9px] tracking-[0.25em] uppercase text-muted-foreground mb-2"
          style={{ fontFamily: "var(--blog-font-mono)" }}
        >
          Index
        </p>
        <div className="flex items-baseline gap-1.5">
          <span
            className="text-3xl leading-none text-foreground"
            style={{ fontFamily: "var(--blog-font-display)" }}
          >
            {String(activeIndex + 1).padStart(2, "0")}
          </span>
          <span
            className="text-xs text-muted-foreground"
            style={{ fontFamily: "var(--blog-font-mono)" }}
          >
            / {String(sections.length).padStart(2, "0")}
          </span>
        </div>
      </div>

      {/* Progress track */}
      <div
        className="h-px mb-5 rounded-full overflow-hidden"
        style={{ background: "var(--border)" }}
      >
        <div
          className="h-full rounded-full transition-all duration-500 ease-out"
          style={{ width: `${progress}%`, background: "var(--primary)" }}
        />
      </div>

      {/* Items */}
      <ul className="space-y-px">
        {sections.map((section, idx) => {
          const isActive = activeSection === section;
          const index = idx + 1;
          const sectionId = toId(section);

          return (
            <li key={section}>
              <a
                href={`#${sectionId}`}
                onClick={(e) => {
                  e.preventDefault();
                  document
                    .getElementById(sectionId)
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
                className="group flex items-center gap-2.5 px-2.5 py-2 rounded-lg transition-all duration-150"
                style={{
                  background: isActive ? "var(--muted)" : "transparent",
                }}
              >
                {/* Dot indicator */}
                <span
                  className="w-1.5 h-1.5 rounded-full shrink-0 transition-all duration-150"
                  style={{
                    background: isActive ? "var(--primary)" : "transparent",
                    border: isActive
                      ? "none"
                      : "1px solid var(--muted-foreground)",
                    transform: isActive ? "scale(1.15)" : "scale(1)",
                  }}
                />

                {/* Index number */}
                <span
                  className="text-[10px] w-5 shrink-0 tabular-nums transition-colors duration-150"
                  style={{
                    fontFamily: "var(--blog-font-mono)",
                    color: isActive
                      ? "var(--primary)"
                      : "var(--muted-foreground)",
                  }}
                >
                  {index < 10 ? "0" + index : index}
                </span>

                {/* Label */}
                <span
                  className="text-[11px] tracking-[0.06em] uppercase transition-colors duration-150"
                  style={{
                    fontFamily: "var(--blog-font-mono)",
                    color: isActive
                      ? "var(--foreground)"
                      : "var(--muted-foreground)",
                  }}
                >
                  {section}
                </span>
              </a>
            </li>
          );
        })}
      </ul>

      {/* Footer rule */}
      <div
        className="mt-6 pt-4"
        style={{ borderTop: "0.5px solid var(--border)" }}
      >
        <p
          className="text-[9px] tracking-[0.2em] uppercase text-muted-foreground/50"
          style={{ fontFamily: "var(--blog-font-mono)" }}
        >
          Preview · {new Date().getFullYear()}
        </p>
      </div>
    </nav>
  );
}
