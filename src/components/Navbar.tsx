import Link from "next/link";

export default function Navbar() {
  return (
    <header className="border-b border-border bg-background">
      <div className="mx-auto flex h-14 max-w-5xl items-center justify-between px-6">
        <Link href="/" className="text-base font-semibold tracking-tight">
          PathBuilder
        </Link>
        <nav className="flex items-center gap-4 text-sm">
          <Link
            href="/dashboard"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            Dashboard
          </Link>
          <Link
            href="/paths/new"
            className="rounded-lg bg-primary px-3 py-1.5 text-primary-foreground hover:bg-primary/80 transition-colors"
          >
            New Path
          </Link>
          <Link
            href="/(auth)/login"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            Login
          </Link>
        </nav>
      </div>
    </header>
  );
}
