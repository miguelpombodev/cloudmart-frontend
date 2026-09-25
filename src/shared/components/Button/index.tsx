import type { ButtonProps } from "./props";

export function Button({
  kind = "default",
  value,
  className = "",
  sizeType = "medium",
  ...rest
}: ButtonProps) {
  const kindColorMap = {
    default: "bg-green-default",
    warning: "bg-yellow-warn",
    danger: "bg-red-danger",
  };

  const sizeTypeMap = {
    medium: "px-8 py-4 md:px-4 md:py-2",
    small: "px-6 py-2 md:px-4 md:py-2",
  };

  return (
    <button
      className={`${kindColorMap[kind]} cursor-pointer text-xl text-white rounded-md ${sizeTypeMap[sizeType]} md:text-base ${className}`}
      {...rest}
    >
      {value}
    </button>
  );
}
