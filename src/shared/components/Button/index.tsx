import type { ButtonProps } from "./props";

export function Button({
  kind = "default",
  value,
  className = "",
  sizeType = "medium",
  onClick,
  isDisabled,
  ...rest
}: ButtonProps) {
  const kindColorMap = {
    neutral: "bg-black",
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
      disabled={isDisabled}
      className={`text-xl text-white rounded-md ${sizeTypeMap[sizeType]} md:text-base ${isDisabled ? "bg-gray-400 cursor-not-allowed" : `${kindColorMap[kind]} cursor-pointer`} ${className}`}
      onClick={onClick}
      {...rest}
    >
      {value}
    </button>
  );
}
