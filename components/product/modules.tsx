import { Section, SectionHeader } from "@/components/site/section";

const modules = [
  {
    name: "Authentication",
    tag: "SSO · MFA · RBAC",
    body: "Email/password, magic links, Google, Microsoft, Okta, SAML. Role-based access control on by default.",
  },
  {
    name: "Payments",
    tag: "Stripe · Adyen · Mollie",
    body: "One-time, subscription, metered. Tax automation. Invoicing. PCI-compliant by construction.",
  },
  {
    name: "Multi-tenancy",
    tag: "Per-org isolation",
    body: "Database, blob, cache, queues — all per-tenant. Shared infra without shared blast radius.",
  },
  {
    name: "Multi-Language",
    tag: "40+ locales · RTL",
    body: "String extraction, translation memory, locale-aware dates, currencies, and pluralisation rules.",
  },
  {
    name: "Monitoring",
    tag: "Traces · Logs · SLOs",
    body: "OpenTelemetry by default. SLO budgets. Alerts that route to the right agent before they wake humans.",
  },
  {
    name: "Notifications",
    tag: "Email · SMS · Push · In-app",
    body: "Templated, internationalised, batched. Quiet hours per user. Unsubscribe and preference centre included.",
  },
];

export function ProductModules() {
  return (
    <Section className="border-y border-border bg-card/40">
      <SectionHeader
        eyebrow="Module catalogue"
        title="The things you'd normally rebuild — already built."
        lede="Auth, payments, multi-tenancy, monitoring and more, each with a machine-readable questionnaire. Agents pick the configuration; you approve it."
      />

      <ul className="mt-12 grid gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
        {modules.map((m) => (
          <li key={m.name} className="bg-card p-7">
            <p className="text-xs font-medium tracking-[0.18em] text-muted-foreground uppercase">
              {m.name}
            </p>
            <h3 className="mt-3 text-lg font-semibold tracking-tight text-foreground">
              {m.tag}
            </h3>
            <p className="mt-3 text-sm text-muted-foreground">{m.body}</p>
          </li>
        ))}
      </ul>
    </Section>
  );
}
