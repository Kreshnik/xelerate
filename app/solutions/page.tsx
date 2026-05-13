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
    "Two ways teams ship with Xelerate: a working v1 from scratch, or a clean upgrade of what's already in production. Your IP stays yours.",
};

export default function SolutionsPage() {
  return (
    <>
      <PageHero
        eyebrow="Solutions"
        title="New product, or next version — we start where you are."
        lede="Most teams arrive in one of two situations. We've shipped enough of both to know what the first four weeks need to look like. Your IP, voice, and process stay yours; the platform, agents, and partner stack do the heavy lifting underneath."
      />
      <SolutionsTwoWaysIn />
      <SolutionsIndustries />
      <SolutionsCaseStudies />
      <SolutionsDna />
      <CtaBlock
        title="Tell us where you are. We'll tell you what week one looks like."
        lede="Whether you're starting from a Figma file or a five-year-old codebase, the first reply lands within one business day."
        primaryLabel="Start a project"
        secondaryLabel="Talk to the team"
      />
    </>
  );
}
