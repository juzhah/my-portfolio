import { getProjects } from "@/app/data/get-projects";
import { DynamicZone } from "@/components/blog-components/BlockRenderer";
import { getProjectPost } from "../../data/get-project-post";

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
  const post = await getProjectPost(projectSlug);

  console.log(post);

  return <DynamicZone blocks={post.blocks} />;
}
