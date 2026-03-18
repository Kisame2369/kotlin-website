import type { Route } from "./+types/home";
import { HeaderSection } from "../sections/HeaderSection/HeaderSection";

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
    </div>
  );
}