import { ArrowRight } from "lucide-react";
import { Section, SectionHeader } from "@/components/site/section";

type Phase = {
  id: string;
  n: string;
  name: string;
  tag: string;
  body: string;
  intake: string;
  artefact: string;
  agents: string[];
  gate: string;
};

const phases: Phase[] = [
  {
    id: "phase-spark",
    n: "01",
    name: "Discovery",
    tag: "Frame the problem",
    body: "Briefs land in one inbox. Agents read the request, pick the right plug-in modules, draft an epic tree with acceptance criteria, and flag every ambiguity for a human before anything proceeds.",
    intake: "Brief, ticket, or Loom",
    artefact: "Structured brief · epic tree · acceptance criteria",
    agents: ["Product Intake", "Requirement"],
    gate: "Product approves the brief",
  },
  {
    id: "phase-shape",
    n: "02",
    name: "Design",
    tag: "Plan the build",
    body: "From approved brief to working design. Agents propose a component graph against your tokens, generate screens and states, and link every artefact back to the originating brief so nothing drifts in translation.",
    intake: "Approved brief",
    artefact: "Figma file · component graph · token set",
    agents: ["Architecture", "UI / UX"],
    gate: "Design lead approves screens & tokens",
  },
  {
    id: "phase-build",
    n: "03",
    name: "Development",
    tag: "Ship the code",
    body: "Engineers and execution agents work the queue against the approved design. AI-first architecture, standardised scaffolding, reviewer notes attached to every PR — humans spend their time on judgement, not boilerplate.",
    intake: "Approved design + tokens",
    artefact: "PR with diff, tests on branch, reviewer notes",
    agents: ["Spec · Plan", "Execute · Review"],
    gate: "Engineer approves the PR",
  },
  {
    id: "phase-launch",
    n: "04",
    name: "Testing",
    tag: "Prove it works",
    body: "Every PR triggers test generation and a regression walk. UAT bundles record acceptance criteria, failure modes, and sign-offs in one place — no spreadsheet hand-off, no missing evidence at release.",
    intake: "Approved PR",
    artefact: "UAT bundle · regression report · sign-off log",
    agents: ["Test · QA", "UAT"],
    gate: "QA + stakeholder sign-off",
  },
  {
    id: "phase-scale",
    n: "05",
    name: "Maintenance",
    tag: "Close the loop",
    body: "Production signals — errors, telemetry, support tickets — flow back as ranked tasks with confidence scores. The next brief partly writes itself. The loop closes, and the team is already on the next thing.",
    intake: "Live signals from production",
    artefact: "Ranked task queue · incident log · SLO digest",
    agents: ["Monitor", "Improve"],
    gate: "Product reviews the queue weekly",
  },
];

export function ArcPhases() {
  return (
    <Section className="border-t border-border">
      <SectionHeader
        eyebrow="The loop, end to end"
        title="One platform. Five phases. Humans on every gate."
        lede="Each phase produces one artefact. The artefact is the source of truth — and the only thing that moves to the next phase, after a human approves it."
      />

      <ol className="mt-12 space-y-6">
        {phases.map((phase, i) => (
          <li
            key={phase.id}
            id={phase.id}
            className="grid gap-8 rounded-xl border border-border bg-card p-8 lg:grid-cols-[180px_1fr_280px] scroll-mt-24"
          >
            <div>
              <p className="text-5xl font-semibold tracking-tight text-foreground">
                {phase.n}
              </p>
              <p className="mt-2 text-xl font-semibold tracking-tight text-foreground">
                {phase.name}
              </p>
              <p className="mt-1 text-xs font-medium tracking-[0.18em] text-muted-foreground uppercase">
                {phase.tag}
              </p>
            </div>

            <div>
              <p className="text-muted-foreground">{phase.body}</p>

              <dl className="mt-6 grid gap-x-6 gap-y-3 text-sm sm:grid-cols-[110px_1fr]">
                <dt className="text-xs font-medium tracking-[0.18em] text-muted-foreground uppercase">
                  Intake
                </dt>
                <dd className="text-foreground">{phase.intake}</dd>

                <dt className="text-xs font-medium tracking-[0.18em] text-muted-foreground uppercase">
                  Agents
                </dt>
                <dd className="flex flex-wrap gap-1.5">
                  {phase.agents.map((a) => (
                    <span
                      key={a}
                      className="rounded-md border border-border bg-background px-2 py-0.5 font-mono text-xs text-foreground"
                    >
                      {a}
                    </span>
                  ))}
                </dd>

                <dt className="text-xs font-medium tracking-[0.18em] text-muted-foreground uppercase">
                  Artefact
                </dt>
                <dd className="font-mono text-sm text-foreground">
                  {phase.artefact}
                </dd>
              </dl>
            </div>

            <div className="rounded-lg border border-dashed border-border bg-background/40 p-5">
              <p className="text-xs font-medium tracking-[0.18em] text-muted-foreground uppercase">
                Human gate
              </p>
              <p className="mt-3 text-base font-semibold tracking-tight text-foreground">
                {phase.gate}
              </p>
              <p className="mt-3 text-xs text-muted-foreground">
                Nothing moves to{" "}
                {i < phases.length - 1
                  ? `Phase ${phases[i + 1].n} · ${phases[i + 1].name}`
                  : "the next brief"}{" "}
                without explicit approval.
              </p>
            </div>
          </li>
        ))}
      </ol>

      <p className="mt-10 inline-flex items-center gap-2 text-sm text-muted-foreground">
        Production signals from Phase 05 feed the next brief in Phase 01.
        <ArrowRight className="size-4" aria-hidden="true" />
        The loop closes.
      </p>
    </Section>
  );
}
