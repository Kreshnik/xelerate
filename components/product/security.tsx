import { Section, SectionHeader } from "@/components/site/section";

const pillars = [
  {
    title: "Security at every phase",
    body: "Static analysis, secret scanning, dependency CVE checks, and runtime monitoring run as part of every cycle.",
  },
  {
    title: "Audit-ready by default",
    body: "Every agent action is logged: who decided what, which model ran, which artefact changed. Full traceability.",
  },
  {
    title: "Your data, your tenancy",
    body: "Per-org data isolation, your cloud or ours, BYO model keys supported. Codebase never trains a public model.",
  },
];

export function ProductSecurity() {
  return (
    <Section>
      <SectionHeader
        eyebrow="Security & governance"
        title="Built for engineering teams, not just demos."
        lede="Your codebase never trains a public model. Your data stays in your tenancy. Every agent action is logged, traceable, and revertible."
      />

      <ul className="mt-12 grid gap-6 lg:grid-cols-3">
        {pillars.map((p) => (
          <li key={p.title} className="rounded-xl border border-border bg-card p-8">
            <h3 className="text-lg font-semibold tracking-tight text-foreground">
              {p.title}
            </h3>
            <p className="mt-3 text-sm text-muted-foreground">{p.body}</p>
          </li>
        ))}
      </ul>
    </Section>
  );
}
