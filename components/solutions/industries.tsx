import { Section, SectionHeader } from "@/components/site/section";

const industries = [
  {
    name: "SaaS",
    tag: "Multi-tenant · Billing · Admin",
    note: "Where most of our v1 builds and replatforms live.",
  },
  {
    name: "Fintech & banking",
    tag: "KYC · Ledgers · Compliance",
    note: "Audit trails, segregated environments, regulated stacks.",
  },
  {
    name: "Healthcare",
    tag: "HIPAA · EHR · Scheduling",
    note: "PHI handling and consent baked into the pipeline.",
  },
  {
    name: "Legal & ops",
    tag: "Contracts · Matter mgmt",
    note: "Document-heavy workflows with reviewer-in-the-loop.",
  },
  {
    name: "Retail & commerce",
    tag: "Checkout · Loyalty · POS",
    note: "Cart, fulfilment and storefront integrations.",
  },
  {
    name: "Gaming & live ops",
    tag: "Multiplayer · Matchmaking",
    note: "Realtime services and live-ops control planes.",
  },
];

export function SolutionsIndustries() {
  return (
    <Section className="border-y border-border bg-card/40">
      <SectionHeader
        eyebrow="Where we've shipped this"
        title="Pre-loaded for the verticals we work in most."
        lede="Same control tower and agent fleet either way. These are the domains where we've already shipped the compliance, integration and pattern packs — so day one is faster."
      />

      <ul className="mt-12 grid gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
        {industries.map((i) => (
          <li key={i.name} className="flex flex-col bg-card p-7">
            <p className="text-lg font-semibold tracking-tight text-foreground">
              {i.name}
            </p>
            <p className="mt-2 text-xs font-medium tracking-[0.18em] text-muted-foreground uppercase">
              {i.tag}
            </p>
            <p className="mt-4 text-sm text-muted-foreground">{i.note}</p>
          </li>
        ))}
      </ul>

      <p className="mt-8 max-w-2xl text-sm text-muted-foreground">
        Not on the list? The platform isn&apos;t industry-locked — these are
        just the patterns we&apos;ve already paid for. New verticals get
        scoped during the first call.
      </p>
    </Section>
  );
}
