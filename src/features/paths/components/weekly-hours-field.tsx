import type { z } from "zod";
import type { ControllerRenderProps } from "react-hook-form";
import { createPathSchema } from "../schema";
import { WEEKLY_HOURS_OPTIONS } from "../constants";

type PathFormInput = z.input<typeof createPathSchema>;

type WeeklyHoursFieldProps = {
  field: ControllerRenderProps<PathFormInput, "weeklyHours">;
};

export function WeeklyHoursField({ field }: WeeklyHoursFieldProps) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
      {WEEKLY_HOURS_OPTIONS.map((option) => {
        const isSelected = field.value === option.value;

        return (
          <label
            key={option.value}
            className={`flex flex-col items-center justify-center p-3 rounded-lg border cursor-pointer text-center transition-all ${
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
            <span className="font-semibold text-sm">{option.label}</span>
            <span className="text-xs text-muted-foreground mt-0.5">
              {option.description}
            </span>
          </label>
        );
      })}
    </div>
  );
}