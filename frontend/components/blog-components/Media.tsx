import { StrapiImage } from "@/app/types";
import { mapStrapiImage } from "@/lib/map-strapi-image";
import Image from "next/image";

export default function Media({ media }: { media: StrapiImage }) {
  const image = mapStrapiImage({ image: media, preferredFormat: "original" });
  if (!image) return null;

  const { src, width, height, alt } = image;

  return (
    <div className="max-w-full rounded-md overflow-clip border">
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        loading="lazy"
        quality={75}
        className="w-full h-auto"
      />
    </div>
  );
}
