import { Section, SectionHeader } from "@/components/site/section";

const principles = [
  {
    n: "01",
    title: "Humans steer.",
    body: "Agents don't ship to production without a human approval gate. Every phase has a control. No silent autonomy, no surprise commits.",
  },
  {
    n: "02",
    title: "The lifecycle is the product.",
    body: "Code is one artefact among many. Briefs, designs, plans, tests, deploys, telemetry — they live in the same graph and hand off cleanly between roles.",
  },
  {
    n: "03",
    title: "Observable over magical.",
    body: "Every agent action lands on a board you can audit. If you can't see what an agent did, you can't trust it. We choose observable every time.",
  },
  {
    n: "04",
    title: "Best model for the step.",
    body: "Routing is config, not lock-in. Claude, GPT, Gemini — whichever serves the step. A new model drops Tuesday? Available Tuesday.",
  },
  {
    n: "05",
    title: "Boring infrastructure.",
    body: "Auth, audit, tenancy, backups, migrations. The unglamorous stuff is on by default — because the demo is easy, production is the work.",
  },
];

export function AboutPrinciples() {
  return (
    <Section>
      <SectionHeader
        eyebrow="How we build"
        title="Five rules every feature passes before it ships."
        lede="Not slogans on a wall. These are the filter we run new agents, new features, and new hires through — and the reason the product looks the way it does."
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
