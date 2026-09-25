import { ConvertToCurrency } from "@/shared/utils/price.utils";

import { Button } from "../../Button";
import Tag from "../../Tag";

import type { PriceCardProps } from "./props";

export default function PriceCard({
  title,
  price,
  category,
  description,
  imageUrl,
}: PriceCardProps) {
  return (
    <article
      className="
              flex 
              flex-col 
              shrink-0 
              cursor-pointer
              w-72
              group
              md:w-[380px]
            rounded-lg
            overflow-hidden
            "
    >
      <div
        className="
                relative 
                overflow-hidden 
                bg-gradient-to-b to-[#e9e4d8] from-[#9f9f95]
                h-80
                md:h-[420px]
              "
      >
        <Tag title={category} className="absolute z-10 top-3 left-3" />
        {imageUrl && (
          <img
            src={imageUrl}
            alt={title}
            className="
                    w-full 
                    h-full 
                    object-cover
                    transition-transform duration-500 ease-in-out
                    group-hover:scale-105
                  "
            loading="lazy"
          />
        )}
      </div>

      <div className="flex flex-col px-2 py-2 gap-5 bg-[#fbf9f5]">
        <span className="text-lg text-gray-700 font-functional pl-0.5 md:text-base">
          {title}
        </span>

        <div className="flex justify-between items-center">
          <span className="text-xl text-green-default font-extrabold font-numbers pl-0.5 md:text-lg">
            {ConvertToCurrency(price)}
          </span>

          <Button kind="default" value="+ Cart" sizeType="small" />
        </div>
      </div>
    </article>
  );
}
