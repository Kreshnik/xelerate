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
  ShieldCheck,
  type LucideIcon,
} from "lucide-react";
import { AnimatePresence, motion } from "motion/react";

import { lifecyclePhases } from "@/lib/lifecycle-data";
import "@xyflow/react/dist/style.css";

const PHASE_WIDTH = 220;
const PHASE_X_STEP = 248;
const PHASE_Y = 240;
const TOWER_WIDTH = 260;

const PHASE_HOLD_MS = 1300;
const APPROVE_HOLD_MS = 800;
const LOOP_HOLD_MS = 1200;

const phaseIcons: LucideIcon[] = [
  FileText,        // 01 Discovery
  LayoutGrid,      // 02 Design
  GitPullRequest,  // 03 Development
  ClipboardCheck,  // 04 Testing
  Activity,        // 05 Maintenance
];

type PhaseNodeData = {
  step: string;
  phase: string;
  caption: string;
  agents: string[];
  tagline: string;
  iconIndex: number;
  isActive: boolean;
  isHandoffSource: boolean;
  isHandoffTarget: boolean;
  isFirst: boolean;
  isLast: boolean;
};

type TowerNodeData = {
  isApproving: boolean;
  approvingFor: string | null;
};

type PhaseFlowNode = Node<PhaseNodeData, "phase">;
type TowerFlowNode = Node<TowerNodeData, "tower">;

const TICK_INITIAL_DELAY_MS = 280;
const TICK_STAGGER_MS = 380;

function PhaseNode({ data }: NodeProps<PhaseFlowNode>) {
  const Icon = phaseIcons[data.iconIndex] ?? FileText;
  const isHighlighted = data.isActive || data.isHandoffSource || data.isHandoffTarget;

  const [tickedCount, setTickedCount] = useState(0);

  useEffect(() => {
    if (data.isActive) {
      setTickedCount(0);
      const timers = data.agents.map((_, i) =>
        setTimeout(
          () => setTickedCount(i + 1),
          TICK_INITIAL_DELAY_MS + i * TICK_STAGGER_MS,
        ),
      );
      return () => timers.forEach(clearTimeout);
    }
    if (!data.isHandoffSource) {
      setTickedCount(0);
    }
  }, [data.isActive, data.isHandoffSource, data.agents]);
  return (
    <motion.div
      animate={{
        scale: data.isActive ? 1.04 : 1,
        opacity: isHighlighted ? 1 : 0.55,
      }}
      transition={{ type: "spring", stiffness: 220, damping: 24 }}
      style={{ width: PHASE_WIDTH }}
      className={
        "relative rounded-xl border transition-[border-color,background-color,box-shadow] duration-500 " +
        (data.isActive
          ? "border-foreground bg-foreground text-background shadow-[0_0_0_4px_var(--card),0_0_0_6px_color-mix(in_oklch,var(--dutch)_30%,transparent)]"
          : "border-border bg-card text-foreground shadow-sm")
      }
    >
      <Handle
        id="top-in"
        type="target"
        position={Position.Top}
        className="!h-2 !w-2 !rounded-full !border-0 !bg-foreground/40"
      />
      <Handle
        id="top-out"
        type="source"
        position={Position.Top}
        className="!h-2 !w-2 !rounded-full !border-0 !bg-foreground/40"
      />
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

      <div className="p-4">
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
          {data.caption}
        </p>

        <ul
          className={
            "mt-3 space-y-1 text-[11px] " +
            (data.isActive ? "text-background/85" : "text-muted-foreground")
          }
        >
          {data.agents.map((a, idx) => {
            const isTicked = idx < tickedCount;
            return (
              <li key={a} className="flex items-center gap-1.5">
                <span className="inline-flex h-3 w-3 items-center justify-center">
                  <AnimatePresence mode="wait" initial={false}>
                    {isTicked ? (
                      <motion.svg
                        key="check"
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0, opacity: 0 }}
                        transition={{ type: "spring", stiffness: 480, damping: 22 }}
                        className="size-3 text-emerald-500"
                        viewBox="0 0 12 12"
                        fill="none"
                        aria-hidden
                      >
                        <path
                          d="M2.5 6.5 L5 9 L9.5 3.5"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </motion.svg>
                    ) : (
                      <motion.span
                        key="dot"
                        initial={{ scale: 0.5, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0, opacity: 0 }}
                        transition={{ duration: 0.15 }}
                        className={
                          "h-1 w-1 rounded-full " +
                          (data.isActive
                            ? "bg-background/70"
                            : "bg-foreground/40")
                        }
                      />
                    )}
                  </AnimatePresence>
                </span>
                {a}
              </li>
            );
          })}
        </ul>

        <p
          className={
            "mt-3 font-mono text-[10px] " +
            (data.isActive ? "text-background/70" : "text-muted-foreground/80")
          }
        >
          {data.tagline}
        </p>
      </div>
    </motion.div>
  );
}

