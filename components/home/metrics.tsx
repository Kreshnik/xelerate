import { Section, SectionHeader } from "@/components/site/section";

const metrics = [
  {
    value: "5×",
    label: "Effective output per developer",
    note: "Feature delivery shifts from ~9 days to ~2 days.",
  },
  {
    value: "600+",
    label: "Validated tests in 48h",
    note: "Coverage from ~35% → ~85% on the same codebase.",
  },
  {
    value: "75%",
    label: "Time saved on upgrades",
    note: "Major framework migrations from ~2 weeks → ~2 days.",
  },
];

export function HomeMetrics() {
  return (
    <Section>
      <SectionHeader
        eyebrow="Why we built this"
        title="Lifecycle orchestration, by the numbers."
        lede="Internal benchmarks comparing teams running Xelerate against the same teams shipping with point-tools alone. KPIs revisited every quarter."
      />

      <dl className="mt-12 grid gap-6 lg:grid-cols-3">
        {metrics.map((m) => (
          <div
            key={m.value}
            className="rounded-xl border border-border bg-card p-8"
          >
            <dt className="text-5xl font-semibold tracking-tight text-foreground">
              {m.value}
            </dt>
            <dd className="mt-4">
              <p className="text-base font-medium text-foreground">{m.label}</p>
              <p className="mt-2 text-sm text-muted-foreground">{m.note}</p>
            </dd>
          </div>
        ))}
      </dl>
    </Section>
  );
}
