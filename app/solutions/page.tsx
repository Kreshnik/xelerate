import type { Metadata } from "next";
import { PageHero } from "@/components/site/page-hero";
import { SolutionsDna } from "@/components/solutions/dna";
import { SolutionsIndustries } from "@/components/solutions/industries";
import { SolutionsCaseStudies } from "@/components/solutions/case-studies";
import { SolutionsTwoWaysIn } from "@/components/solutions/two-ways-in";
import { CtaBlock } from "@/components/site/cta-block";

export const metadata: Metadata = {
  title: "Solutions",
  description:
    "Your process, voice, and IP stay yours. The control tower, agents and modules do the heavy lifting underneath.",
};

export default function SolutionsPage() {
  return (
    <>
      <PageHero
        eyebrow="Solutions"
        title="How we build around your DNA and process."
        lede="Your team and your customers drive the process. Our technology and partner stack do the heavy lifting under the surface — so your IP is what gets compounded."
      />
      <SolutionsDna />
      <SolutionsIndustries />
      <SolutionsCaseStudies />
      <SolutionsTwoWaysIn />
      <CtaBlock title="Tell us about your project." />
    </>
  );
}
