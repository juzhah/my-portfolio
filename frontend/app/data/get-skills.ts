import { EnvConfig } from "@/lib/utils";
import { Stack } from "../types";

export async function getStacks(): Promise<Stack[]> {
  const res = await fetch(
    `${EnvConfig().strapi_url}/api/stacks?populate=tools`,
    {
      method: "GET",
      headers: {
        Authorization: `Bearer ${EnvConfig().strapi_api_key}`,
        "Content-Type": "application/json",
      },
    }
  );

  if (!res.ok) {
    // This will trigger the closest error.js boundary
    throw new Error(`Failed to fetch stacks: ${res.statusText}`);
  }

  const { data: stacks } = await res.json();

  /* Process blocking error if no projects to show bcz why have a portfolio with no projects? xd */
  if (!stacks || stacks.lenght < 1) {
    throw new Error(`No projects to load into site`);
  }

  return stacks;
}
