import { ProjectContent } from "@/components/sections/project-page/Project";
import { EnvConfig } from "@/lib/utils";
import { Suspense } from "react";

export async function generateStaticParams() {
  const res = await fetch("http://localhost:1337/api/projects", {
    method: "GET",
    headers: {
      Authorization: `Bearer ${EnvConfig().strapi_api_key}`,
      "Content-Type": "application/json",
    },
  });

  if (!res.ok) {
    // This will trigger the closest error.js boundary
    throw new Error(`Failed to fetch projects: ${res.statusText}`);
  }

  const { data: projects } = await res.json();

  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export default async function Page({ params }: PageProps<"/projects/[slug]">) {
  const { slug } = await params;

  return (
    <Suspense>
      <ProjectContent slug={slug} />
    </Suspense>
  );
}
