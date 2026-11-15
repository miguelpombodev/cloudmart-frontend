import type { LucideIcon } from "lucide-react";
import type { ComponentProps } from "react";

export interface InputProps extends Omit<ComponentProps<"input">, "title"> {
  title: string;
  withLabel?: boolean;
  icon?: LucideIcon;
}
