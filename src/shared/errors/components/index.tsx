import type { ErrorMessageProps } from "../types";

export function ErrorMessage({ message }: ErrorMessageProps) {
  return <span className="text-red-danger font-bold">{message}</span>;
}
