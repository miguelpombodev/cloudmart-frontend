import type { Rating } from "@/features/home/types";

export type RatingCardProps = Omit<Rating, "id" | "productName">;
