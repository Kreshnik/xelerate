import { HomeHero } from "@/components/home/hero";
import { HomeProblem } from "@/components/home/problem";
import { HowItWorks } from "@/components/home/how-it-works";
import { HomeCycle } from "@/components/home/cycle";
import { HomeMetrics } from "@/components/home/metrics";
import { HomeDifferentiators } from "@/components/home/differentiators";
import { CtaBlock } from "@/components/site/cta-block";

export default function HomePage() {
  return (
    <>
      <HomeHero />
      <HomeProblem />
      <HowItWorks />
      <HomeCycle />
      <HomeMetrics />
      <HomeDifferentiators limit={3} />
      <CtaBlock
        title="Run your next project from one control tower."
        lede="Free to start. No credit card. Bring your own model keys or use ours."
        primaryLabel="Talk to the team"
        secondaryHref="/product"
        secondaryLabel="See the product"
      />
    </>
  );
}
