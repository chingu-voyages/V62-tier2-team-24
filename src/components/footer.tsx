import { ArrowUpRight } from "lucide-react";
import { Logo } from "@/components/ui/logo";
import { cn } from "@/lib/utils";

interface FooterProps {
  className?: string;
}

export function Footer({ className }: FooterProps) {
  return (
    <footer
      className={cn(
        "w-full border-t border-border bg-background text-sm text-muted-foreground",
        className,
      )}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-[10px] sm:px-6 lg:px-8 max-[675px]:flex-col max-[675px]:gap-4 max-[675px]:text-center">
        <div className="flex flex-wrap items-center gap-3 max-[675px]:flex-col max-[675px]:justify-center">
          <Logo />
          <span className="text-xs text-muted-foreground">
            © 2026 Voyage 62. All rights reserved.
          </span>
        </div>

        <div className="flex items-center gap-2 text-xs max-[675px]:justify-center">
          <svg
            className="size-5 text-foreground shrink-0"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
          </svg>

          <span>Developed by Team —</span>

          <a
            href="https://github.com/chingu-voyages/V62-tier2-team-24#our-team"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-0.5 font-medium text-cyan-500 transition-colors hover:text-cyan-400"
          >
            View on GitHub
            <ArrowUpRight className="size-3.5" />
          </a>
        </div>
      </div>
    </footer>
  );
}
