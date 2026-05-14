"use client";

import { useEffect, useMemo, useState } from "react";
import {
  ReactFlow,
  Background,
  BackgroundVariant,
  Handle,
  MarkerType,
  Position,
  type Edge,
  type Node,
  type NodeProps,
  type NodeTypes,
} from "@xyflow/react";
import {
  Activity,
  ClipboardCheck,
  FileText,
  GitPullRequest,
  LayoutGrid,
  type LucideIcon,
} from "lucide-react";
import { AnimatePresence, motion } from "motion/react";

import { lifecyclePhases } from "@/lib/lifecycle-data";
import "@xyflow/react/dist/style.css";

const NODE_WIDTH = 220;
const NODE_X_STEP = 360;
const PHASE_HOLD_MS = 1900;
const RETURN_HOLD_MS = 1500;

const HANDOFF_LABELS = ["Brief", "Spec", "PR", "UAT"];

const phaseIcons: LucideIcon[] = [
  FileText,        // 01 Discovery → Brief
  LayoutGrid,      // 02 Design → Spec
  GitPullRequest,  // 03 Development → PR
  ClipboardCheck,  // 04 Testing → UAT
  Activity,        // 05 Maintenance → Signal
];

type PhaseNodeData = {
  step: string;
  phase: string;
  title: string;
  role: string;
  initials: string;
  iconIndex: number;
  isActive: boolean;
  isFirst: boolean;
  isLast: boolean;
};

type PhaseFlowNode = Node<PhaseNodeData, "phase">;

function PhaseNode({ data }: NodeProps<PhaseFlowNode>) {
  const Icon = phaseIcons[data.iconIndex] ?? FileText;
  return (
    <motion.div
      animate={{
        scale: data.isActive ? 1.04 : 1,
        opacity: data.isActive ? 1 : 0.55,
      }}
      transition={{ type: "spring", stiffness: 220, damping: 24 }}
      style={{ width: NODE_WIDTH }}
      className={
        "relative rounded-xl border transition-[border-color,background-color,box-shadow] duration-500 " +
        (data.isActive
          ? "border-foreground bg-foreground text-background shadow-[0_0_0_4px_var(--card),0_0_0_6px_color-mix(in_oklch,var(--dutch)_30%,transparent)]"
          : "border-border bg-card text-foreground shadow-sm")
      }
    >
      {!data.isFirst && (
        <Handle
          id="left-in"
          type="target"
          position={Position.Left}
          className="!h-2 !w-2 !rounded-full !border-0 !bg-foreground/40"
        />
      )}
      {!data.isLast && (
        <Handle
          id="right-out"
          type="source"
          position={Position.Right}
          className="!h-2 !w-2 !rounded-full !border-0 !bg-foreground/40"
        />
      )}
      {data.isFirst && (
        <Handle
          id="bottom-in"
          type="target"
          position={Position.Bottom}
          className="!h-2 !w-2 !rounded-full !border-0 !bg-foreground/40"
        />
      )}
      {data.isLast && (
        <Handle
          id="bottom-out"
          type="source"
          position={Position.Bottom}
          className="!h-2 !w-2 !rounded-full !border-0 !bg-foreground/40"
        />
      )}

      <div className="p-5">
        <div className="flex items-center justify-between gap-2">
          <p
            className={
              "text-[10px] font-medium tracking-[0.18em] uppercase " +
              (data.isActive ? "text-background/70" : "text-muted-foreground")
            }
          >
            {data.step} · {data.phase}
          </p>
          <motion.span
            animate={{ rotate: data.isActive ? [0, -6, 0] : 0 }}
            transition={{ duration: 0.5 }}
            className={
              "inline-flex h-7 w-7 items-center justify-center rounded-md transition-colors duration-500 " +
              (data.isActive
                ? "bg-dutch/20 text-dutch"
                : "bg-secondary text-foreground/55")
            }
          >
            <Icon className="size-4" aria-hidden />
          </motion.span>
        </div>

        <p
          className={
            "mt-3 text-base font-semibold tracking-tight " +
            (data.isActive ? "text-background" : "text-foreground")
          }
        >
          {data.title}
        </p>

        <div className="mt-5 flex items-center gap-2">
          <span
            className={
              "relative inline-flex h-6 w-6 items-center justify-center rounded-full text-[10px] font-semibold transition-colors duration-500 " +
              (data.isActive
                ? "bg-background text-foreground"
                : "bg-secondary text-foreground")
            }
          >
            {data.initials}
          </span>
          <span
            className={
              "text-xs transition-colors duration-500 " +
              (data.isActive ? "text-background/80" : "text-muted-foreground")
            }
          >
            {data.role}
          </span>
        </div>
      </div>
    </motion.div>
  );
}

