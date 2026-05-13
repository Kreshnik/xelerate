import type { Metadata } from "next";
import { PageHero } from "@/components/site/page-hero";
import { Container } from "@/components/site/container";
import { ContactForm } from "@/components/contact/contact-form";
import { ContactDetails } from "@/components/contact/contact-details";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Tell us about your project. One of the founding team will reply within one business day.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Tell us about your project."
        lede="We read every message. One of the founding team will reply within one business day. Or just say hi."
      />

      <Container className="grid gap-12 py-20 lg:grid-cols-[1.4fr_1fr]">
        <ContactForm />
        <ContactDetails />
      </Container>
    </>
  );
}
