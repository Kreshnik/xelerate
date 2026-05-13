import type { Metadata } from "next";
import { Container } from "@/components/site/container";
import { Eyebrow } from "@/components/site/section";
import { ContactForm } from "@/components/contact/contact-form";
import { ContactDetails } from "@/components/contact/contact-details";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Tell us about the product you want to build. A founding engineer replies within one business day.",
};

export default function ContactPage() {
  return (
    <section className="border-b border-border bg-background">
      <Container className="py-16 sm:py-20 lg:py-24">
        <div className="max-w-3xl">
          <Eyebrow>Contact</Eyebrow>
          <h1 className="mt-5 text-balance text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
            Let&apos;s scope your build.
          </h1>
          <p className="mt-6 text-pretty text-lg text-muted-foreground">
            Share what you&apos;re building and where you are today. A founding
            engineer replies within one business day — every message, no
            gatekeeping.
          </p>
        </div>

        <div className="mt-12 grid gap-12 lg:mt-16 lg:grid-cols-[1.5fr_1fr] lg:gap-16">
          <ContactForm />
          <ContactDetails />
        </div>
      </Container>
    </section>
  );
}
