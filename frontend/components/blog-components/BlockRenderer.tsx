import { Block } from "@/app/types";
import Heading from "./Heading";
import IconList from "./IconList";
import Paragraph from "./Paragraph";
import Media from "./Media";

import { MetricsRow } from "./MetricsRow";

const blockRegistry: Record<string, React.ComponentType<any>> = {
  "post-components.heading": Heading,
  "post-components.paragraph": Paragraph,
  "post-components.icon-list": IconList,
  "post-components.metrics": MetricsRow,
  "post-components.media": Media,
};

interface DynamicZoneProps {
  blocks: Block[];
}

export function DynamicZone({ blocks }: DynamicZoneProps) {
  if (!blocks?.length) return null;

  return (
    <article className="space-y-32 relative w-full max-w-7xl blog-article">
      {blocks.map((block, idx) => {
        const { __component, id, ...props } = block;

        const componentKey = idx + id;
        const BlockComponent = blockRegistry[__component];

        if (__component === "post-components.paragraph") {
          console.log(block);
        }

        if (!BlockComponent) {
          // Fail gracefully in prod, warn loudly in dev
          if (process.env.NODE_ENV === "development") {
            console.warn(
              `No component found for block type: "${block.__component}"`,
            );
          }
          return null;
        }

        // Spread the block props, excluding meta fields
        return <BlockComponent key={componentKey} {...props} />;
      })}
    </article>
  );
}
