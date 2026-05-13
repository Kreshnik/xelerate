"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { ArrowRight, Check, Play, RefreshCcw } from "lucide-react";
import { AnimatePresence, motion, useInView, useReducedMotion } from "motion/react";
import { Section, SectionHeader } from "@/components/site/section";
import { lifecyclePhases, exampleTask } from "@/lib/lifecycle-data";

const PHASE_MS = 1600;

type Status = "pre" | "active" | "done";

const bulletParent = {
  pre: {},
  active: {
    transition: { staggerChildren: 0.18, delayChildren: 0.25 },
  },
  done: {
    transition: { staggerChildren: 0 },
  },
};

const bulletItem = {
  pre: { opacity: 0, x: -6 },
  active: { opacity: 1, x: 0 },
  done: { opacity: 1, x: 0 },
};

const artifactHeader = {
  pre: { opacity: 0 },
  active: { opacity: 1, transition: { duration: 0.25 } },
  done: { opacity: 1 },
};

export function HowItWorks() {
  const ref = useRef<HTMLOListElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.3 });
  const reduceMotion = useReducedMotion();
  const [activePhase, setActivePhase] = useState(-1);
  const [completed, setCompleted] = useState(false);
  const [playId, setPlayId] = useState(0);

  useEffect(() => {
    if (!inView) return;
    if (reduceMotion) {
      setCompleted(true);
      return;
    }
    const timers: ReturnType<typeof setTimeout>[] = [];
    setActivePhase(-1);
    setCompleted(false);
    lifecyclePhases.forEach((_, i) => {
      timers.push(setTimeout(() => setActivePhase(i), 200 + i * PHASE_MS));
    });
    timers.push(
      setTimeout(() => {
        setActivePhase(-1);
        setCompleted(true);
      }, 200 + lifecyclePhases.length * PHASE_MS),
    );
    return () => timers.forEach(clearTimeout);
  }, [inView, playId, reduceMotion]);

  const getStatus = (i: number): Status => {
    if (reduceMotion) return "done";
    if (completed) return "done";
    if (activePhase === -1) return "pre";
    if (i < activePhase) return "done";
    if (i === activePhase) return "active";
    return "pre";
  };

  const replay = () => setPlayId((p) => p + 1);

  return (
    <Section>
      <SectionHeader
        eyebrow="How it works"
        title="Five phases. Twelve agents. One trail of artefacts."
        lede={
          <>
            Every feature produces a chain of artefacts — brief → spec → PR → test
            report → signal — that hand off cleanly between phases. Watch one move
            through:{" "}
            <span className="font-mono text-foreground">{exampleTask}</span>.
          </>
        }
      />

      <ol
        ref={ref}
        className="mt-12 grid gap-4 lg:grid-cols-5 lg:gap-3"
      >
        {lifecyclePhases.map((p, i) => {
          const status = getStatus(i);
          const isActive = status === "active";
          const isDone = status === "done";
          return (
            <li
              key={p.step}
              data-testid={`how-it-works-${p.phase.toLowerCase()}`}
              className="relative"
            >
              <motion.div
                initial={false}
                animate={{
                  borderColor: isActive
                    ? "var(--foreground)"
                    : "var(--border)",
                  opacity: status === "pre" ? 0.55 : 1,
                }}
                transition={{ duration: 0.35 }}
                className="relative h-full overflow-hidden rounded-xl border bg-card"
              >
                <Link
                  href={`/approach#${p.anchor}`}
                  className="group flex h-full flex-col p-5"
                >
                  <div className="flex items-start justify-between gap-2">
                    <p className="text-[10px] font-medium tracking-[0.18em] text-muted-foreground uppercase">
                      {p.step} · {p.phase}
                    </p>
                    <PhaseTag status={status} verb={p.verb} />
                  </div>

                  <p className="mt-2 text-base font-semibold tracking-tight text-foreground">
                    {p.title}
                  </p>

                  <motion.div
                    className="mt-5 rounded-md border border-border bg-background p-3"
                    initial="pre"
                    animate={status}
                    variants={bulletParent}
                  >
                    <motion.div
                      variants={artifactHeader}
                      className="flex items-center justify-between gap-2 border-b border-border pb-2"
                    >
                      <p className="truncate font-mono text-xs text-foreground">
                        {p.artifactName}
                      </p>
                      <span className="text-[10px] font-medium tracking-[0.14em] text-muted-foreground uppercase">
                        Artefact
                      </span>
                    </motion.div>
                    <ul className="mt-3 space-y-1.5 font-mono text-[11px] leading-relaxed text-muted-foreground">
                      {p.artifactMeta.map((m) => (
                        <motion.li
                          key={m}
                          variants={bulletItem}
                          className="flex gap-1.5"
                        >
                          <span aria-hidden className="text-foreground/40">
                            ›
                          </span>
                          <span className="truncate">{m}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </motion.div>

                  <div className="mt-auto flex items-center gap-2 pt-5">
                    <motion.span
                      className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-secondary text-[10px] font-semibold text-foreground"
                      animate={{ scale: isActive ? 1.08 : 1 }}
                      transition={{
                        type: "spring",
                        stiffness: 320,
                        damping: 22,
                      }}
                    >
                      {p.initials}
                    </motion.span>
                    <span className="text-xs text-muted-foreground">
                      {p.role}
                    </span>
                  </div>
                </Link>
              </motion.div>

              {i < lifecyclePhases.length - 1 && (
                <motion.span
                  aria-hidden
                  initial={false}
                  animate={{
                    backgroundColor: isDone ? "var(--foreground)" : "var(--card)",
                    color: isDone ? "var(--background)" : "var(--muted-foreground)",
                    borderColor: isDone ? "var(--foreground)" : "var(--border)",
                  }}
                  transition={{ duration: 0.3 }}
                  className="pointer-events-none absolute -right-3 top-[58px] hidden h-8 w-6 items-center justify-center rounded-full border lg:flex"
                >
                  <ArrowRight className="size-3.5" />
                </motion.span>
              )}
            </li>
          );
        })}
      </ol>

      <div className="mt-10 flex flex-wrap items-start justify-between gap-6">
        <motion.p
          initial={false}
          animate={{
            opacity: completed ? 1 : 0.55,
          }}
          transition={{ duration: 0.4 }}
          className="inline-flex max-w-[60ch] items-start gap-2 text-sm text-muted-foreground"
        >
          <RefreshCcw className="mt-0.5 size-4 shrink-0" aria-hidden="true" />
          At the end, production signals feed the next brief. The loop closes —
          and the team is already on the next thing.
        </motion.p>

        <AnimatePresence>
          {completed && !reduceMotion && (
            <motion.button
              key="replay"
              type="button"
              onClick={replay}
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 6 }}
              transition={{ duration: 0.25 }}
              className="inline-flex items-center gap-2 rounded-md border border-border bg-card px-3 py-1.5 text-xs font-medium text-foreground transition-colors hover:bg-secondary"
            >
              <Play className="size-3.5" aria-hidden="true" />
              Replay the handoff
            </motion.button>
          )}
        </AnimatePresence>
      </div>
    </Section>
  );
}

function PhaseTag({ status, verb }: { status: Status; verb: string }) {
  if (status === "active") {
    return (
      <motion.span
        layout
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/10 px-2 py-0.5 text-[10px] font-medium tracking-[0.14em] text-emerald-700 uppercase"
      >
        <motion.span
          className="h-1.5 w-1.5 rounded-full bg-emerald-500"
          animate={{ opacity: [1, 0.35, 1] }}
          transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut" }}
        />
        {verb}
      </motion.span>
    );
  }
  if (status === "done") {
    return (
      <motion.span
        layout
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="inline-flex items-center gap-1 text-[10px] font-medium tracking-[0.14em] text-muted-foreground uppercase"
      >
        <Check className="size-3" aria-hidden="true" />
        Handed off
      </motion.span>
    );
  }
  return null;
}
