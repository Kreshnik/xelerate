import { Section, SectionHeader } from "@/components/site/section";

const stages = ["Spark", "Shape", "Build", "Launch", "Scale"];

const entries = [
  {
    tag: "You have an idea",
    name: "Early Founder",
    body: "You know the problem. You're not sure yet about the solution, the market, or how to build it. We start at Spark and run the full Arc with you.",
    highlights: [0, 1, 2, 3, 4],
  },
  {
    tag: "You have a product",
    name: "Startup / Scale-up",
    body: "You're live but need to move faster, build better, or break into a new market. We plug in at the phase where you need the most firepower.",
    highlights: [1, 2, 3, 4],
  },
  {
    tag: "You have a business",
    name: "Corporate / Organization",
    body: "You're established but need to innovate or launch a new product line. We run the Arc on your next venture — fast and AI-first.",
    highlights: [0, 1, 2, 3, 4],
  },
];

export function ApproachEntryPoints() {
  return (
    <Section>
      <SectionHeader
        eyebrow="Where do you enter?"
        title="The Arc meets you where you are."
        lede="You don't have to start from zero. The Arc is modular — we engage the phases relevant to your current stage, and stay in the saga through Scale."
      />

      <ul className="mt-12 grid gap-6 lg:grid-cols-3">
        {entries.map((e) => (
          <li
            key={e.name}
            className="flex flex-col rounded-xl border border-border bg-card p-7"
          >
            <p className="text-xs font-medium tracking-[0.18em] text-muted-foreground uppercase">
              {e.tag}
            </p>
            <h3 className="mt-3 text-xl font-semibold tracking-tight text-foreground">
              {e.name}
            </h3>
            <p className="mt-3 text-sm text-muted-foreground">{e.body}</p>
            <ol className="mt-6 flex flex-wrap gap-1.5">
              {stages.map((s, idx) => (
                <li
                  key={s}
                  className={
                    "rounded-md border px-2 py-0.5 text-[10px] font-medium tracking-wider uppercase " +
                    (e.highlights.includes(idx)
                      ? "border-foreground bg-foreground text-background"
                      : "border-border bg-background text-muted-foreground")
                  }
                >
                  {s}
                </li>
              ))}
            </ol>
          </li>
        ))}
      </ul>
    </Section>
  );
}
