import Link from "next/link";
import { Section, SectionHeader } from "@/components/site/section";

const phases = [
  { n: "01", label: "Discovery", anchor: "phase-spark", current: true },
  { n: "02", label: "Design", anchor: "phase-shape" },
  { n: "03", label: "Development", anchor: "phase-build" },
  { n: "04", label: "Testing", anchor: "phase-launch" },
  { n: "05", label: "Maintenance", anchor: "phase-scale" },
];

export function PhaseTabs() {
  return (
    <Section>
      <SectionHeader
        eyebrow="A closer look · Discovery"
        title="From a paragraph of intent to a costed epic tree."
        lede="One example of how a single phase looks inside the cockpit. The same pattern — agents draft, humans approve — runs across all five phases."
      />

      <div className="mt-12 grid gap-10 lg:grid-cols-[1fr_1.2fr]">
        <div>
          <p className="text-xs font-medium tracking-[0.18em] text-muted-foreground uppercase">
            What happens
          </p>
          <h3 className="mt-4 text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
            Drag in a brief. Get back epics you can ship.
          </h3>
          <p className="mt-4 text-muted-foreground">
            Drop a Loom, a Notion doc, or a paragraph. The intake agent picks
            modules from the catalog, the requirement agent decomposes the brief
            into an epic tree with acceptance criteria, and ambiguities are flagged
            for a human — not assumed away.
          </p>

          <dl className="mt-8 space-y-4 text-sm">
            <div className="border-l-2 border-border pl-4">
              <dt className="font-semibold tracking-tight text-foreground">
                Product Intake agent
              </dt>
              <dd className="mt-1 text-muted-foreground">
                Reads the brief; proposes a stack from the module catalog.
              </dd>
            </div>
            <div className="border-l-2 border-border pl-4">
              <dt className="font-semibold tracking-tight text-foreground">
                Requirement agent
              </dt>
              <dd className="mt-1 text-muted-foreground">
                Generates the epic tree with acceptance criteria. Asks for a
                human call on every ambiguity.
              </dd>
            </div>
            <div className="border-l-2 border-border pl-4">
              <dt className="font-semibold tracking-tight text-foreground">
                You
              </dt>
              <dd className="mt-1 text-muted-foreground">
                Approve, edit, or send back for revision. Nothing moves to Design
                until the gate is signed off.
              </dd>
            </div>
          </dl>

          <div className="mt-8">
            <Link
              href="/approach"
              className="inline-flex items-center gap-2 text-sm font-medium text-foreground underline-offset-4 hover:underline"
            >
              See all five phases on the Approach page
              <span aria-hidden>-&gt;</span>
            </Link>
          </div>
        </div>

        <article className="rounded-xl border border-border bg-card p-6">
          <div className="flex items-center justify-between text-[10px] font-medium tracking-[0.18em] text-muted-foreground uppercase">
            <span>Discovery · Project intake</span>
            <span className="inline-flex items-center gap-2 text-emerald-600">
              <span className="h-2 w-2 rounded-full bg-emerald-500" />
              Live
            </span>
          </div>

          <div className="mt-6">
            <p className="text-xs font-medium tracking-[0.18em] text-muted-foreground uppercase">
              Plug-in modules · Catalog
            </p>
            <ul className="mt-3 flex flex-wrap gap-2 text-xs">
              {[
                "Task Board",
                "Help Center",
                "Projects",
                "Multi-tenancy",
                "Multi-Language",
                "Payments",
                "Auth",
                "Access mgmt",
              ].map((m) => (
                <li
                  key={m}
                  className="rounded-md border border-border bg-background px-2.5 py-1 text-foreground"
                >
                  {m}
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-6">
            <div className="flex items-center justify-between text-xs">
              <span className="font-medium tracking-[0.18em] text-muted-foreground uppercase">
                Generated epics
              </span>
              <span className="rounded-full bg-emerald-500/10 px-2 py-0.5 text-[10px] font-medium tracking-wider text-emerald-700 uppercase">
                8 new
              </span>
            </div>
            <ul className="mt-3 divide-y divide-border rounded-md border border-border">
              {[
                { t: "Add Apple Pay to checkout", s: "12 stories · ready" },
                { t: "SSO for partners", s: "7 stories · ready" },
                { t: "Refund flow", s: "5 stories · 1 ambiguity" },
                { t: "Tax exemption codes", s: "3 stories · drafting" },
              ].map((row) => (
                <li
                  key={row.t}
                  className="flex items-center justify-between p-3 text-sm"
                >
                  <span className="text-foreground">{row.t}</span>
                  <span className="text-xs text-muted-foreground">{row.s}</span>
                </li>
              ))}
            </ul>
          </div>

          <nav
            aria-label="The five lifecycle phases"
            className="mt-6 border-t border-border pt-4"
          >
            <p className="text-[10px] font-medium tracking-[0.18em] text-muted-foreground uppercase">
              Lifecycle phases
            </p>
            <ol className="mt-3 flex flex-wrap items-center gap-1.5 text-[11px]">
              {phases.map((p, i) => (
                <li key={p.anchor} className="flex items-center gap-1.5">
                  <Link
                    href={`/approach#${p.anchor}`}
                    aria-current={p.current ? "step" : undefined}
                    className={
                      p.current
                        ? "rounded-md border border-foreground/20 bg-foreground px-2 py-1 font-medium text-background"
                        : "rounded-md border border-border bg-background px-2 py-1 text-muted-foreground hover:text-foreground"
                    }
                  >
                    <span className="mr-1 tracking-[0.18em] uppercase">
                      {p.n}
                    </span>
                    {p.label}
                  </Link>
                  {i < phases.length - 1 && (
                    <span aria-hidden className="text-muted-foreground">
                      ·
                    </span>
                  )}
                </li>
              ))}
            </ol>
          </nav>
        </article>
      </div>
    </Section>
  );
}
