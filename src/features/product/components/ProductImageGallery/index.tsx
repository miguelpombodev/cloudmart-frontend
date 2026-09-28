import type ProductImagesGalleryProps from "./props";

export default function ProductImageGallery({
  images,
}: ProductImagesGalleryProps) {
  return (
    <div className="flex flex-col gap-3">
      {images.map((img, idx) => (
        <span
          key={idx}
          className="w-14 h-14 rounded border border-green-default cursor-pointer"
        >
          <img src={img} alt="test" />
        </span>
      ))}
    </div>
  );
}
