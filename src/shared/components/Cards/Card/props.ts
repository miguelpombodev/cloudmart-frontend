import type { Category } from "@/features/home/types";

export type CardProps = Omit<Category, "id">;
