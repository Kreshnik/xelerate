import type { ReactNode } from "react";
import { Section, SectionHeader } from "@/components/site/section";

type PillarKey = "scans" | "audit" | "tenancy";

type Pillar = {
  title: string;
  body: string;
  mock: PillarKey;
};

const pillars: Pillar[] = [
  {
    title: "Security on every cycle",
    body: "SAST, secret scanning, dependency CVE checks and runtime monitoring run on the same board as functional work — not a gate bolted on at the end.",
    mock: "scans",
  },
  {
    title: "Audit log, not a trust fall",
    body: "Every agent action is written down: who decided, which model ran, which artefact changed. Replayable. Revertible. Reviewable on demand.",
    mock: "audit",
  },
  {
    title: "Your data, your tenancy",
    body: "Per-org isolation, BYO model keys, your cloud or ours. Your codebase never trains a public model.",
    mock: "tenancy",
  },
];

function MockScans() {
  const scans = [
    { label: "SAST", value: "0 high" },
    { label: "Secrets", value: "0 leaks" },
    { label: "CVE check", value: "0 critical" },
    { label: "Runtime", value: "passing" },
  ];
  return (
    <ul className="space-y-1.5 font-mono text-[11px]">
      {scans.map((s) => (
        <li
          key={s.label}
          className="flex items-center justify-between"
        >
          <span className="text-muted-foreground">{s.label}</span>
          <span className="inline-flex items-center gap-1.5 text-emerald-600">
            <span className="h-1 w-1 rounded-full bg-emerald-500" />
            {s.value}
          </span>
        </li>
      ))}
    </ul>
  );
}

function MockAuditLog() {
  const rows = [
    {
      time: "12:04:21",
      who: "code-agent · v4.2",
      what: "Opened PR #486 — refund-flow",
    },
    {
      time: "11:58:09",
      who: "mei.r · human",
      what: "Approved spec drift on tax rounding",
    },
    {
      time: "11:42:55",
      who: "test-agent · v4.1",
      what: "Generated 18 cases · 16 pass",
    },
  ];
  return (
    <ul className="space-y-2 font-mono text-[10px]">
      {rows.map((r) => (
        <li key={r.time}>
          <div className="flex items-center justify-between text-[9px] tracking-wider uppercase">
            <span className="text-foreground">{r.who}</span>
            <span className="text-muted-foreground">{r.time}</span>
          </div>
          <p className="mt-0.5 text-muted-foreground">{r.what}</p>
        </li>
      ))}
    </ul>
  );
}

function MockTenancyIsolation() {
  const tenants = [
    { name: "acme", region: "eu" },
    { name: "north", region: "us" },
    { name: "vega", region: "eu" },
  ];
  return (
    <div className="space-y-2">
      <div className="grid grid-cols-3 gap-1.5">
        {tenants.map((t) => (
          <div
            key={t.name}
            className="rounded-sm border border-border bg-background p-1.5 font-mono text-[9px]"
          >
            <div className="flex items-center justify-between">
              <span className="text-foreground">{t.name}</span>
              <span className="text-muted-foreground">{t.region}</span>
            </div>
            <ul className="mt-1 space-y-0.5 text-muted-foreground">
              <li>db · cache</li>
              <li>queue · blob</li>
            </ul>
          </div>
        ))}
      </div>
      <p className="font-mono text-[9px] text-muted-foreground">
        BYO keys · per-tenant rotation
      </p>
    </div>
  );
}

const pillarMocks: Record<PillarKey, ReactNode> = {
  scans: <MockScans />,
  audit: <MockAuditLog />,
  tenancy: <MockTenancyIsolation />,
};

export function ProductSecurity() {
  return (
    <Section>
      <SectionHeader
        eyebrow="Security & governance"
        title="The platform that keeps your engineers in control."
        lede="Agents move fast inside a perimeter you can prove. Every action is logged, every tenancy is isolated, and your codebase never trains a public model."
      />

      <ul className="mt-12 grid gap-6 lg:grid-cols-3">
        {pillars.map((p) => (
          <li
            key={p.title}
            className="flex flex-col rounded-xl border border-border bg-card p-7"
          >
            <h3 className="text-lg font-semibold tracking-tight text-foreground">
              {p.title}
            </h3>
            <p className="mt-3 text-sm text-muted-foreground">{p.body}</p>
            <div className="mt-5 flex flex-1 flex-col justify-end">
              <div className="rounded-md border border-dashed border-border bg-background/60 p-4">
                {pillarMocks[p.mock]}
              </div>
            </div>
          </li>
        ))}
      </ul>
    </Section>
  );
}
