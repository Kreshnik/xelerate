import { Section, SectionHeader } from "@/components/site/section";

type Phase = {
  label: string;
  span: number; // weeks
  shaded: boolean;
};

type Path = {
  n: string;
  title: string;
  audience: string;
  body: string;
  bullets: string[];
  timeline: string;
  totalWeeks: number;
  phases: Phase[];
};

const paths: Path[] = [
  {
    n: "01",
    title: "Build from scratch",
    audience: "New product. No codebase yet.",
    body: "You bring the idea and the wedge. We bring the platform, the agent fleet and a working v1 your users can touch.",
    bullets: [
      "Brief, design, build, test and deploy in one cockpit",
      "Pre-wired auth, payments, monitoring, multi-tenancy",
      "Cloud deploy on AWS, GCP or Azure on day one",
      "Named PM and engineering partner in your channel",
    ],
    timeline: "Working v1 in 4–6 weeks",
    totalWeeks: 6,
    phases: [
      { label: "Brief", span: 1, shaded: true },
      { label: "Design", span: 1, shaded: true },
      { label: "Build", span: 2, shaded: true },
      { label: "Test", span: 1, shaded: true },
      { label: "Ship", span: 1, shaded: true },
    ],
  },
  {
    n: "02",
    title: "Upgrade what you have",
    audience: "Live product. Working, but creaking.",
    body: "We replatform or extend what's running, without breaking what your users already rely on. Agents do the rewrite. Humans own the cut-over.",
    bullets: [
      "Audit of existing codebase and data, with debt costed",
      "Agent-driven rewrite with traceable, reviewable diffs",
      "Cut-over plan with rollback at every step",
      "Knowledge handed back to your in-house team",
    ],
    timeline: "First measurable lift in 6–8 weeks",
    totalWeeks: 8,
    phases: [
      { label: "Audit", span: 2, shaded: true },
      { label: "Rewrite", span: 3, shaded: true },
      { label: "Cut-over", span: 2, shaded: true },
      { label: "Handoff", span: 1, shaded: true },
    ],
  },
];

function TimelineMock({ path }: { path: Path }) {
  return (
    <div className="rounded-md border border-dashed border-border bg-background/60 p-4">
      <div className="flex items-center justify-between font-mono text-[10px] tracking-[0.14em] text-muted-foreground uppercase">
        <span>Typical milestone arc</span>
        <span>{path.totalWeeks} weeks</span>
      </div>

      <div
        className="mt-3 grid gap-1"
        style={{
          gridTemplateColumns: `repeat(${path.totalWeeks}, minmax(0, 1fr))`,
        }}
      >
        {path.phases.map((phase, i) => (
          <div
            key={phase.label + i}
            style={{ gridColumn: `span ${phase.span}` }}
            className={
              "flex h-7 items-center justify-center rounded-sm font-mono text-[10px] " +
              (phase.shaded
                ? "bg-foreground text-background"
                : "border border-border bg-background text-muted-foreground")
            }
          >
            {phase.label}
          </div>
        ))}
      </div>

      <div
        className="mt-2 grid font-mono text-[9px] text-muted-foreground"
        style={{
          gridTemplateColumns: `repeat(${path.totalWeeks}, minmax(0, 1fr))`,
        }}
      >
        {Array.from({ length: path.totalWeeks }, (_, i) => (
          <span key={i} className="text-center">
            W{i + 1}
          </span>
        ))}
      </div>
    </div>
  );
}

export function SolutionsTwoWaysIn() {
  return (
    <Section>
      <SectionHeader
        eyebrow="Pick your starting line"
        title="Build from scratch, or upgrade what you have."
        lede="Same platform, same agents, two starting points. Tell us which one fits and we'll scope the first milestone."
      />

      <ul className="mt-12 grid gap-6 lg:grid-cols-2">
        {paths.map((path) => (
          <li
            key={path.n}
            className="flex flex-col rounded-xl border border-border bg-card p-8"
          >
            <div className="flex items-baseline justify-between gap-4">
              <p className="text-xs font-medium tracking-[0.18em] text-muted-foreground uppercase">
                {path.n} · {path.audience}
              </p>
            </div>
            <h3 className="mt-3 text-2xl font-semibold tracking-tight text-foreground">
              {path.title}
            </h3>
            <p className="mt-3 text-muted-foreground">{path.body}</p>

            <ul className="mt-6 space-y-2 text-sm">
              {path.bullets.map((b) => (
                <li key={b} className="flex gap-2">
                  <span className="text-foreground/60" aria-hidden>
                    ✓
                  </span>
                  <span className="text-foreground">{b}</span>
                </li>
              ))}
            </ul>

            <div className="mt-6">
              <TimelineMock path={path} />
            </div>

            <div className="mt-8 border-t border-border pt-5">
              <p className="text-sm font-medium text-foreground">
                {path.timeline}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </Section>
  );
}
