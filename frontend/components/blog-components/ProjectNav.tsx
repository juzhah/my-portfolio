"use client";

import Link from "next/link";

interface ProjectNavProps {
  prev?: { title: string; href: string };
  next?: { title: string; href: string };
  cta: { label: string; onClick: () => void };
}

export function ProjectNav({ prev, next, cta }: ProjectNavProps) {
  return (
    <div>
      {/* Prev / Next navigation */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
        {prev ? (
          <Link href={prev.href} className="blog-card block px-6 py-5">
            <div
              className="text-[10px] tracking-[0.15em] uppercase text-muted-foreground mb-2"
              style={{ fontFamily: "var(--blog-font-mono)" }}
            >
              &larr; Previous
            </div>
            <div
              className="text-base text-foreground font-medium"
              style={{ fontFamily: "var(--blog-font-ui)" }}
            >
              {prev.title}
            </div>
          </Link>
        ) : (
          <div />
        )}

        {next ? (
          <Link
            href={next.href}
            className="blog-card block px-6 py-5 text-right"
          >
            <div
              className="text-[10px] tracking-[0.15em] uppercase text-muted-foreground mb-2"
              style={{ fontFamily: "var(--blog-font-mono)" }}
            >
              Next &rarr;
            </div>
            <div
              className="text-base text-foreground font-medium"
              style={{ fontFamily: "var(--blog-font-ui)" }}
            >
              {next.title}
            </div>
          </Link>
        ) : (
          <div />
        )}
      </div>

      {/* CTA block */}
      <div className="bg-muted rounded-xl px-8 py-8 flex items-center justify-center">
        <button
          onClick={cta.onClick}
          className="px-8 py-3 bg-foreground text-background text-sm font-medium tracking-wide rounded-lg transition-opacity duration-150 hover:opacity-90 cursor-pointer"
          style={{ fontFamily: "var(--blog-font-ui)" }}
        >
          {cta.label}
        </button>
      </div>
    </div>
  );
}
