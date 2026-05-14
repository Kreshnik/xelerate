import type { ReactNode } from "react";
import { Container } from "./container";
import { Eyebrow } from "./section";

interface PageHeroProps {
  eyebrow: string;
  title: ReactNode;
  lede?: ReactNode;
  children?: ReactNode;
}

export function PageHero({ eyebrow, title, lede, children }: PageHeroProps) {
  return (
    <section className="flex min-h-svh flex-col justify-center border-b border-border bg-background">
      <Container className="py-20 sm:py-24 lg:py-28">
        <div className="max-w-3xl">
          <Eyebrow>{eyebrow}</Eyebrow>
          <h1 className="mt-5 text-balance text-4xl font-semibold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            {title}
          </h1>
          {lede && (
            <p className="mt-6 text-pretty text-lg text-muted-foreground">{lede}</p>
          )}
          {children && <div className="mt-8">{children}</div>}
        </div>
      </Container>
    </section>
  );
}
