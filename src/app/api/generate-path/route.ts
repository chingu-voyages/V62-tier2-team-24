import { NextResponse } from "next/server";
import { createPathSchema } from "@/features/paths/schema";

export async function POST(request: Request) {
  const body = await request.json();
  const parsed = createPathSchema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json(
      { error: "Invalid input", details: parsed.error.flatten() },
      { status: 400 },
    );
  }

  // `parsed.data` matches `CreatePathValues`
  return NextResponse.json({ id: "path_12345" });
}