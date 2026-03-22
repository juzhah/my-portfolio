import { StrapiImage } from "@/app/types";
import { EnvConfig } from "./utils";

interface MapStrapiImage {
  image?: StrapiImage;
  preferredFormat?: "original" | "large" | "medium" | "thumbnail";
}

export function mapStrapiImage({
  image,
  preferredFormat = "large",
}: MapStrapiImage) {
  if (!image) return null;

  const { url, width, height, alternativeText, formats } = image;

  if (preferredFormat === "original" || !formats?.[preferredFormat]) {
    const imageSrc = url.startsWith("http")
      ? url
      : `${EnvConfig().strapi_url}${url}`;
    return {
      src: imageSrc,
      alt: alternativeText || "",
      width,
      height,
      formats,
    };
  }

  const format = formats[preferredFormat];
  const imageSrc =
    EnvConfig().node_env === "development" ? `${format.url}` : format.url;
  return {
    src: imageSrc,
    alt: alternativeText || "",
    width: format.width || width,
    height: format.height || height,
    formats: formats,
  };
}
