import type Category from "@/app/models/category";
import { httpClient } from "@/shared/api/httpClient";

export async function getAllCategories(): Promise<Category[]> {
  const { data } = await httpClient.get<Category[]>(
    `${import.meta.env.VITE_API_URL}/api/catalog/categories`,
  );

  return data;
}
