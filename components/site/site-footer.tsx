import Link from "next/link";
import { Container } from "./container";
import { Logo } from "./logo";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const productLinks = [
  { label: "Home", href: "/" },
  { label: "Product", href: "/product" },
  { label: "Solutions", href: "/solutions" },
  { label: "Approach", href: "/approach" },
];

const companyLinks = [
  { label: "About", href: "/about" },
  { label: "Careers", href: "/about#careers" },
  { label: "Contact", href: "/contact" },
];

const resourceLinks = [
  { label: "Documentation", href: "/contact" },
  { label: "Blog", href: "/contact" },
  { label: "Status", href: "https://status.xelerate.ai/" },
];

const legalLinks = [
  { label: "Privacy", href: "/legal/privacy" },
  { label: "Terms", href: "/legal/terms" },
  { label: "Security", href: "/legal/security" },
];

function FooterColumn({
  heading,
  items,
}: {
  heading: string;
  items: { label: string; href: string }[];
}) {
  return (
    <nav aria-label={heading}>
      <h2 className="text-xs font-medium tracking-[0.18em] text-muted-foreground uppercase">
        {heading}
      </h2>
      <ul className="mt-4 space-y-3 text-sm">
        {items.map((item) => (
          <li key={`${heading}-${item.label}`}>
            <Link
              href={item.href}
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-card/40">
      <Container className="grid gap-12 py-16 lg:grid-cols-[1.4fr_3fr]">
        <div className="space-y-6">
          <Logo />
          <p className="max-w-xs text-sm text-muted-foreground">
            One control tower for the entire software lifecycle.
          </p>
          <form className="flex w-full max-w-sm items-center gap-2" aria-label="Newsletter signup">
            <Input
              type="email"
              placeholder="Get product updates"
              aria-label="Get product updates"
              className="h-9"
            />
            <Button type="submit" variant="brand" size="sm">
              Subscribe
            </Button>
          </form>
        </div>

        <div className="grid grid-cols-2 gap-10 sm:grid-cols-4">
          <FooterColumn heading="Product" items={productLinks} />
          <FooterColumn heading="Company" items={companyLinks} />
          <FooterColumn heading="Resources" items={resourceLinks} />
          <FooterColumn heading="Legal" items={legalLinks} />
        </div>
      </Container>

      <div className="border-t border-border/60">
        <Container className="flex flex-col items-start justify-between gap-2 py-6 text-xs text-muted-foreground sm:flex-row sm:items-center">
          <p>© 2026 Xelerate.ai · Built in Amsterdam</p>
          <p className="tracking-wider uppercase">Free to start. No credit card.</p>
        </Container>
      </div>
    </footer>
  );
}
