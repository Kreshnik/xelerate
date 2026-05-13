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
    <Section className="bg-card/40 border-y border-border">
      <SectionHeader
        eyebrow="The problem"
        title="AI can write code. It can't run development."
        lede="Single-purpose AI tools optimise for one slice — a prompt in, a snippet out. But software is a lifecycle, and every handover between briefs, designs, code, tests, and signals is still breaking by hand."
      />

      <ul className="mt-12 grid gap-4 sm:grid-cols-2">
        {breakdowns.map((item) => (
          <li
            key={item.title}
            className="rounded-xl border border-border bg-card p-6"
          >
            <p className="text-base font-semibold tracking-tight text-foreground">
              {item.title}
            </p>
            <p className="mt-2 text-sm text-muted-foreground">{item.body}</p>
          </li>
        ))}
      </ul>
    </Section>
  );
}
