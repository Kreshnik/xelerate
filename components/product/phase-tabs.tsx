import Link from "next/link";
import { Section, SectionHeader } from "@/components/site/section";

const phases = [
  { n: "Phase 01", label: "Discovery", anchor: "phase-spark" },
  { n: "Phase 02", label: "Design", anchor: "phase-shape" },
  { n: "Phase 03", label: "Development", anchor: "phase-build" },
  { n: "Phase 04", label: "Testing", anchor: "phase-launch" },
  { n: "Phase 05", label: "Maintenance", anchor: "phase-scale" },
];

export function PhaseTabs() {
  return (
    <Section>
      <SectionHeader
        eyebrow="The control tower"
        title="One UI, five phases."
        lede="Click any phase. Each tab swaps in the actual product surface for that step."
      />

      <nav
        aria-label="Control tower phases — navigate to the matching phase on the Approach page"
        className="mt-10 overflow-x-auto"
      >
        <ul className="flex min-w-max gap-2 rounded-xl border border-border bg-card p-2">
          {phases.map((p) => (
            <li key={p.anchor}>
              <Link
                href={`/approach#${p.anchor}`}
                className="block rounded-md px-4 py-3 transition-colors hover:bg-secondary"
              >
                <p className="text-[10px] font-medium tracking-[0.18em] text-muted-foreground uppercase">
                  {p.n}
                </p>
                <p className="mt-1 text-sm font-semibold text-foreground">
                  {p.label}
                </p>
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      <div className="mt-10 grid gap-10 lg:grid-cols-[1fr_1.2fr]">
        <div>
          <p className="text-xs font-medium tracking-[0.18em] text-muted-foreground uppercase">
            Phase 01 · Discovery
          </p>
          <h3 className="mt-4 text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
            From scribbles to structured epics.
          </h3>
          <p className="mt-4 text-muted-foreground">
            Drag-drop intake plus a catalog of ready-to-use modules — Task Board,
            Help Center, Multi-tenancy, Payments, Auth and more. Agents wire them in;
            you don't rebuild the basics.
          </p>

          <dl className="mt-6 space-y-3 text-sm">
            <div>
              <dt className="font-semibold text-foreground">PRODUCT-INTAKE-AGENT</dt>
              <dd className="text-muted-foreground">briefs in, plug-in modules picked from catalog</dd>
            </div>
            <div>
              <dt className="font-semibold text-foreground">REQUIREMENT-AGENT</dt>
              <dd className="text-muted-foreground">generated epic tree with acceptance criteria</dd>
            </div>
            <div className="text-muted-foreground">
              Stakeholder Q&A — agent flags every ambiguity for review
            </div>
          </dl>
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
              {["Task Board", "Help Center", "Projects", "Multi-tenancy", "Multi-Language", "Payments", "Auth", "Access mgmt"].map((m) => (
                <li key={m} className="rounded-md border border-border bg-background px-2.5 py-1 text-foreground">
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
                <li key={row.t} className="flex items-center justify-between p-3 text-sm">
                  <span className="text-foreground">{row.t}</span>
                  <span className="text-xs text-muted-foreground">{row.s}</span>
                </li>
              ))}
            </ul>
          </div>
        </article>
      </div>
    </Section>
  );
}
