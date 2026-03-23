import { EnvConfig } from "@/lib/utils";

/* TODO: It would be better to just take these values straight from strapi once created in CMS */
const contentBlocks = ["metrics", "heading", "paragraph", "icon-list", "media"];
const blocksQuery = contentBlocks.map(
  (block) => `populate[blocks][on][post-components.${block}][populate]=*`,
);

export async function getProjectPost(slug: string) {
  const res = await fetch(
    `${EnvConfig().strapi_url}/api/project-posts?filters[project][slug][$eq]=${slug}&populate[project][populate]=*&${blocksQuery.join("&")}`,
    {
      method: "GET",
      headers: {
        Authorization: `Bearer ${EnvConfig().strapi_api_key}`,
        "Content-Type": "application/json",
      },
    },
  );

  if (!res.ok) {
    // This will trigger the closest error.js boundary
    throw new Error(`Failed to fetch projects: ${res.statusText}`);
  }

  const { data: project } = await res.json();

  /* Process blocking error if no projects to show bcz why have a portfolio with no projects? xd */
  if (!project || project.lenght < 1) {
    throw new Error(`No projects to load into site`);
  }

  return project[0];
}
