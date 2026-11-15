import { useState } from "react";

import { Button } from "@/shared/components/Button";
import Checkbox from "@/shared/components/Checkbox";

export default function PriceRange() {
  const [rangePrices, setRangePrices] = useState<{
    minPrice: number;
    maxPrice: number;
  }>({
    minPrice: 0,
    maxPrice: 100,
  });
  const handleResetRangePrices = () => {
    setRangePrices({
      minPrice: 0,
      maxPrice: 100,
    });
  };
  return (
    <>
      <div className="flex ">
        <span className="flex w-full flex-col justify-center gap-2 font-functional text-lg">
          <span className="flex items-center gap-3 justify-between">
            <input
              className="w-32 h-10 px-2 outline-none text-black border-none rounded-lg flex-1"
              placeholder="Min"
              type="text"
              value={rangePrices.minPrice}
              onChange={(e) => {
                const minPrice = Number(e.target.value);
                setRangePrices((prev) => ({
                  ...prev,
                  minPrice,
                }));
              }}
            />
            <span>-</span>
            <input
              className="w-32 h-10 px-2 outline-none text-black border-none rounded-lg flex-1"
              placeholder="Max"
              type="text"
              value={rangePrices.maxPrice}
            />
            <Button value="Ok" kind="neutral" sizeType="small" />
          </span>
          <p
            onClick={handleResetRangePrices}
            className="underline cursor-pointer"
          >
            Reset prices range
          </p>
        </span>
      </div>
      <div className="flex flex-col gap-2 tracking-wider font-bold">
        <span className="flex gap-1">
          <Checkbox title="€0 - €20" />
        </span>
        <span className="flex gap-1">
          <Checkbox title="€20 - €30" />
        </span>
        <span className="flex gap-1">
          <Checkbox title="€30 - €40" />
        </span>
        <span className="flex gap-1">
          <Checkbox title="€40 - €50" />
        </span>
        <span className="flex gap-1">
          <Checkbox title="€50 - €60" />
        </span>

        <span className="flex gap-1">
          <Checkbox title="Mais de €60" />
        </span>
      </div>
    </>
  );
}
