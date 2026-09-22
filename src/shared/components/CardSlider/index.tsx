import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRef, useState, useEffect, useCallback } from "react";

import type { Items, ItemsSliderProps } from "./props";

const MOCK_CATEGORIES: Items[] = [
  {
    id: "1",
    name: "Eletrônicos",
    imageUrl: "https://picsum.photos/seed/eletronicos/400/260",
  },
  {
    id: "2",
    name: "Moda",
    imageUrl: "https://picsum.photos/seed/moda/400/260",
  },
  {
    id: "3",
    name: "Casa & Jardim",
    imageUrl: "https://picsum.photos/seed/casa/400/260",
  },
  {
    id: "4",
    name: "Esportes",
    imageUrl: "https://picsum.photos/seed/esportes/400/260",
  },
  {
    id: "5",
    name: "Beleza",
    imageUrl: "https://picsum.photos/seed/beleza/400/260",
  },
  {
    id: "6",
    name: "Livros",
    imageUrl: "https://picsum.photos/seed/livros/400/260",
  },
];

const CARD_WIDTH = 380;
const GAP = 16;
const SCROLL_AMOUNT = CARD_WIDTH + GAP;

export function CardSlider({
  categories = MOCK_CATEGORIES,
  title = "CATEGORIES",
}: ItemsSliderProps) {
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
    <section className="w-full py-6 px-5">
      <div className="flex items-center justify-between mb-4 px-1">
        <h2 className="text-base uppercase font-functional text-low-gray">
          {title}
        </h2>
      </div>

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
        {categories.map((cat) => (
          <article
            key={cat.id}
            className="
              flex flex-col gap-2 shrink-0 cursor-pointer
              w-[380px]
              group
            "
          >
            <div
              className="
                relative overflow-hidden rounded-xl
                bg-[#1a3c34]
                h-[220px]
              "
            >
              {cat.imageUrl && (
                <img
                  src={cat.imageUrl}
                  alt={cat.name}
                  className="
                    w-full h-full object-cover
                    transition-transform duration-500 ease-in-out
                    group-hover:scale-105
                  "
                  loading="lazy"
                />
              )}

              <div
                className="
                  absolute inset-0 bg-black/0
                  transition-all duration-300
                  group-hover:bg-black/15
                "
              />
            </div>

            <span className="text-sm text-gray-700 font-normal pl-0.5">
              {cat.name}
            </span>
          </article>
        ))}
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
