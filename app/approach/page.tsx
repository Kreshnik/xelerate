import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/site/page-hero";
import { ArcPhases } from "@/components/approach/arc-phases";
import { ApproachEntryPoints } from "@/components/approach/entry-points";
import { CtaBlock } from "@/components/site/cta-block";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Approach",
  description:
    "How Xelerate runs software end-to-end: five lifecycle phases, twelve specialised agents, and a human gate between every phase. The artefact is the source of truth.",
};

export default function ApproachPage() {
  return (
    <>
      <PageHero
        eyebrow="The method"
        title="Five phases. Twelve agents. A human gate between every one."
        lede="Discovery, Design, Development, Testing, Maintenance — one platform runs the full loop. Agents do the work in each phase; your team approves the artefact before it moves to the next."
      >
        <div className="flex flex-wrap items-center gap-3">
          <Button asChild variant="brand" size="lg">
            <Link href="/contact">Start orchestrating</Link>
          </Button>
          <Button asChild variant="ghost" size="lg">
            <Link href="#phase-spark">Walk the lifecycle</Link>
          </Button>
        </div>
      </PageHero>
      <ArcPhases />
      <ApproachEntryPoints />
      <CtaBlock
        eyebrow="Run it on your backlog"
        title="Bring one feature through the full loop."
        lede="Pick a brief from your roadmap. We'll walk it through Discovery → Maintenance with you in 30 minutes — no slides."
        primaryLabel="Start orchestrating"
        secondaryLabel="See the product"
        secondaryHref="/product"
      />
    </>
  );
}
