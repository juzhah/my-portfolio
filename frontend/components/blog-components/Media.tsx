import { StrapiImage } from "@/app/types";
import { mapStrapiImage } from "@/lib/map-strapi-image";
import { div } from "motion/react-client";
import Image from "next/image";

export default function Media({ media }: { media: StrapiImage }) {
  const image = mapStrapiImage({ image: media, preferredFormat: "original" });
  if (!image) return null;

  const { src, width, height, alt } = image;

  const mediaType: string = media.provider_metadata.resource_type;

  return (
    <>
      {mediaType === "image" && (
        <figure>
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
          {media.caption && (
            <figcaption className="pl-4 pt-4 text-gray-500 flex gap-4 italic">
              <div className="bg-primary/60 w-1 h-lh"></div>
              {media.caption}
            </figcaption>
          )}
        </figure>
      )}

      {mediaType === "video" && (
        <figure>
          <div className="max-w-full rounded-md overflow-clip border">
            <video
              src={src}
              autoPlay
              muted
              playsInline
              loop
              preload="none"
              className="w-full h-auto"
            />
          </div>
          {media.caption && (
            <figcaption className="pl-4 pt-4 text-gray-500 flex gap-4 italic">
              <div className="bg-primary/60 w-1 h-lh"></div>
              {media.caption}
            </figcaption>
          )}
        </figure>
      )}
    </>
  );
}
