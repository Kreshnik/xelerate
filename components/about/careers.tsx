import Link from "next/link";
import { Section, SectionHeader } from "@/components/site/section";

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
        lede={`Small team. High autonomy. Every hire ships within the first week. If "operator" resonates more than "thought leader", we should talk.`}
      />

      <ul className="mt-12 divide-y divide-border rounded-xl border border-border bg-card">
        {roles.map((r) => (
          <li key={r.title}>
            <Link
              href="/contact"
              className="flex items-center justify-between gap-4 p-5 transition-colors hover:bg-secondary"
            >
              <div>
                <p className="text-base font-semibold text-foreground">
                  {r.title}
                </p>
                <p className="mt-1 text-xs tracking-[0.18em] text-muted-foreground uppercase">
                  {r.location}
                </p>
              </div>
              <span className="text-sm text-muted-foreground">Apply →</span>
            </Link>
          </li>
        ))}
      </ul>

      <div className="mt-6 text-center">
        <Link
          href="/contact"
          className="text-xs tracking-[0.18em] text-foreground uppercase underline-offset-4 hover:underline"
        >
          View all roles →
        </Link>
      </div>
    </Section>
  );
}
