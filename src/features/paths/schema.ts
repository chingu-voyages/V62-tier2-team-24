import { z } from "zod";
import { SKILL_LEVELS, WEEKLY_HOURS } from "@/types";

export const createPathSchema = z.object({
  careerGoal: z
    .string()
    .trim()
    .min(1, "Please enter a valid career goal")
    .max(200, "Keep your goal under 200 characters"),
  skillLevel: z.enum(SKILL_LEVELS),
  background: z
    .string()
    .trim()
    .max(2000, "Keep this under 2000 characters")
    .optional()
    .transform((value) => (value === "" ? undefined : value)),
  weeklyHours: z.enum(WEEKLY_HOURS, {
    error: "Please select a weekly time commitment",
  }),
});

export type CreatePathValues = z.infer<typeof createPathSchema>;