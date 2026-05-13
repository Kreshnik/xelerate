import Link from "next/link";

const blocks = [
  {
    heading: "Email",
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
    heading: "Office",
    body: (
      <address className="not-italic text-sm leading-6 text-muted-foreground">
        Saga Ventures
        <br />
        Keizersgracht 555
        <br />
        1017 DR Amsterdam, NL
      </address>
    ),
  },
  {
    heading: "Careers",
    body: (
      <p className="text-sm text-muted-foreground">
        We&apos;re hiring product engineers, designers and platform builders.{" "}
        <Link
          href="/about#careers"
          className="text-foreground underline-offset-4 hover:underline"
        >
          See open roles
        </Link>
        .
      </p>
    ),
  },
  {
    heading: "Security / responsible disclosure",
    body: (
      <p className="text-sm text-muted-foreground">
        Found something we should know?{" "}
        <a
          href="mailto:security@xelerate.ai"
          className="text-foreground underline-offset-4 hover:underline"
        >
          security@xelerate.ai
        </a>{" "}
        — PGP key on request.
      </p>
    ),
  },
];

export function ContactDetails() {
  return (
    <ul className="space-y-8">
      {blocks.map((b) => (
        <li key={b.heading}>
          <h2 className="text-xs font-medium tracking-[0.18em] text-muted-foreground uppercase">
            {b.heading}
          </h2>
          <div className="mt-2 text-sm">{b.body}</div>
        </li>
      ))}
    </ul>
  );
}
