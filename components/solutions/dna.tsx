import { Section, SectionHeader } from "@/components/site/section";

const yours = [
  "Product vision, brand voice and roadmap calls",
  "The proprietary data and IP that compounds",
  "Approvals at every phase gate",
  "Direct access to your users and their feedback",
];

const ours = [
  "The control tower, agent fleet and orchestration",
  "Pre-wired auth, payments, telemetry and security",
  "Best-model routing across Anthropic, OpenAI, Google",
  "Cloud deploys on AWS, GCP or Azure",
];

const partners = [
  "AWS",
  "GCP",
  "Azure",
  "Anthropic",
  "OpenAI",
  "Google",
  "Stripe",
  "Okta",
  "Datadog",
];

export function SolutionsDna() {
  return (
    <Section className="border-y border-border bg-card/40">
      <SectionHeader
        eyebrow="Division of labour"
        title="You keep what makes the product yours. We carry everything else."
        lede="A clear line between the work that compounds your IP and the platform work that doesn't. No black boxes, no lock-in of your data, no team rebuild when you graduate."
      />

      <div className="mt-12 grid gap-px overflow-hidden rounded-xl border border-border bg-border lg:grid-cols-2">
        <article className="bg-card p-8">
          <p className="text-xs font-medium tracking-[0.18em] text-muted-foreground uppercase">
            Yours
          </p>
          <p className="mt-3 text-lg font-semibold tracking-tight text-foreground">
            DNA, IP and the decisions only you can make.
          </p>
          <ul className="mt-6 space-y-3 text-sm">
            {yours.map((item) => (
              <li key={item} className="flex gap-2.5 text-foreground">
                <span className="text-foreground/50" aria-hidden>
                  ✓
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </article>

        <article className="bg-card p-8">
          <p className="text-xs font-medium tracking-[0.18em] text-muted-foreground uppercase">
            Ours
          </p>
          <p className="mt-3 text-lg font-semibold tracking-tight text-foreground">
            The platform, agents and the boring bits underneath.
          </p>
          <ul className="mt-6 space-y-3 text-sm">
            {ours.map((item) => (
              <li key={item} className="flex gap-2.5 text-foreground">
                <span className="text-foreground/50" aria-hidden>
                  ✓
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </article>
      </div>

      <div className="mt-10">
        <p className="text-xs font-medium tracking-[0.18em] text-muted-foreground uppercase">
          Runs on stacks you already trust
        </p>
        <ul className="mt-4 flex flex-wrap gap-2">
          {partners.map((p) => (
            <li
              key={p}
              className="rounded-md border border-border bg-card px-2.5 py-1 text-xs font-medium tracking-wider text-foreground uppercase"
            >
              {p}
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}
