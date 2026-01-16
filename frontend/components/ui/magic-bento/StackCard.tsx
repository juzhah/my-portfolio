import React from "react";
import { Badge } from "../badge";
import { Stack } from "@/app/types";

function StackCard({ stackItem }: { stackItem: Stack }) {
  const { title, description, tools } = stackItem;
  return (
    <>
      <div className="card__header flex justify-between gap-3 relative text-white">
        <span className="card__label text-base">{title}</span>
      </div>
      <div className="card__content flex flex-col relative text-white">
        <h3
          className={`card__title font-normal text-base m-0 mb-1 "text-clamp-1`}
        >
          {title}
        </h3>
        <p
          className={`card__description text-xs leading-5 opacity-90 text-clamp-2`}
        >
          {description}
        </p>

        <ul className="flex flex-wrap gap-2">
          {tools?.map((tool, index) => (
            <li key={index}>
              <Badge variant={"default"}>
                {typeof tool === "string" ? tool : tool.name}
              </Badge>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default StackCard;
