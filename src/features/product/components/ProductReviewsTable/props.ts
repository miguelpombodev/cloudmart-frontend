import type { ProductReviews } from "../../types";

export type ThumbType = "up" | "down" | "none";

export interface ProductReviewsTableProps {
  reviews: ProductReviews[];
}
