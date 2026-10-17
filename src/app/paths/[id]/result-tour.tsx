"use client";

import { useEffect, useState, useSyncExternalStore } from "react";

const SEEN_KEY = "app:result-tour-seen";

export const TOUR_TIPS: Record<number, { title: string; text: string }> = {
  0: {
    title: "Search your paths",
    text: "Type a goal, a level, or a step name to filter the paths below.",
  },
  1: {
    title: "Your learning paths",
    text: "Each card is one path. The percent shows how much of it you have finished.",
  },
  2: {
    title: "Overall progress",
    text: "This bar fills up every time you mark a step as done.",
  },
  3: {
    title: "Step resources",
    text: "Hover over a step card to open its links and learning resources.",
  },
  4: {
    title: "Regenerate a step",
    text: "Not happy with a step? Click this arrow to get a new version of it.",
  },
};

function subscribe() {
  return () => {};
}

function seenOnClient() {
  return localStorage.getItem(SEEN_KEY) === "1";
}

function wideOnClient() {
  return window.matchMedia("(min-width: 1024px)").matches;
}

function subscribeWide(onChange: () => void) {
  const media = window.matchMedia("(min-width: 1024px)");
  media.addEventListener("change", onChange);
  return () => media.removeEventListener("change", onChange);
}

export function useResultTour({ canRegenerate }: { canRegenerate: boolean }) {
  const mounted = useSyncExternalStore(subscribe, () => true, () => false);
  const seen = useSyncExternalStore(subscribe, seenOnClient, () => true);
  const wide = useSyncExternalStore(subscribeWide, wideOnClient, () => false);
  const [index, setIndex] = useState(0);
  const [finished, setFinished] = useState(false);
  const [replay, setReplay] = useState(false);
  const show = mounted && (!seen || replay) && !finished;
  const baseOrder = wide ? [0, 1, 2, 3] : [2, 3];
  const order = canRegenerate ? [...baseOrder, 4] : baseOrder;

  useEffect(() => {
    if (!show) return;
    localStorage.setItem(SEEN_KEY, "1");
  }, [show]);

  function advance() {
    if (index >= order.length - 1) {
      localStorage.setItem(SEEN_KEY, "1");
      setFinished(true);
      return;
    }
    setIndex((value) => value + 1);
  }

  function skip() {
    localStorage.setItem(SEEN_KEY, "1");
    setFinished(true);
  }

  function restart() {
    localStorage.removeItem(SEEN_KEY);
    setIndex(0);
    setFinished(false);
    setReplay(true);
  }

  const step = show ? order[index] : -1;

  return {
    step,
    position: index + 1,
    total: order.length,
    spotlight: (id: number) => (step === id ? "tour-spotlight" : ""),
    advance,
    skip,
    restart,
  };
}

export function TourCallout({
  id,
  step,
  title,
  text,
  position,
  total,
  arrow = "left",
  onAdvance,
  onSkip,
  className,
}: {
  id: number;
  step: number;
  title: string;
  text: string;
  position: number;
  total: number;
  arrow?: "left" | "right";
  onAdvance: () => void;
  onSkip: () => void;
  className?: string;
}) {
  if (step !== id) return null;
  const isLast = position >= total;

  return (
    <div
      role="dialog"
      aria-label={title}
      className={`absolute z-30 w-64 rounded-xl border border-emerald-500/40 bg-card p-4 text-left text-card-foreground shadow-xl shadow-emerald-500/10 ${className ?? ""}`}
      style={{ animation: "tour-in 280ms ease-out" }}
    >
      <style>{`@keyframes tour-in { from { opacity: 0; transform: translateY(6px); } to { opacity: 1; transform: none; } }`}</style>
      <span
        className={`absolute -top-1.5 size-3 rotate-45 border-l border-t border-emerald-500/40 bg-card ${
          arrow === "right" ? "right-5" : "left-5"
        }`}
      />
      <p className="text-[10px] font-semibold uppercase tracking-[.14em] text-emerald-600 dark:text-emerald-400">
        Tip {position} of {total}
      </p>
      <p className="mt-1 text-sm font-semibold">{title}</p>
      <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
        {text}
      </p>
      <div className="mt-4 flex items-center justify-between">
        <div className="flex items-center gap-1">
          {Array.from({ length: total }, (_, dot) => (
            <span
              key={dot}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                dot === position - 1 ? "w-4 bg-emerald-500" : "w-1.5 bg-border"
              }`}
            />
          ))}
        </div>
        <div className="flex items-center gap-3">
          {!isLast && (
            <button
              type="button"
              onClick={onSkip}
              className="text-xs text-muted-foreground transition-colors hover:text-foreground"
            >
              Skip
            </button>
          )}
          <button
            type="button"
            onClick={onAdvance}
            className="rounded-md bg-emerald-500 px-3 py-1 text-xs font-semibold text-black transition-colors hover:bg-emerald-400"
          >
            {isLast ? "Done" : "Next"}
          </button>
        </div>
      </div>
    </div>
  );
}