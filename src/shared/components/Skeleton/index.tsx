import type { SkeletonProps } from "./props";

export default function Skeleton({
  tone = "dark",
  className = "",
}: SkeletonProps) {
  const hasCustomRadius = /(^|\s)rounded/.test(className);

  const TONES = {
    light: "bg-white/20",
    dark: "bg-black/10",
  } as const;

  return (
    <div
      aria-hidden="true"
      className={`animate-pulse motion-reduce:animate-none ${TONES[tone]} ${
        hasCustomRadius ? "" : "rounded-md"
      } ${className}`}
    />
  );
}
