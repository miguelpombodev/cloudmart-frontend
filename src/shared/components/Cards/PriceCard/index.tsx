import { ArrowLeftRight, Heart, PackageCheck } from "lucide-react";
import { Link } from "react-router-dom";

import { ConvertToCurrency } from "@/shared/utils/price.utils";

import { Button } from "../../Button";
import Tag from "../../Tag";

import type { PriceCardProps } from "./props";

export default function PriceCard({ item }: PriceCardProps) {
  return (
    <article
      className="
              flex flex-col 
              flex-wrap flex-grow-0 
              shrink-0 
              w-72
              group
              md:w-[310px]
              rounded-lg
              overflow-hidden
              md:basis-1/4
            "
    >
      <div
        className="
                relative 
                overflow-hidden 
                bg-gradient-to-b to-[#e9e4d8] from-[#9f9f95]
                h-80
                md:h-[300px]
              "
      >
        <Tag
          title={item.categoryTitle}
          className="absolute z-10 top-3 left-3"
        />
        {item.image && (
          <Link to={`/products/${item.sku}`}>
            <img
              src={item.image.url}
              alt={item.image.altText}
              className="
                    w-full 
                    h-full 
                    object-cover
                    transition-transform duration-500 ease-in-out
                    group-hover:scale-105
                    cursor-pointer
                  "
              loading="lazy"
            />
          </Link>
        )}
      </div>

      <div className="flex flex-col px-2 py-2 gap-4 bg-[#fbf9f5]">
        <span className="text-xl text-green-default font-extrabold font-numbers pl-0.5 md:text-3xl">
          {ConvertToCurrency(item.price, "Portugal", item.currency)}
        </span>

        <div className="flex flex-col justify-between items-start gap-2">
          <span className="min-h-16 text-lg text-gray-700 font-semibold font-functional pl-0.5 md:text-xl">
            {item.name}
          </span>
          <p className="min-h-16 text-gray-500 text-sm">{item.description}</p>
        </div>

        <div>
          <span className="flex gap-2 text-green-victory">
            <PackageCheck />
            <p>
              <span className="font-bold">In Stock</span>
            </p>
          </span>
        </div>

        <div className="flex justify-between items-center">
          <span className="flex flex-1 items-center gap-2 text-base cursor-pointer">
            <ArrowLeftRight size={24} />
            <p>Compare</p>
          </span>
          <span className="cursor-pointer">
            <Heart size={30} />
          </span>
          <span></span>
        </div>
        <Button kind="default" value="+ Cart" sizeType="small" />
      </div>
    </article>
  );
}
