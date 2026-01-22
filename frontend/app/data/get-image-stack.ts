import { EnvConfig } from "@/lib/utils";

export async function getStackImages(): Promise<any[]> {
  const res = await fetch(
    `${EnvConfig().strapi_url}/api/stack-card?populate=imageCards`,
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
    throw new Error(`Failed to fetch Stack Card Images: ${res.statusText}`);
  }

  const { data: stackCard } = await res.json();
  const cards = stackCard.imageCards;

  /* Process blocking error if no projects to show bcz why have a portfolio with no projects? xd */
  if (!cards || cards.lenght < 1) {
    throw new Error(`No images to load into site`);
  }

  return cards;
}
