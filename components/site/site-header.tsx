"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import {
  motion,
  useMotionValueEvent,
  useReducedMotion,
  useScroll,
} from "motion/react";
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

const STOP_DELAY_MS = 650;
const TOP_THRESHOLD = 80;

export function SiteHeader() {
  const { scrollY } = useScroll();
  const reduceMotion = useReducedMotion();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isScrolling, setIsScrolling] = useState(false);
  const [atTop, setAtTop] = useState(true);
  const stopTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const lastY = useRef(0);

  useMotionValueEvent(scrollY, "change", (latest) => {
    setAtTop(latest < TOP_THRESHOLD);
    if (latest !== lastY.current) {
      lastY.current = latest;
      setIsScrolling(true);
      if (stopTimer.current) clearTimeout(stopTimer.current);
      stopTimer.current = setTimeout(() => {
        setIsScrolling(false);
      }, STOP_DELAY_MS);
    }
  });

  useEffect(
    () => () => {
      if (stopTimer.current) clearTimeout(stopTimer.current);
    },
    [],
  );

  const showHeader = atTop || isScrolling || mobileOpen;

  return (
    <motion.header
      initial={false}
      animate={{ y: showHeader ? 0 : "-100%" }}
      transition={
        reduceMotion
          ? { duration: 0 }
          : { type: "spring", stiffness: 260, damping: 30, mass: 0.6 }
      }
      className="sticky top-0 z-40 border-b border-border bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60"
    >
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
          <MobileNav open={mobileOpen} onOpenChange={setMobileOpen} />
        </div>
      </Container>
    </motion.header>
  );
}
