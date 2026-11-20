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
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const numberOfPagesList = Array.from({ length: totalPages }, (_, i) => i + 1);

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
      <div className="flex justify-center flex-wrap gap-16">
        {data.items.map((item, index) => (
          <Component key={index} item={item} />
        ))}
      </div>

      <div className="flex items-center justify-center gap-4">
        {numberOfPagesList.map((page, index) => (
          <span
            key={index}
            onClick={() => onChangePage(page)}
            className={`py-4 px-5 rounded-md text-white cursor-pointer ${pageNumber === page ? "bg-green-default" : "bg-low-gray"}`}
          >
            {page}
          </span>
        ))}
      </div>

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
