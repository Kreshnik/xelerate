import { Section, SectionHeader } from "@/components/site/section";

const team = [
  {
    role: "Founder · Product",
    name: "Luca Petersen",
    bio: "Previously Head of Product at Adyen. Shipped the merchant onboarding flow that handles €4B/yr for 9k teams.",
    photo:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=480&h=480&fit=crop&crop=faces&auto=format&q=80",
  },
  {
    role: "Founder · Engineering",
    name: "Mei Rosenberg",
    bio: "Previously Principal Engineer at Booking.com. Built the experimentation platform that ran 1k+ concurrent tests for 80 teams.",
    photo:
      "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=480&h=480&fit=crop&crop=faces&auto=format&q=80",
  },
  {
    role: "Founder · Design",
    name: "Jonas Kettering",
    bio: "Previously Design Lead at Miro. Led the canvas team that grew daily active boards from 200k to 3.4M in two years.",
    photo:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=480&h=480&fit=crop&crop=faces&auto=format&q=80",
  },
];

export function AboutTeam() {
  return (
    <Section className="border-y border-border bg-card/40">
      <SectionHeader
        eyebrow="The team"
        title="Operators, not pundits."
        lede="Every founder here has shipped production software at scale. We've been the senior engineer staring at a Jira board on a Friday at 6pm. We're building the tool we wanted then."
      />

      <ul className="mt-12 grid gap-6 lg:grid-cols-3">
        {team.map((p) => (
          <li
            key={p.name}
            className="overflow-hidden rounded-xl border border-border bg-card"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={p.photo}
              alt={p.name}
              className="aspect-[4/5] w-full object-cover"
            />
            <div className="p-6">
              <p className="text-xs font-medium tracking-[0.18em] text-muted-foreground uppercase">
                {p.role}
              </p>
              <p className="mt-2 text-lg font-semibold text-foreground">{p.name}</p>
              <p className="mt-3 text-sm text-muted-foreground">{p.bio}</p>
            </div>
          </li>
        ))}
      </ul>
    </Section>
  );
}
