import type { Product } from "@/features/home/types";

export type PriceCardProps = Omit<Product, "id">;
