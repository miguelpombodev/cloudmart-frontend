import Checkbox from "@/shared/components/Checkbox";

import type { FilterCheckboxProps } from "./props";

export default function FilterCheckbox({
  id,
  title,
  quantity,
  checked,
  onChange,
}: FilterCheckboxProps) {
  return (
    <div key={id} className="flex cursor-pointer gap-3 font-functional text-lg">
      <Checkbox title={title} checked={checked} onChange={onChange} />
      <span className="font-numbers">({quantity})</span>
    </div>
  );
}
