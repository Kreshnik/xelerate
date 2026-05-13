import Link from "next/link";

const channels = [
  {
    heading: "General inquiries",
    body: (
      <a
        href="mailto:hello@xelerate.ai"
        className="text-foreground underline-offset-4 hover:underline"
      >
        hello@xelerate.ai
      </a>
    ),
  },
  {
    heading: "Careers",
    body: (
      <Link
        href="/about#careers"
        className="text-foreground underline-offset-4 hover:underline"
      >
        See open roles
      </Link>
    ),
  },
  {
    heading: "Security disclosure",
    body: (
      <a
        href="mailto:security@xelerate.ai"
        className="text-foreground underline-offset-4 hover:underline"
      >
        security@xelerate.ai
      </a>
    ),
  },
];

export function ContactDetails() {
  return (
    <aside className="lg:pt-2">
      <p className="text-xs font-medium tracking-[0.18em] text-muted-foreground uppercase">
        Other ways to reach us
      </p>
      <ul className="mt-6 space-y-6">
        {channels.map((c) => (
          <li key={c.heading} className="text-sm">
            <h2 className="font-medium text-foreground">{c.heading}</h2>
            <div className="mt-1 text-muted-foreground">{c.body}</div>
          </li>
        ))}
      </ul>
      <p className="mt-10 border-t border-border pt-6 text-xs leading-6 text-muted-foreground">
        Saga Ventures · Keizersgracht 555 · 1017 DR Amsterdam, NL
      </p>
    </aside>
  );
}
