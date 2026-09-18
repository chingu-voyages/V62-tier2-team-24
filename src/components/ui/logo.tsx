import Link from "next/link";
import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
}

export function Logo({ className }: LogoProps) {
  return (
    <Link href="/" className={cn("flex items-center gap-3 ", className)}>
      <div className="flex size-9 items-center justify-center rounded-xl bg-gradient-to-br from-[#06B6D4] to-[#10B981]">
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0_85_3047)">
            <path
              d="M9.99984 1.6665L1.6665 5.83317L9.99984 9.99984L18.3332 5.83317L9.99984 1.6665Z"
              stroke="white"
              strokeWidth="2.08333"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M1.6665 14.1665L9.99984 18.3332L18.3332 14.1665"
              stroke="white"
              strokeWidth="2.08333"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M1.6665 10L9.99984 14.1667L18.3332 10"
              stroke="white"
              strokeWidth="2.08333"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
          <defs>
            <clipPath id="clip0_85_3047">
              <rect width="20" height="20" fill="white" />
            </clipPath>
          </defs>
        </svg>
      </div>
      <span className="text-xl font-bold tracking-tight text-foreground">
        Path AI
      </span>
    </Link>
  );
}
