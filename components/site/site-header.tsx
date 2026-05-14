import Link from "next/link";
import { Container } from "./container";
import { Logo } from "./logo";
import { MobileNav } from "./mobile-nav";
import { Button } from "@/components/ui/button";

const primaryNav = [
  { label: "Product", href: "/product" },
  { label: "Solutions", href: "/solutions" },
  { label: "Approach", href: "/approach" },
  { label: "About", href: "/about" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <Container className="flex h-16 items-center justify-between">
        <div className="flex items-center gap-3">
          <Logo />
          <span className="hidden rounded-full border border-border bg-card px-2 py-0.5 text-[10px] font-medium tracking-wider text-muted-foreground sm:inline-block">
            BETA
          </span>
        </div>

        <nav aria-label="Main navigation" className="hidden md:block">
          <ul className="flex items-center gap-8 text-sm text-muted-foreground">
            {primaryNav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="transition-colors hover:text-foreground"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <Link
            href="/contact"
            className="hidden text-sm text-muted-foreground transition-colors hover:text-foreground md:inline-block"
          >
            Contact
          </Link>
          <Button asChild variant="brand" size="sm">
            <Link href="/sign-in">Sign in</Link>
          </Button>
          <MobileNav />
        </div>
      </Container>
    </header>
  );
}
