"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

interface DataFlowStep {
  title: string;
  description: string;
  tag: string;
}

interface DataFlowProps {
  steps: DataFlowStep[];
}

export function DataFlow({ steps }: DataFlowProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div>
      {steps.map((step, idx) => {
        const isActive = activeIndex === idx;
        const isLast = idx === steps.length - 1;

        return (
          <div key={idx}>
            <button
              onClick={() => setActiveIndex(isActive ? -1 : idx)}
              className="w-full flex items-center gap-4 py-4 text-left cursor-pointer"
              aria-expanded={isActive}
            >
              {/* Step number circle */}
              <div
                className="w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 text-xs font-bold transition-colors duration-150"
                style={{
                  fontFamily: "var(--blog-font-mono)",
                  backgroundColor: isActive
                    ? "var(--foreground)"
                    : "transparent",
                  color: isActive
                    ? "var(--background)"
                    : "var(--muted-foreground)",
                  border: `1.5px solid ${isActive ? "var(--foreground)" : "var(--border)"}`,
                }}
              >
                {idx + 1}
              </div>

              <span
                className="text-base transition-colors duration-150"
                style={{
                  fontFamily: "var(--blog-font-ui)",
                  color: isActive
                    ? "var(--foreground)"
                    : "var(--muted-foreground)",
                  fontWeight: isActive ? 600 : 400,
                }}
              >
                {step.title}
              </span>
            </button>

            {/* Expandable content */}
            <AnimatePresence>
              {isActive && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.2, ease: "easeInOut" }}
                  className="overflow-hidden"
                >
                  <div className="pl-11 pb-4">
                    <p
                      className="text-sm text-muted-foreground leading-relaxed mb-3"
                      style={{ fontFamily: "var(--blog-font-ui)" }}
                    >
                      {step.description}
                    </p>
                    <span
                      className="blog-tag inline-block text-[10px] tracking-[0.1em] uppercase px-2.5 py-1 text-muted-foreground bg-muted"
                      style={{ fontFamily: "var(--blog-font-mono)" }}
                    >
                      {step.tag}
                    </span>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {!isLast && <hr className="blog-step-divider ml-3.5" />}
          </div>
        );
      })}
    </div>
  );
}
