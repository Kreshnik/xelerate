import type { ReactNode } from "react";
import { ArrowRight } from "lucide-react";
import { Section, SectionHeader } from "@/components/site/section";

type Breakdown = {
  title: string;
  body: string;
  mock: "chain" | "checklist" | "report" | "trend";
};

const breakdowns: Breakdown[] = [
  {
    title: "Briefs lose fidelity",
    body: "Notion doc → Figma file → Jira ticket → PR. Every hop drops context.",
    mock: "chain",
  },
  {
    title: "Coding agents miss the lifecycle",
    body: "They write code, but skip the spec, the test plan, and the handoff.",
    mock: "checklist",
  },
  {
    title: "Tests and QA stay manual",
    body: "Coverage drifts. Regressions surface in production, not in CI.",
    mock: "report",
  },
  {
    title: "Production signals never come back",
    body: "Errors, telemetry, support tickets sit outside the planning loop.",
    mock: "trend",
  },
];

function MockChain() {
  const links = ["Notion", "Figma", "Jira", "PR"];
  return (
    <div className="flex flex-wrap items-center gap-1.5 font-mono text-[10px]">
      {links.map((label, i) => (
        <span key={label} className="inline-flex items-center gap-1.5">
          <span className="rounded-md border border-border bg-background px-2 py-0.5 text-foreground">
            {label}
          </span>
          {i < links.length - 1 && (
            <ArrowRight
              className={
                "size-3 " +
                (i === 1 ? "text-destructive" : "text-muted-foreground/40")
              }
              strokeWidth={i === 1 ? 2.5 : 1.5}
              style={i === 1 ? { strokeDasharray: "3 3" } : undefined}
            />
          )}
        </span>
      ))}
      <span className="ml-1 text-[10px] text-destructive">drop</span>
    </div>
  );
}

function MockChecklist() {
  const rows = [
    { label: "spec.linked", state: "missing" },
    { label: "tests.attached", state: "missing" },
    { label: "uat.bundle", state: "missing" },
    { label: "pr.opened", state: "ok" },
  ];
  return (
    <ul className="space-y-1 font-mono text-[11px]">
      {rows.map((row) => (
        <li key={row.label} className="flex items-center gap-2">
          <span
            className={
              "inline-flex h-3 w-3 items-center justify-center rounded-sm " +
              (row.state === "ok"
                ? "bg-emerald-500/15 text-emerald-600"
                : "bg-destructive/15 text-destructive")
            }
          >
            {row.state === "ok" ? "✓" : "×"}
          </span>
          <span
            className={
              row.state === "ok" ? "text-foreground" : "text-muted-foreground"
            }
          >
            {row.label}
          </span>
        </li>
      ))}
    </ul>
  );
}

function MockReport() {
  const rows = [
    { name: "build", pass: true },
    { name: "test:billing", pass: false },
    { name: "test:refunds", pass: false },
    { name: "test:auth", pass: false },
  ];
  return (
    <div className="rounded-md border border-border bg-background p-3 font-mono text-[10px]">
      <div className="flex items-center justify-between text-muted-foreground">
        <span>CI · run #482</span>
        <span className="text-destructive">3 failed</span>
      </div>
      <ul className="mt-2 space-y-0.5">
        {rows.map((r) => (
          <li key={r.name} className="flex items-center gap-2">
            <span
              className={"w-3 " + (r.pass ? "text-emerald-600" : "text-destructive")}
            >
              {r.pass ? "✓" : "×"}
            </span>
            <span className={r.pass ? "text-foreground" : "text-muted-foreground"}>
              {r.name}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function MockTrend() {
  return (
    <div className="flex h-full flex-col gap-2">
      <div className="flex items-end justify-between text-[10px] text-muted-foreground">
        <span className="font-mono">errors / min</span>
        <span className="font-mono text-destructive">+47% · 0 tickets</span>
      </div>
      <svg
        viewBox="0 0 200 56"
        className="w-full flex-1 text-destructive"
        preserveAspectRatio="none"
        aria-hidden
      >
        <path
          d="M0 50 L30 46 L55 44 L82 38 L105 30 L128 24 L150 16 L175 8 L200 4"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M0 50 L30 46 L55 44 L82 38 L105 30 L128 24 L150 16 L175 8 L200 4 L200 56 L0 56 Z"
          fill="currentColor"
          opacity={0.08}
        />
      </svg>
    </div>
  );
}

const mocks: Record<Breakdown["mock"], ReactNode> = {
  chain: <MockChain />,
  checklist: <MockChecklist />,
  report: <MockReport />,
  trend: <MockTrend />,
};

export function HomeProblem() {
  return (
    <Section className="border-y border-border bg-card/40">
      <SectionHeader
        eyebrow="The problem"
        title="AI can write code. It can't run development."
        lede="Single-purpose AI tools optimise for one slice — a prompt in, a snippet out. But software is a lifecycle, and every handover between briefs, designs, code, tests, and signals is still breaking by hand."
      />

      <ul className="mt-12 grid gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-2">
        {breakdowns.map((item) => (
          <li
            key={item.title}
            className="group relative flex flex-col bg-card p-7 transition-colors hover:bg-card/70"
          >
            <h3 className="text-lg font-semibold tracking-tight text-foreground">
              {item.title}
            </h3>
            <p className="mt-2 text-sm text-muted-foreground">{item.body}</p>
            <div className="mt-5 flex flex-1 flex-col rounded-md border border-dashed border-border bg-background/60 p-3">
              {mocks[item.mock]}
            </div>
          </li>
        ))}
      </ul>
    </Section>
  );
}
