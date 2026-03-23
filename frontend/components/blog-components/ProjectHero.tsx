import { Project } from "@/app/types";
import { mapStrapiImage } from "@/lib/map-strapi-image";
import Image from "next/image";

type ProjectHeroProps = Pick<
  Project,
  "title" | "cover" | "description" | "status" | "project_tags" | "type"
> &
  Partial<Project>;

/* TODO: fix scrolled position bug when entering route for the first time */

/* TODO: add actual status values */
const statusConfig = {
  completed: { label: "Live", color: "var(--blog-status-live)" },
  in_development: {
    label: "In Progress",
    color: "var(--blog-status-progress)",
  },
  /* NO archived value provided from backend yet */
  archived: { label: "Archived", color: "var(--blog-status-archived)" },
} as const;

export function ProjectHero({
  title,
  description,
  status,
  cover,
  project_tags,
  /* ctaDemo,
  ctaGithub, */
}: ProjectHeroProps) {
  const { label: statusLabel, color: statusColor } = status
    ? statusConfig[status]
    : { label: undefined, color: undefined };
  const titleLines = title.split("\n");
  const image = mapStrapiImage({ image: cover, preferredFormat: "large" });

  return (
    <header
      className="relative md:w-11/12 max-w-400 mx-auto px-6 md:px-12 lg:px-24 pt-32 pb-16 border rounded-b-4xl overflow-clip h-160"
      style={{ borderBottom: "0.5px solid var(--border)" }}
    >
      <div className="relative max-w-5xl mx-auto z-50">
        {/* Status badge */}
        <div className="mb-8">
          <span
            className="inline-flex items-center gap-2 text-xs tracking-[0.15em] uppercase"
            style={{
              fontFamily: "var(--blog-font-mono)",
              color: statusColor,
            }}
          >
            <span
              className="w-1.5 h-1.5 rounded-full"
              style={{ backgroundColor: statusColor }}
            />
            {statusLabel}
          </span>
        </div>

        {/* Title — split on \n for optional italic second line */}
        <h1
          className="text-4xl sm:text-5xl md:text-6xl  text-foreground leading-[1.05] tracking-tight mb-4"
          style={{ fontFamily: "var(--blog-font-display)" }}
        >
          {titleLines[0]}
          {titleLines[1] && (
            <>
              <br />
              <span className="italic text-muted-foreground">
                {titleLines[1]}
              </span>
            </>
          )}
        </h1>

        {/* Tagline */}
        <p
          className="text-xl md:text-xl text-muted-foreground italic leading-relaxed mb-10 max-w-3xl"
          style={{ fontFamily: "var(--blog-font-display)" }}
        >
          {description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-10">
          {project_tags?.map((tag) => (
            <span
              key={tag.name}
              className="blog-tag text-[11px] tracking-widest uppercase px-3 py-1 text-muted-foreground"
              style={{ fontFamily: "var(--blog-font-mono)" }}
            >
              {tag.name}
            </span>
          ))}
        </div>

        {/* CTAs */}
        <div className="flex flex-wrap items-center gap-4">
          {/*  {ctaDemo && (
            <Link
              href={ctaDemo.href}
              className="inline-flex items-center gap-2 px-6 py-3 bg-foreground text-background text-sm font-medium tracking-wide rounded-lg transition-opacity duration-150 hover:opacity-90"
              style={{ fontFamily: "var(--blog-font-ui)" }}
            >
              {ctaDemo.label}
              <svg
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M1 13L13 1M13 1H5M13 1V9"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>
          )}
          {ctaGithub && (
            <Link
              href={ctaGithub.href}
              className="blog-card inline-flex items-center gap-2 px-6 py-3 text-foreground text-sm font-medium tracking-wide hover:bg-muted/50"
              style={{ fontFamily: "var(--blog-font-ui)" }}
            >
              Source
              <svg
                width="15"
                height="15"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
            </Link>
          )} */}
        </div>
      </div>
      <div className="absolute inset-0 z-0 ">
        {/* TODO: prerender image before reaching route view */}
        <Image
          src={
            image ??
            "https://res.cloudinary.com/djrth1ax6/image/upload/v1774162097/oxa_roxa_G12979_Eg_Zc_unsplash_9f36395aba.jpg"
          }
          alt={cover?.alternativeText || title}
          fill
          quality={90}
          loading="eager"
          className="h-full object-cover"
        />
        <div className="absolute inset-0 hero-gradient"></div>
      </div>
    </header>
  );
}
