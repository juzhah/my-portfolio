import { StrapiImage } from "@/app/types";
import { mapStrapiImage } from "@/lib/map-strapi-image";
import { div } from "motion/react-client";
import Image from "next/image";

export default function Media({ media }: { media: StrapiImage }) {
  const image = mapStrapiImage({ image: media });
  return (
    <div className="aspect-video max-w-full relative rounded-md overflow-clip border mb-16">
      <Image
        src={
          image ??
          "https://res.cloudinary.com/djrth1ax6/image/upload/large_project_placeholder.jpg"
        }
        alt={media?.alternativeText}
        fill
        loading="lazy"
        className="w-full h-full object-cover transform "
      />
    </div>
  );
}
