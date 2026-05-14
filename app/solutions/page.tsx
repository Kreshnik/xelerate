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
    "Whether you're starting a new product or upgrading one that's creaking, Xelerate fits the work to your team, your stack, and your industry.",
};

export default function SolutionsPage() {
  return (
    <>
      <PageHero
        eyebrow="Solutions"
        title="Built around your team, your stack, your industry."
        lede="You bring the product idea, the customer relationship, the brand calls. We bring the platform, the agent fleet and a partner stack that's already wired in."
      />
      <SolutionsTwoWaysIn />
      <SolutionsDna />
      <SolutionsIndustries />
      <SolutionsCaseStudies />
      <CtaBlock
        eyebrow="Ready?"
        title="Tell us about your project."
        lede="Reply within 1 business day · Amsterdam, NL · Remote-friendly."
        primaryLabel="Start a project"
        secondaryLabel="Talk to the team"
      />
    </>
  );
}
