export type LifecyclePhase = {
  step: string;
  phase: string;
  caption: string;
  agents: string[];
  tagline: string;
  anchor: string;
};

export const lifecyclePhases: LifecyclePhase[] = [
  {
    step: "01",
    phase: "Discovery",
    caption: "Capture intent",
    agents: ["Product Intake", "Requirement"],
    tagline: "Brief → structured epics",
    anchor: "phase-spark",
  },
  {
    step: "02",
    phase: "Design",
    caption: "Shape the build",
    agents: ["Architecture", "UI / UX"],
    tagline: "Component graph + tokens",
    anchor: "phase-shape",
  },
  {
    step: "03",
    phase: "Development",
    caption: "Ship the work",
    agents: ["Spec · Plan", "Execute · Review"],
    tagline: "Tasks → PRs with notes",
    anchor: "phase-build",
  },
  {
    step: "04",
    phase: "Testing",
    caption: "Prove it works",
    agents: ["Test · QA", "UAT"],
    tagline: "Cases, regressions, triage",
    anchor: "phase-launch",
  },
  {
    step: "05",
    phase: "Maintenance",
    caption: "Keep it running",
    agents: ["Monitor", "Improve"],
    tagline: "Signals → next tasks",
    anchor: "phase-scale",
  },
];
