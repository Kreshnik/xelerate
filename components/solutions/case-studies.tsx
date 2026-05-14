import type { ReactNode } from "react";
import { Section, SectionHeader } from "@/components/site/section";

type CaseKey = "game" | "fksr" | "pieter";

type Case = {
  key: CaseKey;
  tag: string;
  headline: string;
  body: string;
  metric: string;
  metricLabel: string;
};

const cases: Case[] = [
  {
    key: "game",
    tag: "Build · Gaming",
    headline: "3-person team to public beta in 7 weeks.",
    body: "Founding team. No platform engineer hired.",
    metric: "7 wks",
    metricLabel: "Design → public beta",
  },
  {
    key: "fksr",
    tag: "Upgrade · Civic-tech",
    headline: "Replatformed a live tool with zero downtime.",
    body: "Ageing internal system. Real users on it throughout.",
    metric: "0",
    metricLabel: "Days of downtime",
  },
  {
    key: "pieter",
    tag: "Upgrade · Enterprise ops",
    headline: "Same team, 4× the throughput.",
    body: "Spreadsheet sprawl turned into a real ops product.",
    metric: "4×",
    metricLabel: "Team throughput",
  },
];

/* ---- stylised product UIs ---- */

function ScreenChrome({
  label,
  status,
  children,
}: {
  label: string;
  status: string;
  children: ReactNode;
}) {
  return (
    <div className="overflow-hidden rounded-md border border-border bg-background">
      <div className="flex items-center justify-between border-b border-border bg-card/60 px-2.5 py-1.5 font-mono text-[9px] tracking-[0.14em] text-muted-foreground uppercase">
        <span>{label}</span>
        <span className="inline-flex items-center gap-1 text-emerald-600">
          <span className="h-1 w-1 rounded-full bg-emerald-500" />
          {status}
        </span>
      </div>
      <div className="p-3">{children}</div>
    </div>
  );
}

function MockGameStudio() {
  return (
    <ScreenChrome label="lobby · eu-west" status="6 / 12">
      <div className="grid grid-cols-6 gap-1.5">
        {Array.from({ length: 12 }, (_, i) => (
          <div
            key={i}
            className={
              "aspect-square rounded-sm " +
              (i < 6
                ? "bg-foreground"
                : "border border-dashed border-border bg-background")
            }
          />
        ))}
      </div>
      <div className="mt-3 flex items-center justify-between font-mono text-[10px]">
        <span className="text-muted-foreground">ping 24ms</span>
        <span className="rounded-sm bg-foreground px-1.5 py-0.5 text-background">
          Start match
        </span>
      </div>
    </ScreenChrome>
  );
}

function MockFksrMigration() {
  return (
    <ScreenChrome label="fksr · migration" status="87%">
      <div className="space-y-2 font-mono text-[10px]">
        <div className="flex items-center gap-2 text-muted-foreground">
          <span>v1</span>
          <div className="h-2 flex-1 overflow-hidden rounded-full bg-border">
            <div
              className="h-full rounded-full bg-foreground"
              style={{ width: "87%" }}
            />
          </div>
          <span className="text-foreground">v2</span>
        </div>
        <div className="grid grid-cols-2 gap-2 text-muted-foreground">
          <div>
            <span className="text-foreground">12,847</span> on v1
          </div>
          <div>
            <span className="text-foreground">11,032</span> on v2
          </div>
        </div>
        <div className="inline-flex items-center gap-1 text-emerald-600">
          <span className="h-1 w-1 rounded-full bg-emerald-500" />
          0 downtime · 0 incidents
        </div>
      </div>
    </ScreenChrome>
  );
}

function MockPieterOps() {
  const bars = [10, 14, 18, 22, 30, 38, 52, 70];
  return (
    <ScreenChrome label="ops · throughput" status="142 active">
      <div className="space-y-2 font-mono text-[10px]">
        <div className="flex items-end justify-between gap-1">
          {bars.map((h, i) => (
            <div
              key={i}
              className={
                "w-3 rounded-t-sm " +
                (i === bars.length - 1
                  ? "bg-foreground"
                  : "bg-foreground/30")
              }
              style={{ height: h }}
            />
          ))}
        </div>
        <div className="flex items-center justify-between text-muted-foreground">
          <span>Q3</span>
          <span>Q4</span>
          <span>Q1</span>
          <span className="text-foreground">Q2 · 4×</span>
        </div>
        <div className="text-muted-foreground">
          <span className="text-foreground">38</span> routine ·{" "}
          <span className="text-foreground">104</span> strategic
        </div>
      </div>
    </ScreenChrome>
  );
}

const screens: Record<CaseKey, ReactNode> = {
  game: <MockGameStudio />,
  fksr: <MockFksrMigration />,
  pieter: <MockPieterOps />,
};

export function SolutionsCaseStudies() {
  return (
    <Section>
      <SectionHeader
        eyebrow="Proof"
        title="Real teams. Real ship dates."
        lede="Three live customers on the platform today. Each shipped with a fraction of the engineering footprint."
      />

      <ul className="mt-12 grid gap-6 lg:grid-cols-3">
        {cases.map((c) => (
          <li
            key={c.key}
            className="flex h-full flex-col rounded-xl border border-border bg-card p-7"
          >
            <p className="text-xs font-medium tracking-[0.18em] text-muted-foreground uppercase">
              {c.tag}
            </p>
            <h3 className="mt-4 text-balance text-lg font-semibold tracking-tight text-foreground">
              {c.headline}
            </h3>
            <p className="mt-3 text-sm text-muted-foreground">{c.body}</p>

            <div className="mt-5">{screens[c.key]}</div>

            <div className="mt-auto flex items-end justify-between border-t border-border pt-5">
              <div>
                <p className="text-3xl font-semibold tracking-tight text-foreground">
                  {c.metric}
                </p>
                <p className="mt-1 text-xs tracking-[0.12em] text-muted-foreground uppercase">
                  {c.metricLabel}
                </p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </Section>
  );
}
