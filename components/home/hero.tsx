import Link from "next/link";
import { Container } from "@/components/site/container";
import { Button } from "@/components/ui/button";
import { HeroFlow } from "./hero-flow";

export function HomeHero() {
  return (
    <section className="relative overflow-hidden border-b border-border bg-background">
      <HeroFlow />
      <Container className="relative py-24 sm:py-28 lg:py-32">
        <div className="text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1 text-[11px] font-medium tracking-[0.18em] text-muted-foreground uppercase">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
            The agentic SDLC platform
          </span>

          <h1 className="mx-auto mt-7 max-w-[24ch] text-balance text-5xl font-semibold tracking-tight text-foreground sm:text-6xl lg:text-7xl">
            One <span className="text-dutch">control tower</span> for the
            entire software lifecycle.
          </h1>
          <p className="mx-auto mt-6 max-w-[56ch] text-pretty text-lg text-muted-foreground">
            Xelerate orchestrates the whole software lifecycle — discovery, design,
            build, test, and run — with your team approving every gate.
          </p>

          <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
            <Button asChild variant="brand" size="lg">
              <Link href="/contact">Talk to the team</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/product">See how it works</Link>
            </Button>
          </div>

          <p className="mt-8 text-sm text-muted-foreground">
            Built for small, innovative teams shipping production software.
          </p>
        </div>
      </Container>
    </section>
  );
}
