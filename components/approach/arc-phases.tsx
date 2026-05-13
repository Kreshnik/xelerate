import { Section, SectionHeader } from "@/components/site/section";

const phases = [
  {
    id: "phase-spark",
    n: "01",
    name: "Spark",
    tag: "Validate",
    body: "We pressure-test the idea fast. Product logic, target customer, pricing, competitive landscape — AI-guided analysis surfaces what's working and what needs rethinking before you build the wrong thing.",
    chips: ["AI market analysis", "Product audit", "Pricing models", "Customer fit", "Expert coaches"],
    before: "Months",
    after: "2–5 days",
    afterLabel: "Validation complete",
  },
  {
    id: "phase-shape",
    n: "02",
    name: "Shape",
    tag: "Design",
    body: "From validated idea to tangible product — fast. AI-driven design tooling generates mockups in days. A first interactive version within 2–3 weeks. Real screens, real flows, real feedback.",
    chips: ["AI design system", "Rapid prototyping", "UX flows", "Design team", "Figma-to-code"],
    before: "4–6 weeks",
    after: "2–3 wks",
    afterLabel: "First version live",
  },
  {
    id: "phase-build",
    n: "03",
    name: "Build",
    tag: "Engineering",
    body: "Our technical team and engineering network execute against the design — AI-first architecture from line one. Standardised tooling handles the scaffolding; engineers focus on what actually matters.",
    chips: ["AI-first stack", "Engineering network", "Automated testing", "CI/CD pipeline", "Architecture review"],
    before: "3–6 months",
    after: "4–6 wks",
    afterLabel: "To production",
  },
  {
    id: "phase-launch",
    n: "04",
    name: "Launch",
    tag: "Go-to-market",
    body: "Building is only half the job. We make sure what you've built actually lands. Brand, narrative, positioning, channel strategy — we shape the story and the launch plan.",
    chips: ["Brand & identity", "GTM strategy", "Positioning", "Content & narrative", "Channel activation"],
    before: "Quarters",
    after: "Day one",
    afterLabel: "Market-ready",
  },
  {
    id: "phase-scale",
    n: "05",
    name: "Scale",
    tag: "Growth",
    body: "This is where the full network activates. Coaches who've scaled companies before, investors ready to back the next stage, a talent and operator network that plugs directly into your team.",
    chips: ["Growth coaches", "Investor network", "Talent pipeline", "Ongoing advisory", "Next-round prep"],
    before: "Hand-off",
    after: "Long-term",
    afterLabel: "Partnership",
  },
];

export function ArcPhases() {
  return (
    <Section className="border-t border-border">
      <SectionHeader
        eyebrow="Idea → Scale"
        title="One team, every phase of the arc."
        lede="The Arc is modular. Engage at any phase and stay in the saga through Scale."
      />

      <ol className="mt-12 space-y-6">
        {phases.map((phase) => (
          <li
            key={phase.id}
            id={phase.id}
            className="grid gap-6 rounded-xl border border-border bg-card p-8 lg:grid-cols-[200px_1fr_220px]"
          >
            <div>
              <p className="text-5xl font-semibold tracking-tight text-foreground">
                {phase.n}
              </p>
              <p className="mt-2 text-xl font-semibold text-foreground">
                {phase.name}
              </p>
              <p className="mt-1 text-xs font-medium tracking-[0.18em] text-muted-foreground uppercase">
                {phase.tag}
              </p>
            </div>

            <div>
              <p className="text-muted-foreground">{phase.body}</p>
              <ul className="mt-5 flex flex-wrap gap-2 text-xs">
                {phase.chips.map((chip) => (
                  <li
                    key={chip}
                    className="rounded-md border border-border bg-background px-2.5 py-1 font-medium tracking-wider text-foreground uppercase"
                  >
                    {chip}
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-lg border border-dashed border-border p-4">
              <p className="text-xs font-medium tracking-[0.18em] text-muted-foreground uppercase">
                Before · {phase.before}
              </p>
              <p className="mt-3 text-3xl font-semibold tracking-tight text-foreground">
                {phase.after}
              </p>
              <p className="mt-1 text-xs font-medium tracking-[0.18em] text-foreground uppercase">
                {phase.afterLabel}
              </p>
            </div>
          </li>
        ))}
      </ol>
    </Section>
  );
}
