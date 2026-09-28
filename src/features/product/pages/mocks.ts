import type { Product } from "@/features/home/types";

import type { ProductFeature } from "../components/ProductFeaturesTable/props";
import type { ProductReviews } from "../types";

export const PDP_MOCK_PRODUCT: Product = {
  id: 4,
  title: "Red Lipstick",
  sku: "red-lipstick",
  description:
    "The Red Lipstick is a classic and bold choice for adding a pop of color to your lips. With a creamy and pigmented formula, it provides a vibrant and long-lasting finish.",
  category: "beauty",
  price: 12.99,
  imageUrl:
    "https://cdn.dummyjson.com/product-images/beauty/red-lipstick/1.webp",
};

export const PDP_MOCK_IMAGES = [
  "https://cdn.dummyjson.com/product-images/furniture/annibale-colombo-bed/1.webp",
  "https://cdn.dummyjson.com/product-images/furniture/annibale-colombo-bed/2.webp",
  "https://cdn.dummyjson.com/product-images/furniture/annibale-colombo-bed/3.webp",
];
export const PDP_MOCK_PATHS = [
  {
    name: "test",
    url: "google.com",
  },
  {
    name: "test",
    url: "google.com",
  },
  {
    name: "test",
    url: "google.com",
  },
];

export interface Color {
  name: string;
  hex: string;
}

export const PDP_MOCK_COLORS: Color[] = [
  { name: "Red", hex: "#ef4444" },
  { name: "Black", hex: "#000000" },
  { name: "Purple", hex: "#a855f7" },
];

export const PDP_MOCK_PRODUCT_FEATURES: ProductFeature[] = [
  {
    name: "Description 1",
    value: "Value 1",
  },
  {
    name: "Description 2",
    value: "Value 2",
  },
  {
    name: "Description 3",
    value: "Value 3",
  },
  {
    name: "Description 4",
    value: "Value 4",
  },
  {
    name: "Description 5",
    value: "Value 5",
  },
];

export const PDP_PRODUCT_REVIEWS_MOCK: ProductReviews[] = [
  {
    pictures: [
      "https://picsum.photos/seed/review1a/300/300",
      "https://picsum.photos/seed/review1b/300/300",
    ],
    review:
      "Exceeded my expectations in every way. The build quality is excellent and it arrived well packaged. Would definitely buy again.",
    rating: 5,
    country: "United States",
    reviewDate: "2024-11-03",
    likes: 42,
    dislikes: 2,
  },
  {
    pictures: ["https://picsum.photos/seed/review2a/300/300"],
    review:
      "Good product overall, but the delivery took longer than expected. The item itself matches the description perfectly.",
    rating: 4,
    country: "United Kingdom",
    reviewDate: "2024-10-18",
    likes: 27,
    dislikes: 5,
  },
  {
    pictures: [],
    review:
      "Decent quality for the price. Nothing extraordinary, but it does exactly what it says. I might consider upgrading in the future.",
    rating: 3,
    country: "Brazil",
    reviewDate: "2024-09-25",
    likes: 14,
    dislikes: 8,
  },
  {
    pictures: [
      "https://picsum.photos/seed/review4a/300/300",
      "https://picsum.photos/seed/review4b/300/300",
      "https://picsum.photos/seed/review4c/300/300",
    ],
    review:
      "Absolutely love it. The color is exactly as shown in the pictures and the material feels premium. Fast shipping too.",
    rating: 5,
    country: "Canada",
    reviewDate: "2024-12-01",
    likes: 89,
    dislikes: 1,
  },
  {
    pictures: [],
    review:
      "Not quite what I expected. The size runs a bit small and the finish is not as described. Customer support was helpful though.",
    rating: 2,
    country: "Germany",
    reviewDate: "2024-08-14",
    likes: 6,
    dislikes: 19,
  },
];
