import type { Items } from "@/shared/components/CardSlider/props";

import type { Product } from "../types";

export const MOCK_CATEGORIES: Items[] = [
  {
    id: "1",
    name: "Eletrônicos",
    imageUrl: "https://picsum.photos/seed/eletronicos/400/260",
  },
  {
    id: "2",
    name: "Moda",
    imageUrl: "https://picsum.photos/seed/moda/400/260",
  },
  {
    id: "3",
    name: "Casa & Jardim",
    imageUrl: "https://picsum.photos/seed/casa/400/260",
  },
  {
    id: "4",
    name: "Esportes",
    imageUrl: "https://picsum.photos/seed/esportes/400/260",
  },
  {
    id: "5",
    name: "Beleza",
    imageUrl: "https://picsum.photos/seed/beleza/400/260",
  },
  {
    id: "6",
    name: "Livros",
    imageUrl: "https://picsum.photos/seed/livros/400/260",
  },
];

export const MOCK_PRODUCTS: Product[] = [
  {
    id: 1,
    title: "Essence Mascara Lash Princess",
    description:
      "The Essence Mascara Lash Princess is a popular mascara known for its volumizing and lengthening effects. Achieve dramatic lashes with this long-lasting and cruelty-free formula.",
    category: "beauty",
    price: 9.99,
    imageUrl:
      "https://cdn.dummyjson.com/product-images/beauty/essence-mascara-lash-princess/1.webp",
  },
  {
    id: 2,
    title: "Eyeshadow Palette with Mirror",
    description:
      "The Eyeshadow Palette with Mirror offers a versatile range of eyeshadow shades for creating stunning eye looks. With a built-in mirror, it's convenient for on-the-go makeup application.",
    category: "beauty",
    price: 19.99,
    imageUrl:
      "https://cdn.dummyjson.com/product-images/beauty/eyeshadow-palette-with-mirror/1.webp",
  },
  {
    id: 3,
    title: "Powder Canister",
    description:
      "The Powder Canister is a finely milled setting powder designed to set makeup and control shine. With a lightweight and translucent formula, it provides a smooth and matte finish.",
    category: "beauty",
    price: 14.99,
    imageUrl:
      "https://cdn.dummyjson.com/product-images/beauty/powder-canister/1.webp",
  },
  {
    id: 4,
    title: "Red Lipstick",
    description:
      "The Red Lipstick is a classic and bold choice for adding a pop of color to your lips. With a creamy and pigmented formula, it provides a vibrant and long-lasting finish.",
    category: "beauty",
    price: 12.99,
    imageUrl:
      "https://cdn.dummyjson.com/product-images/beauty/red-lipstick/1.webp",
  },
  {
    id: 5,
    title: "Red Nail Polish",
    description:
      "The Red Nail Polish offers a rich and glossy red hue for vibrant and polished nails. With a quick-drying formula, it provides a salon-quality finish at home.",
    category: "beauty",
    price: 8.99,
    imageUrl:
      "https://cdn.dummyjson.com/product-images/beauty/red-nail-polish/1.webp",
  },
];
