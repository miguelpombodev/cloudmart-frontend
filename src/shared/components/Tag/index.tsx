import { CapitalizeString } from "@/shared/utils/string.utils";

import type { TagProps } from "./props";

export default function Tag({ title, className = "" }: TagProps) {
  return (
    <span
      className={`
        inline-flex items-center
        px-3 py-1
        rounded-full
        text-xs font-semibold tracking-wide
        text-white backdrop-blur-sm
        bg-green-default
        border border-green-default
        shadow-sm
        md:text-base
        ${className}
      `}
    >
      {CapitalizeString(title)}
    </span>
  );
}
