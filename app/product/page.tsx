import type { Metadata } from "next";
import { PageHero } from "@/components/site/page-hero";
import { PhaseTabs } from "@/components/product/phase-tabs";
import { ModuleConfigurator } from "@/components/product/module-configurator";
import { ProductModules } from "@/components/product/modules";
import { ProductCockpit } from "@/components/product/cockpit";
import { HomeDifferentiators } from "@/components/home/differentiators";
import { ProductSecurity } from "@/components/product/security";
import { CtaBlock } from "@/components/site/cta-block";

export const metadata: Metadata = {
  title: "Product",
  description:
    "One cockpit for the whole software lifecycle. Twelve specialised agents draft; humans approve every gate; modules drop in pre-wired.",
};

export default function ProductPage() {
  return (
    <>
      <PageHero
        eyebrow="Product"
        title="The cockpit your team will actually work in."
        lede="One window for every phase, every agent, and every artefact. Agents draft. Humans sign every gate. Nothing ships without your name on it."
      />
      <PhaseTabs />
      <ModuleConfigurator />
      <ProductModules />
      <ProductCockpit />
      <HomeDifferentiators
        eyebrow="What makes us different"
        title="Six things no one else has put in one platform."
        lede="Single-purpose AI tools each fix one slice. The lifecycle stays fragmented. Here is what changes when it's one orchestrator instead."
      />
      <ProductSecurity />
      <CtaBlock
        eyebrow="After the tour"
        title="Bring your next project into the cockpit."
        primaryLabel="Start orchestrating"
        secondaryLabel="Talk to the team"
      />
    </>
  );
}
