import { Loader2 } from "lucide-react";

export function GeneratingPathOverlay() {
  return (
    <div
      className="absolute inset-0 z-10 flex flex-col items-center justify-center gap-3 rounded-xl bg-background/85 backdrop-blur-sm dark:bg-background/80"
      role="status"
      aria-live="polite"
      aria-busy="true"
    >
      <Loader2
        className="size-8 animate-spin text-cyan-500 dark:text-cyan-400"
        aria-hidden="true"
      />
      <p className="text-base font-semibold text-foreground">
        Generating your path...
      </p>
      <p className="text-sm text-muted-foreground">
        This can take a few seconds.
      </p>
    </div>
  );
}