const nodeTypes = { phase: PhaseNode } satisfies NodeTypes;

export function LifecycleFlow() {
  // 0..N-1 = phase active, N = return arc cycle
  const TOTAL_STEPS = lifecyclePhases.length + 1;
  const [step, setStep] = useState(0);
  const [reduceMotion, setReduceMotion] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduceMotion(mq.matches);
    const onChange = (e: MediaQueryListEvent) => setReduceMotion(e.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  const isReturning = step === lifecyclePhases.length;
  const activeIdx = isReturning ? -1 : step;

  useEffect(() => {
    if (reduceMotion) return;
    const delay = isReturning ? RETURN_HOLD_MS : PHASE_HOLD_MS;
    const timer = setTimeout(() => {
      setStep((s) => (s + 1) % TOTAL_STEPS);
    }, delay);
    return () => clearTimeout(timer);
  }, [step, isReturning, reduceMotion, TOTAL_STEPS]);

  const nodes = useMemo<PhaseFlowNode[]>(() => {
    const lastIdx = lifecyclePhases.length - 1;
    return lifecyclePhases.map((p, i) => ({
      id: p.step,
      type: "phase",
      position: { x: i * NODE_X_STEP, y: 0 },
      data: {
        step: p.step,
        phase: p.phase,
        title: p.title,
        role: p.role,
        initials: p.initials,
        iconIndex: i,
        isActive: i === activeIdx,
        isFirst: i === 0,
        isLast: i === lastIdx,
      },
      draggable: false,
      selectable: false,
      connectable: false,
    }));
  }, [activeIdx]);

  const edges = useMemo<Edge[]>(() => {
    const lastIdx = lifecyclePhases.length - 1;
    const forwardEdges: Edge[] = lifecyclePhases
      .slice(0, -1)
      .map((p, i) => ({
        id: `forward-${p.step}-${lifecyclePhases[i + 1].step}`,
        source: p.step,
        sourceHandle: "right-out",
        target: lifecyclePhases[i + 1].step,
        targetHandle: "left-in",
        type: "default",
        animated: true,
        label: HANDOFF_LABELS[i],
        labelBgPadding: [8, 4],
        labelBgBorderRadius: 10,
        labelBgStyle: {
          fill: "var(--card)",
          stroke: "var(--border)",
          strokeWidth: 1,
        },
        labelStyle: {
          fill: "var(--foreground)",
          fontSize: 10,
          fontWeight: 500,
          letterSpacing: "0.14em",
          textTransform: "uppercase",
        },
        markerEnd: {
          type: MarkerType.ArrowClosed,
          width: 18,
          height: 18,
          color: "var(--foreground)",
        },
        style: {
          stroke: "var(--foreground)",
          strokeWidth: 1.8,
          opacity: 0.9,
        },
      }));

    const returnEdge: Edge = {
      id: "return-loop",
      source: lifecyclePhases[lastIdx].step,
      sourceHandle: "bottom-out",
      target: lifecyclePhases[0].step,
      targetHandle: "bottom-in",
      type: "smoothstep",
      animated: true,
      label: "Insight",
      labelBgPadding: [8, 4],
      labelBgBorderRadius: 12,
      labelBgStyle: {
        fill: isReturning ? "var(--dutch)" : "var(--card)",
        stroke: isReturning ? "var(--dutch)" : "var(--border)",
        strokeWidth: 1,
      },
      labelStyle: {
        fill: isReturning ? "var(--dutch-foreground)" : "var(--foreground)",
        fontSize: 10,
        fontWeight: 600,
        letterSpacing: "0.16em",
        textTransform: "uppercase",
      },
      style: {
        stroke: isReturning ? "var(--dutch)" : "var(--foreground)",
        strokeWidth: isReturning ? 2 : 1.4,
        strokeDasharray: "5 5",
        opacity: isReturning ? 1 : 0.5,
      },
      markerEnd: {
        type: MarkerType.ArrowClosed,
        width: isReturning ? 16 : 14,
        height: isReturning ? 16 : 14,
        color: isReturning ? "var(--dutch)" : "var(--foreground)",
      },
      data: { borderRadius: 28, offset: 40 },
    };

    return [...forwardEdges, returnEdge];
  }, [isReturning]);

  const currentPhase = activeIdx >= 0 ? lifecyclePhases[activeIdx] : null;
  const verb =
    currentPhase &&
    "verb" in currentPhase &&
    typeof (currentPhase as { verb?: unknown }).verb === "string"
      ? (currentPhase as { verb: string }).verb
      : currentPhase?.title;

  return (
    <div className="space-y-6">
      {/* Stationary narrator above the diagram */}
      <div className="relative mx-auto h-16 max-w-2xl">
        <AnimatePresence mode="wait">
          <motion.div
            key={step}
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.35 }}
            className="absolute inset-0 flex flex-col items-center justify-center text-center"
          >
            {isReturning ? (
              <>
                <p className="inline-flex items-center gap-2 font-mono text-[10px] tracking-[0.2em] text-dutch uppercase">
                  <span className="relative inline-flex h-1.5 w-1.5">
                    <span className="absolute inset-0 rounded-full bg-dutch opacity-70 motion-safe:animate-ping" />
                    <span className="relative inline-block h-1.5 w-1.5 rounded-full bg-dutch" />
                  </span>
                  The loop closes
                </p>
                <p className="mt-2 text-balance text-base font-semibold tracking-tight text-foreground sm:text-lg">
                  Production signal becomes the next brief.
                </p>
              </>
            ) : currentPhase ? (
              <>
                <p className="font-mono text-[10px] tracking-[0.2em] text-muted-foreground uppercase">
                  Now · Phase {currentPhase.step} of 05
                </p>
                <p className="mt-2 text-balance text-base font-semibold tracking-tight text-foreground sm:text-lg">
                  <span className="text-muted-foreground">
                    {currentPhase.role}
                  </span>{" "}
                  <span aria-hidden className="text-muted-foreground/70">
                    is
                  </span>{" "}
                  <span className="text-foreground">
                    {(verb ?? currentPhase.title).toString().toLowerCase()}
                  </span>
                  <span className="text-muted-foreground">.</span>
                </p>
              </>
            ) : null}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* React Flow surface */}
      <div className="relative h-[380px] w-full overflow-hidden">
        <ReactFlow
          nodes={nodes}
          edges={edges}
          nodeTypes={nodeTypes}
          fitView
          fitViewOptions={{ padding: 0.16, includeHiddenNodes: false }}
          minZoom={0.4}
          maxZoom={1.2}
          nodesDraggable={false}
          nodesConnectable={false}
          nodesFocusable={false}
          elementsSelectable={false}
          edgesFocusable={false}
          zoomOnScroll={false}
          zoomOnPinch={false}
          zoomOnDoubleClick={false}
          panOnDrag={false}
          panOnScroll={false}
          preventScrolling={false}
          proOptions={{ hideAttribution: true }}
        >
          <Background
            variant={BackgroundVariant.Dots}
            gap={28}
            size={1}
            color="var(--border)"
            style={{ opacity: 0.55 }}
          />
        </ReactFlow>
      </div>

      {/* Bottom caption */}
      <p className="text-center font-mono text-[10px] tracking-[0.18em] text-muted-foreground uppercase">
        Demo cycle · One feature, end to end, humans in the loop
      </p>
    </div>
  );
}
