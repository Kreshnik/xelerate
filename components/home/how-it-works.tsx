import { Section, SectionHeader } from "@/components/site/section";
import { exampleTask } from "@/lib/lifecycle-data";
import { LifecycleFlow } from "./lifecycle-flow";

export function HowItWorks() {
  return (
    <Section>
      <SectionHeader
        eyebrow="How it works"
        title="Five agents. One feature. A trail of artefacts."
        lede={
          <>
            Every feature produces a chain of artefacts — brief → spec → PR →
            test report → signal — that hand off cleanly between phases. Here is
            one we shipped:{" "}
            <span className="font-mono text-foreground">{exampleTask}</span>.
          </>
        }
      />

      <div className="mt-12">
        <LifecycleFlow />
      </div>
    </Section>
  );
}
