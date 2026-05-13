import { Section, SectionHeader } from "@/components/site/section";

export function AboutOrigin() {
  return (
    <Section>
      <SectionHeader
        eyebrow="Origin"
        title={`Most "AI for developers" tools optimise for the wrong thing.`}
        lede="They sell you a faster keyboard. We've shipped enough software to know the keyboard wasn't the bottleneck."
      />

      <div className="mt-10 max-w-3xl space-y-4 text-base text-muted-foreground">
        <p>
          The bottleneck is the choreography — turning a vague brief into a working
          product without losing it in five handoffs, three competing tools, and one
          engineer&apos;s head.
        </p>
        <p className="text-foreground">So we built the orchestrator we wished we had.</p>
      </div>
    </Section>
  );
}
