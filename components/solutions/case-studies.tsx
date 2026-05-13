import { Section, SectionHeader } from "@/components/site/section";

const cases = [
  {
    tag: "Build from scratch · Gaming",
    headline: "3-person team to public beta in 7 weeks.",
    body: "A founding team shipped a multiplayer prototype without hiring a platform engineer. Agents wired the backend, infra and deploys; humans owned the gameplay.",
    metric: "7 wks",
    metricLabel: "Design → public beta",
  },
  {
    tag: "Upgrade · Civic-tech",
    headline: "Replatformed a live tool with zero downtime.",
    body: "An ageing internal system was rebuilt on a modern stack while it kept serving real users. Agents handled the rewrite with traceable diffs; humans owned the cut-over.",
    metric: "0",
    metricLabel: "Days of downtime",
  },
  {
    tag: "Upgrade · Enterprise ops",
    headline: "Same team, 4× the throughput.",
    body: "A tangle of spreadsheets became a real operations product. Agents drafted; humans approved. The team didn't grow — the surface area they could hold did.",
    metric: "4×",
    metricLabel: "Team throughput",
  },
];

export function SolutionsCaseStudies() {
  return (
    <Section>
      <SectionHeader
        eyebrow="Proof"
        title="Real teams, real ship dates."
        lede="Three live customers running on the platform today. Each shipped a working product with a fraction of the engineering footprint."
      />

      <ul className="mt-12 grid gap-6 lg:grid-cols-3">
        {cases.map((c) => (
          <li
            key={c.headline}
            className="flex h-full flex-col rounded-xl border border-border bg-card p-7"
          >
            <p className="text-xs font-medium tracking-[0.18em] text-muted-foreground uppercase">
              {c.tag}
            </p>
            <h3 className="mt-4 text-lg font-semibold tracking-tight text-balance text-foreground">
              {c.headline}
            </h3>
            <p className="mt-3 text-sm text-muted-foreground">{c.body}</p>
            <div className="mt-auto flex items-end justify-between border-t border-border pt-5">
              <div>
                <p className="text-3xl font-semibold tracking-tight text-foreground">
                  {c.metric}
                </p>
                <p className="mt-1 text-xs tracking-[0.12em] text-muted-foreground uppercase">
                  {c.metricLabel}
                </p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </Section>
  );
}
