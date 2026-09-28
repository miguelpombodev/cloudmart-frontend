import { useState } from "react";

import ProductImageGallery from "../ProductImageGallery";

import type ProductImageProps from "./props";

export default function ProductImage({ images }: ProductImageProps) {
  const [showSelected, setShowSelected] = useState<string | null>(null);

  return (
    <>
      <ProductImageGallery images={images} onChange={setShowSelected} />
      <img
        src={showSelected === null ? images[0] : showSelected}
        alt="product"
        className="
          w-full 
          h-full 
          object-cover
          transition-transform duration-500 ease-in-out
          group-hover:scale-105
          "
        loading="lazy"
      />
    </>
  );
}
