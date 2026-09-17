import type { z } from "zod";
import type { ControllerRenderProps } from "react-hook-form";
import { createPathSchema } from "../schema";
import { SKILL_LEVEL_OPTIONS } from "../constants";

type PathFormInput = z.input<typeof createPathSchema>;

type SkillLevelFieldProps = {
  field: ControllerRenderProps<PathFormInput, "skillLevel">;
};

export function SkillLevelField({ field }: SkillLevelFieldProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
      {SKILL_LEVEL_OPTIONS.map((option) => {
        const Icon = option.icon;
        const isSelected = field.value === option.value;

        return (
          <label
            key={option.value}
            className={`flex flex-col p-4 rounded-lg border cursor-pointer transition-all ${
              isSelected
                ? "border-primary bg-primary/5 ring-1 ring-primary"
                : "border-border hover:border-muted-foreground/50"
            }`}
          >
            <input
              type="radio"
              name={field.name}
              value={option.value}
              checked={isSelected}
              onChange={() => field.onChange(option.value)}
              onBlur={field.onBlur}
              className="sr-only"
            />
            <div className="flex items-center gap-2 mb-1">
              <Icon className="w-4 h-4 text-primary" />
              <span className="font-semibold text-sm">{option.label}</span>
            </div>
            <span className="text-xs text-muted-foreground">
              {option.description}
            </span>
          </label>
        );
      })}
    </div>
  );
}