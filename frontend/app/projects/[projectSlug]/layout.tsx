import { getProject } from "../../data/get-projects";

import { getProjectPost } from "@/app/data/get-project-post";
import { Block, HeadingBlock } from "@/app/types";
import { ProjectHero } from "@/components/blog-components";
import { ArticleNav } from "@/components/blog-components/ArticleNav";

/* ─── Section index ────────────────────────────────────────────── */
const SECTIONS = [
  { id: "hero", idx: "01", label: "Project Hero" },
  { id: "tldr", idx: "02", label: "TLDR Strip" },
  { id: "problem", idx: "03", label: "Problem" },
  { id: "metrics", idx: "04", label: "Metrics" },
  { id: "stack", idx: "05", label: "Stack Grid" },
  { id: "flow", idx: "06", label: "Data Flow" },
  { id: "challenges", idx: "07", label: "Challenges" },
  { id: "reflection", idx: "08", label: "Reflection" },
  { id: "nav", idx: "09", label: "Navigation" },
] as const;

export default async function Layout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ projectSlug: string }>;
}) {
  const { projectSlug } = await params;
  const project = await getProject(projectSlug);

  const { blocks }: { blocks: Block[] } = await getProjectPost(projectSlug);

  const navSections = blocks
    .filter(
      (block): block is HeadingBlock =>
        block.__component === "post-components.heading",
    )
    .map((block): string => block?.title?.toLowerCase());

  console.log(navSections);

  return (
    <>
      {/* Hero Section */}
      <ProjectHero {...project} />

      {/* Main Content Layout */}
      {/* Two-column content area TODO: Fix when no article nav available*/}
      <div className="max-w-6xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-[200px_1fr] gap-16 pt-16 pb-28">
        {/* Sticky nav */}
        {navSections.length > 0 ? (
          <aside>
            <ArticleNav sections={navSections} />
          </aside>
        ) : (
          /* TODO: replace this when finished */
          <div></div>
        )}

        {/* Article content */}
        <article className="space-y-20 min-w-0">{children}</article>
      </div>
    </>
  );
}
