import type { LucideIcon } from "lucide-react";
import type { ButtonHTMLAttributes } from "react";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  kind: "default" | "warning" | "danger" | "neutral" | "outline";
  value: string;
  sizeType: "medium" | "small";
  icon?: LucideIcon;
  isDisabled?: boolean;
  onClick?: () => void;
}
