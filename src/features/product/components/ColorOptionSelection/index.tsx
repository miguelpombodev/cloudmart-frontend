import { useState } from "react";

import type ColorOptionSelectionProps from "./props";

export default function ColorOptionSelection({
  colors,
}: ColorOptionSelectionProps) {
  const [selected, setSelected] = useState<string | null>(null);

  return (
    <span className="flex gap-3">
      {colors.map((color) => (
        <span
          key={color.name}
          onClick={() => setSelected(color.name)}
          style={{
            borderColor: color.hex,
            color: selected === color.name ? "#fff" : color.hex,
            backgroundColor:
              selected === color.name ? color.hex : "transparent",
          }}
          className="border rounded py-2 px-8 cursor-pointer transition-all duration-200 font-semibold"
        >
          <p>{color.name}</p>
        </span>
      ))}
    </span>
  );
}
