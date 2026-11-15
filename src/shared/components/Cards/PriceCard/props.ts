import type { Product } from "@/features/home/types";

export interface PriceCardProps {
  item: Omit<Product, "id">;
}
