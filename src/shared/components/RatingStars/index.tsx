import { Star } from "lucide-react";

import type RatingStarsProps from "./props";

export default function RatingStars({ rating }: RatingStarsProps) {
  return (
    <span className="flex items-center">
      {Array.from({ length: rating }).map((_, index) => (
        <Star key={index} className="fill-yellow-warn text-yellow-warn" />
      ))}
    </span>
  );
}
