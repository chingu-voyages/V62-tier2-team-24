export const SKILL_LEVELS = ["beginner", "intermediate", "advanced"] as const;
export type SkillLevel = (typeof SKILL_LEVELS)[number];

export const WEEKLY_HOURS = ["2-5", "5-10", "10-20", "20+"] as const;
export type WeeklyHours = (typeof WEEKLY_HOURS)[number];

export type CreatePathInput = {
  careerGoal: string;
  skillLevel: SkillLevel;
  background?: string;
  weeklyHours: WeeklyHours;
};

export type GeneratePathResponse = {
  id: string;
};