import type React from "react";

import type { OfferBannerProps } from "./props";

export default function OfferBanner({
  title,
  color,
  description,
  ctaString,
  urlImg,
}: OfferBannerProps) {
  return (
    <div className="flex w-full rounded-lg overflow-hidden">
      <div
        style={{ "--banner-color": color } as React.CSSProperties}
        className="bg-[var(--banner-color)] flex items-center justify-center w-1/2 cursor-pointer"
      >
        <div className="flex items-start justify-center flex-col w-1/2 gap-1">
          <span className="text-white font-extralight text-sm">{title}</span>
          <span className="text-white text-lg font-semibold font-functional">
            {description}
          </span>
          <span className="text-white text-xs font-extralight font-functional">
            {ctaString}
          </span>
        </div>
      </div>
      <div className="w-1/2">
        <img
          src={urlImg}
          className="h-full object-cover"
          alt={`offer-${title.replace(" ", "_").toLocaleLowerCase()}`}
        />
      </div>
    </div>
  );
}
