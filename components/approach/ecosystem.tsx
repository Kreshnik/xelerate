import { Section, SectionHeader } from "@/components/site/section";

const groups = [
  {
    name: "Core Team",
    body: "Designers, engineers, and product operators who have built and shipped across multiple ventures. They embed in your process — not just advise from the outside.",
  },
  {
    name: "Coaches",
    body: "Experienced operators who have scaled companies across different industries and stages. Specific, actionable guidance — not generic frameworks.",
  },
  {
    name: "Network",
    body: "A curated community of founders, engineers, designers, and operators built over a decade. The people who make the difference when you need them most.",
  },
  {
    name: "Investors",
    body: "Capital that follows conviction. Our investor network backs the sagas we believe in — and they come with relationships, not just money.",
  },
];

export function ApproachEcosystem() {
  return (
    <Section className="border-y border-border bg-card/40">
      <SectionHeader
        eyebrow="Who activates with you"
        title="Not one person. An ecosystem."
        lede="The Arc is delivered by people, not just tooling. A core team that embeds in your process, coaches who've done it before, a network built over a decade, and investors who back the saga."
      />

      <ul className="mt-12 grid gap-6 lg:grid-cols-4">
        {groups.map((g) => (
          <li key={g.name} className="rounded-xl border border-border bg-card p-7">
            <h3 className="text-lg font-semibold tracking-tight text-foreground">
              {g.name}
            </h3>
            <p className="mt-3 text-sm text-muted-foreground">{g.body}</p>
          </li>
        ))}
      </ul>
    </Section>
  );
}
