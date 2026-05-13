"use client";

import { useState } from "react";
import { Section, SectionHeader } from "@/components/site/section";

type Option = { label: string; selected?: boolean };
type Question = { prompt: string; options: Option[] };
type ModuleKey = "auth" | "payments" | "tenancy" | "i18n" | "monitoring";
type ModuleConfig = {
  label: string;
  tag: string;
  fractions: string;
  approveSummary: string;
  questions: Question[];
};

const moduleTabs: Array<{ key: ModuleKey; label: string; tag: string }> = [
  { key: "auth", label: "Authentication", tag: "SSO · MFA · RBAC" },
  { key: "payments", label: "Payments", tag: "Stripe · Adyen · Mollie" },
  { key: "tenancy", label: "Multi-tenancy", tag: "Per-org isolation" },
  { key: "i18n", label: "Multi-Language", tag: "40+ locales · RTL · ICU" },
  { key: "monitoring", label: "Monitoring", tag: "Traces · Logs · SLOs" },
];

const configs: Record<ModuleKey, ModuleConfig> = {
  auth: {
    label: "Authentication",
    tag: "SSO · MFA · RBAC",
    fractions: "6 fractions · 3 configured",
    approveSummary: "Email · Google · SAML + TOTP + RBAC",
    questions: [
      {
        prompt: "Which providers do you need?",
        options: [
          { label: "Email + password", selected: true },
          { label: "Magic links" },
          { label: "Google", selected: true },
          { label: "Microsoft" },
          { label: "SAML / Okta", selected: true },
        ],
      },
      {
        prompt: "Multi-factor?",
        options: [
          { label: "Off" },
          { label: "TOTP", selected: true },
          { label: "WebAuthn" },
          { label: "SMS fallback" },
        ],
      },
      {
        prompt: "Roles & permissions?",
        options: [
          { label: "Flat" },
          { label: "RBAC", selected: true },
          { label: "ABAC" },
        ],
      },
    ],
  },
  payments: {
    label: "Payments",
    tag: "Stripe · Adyen · Mollie",
    fractions: "5 fractions · 3 configured",
    approveSummary: "Stripe · subscription + metered · auto tax",
    questions: [
      {
        prompt: "Which providers?",
        options: [
          { label: "Stripe", selected: true },
          { label: "Adyen" },
          { label: "Mollie" },
          { label: "Apple Pay", selected: true },
          { label: "Google Pay" },
        ],
      },
      {
        prompt: "Billing model?",
        options: [
          { label: "One-time" },
          { label: "Subscription", selected: true },
          { label: "Metered", selected: true },
          { label: "Hybrid" },
        ],
      },
      {
        prompt: "Tax handling?",
        options: [
          { label: "Auto · Stripe Tax", selected: true },
          { label: "Manual rules" },
          { label: "External · Avalara" },
        ],
      },
    ],
  },
  tenancy: {
    label: "Multi-tenancy",
    tag: "Per-org isolation",
    fractions: "5 fractions · 3 configured",
    approveSummary: "Schema-per-tenant · DB + cache + queue · lazy provision",
    questions: [
      {
        prompt: "Isolation level?",
        options: [
          { label: "Shared schema" },
          { label: "Row-level" },
          { label: "Schema-per-tenant", selected: true },
          { label: "DB-per-tenant" },
        ],
      },
      {
        prompt: "Per-tenant resources?",
        options: [
          { label: "Database", selected: true },
          { label: "Cache", selected: true },
          { label: "Queue", selected: true },
          { label: "Blob" },
          { label: "Search" },
        ],
      },
      {
        prompt: "Provisioning?",
        options: [
          { label: "Lazy · on first request", selected: true },
          { label: "Pre-provision" },
          { label: "Hybrid" },
        ],
      },
    ],
  },
  i18n: {
    label: "Multi-Language",
    tag: "40+ locales · RTL · ICU",
    fractions: "4 fractions · 3 configured",
    approveSummary: "JSON · ICU plurals · EN/FR/DE/JA/AR live",
    questions: [
      {
        prompt: "Locales to enable?",
        options: [
          { label: "EN", selected: true },
          { label: "FR", selected: true },
          { label: "DE", selected: true },
          { label: "JA", selected: true },
          { label: "AR · RTL", selected: true },
          { label: "+35 more" },
        ],
      },
      {
        prompt: "Storage format?",
        options: [
          { label: "JSON", selected: true },
          { label: "PO / MO" },
          { label: "XLIFF" },
        ],
      },
      {
        prompt: "Pluralisation?",
        options: [
          { label: "ICU MessageFormat", selected: true },
          { label: "CLDR rules" },
          { label: "Custom" },
        ],
      },
    ],
  },
  monitoring: {
    label: "Monitoring",
    tag: "Traces · Logs · SLOs",
    fractions: "5 fractions · 3 configured",
    approveSummary: "OpenTelemetry · SLO budgets · agents first",
    questions: [
      {
        prompt: "Backend?",
        options: [
          { label: "OpenTelemetry", selected: true },
          { label: "Datadog" },
          { label: "Honeycomb" },
          { label: "Self-hosted" },
        ],
      },
      {
        prompt: "SLO budgets?",
        options: [
          { label: "Off" },
          { label: "Standard · 99.9%", selected: true },
          { label: "Custom per-service" },
        ],
      },
      {
        prompt: "Alert routing?",
        options: [
          { label: "Agents triage first", selected: true },
          { label: "Humans first" },
          { label: "Hybrid · by severity" },
        ],
      },
    ],
  },
};

