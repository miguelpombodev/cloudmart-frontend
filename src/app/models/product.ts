import type Image from "./image";

export default interface Product {
  name: string;
  price: number;
  currency: string;
  image: Image;
  categoryTitle: string;
  categoryId: string;
  brandTitle: string;
  brandId: string;
  sku: string;
  description: string;
  tags: string[];
}
