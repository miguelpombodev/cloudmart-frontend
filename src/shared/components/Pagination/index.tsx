import { Button } from "../Button";

import type { PaginationProps } from "./props";

export default function Pagination<T>({
  totalItems,
  itemsPerPage,
  data,
  component: Component,
  onChangePage,
  pageNumber = 1,
}: PaginationProps<T>) {
  const getPageWindow = (
    current: number,
    total: number,
    size = 5,
  ): number[] => {
    const windowSize = Math.min(size, total);
    const half = Math.floor(size / 2);

    const start = Math.max(1, Math.min(current - half, total - windowSize + 1));

    return Array.from({ length: windowSize }, (_, i) => start + i);
  };

  const totalPages = Math.max(1, Math.ceil(totalItems / itemsPerPage));
  const visiblePages = getPageWindow(pageNumber, totalPages, 5);

  const handlePrevious = () => {
    if (pageNumber > 1) {
      onChangePage(pageNumber - 1);
    }
  };

  const handleNext = () => {
    if (pageNumber < totalPages) {
      onChangePage(pageNumber + 1);
    }
  };

  return (
    <div className="flex flex-1 flex-col gap-5">
      <div className="flex justify-center flex-wrap gap-16 md:h-full">
        {data.items.map((item, index) => (
          <Component key={index} item={item} />
        ))}
      </div>

      <nav
        aria-label="Pagination"
        className="flex items-center justify-center gap-4"
      >
        {visiblePages.map((page) => (
          <button
            key={page}
            type="button"
            onClick={() => onChangePage(page)}
            aria-current={page === pageNumber ? "page" : undefined}
            aria-label={`Page ${page}`}
            className={`rounded-md px-5 py-4 text-white ${
              page === pageNumber ? "bg-green-default" : "bg-low-gray"
            }`}
          >
            {page}
          </button>
        ))}
      </nav>

      <div className="flex items-center justify-center gap-4">
        <Button
          isDisabled={pageNumber <= 1}
          onClick={handlePrevious}
          value="Previous"
          kind="default"
          sizeType="small"
        />

        <span>
          Page {pageNumber} of {totalPages}
        </span>

        <Button
          isDisabled={pageNumber >= totalItems}
          onClick={handleNext}
          value="Next"
          kind="default"
          sizeType="small"
        />
      </div>
    </div>
  );
}
