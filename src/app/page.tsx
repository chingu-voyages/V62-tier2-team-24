import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="mx-auto flex max-w-5xl flex-col items-center justify-center gap-8 px-6 py-24 text-center">
      <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
        Hello, welcome to PathBuilder
      </h1>
      <p className="max-w-xl text-lg text-muted-foreground">
        Generate a personalized AI learning path tailored to your career goals,
        current skill level, and available time.
      </p>
      <div className="flex flex-wrap items-center justify-center gap-3">
        <Link href="/paths/new">
          <Button size="lg">Get started</Button>
        </Link>
        <Link href="/dashboard">
          <Button variant="outline" size="lg">
            View dashboard
          </Button>
        </Link>
      </div>
    </div>
  );
}
