import PriceCardSkeleton from "@/shared/components/PriceCardSkeleton";

import { Button } from "../Button";

export function PaginationSkeleton() {
  return (
    <div className="flex flex-1 flex-col gap-5">
      <div className="flex justify-center flex-wrap gap-16">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((_, index) => (
          <PriceCardSkeleton key={index} />
        ))}
      </div>

      <div className="flex items-center justify-center gap-4">
        {[1, 2, 3, 4, 5, 6, 7].map((page) => (
          <span
            key={page}
            className="py-4 px-5 bg-green-default rounded-md text-white cursor-pointer"
          >
            {page}
          </span>
        ))}
      </div>

      <div className="flex items-center justify-center gap-4">
        <Button
          isDisabled={true}
          value="Previous"
          kind="default"
          sizeType="small"
        />

        <span>Page X of X</span>

        <Button
          isDisabled={true}
          value="Next"
          kind="default"
          sizeType="small"
        />
      </div>
    </div>
  );
}
