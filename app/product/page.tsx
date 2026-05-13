import type { Metadata } from "next";
import { PageHero } from "@/components/site/page-hero";
import { PhaseTabs } from "@/components/product/phase-tabs";
import { ProductModules } from "@/components/product/modules";
import { ProductCockpit } from "@/components/product/cockpit";
import { HomeDifferentiators } from "@/components/home/differentiators";
import { ProductSecurity } from "@/components/product/security";
import { CtaBlock } from "@/components/site/cta-block";

export const metadata: Metadata = {
  title: "Product",
  description:
    "Five phases, twelve specialised agents, one human control tower — wired together so artefacts hand off cleanly between roles.",
};

export default function ProductPage() {
  return (
    <>
      <PageHero
        eyebrow="Product"
        title="The platform that orchestrates the entire software lifecycle."
        lede="Five phases, twelve specialised agents, one human control tower — wired together so artefacts hand off cleanly between roles, with the same source of truth."
      />
      <PhaseTabs />
      <ProductModules />
      <ProductCockpit />
      <HomeDifferentiators />
      <ProductSecurity />
      <CtaBlock
        title="One cockpit. Twelve agents. Your lifecycle."
        primaryLabel="Start orchestrating"
        secondaryLabel="Talk to the team"
      />
    </>
  );
}
