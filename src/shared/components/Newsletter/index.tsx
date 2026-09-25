export default function Newsletter() {
  return (
    <div className="min-h-[400px] px-5 gap-16 flex flex-col justify-center items-center bg-green-default rounded-md text-white">
      <div className="flex gap-10 flex-col justify-center items-center">
        <span className="flex flex-col justify-center items-center">
          <h2 className="text-lg font-functional">
            Get Our Coupons and Promotions
          </h2>
          <h3 className="text-6xl font-extrabold font-edit uppercase md:text-8xl">
            10% Off
          </h3>
        </span>
        <span className="flex rounded-md border border-cream">
          <input
            type="text"
            placeholder="Your email"
            className="border-none outline-none bg-green-default px-3"
          />
          <span className="py-3 px-3 h-full bg-cream text-black md:py-3 md:px-5">
            <p className="font-edit cursor-pointer">Subscribe</p>
          </span>
        </span>
      </div>

      <p className="text-center text-sm underline font-edit md:text-base">
        Be aware of all our weekly promotions and get a 10% off coupon in your
        first purchase!
      </p>
    </div>
  );
}
