"use client";

import { useEffect, useState } from "react";

const TOTAL_HOURS = 24;
const HUMAN_START = 9;
const HUMAN_END = 17;
const HOUR_TICKS = [0, 3, 6, 9, 12, 15, 18, 21, 24];

type Activity = { hour: number; label: string };

const HUMAN_ACTIVITIES: Activity[] = [
  { hour: 9.5, label: "Review" },
  { hour: 13, label: "Steer" },
  { hour: 15.5, label: "Design" },
];

const AGENT_ACTIVITIES: Activity[] = [
  { hour: 2, label: "Build" },
  { hour: 6, label: "Test & QA" },
  { hour: 11, label: "Build" },
  { hour: 18, label: "Test & QA" },
  { hour: 22, label: "Monitor" },
];

function pct(hour: number) {
  return `${(hour / TOTAL_HOURS) * 100}%`;
}

type TrackProps = {
  label: string;
  activities: Activity[];
  getActive: (hour: number) => boolean;
};

function Track({ label, activities, getActive }: TrackProps) {
  return (
    <div className="relative z-10">
      <p className="text-[10px] font-medium tracking-[0.18em] text-foreground uppercase">
        {label}
      </p>

      <div className="relative mt-2 hidden h-9 lg:block">
        {activities.map((a) => (
          <div
            key={`${label}-${a.label}-${a.hour}`}
            className="absolute bottom-0 flex -translate-x-1/2 flex-col items-center"
            style={{ left: pct(a.hour) }}
          >
            <span className="rounded-sm bg-foreground px-1.5 py-0.5 font-mono text-[9px] font-medium tracking-wider text-background uppercase">
              {a.label}
            </span>
            <span aria-hidden className="h-2 w-px bg-foreground/60" />
          </div>
        ))}
      </div>

      <div
        className="mt-2 grid h-8 gap-px overflow-hidden rounded-md lg:mt-0"
        style={{ gridTemplateColumns: "repeat(24, minmax(0, 1fr))" }}
      >
        {Array.from({ length: TOTAL_HOURS }, (_, h) => (
          <div
            key={h}
            className={getActive(h) ? "bg-foreground" : "bg-foreground/[0.06]"}
          />
        ))}
      </div>
    </div>
  );
}

export function DayCycleTimeline() {
  const [now, setNow] = useState<{ hour: number; label: string } | null>(null);

  useEffect(() => {
    const update = () => {
      const d = new Date();
      const hour = d.getHours() + d.getMinutes() / 60;
      const label = d.toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
        hour12: false,
      });
      setNow({ hour, label });
    };
    update();
    const id = setInterval(update, 60_000);
    return () => clearInterval(id);
  }, []);

  const nowLeft = now ? pct(now.hour) : "0%";

  return (
    <div className="relative overflow-hidden rounded-2xl border border-border bg-card p-6 sm:p-8">
      <div className="flex items-center justify-between text-[10px] font-medium tracking-[0.18em] text-muted-foreground uppercase">
        <span>24-hour cycle</span>
        <span className="inline-flex min-h-4 items-center gap-2 text-dutch">
          {now && (
            <>
              <span className="relative inline-flex h-1.5 w-1.5">
                <span className="absolute inset-0 rounded-full bg-dutch opacity-70 motion-safe:animate-ping" />
                <span className="relative inline-block h-1.5 w-1.5 rounded-full bg-dutch" />
              </span>
              Live · {now.label}
            </>
          )}
        </span>
      </div>

      <div className="relative isolate mt-7 space-y-10">
        {now && (
          <div
            aria-hidden
            className="pointer-events-none absolute -inset-y-40 -z-10 w-0 -translate-x-px border-l border-dashed border-dutch"
            style={{ left: nowLeft }}
          />
        )}

        <Track
          label="Humans · 9 → 17"
          activities={HUMAN_ACTIVITIES}
          getActive={(h) => h >= HUMAN_START && h < HUMAN_END}
        />
        <Track
          label="Agents · 0 → 24"
          activities={AGENT_ACTIVITIES}
          getActive={() => true}
        />

        {now && (
          <span
            className="pointer-events-none absolute -top-8 z-20 inline-flex -translate-x-1/2 items-center gap-1.5 rounded-full border border-dutch/30 bg-card px-2 py-0.5 text-[9px] font-medium tracking-[0.18em] text-dutch uppercase shadow-sm"
            style={{ left: nowLeft }}
          >
            <span className="h-1 w-1 rounded-full bg-dutch" />
            Now · {now.label}
          </span>
        )}
      </div>

      <div
        className="mt-4 grid font-mono text-[10px] text-muted-foreground"
        style={{ gridTemplateColumns: "repeat(24, minmax(0, 1fr))" }}
      >
        {Array.from({ length: TOTAL_HOURS }, (_, h) => {
          const show = HOUR_TICKS.includes(h);
          const isBoundary = h === HUMAN_START || h === HUMAN_END;
          return (
            <div
              key={h}
              className={[
                "text-center",
                show ? "" : "opacity-0",
                isBoundary ? "font-semibold text-dutch" : "",
              ].join(" ")}
            >
              {h.toString().padStart(2, "0")}
            </div>
          );
        })}
      </div>
    </div>
  );
}
