import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/site/page-hero";
import { AboutDogfood } from "@/components/about/dogfood";
import { AboutOrigin } from "@/components/about/origin";
import { AboutPrinciples } from "@/components/about/principles";
import { AboutTeam } from "@/components/about/team";
import { AboutBackers } from "@/components/about/backers";
import { AboutCareers } from "@/components/about/careers";
import { CtaBlock } from "@/components/site/cta-block";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "About",
  description:
    "A small team of operators in Amsterdam building the control tower for AI-augmented software teams. Backed by people who've shipped at Adyen, Booking, and Miro.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Xelerate.ai"
        title="A small team of operators building the control tower for AI-augmented software."
        lede="We're the senior engineers who spent too many Fridays staring at a Jira board. Xelerate is the tool we wanted then — one place to steer agents, keep humans in the loop, and ship without losing the thread."
      >
        <div className="flex flex-wrap items-center gap-3">
          <Button asChild variant="brand" size="lg">
            <Link href="/contact">Talk to the team</Link>
          </Button>
          <Button asChild variant="ghost" size="lg">
            <Link href="#careers">See open roles</Link>
          </Button>
        </div>
        <p className="mt-6 text-xs tracking-[0.18em] text-muted-foreground uppercase">
          Founded 2025 · Amsterdam, NL · Pre-seed
        </p>
      </PageHero>
      <AboutDogfood />
      <AboutOrigin />
      <AboutPrinciples />
      <AboutTeam />
      <AboutBackers />
      <AboutCareers />
      <CtaBlock
        eyebrow="Talk to us"
        title="The fastest way to understand Xelerate is to meet the people building it."
        lede="A 30-minute call with a founder. No deck. We'll show you the board we run our own roadmap on."
        primaryLabel="Talk to the team"
        secondaryLabel="See open roles"
        secondaryHref="#careers"
        footnote="● Amsterdam, NL · Replies within one business day"
      />
    </>
  );
}
