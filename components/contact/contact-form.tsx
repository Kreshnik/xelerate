import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const helpOptions = [
  "Start a new project (v1)",
  "Upgrade an existing product (v1 → v2)",
  "Enterprise partnership",
  "Careers / join the team",
  "Just saying hi",
];

function Field({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="text-xs font-medium tracking-[0.18em] text-muted-foreground uppercase">
        {label}
      </span>
      <div className="mt-2">{children}</div>
    </label>
  );
}

export function ContactForm() {
  return (
    <form className="space-y-5 rounded-xl border border-border bg-card p-8">
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
      <Field label="How can we help?">
        <select
          name="topic"
          defaultValue={helpOptions[0]}
          className="flex h-10 w-full rounded-md border border-input bg-card px-3 py-2 text-sm shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
        >
          {helpOptions.map((o) => (
            <option key={o}>{o}</option>
          ))}
        </select>
      </Field>
      <Field label="Tell us more">
        <Textarea name="message" rows={5} required />
      </Field>
      <div className="pt-2">
        <Button type="submit" variant="brand" size="lg">
          Send message
        </Button>
      </div>
    </form>
  );
}
