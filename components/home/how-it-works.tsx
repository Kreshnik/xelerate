import Link from "next/link";
import { Section, SectionHeader } from "@/components/site/section";
import { LifecycleFlow } from "./lifecycle-flow";

export function HowItWorks() {
  return (
    <Section>
      <SectionHeader
        eyebrow="The solution"
        title="One platform to choreograph the whole lifecycle."
        lede={
          <>
            Five phases. Twelve specialised agents.{" "}
            <span className="font-semibold text-foreground">
              One Human Control Tower
            </span>{" "}
            approving every gate. The full per-phase breakdown lives on the{" "}
            <Link
              href="/product"
              className="font-semibold text-dutch underline-offset-4 hover:underline"
            >
              product page
            </Link>
            .
          </>
        }
      />

      <div className="mt-12">
        <LifecycleFlow />
      </div>
    </Section>
  );
}
