import type { Route } from "./+types/home";
import { HeaderSection } from "~/sections/HeaderSection/HeaderSection";
import { LatestFromKotlinSection } from "~/sections/LatestFromKotlinSection/LatestFromKotlinSection";
import { WhyKotlinSection } from "~/sections/WhyKotlinSection/WhyKotlinSection";
import { UsageSection } from "~/sections/UsageSection/UsageSection";
import { StartSection } from "~/sections/StartSection/StartSection";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Kotlin Programming Language" },
    { name: "description", content: "A modern programming language that makes developers happier" },
  ];
}

export default function Home() {
  return (
    <div className="overview-page">
      <HeaderSection />
      <LatestFromKotlinSection />
      <WhyKotlinSection />
      <UsageSection />
      <StartSection />
    </div>
  );
}