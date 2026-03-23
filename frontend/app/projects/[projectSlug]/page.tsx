import { getProjects } from "@/app/data/get-projects";
import { DynamicZone } from "@/components/blog-components/BlockRenderer";
import { getProjectPost } from "../../data/get-project-post";
import { ArticleNav } from "@/components/blog-components/ArticleNav";
import { Block, HeadingBlock, Project } from "@/app/types";

export async function generateStaticParams() {
  const posts = await getProjects();

  return posts.map((post) => ({
    projectSlug: post.slug,
  }));
}

export default async function ProjectPostPage({
  params,
}: {
  params: Promise<{ projectSlug: string }>;
}) {
  const { projectSlug } = await params;

  const { blocks }: { blocks: Block[]; project: Project } =
    await getProjectPost(projectSlug);

  if (!blocks?.length) return null;

  return <DynamicZone blocks={blocks} />;
}