function TowerNode({ data }: NodeProps<TowerFlowNode>) {
  return (
    <motion.div
      animate={{
        scale: data.isApproving ? 1.04 : 1,
      }}
      transition={{ type: "spring", stiffness: 220, damping: 22 }}
      style={{ width: TOWER_WIDTH }}
      className={
        "relative rounded-xl border bg-card transition-[border-color,box-shadow] duration-500 " +
        (data.isApproving
          ? "border-dutch shadow-[0_0_0_4px_var(--card),0_0_0_6px_color-mix(in_oklch,var(--dutch)_38%,transparent)]"
          : "border-foreground/80 shadow-sm")
      }
    >
      <Handle
        id="bottom-out"
        type="source"
        position={Position.Bottom}
        className="!h-2 !w-2 !rounded-full !border-0 !bg-foreground/40"
      />
      <Handle
        id="bottom-in"
        type="target"
        position={Position.Bottom}
        className="!h-2 !w-2 !rounded-full !border-0 !bg-foreground/40"
      />

      <div className="flex items-center gap-3 p-4">
        <span
          className={
            "relative inline-flex h-9 w-9 items-center justify-center rounded-md transition-colors duration-500 " +
            (data.isApproving
              ? "bg-dutch text-dutch-foreground"
              : "bg-foreground text-background")
          }
        >
          <ShieldCheck className="size-4" aria-hidden />
          {data.isApproving && (
            <motion.span
              aria-hidden
              className="absolute inset-0 rounded-md"
              animate={{ opacity: [0.8, 0, 0.8], scale: [1, 1.4, 1] }}
              transition={{ duration: 1.2, repeat: Infinity, ease: "easeInOut" }}
              style={{
                boxShadow: "0 0 0 2px var(--dutch)",
              }}
            />
          )}
        </span>
        <div className="min-w-0 flex-1">
          <p className="text-[10px] font-medium tracking-[0.18em] text-muted-foreground uppercase">
            Human Control Tower
          </p>
          <AnimatePresence mode="wait">
            <motion.p
              key={data.approvingFor ?? "idle"}
              initial={{ opacity: 0, y: 4 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -4 }}
              transition={{ duration: 0.2 }}
              className={
                "mt-0.5 truncate text-sm font-semibold tracking-tight " +
                (data.isApproving ? "text-dutch" : "text-foreground")
              }
            >
              {data.isApproving
                ? `Approving · ${data.approvingFor}`
                : "Waiting on the gate"}
            </motion.p>
          </AnimatePresence>
        </div>
      </div>
    </motion.div>
  );
}

const nodeTypes = { phase: PhaseNode, tower: TowerNode } satisfies NodeTypes;

