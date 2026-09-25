import type { CardProps } from "./props";

export default function Card({ name, imageUrl }: CardProps) {
  return (
    <article
      className="
              flex 
              flex-col 
              gap-2 
              shrink-0 
              cursor-pointer
              w-72
              group
              md:w-[380px]
            "
    >
      <div
        className="
                relative 
                overflow-hidden 
                rounded-xl
                bg-green-default
                h-[220px]
              "
      >
        {imageUrl && (
          <img
            src={imageUrl}
            alt={name}
            className="
                    w-full 
                    h-full 
                    object-cover
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

      <span className="text-sm text-gray-700 font-functional pl-0.5">
        {name}
      </span>
    </article>
  );
}
