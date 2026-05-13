import { Section, SectionHeader } from "@/components/site/section";

export function AboutOrigin() {
  return (
    <Section className="border-y border-border bg-card/40">
      <SectionHeader
        eyebrow="Why we exist"
        title={`Most "AI for developers" tools sell you a faster keyboard.`}
        lede="The keyboard was never the bottleneck. The bottleneck is choreography — turning a vague brief into a working product without losing it in five handoffs, three competing tools, and one engineer's head."
      />

      <div className="mt-10 max-w-3xl space-y-5 text-base text-muted-foreground">
        <p>
          We&apos;ve all watched it happen. A roadmap item starts in Notion, gets a spec in
          Linear, a plan in Figma, code in GitHub, a deploy in Vercel, telemetry in
          Datadog. Each tool is fine in isolation. The gaps between them are where
          velocity dies and quality goes silent.
        </p>
        <p className="text-foreground">
          Xelerate is the orchestrator we wished we had — one graph for the whole
          lifecycle, agents that do the legwork, humans on every consequential decision.
        </p>
      </div>
    </Section>
  );
}
