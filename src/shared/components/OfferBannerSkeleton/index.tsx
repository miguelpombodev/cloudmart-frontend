import Skeleton from "@/shared/components/Skeleton";

export default function OfferBannerSkeleton() {
  return (
    <div className="flex w-full rounded-lg overflow-hidden">
      {/* Text section */}
      <div className="bg-black/10 flex items-center justify-center w-1/2">
        <div className="flex items-start justify-center flex-col w-1/2 gap-2">
          <Skeleton className="h-4 w-2/3" />
          <Skeleton className="h-6 w-full" />
          <Skeleton className="h-3 w-1/2" />
        </div>
      </div>

      {/* Image section */}
      <div className="w-1/2">
        <Skeleton className="w-full h-full min-h-40 rounded-none" />
      </div>
    </div>
  );
}
