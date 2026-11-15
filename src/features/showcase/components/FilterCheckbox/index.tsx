import Checkbox from "@/shared/components/Checkbox";

import type { FilterCheckboxProps } from "./props";

export default function FilterCheckbox({
  id,
  title,
  quantity,
}: FilterCheckboxProps) {
  return (
    <div key={id} className="flex cursor-pointer gap-3 font-functional text-lg">
      <Checkbox title={title} />
      <span className="font-numbers">({quantity})</span>
    </div>
  );
}
