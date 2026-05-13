import Link from "next/link";
import { Section, SectionHeader } from "@/components/site/section";
import { Button } from "@/components/ui/button";

const roles = [
  { title: "Founding Product Engineer", location: "Amsterdam · Hybrid" },
  { title: "Agent Platform Engineer", location: "Amsterdam · Hybrid" },
  { title: "Design Engineer", location: "Remote · EU" },
  { title: "Developer Relations · Lead", location: "Amsterdam" },
];

export function AboutCareers() {
  return (
    <Section id="careers" className="border-y border-border bg-card/40">
      <SectionHeader
        eyebrow="Work with us"
        title="We hire operators."
        lede={`Small team. High autonomy. Every hire ships within the first week. If "operator" resonates more than "thought leader", introduce yourself.`}
      />

      <div className="mt-12 grid gap-10 lg:grid-cols-[1.2fr_1fr] lg:items-start">
        <ul className="divide-y divide-border overflow-hidden rounded-xl border border-border bg-card">
          {roles.map((r) => (
            <li
              key={r.title}
              className="flex items-center justify-between gap-4 p-5"
            >
              <p className="text-base font-semibold text-foreground">{r.title}</p>
              <p className="text-xs tracking-[0.18em] text-muted-foreground uppercase">
                {r.location}
              </p>
            </li>
          ))}
        </ul>

        <div className="rounded-xl border border-border bg-card p-7">
          <p className="text-xs font-medium tracking-[0.18em] text-muted-foreground uppercase">
            How to apply
          </p>
          <p className="mt-3 text-base text-foreground">
            One inbox, one human reads it. Send a short note and a link to something
            you&apos;ve shipped — we reply within a business day.
          </p>
          <div className="mt-6">
            <Button asChild variant="outline" size="lg">
              <Link href="/contact">Introduce yourself</Link>
            </Button>
          </div>
        </div>
      </div>
    </Section>
  );
}
