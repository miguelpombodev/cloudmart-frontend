import { Star, Truck } from "lucide-react";
import { useState } from "react";
import { useParams } from "react-router-dom";

import { MOCK_PRODUCTS } from "@/features/home/pages/mock";
import { Button } from "@/shared/components/Button";
import PriceCard from "@/shared/components/Cards/PriceCard";
import { CardSlider } from "@/shared/components/CardSlider";
import QuantityFuction from "@/shared/components/QuantityCounter";
import { ConvertToCurrency } from "@/shared/utils/price.utils";

import ColorOptionSelection from "../components/ColorOptionSelection";
import ProductFeaturesTable from "../components/ProductFeaturesTable";
import ProductImageGallery from "../components/ProductImageGallery";
import ProductImages from "../components/ProductImages";
import ProductReviewsTable from "../components/ProductReviewsTable";

import {
  PDP_MOCK_COLORS,
  PDP_MOCK_IMAGES,
  PDP_MOCK_PATHS,
  PDP_MOCK_PRODUCT_FEATURES,
  PDP_PRODUCT_REVIEWS_MOCK,
} from "./mocks";

export default function ProductPage() {
  const [quantity, setQuantity] = useState(1);
  const params = useParams();

  const addToCart = () => {
    console.log("teste");
  };

  return (
    <section className="flex flex-col px-4 py-5 gap-8">
      <div className="flex gap-3 font-edit font-semibold">
        {PDP_MOCK_PATHS.map((path, idx) => (
          <a key={idx} href={path.url}>
            {path.name}
            <span className="mx-3">/</span>
          </a>
        ))}
      </div>
      <div className="flex flex-col md:flex-row">
        <div className="flex items-start overflow-hidden">
          <ProductImages images={PDP_MOCK_IMAGES} />
        </div>
        <div className="flex flex-col items-start gap-3 md:pt-5">
          <div className="flex flex-col items-start gap-1 font-edit">
            <h3 className=" text-base text-low-gray">Product Category Name</h3>
            <h1 className=" text-2xl font-bold">Product Name</h1>
          </div>
          <div>
            <span className="flex gap-2 items-center">
              <Truck className="text-green-victory" />
              <p className="font-edit text-green-victory text-sm">
                Free Shipping
              </p>
            </span>
          </div>
          <span className="flex items-center gap-2">
            <span className="flex items-center">
              {Array.from({ length: 5 }).map((_, index) => (
                <Star
                  key={index}
                  className="fill-yellow-warn text-yellow-warn"
                />
              ))}
            </span>
            <p className="">5.0 (10000 reviews)</p>
          </span>
          <div className="hidden md:block">
            <span className=" font-extrabold text-4xl font-numbers">
              {ConvertToCurrency(10.0)}
            </span>
          </div>
          <div className="">
            <p>
              Product Description with characters limitations, so for a huge
              text we need to add an ellipsis sign
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <p className="font-semibold text-black">Colors</p>
            <ColorOptionSelection colors={PDP_MOCK_COLORS} />
          </div>
          <div className="hidden md:flex md:flex-col">
            <p className="font-edit font-semibold text-black">Quantity</p>
            <QuantityFuction onChange={setQuantity} />
          </div>
          <div className="flex mt-3 w-full">
            <Button
              kind="default"
              value="+ Cart"
              sizeType="small"
              className="w-full"
              onClick={addToCart}
            />
          </div>
        </div>
      </div>
      <div className="fixed bottom-0 left-0 z-50 gap-5 flex flex-col justify-center items-center w-full bg-cream border-t border-green-default rounded-t-sm p-5 md:hidden">
        <span className="flex items-center justify-between gap-10">
          <span className=" font-extrabold text-4xl font-numbers">
            {ConvertToCurrency(10.0 * quantity)}
          </span>
          <div className="flex flex-col">
            <QuantityFuction onChange={setQuantity} />
          </div>
        </span>
        <Button
          kind="default"
          value="+ Cart"
          sizeType="small"
          className="w-full"
          onClick={addToCart}
        />
      </div>
      <hr />
      <div className="flex flex-col gap-5">
        <h3 className="text-2xl font-edit font-bold">Product features</h3>
        <ProductFeaturesTable features={PDP_MOCK_PRODUCT_FEATURES} />
      </div>
      <div className="flex flex-col gap-5">
        <h3 className="text-2xl font-edit font-bold">Product reviews</h3>
        <ProductReviewsTable reviews={PDP_PRODUCT_REVIEWS_MOCK} />
      </div>
      <div className="flex flex-col">
        <h3 className="text-2xl font-edit font-bold">
          Other products similars
        </h3>
        <CardSlider>
          {MOCK_PRODUCTS.map((product) => (
            <PriceCard
              key={product.id}
              title={product.title}
              category={product.category}
              description={product.description}
              sku={product.sku}
              imageUrl={product.imageUrl}
              price={product.price}
            />
          ))}
        </CardSlider>
      </div>
    </section>
  );
}
