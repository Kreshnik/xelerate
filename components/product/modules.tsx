import type { ReactNode } from "react";
import { Section, SectionHeader } from "@/components/site/section";

type ModuleKey =
  | "auth"
  | "payments"
  | "tenancy"
  | "i18n"
  | "monitoring"
  | "notifications";

type Module = {
  name: string;
  tag: string;
  body: string;
  mock: ModuleKey;
};

const modules: Module[] = [
  {
    name: "Authentication",
    tag: "SSO · MFA · RBAC",
    body: "Every provider you'd normally bolt on, with role-based access on by default.",
    mock: "auth",
  },
  {
    name: "Payments",
    tag: "Stripe · Adyen · Mollie",
    body: "One-time, subscription, and metered billing with tax and invoicing handled. PCI-compliant by construction.",
    mock: "payments",
  },
  {
    name: "Multi-tenancy",
    tag: "Per-org isolation",
    body: "Each tenant gets its own database, queues, blob and cache. Shared infra without a shared blast radius.",
    mock: "tenancy",
  },
  {
    name: "Multi-Language",
    tag: "40+ locales · RTL",
    body: "Translation memory and ICU pluralisation included, so adding a market is a config change, not a refactor.",
    mock: "i18n",
  },
  {
    name: "Monitoring",
    tag: "Traces · Logs · SLOs",
    body: "OpenTelemetry by default, with SLO budgets and alerts that route to the right agent before they wake humans.",
    mock: "monitoring",
  },
  {
    name: "Notifications",
    tag: "Email · SMS · Push · In-app",
    body: "Templated, batched, and respectful of quiet hours. Unsubscribe and preference centre included.",
    mock: "notifications",
  },
];

function MockAuth() {
  return (
    <div className="space-y-1.5 font-mono text-[10px]">
      <div className="flex flex-wrap gap-1">
        {["Email", "Google", "SAML"].map((p) => (
          <span
            key={p}
            className="rounded-sm border border-border bg-background px-1.5 py-0.5 text-foreground"
          >
            {p}
          </span>
        ))}
      </div>
      <div className="flex items-center gap-3 text-muted-foreground">
        <span className="inline-flex items-center gap-1">
          <span className="h-1 w-1 rounded-full bg-emerald-500" />
          MFA · TOTP
        </span>
        <span className="inline-flex items-center gap-1">
          <span className="h-1 w-1 rounded-full bg-emerald-500" />
          RBAC
        </span>
      </div>
    </div>
  );
}

function MockPayments() {
  return (
    <div className="space-y-1 font-mono text-[10px]">
      <div className="flex items-center justify-between">
        <span className="text-foreground">€45.00</span>
        <span className="text-muted-foreground">Visa ··4242</span>
      </div>
      <div className="flex items-center justify-between text-[9px]">
        <span className="text-muted-foreground">inv_4Ko29q</span>
        <span className="inline-flex items-center gap-1 text-emerald-600">
          <span className="h-1 w-1 rounded-full bg-emerald-500" />
          Paid · 1.8s
        </span>
      </div>
    </div>
  );
}

function MockTenancy() {
  return (
    <ul className="space-y-0.5 font-mono text-[10px] leading-snug">
      <li className="text-foreground">acme.tenant</li>
      <li className="text-muted-foreground">├ db · cache · queue</li>
      <li className="text-muted-foreground">└ blob · search · audit</li>
      <li className="mt-1 text-muted-foreground/70">↳ isolated · no shared blast</li>
    </ul>
  );
}

function MockI18n() {
  return (
    <div className="space-y-1">
      <div className="flex flex-wrap gap-1 font-mono text-[10px]">
        {[
          { code: "EN" },
          { code: "FR" },
          { code: "JA" },
          { code: "AR", tag: "RTL" },
          { code: "DE" },
        ].map((l) => (
          <span
            key={l.code}
            className="inline-flex items-center gap-0.5 rounded-sm border border-border bg-background px-1.5 py-0.5"
          >
            <span className="text-foreground">{l.code}</span>
            {l.tag && (
              <span className="text-[8px] text-muted-foreground">{l.tag}</span>
            )}
          </span>
        ))}
      </div>
      <p className="font-mono text-[9px] text-muted-foreground">
        +35 locales · ICU · timezones
      </p>
    </div>
  );
}

function MockMonitoring() {
  return (
    <div className="space-y-1">
      <div className="flex items-end justify-between font-mono text-[10px]">
        <span className="text-foreground">p99 · 142ms</span>
        <span className="inline-flex items-center gap-1 text-emerald-600">
          <span className="h-1 w-1 rounded-full bg-emerald-500" />
          SLO 99.9%
        </span>
      </div>
      <svg
        viewBox="0 0 120 16"
        preserveAspectRatio="none"
        className="block h-4 w-full text-foreground"
        aria-hidden
      >
        <polyline
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
          strokeLinecap="round"
          strokeLinejoin="round"
          points="0,11 12,9 24,12 38,8 50,10 62,6 74,7 88,4 102,5 120,3"
        />
      </svg>
    </div>
  );
}

function MockNotifications() {
  return (
    <ul className="space-y-1 font-mono text-[10px]">
      <li className="flex items-center gap-2">
        <span className="text-emerald-600">✓</span>
        <span className="text-foreground">Email · receipt.4Ko29q</span>
      </li>
      <li className="flex items-center gap-2">
        <span className="text-emerald-600">✓</span>
        <span className="text-foreground">Push · "Payout en route"</span>
      </li>
      <li className="flex items-center gap-2 text-muted-foreground">
        <span aria-hidden>·</span>
        <span>Quiet · 22:00 → 07:00</span>
      </li>
    </ul>
  );
}

const moduleMocks: Record<ModuleKey, ReactNode> = {
  auth: <MockAuth />,
  payments: <MockPayments />,
  tenancy: <MockTenancy />,
  i18n: <MockI18n />,
  monitoring: <MockMonitoring />,
  notifications: <MockNotifications />,
};

export function ProductModules() {
  return (
    <Section>
      <SectionHeader
        eyebrow="The full catalogue"
        title="The modules your project is built from."
        lede="The plumbing every product needs — already built, hardened in production, and ready for agents to wire."
      />

      <ul className="mt-12 grid gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
        {modules.map((m) => (
          <li key={m.name} className="flex flex-col bg-card p-7">
            <p className="text-xs font-medium tracking-[0.18em] text-muted-foreground uppercase">
              {m.name}
            </p>
            <h3 className="mt-3 text-lg font-semibold tracking-tight text-foreground">
              {m.tag}
            </h3>
            <p className="mt-3 text-sm text-muted-foreground">{m.body}</p>
            <div className="mt-5 flex flex-1 flex-col justify-end">
              <div className="rounded-md border border-dashed border-border bg-background/60 p-3">
                {moduleMocks[m.mock]}
              </div>
            </div>
          </li>
        ))}
      </ul>
    </Section>
  );
}
