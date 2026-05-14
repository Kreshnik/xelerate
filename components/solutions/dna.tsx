import { Section, SectionHeader } from "@/components/site/section";

const yoursPipeline = [
  { label: "Discover", note: "your users" },
  { label: "Decide", note: "your roadmap" },
  { label: "Deliver", note: "your voice" },
];

const techLayers = [
  {
    name: "Orchestration",
    note: "Agent routing · model choice · gates",
    chips: ["Claude", "GPT-4.1", "Gemini", "BYO"],
  },
  {
    name: "Modules",
    note: "Pre-built, agent-readable contracts",
    chips: ["Auth", "Payments", "Tenancy", "i18n"],
  },
  {
    name: "Telemetry",
    note: "Traces · logs · SLOs · alerts",
    chips: ["OTel", "SLO 99.9%", "p99 142ms"],
  },
  {
    name: "Security",
    note: "SAST · secrets · CVEs · audit",
    chips: ["0 high", "0 leaks", "audit-ready"],
  },
];

const partners = [
  "AWS",
  "GCP",
  "Azure",
  "Anthropic",
  "OpenAI",
  "Google",
  "Stripe",
  "Okta",
  "Datadog",
];

export function SolutionsDna() {
  return (
    <Section className="border-y border-border bg-card/40">
      <SectionHeader
        eyebrow="Division of labour"
        title="Yours stays yours. Ours does the heavy lifting."
        lede="Three columns, one engagement. What only you can decide stays in your hands. What you'd rather not rebuild — runtime, agents, partner integrations — comes pre-wired."
      />

      <div className="mt-12 grid gap-px overflow-hidden rounded-xl border border-border bg-border lg:grid-cols-3">
        {/* Column 1 — Yours */}
        <article className="flex flex-col bg-card p-7">
          <p className="text-xs font-medium tracking-[0.18em] text-muted-foreground uppercase">
            Your users · Your process
          </p>
          <h3 className="mt-3 text-lg font-semibold tracking-tight text-foreground">
            The decisions only you can make.
          </h3>

          <div className="mt-6 rounded-md border border-dashed border-border bg-background/60 p-4">
            <ul className="flex items-center justify-between font-mono text-[10px]">
              {yoursPipeline.map((step, i) => (
                <li key={step.label} className="flex flex-1 items-center gap-2">
                  <div className="flex flex-col items-start">
                    <span className="text-foreground">{step.label}</span>
                    <span className="text-[9px] text-muted-foreground">
                      {step.note}
                    </span>
                  </div>
                  {i < yoursPipeline.length - 1 && (
                    <span
                      aria-hidden
                      className="flex-1 border-t border-dashed border-foreground/30"
                    />
                  )}
                </li>
              ))}
            </ul>
            <div className="mt-4 inline-flex items-center gap-1.5 rounded-sm border border-dutch/40 bg-dutch/10 px-2 py-0.5 font-mono text-[9px] tracking-[0.18em] text-dutch uppercase">
              = Your DNA · Your IP
            </div>
          </div>

          <p className="mt-auto pt-6 text-xs text-muted-foreground">
            Brand voice, approvals, customer relationships. Every call that
            sets you apart stays with you.
          </p>
        </article>

        {/* Column 2 — Ours (technology) */}
        <article className="flex flex-col bg-card p-7">
          <p className="text-xs font-medium tracking-[0.18em] text-muted-foreground uppercase">
            Our technology
          </p>
          <h3 className="mt-3 text-lg font-semibold tracking-tight text-foreground">
            The runtime under every build.
          </h3>

          <ul className="mt-6 space-y-3">
            {techLayers.map((layer) => (
              <li
                key={layer.name}
                className="rounded-md border border-dashed border-border bg-background/60 p-3"
              >
                <div className="flex items-baseline justify-between gap-3">
                  <span className="font-mono text-[11px] font-medium text-foreground">
                    {layer.name}
                  </span>
                  <span className="text-[9px] text-muted-foreground">
                    {layer.note}
                  </span>
                </div>
                <ul className="mt-2 flex flex-wrap gap-1 font-mono text-[9px]">
                  {layer.chips.map((c) => (
                    <li
                      key={c}
                      className="rounded-sm border border-border bg-background px-1.5 py-0.5 text-muted-foreground"
                    >
                      {c}
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </article>

        {/* Column 3 — Partners */}
        <article className="flex flex-col bg-card p-7">
          <p className="text-xs font-medium tracking-[0.18em] text-muted-foreground uppercase">
            Our partners
          </p>
          <h3 className="mt-3 text-lg font-semibold tracking-tight text-foreground">
            Stacks you already trust.
          </h3>

          <ul className="mt-6 grid grid-cols-3 gap-px overflow-hidden rounded-md border border-dashed border-border bg-border">
            {partners.map((p) => (
              <li
                key={p}
                className="flex h-14 items-center justify-center bg-background font-mono text-[10px] font-medium tracking-[0.18em] text-foreground uppercase"
              >
                {p}
              </li>
            ))}
          </ul>

          <p className="mt-auto pt-6 text-xs text-muted-foreground">
            BYO model keys. Your cloud or ours. Every artefact portable on the
            way out.
          </p>
        </article>
      </div>
    </Section>
  );
}
