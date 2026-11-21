// props.ts
import type { ComponentProps } from "react";

export interface CheckboxProps extends Omit<
  ComponentProps<"input">,
  "title" | "type"
> {
  title: string;
}
