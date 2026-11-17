import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { useState } from "react";

import { getProductsByCollection } from "@/features/showcase/api/showcase";
import Card from "@/shared/components/Cards/Card";
import PriceCard from "@/shared/components/Cards/PriceCard";
import RatingCard from "@/shared/components/Cards/RatingCard";
import CardSkeleton from "@/shared/components/CardSkeleton";
import { CardSlider } from "@/shared/components/CardSlider";
import Newsletter from "@/shared/components/Newsletter";
import OfferBanner from "@/shared/components/OfferBanner";
import PriceCardSkeleton from "@/shared/components/PriceCardSkeleton";

import { getAllCategories } from "../api";
import { Hero } from "../components/Hero";
import type { Banners, Rating } from "../types";

import { MOCK_OFFERS_BANNER, MOCK_RATINGS } from "./mock";

export function HomePage() {
  const [ratings, setRatings] = useState<Rating[]>(MOCK_RATINGS);
  const [offersBanners, setOffersBanners] =
    useState<Banners[]>(MOCK_OFFERS_BANNER);

  const { data, isPending } = useQuery({
    queryKey: ["home"],
    queryFn: async () => {
      const [products, categories] = await Promise.all([
        getProductsByCollection(),
        getAllCategories(),
      ]);

      return { products, categories };
    },
    placeholderData: keepPreviousData,
  });

  return (
    <>
      <Hero />
      <section className="p-10">
        <CardSlider>
          {isPending || !data?.categories
            ? [1, 2, 3, 4, 5].map((item) => <CardSkeleton key={item} />)
            : data?.categories.map((category) => (
                <Card
                  key={category.id}
                  name={category.title}
                  imageUrl={category.imageUrl}
                />
              ))}
        </CardSlider>
      </section>
      <section className="p-10 flex flex-col gap-3 md:flex-row md:px-60 md:py-10 ">
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
      </section>
      <section className="p-10">
        <CardSlider>
          {isPending
            ? [1, 2, 3, 4, 5].map((item) => <PriceCardSkeleton key={item} />)
            : data?.products?.map((product) => (
                <PriceCard key={product.sku} item={product} />
              ))}
        </CardSlider>
      </section>
      <section className="p-5">
        <CardSlider>
          {ratings.map((rating) => (
            <RatingCard
              key={rating.id}
              reviewerName={rating.reviewerName}
              date={rating.date}
              description={rating.description}
              productUrl={rating.productUrl}
              rating={rating.rating}
            />
          ))}
        </CardSlider>
      </section>
      <section className="p-10">
        <CardSlider>
          {isPending || !data?.products
            ? [1, 2, 3, 4, 5].map((item) => <PriceCardSkeleton key={item} />)
            : data?.products?.map((product) => (
                <PriceCard key={product.sku} item={product} />
              ))}
        </CardSlider>
      </section>
      <section className="px-5">
        <Newsletter />
      </section>
    </>
  );
}
