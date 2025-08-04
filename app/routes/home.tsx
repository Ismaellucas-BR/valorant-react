import type { Route } from "./+types/home";
import { Welcome } from "../welcome/welcome";
import HeroSection from "~/components/home/HeroSection";
import LastetsNews from "~/components/home/LastetsNews";
import Season2025 from "~/components/home/Season2025";
import WeAreValorant from "~/components/home/WeAreValorant";
import YourAgents from "~/components/home/YourAgents";
import YourMaps from "~/components/home/YourMaps";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return (
    <>
      <HeroSection />
      <LastetsNews />
      <Season2025 />
      <WeAreValorant />
      <YourAgents />
      <YourMaps />
    </>
  );
}
