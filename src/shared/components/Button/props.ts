import type { ButtonHTMLAttributes } from "react";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  kind: "default" | "warning" | "danger" | "neutral" | "outline";
  value: string;
  sizeType: "medium" | "small";
  isDisabled?: boolean;
  onClick?: () => void;
}
