import Skeleton from "@/shared/components/Skeleton";

export default function CardSkeleton() {
  return (
    <article
      className="
        flex
        flex-col
        gap-2
        shrink-0
        w-72
        md:w-[380px]
      "
    >
      {/* Image */}
      <Skeleton
        className="
          w-full
          h-[220px]
          rounded-xl
        "
      />

      {/* Name */}
      <Skeleton className="h-4 w-2/3 ml-0.5" />
    </article>
  );
}
