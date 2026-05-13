export type LifecyclePhase = {
  step: string;
  phase: string;
  title: string;
  role: string;
  initials: string;
  anchor: string;
  verb: string;
  artifactName: string;
  artifactMeta: string[];
};

export const lifecyclePhases: LifecyclePhase[] = [
  {
    step: "01",
    phase: "Discovery",
    title: "Frame the problem",
    role: "Product Manager",
    initials: "PM",
    anchor: "phase-spark",
    verb: "Framing",
    artifactName: "refund-flow.brief",
    artifactMeta: [
      "12 acceptance criteria",
      "2 ambiguities flagged",
      "4 modules required",
    ],
  },
  {
    step: "02",
    phase: "Design",
    title: "Plan the build",
    role: "Design Agent",
    initials: "DS",
    anchor: "phase-shape",
    verb: "Planning",
    artifactName: "Refund.fig",
    artifactMeta: [
      "4 screens · 12 components",
      "Tokens · types · states",
      "Linked to brief",
    ],
  },
  {
    step: "03",
    phase: "Development",
    title: "Ship the code",
    role: "Engineer",
    initials: "EN",
    anchor: "phase-build",
    verb: "Building",
    artifactName: "PR #482",
    artifactMeta: [
      "+412 −38 · 8 files",
      "Tests passing on branch",
      "Reviewer notes attached",
    ],
  },
  {
    step: "04",
    phase: "Testing",
    title: "Prove it works",
    role: "QA Agent",
    initials: "QA",
    anchor: "phase-launch",
    verb: "Verifying",
    artifactName: "UAT bundle",
    artifactMeta: [
      "11 acceptance walks",
      "0 regressions",
      "Sign-off requested",
    ],
  },
  {
    step: "05",
    phase: "Maintenance",
    title: "Keep it alive",
    role: "Observer",
    initials: "OB",
    anchor: "phase-scale",
    verb: "Watching",
    artifactName: "signal-2841",
    artifactMeta: [
      "5xx in payments ↓ 0.3%",
      "0 incidents · 7-day SLO",
      "Next task queued",
    ],
  },
];

export const exampleTask = "Refund flow";
