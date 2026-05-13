"use client";

import { useEffect, useRef } from "react";
import { createNoise2D } from "simplex-noise";

const NODE_COUNT_DESKTOP = 50;
const NODE_COUNT_MOBILE = 12;
const MAX_EDGE_DISTANCE_RATIO = 0.28;
const MAX_EDGES_PER_NODE = 3;
const NODE_RADIUS = 3;
const NODE_RING_RADIUS = 9;
const NODE_DRIFT_SPEED = 0.9;
const NODE_NOISE_TIME_SCALE = 0.00035;
const EDGE_MARGIN = 64;
const EDGE_REPULSION = 0.0015;
const MESSAGE_INTERVAL_MS = 900;
const MESSAGE_SPEED_PX_PER_SEC = 340;
const TRAIL_FADE = 0.14;
const EDGE_LINE_WIDTH = 0.85;

type Node = {
  x: number;
  y: number;
  pulse: number;
};

type Edge = { a: number; b: number; dist: number };
type Message = { from: number; to: number; t: number; dist: number };

export function HeroFlow() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (reduceMotion) return;

    const isMobile = window.matchMedia("(max-width: 767px)").matches;
    const nodeCount = isMobile ? NODE_COUNT_MOBILE : NODE_COUNT_DESKTOP;

    const fgColor =
      getComputedStyle(document.documentElement)
        .getPropertyValue("--foreground")
        .trim() || "oklch(0.145 0 0)";

    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    let w = 0;
    let h = 0;

    const nodes: Node[] = Array.from({ length: nodeCount }, () => ({
      x: 0,
      y: 0,
      pulse: 0,
    }));

    const noise2D = createNoise2D();

    const scatterNodes = () => {
      // Aspect-aware grid for initial placement, then nodes drift freely from there
      const aspect = w / Math.max(h, 1);
      const cols = isMobile
        ? 3
        : Math.max(4, Math.round(Math.sqrt(nodeCount * aspect)));
      const rows = Math.ceil(nodeCount / cols);
      const cellW = w / cols;
      const cellH = h / rows;
      for (let i = 0; i < nodeCount; i++) {
        const c = i % cols;
        const r = Math.floor(i / cols);
        const jx = (Math.random() - 0.5) * cellW * 0.7;
        const jy = (Math.random() - 0.5) * cellH * 0.65;
        nodes[i].x = (c + 0.5) * cellW + jx;
        nodes[i].y = (r + 0.5) * cellH + jy;
      }
    };

    const resize = () => {
      const r = canvas.getBoundingClientRect();
      const firstSize = w === 0 && h === 0;
      w = r.width;
      h = r.height;
      canvas.width = Math.max(1, Math.floor(w * dpr));
      canvas.height = Math.max(1, Math.floor(h * dpr));
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      if (firstSize) {
        scatterNodes();
      } else {
        // Clamp any node that's now outside the canvas after a resize
        for (const n of nodes) {
          n.x = Math.min(Math.max(n.x, EDGE_MARGIN), w - EDGE_MARGIN);
          n.y = Math.min(Math.max(n.y, EDGE_MARGIN), h - EDGE_MARGIN);
        }
      }
    };
    resize();

    const ro = new ResizeObserver(resize);
    ro.observe(canvas);

    let rafId = 0;
    let lastMessageTime = performance.now();
    const messages: Message[] = [];

    const tick = (now: number) => {
      ctx.save();
      ctx.globalCompositeOperation = "destination-out";
      ctx.fillStyle = `rgba(0,0,0,${TRAIL_FADE})`;
      ctx.fillRect(0, 0, w, h);
      ctx.restore();

      // Update nodes — each drifts via its own slowly-evolving noise field,
      // softly repelled at the edges so it stays on screen.
      const noiseT = now * NODE_NOISE_TIME_SCALE;
      for (let i = 0; i < nodeCount; i++) {
        const n = nodes[i];
        const seedX = i * 13.7;
        const seedY = i * 17.3 + 5000;
        let vx = noise2D(seedX, noiseT) * NODE_DRIFT_SPEED;
        let vy = noise2D(seedY, noiseT) * NODE_DRIFT_SPEED;

        if (n.x < EDGE_MARGIN) vx += (EDGE_MARGIN - n.x) * EDGE_REPULSION;
        if (n.x > w - EDGE_MARGIN) vx -= (n.x - (w - EDGE_MARGIN)) * EDGE_REPULSION;
        if (n.y < EDGE_MARGIN) vy += (EDGE_MARGIN - n.y) * EDGE_REPULSION;
        if (n.y > h - EDGE_MARGIN) vy -= (n.y - (h - EDGE_MARGIN)) * EDGE_REPULSION;

        n.x += vx;
        n.y += vy;
        n.pulse *= 0.93;
      }

      // Compute edges — each node connects to its k nearest within range
      const maxDist = w * MAX_EDGE_DISTANCE_RATIO;
      const edges: Edge[] = [];
      const seen = new Set<string>();
      for (let i = 0; i < nodeCount; i++) {
        const candidates: { idx: number; dist: number }[] = [];
        for (let j = 0; j < nodeCount; j++) {
          if (i === j) continue;
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const d = Math.hypot(dx, dy);
          if (d < maxDist) candidates.push({ idx: j, dist: d });
        }
        candidates.sort((a, b) => a.dist - b.dist);
        const closest = candidates.slice(0, MAX_EDGES_PER_NODE);
        for (const c of closest) {
          const key = i < c.idx ? `${i}-${c.idx}` : `${c.idx}-${i}`;
          if (seen.has(key)) continue;
          seen.add(key);
          edges.push({ a: Math.min(i, c.idx), b: Math.max(i, c.idx), dist: c.dist });
        }
      }

      // Spawn message on a random edge
      if (now - lastMessageTime > MESSAGE_INTERVAL_MS && edges.length > 0) {
        const e = edges[Math.floor(Math.random() * edges.length)];
        const swap = Math.random() < 0.5;
        messages.push({
          from: swap ? e.b : e.a,
          to: swap ? e.a : e.b,
          t: 0,
          dist: e.dist,
        });
        lastMessageTime = now;
      }

      // Advance messages
      const perFrame = MESSAGE_SPEED_PX_PER_SEC / 60;
      for (let i = messages.length - 1; i >= 0; i--) {
        const m = messages[i];
        m.t += perFrame / Math.max(m.dist, 1);
        if (m.t >= 1) {
          nodes[m.to].pulse = 1;
          messages.splice(i, 1);
        }
      }

      // Draw edges
      ctx.strokeStyle = fgColor;
      ctx.lineWidth = EDGE_LINE_WIDTH;
      for (const e of edges) {
        const a = nodes[e.a];
        const b = nodes[e.b];
        const alpha = (1 - e.dist / maxDist) * 0.55;
        ctx.globalAlpha = alpha;
        ctx.beginPath();
        ctx.moveTo(a.x, a.y);
        ctx.lineTo(b.x, b.y);
        ctx.stroke();
      }

      // Draw nodes — soft ring + crisp dot
      ctx.fillStyle = fgColor;
      for (const n of nodes) {
        ctx.globalAlpha = 0.18 + n.pulse * 0.5;
        ctx.beginPath();
        ctx.arc(n.x, n.y, NODE_RING_RADIUS, 0, Math.PI * 2);
        ctx.fill();
        ctx.globalAlpha = 0.95;
        ctx.beginPath();
        ctx.arc(n.x, n.y, NODE_RADIUS + n.pulse * 1.8, 0, Math.PI * 2);
        ctx.fill();
      }

      // Draw messages — halo + crisp dot
      for (const m of messages) {
        const a = nodes[m.from];
        const b = nodes[m.to];
        const x = a.x + (b.x - a.x) * m.t;
        const y = a.y + (b.y - a.y) * m.t;
        ctx.fillStyle = fgColor;
        ctx.globalAlpha = 0.4;
        ctx.beginPath();
        ctx.arc(x, y, 5.5, 0, Math.PI * 2);
        ctx.fill();
        ctx.globalAlpha = 1;
        ctx.beginPath();
        ctx.arc(x, y, 2.4, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.globalAlpha = 1;

      rafId = requestAnimationFrame(tick);
    };

    rafId = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(rafId);
      ro.disconnect();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden
      className="pointer-events-none absolute inset-0 block h-full w-full opacity-[0.55]"
      style={{
        maskImage:
          "radial-gradient(ellipse 58% 40% at 50% 50%, rgba(0,0,0,0.16) 25%, rgba(0,0,0,1) 95%)",
        WebkitMaskImage:
          "radial-gradient(ellipse 58% 40% at 50% 50%, rgba(0,0,0,0.16) 25%, rgba(0,0,0,1) 95%)",
      }}
    />
  );
}
