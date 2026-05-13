import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/site/page-hero";
import { AboutOrigin } from "@/components/about/origin";
import { AboutPrinciples } from "@/components/about/principles";
import { AboutDogfood } from "@/components/about/dogfood";
import { AboutTeam } from "@/components/about/team";
import { AboutBackers } from "@/components/about/backers";
import { AboutCareers } from "@/components/about/careers";
import { CtaBlock } from "@/components/site/cta-block";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "About",
  description:
    "We're building the operating layer for AI-augmented software teams — so a team of five can ship like a team of fifty.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Xelerate.ai"
        title="A control tower for software, built in Amsterdam."
        lede="We're building the operating layer for AI-augmented software teams — so a team of five can ship like a team of fifty, without losing what good engineering feels like."
      >
        <div className="flex flex-wrap items-center gap-3">
          <Button asChild variant="brand" size="lg">
            <Link href="/contact">Chat with our PM agent</Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link href="/contact">Talk to the team</Link>
          </Button>
        </div>
        <p className="mt-6 text-xs tracking-[0.18em] text-muted-foreground uppercase">
          Founded 2025 · Amsterdam, NL · A small team of operators
        </p>
      </PageHero>
      <AboutOrigin />
      <AboutPrinciples />
      <AboutDogfood />
      <AboutTeam />
      <AboutBackers />
      <AboutCareers />
      <CtaBlock
        title="Run your next project from one control tower."
        lede="Bring your own model keys or use ours. Your team in the loop, every step of the way."
      />
    </>
  );
}
