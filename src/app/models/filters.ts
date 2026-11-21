export interface IProductFilters {
  brands: FilterBase[];
  categories: FilterBase[];
  reviews: FilterBase[];
}

export interface FilterBase {
  id: string;
  title: string;
  quantity: number;
}
