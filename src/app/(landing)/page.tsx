import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="flex flex-1 w-full flex-col items-center justify-center p-6 md:p-24 text-center">
      <h1 className="text-heading-1 font-bold">Home Page</h1>
      <p className="mt-4 text-body text-gray-600">
        Application layout placeholder.
      </p>
      <Button asChild className="mt-6">
        <Link href="/dashboard">Go to Dashboard</Link>
      </Button>
    </div>
  );
}