export function ModuleConfigurator() {
  const [activeKey, setActiveKey] = useState<ModuleKey>("auth");
  const config = configs[activeKey];

  return (
    <Section className="border-y border-border bg-card/40">
      <SectionHeader
        eyebrow="Configure a module"
        title="Plug in the modules your product needs."
        lede="Every module is shipped with a machine-readable questionnaire. Agents propose a configuration from your brief; you approve the choices. Drop it in — they already know how to wire it."
      />

      <div className="mt-12 grid gap-8 lg:grid-cols-[280px_1fr]">
        <div>
          <p className="text-xs font-medium tracking-[0.18em] text-muted-foreground uppercase">
            Pick a module
          </p>
          <ul className="mt-4 space-y-1.5" aria-label="Module list" role="tablist">
            {moduleTabs.map((t) => {
              const current = t.key === activeKey;
              return (
                <li key={t.key}>
                  <button
                    type="button"
                    role="tab"
                    aria-selected={current}
                    aria-controls={`module-panel-${t.key}`}
                    onClick={() => setActiveKey(t.key)}
                    className={
                      "w-full rounded-md border px-3 py-2.5 text-left transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background " +
                      (current
                        ? "border-foreground bg-foreground text-background"
                        : "border-border bg-background text-muted-foreground hover:border-foreground/40 hover:text-foreground")
                    }
                  >
                    <p className="text-sm font-medium">{t.label}</p>
                    <p
                      className={
                        "mt-0.5 text-[10px] tracking-wider uppercase " +
                        (current
                          ? "text-background/70"
                          : "text-muted-foreground/80")
                      }
                    >
                      {t.tag}
                    </p>
                  </button>
                </li>
              );
            })}
          </ul>
        </div>

        <article
          role="tabpanel"
          id={`module-panel-${activeKey}`}
          aria-labelledby={`module-tab-${activeKey}`}
          className="rounded-xl border border-border bg-card shadow-sm"
        >
          <header className="flex items-center justify-between border-b border-border bg-background/60 px-5 py-3 text-[11px] font-medium tracking-[0.18em] text-muted-foreground uppercase">
            <span>
              {config.label} module · {config.fractions}
            </span>
            <span className="inline-flex items-center gap-2 text-dutch">
              <span className="relative inline-flex h-1.5 w-1.5">
                <span className="absolute inset-0 rounded-full bg-dutch opacity-70 motion-safe:animate-ping" />
                <span className="relative inline-block h-1.5 w-1.5 rounded-full bg-dutch" />
              </span>
              Agent proposal · awaiting you
            </span>
          </header>

          <div className="space-y-7 p-6 sm:p-8">
            {config.questions.map((q, idx) => (
              <div key={`${activeKey}-${q.prompt}`}>
                <div className="flex items-center gap-2">
                  <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-foreground text-[10px] font-semibold text-background">
                    {String(idx + 1).padStart(2, "0")}
                  </span>
                  <p className="text-sm font-medium text-foreground">
                    {q.prompt}
                  </p>
                </div>
                <ul className="mt-3 flex flex-wrap gap-2 pl-7">
                  {q.options.map((o) => (
                    <li key={o.label}>
                      <span
                        className={
                          "inline-flex items-center gap-1.5 rounded-md border px-2.5 py-1 text-xs transition-colors " +
                          (o.selected
                            ? "border-foreground bg-foreground text-background"
                            : "border-border bg-background text-muted-foreground")
                        }
                      >
                        {o.selected && (
                          <span aria-hidden className="text-[10px] leading-none">
                            ✓
                          </span>
                        )}
                        {o.label}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <footer className="flex flex-col items-start justify-between gap-3 border-t border-border bg-background/40 px-5 py-3 text-xs sm:flex-row sm:items-center">
            <span className="font-mono text-[11px] text-muted-foreground">
              {config.approveSummary}
            </span>
            <span className="inline-flex items-center gap-1.5 font-mono text-[11px] text-foreground">
              <span className="rounded-sm bg-foreground px-1.5 py-0.5 text-background">
                Approve
              </span>
              <span className="text-muted-foreground">to ship</span>
            </span>
          </footer>
        </article>
      </div>
    </Section>
  );
}
