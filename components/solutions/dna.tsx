import { Section, SectionHeader } from "@/components/site/section";

const technologyLayers = [
  { name: "Orchestration", body: "Agent routing, model choice, gates." },
  { name: "Modules", body: "Auth · payments · tenancy · multi-language." },
  { name: "Telemetry", body: "Traces · logs · SLOs · alerts." },
  { name: "Security", body: "SAST · secrets · CVEs · audit." },
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
    <Section>
      <SectionHeader
        title="Your team and customers steer. Our stack does the heavy lifting."
        eyebrow="The shape of the work"
        lede="Your process, voice, and IP stay yours. Everything underneath — orchestration, modules, telemetry, security — is what we bring to the table."
      />

      <div className="mt-12 grid gap-6 lg:grid-cols-3">
        <article className="rounded-xl border border-border bg-card p-8">
          <p className="text-xs font-medium tracking-[0.18em] text-muted-foreground uppercase">
            Your users · Your process
          </p>
          <p className="mt-3 text-lg font-semibold tracking-tight text-foreground">
            Discover → Decide → Deliver
          </p>
          <p className="mt-2 text-sm text-muted-foreground">
            In your voice, on your terms.
          </p>
          <p className="mt-6 text-xs tracking-[0.18em] text-foreground uppercase">
            = Your DNA · Your IP
          </p>
        </article>

        <article className="rounded-xl border border-border bg-card p-8">
          <p className="text-xs font-medium tracking-[0.18em] text-muted-foreground uppercase">
            Our technology
          </p>
          <ul className="mt-4 space-y-3 text-sm">
            {technologyLayers.map((row) => (
              <li key={row.name}>
                <p className="font-medium text-foreground">{row.name}</p>
                <p className="text-muted-foreground">{row.body}</p>
              </li>
            ))}
          </ul>
        </article>

        <article className="rounded-xl border border-border bg-card p-8">
          <p className="text-xs font-medium tracking-[0.18em] text-muted-foreground uppercase">
            Our partners
          </p>
          <ul className="mt-4 flex flex-wrap gap-2 text-xs">
            {partners.map((p) => (
              <li
                key={p}
                className="rounded-md border border-border bg-background px-2.5 py-1 font-medium tracking-wider text-foreground uppercase"
              >
                {p}
              </li>
            ))}
          </ul>
        </article>
      </div>
    </Section>
  );
}
