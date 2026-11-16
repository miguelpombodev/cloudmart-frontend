import type ProductFilters from "@/app/models/filters";
import type Product from "@/app/models/product";
import { httpClient } from "@/shared/api/httpClient";
import type PaginatedData from "@/shared/types/paginatedData.interface";

export async function getProductsPaginated(): Promise<PaginatedData<Product>> {
  const { data } = await httpClient.get<PaginatedData<Product>>(
    `${import.meta.env.VITE_API_URL}/api/catalog/products`,
    {
      params: {
        pageSize: 20,
        pageNumber: 1,
      },
    },
  );

  return data;
}

export async function getProductsFilters(): Promise<ProductFilters> {
  const { data } = await httpClient.get<ProductFilters>(
    `${import.meta.env.VITE_API_URL}/api/catalog/products/filters`,
  );

  return data;
}

export async function getProductsByCollection(): Promise<Product[]> {
  const { data } = await httpClient.get<PaginatedData<Product>>(
    `${import.meta.env.VITE_API_URL}/api/catalog/products`,
    {
      params: {
        pageSize: 20,
        pageNumber: 1,
      },
    },
  );

  return data.items;
}
