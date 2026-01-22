import { StrapiImage } from "@/app/types";

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

  return {
    src: `${format.url || url}`,
    alt: alternativeText || "",
    width: format.width || width,
    height: format.height || height,
    formats: formats,
  };
}
