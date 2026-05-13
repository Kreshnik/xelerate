import { Section, SectionHeader } from "@/components/site/section";

const industries = [
  { name: "Retail", tag: "Checkout · Loyalty · POS" },
  { name: "Banking", tag: "KYC · Ledgers · Compliance" },
  { name: "Legal", tag: "Contracts · Matter mgmt" },
  { name: "Healthcare", tag: "HIPAA · EHR · Scheduling" },
  { name: "SaaS", tag: "Multi-tenant · Billing" },
  { name: "Gaming", tag: "Live ops · Matchmaking" },
];

export function SolutionsIndustries() {
  return (
    <Section className="border-y border-border bg-card/40">
      <SectionHeader
        eyebrow="Industries"
        title="Built for teams shipping into real-world stacks."
        lede="Same control tower. Same agent fleet. Pre-loaded compliance, integration and pattern packs for the verticals we work in most."
      />

      <ul className="mt-12 grid gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
        {industries.map((i) => (
          <li key={i.name} className="bg-card p-7">
            <p className="text-lg font-semibold tracking-tight text-foreground">
              {i.name}
            </p>
            <p className="mt-2 text-xs font-medium tracking-[0.18em] text-muted-foreground uppercase">
              {i.tag}
            </p>
          </li>
        ))}
      </ul>
    </Section>
  );
}
