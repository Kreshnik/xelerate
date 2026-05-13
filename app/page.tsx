import { HomeHero } from "@/components/home/hero";
import { HomeProblem } from "@/components/home/problem";
import { HomeSolution } from "@/components/home/solution";
import { HomeCycle } from "@/components/home/cycle";
import { HomeDifferentiators } from "@/components/home/differentiators";
import { HomeMetrics } from "@/components/home/metrics";
import { CtaBlock } from "@/components/site/cta-block";

export default function HomePage() {
  return (
    <>
      <HomeHero />
      <HomeProblem />
      <HomeSolution />
      <HomeCycle />
      <HomeDifferentiators />
      <HomeMetrics />
      <CtaBlock
        title="Run your next project from one control tower."
        lede="Free to start. No credit card. BYO model keys or use ours."
        primaryLabel="Talk to the team"
        secondaryLabel="Watch the 2-min tour"
      />
    </>
  );
}
