import { useState } from "react";

import { Button } from "../Button";

import type { PaginationProps } from "./props";

export default function Pagination<T>({
  totalItems,
  itemsPerPage,
  items,
  component: Component,
}: PaginationProps<T>) {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const currentItems = items.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage,
  );

  return (
    <div className="flex flex-1 flex-col gap-5">
      <div className="flex flex-1 flex-wrap gap-4">
        {currentItems.map((item, index) => (
          <Component key={index} item={item} />
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
          isDisabled={currentPage === 1}
          onClick={() => setCurrentPage((prev) => prev - 1)}
          value="Previous"
          kind="default"
          sizeType="small"
        />

        <span>
          Page {currentPage} of {totalPages}
        </span>

        <Button
          isDisabled={currentPage === 1}
          onClick={() => setCurrentPage((prev) => prev + 1)}
          value="Next"
          kind="default"
          sizeType="small"
        />
      </div>
    </div>
  );
}
