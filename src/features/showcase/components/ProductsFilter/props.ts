import type { IProductFilters } from "@/app/models/filters";

export interface FilterSelection {
  categories: string[];
  brands: string[];
}
export interface ProductsFilterProps {
  filters: IProductFilters;
  selected: FilterSelection;
  onSelect: (selection: FilterSelection) => void;
}
