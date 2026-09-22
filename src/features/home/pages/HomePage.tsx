import { CardSlider } from "@/shared/components/CardSlider";

import { Hero } from "../components/Hero";

export function HomePage() {
  return (
    <h1 className="">
      <Hero />
      <CardSlider title="Categories" />
    </h1>
  );
}
