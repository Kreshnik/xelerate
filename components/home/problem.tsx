import { X } from "lucide-react";
import { Section, SectionHeader } from "@/components/site/section";

const breakdowns = [
  {
    title: "Briefs lose fidelity",
    body: "Notion doc → Figma file → Jira ticket → PR. Every hop drops context.",
  },
  {
    title: "Coding agents miss the lifecycle",
    body: "They write code, but skip the spec, the test plan, and the handoff.",
  },
  {
    title: "Tests and QA stay manual",
    body: "Coverage drifts. Regressions surface in production, not in CI.",
  },
  {
    title: "Production signals never come back",
    body: "Errors, telemetry, support tickets sit outside the planning loop.",
  },
];

export function HomeProblem() {
  return (
    <Section className="border-y border-border bg-card/40">
      <SectionHeader
        eyebrow="The problem"
        title="AI can write code. It can't run development."
        lede="Single-purpose AI tools optimise for one slice — a prompt in, a snippet out. But software is a lifecycle, and every handover between briefs, designs, code, tests, and signals is still breaking by hand."
      />

      <ul className="mt-12 grid gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-2">
        {breakdowns.map((item) => (
          <li
            key={item.title}
            className="group relative bg-card p-7 transition-colors hover:bg-card/70"
          >
            <div
              aria-hidden
              className="flex items-center gap-2 text-foreground/40"
            >
              <span className="h-px w-8 border-t border-dashed border-current" />
              <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-destructive/10 text-destructive ring-1 ring-destructive/15">
                <X className="size-3.5" strokeWidth={2.5} />
              </span>
              <span className="h-px flex-1 border-t border-dashed border-current" />
            </div>
            <h3 className="mt-5 text-lg font-semibold tracking-tight text-foreground">
              {item.title}
            </h3>
            <p className="mt-2 text-sm text-muted-foreground">{item.body}</p>
          </li>
        ))}
      </ul>
    </Section>
  );
}