export function LifecycleFlow() {
  const TOTAL_PHASES = lifecyclePhases.length;
  // Substeps: 2 per phase (active, approving). 10 total.
  // Even index = phase active; odd index = approving (handoff from phase i to next).
  const TOTAL_STEPS = TOTAL_PHASES * 2;

  const [step, setStep] = useState(0);
  const [reduceMotion, setReduceMotion] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduceMotion(mq.matches);
    const onChange = (e: MediaQueryListEvent) => setReduceMotion(e.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  const phaseIdx = Math.floor(step / 2);
  const isApproving = step % 2 === 1;
  const isLastApproval = isApproving && phaseIdx === TOTAL_PHASES - 1;
  const nextPhaseIdx = (phaseIdx + 1) % TOTAL_PHASES;

  useEffect(() => {
    if (reduceMotion) return;
    const delay = isApproving
      ? isLastApproval
        ? LOOP_HOLD_MS
        : APPROVE_HOLD_MS
      : PHASE_HOLD_MS;
    const timer = setTimeout(() => {
      setStep((s) => (s + 1) % TOTAL_STEPS);
    }, delay);
    return () => clearTimeout(timer);
  }, [step, isApproving, isLastApproval, reduceMotion, TOTAL_STEPS]);

  const rowSpanX = (TOTAL_PHASES - 1) * PHASE_X_STEP + PHASE_WIDTH;
  const towerX = (rowSpanX - TOWER_WIDTH) / 2;

  const nodes = useMemo<Node[]>(() => {
    const lastIdx = TOTAL_PHASES - 1;
    const phaseNodes: PhaseFlowNode[] = lifecyclePhases.map((p, i) => ({
      id: p.step,
      type: "phase",
      position: { x: i * PHASE_X_STEP, y: PHASE_Y },
      data: {
        step: p.step,
        phase: p.phase,
        caption: p.caption,
        agents: p.agents,
        tagline: p.tagline,
        iconIndex: i,
        isActive: i === phaseIdx && !isApproving,
        isHandoffSource: isApproving && i === phaseIdx,
        isHandoffTarget: isApproving && i === nextPhaseIdx && !isLastApproval,
        isFirst: i === 0,
        isLast: i === lastIdx,
      },
      draggable: false,
      selectable: false,
      connectable: false,
    }));

    const towerNode: TowerFlowNode = {
      id: "tower",
      type: "tower",
      position: { x: towerX, y: 0 },
      data: {
        isApproving,
        approvingFor: isApproving ? lifecyclePhases[phaseIdx].caption : null,
      },
      draggable: false,
      selectable: false,
      connectable: false,
    };

    return [towerNode, ...phaseNodes];
  }, [phaseIdx, isApproving, isLastApproval, nextPhaseIdx, towerX, TOTAL_PHASES]);

  const edges = useMemo<Edge[]>(() => {
    // Rays from tower to each phase (always present, faint by default)
    const rayEdges: Edge[] = lifecyclePhases.map((p, i) => {
      const litForApproval =
        isApproving && (i === phaseIdx || (i === nextPhaseIdx && !isLastApproval));
      const litForActive = !isApproving && i === phaseIdx;
      const isLit = litForApproval || litForActive;
      return {
        id: `ray-${p.step}`,
        source: "tower",
        sourceHandle: "bottom-out",
        target: p.step,
        targetHandle: "top-in",
        type: "default",
        animated: litForApproval,
        style: {
          stroke: litForApproval ? "var(--dutch)" : "var(--foreground)",
          strokeWidth: isLit ? 1.5 : 1,
          strokeDasharray: "4 4",
          opacity: isLit ? 0.9 : 0.25,
        },
      };
    });

    // Forward edges between adjacent phases
    const forwardEdges: Edge[] = lifecyclePhases.slice(0, -1).map((p, i) => {
      const isCurrentHandoff = isApproving && i === phaseIdx && !isLastApproval;
      return {
        id: `forward-${p.step}-${lifecyclePhases[i + 1].step}`,
        source: p.step,
        sourceHandle: "right-out",
        target: lifecyclePhases[i + 1].step,
        targetHandle: "left-in",
        type: "default",
        animated: isCurrentHandoff,
        markerEnd: {
          type: MarkerType.ArrowClosed,
          width: 14,
          height: 14,
          color: isCurrentHandoff ? "var(--dutch)" : "var(--foreground)",
        },
        style: {
          stroke: isCurrentHandoff ? "var(--dutch)" : "var(--foreground)",
          strokeWidth: isCurrentHandoff ? 1.8 : 1.1,
          opacity: isCurrentHandoff ? 1 : 0.4,
        },
      };
    });

    return [...rayEdges, ...forwardEdges];
  }, [phaseIdx, isApproving, isLastApproval, nextPhaseIdx]);

  const currentPhase = lifecyclePhases[phaseIdx];

  return (
    <div className="space-y-6">
      {/* Narrator */}
      <div className="relative mx-auto h-16 max-w-2xl">
        <AnimatePresence mode="wait">
          <motion.div
            key={step}
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.3 }}
            className="absolute inset-0 flex flex-col items-center justify-center text-center"
          >
            {isApproving ? (
              <>
                <p className="inline-flex items-center gap-2 font-mono text-[10px] tracking-[0.2em] text-dutch uppercase">
                  <span className="relative inline-flex h-1.5 w-1.5">
                    <span className="absolute inset-0 rounded-full bg-dutch opacity-70 motion-safe:animate-ping" />
                    <span className="relative inline-block h-1.5 w-1.5 rounded-full bg-dutch" />
                  </span>
                  Human Control Tower
                </p>
                <p className="mt-2 text-balance text-base font-semibold tracking-tight text-foreground sm:text-lg">
                  {isLastApproval
                    ? "Signal from production becomes the next brief."
                    : `Approves ${currentPhase.caption.toLowerCase()}.`}
                </p>
              </>
            ) : (
              <>
                <p className="font-mono text-[10px] tracking-[0.2em] text-muted-foreground uppercase">
                  Phase {currentPhase.step} of 05 · {currentPhase.phase}
                </p>
                <p className="mt-2 text-balance text-base font-semibold tracking-tight text-foreground sm:text-lg">
                  {currentPhase.caption}
                  <span className="text-muted-foreground"> — {currentPhase.tagline}</span>
                </p>
              </>
            )}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* React Flow surface (no border, hugs content) */}
      <div className="relative h-[460px] w-full overflow-hidden">
        <ReactFlow
          nodes={nodes}
          edges={edges}
          nodeTypes={nodeTypes}
          fitView
          fitViewOptions={{ padding: 0.12, includeHiddenNodes: false }}
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

    </div>
  );
}
