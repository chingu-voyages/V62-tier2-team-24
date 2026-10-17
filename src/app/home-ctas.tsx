"use client";

import { useSyncExternalStore } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { getStoredUser } from "@/features/auth/api";
import { cn } from "@/lib/utils";

export function HomeCtas({ className }: { className?: string }) {
  const user = useSyncExternalStore(
    () => () => {},
    getStoredUser,
    () => null,
  );

  return (
    <div
      className={cn(
        "mt-8 flex flex-wrap items-center justify-center gap-3",
        className,
      )}
    >
      <Link href={user ? "/dashboard" : "/login"} className="pulse-ring">
        <Button
          size="lg"
          className="h-11 min-w-48 bg-emerald-500 px-6 font-semibold text-black hover:bg-emerald-400"
        >
          Get started <ArrowRight />
        </Button>
      </Link>
      {!user && (
        <Link href="/paths/new">
          <Button
            variant="outline"
            size="lg"
            className="h-11 min-w-48 px-6 backdrop-blur"
          >
            Continue as guest
          </Button>
        </Link>
      )}
    </div>
  );
}
