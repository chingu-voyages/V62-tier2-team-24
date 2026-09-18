import { Flame, Sprout, Zap } from "lucide-react";
import type { SkillLevel, WeeklyHours } from "@/types";

export const SKILL_LEVEL_OPTIONS: {
  value: SkillLevel;
  label: string;
  description: string;
  icon: typeof Sprout;
}[] = [
  { value: "beginner", label: "Beginner", description: "Just starting out", icon: Sprout },
  { value: "intermediate", label: "Intermediate", description: "Some experience", icon: Flame },
  { value: "advanced", label: "Advanced", description: "Highly experienced", icon: Zap },
];

export const WEEKLY_HOURS_OPTIONS: {
  value: WeeklyHours;
  label: string;
  description: string;
}[] = [
  { value: "2-5", label: "2–5h/week", description: "Casual learner" },
  { value: "5-10", label: "5–10h/week", description: "Steady progress" },
  { value: "10-20", label: "10–20h/week", description: "Dedicated learner" },
  { value: "20+", label: "20+h/week", description: "Full immersion" },
];