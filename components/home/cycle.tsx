import { Section, SectionHeader } from "@/components/site/section";
import { DayCycleTimeline } from "./day-cycle-timeline";

const humanWork = [
  { verb: "Review", body: "overnight PRs, designs, and test runs" },
  { verb: "Steer", body: "priorities — redirect, pause, or escalate agents" },
  { verb: "Design", body: "— research, talk to customers, sketch the next thing" },
];

const agentWork = [
  { verb: "Build", body: "— implement queued stories with reviewer notes attached" },
  { verb: "Test & QA", body: "— generate cases, run regressions, triage failures" },
  { verb: "Monitor & Prep", body: "— watch prod, queue tomorrow's work" },
];

export function HomeCycle() {
  return (
    <Section>
      <SectionHeader
        eyebrow="Development cycle"
        title="Your team works 9 to 5. Your agents run 24/7."
        lede="Humans steer and review during the day. Agents build, test, and watch production overnight. Every morning, the next decision is already queued up."
      />

      <div className="mt-12">
        <DayCycleTimeline />
      </div>

      <div className="mt-8 grid gap-6 lg:grid-cols-2">
        <article className="rounded-xl border border-border bg-card p-8">
          <h3 className="text-base font-semibold tracking-tight text-foreground">
            During the day, humans…
          </h3>
          <ul className="mt-5 space-y-3 text-sm">
            {humanWork.map((row) => (
              <li key={row.verb} className="flex gap-3">
                <span className="font-medium text-foreground">{row.verb}</span>
                <span className="text-muted-foreground">{row.body}</span>
              </li>
            ))}
          </ul>
        </article>

        <article className="rounded-xl border border-border bg-foreground p-8 text-background">
          <h3 className="text-base font-semibold tracking-tight">
            All hours, agents…
          </h3>
          <ul className="mt-5 space-y-3 text-sm">
            {agentWork.map((row) => (
              <li key={row.verb} className="flex gap-3">
                <span className="font-medium">{row.verb}</span>
                <span className="text-background/70">{row.body}</span>
              </li>
            ))}
          </ul>
        </article>
      </div>
    </Section>
  );
}
