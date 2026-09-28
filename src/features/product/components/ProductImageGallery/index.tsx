import { useState } from "react";

import type ProductImagesGalleryProps from "./props";

export default function ProductImageGallery({
  images,
  onChange,
}: ProductImagesGalleryProps) {
  const [selectImage, setSelectImage] = useState<string | null>(null);

  const handleSelectedImage = (image: string) => {
    setSelectImage(image);
    onChange?.(image);
  };

  return (
    <div className="flex flex-col gap-3">
      {images.map((img, idx) => (
        <span
          key={idx}
          className="w-14 h-14 rounded border border-green-default cursor-pointer"
          onClick={() => handleSelectedImage(img)}
        >
          <img src={img} alt="test" />
        </span>
      ))}
    </div>
  );
}
