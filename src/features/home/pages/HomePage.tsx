import { useState } from "react";

import { CardSlider } from "@/shared/components/CardSlider";
import type { Items } from "@/shared/components/CardSlider/props";
import OfferBanner from "@/shared/components/OfferBanner";

import { Hero } from "../components/Hero";
import type { Product, Banners } from "../types";

import { MOCK_CATEGORIES, MOCK_PRODUCTS, MOCK_OFFERS_BANNER } from "./mock";

export function HomePage() {
  const [categories, setCategories] = useState<Items[]>(MOCK_CATEGORIES);
  const [products, setProducts] = useState<Product[]>(MOCK_PRODUCTS);
  const [offersBanners, setOffersBanners] =
    useState<Banners[]>(MOCK_OFFERS_BANNER);

  return (
    <>
      <Hero />
      <div className="p-10">
        <CardSlider title="Categories" items={categories} />
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
        <CardSlider
          title="Selected for you"
          items={products}
          withDecimal={true}
        />
      </div>
    </>
  );
}
