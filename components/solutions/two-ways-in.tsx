import Link from "next/link";
import { Section, SectionHeader } from "@/components/site/section";
import { Button } from "@/components/ui/button";

const paths = [
  {
    n: "01",
    title: "Build from scratch",
    body: "For founders and teams starting a new product. You bring the idea; we bring the platform, the agents, and a working v1.",
    bullets: [
      "Brief, design, build, test & deploy in one cockpit",
      "Pre-wired auth, payments, monitoring, multi-tenancy",
      "Cloud deploy on AWS / GCP / Azure on day one",
      "Named PM + Eng partner from Saga, in your channel",
    ],
  },
  {
    n: "02",
    title: "From V1.0 to V2.0",
    body: "For products that are working but creaking. We replatform — or extend — without breaking what your users already rely on.",
    bullets: [
      "Audit existing codebase & data; surface debt",
      "Agent-driven rewrite with traceable diffs",
      "Cut-over plan with rollback at every step",
      "Knowledge handed back to your in-house team",
    ],
  },
];

export function SolutionsTwoWaysIn() {
  return (
    <Section className="border-y border-border bg-card/40">
      <SectionHeader
        eyebrow="Two ways in"
        title="Build from scratch, or upgrade what you have."
        lede="Same platform. Same agents. Different starting points."
      />

      <ul className="mt-12 grid gap-6 lg:grid-cols-2">
        {paths.map((path) => (
          <li
            key={path.n}
            className="rounded-xl border border-border bg-card p-8"
          >
            <p className="text-xs font-medium tracking-[0.18em] text-muted-foreground uppercase">
              {path.n}
            </p>
            <h3 className="mt-3 text-2xl font-semibold tracking-tight text-foreground">
              {path.title}
            </h3>
            <p className="mt-3 text-muted-foreground">{path.body}</p>
            <ul className="mt-6 space-y-2 text-sm">
              {path.bullets.map((b) => (
                <li key={b} className="flex gap-2">
                  <span className="text-foreground/70" aria-hidden>✓</span>
                  <span className="text-foreground">{b}</span>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>

      <div className="mt-12 rounded-xl border border-border bg-card p-8 text-center sm:text-left sm:flex sm:items-center sm:justify-between sm:gap-6">
        <div>
          <p className="text-base text-foreground">
            We ship a working v1 in <span className="font-semibold">4–6 weeks</span>.
          </p>
          <p className="mt-2 text-sm text-muted-foreground">
            Talk to us about your timeline — we&apos;ll tell you which mode fits and
            what a realistic first milestone looks like for your team.
          </p>
        </div>
        <div className="mt-5 flex flex-col items-start gap-2 sm:mt-0 sm:items-end">
          <Button asChild variant="brand">
            <Link href="/contact">Start a project</Link>
          </Button>
          <p className="text-xs text-muted-foreground">
            Reply within 1 business day · Amsterdam, NL · Remote-friendly
          </p>
        </div>
      </div>
    </Section>
  );
}
