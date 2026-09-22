import { Button } from "@/shared/components/Button";

export function Hero() {
  const heroImgUrl =
    "https://img.magnific.com/free-photo/modern-man-casual-outfit-showing-shopping-bag-okay-sign-winking-camera-recommending-shop_1258-300002.jpg";

  return (
    <section className="grid grid-cols-1 md:grid-cols-2">
      <div className="flex flex-col items-center justify-center gap-7 p-8 order-2 md:p-9 md:order-1 md:items-start">
        <h4 className="font-functional text-xs uppercase tracking-wide text-low-gray">
          Current Collection
        </h4>

        <h1 className="max-w-[450px] font-functional text-4xl leading-snug text-green-default md:text-[32px]">
          A curated selection of varied products, chosen for their materials and
          finishes.
        </h1>

        <p className="max-w-[280px] text-sm  text-low-gray">
          A curated selection of varied products, chosen for their materials and
          finishes.
        </p>

        <span className="flex items-center flex-1">
          <Button kind="default" value="See collection" className="mt-1 " />
        </span>
      </div>

      <div className="min-h-[280px] overflow-hidden order-1 md:min-h-[280px] md:order-2">
        <img
          src={heroImgUrl}
          alt="Model showing a piece of the collection"
          className="h-full min-h-[280px] w-full object-cover"
        />
      </div>
    </section>
  );
}
