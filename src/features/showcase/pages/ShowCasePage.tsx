import { keepPreviousData, useQuery } from "@tanstack/react-query";

import Breadcrumb from "@/features/product/components/Breadcrumb";
import PriceCard from "@/shared/components/Cards/PriceCard";
import Pagination from "@/shared/components/Pagination";
import { PaginationSkeleton } from "@/shared/components/PaginationSkeleton";

import { getProductsFilters, getProductsPaginated } from "../api/showcase";
import ProductsFilter from "../components/ProductsFilter";

export default function ShowcasePage() {
  const { data: products, isPending } = useQuery({
    queryKey: ["products"],
    queryFn: getProductsPaginated,
    placeholderData: keepPreviousData,
  });

  const { data: filters } = useQuery({
    queryKey: ["filters"],
    queryFn: getProductsFilters,
  });

  return (
    <section className="flex flex-col px-4 py-5 gap-8">
      <div className="flex gap-3 font-edit font-semibold">
        <Breadcrumb />
      </div>
      <div className="flex flex-1 items-stretch gap-10">
        <aside className="flex flex-col w-2/3 max-h-fit bg-green-default rounded-lg text-white px-5 py-5">
          <h3 className="text-2xl font-edit font-bold underline">Filters</h3>
          {filters && (
            <span className="flex flex-col gap-5">
              <ProductsFilter filters={filters} />
            </span>
          )}
        </aside>
        <div className="flex flex-col gap-8">
          <div className="flex items-center justify-end bg-green-default text-white gap-10 rounded-lg pr-5 h-12">
            <span className="flex gap-2 font-bold">
              Products per page:
              <select
                className="bg-green-default brightness-[120%] cursor-pointer outline-none"
                defaultValue={12}
              >
                <option value="12">12</option>
                <option value="30">30</option>
                <option value="40">40</option>
              </select>
            </span>
            <span className="flex gap-2 font-bold">
              Sort by:
              <select className="bg-green-default brightness-[120%] cursor-pointer outline-none">
                <option value="Relevancy" selected>
                  Relevance
                </option>
                <option value="Newest">Newest</option>
                <option value="Lower Price">Lower Price</option>
                <option value="Highest Price">Highest Price</option>
              </select>
            </span>
          </div>
          {isPending || !products?.items ? (
            <PaginationSkeleton />
          ) : (
            <Pagination
              totalItems={products.items.length}
              itemsPerPage={12}
              data={products}
              component={PriceCard}
            />
          )}
        </div>
      </div>
    </section>
  );
}
