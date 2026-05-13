import { Section, SectionHeader } from "@/components/site/section";
import { LifecycleFlow } from "./lifecycle-flow";

export function HowItWorks() {
  return (
    <Section>
      <SectionHeader
        eyebrow="How it works"
        title="Five agents. One feature. No handoff lost."
        lede="Each phase hands a signed artefact to the next, and production signal feeds the next discovery cycle — so work moves between roles without dropping context."
      />

      <div className="mt-12">
        <LifecycleFlow />
      </div>
    </Section>
  );
}
