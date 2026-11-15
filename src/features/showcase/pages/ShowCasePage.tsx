import { MOCK_PRODUCTS } from "@/features/home/pages/mock";
import Breadcrumb from "@/features/product/components/Breadcrumb";
import PriceCard from "@/shared/components/Cards/PriceCard";
import Pagination from "@/shared/components/Pagination";

import ProductsFilter from "../components/ProductsFilter";

import { FILTER_MOCKS } from "./mock";

export default function ShowcasePage() {
  return (
    <section className="flex flex-col px-4 py-5 gap-8">
      <div className="flex gap-3 font-edit font-semibold">
        <Breadcrumb />
      </div>
      <div className="flex flex-1 items-stretch gap-10">
        <aside className="flex flex-col w-1/3 bg-green-default rounded-lg text-white px-5 py-5">
          <h3 className="text-2xl font-edit font-bold underline">Filters</h3>
          <span className="flex flex-col gap-5">
            <ProductsFilter filters={FILTER_MOCKS} />
          </span>
        </aside>
        <div className="flex flex-col gap-8">
          <div className="flex items-center justify-end bg-green-default text-white gap-10 rounded-lg pr-5 h-12">
            <span className="flex gap-2 font-bold">
              Products per page:
              <select className="bg-green-default brightness-[120%] cursor-pointer outline-none">
                <option value="12" selected>
                  12
                </option>
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
          <Pagination
            totalItems={MOCK_PRODUCTS.length}
            itemsPerPage={12}
            items={MOCK_PRODUCTS}
            component={PriceCard}
          />
        </div>
      </div>
    </section>
  );
}
