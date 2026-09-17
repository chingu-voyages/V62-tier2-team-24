import type { CreatePathValues } from "./schema";
import type { GeneratePathResponse } from "@/types";

export class GeneratePathError extends Error {
  constructor(
    message: string,
    public status?: number,
  ) {
    super(message);
    this.name = "GeneratePathError";
  }
}

export async function generatePath(
  input: CreatePathValues,
): Promise<GeneratePathResponse> {
  const response = await fetch("/api/generate-path", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(input),
  });

  if (!response.ok) {
    throw new GeneratePathError(
      "Could not generate your learning path. Please try again.",
      response.status,
    );
  }

  return response.json() as Promise<GeneratePathResponse>;
}