import { Tool, Tools } from "@/app/types";

interface StackTool {
  name: string;
  abbreviation: string;
  role: string;
  color: string;
  textColor: string;
  reason: string;
}

interface StackGridProps {
  tools: Tools[];
}

export function StackGrid({ tools }: StackGridProps) {
  return (
    <div>
      <div
        className="text-[11px] tracking-[0.25em] uppercase font-semibold mb-4 pb-2 text-primary/50"
        style={{
          fontFamily: "var(--blog-font-mono)",
          borderBottom:
            "0.5px solid color-mix(in oklch, var(--primary) 50%, transparent)",
        }}
      >
        Stackgrid
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(160px, 1fr))",
          gap: "0.75rem",
        }}
      >
        {tools.map((tool) => {
          return (
            <div
              key={tool.name}
              className="blog-stack-card flex items-center gap-3 px-4 py-3 text-left cursor-pointer"
            >
              {/* <div
                className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 text-xs font-bold"
                style={{
                  fontFamily: "var(--blog-font-mono)",
                  backgroundColor: tool.color,
                  color: tool.textColor,
                }}
              >
                {tool.abbreviation}
              </div> */}
              <div className="min-w-0">
                <div
                  className="text-sm text-foreground font-medium truncate"
                  style={{ fontFamily: "var(--blog-font-ui)" }}
                >
                  {tool.name}
                </div>
                <div
                  className="text-[10px] tracking-[0.1em] uppercase text-muted-foreground truncate"
                  style={{ fontFamily: "var(--blog-font-mono)" }}
                >
                  {/* {tool.role} */}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
