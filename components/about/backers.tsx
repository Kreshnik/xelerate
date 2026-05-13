import { Section, SectionHeader } from "@/components/site/section";

const backers = [
  { name: "Saga · Ventures", role: "lead" },
  { name: "Operator · Collective", role: "syndicate" },
  { name: "North · Loop", role: "syndicate" },
  { name: "Founders · Future", role: "angel" },
  { name: "+ 14 operators", role: "angel round" },
];

export function AboutBackers() {
  return (
    <Section>
      <SectionHeader
        eyebrow="Backed by"
        title="A small group of operators who've built this before."
        lede="Pre-seed. No press release, no fanfare. The people behind the cheques have all shipped production software for a living — they're who we call at midnight."
      />

      <ul className="mt-12 grid gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-5">
        {backers.map((b) => (
          <li key={b.name} className="flex flex-col gap-2 bg-card p-6 text-sm">
            <span className="text-xs font-medium tracking-[0.18em] text-foreground uppercase">
              {b.name}
            </span>
            <span className="text-xs text-muted-foreground">{b.role}</span>
          </li>
        ))}
      </ul>

      <p className="mt-8 text-xs tracking-[0.18em] text-muted-foreground uppercase">
        Pre-seed Q1 2026 · Led by Saga Ventures · Operators from Adyen, Booking, Miro, Stripe, Linear
      </p>
    </Section>
  );
}
