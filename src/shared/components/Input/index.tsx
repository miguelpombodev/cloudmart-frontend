import { useId } from "react";

import { CapitalizeString } from "@/shared/utils/string.utils";

import type { InputProps } from "./props";

export default function Input({
  title,
  withLabel = false,
  icon: Icon,
  type = "text",
  className = "",
  ...rest
}: InputProps) {
  const id = useId();
  return (
    <div className={`flex flex-col gap-1 ${className}`}>
      {withLabel && <label htmlFor={id}>{CapitalizeString(title)}</label>}
      <div
        className="flex items-center gap-2 rounded-lg border-2 border-green-default px-3 py-2
          focus-within:ring-2 focus-within:ring-green-default/40"
      >
        {Icon && <Icon size={18} aria-hidden="true" className="shrink-0" />}
        <input
          id={id}
          type={type}
          aria-label={withLabel ? undefined : title}
          className="w-full bg-transparent outline-none"
          {...rest}
        />
      </div>
    </div>
  );
}
