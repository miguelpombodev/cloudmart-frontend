import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from "react-router-dom";

import Breadcrumb from "@/features/product/components/Breadcrumb";
import PriceCard from "@/shared/components/Cards/PriceCard";
import Pagination from "@/shared/components/Pagination";
import { PaginationSkeleton } from "@/shared/components/PaginationSkeleton";

import { getProductsFilters, getProductsPaginated } from "../api/showcase";
import ProductsFilter from "../components/ProductsFilter";
import ProductFilters from "../models/filters";

export default function ShowcasePage() {
  const [searchParams, setSearchParams] = useSearchParams();

  const filtersValues = ProductFilters.builder
    .setPageNumber(Number(searchParams.get("pageNumber")))
    .setPageSize(Number(searchParams.get("pageSize")))
    .setSortBy(searchParams.get("sortBy"))
    .build();

  const { data, isPending } = useQuery({
    queryKey: ["showcase", "filters", "products", filtersValues],
    queryFn: async ({ signal }) => {
      const [products, filters] = await Promise.all([
        getProductsPaginated(
          filtersValues.pageSize,
          filtersValues.pageNumber,
          filtersValues.sortBy,
        ),
        getProductsFilters(),
        signal,
      ]);
      return {
        products,
        filters,
      };
    },
  });

  const goToPage = (next: number) => {
    setSearchParams((prev) => {
      prev.set("pageNumber", String(next));
      return prev;
    });
  };

  const setProductsPerPage = (quantity: number) => {
    setSearchParams((prev) => {
      prev.set("pageSize", String(quantity));
      return prev;
    });
  };

  const setProductsSort = (sortBy: string) => {
    setSearchParams((prev) => {
      prev.set("sortBy", sortBy);
      return prev;
    });
  };

  return (
    <section className="flex flex-col px-4 py-5 gap-8">
      <div className="flex gap-3 font-edit font-semibold">
        <Breadcrumb />
      </div>
      <div className="flex items-stretch gap-10">
        <aside className="flex flex-col min-w-fit bg-green-default rounded-lg text-white px-5 py-5">
          <h3 className="text-2xl font-edit font-bold underline">Filters</h3>
          {data?.filters && (
            <span className="flex flex-col gap-5">
              <ProductsFilter filters={data.filters} />
            </span>
          )}
        </aside>
        <div className="flex flex-col gap-8">
          <div className="flex items-center justify-end bg-green-default text-white gap-10 rounded-lg pr-5 h-12">
            <span className="flex gap-2 font-bold">
              Products per page:
              <select
                className="bg-green-default brightness-[120%] cursor-pointer outline-none"
                defaultValue={filtersValues.pageSize}
                onChange={(e) => setProductsPerPage(Number(e.target.value))}
              >
                <option value="12">12</option>
                <option value="30">30</option>
                <option value="40">40</option>
              </select>
            </span>
            <span className="flex gap-2 font-bold">
              Sort by:
              <select
                className="bg-green-default brightness-[120%] cursor-pointer outline-none"
                onChange={(e) => setProductsSort(e.target.value)}
              >
                <option value="HigherPrice" selected>
                  Highest Price
                </option>
                <option value="LowerPrice">Lower Price</option>
              </select>
            </span>
          </div>
          {isPending || !data?.products.items ? (
            <PaginationSkeleton />
          ) : (
            <Pagination
              totalItems={data.products.totalCount}
              itemsPerPage={filtersValues.pageSize}
              data={data.products}
              component={PriceCard}
              onChangePage={goToPage}
              pageNumber={filtersValues.pageNumber}
            />
          )}
        </div>
      </div>
    </section>
  );
}
