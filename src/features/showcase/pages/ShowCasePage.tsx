import { useQuery } from "@tanstack/react-query";
import { SlidersHorizontal } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { useSearchParams } from "react-router-dom";

import Breadcrumb from "@/features/product/components/Breadcrumb";
import { Button } from "@/shared/components/Button";
import PriceCard from "@/shared/components/Cards/PriceCard";
import Pagination from "@/shared/components/Pagination";
import { PaginationSkeleton } from "@/shared/components/PaginationSkeleton";
import { useClickOutside } from "@/shared/hooks/useClickOutside.hook";
import { useDebounceSelection } from "@/shared/hooks/useDebounceSelection";

import { getProductsFilters, getProductsPaginated } from "../api/showcase";
import ProductsFilter from "../components/ProductsFilter";
import ProductFilters from "../models/filters";

export default function ShowcasePage() {
  const [isOpenedMobileFiltersSettings, setOpenedMobileFiltersSettings] =
    useState(false);
  const mobileFiltersSettingsRef = useRef<HTMLDivElement>(null);

  useClickOutside(
    mobileFiltersSettingsRef,
    () => setOpenedMobileFiltersSettings(false),
    isOpenedMobileFiltersSettings,
  );

  useEffect(() => {
    if (!isOpenedMobileFiltersSettings) return;

    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previous;
    };
  }, [isOpenedMobileFiltersSettings]);

  const [searchParams, setSearchParams] = useSearchParams();

  const filtersValues = ProductFilters.builder
    .setPageNumber(Number(searchParams.get("pageNumber")))
    .setPageSize(Number(searchParams.get("pageSize")))
    .setSortBy(searchParams.get("sortBy"))
    .setCategoriesList(searchParams.getAll("categories"))
    .setBrandsList(searchParams.getAll("brands"))
    .build();

  const { data, isPending } = useQuery({
    queryKey: ["showcase", "filters", "products", filtersValues],
    queryFn: async ({ signal }) => {
      const [products, filters] = await Promise.all([
        getProductsPaginated(
          filtersValues.pageSize,
          filtersValues.pageNumber,
          filtersValues.sortBy,
          filtersValues.categories,
          filtersValues.brands,
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

  const setCategoriesAndBrandsFilter = (
    categories: string[],
    brands: string[],
  ) => {
    setSearchParams((prev) => {
      const next = new URLSearchParams(prev);

      next.delete("categories");
      categories.forEach((category) => next.append("categories", category));

      next.delete("brands");
      brands.forEach((brand) => next.append("brands", brand));

      next.set("pageNumber", "1");
      return next;
    });
  };

  const [selection, selectFilters] = useDebounceSelection(
    {
      categories: filtersValues.categories,
      brands: filtersValues.brands,
    },
    ({ categories, brands }) =>
      setCategoriesAndBrandsFilter(categories, brands),
    1000,
  );

  return (
    <>
      <section className="flex flex-col px-4 py-5 gap-8">
        <div className="flex gap-3 font-edit font-semibold">
          <Breadcrumb />
        </div>
        <div className="flex items-stretch gap-10">
          <aside className="hidden flex-col h-fit min-w-fit bg-green-default rounded-lg text-white px-5 py-5 md:flex">
            <h3 className="text-2xl font-edit font-bold underline">Filters</h3>
            {data?.filters && (
              <span className="flex flex-col gap-5">
                <ProductsFilter
                  filters={data.filters}
                  selected={selection}
                  onSelect={selectFilters}
                />
              </span>
            )}
          </aside>
          <div className="flex w-full flex-col gap-8">
            <div className="flex items-center justify-center bg-green-default brightness-[120%] text-white gap-10 rounded-lg pr-5 h-12 md:justify-end">
              <Button
                value="Filters"
                sizeType="small"
                icon={SlidersHorizontal}
                kind="default"
                className="md:hidden"
                onClick={() =>
                  setOpenedMobileFiltersSettings(!isOpenedMobileFiltersSettings)
                }
              />

              <span className="hidden md:flex gap-2 font-bold">
                <p>Products per page:</p>
                <select
                  className="bg-green-default  cursor-pointer outline-none"
                  defaultValue={filtersValues.pageSize}
                  onChange={(e) => setProductsPerPage(Number(e.target.value))}
                >
                  <option value="12">12</option>
                  <option value="30">30</option>
                  <option value="40">40</option>
                </select>
              </span>
              <span className="flex gap-2 font-bold">
                <p className="hidden md:block">Sort by:</p>
                <select
                  className="bg-green-default cursor-pointer outline-none"
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
      {isOpenedMobileFiltersSettings && (
        <>
          <div
            aria-hidden="true"
            onClick={() => setOpenedMobileFiltersSettings(false)}
            className="fixed inset-0 z-40 bg-black/50 md:hidden"
          />
          <div className="fixed inset-x-0 bottom-0 z-50 flex h-[60dvh] flex-col rounded-t-lg bg-green-default px-5 pt-5 text-white md:hidden">
            {data?.filters && (
              <span className="min-h-0 flex-1 overflow-y-auto overscroll-contain pb-[max(1.25rem,env(safe-area-inset-bottom))]">
                <ProductsFilter
                  filters={data.filters}
                  selected={selection}
                  onSelect={selectFilters}
                />
              </span>
            )}
            <Button
              kind="outline"
              value="Check filtered products"
              sizeType="small"
              onClick={() => setOpenedMobileFiltersSettings(false)}
            />
          </div>
        </>
      )}
    </>
  );
}
