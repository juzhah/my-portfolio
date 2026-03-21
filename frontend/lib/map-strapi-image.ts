import { StrapiImage } from "@/app/types";
import { EnvConfig } from "./utils";

interface MapStrapiImage {
  image?: StrapiImage;
  preferredFormat?: "large" | "medium" | "thumbnail";
}

export function mapStrapiImage({
  image,
  preferredFormat = "large",
}: MapStrapiImage) {
  if (!image) return null;

  const { url, width, height, alternativeText, formats } = image;
  const format = formats?.[preferredFormat] || {};

  const imageSrc =
    EnvConfig().node_env === "development"
      ? `${EnvConfig().strapi_url + format.url}`
      : format.url;
  return {
    src: imageSrc,
    alt: alternativeText || "",
    width: format.width || width,
    height: format.height || height,
    formats: formats,
  };
}
