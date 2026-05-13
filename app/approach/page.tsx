import type { Metadata } from "next";
import { PageHero } from "@/components/site/page-hero";
import { ArcPhases } from "@/components/approach/arc-phases";
import { ApproachEcosystem } from "@/components/approach/ecosystem";
import { ApproachEntryPoints } from "@/components/approach/entry-points";
import { CtaBlock } from "@/components/site/cta-block";

export const metadata: Metadata = {
  title: "Approach",
  description:
    "The Arc method: how we take founders and organisations from idea to scale, powered by AI-driven tooling and a team that activates at every stage.",
};

export default function ApproachPage() {
  return (
    <>
      <PageHero
        eyebrow="The Arc method"
        title="Every great saga follows an arc."
        lede="A story has a beginning and an end — but it's the journey that defines it. The Arc is our method for taking founders and organisations from where they are to where they need to be, powered by AI-driven tooling and a team that activates at every stage."
      />
      <ArcPhases />
      <ApproachEcosystem />
      <ApproachEntryPoints />
      <CtaBlock
        eyebrow="Start your arc"
        title="Ready to write your saga?"
        lede="Tell us where you are. We'll tell you where The Arc can take you."
        primaryLabel="Let's talk"
        secondaryLabel="See our sagas"
        secondaryHref="/solutions"
        footnote="● One team, idea to scale."
      />
    </>
  );
}
