import { getProjectPost } from "@/app/data/get-project-post";
import { Block, HeadingBlock, Project } from "@/app/types";
import { ProjectHero, StackGrid } from "@/components/blog-components";
import Navbar from "@/components/sections/Navbar";

export default async function Layout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ projectSlug: string }>;
}) {
  const { projectSlug } = await params;

  const { blocks, project }: { blocks: Block[]; project: Project } =
    await getProjectPost(projectSlug);

  return (
    <>
      <Navbar scrollEffect={false} />
      {/* Hero Section */}
      <ProjectHero {...project} />

      {/* Main Content Layout */}
      {/* Two-column content area TODO: Fix when no article nav available TODO: Create different layout according to article_type*/}
      <div className="relative max-w-5xl mx-auto px-6 md:px-12 pt-16 pb-28 ">
        {/* Sticky nav */}
        {/* <aside>
          <div className="sticky top-28">
            <ArticleNav sections={navSections} />
          </div>
        </aside> */}
        {/* Article content */}
        <article className="space-y-32 relative w-full max-w-7xl blog-article">
          <StackGrid tools={project.tools} />
          {children}
        </article>
      </div>
    </>
  );
}
