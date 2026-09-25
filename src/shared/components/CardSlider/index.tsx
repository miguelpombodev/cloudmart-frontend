import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRef, useState, useEffect, useCallback } from "react";

import type { CardSliderProps } from "./props";

const CARD_WIDTH = 380;
const GAP = 16;
const SCROLL_AMOUNT = CARD_WIDTH + GAP;

export function CardSlider({ children }: CardSliderProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const updateScrollState = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 0);
    setCanScrollRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 1);
  }, []);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    updateScrollState();
    el.addEventListener("scroll", updateScrollState, { passive: true });
    return () => el.removeEventListener("scroll", updateScrollState);
  }, [updateScrollState]);

  const scroll = (direction: "left" | "right") => {
    const el = scrollRef.current;
    if (!el) return;
    el.scrollBy({
      left: direction === "left" ? -SCROLL_AMOUNT : SCROLL_AMOUNT,
      behavior: "smooth",
    });
  };

  return (
    <section>
      <div
        ref={scrollRef}
        className="
          flex gap-4 overflow-x-auto
          scrollbar-none
          [scrollbar-width:none]
          [-ms-overflow-style:none]
          [&::-webkit-scrollbar]:hidden
          pb-1
        "
      >
        {children}
      </div>
      <div className="hidden md:flex md:gap-1">
        <button
          onClick={() => scroll("left")}
          disabled={!canScrollLeft}
          aria-label="Rolar para a esquerda"
          className="
              flex items-center justify-center
              w-8 h-8 rounded-full border border-gray-200
              text-gray-600 bg-white
              transition-all duration-200
              hover:bg-gray-50 hover:border-gray-300
              disabled:opacity-25 disabled:cursor-not-allowed disabled:hover:bg-white disabled:hover:border-gray-200
            "
        >
          <ChevronLeft size={16} strokeWidth={2} />
        </button>

        <button
          onClick={() => scroll("right")}
          disabled={!canScrollRight}
          aria-label="Rolar para a direita"
          className="
              flex items-center justify-center
              w-8 h-8 rounded-full border border-gray-200
              text-gray-600 bg-white
              transition-all duration-200
              hover:bg-gray-50 hover:border-gray-300
              disabled:opacity-25 disabled:cursor-not-allowed disabled:hover:bg-white disabled:hover:border-gray-200
            "
        >
          <ChevronRight size={16} strokeWidth={2} />
        </button>
      </div>
    </section>
  );
}
