import Skeleton from "@/shared/components/Skeleton";

export default function PriceCardSkeleton() {
  return (
    <article
      aria-hidden="true"
      className="flex flex-col shrink-0 w-72 md:w-[310px] rounded-lg overflow-hidden bg-[#fbf9f5]"
    >
      <div className="relative h-80 md:h-[300px]">
        <Skeleton className="h-full w-full rounded-none" />
        <Skeleton className="absolute top-3 left-3 h-8 w-24 rounded-full" />
      </div>

      <div className="flex flex-col px-2 py-2 gap-4">
        <Skeleton className="h-7 w-28 md:h-9 md:w-36" />

        <div className="flex flex-col gap-2">
          <div className="flex min-h-16 flex-col gap-2">
            <Skeleton className="h-5 w-4/5" />
            <Skeleton className="h-5 w-3/5" />
          </div>
          <div className="flex min-h-16 flex-col gap-2">
            <Skeleton className="h-3.5 w-full" />
            <Skeleton className="h-3.5 w-full" />
            <Skeleton className="h-3.5 w-2/3" />
          </div>
        </div>

        <div className="flex items-center gap-2">
          <Skeleton className="h-6 w-6 rounded-full" />
          <Skeleton className="h-5 w-20" />
        </div>

        <div className="flex items-center justify-between">
          <Skeleton className="h-6 w-28" />
          <Skeleton className="h-7 w-7 rounded-full" />
        </div>

        <Skeleton className="h-10 w-full" />
      </div>
    </article>
  );
}
