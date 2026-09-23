import { useState } from "react";

import { CardSlider } from "@/shared/components/CardSlider";
import type { Items } from "@/shared/components/CardSlider/props";

import { Hero } from "../components/Hero";
import type { Product } from "../types";

import { MOCK_CATEGORIES, MOCK_PRODUCTS } from "./mock";

export function HomePage() {
  const [categories, setCategories] = useState<Items[]>(MOCK_CATEGORIES);
  const [products, setProducts] = useState<Product[]>(MOCK_PRODUCTS);

  return (
    <>
      <Hero />
      <div className="p-10">
        <CardSlider title="Categories" items={categories} />
      </div>
      <div className="p-10">
        <CardSlider
          title="Selected for you"
          items={products}
          withDecimal={true}
        />
      </div>
    </>
  );
}
