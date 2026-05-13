import Link from "next/link";
import { Section, SectionHeader } from "@/components/site/section";

const paths = [
  {
    n: "01",
    title: "Build from scratch",
    audience: "Founders and teams starting a new product.",
    body: "You bring the idea and the wedge. We bring the platform, the agent fleet, and a working v1 your users can touch.",
    bullets: [
      "Brief, design, build, test and deploy in one cockpit",
      "Pre-wired auth, payments, monitoring, multi-tenancy",
      "Cloud deploy on AWS, GCP or Azure on day one",
      "Named PM and engineering partner in your channel",
    ],
    timeline: "Working v1 in 4–6 weeks",
  },
  {
    n: "02",
    title: "Upgrade what you have",
    audience: "Products that are working, but creaking.",
    body: "We replatform or extend what's running today, without breaking what your users already rely on. Agents do the rewrite; humans own the cut-over.",
    bullets: [
      "Audit existing codebase and data; surface debt with cost",
      "Agent-driven rewrite with traceable, reviewable diffs",
      "Cut-over plan with rollback at every step",
      "Knowledge handed back to your in-house team",
    ],
    timeline: "First measurable lift in 6–8 weeks",
  },
];

export function SolutionsTwoWaysIn() {
  return (
    <Section>
      <SectionHeader
        eyebrow="Pick your starting line"
        title="Two ways teams ship with us."
        lede="Same platform, same agents — different starting points. Tell us which one fits and we'll scope the first milestone with you."
      />

      <ul className="mt-12 grid gap-6 lg:grid-cols-2">
        {paths.map((path) => (
          <li
            key={path.n}
            className="flex flex-col rounded-xl border border-border bg-card p-8"
          >
            <div className="flex items-baseline justify-between gap-4">
              <p className="text-xs font-medium tracking-[0.18em] text-muted-foreground uppercase">
                {path.n} · {path.audience}
              </p>
            </div>
            <h3 className="mt-3 text-2xl font-semibold tracking-tight text-foreground">
              {path.title}
            </h3>
            <p className="mt-3 text-muted-foreground">{path.body}</p>
            <ul className="mt-6 space-y-2 text-sm">
              {path.bullets.map((b) => (
                <li key={b} className="flex gap-2">
                  <span className="text-foreground/60" aria-hidden>
                    ✓
                  </span>
                  <span className="text-foreground">{b}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8 flex items-center justify-between border-t border-border pt-5">
              <p className="text-sm font-medium text-foreground">
                {path.timeline}
              </p>
              <Link
                href="/contact"
                className="text-sm font-medium text-foreground underline-offset-4 hover:underline"
              >
                Scope mine →
              </Link>
            </div>
          </li>
        ))}
      </ul>
    </Section>
  );
}
