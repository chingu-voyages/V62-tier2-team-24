import type { CSSProperties } from "react";
import { HomeCtas } from "./home-ctas";
import {
  BarChart3,
  Check,
  Clock3,
  Database,
  RefreshCw,
  Sparkles,
  Target,
  User,
  Zap,
} from "lucide-react";

const features = [
  {
    icon: User,
    title: "AI-Driven Personalization",
    text: "Our model analyzes your goals and pace to craft a unique learning path.",
  },
  {
    icon: Zap,
    title: "Instant Generation",
    text: "Get a complete, structured roadmap in seconds, no waiting.",
  },
  {
    icon: BarChart3,
    title: "Progress Tracking",
    text: "Visual milestones keep you accountable throughout your journey.",
  },
  {
    icon: RefreshCw,
    title: "Adaptive Updates",
    text: "Your path evolves as you learn, and the AI recalibrates with you.",
  },
  {
    icon: Target,
    title: "Goal-Oriented Structure",
    text: "Each step is sequenced so you build on the last and transfer skills.",
  },
  {
    icon: Database,
    title: "Curated Resources",
    text: "Every milestone links to vetted free and premium resources.",
  },
];

const previewSteps = [
  { title: "HTML & CSS foundations", weeks: 2, state: "done" },
  { title: "JavaScript essentials", weeks: 3, state: "done" },
  { title: "React and components", weeks: 4, state: "current" },
  { title: "Build a portfolio project", weeks: 3, state: "next" },
] as const;

function rise(delay: number): CSSProperties {
  return { "--rise-delay": `${delay}ms` } as CSSProperties;
}

export default function Home() {
  return (
    <div className="relative overflow-x-clip">
      <div className="relative z-10 mx-auto max-w-5xl px-6 pb-24 pt-10 sm:pt-16">
        {/* Hero */}
        <section className="grid items-center gap-14 lg:grid-cols-[1.3fr_1fr] lg:gap-10">
          <div className="text-center lg:text-left">
            <span
              className="landing-rise inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-700 backdrop-blur dark:text-emerald-300"
              style={rise(0)}
            >
              <Sparkles className="size-3.5" />
              AI-powered learning roadmaps
            </span>

            <h1
              className="landing-rise mt-6 text-4xl font-extrabold leading-[1.1] tracking-tight sm:text-5xl lg:whitespace-nowrap lg:text-[3.1rem]"
              style={rise(100)}
            >
              Your learning path
              <br />
              built for you
            </h1>

            <p
              className="landing-rise mx-auto mt-6 max-w-xl text-base text-muted-foreground sm:text-lg lg:mx-0"
              style={rise(200)}
            >
              Stop guessing what to learn next. Our AI analyzes your goals,
              current skills, and available time to generate a precise,
              step-by-step learning path tailored for you.
            </p>

            <div className="landing-rise" style={rise(300)}>
              <HomeCtas className="lg:justify-start" />
            </div>
          </div>

          <div className="landing-rise" style={rise(250)}>
            <HeroPreview />
          </div>
        </section>

        <section className="mt-24 w-full text-center">
          <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
            Everything you need to level up
          </h2>

          <div className="mt-10 grid gap-4 text-left sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => {
              const Icon = feature.icon;
              return (
                <div
                  key={feature.title}
                  className="group rounded-xl border border-border/50 bg-card/50 p-5 backdrop-blur transition duration-300 hover:-translate-y-1 hover:border-emerald-500/40 hover:bg-card/70 hover:shadow-lg hover:shadow-emerald-500/10 motion-reduce:transition-none motion-reduce:hover:translate-y-0"
                >
                  <Icon className="size-5 text-primary transition-colors duration-300 group-hover:text-emerald-500" />
                  <h3 className="mt-4 font-semibold">{feature.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    {feature.text}
                  </p>
                </div>
              );
            })}
          </div>
        </section>
      </div>
    </div>
  );
}

function HeroPreview() {
  return (
    <div className="relative mx-auto w-full max-w-md" aria-hidden="true">
      <div className="absolute -inset-10 rounded-[3rem] bg-gradient-to-tr from-emerald-500/25 via-cyan-500/15 to-violet-500/25 blur-3xl" />

      <div className="landing-float relative rounded-2xl border border-border/60 bg-card/80 p-5 text-left shadow-2xl shadow-emerald-500/10 backdrop-blur-xl">
        <div className="flex items-center justify-between">
          <div className="flex gap-1.5">
            <span className="size-2.5 rounded-full bg-red-400/70" />
            <span className="size-2.5 rounded-full bg-amber-400/70" />
            <span className="size-2.5 rounded-full bg-emerald-400/70" />
          </div>
          <span className="text-[11px] text-muted-foreground">
            Your roadmap
          </span>
        </div>

        <div className="mt-5 flex flex-wrap gap-2">
          <span className="rounded-full border border-emerald-500/25 bg-emerald-500/10 px-2.5 py-0.5 text-[11px] text-emerald-700 dark:text-emerald-400">
            Frontend Developer
          </span>
          <span className="rounded-full border border-cyan-500/25 bg-cyan-500/10 px-2.5 py-0.5 text-[11px] text-cyan-700 dark:text-cyan-400">
            beginner
          </span>
          <span className="rounded-full border border-violet-500/25 bg-violet-500/10 px-2.5 py-0.5 text-[11px] text-violet-700 dark:text-violet-400">
            12 weeks
          </span>
        </div>

        <div className="mt-5 flex items-center gap-3">
          <div className="h-2 flex-1 overflow-hidden rounded-full bg-muted">
            <div className="h-full w-1/2 rounded-full bg-gradient-to-r from-cyan-400 to-emerald-400" />
          </div>
          <span className="text-xs font-bold">50%</span>
        </div>

        <ol className="relative mt-6 space-y-3">
          <span className="absolute bottom-4 left-[15px] top-4 w-px bg-border" />
          {previewSteps.map((step, index) => (
            <li key={step.title} className="relative flex items-center gap-3">
              <span
                className={`z-10 grid size-8 shrink-0 place-items-center rounded-full border-2 text-xs font-semibold ${
                  step.state === "done"
                    ? "border-emerald-500 bg-emerald-500 text-black"
                    : step.state === "current"
                      ? "border-emerald-500 bg-background text-emerald-600 dark:text-emerald-400"
                      : "border-border bg-background text-muted-foreground"
                }`}
              >
                {step.state === "done" ? (
                  <Check className="size-4" />
                ) : (
                  index + 1
                )}
              </span>
              <div
                className={`flex flex-1 items-center justify-between gap-3 rounded-xl border px-3 py-2.5 ${
                  step.state === "current"
                    ? "border-emerald-500/40 bg-emerald-500/[.06]"
                    : "border-border/60 bg-muted/30"
                }`}
              >
                <span
                  className={`text-[13px] font-medium ${
                    step.state === "done"
                      ? "text-muted-foreground line-through decoration-emerald-500/60"
                      : ""
                  }`}
                >
                  {step.title}
                </span>
                <span className="flex shrink-0 items-center gap-1 text-[11px] text-muted-foreground">
                  <Clock3 className="size-3" /> {step.weeks}w
                </span>
              </div>
            </li>
          ))}
        </ol>
      </div>

      <div className="landing-float-slow absolute -left-6 -top-5 hidden items-center gap-2 rounded-xl border border-border/60 bg-card/90 px-3 py-2 text-xs font-medium shadow-lg backdrop-blur sm:flex">
        <span className="grid size-5 place-items-center rounded-full bg-emerald-500 text-black">
          <Check className="size-3" />
        </span>
        Step completed
      </div>
    </div>
  );
}
