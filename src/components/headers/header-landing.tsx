"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Logo } from "@/components/ui/logo";

const NAV_ITEMS = [
  { label: "Features", href: "#features" },
  { label: "How it Works", href: "#how-it-works" },
  { label: "Pricing", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
];

export function HeaderLanding() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  return (
    <>
      <header className="sticky top-0 z-50 w-full border-b border-border bg-background/80 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <Logo />

          <nav className="hidden items-center gap-8 md:flex">
            {NAV_ITEMS.map((item) => (
              <Button key={item.href} variant="ghost" asChild>
                <Link
                  href={item.href}
                  className="text-sm font-medium transition-colors"
                >
                  {item.label}
                </Link>
              </Button>
            ))}
          </nav>

          <div className="hidden items-center gap-4 md:flex">
            <Button variant="gradient" size="lg">
              Generate Path <ArrowRight className="ml-1 size-4" />
            </Button>
          </div>

          <button
            type="button"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="inline-flex cursor-pointer items-center justify-center rounded-lg p-2 text-muted-foreground hover:bg-accent hover:text-foreground focus:outline-none md:hidden"
            aria-label="Toggle Menu"
          >
            {isMobileMenuOpen ? (
              <X className="size-6" />
            ) : (
              <Menu className="size-6" />
            )}
          </button>
        </div>
      </header>

      <div
        className={`fixed inset-0 z-40 flex flex-col justify-between bg-background px-6 pt-24 pb-8 transition-all duration-300 ease-in-out md:hidden ${
          isMobileMenuOpen
            ? "pointer-events-auto opacity-100 translate-y-0"
            : "pointer-events-none opacity-0 -translate-y-4"
        }`}
      >
        <nav className="flex flex-col gap-6 text-center">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-2xl font-semibold text-foreground/80 hover:text-foreground"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex flex-col gap-4 pt-6 border-t border-border">
          <Button
            variant="gradient"
            size="lg"
            className="w-full h-12 text-base"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Generate Path <ArrowRight className="ml-1 size-4" />
          </Button>
        </div>
      </div>
    </>
  );
}
