import type { ButtonProps } from "./props";

export function Button({
  kind = "default",
  value,
  className = "",
  ...rest
}: ButtonProps) {
  const kindColorMap = {
    default: "bg-green-default",
    warning: "bg-yellow-warn",
    danger: "bg-red-danger",
  };

  return (
    <button
      className={`${kindColorMap[kind]} rounded-md px-8 py-4 md:px-4 md:py-2 ${className}`}
      {...rest}
    >
      {value}
    </button>
  );
}
