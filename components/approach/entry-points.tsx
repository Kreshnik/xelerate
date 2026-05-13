import Link from "next/link";
import { Section, SectionHeader } from "@/components/site/section";

const phases = [
  { label: "Discovery", anchor: "phase-spark" },
  { label: "Design", anchor: "phase-shape" },
  { label: "Development", anchor: "phase-build" },
  { label: "Testing", anchor: "phase-launch" },
  { label: "Maintenance", anchor: "phase-scale" },
];

type Entry = {
  tag: string;
  name: string;
  body: string;
  enterAt: number;
};

const entries: Entry[] = [
  {
    tag: "Starting from a brief",
    name: "Greenfield project",
    body: "No code yet. We start at Discovery — agents turn the brief into a structured epic tree, then carry it through to Maintenance with your team approving every gate.",
    enterAt: 0,
  },
  {
    tag: "Mid-flight build",
    name: "In-flight team",
    body: "Backlog, design system, and CI already exist. Xelerate plugs in at Design or Development — same artefact format, same gates, agents take the boilerplate off the queue.",
    enterAt: 1,
  },
  {
    tag: "Existing production system",
    name: "Legacy modernisation",
    body: "A codebase that ships, but accrues debt every release. Maintenance phase reads live signals first, ranks the queue, and feeds the next brief — no big-bang rewrite.",
    enterAt: 4,
  },
];

export function ApproachEntryPoints() {
  return (
    <Section className="border-t border-border bg-card/40">
      <SectionHeader
        eyebrow="Where you plug in"
        title="Enter the loop at the phase that matches your team."
        lede="The lifecycle is modular. Start at Discovery for a new product, plug in at Design or Development for a team already shipping, or run Maintenance against a system in production."
      />

      <ul className="mt-12 grid gap-6 lg:grid-cols-3">
        {entries.map((e) => (
          <li
            key={e.name}
            className="flex flex-col rounded-xl border border-border bg-card p-7"
          >
            <p className="text-xs font-medium tracking-[0.18em] text-muted-foreground uppercase">
              {e.tag}
            </p>
            <h3 className="mt-3 text-xl font-semibold tracking-tight text-foreground">
              {e.name}
            </h3>
            <p className="mt-3 text-sm text-muted-foreground">{e.body}</p>

            <ol className="mt-6 flex flex-wrap gap-1.5" aria-label="Entry phase">
              {phases.map((p, idx) => {
                const isEntry = idx === e.enterAt;
                const isActive = idx >= e.enterAt;
                return (
                  <li key={p.anchor}>
                    <Link
                      href={`#${p.anchor}`}
                      className={
                        "block rounded-md border px-2 py-0.5 text-[10px] font-medium tracking-wider uppercase transition-colors " +
                        (isEntry
                          ? "border-foreground bg-foreground text-background"
                          : isActive
                            ? "border-foreground/40 bg-background text-foreground hover:border-foreground"
                            : "border-border bg-background text-muted-foreground hover:text-foreground")
                      }
                      aria-label={
                        isEntry
                          ? `Enter at ${p.label}`
                          : `Jump to ${p.label}`
                      }
                    >
                      {p.label}
                    </Link>
                  </li>
                );
              })}
            </ol>

            <p className="mt-5 text-[11px] tracking-[0.14em] text-muted-foreground uppercase">
              Enter at {phases[e.enterAt].label} · stay through Maintenance
            </p>
          </li>
        ))}
      </ul>
    </Section>
  );
}
