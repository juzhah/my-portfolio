"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

interface StackTool {
  name: string;
  abbreviation: string;
  role: string;
  color: string;
  textColor: string;
  reason: string;
}

interface StackGridProps {
  tools: StackTool[];
}

export function StackGrid({ tools }: StackGridProps) {
  const [activeTool, setActiveTool] = useState<string | null>(null);
  const selected = tools.find((t) => t.name === activeTool);

  return (
    <div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(160px, 1fr))",
          gap: "0.75rem",
        }}
      >
        {tools.map((tool) => {
          const isActive = activeTool === tool.name;

          return (
            <button
              key={tool.name}
              onClick={() => setActiveTool(isActive ? null : tool.name)}
              data-active={isActive}
              className="blog-stack-card flex items-center gap-3 px-4 py-3 text-left cursor-pointer"
            >
              <div
                className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 text-xs font-bold"
                style={{
                  fontFamily: "var(--blog-font-mono)",
                  backgroundColor: tool.color,
                  color: tool.textColor,
                }}
              >
                {tool.abbreviation}
              </div>
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
                  {tool.role}
                </div>
              </div>
            </button>
          );
        })}
      </div>

      {/* Detail panel */}
      <div className="mt-4" aria-live="polite">
        <AnimatePresence mode="wait">
          {selected ? (
            <motion.div
              key={selected.name}
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2, ease: "easeInOut" }}
              className="overflow-hidden"
            >
              <div
                className="px-5 py-4 rounded-xl bg-muted"
                style={{ border: "0.5px solid var(--border)" }}
              >
                <span
                  className="text-sm text-foreground font-semibold"
                  style={{ fontFamily: "var(--blog-font-ui)" }}
                >
                  {selected.name}
                </span>
                <span className="text-muted-foreground mx-2">&mdash;</span>
                <span
                  className="text-sm text-muted-foreground"
                  style={{ fontFamily: "var(--blog-font-ui)" }}
                >
                  {selected.reason}
                </span>
              </div>
            </motion.div>
          ) : (
            <motion.p
              key="placeholder"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.15 }}
              className="text-sm text-muted-foreground italic py-4"
              style={{ fontFamily: "var(--blog-font-mono)" }}
            >
              Click any card to learn why this tool was chosen.
            </motion.p>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
