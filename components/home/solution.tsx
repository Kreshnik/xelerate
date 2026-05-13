import Link from "next/link";
import { Section, SectionHeader } from "@/components/site/section";

const phases = [
  {
    step: "01 · Discovery",
    title: "Capture intent",
    agents: ["Product Intake", "Requirement"],
    summary: "Brief → structured epics",
    anchor: "phase-spark",
  },
  {
    step: "02 · Design",
    title: "Shape the build",
    agents: ["Architecture", "UI / UX"],
    summary: "Component graph + tokens",
    anchor: "phase-shape",
  },
  {
    step: "03 · Development",
    title: "Ship the work",
    agents: ["Spec · Plan", "Execute · Review"],
    summary: "Tasks → PRs with notes",
    anchor: "phase-build",
  },
  {
    step: "04 · Testing",
    title: "Prove it works",
    agents: ["Test · QA", "UAT"],
    summary: "Cases, regressions, triage",
    anchor: "phase-launch",
  },
  {
    step: "05 · Maintenance",
    title: "Keep it running",
    agents: ["Monitor", "Improve"],
    summary: "Signals → next tasks",
    anchor: "phase-scale",
  },
];

export function HomeSolution() {
  return (
    <Section className="bg-card/40 border-y border-border">
      <SectionHeader
        eyebrow="The solution"
        title="One platform to choreograph the whole lifecycle."
        lede={
          <>
            Five phases. Twelve specialised agents.{" "}
            <span className="text-foreground font-medium">One Human Control Tower</span>{" "}
            approving every gate. The full per-phase breakdown lives on the{" "}
            <Link href="/product" className="text-foreground underline-offset-4 hover:underline">
              product page
            </Link>
            .
          </>
        }
      />

      <ul className="mt-12 grid gap-4 lg:grid-cols-5">
        {phases.map((p) => (
          <li key={p.step}>
            <Link
              href={`/approach#${p.anchor}`}
              className="group block h-full rounded-xl border border-border bg-card p-5 transition-colors hover:border-foreground/40"
            >
              <p className="text-[10px] font-medium tracking-[0.18em] text-muted-foreground uppercase">
                {p.step}
              </p>
              <p className="mt-3 text-lg font-semibold text-foreground">{p.title}</p>
              <ul className="mt-4 space-y-1 text-sm text-muted-foreground">
                {p.agents.map((a) => (
                  <li key={a}>{a}</li>
                ))}
              </ul>
              <p className="mt-6 text-xs text-foreground/70">{p.summary}</p>
            </Link>
          </li>
        ))}
      </ul>

      <div className="mt-10 flex flex-wrap gap-x-6 gap-y-2 text-xs tracking-[0.18em] text-muted-foreground uppercase">
        <span>12 specialised agents</span>
        <span>One control plane</span>
        <span>Humans approve every gate</span>
      </div>
    </Section>
  );
}
