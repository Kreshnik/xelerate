import { Section, SectionHeader } from "@/components/site/section";

const items = [
  {
    n: "01",
    title: "One interface for the whole team",
    body: "Product, design, and engineering all work on the same project graph. No screenshot-into-Notion. No Loom-into-Jira. The artefact is the source of truth.",
  },
  {
    n: "02",
    title: "Best-model routing, day-zero updates",
    body: "The orchestrator picks Claude, GPT, Gemini — or your own — per step. New model drops Tuesday? Routing change, not codebase rewrite.",
  },
  {
    n: "03",
    title: "A skill library for every role",
    body: "Planning, spec-writing, design review, code execution, testing, UAT — the patterns good teams already use, codified and reusable.",
  },
  {
    n: "04",
    title: "Plug-and-play modules",
    body: "Auth, payments, multi-tenancy, monitoring — pre-built and agent-readable. Drop into a project; your agents already know how to wire them.",
  },
  {
    n: "05",
    title: "Self-learning + live observability",
    body: "Telemetry, errors, help-centre feedback flow back as ranked tasks with confidence scores. The next sprint partly writes itself.",
  },
  {
    n: "06",
    title: "Security built into every phase",
    body: "Static analysis, secret scanning, dependency CVEs, runtime monitoring — same board as functional work. Not a separate gate at the end.",
  },
];

export function HomeDifferentiators() {
  return (
    <Section className="border-y border-border bg-card/40">
      <SectionHeader
        eyebrow="Why we built this"
        title="Six things teams stop fighting once they switch."
        lede="Every gap a single-purpose AI tool leaves open — closed by one platform. Built for the way real teams ship software."
      />

      <ul className="mt-12 grid gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
        {items.map((item) => (
          <li key={item.n} className="bg-card p-7">
            <p className="text-xs font-medium tracking-[0.18em] text-muted-foreground uppercase">
              {item.n}
            </p>
            <h3 className="mt-3 text-lg font-semibold tracking-tight text-foreground">
              {item.title}
            </h3>
            <p className="mt-3 text-sm text-muted-foreground">{item.body}</p>
          </li>
        ))}
      </ul>
    </Section>
  );
}
