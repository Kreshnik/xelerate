import { Section, SectionHeader } from "@/components/site/section";

const activity = [
  { time: "14:42", kind: "Deploy", body: "v2.4.7 shipped to production — 14 files, 0 hot-fixes since", who: "LP", state: "signed off" },
  { time: "14:38", kind: "UAT", body: "Apple Pay rollout bundle approved — 11 acceptance walks passed", who: "MR", state: "approved" },
  { time: "14:21", kind: "Merge", body: "PR #2843 — Apple Pay to checkout · +412 −38", who: "EX", state: "merged" },
  { time: "14:09", kind: "Agent review", body: "Spec drift on tax rounding flagged — 1 nit, 2 comments", who: "RV", state: "reviewed" },
  { time: "13:58", kind: "Status", body: `"Refund flow" moved Plan → Build · 5 tasks queued`, who: "JK", state: "moved by" },
];

const agentMetrics = [
  { value: "42", label: "specs reviewed" },
  { value: "187", label: "tests written" },
  { value: "14", label: "UAT bundles prepared" },
];

const humanMetrics = [
  { value: "9", label: "specs approved" },
  { value: "23", label: "designs reviewed" },
  { value: "6", label: "ships signed off" },
];

export function AboutDogfood() {
  return (
    <Section>
      <SectionHeader
        eyebrow="How we know it works"
        title="We use Xelerate to build Xelerate."
        lede="Every ticket on our own roadmap moves through the same lifecycle we sell you: brief, spec, plan, execute, review, test, UAT, ship. The agents you'd run are the agents we run today — here's our board from this afternoon."
      />

      <div className="mt-12 overflow-hidden rounded-2xl border border-border bg-card shadow-sm">
        <div className="flex items-center justify-between border-b border-border bg-background/60 px-5 py-3 text-[11px] font-medium tracking-[0.18em] text-muted-foreground uppercase">
          <span>xelerate-org / activity · today</span>
          <span className="inline-flex items-center gap-2 text-emerald-600">
            <span className="h-2 w-2 rounded-full bg-emerald-500" />
            Live
          </span>
        </div>
        <ul className="divide-y divide-border text-sm">
          {activity.map((row) => (
            <li
              key={row.time}
              className="grid grid-cols-[60px_120px_1fr_auto] items-center gap-4 px-5 py-3"
            >
              <span className="text-xs text-muted-foreground">{row.time}</span>
              <span className="text-[10px] font-medium tracking-[0.18em] text-foreground uppercase">
                {row.kind}
              </span>
              <span className="text-muted-foreground">{row.body}</span>
              <span className="flex items-center gap-2 text-xs text-muted-foreground">
                <span>{row.state}</span>
                <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-secondary text-[10px] font-semibold text-foreground">
                  {row.who}
                </span>
              </span>
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-10 grid gap-6 lg:grid-cols-2">
        <article className="rounded-xl border border-border bg-card p-7">
          <h3 className="text-xs font-medium tracking-[0.18em] text-muted-foreground uppercase">
            Yesterday · what the agents did
          </h3>
          <dl className="mt-5 grid grid-cols-3 gap-4">
            {agentMetrics.map((m) => (
              <div key={m.label}>
                <dt className="text-3xl font-semibold text-foreground">{m.value}</dt>
                <dd className="mt-1 text-xs text-muted-foreground">{m.label}</dd>
              </div>
            ))}
          </dl>
          <p className="mt-5 text-xs tracking-[0.18em] text-muted-foreground uppercase">
            Volume · auditable, every step
          </p>
        </article>
        <article className="rounded-xl border border-border bg-foreground p-7 text-background">
          <h3 className="text-xs font-medium tracking-[0.18em] text-background/70 uppercase">
            Yesterday · what we did
          </h3>
          <dl className="mt-5 grid grid-cols-3 gap-4">
            {humanMetrics.map((m) => (
              <div key={m.label}>
                <dt className="text-3xl font-semibold">{m.value}</dt>
                <dd className="mt-1 text-xs text-background/70">{m.label}</dd>
              </div>
            ))}
          </dl>
          <p className="mt-5 text-xs tracking-[0.18em] text-background/70 uppercase">
            Judgement · the calls only humans make
          </p>
        </article>
      </div>
    </Section>
  );
}
