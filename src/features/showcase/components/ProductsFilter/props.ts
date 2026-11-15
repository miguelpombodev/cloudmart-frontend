export interface ProductsFilterProps {
  filters: {
    brands: {
      id: string;
      title: string;
      quantity: number;
    }[];
    categories: {
      id: string;
      title: string;
      quantity: number;
    }[];
    reviews: {
      id: string;
      title: string;
      quantity: number;
    }[];
  };
}
