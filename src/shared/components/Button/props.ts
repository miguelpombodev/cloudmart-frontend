import type { ButtonHTMLAttributes } from "react";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  kind: "default" | "warning" | "danger" | "neutral";
  value: string;
  sizeType: "medium" | "small";
  isDisabled?: boolean;
  onClick?: () => void;
}
