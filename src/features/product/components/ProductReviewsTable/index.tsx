import { ThumbsUp, ThumbsDown, Star } from "lucide-react";
import { useState } from "react";

import RatingStars from "@/shared/components/RatingStars";

import type { ProductReviews } from "../../types";

import type { ProductReviewsTableProps, ThumbType } from "./props";

function ReviewRow({ review }: { review: ProductReviews }) {
  const [thumb, setThumb] = useState<ThumbType>("none");

  const handleThumb = (type: "up" | "down") => {
    setThumb((prev) => (prev === type ? "none" : type));
  };

  return (
    <div className="flex flex-col border-b border-green-default gap-5 py-3 last:border-none">
      <span className="flex items-center">
        <RatingStars rating={review.rating} />
      </span>

      <p className="font-ibm font-normal">{review.review}</p>

      <div className="flex items-center justify-between">
        <div className="text-low-gray">
          {review.country} | {review.reviewDate}
        </div>

        <div className="flex items-center gap-2">
          <span className="flex items-center gap-1 cursor-pointer">
            <ThumbsUp
              size={18}
              onClick={() => handleThumb("up")}
              className="transition-colors duration-200"
              style={{ color: thumb === "up" ? "#16A34A" : undefined }}
            />
            {review.likes}
          </span>

          <span className="flex items-center gap-1 cursor-pointer">
            <ThumbsDown
              size={18}
              onClick={() => handleThumb("down")}
              className="transition-colors duration-200"
              style={{ color: thumb === "down" ? "#DC3545" : undefined }}
            />
            {review.dislikes}
          </span>
        </div>
      </div>
    </div>
  );
}

export default function ProductReviewsTable({
  reviews,
}: ProductReviewsTableProps) {
  return (
    <div className="flex flex-col gap-3">
      {reviews.map((review, idx) => (
        <ReviewRow key={idx} review={review} />
      ))}
    </div>
  );
}
