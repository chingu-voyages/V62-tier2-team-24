"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import type { LearningPath } from "@/types";

export default function PathDetailPage() {
  const { id } = useParams<{ id: string }>();
  const [learningPath, setLearningPath] = useState<LearningPath | null>(null);

  useEffect(() => {
    const raw = sessionStorage.getItem(`learning-path:${id}`);
    if (raw) {
      try {
        setLearningPath(JSON.parse(raw) as LearningPath);
      } catch {
        console.error("Failed to parse learning path from sessionStorage");
      }
    }
  }, [id]);

  if (!learningPath) {
    return (
      <main className="mx-auto max-w-3xl px-4 py-16 text-center text-muted-foreground">
        Loading learning path…
      </main>
    );
  }

  return (
    <main className="mx-auto max-w-3xl px-4 py-16">
      <h1 className="mb-6 text-2xl font-bold">
        Generated Learning Path{" "}
        <span className="text-muted-foreground text-sm font-normal">
          (raw — UI coming soon)
        </span>
      </h1>

      {/* Raw JSON preview — temporary until full UI is built */}
      <pre className="overflow-auto rounded-lg border bg-muted p-6 text-sm leading-relaxed">
        {JSON.stringify(learningPath, null, 2)}
      </pre>
    </main>
  );
}
