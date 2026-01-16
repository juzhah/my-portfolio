import { EnvConfig } from "@/lib/utils";
import { Project } from "../types";

export async function getProjects(): Promise<Project[]> {
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

  /* Process blocking error if no projects to show bcz why have a portfolio with no projects? xd */
  if (!projects || projects.lenght < 1) {
    throw new Error(`No projects to load into site`);
  }

  return projects;
}
