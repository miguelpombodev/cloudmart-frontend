import { ArrowRight, Star } from "lucide-react";

import type { RatingCardProps } from "./props";

export default function RatingCard({
  reviewerName,
  rating,
  description,
  date,
  productUrl,
}: RatingCardProps) {
  return (
    <article
      className="
              flex 
              flex-col 
              shrink-0 
              w-72
              text-white
              md:w-[380px]
            "
    >
      <div
        className="                
                relative 
                flex
                flex-col
                overflow-hidden 
                gap-6
                p-4
                rounded-xl
                bg-green-default"
      >
        <span className="flex flex-1 flex-col">
          <span className="text-4xl leading-none font-serif md:text-6xl">
            {'"'}
          </span>
          <p className="text-sm font-bold md:text-base">{description}</p>
        </span>

        <span className="flex justify-between items-end">
          <span className="flex flex-col gap-1">
            <span className="flex items-center">
              {Array.from({ length: rating }).map((_, index) => (
                <Star
                  key={index}
                  className="fill-yellow-warn text-yellow-warn"
                />
              ))}
            </span>
            <p className="text-lg font-bold md:text-xl">{reviewerName}</p>
            <p className="text-sm underline">
              Reviewed at:
              <span className="font-bold">{date}</span>
            </p>
          </span>
          <span className="flex items-center cursor-pointer hover:underline md:gap-2">
            <p className="text-sm font-bold">
              See product: <a href={productUrl} />
            </p>
            <ArrowRight />
          </span>
        </span>
      </div>
    </article>
  );
}
