# Team Decision Log

Record key decisions here so the team can remember *what* was chosen and *why*.

| No. | Question / option | Decision | Notes |
| :--- | :--- | :--- | :--- |
| 1 | Repo organization | Single GitHub repo for frontend and backend | Next.js App Router hosts pages and API routes together |
| 2 | Frontend | Next.js 16 (App Router) + React 19 + TypeScript | `src/` directory, import alias `@/*` |
| 3 | Styling / UI | Tailwind CSS v4 + shadcn/ui + lucide-react | Theme tokens live in `src/app/globals.css` |
| 4 | Forms / validation | react-hook-form + zod | Installed; not wired yet |
| 5 | Auth / database | Firebase | Client SDK in `src/lib/firebase.ts`; Admin placeholder in `src/backend/firebaseAdmin.ts` |
| 6 | Path generation | Server API route `/api/generate-path` | Placeholder in `src/backend/aiService.ts` |
| 7 | Hosting (planned) | Vercel (typical for Next.js) | Not deployed yet |
| 8 | Package manager | npm | `package-lock.json` committed; Node.js 20+ |
| 9 | CI | GitHub Actions | Runs `npm test` on PRs and pushes to `main` |
| 10 | Local secrets | `.env.local` (gitignored) | Copy from `.env.example` |
