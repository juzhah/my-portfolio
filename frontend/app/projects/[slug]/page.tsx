import { getProject, getProjects } from "@/app/data/get-projects";
import { ProjectContent } from "@/components/sections/project-page/Project";
import { Suspense } from "react";

export async function generateStaticParams() {
  const projects = await getProjects();

  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export default async function Page({ params }: PageProps<"/projects/[slug]">) {
  const { slug } = await params;
  const projectData = await getProject(slug);

  return (
    <Suspense>
      <ProjectContent project={projectData} />
    </Suspense>
  );
}
