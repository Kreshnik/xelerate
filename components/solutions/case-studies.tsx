import Link from "next/link";
import { Section, SectionHeader } from "@/components/site/section";

const cases = [
  {
    tag: "Build from scratch · Gaming",
    name: "Game studio v1",
    body: "A 3-person founding team shipped a multiplayer prototype to public beta in 7 weeks — without a dedicated platform engineer.",
    metric: "7 wks",
    metricLabel: "Design → public beta",
  },
  {
    tag: "V1 → V2 · Civic-tech",
    name: "FKSR — replatform",
    body: "An ageing internal tool was rebuilt on a modern stack while it kept serving real users. Agents handled the rewrite; humans owned the cut-over.",
    metric: "0",
    metricLabel: "Days of downtime",
  },
  {
    tag: "Enterprise · Operations",
    name: "Pieter — operations platform",
    body: "An enterprise replaced a tangle of spreadsheets with a real operations product. Agents drafted, humans approved, the same team scaled 4×.",
    metric: "4×",
    metricLabel: "Team throughput",
  },
];

export function SolutionsCaseStudies() {
  return (
    <Section>
      <SectionHeader
        eyebrow="Case studies"
        title="Real products, shipped through Xelerate."
        lede="Three live customers running on the platform today. Each ships features with a fraction of the engineering footprint."
      />

      <ul className="mt-12 grid gap-6 lg:grid-cols-3">
        {cases.map((c) => (
          <li key={c.name}>
            <Link
              href="/contact"
              className="group flex h-full flex-col rounded-xl border border-border bg-card p-7 transition-colors hover:border-foreground/40"
            >
              <div className="aspect-[16/10] rounded-lg bg-gradient-to-br from-secondary to-background" />
              <p className="mt-6 text-xs font-medium tracking-[0.18em] text-muted-foreground uppercase">
                {c.tag}
              </p>
              <h3 className="mt-3 text-lg font-semibold tracking-tight text-foreground">
                {c.name}
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">{c.body}</p>
              <div className="mt-6 flex items-end justify-between border-t border-border pt-4">
                <div>
                  <p className="text-2xl font-semibold text-foreground">{c.metric}</p>
                  <p className="text-xs text-muted-foreground">{c.metricLabel}</p>
                </div>
                <span className="text-xs text-foreground/70 group-hover:translate-x-0.5 transition-transform">
                  Read the case study →
                </span>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </Section>
  );
}
