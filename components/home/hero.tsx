import Link from "next/link";
import { Container } from "@/components/site/container";
import { Eyebrow } from "@/components/site/section";
import { Button } from "@/components/ui/button";

const lifecyclePhases = [
  { step: "01", phase: "Discovery", title: "Frame the problem", role: "Product Manager", initials: "PM", anchor: "phase-spark" },
  { step: "02", phase: "Design", title: "Plan the build", role: "Design Agent", initials: "DS", anchor: "phase-shape" },
  { step: "03", phase: "Development", title: "Ship the code", role: "Engineer", initials: "EN", anchor: "phase-build" },
  { step: "04", phase: "Testing", title: "Prove it works", role: "QA Agent", initials: "QA", anchor: "phase-launch" },
  { step: "05", phase: "Maintenance", title: "Keep it alive", role: "Observer", initials: "OB", anchor: "phase-scale" },
];

export function HomeHero() {
  return (
    <section className="relative overflow-hidden border-b border-border bg-background">
      <Container className="py-20 sm:py-28 lg:py-32">
        <div className="max-w-3xl">
          <Eyebrow>The agentic SDLC platform</Eyebrow>
          <h1 className="mt-5 text-balance text-4xl font-semibold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            One control tower for the entire software lifecycle.
          </h1>
          <p className="mt-6 text-pretty text-lg text-muted-foreground">
            Xelerate orchestrates AI agents across discovery, design, development, testing,
            and maintenance — with your team in the control tower, every step of the way.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Button asChild variant="brand" size="lg">
              <Link href="/contact">Chat with our PM agent</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/contact">Watch the 2-min tour</Link>
            </Button>
          </div>
          <p className="mt-8 text-sm text-muted-foreground">
            Trusted by small, innovative teams shipping production software ·{" "}
            <Link href="/solutions" className="text-foreground underline-offset-4 hover:underline">
              See case studies →
            </Link>
          </p>
        </div>

        <ol className="mt-16 grid gap-3 lg:grid-cols-5">
          {lifecyclePhases.map((p) => (
            <li
              key={p.step}
              className="group rounded-xl border border-border bg-card p-5 transition-colors hover:border-foreground/30"
            >
              <p className="text-[10px] font-medium tracking-[0.18em] text-muted-foreground uppercase">
                {p.step} · {p.phase}
              </p>
              <p className="mt-3 text-lg font-semibold text-foreground">{p.title}</p>
              <Link
                href={`/approach#${p.anchor}`}
                className="mt-4 inline-flex items-center gap-2 text-xs text-muted-foreground"
                aria-label={`Jump to ${p.title} on the Approach page`}
              >
                <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-secondary text-[10px] font-semibold text-foreground">
                  {p.initials}
                </span>
                {p.role}
              </Link>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
