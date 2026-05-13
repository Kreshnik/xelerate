import Link from "next/link";
import type { ReactNode } from "react";
import { Section, Eyebrow } from "./section";
import { Button } from "@/components/ui/button";

interface CtaBlockProps {
  eyebrow?: string;
  title: ReactNode;
  lede?: ReactNode;
  primaryHref?: string;
  primaryLabel?: string;
  secondaryHref?: string;
  secondaryLabel?: string;
  footnote?: string;
}

export function CtaBlock({
  eyebrow = "Ready?",
  title,
  lede,
  primaryHref = "/contact",
  primaryLabel = "Start orchestrating",
  secondaryHref = "/contact",
  secondaryLabel = "Talk to the team",
  footnote = "● Free to start. No credit card.",
}: CtaBlockProps) {
  return (
    <Section className="border-t border-border bg-card/40">
      <div className="mx-auto max-w-3xl text-center">
        <Eyebrow>{eyebrow}</Eyebrow>
        <h2 className="mt-4 text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
          {title}
        </h2>
        {lede && (
          <p className="mt-5 text-base text-muted-foreground sm:text-lg">{lede}</p>
        )}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <Button asChild variant="brand" size="lg">
            <Link href={primaryHref}>{primaryLabel}</Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link href={secondaryHref}>{secondaryLabel}</Link>
          </Button>
        </div>
        {footnote && (
          <p className="mt-6 text-xs tracking-[0.18em] text-muted-foreground uppercase">
            {footnote}
          </p>
        )}
      </div>
    </Section>
  );
}
