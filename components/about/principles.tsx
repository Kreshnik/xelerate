import { Section, SectionHeader } from "@/components/site/section";

const principles = [
  {
    n: "01 — Humans steer",
    title: "Humans steer.",
    body: "Agents don't ship to production without a human approval gate. Every phase has a control. No silent autonomy, no surprise commits.",
  },
  {
    n: "02 — Lifecycle product",
    title: "The lifecycle is the product.",
    body: "Code is one artefact among many. Briefs, designs, plans, tests, deploys, telemetry — they all live in the same graph, handed off cleanly between roles.",
  },
  {
    n: "03 — Observable over magical",
    title: "Observable over magical.",
    body: "Every agent action shows up on a board you can audit. If you can't see what an agent did, you can't trust it. We choose observable every time.",
  },
  {
    n: "04 — Best model",
    title: "Best model for the step.",
    body: "Routing is config, not lock-in. Claude, GPT, Gemini — whichever serves the step. New model drops Tuesday? Available Tuesday.",
  },
  {
    n: "05 — Boring infrastructure",
    title: "Boring infrastructure.",
    body: "Auth, audit, tenancy, security, backups, migrations. The unglamorous stuff is on by default — because the demo is easy, production is the work.",
  },
];

export function AboutPrinciples() {
  return (
    <Section className="border-y border-border bg-card/40">
      <SectionHeader
        eyebrow="What we believe"
        title="Five principles. Every product decision passes them."
        lede="We didn't write these on a wall after the fact. They're the filter we run new features, new agents, and new hires through, before anything ships."
      />

      <ol className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {principles.map((p) => (
          <li key={p.n} className="rounded-xl border border-border bg-card p-7">
            <p className="text-xs font-medium tracking-[0.18em] text-muted-foreground uppercase">
              {p.n}
            </p>
            <h3 className="mt-3 text-lg font-semibold tracking-tight text-foreground">
              {p.title}
            </h3>
            <p className="mt-3 text-sm text-muted-foreground">{p.body}</p>
          </li>
        ))}
      </ol>
    </Section>
  );
}
