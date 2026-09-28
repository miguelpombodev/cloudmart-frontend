import type { ProductFeaturesTableProps } from "./props";

export default function ProductFeaturesTable({
  features,
}: ProductFeaturesTableProps) {
  return (
    <div
      className="
        flex 
        flex-col
        rounded-lg 
        overflow-hidden
        [&>*]:py-5
        [&>*]:px-3
        [&>*:nth-child(odd)]:bg-green-default 
        [&>*:nth-child(odd)]:font-bold 
        [&>*:nth-child(odd)]:text-white"
    >
      {features.map((feat) => (
        <span key={feat.name} className="flex">
          <span className="flex flex-1 font-bold">{feat.name}</span>
          <span className="flex flex-1">{feat.value}</span>
        </span>
      ))}
    </div>
  );
}
