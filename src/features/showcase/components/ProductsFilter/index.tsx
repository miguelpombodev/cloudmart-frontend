import { Accordion } from "@/shared/components/Accordion";

import FilterCheckbox from "../FilterCheckbox";
import PriceRange from "../PriceRange";

import type { FilterSelection, ProductsFilterProps } from "./props";

export default function ProductsFilter({
  filters,
  selected,
  onSelect,
}: ProductsFilterProps) {
  const toggle = (key: keyof FilterSelection, id: string) => {
    const current = selected[key];
    const next = current.includes(id)
      ? current.filter((value) => value !== id)
      : [...current, id];

    onSelect({ ...selected, [key]: next });
  };

  return (
    <>
      <Accordion
        type="multiple"
        defaultValue={["brands", "categories", "reviews", "prices"]}
      >
        <Accordion.Item value="brands">
          <Accordion.Trigger>Brands</Accordion.Trigger>
          <Accordion.Content>
            <div className="flex flex-col gap-2">
              {filters.brands.map((filter) => (
                <FilterCheckbox
                  key={filter.id}
                  id={filter.id}
                  title={filter.title}
                  quantity={filter.quantity}
                  checked={selected.brands.includes(String(filter.id))}
                  onChange={() => toggle("brands", String(filter.id))}
                />
              ))}
            </div>
          </Accordion.Content>
        </Accordion.Item>

        <Accordion.Item value="categories">
          <Accordion.Trigger>Categories</Accordion.Trigger>
          <Accordion.Content>
            <div className="flex flex-col gap-2">
              {filters.categories.map((filter) => (
                <FilterCheckbox
                  key={filter.id}
                  id={filter.id}
                  title={filter.title}
                  quantity={filter.quantity}
                  checked={selected.categories.includes(String(filter.id))}
                  onChange={() => toggle("categories", String(filter.id))}
                />
              ))}
            </div>
          </Accordion.Content>
        </Accordion.Item>

        {/* <Accordion.Item value="reviews">
          <Accordion.Trigger>Review</Accordion.Trigger>
          <Accordion.Content>
            <div className="flex flex-col gap-2">
              {filters.reviews.map((filter) => (
                <FilterCheckbox
                  key={filter.id}
                  id={filter.id}
                  title={filter.title}
                  quantity={filter.quantity}
                />
              ))}
            </div>
          </Accordion.Content>
        </Accordion.Item> */}

        <Accordion.Item value="prices">
          <Accordion.Trigger>Prices</Accordion.Trigger>
          <Accordion.Content>
            <div className="flex flex-col gap-3">
              <PriceRange />
            </div>
          </Accordion.Content>
        </Accordion.Item>
      </Accordion>
    </>
  );
}
