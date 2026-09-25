import { useState } from "react";

import Card from "@/shared/components/Cards/Card";
import PriceCard from "@/shared/components/Cards/PriceCard";
import { CardSlider } from "@/shared/components/CardSlider";
import OfferBanner from "@/shared/components/OfferBanner";

import { Hero } from "../components/Hero";
import type { Product, Banners, Category } from "../types";

import { MOCK_CATEGORIES, MOCK_PRODUCTS, MOCK_OFFERS_BANNER } from "./mock";

export function HomePage() {
  const [categories, setCategories] = useState<Category[]>(MOCK_CATEGORIES);
  const [products, setProducts] = useState<Product[]>(MOCK_PRODUCTS);
  const [offersBanners, setOffersBanners] =
    useState<Banners[]>(MOCK_OFFERS_BANNER);

  return (
    <>
      <Hero />
      <div className="p-10">
        <CardSlider>
          {categories.map((category) => (
            <Card
              key={category.id}
              name={category.name}
              imageUrl={category.imageUrl}
            />
          ))}
        </CardSlider>
      </div>
      <div className="p-10 flex flex-col gap-3 md:flex-row md:px-60 md:py-10 ">
        {offersBanners.map((banner) => (
          <OfferBanner
            key={banner.id}
            title={banner.title}
            color={banner.color}
            ctaString={banner.ctaString}
            description={banner.description}
            urlImg={banner.urlImg}
          />
        ))}
      </div>
      <div className="p-10">
        <CardSlider>
          {products.map((product) => (
            <PriceCard
              key={product.id}
              title={product.title}
              category={product.category}
              description={product.description}
              imageUrl={product.imageUrl}
              price={product.price}
            />
          ))}
        </CardSlider>
      </div>
    </>
  );
}
