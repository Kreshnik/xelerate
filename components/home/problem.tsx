import { Section, SectionHeader } from "@/components/site/section";

const breakdowns = [
  "Broken handovers",
  "Inconsistent design",
  "Unclear requirements",
  "Poor test coverage",
  "Long iteration cycles",
];

export function HomeProblem() {
  return (
    <Section>
      <SectionHeader
        eyebrow="The problem"
        title="AI can write code. It can't run development."
        lede="Most AI tools optimise for one slice of the work — a prompt in, a snippet out. But software is a lifecycle. When AI only assists with coding, every handover in between still breaks."
      />

      <ul className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
        {breakdowns.map((label) => (
          <li
            key={label}
            className="flex items-center gap-3 rounded-lg border border-border bg-card px-4 py-3 text-sm"
          >
            <span
              aria-hidden
              className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-destructive/10 text-destructive"
            >
              ✕
            </span>
            <span className="text-foreground">{label}</span>
          </li>
        ))}
      </ul>
    </Section>
  );
}
