import type { ButtonProps } from "./props";

export function Button({
  kind = "default",
  value,
  className = "",
  sizeType = "medium",
  icon: Icon,
  onClick,
  isDisabled,
  ...rest
}: ButtonProps) {
  const kindColorMap = {
    neutral: "bg-black text-white",
    default: "bg-green-default text-white",
    warning: "bg-yellow-warn text-white",
    danger: "bg-red-danger text-white",
    outline: "bg-white border-2 border-green-default text-green-default",
  };

  const sizeTypeMap = {
    medium: "px-8 py-4 md:px-4 md:py-2",
    small: "px-6 py-2 md:px-4 md:py-2",
  };

  return (
    <span className="flex items-center justify-center">
      <button
        disabled={isDisabled}
        className={`flex items-center gap-2 text-xl rounded-md ${sizeTypeMap[sizeType]} md:text-base ${isDisabled ? "bg-gray-400 cursor-not-allowed" : `${kindColorMap[kind]} cursor-pointer`} ${className}`}
        onClick={onClick}
        {...rest}
      >
        {Icon && <Icon size={18} aria-hidden="true" className="shrink-0" />}
        {value}
      </button>
    </span>
  );
}
