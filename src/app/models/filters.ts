export default interface IProductFilters {
  brands: FilterBase[];
  categories: FilterBase[];
  reviews: FilterBase[];
}

interface FilterBase {
  id: string;
  title: string;
  quantity: number;
}
