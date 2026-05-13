import type { Metadata } from "next";
import { PageHero } from "@/components/site/page-hero";
import { ProductCockpit } from "@/components/product/cockpit";
import { ProductModules } from "@/components/product/modules";
import { PhaseTabs } from "@/components/product/phase-tabs";
import { ProductSecurity } from "@/components/product/security";
import { CtaBlock } from "@/components/site/cta-block";

export const metadata: Metadata = {
  title: "Product",
  description:
    "The cockpit your engineering team works in: board, artefacts, and twelve agents in one window — with humans approving every gate.",
};

export default function ProductPage() {
  return (
    <>
      <PageHero
        eyebrow="Product"
        title="The cockpit your team will actually work in."
        lede="One window. Board on the left, the artefact in the centre, twelve agents reporting on the right. No tab-juggling, no screenshot-into-Notion — and a human approving every gate."
      />
      <ProductCockpit />
      <ProductModules />
      <PhaseTabs />
      <ProductSecurity />
      <CtaBlock
        eyebrow="See it in your stack"
        title="Bring your next project into the cockpit."
        lede="Walk through Xelerate with us on your real backlog — 30 minutes, no slides."
        primaryLabel="Start orchestrating"
        secondaryLabel="Talk to the team"
      />
    </>
  );
}
