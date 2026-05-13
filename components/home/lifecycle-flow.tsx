"use client";

import { useMemo } from "react";
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

import { lifecyclePhases } from "@/lib/lifecycle-data";
import "@xyflow/react/dist/style.css";

const NODE_WIDTH = 240;
const NODE_X_STEP = 380;

const HANDOFF_LABELS = ["Brief", "Spec", "PR", "UAT"];

type PhaseNodeData = {
  step: string;
  phase: string;
  title: string;
  role: string;
  initials: string;
  isFirst: boolean;
  isLast: boolean;
};

type PhaseFlowNode = Node<PhaseNodeData, "phase">;

function PhaseNode({ data }: NodeProps<PhaseFlowNode>) {
  const stepIndex = Math.max(0, parseInt(data.step, 10) - 1);
  const animationDelay = `${stepIndex * 2}s`;
  return (
    <div
      style={{ width: NODE_WIDTH, animationDelay }}
      className="flow-step-card relative rounded-xl border border-border bg-card shadow-sm"
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
        <p className="text-[10px] font-medium tracking-[0.18em] text-muted-foreground uppercase">
          {data.step} · {data.phase}
        </p>
        <p className="mt-2 text-base font-semibold tracking-tight text-foreground">
          {data.title}
        </p>

        <div className="mt-6 flex items-center gap-2">
          <span className="relative inline-flex h-6 w-6 items-center justify-center rounded-full bg-secondary text-[10px] font-semibold text-foreground">
            {data.initials}
            <span
              aria-hidden
              style={{ animationDelay }}
              className="flow-step-dot absolute -right-0.5 -top-0.5 inline-block h-2 w-2 rounded-full bg-emerald-500 shadow-[0_0_0_2px_var(--card)]"
            />
          </span>
          <span className="text-xs text-muted-foreground">{data.role}</span>
        </div>
      </div>
    </div>
  );
}

const nodeTypes = { phase: PhaseNode } satisfies NodeTypes;

export function LifecycleFlow() {
  const { nodes, edges } = useMemo(() => {
    const lastIdx = lifecyclePhases.length - 1;

    const initialNodes: PhaseFlowNode[] = lifecyclePhases.map((p, i) => ({
      id: p.step,
      type: "phase",
      position: { x: i * NODE_X_STEP, y: 0 },
      data: {
        step: p.step,
        phase: p.phase,
        title: p.title,
        role: p.role,
        initials: p.initials,
        isFirst: i === 0,
        isLast: i === lastIdx,
      },
      draggable: false,
      selectable: false,
      connectable: false,
    }));

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
        fill: "var(--card)",
        stroke: "var(--border)",
        strokeWidth: 1,
      },
      labelStyle: {
        fill: "var(--foreground)",
        fontSize: 10,
        fontWeight: 500,
        letterSpacing: "0.16em",
        textTransform: "uppercase",
      },
      style: {
        stroke: "var(--foreground)",
        strokeWidth: 1.4,
        strokeDasharray: "5 5",
        opacity: 0.7,
      },
      markerEnd: {
        type: MarkerType.ArrowClosed,
        width: 14,
        height: 14,
        color: "var(--foreground)",
      },
      data: { borderRadius: 28, offset: 40 },
    };

    return {
      nodes: initialNodes,
      edges: [...forwardEdges, returnEdge],
    };
  }, []);

  return (
    <div className="relative h-[520px] w-full overflow-hidden rounded-2xl border border-border bg-card/40">
      <ReactFlow
        nodes={nodes}
        edges={edges}
        nodeTypes={nodeTypes}
        fitView
        fitViewOptions={{ padding: 0.14, includeHiddenNodes: false }}
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
  );
}
