import type { ReactNode } from "react";
import { Section, SectionHeader } from "@/components/site/section";

type IndustryKey =
  | "saas"
  | "fintech"
  | "healthcare"
  | "legal"
  | "retail"
  | "gaming";

type Industry = {
  key: IndustryKey;
  name: string;
  tag: string;
  note: string;
};

const industries: Industry[] = [
  {
    key: "saas",
    name: "SaaS",
    tag: "Multi-tenant · Billing · Admin",
    note: "If your product is a tenant model with admin, billing and seats, you're in our hot path.",
  },
  {
    key: "fintech",
    name: "Fintech & banking",
    tag: "KYC · Ledgers · Compliance",
    note: "Regulated stacks where audit, segregation and traceable change are non-negotiable.",
  },
  {
    key: "healthcare",
    name: "Healthcare",
    tag: "HIPAA · EHR · Scheduling",
    note: "PHI, consent and clinical workflows handled with the controls auditors expect.",
  },
  {
    key: "legal",
    name: "Legal & ops",
    tag: "Contracts · Matter mgmt",
    note: "Document-heavy work that still needs a partner's sign-off before anything goes out.",
  },
  {
    key: "retail",
    name: "Retail & commerce",
    tag: "Checkout · Loyalty · POS",
    note: "Storefronts that have to play nicely with carriers, tax engines and a loyalty backend.",
  },
  {
    key: "gaming",
    name: "Gaming & live ops",
    tag: "Multiplayer · Matchmaking",
    note: "Realtime services, lobbies and live-ops control planes that have to stay up under load.",
  },
];

function Row({ label, value, accent }: { label: string; value: string; accent?: boolean }) {
  return (
    <li className="flex items-center justify-between">
      <span className="text-muted-foreground">{label}</span>
      <span
        className={
          "inline-flex items-center gap-1 " +
          (accent ? "text-emerald-600" : "text-foreground")
        }
      >
        {accent && <span className="h-1 w-1 rounded-full bg-emerald-500" />}
        {value}
      </span>
    </li>
  );
}

function MockSaas() {
  return (
    <ul className="space-y-1 font-mono text-[10px]">
      <Row label="tenant" value="acme.eu" />
      <Row label="plan" value="enterprise" />
      <Row label="seats" value="142 of 200" />
      <Row label="billing" value="usage + flat" accent />
    </ul>
  );
}

function MockFintech() {
  return (
    <ul className="space-y-1 font-mono text-[10px]">
      <Row label="KYC" value="v3.1 · passed" accent />
      <Row label="ledger" value="double-entry" />
      <Row label="compliance" value="PCI-DSS L1" />
      <Row label="audit" value="2 events · 0 flags" />
    </ul>
  );
}

function MockHealthcare() {
  return (
    <ul className="space-y-1 font-mono text-[10px]">
      <Row label="patient" value="anon_4Ko29q" />
      <Row label="consent" value="HIPAA · v2" accent />
      <Row label="visit" value="2026-05-22 · 09:30" />
      <Row label="phi" value="encrypted · at rest" />
    </ul>
  );
}

function MockLegal() {
  return (
    <ul className="space-y-1 font-mono text-[10px]">
      <Row label="matter" value="M-4821" />
      <Row label="clauses" value="47 mapped" />
      <Row label="redlined" value="8 · reviewer queue" />
      <Row label="status" value="awaiting partner" accent />
    </ul>
  );
}

function MockRetail() {
  return (
    <ul className="space-y-1 font-mono text-[10px]">
      <Row label="cart" value="4 items · €128.40" />
      <Row label="tax" value="auto · DE 19%" />
      <Row label="fulfilment" value="DHL · DPD" />
      <Row label="loyalty" value="+128 pts" accent />
    </ul>
  );
}

function MockGaming() {
  return (
    <ul className="space-y-1 font-mono text-[10px]">
      <Row label="lobby" value="8 / 16" />
      <Row label="region" value="eu-west" />
      <Row label="ping" value="24 ms" accent />
      <Row label="match" value="ranked · S4" />
    </ul>
  );
}

const mocks: Record<IndustryKey, ReactNode> = {
  saas: <MockSaas />,
  fintech: <MockFintech />,
  healthcare: <MockHealthcare />,
  legal: <MockLegal />,
  retail: <MockRetail />,
  gaming: <MockGaming />,
};

export function SolutionsIndustries() {
  return (
    <Section>
      <SectionHeader
        eyebrow="Industries"
        title="Pre-wired for the verticals we already know."
        lede="Same platform, same agent fleet. The compliance posture, integration shape and product patterns are pre-loaded for the industries we ship into most."
      />

      <ul className="mt-12 grid gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
        {industries.map((i) => (
          <li key={i.key} className="flex flex-col bg-card p-7">
            <p className="text-lg font-semibold tracking-tight text-foreground">
              {i.name}
            </p>
            <p className="mt-2 text-xs font-medium tracking-[0.18em] text-muted-foreground uppercase">
              {i.tag}
            </p>
            <p className="mt-3 text-sm text-muted-foreground">{i.note}</p>
            <div className="mt-5 flex flex-1 flex-col justify-end">
              <div className="rounded-md border border-dashed border-border bg-background/60 p-3">
                {mocks[i.key]}
              </div>
            </div>
          </li>
        ))}
      </ul>

      <p className="mt-8 max-w-2xl text-sm text-muted-foreground">
        Not on the list? The platform isn&apos;t industry-locked. New verticals
        get scoped on the first call.
      </p>
    </Section>
  );
}
