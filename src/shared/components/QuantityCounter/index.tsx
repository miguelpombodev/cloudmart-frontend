import { Plus, Minus } from "lucide-react";
import { useState } from "react";

import type QuantityCounterProps from "./props";

export default function QuantityFuction({
  initialValue = 1,
  onChange,
}: QuantityCounterProps) {
  const [counter, setCounter] = useState(initialValue);

  const addOneToCounter = () => {
    const next = counter + 1;
    setCounter(next);
    onChange?.(next);
  };

  const takeOneToCounter = () => {
    if (counter === 1) return;
    const next = counter - 1;
    setCounter(next);
    onChange?.(next);
  };

  return (
    <span className="flex gap-2 items-center">
      <Minus
        className="bg-green-default text-white rounded-full cursor-pointer"
        onClick={takeOneToCounter}
      />
      <span className="font-edit px-10 py-1 border border-green-default rounded-lg">
        {counter}
      </span>
      <Plus
        className="bg-green-default text-white rounded-full cursor-pointer"
        onClick={addOneToCounter}
      />
    </span>
  );
}
