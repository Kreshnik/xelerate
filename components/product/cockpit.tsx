import { Section, SectionHeader } from "@/components/site/section";

const board = [
  { col: "Discover", count: 3, items: [
    { title: "Settings page brief", who: "PM agent" },
    { title: "Audit log spec", who: "PM agent" },
  ]},
  { col: "Design", count: 2, items: [
    { title: "Component graph extract", who: "Design agent" },
  ]},
  { col: "Build", count: 2, items: [
    { title: "Refactor auth middleware", who: "Code agent" },
    { title: "Add MFA endpoint", who: "In review" },
  ]},
  { col: "Test", count: 1, items: [
    { title: "Regression on billing flow", who: "Test agent" },
  ]},
  { col: "Maintain", count: 1, items: [
    { title: "5xx alert · payments", who: "Auto-triaged" },
  ]},
];

const activity = [
  { agent: "Coding agent · 0m", body: "Opened PR #483 — \"Refactor auth middleware for SSO providers\". Tests passing on branch." },
  { agent: "QA agent · 4m", body: "Generated 18 new test cases for billing-renewal edge cases. 16 pass, 2 require human review." },
  { agent: "Design agent · 12m", body: "Detected 3 unused components in the Figma library. Removed from the spec." },
];

export function ProductCockpit() {
  return (
    <Section>
      <SectionHeader
        eyebrow="The control tower"
        title="Everything an engineering team needs, in one window."
        lede="Project on the left. The artefact in the centre. Agent activity on the right. Every gate carries a human signature; every action lands in the log."
      />

      <div className="mt-12 overflow-hidden rounded-2xl border border-border bg-card shadow-sm">
        <div className="flex items-center justify-between border-b border-border bg-background/60 px-5 py-3 text-[11px] font-medium tracking-[0.18em] text-muted-foreground uppercase">
          <span>Xelerate.ai / Project · Phoenix-Rebuild</span>
          <span className="inline-flex items-center gap-2 text-emerald-600">
            <span className="h-2 w-2 rounded-full bg-emerald-500" />
            Live · 4 agents working
          </span>
        </div>

        <div className="grid gap-px bg-border md:grid-cols-[200px_1fr_280px]">
          <aside className="bg-card p-4 text-xs">
            <p className="font-medium tracking-[0.18em] text-muted-foreground uppercase">Project</p>
            <ul className="mt-3 space-y-2 text-sm">
              {["Overview", "Board", "Specs", "Activity"].map((i) => (
                <li key={i} className="text-foreground">{i}</li>
              ))}
            </ul>
            <p className="mt-6 font-medium tracking-[0.18em] text-muted-foreground uppercase">Modules</p>
            <ul className="mt-3 space-y-2 text-sm">
              {["Auth", "Payments", "Monitoring"].map((i) => (
                <li key={i} className="text-muted-foreground">{i}</li>
              ))}
            </ul>
          </aside>

          <div className="bg-card p-5">
            <h3 className="text-base font-semibold text-foreground">
              Project board · Phoenix Rebuild
            </h3>
            <p className="mt-1 text-xs text-muted-foreground">
              8 active tasks · 4 agents working · Next gate review in 2 hours
            </p>
            <div className="mt-5 grid gap-3 sm:grid-cols-5">
              {board.map((col) => (
                <div key={col.col} className="rounded-lg border border-border bg-background p-3">
                  <div className="flex items-center justify-between text-[10px] font-medium tracking-[0.18em] text-muted-foreground uppercase">
                    <span>{col.col}</span>
                    <span>{col.count}</span>
                  </div>
                  <ul className="mt-3 space-y-2">
                    {col.items.map((it) => (
                      <li key={it.title} className="rounded-md border border-border bg-card p-2 text-[11px]">
                        <p className="font-medium text-foreground">{it.title}</p>
                        <p className="mt-1 text-muted-foreground">{it.who}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          <aside className="bg-card p-4">
            <p className="text-xs font-medium tracking-[0.18em] text-muted-foreground uppercase">
              Activity
            </p>
            <ul className="mt-3 space-y-4 text-xs">
              {activity.map((a) => (
                <li key={a.agent}>
                  <p className="font-medium tracking-[0.18em] text-muted-foreground uppercase">
                    {a.agent}
                  </p>
                  <p className="mt-1 text-sm text-foreground">{a.body}</p>
                </li>
              ))}
            </ul>
          </aside>
        </div>
      </div>
    </Section>
  );
}
