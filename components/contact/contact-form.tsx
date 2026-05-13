import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const projectTypes = [
  "New product — building v1",
  "Upgrade — taking v1 to v2",
  "Enterprise partnership",
  "Something else",
];

function Field({
  label,
  hint,
  children,
}: {
  label: string;
  hint?: string;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="text-xs font-medium tracking-[0.18em] text-muted-foreground uppercase">
        {label}
      </span>
      <div className="mt-2">{children}</div>
      {hint && (
        <span className="mt-1.5 block text-xs text-muted-foreground">
          {hint}
        </span>
      )}
    </label>
  );
}

export function ContactForm() {
  return (
    <form className="rounded-xl border border-border bg-card p-6 sm:p-8">
      <div className="space-y-5">
        <div className="grid gap-5 sm:grid-cols-2">
          <Field label="First name">
            <Input name="firstName" required />
          </Field>
          <Field label="Last name">
            <Input name="lastName" required />
          </Field>
        </div>
        <div className="grid gap-5 sm:grid-cols-2">
          <Field label="Work email">
            <Input name="email" type="email" required />
          </Field>
          <Field label="Company">
            <Input name="company" />
          </Field>
        </div>
        <Field label="Project type">
          <select
            name="topic"
            defaultValue={projectTypes[0]}
            className="flex h-10 w-full rounded-md border border-input bg-card px-3 py-2 text-sm shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            {projectTypes.map((o) => (
              <option key={o}>{o}</option>
            ))}
          </select>
        </Field>
        <Field
          label="What are you building?"
          hint="Goal, current stack, timeline if you have one. The more concrete, the sharper our reply."
        >
          <Textarea name="message" rows={6} required />
        </Field>
      </div>

      <div className="mt-8 flex flex-col gap-3 border-t border-border pt-6 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-muted-foreground">
          A founding engineer replies within one business day.
        </p>
        <Button type="submit" variant="brand" size="lg">
          Send message
        </Button>
      </div>
    </form>
  );
}
