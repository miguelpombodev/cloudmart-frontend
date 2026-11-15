import { Check } from "lucide-react";
import { useId } from "react";

import type { CheckboxProps } from "./props";

export default function Checkbox({ title }: CheckboxProps) {
  const id = useId();

  return (
    <>
      <span className="relative inline-flex h-6 w-6 shrink-0">
        <input
          className="
            peer h-6 w-6 cursor-pointer appearance-none
            rounded-md border-0 outline-none
            bg-white
            bg-neutral-secondary-medium
            transition-colors
            checked:bg-black
            focus-visible:ring-2 focus-visible:ring-brand-soft
          "
          type="checkbox"
          name={title}
          id={id}
        />
        <Check
          size={14}
          strokeWidth={3}
          className="
            pointer-events-none absolute inset-0 m-auto
            text-white opacity-0 transition-opacity
            peer-checked:opacity-100
          "
        />
      </span>
      <label htmlFor={id} className="cursor-pointer">
        {title}
      </label>
    </>
  );
}
