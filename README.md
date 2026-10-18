# PathForge

### AI-Powered Learning Path Generator

**Live app → [https://v62-tier2-team-24.vercel.app/](https://v62-tier2-team-24.vercel.app/)**

---

## Overview

Learning something new is hard when you do not know where to start. There are countless courses, articles, and videos out there, but no clear line connecting them to your specific goal and current skill level.

PathForge was built as part of [Chingu Voyage 62](https://www.chingu.io/) to solve exactly that. You describe what you want to learn and where you are starting from, and the app uses Google Gemini to generate a personalized step-by-step roadmap with curated resources attached to each step. You can track your progress, regenerate any step that does not fit, and save as many paths as you need.

---

## Features

- **AI-generated learning paths** — describe a goal and skill level, get a structured 5–10 step roadmap tailored to you
- **Resource recommendations** — every step includes 2–4 specific free or paid resources (courses, articles, videos, documentation) with type and free/paid labels
- **Step regeneration** — not happy with a step? Regenerate it individually without rebuilding the whole path
- **Step completion tracking** — check off steps as you finish them; progress is saved to your account
- **Dashboard** — see all your saved paths with progress bars at a glance
- **Guest mode** — try the generator without signing up; paths are stored in your browser
- **Account system** — sign up and log in to persist paths across devices

---

## Running the project

### Prerequisites

- [Node.js](https://nodejs.org/) 20 or later
- [npm](https://www.npmjs.com/) (comes with Node)
- A [Firebase](https://firebase.google.com/) project with Firestore enabled
- A [Google Gemini API key](https://aistudio.google.com/app/apikey)

### 1. Clone and install

```bash
git clone https://github.com/chingu-voyages/V62-tier2-team-24.git
cd V62-tier2-team-24
npm install
```

### 2. Set up environment variables

```bash
# macOS / Linux
cp .env.example .env.local

# Windows PowerShell
Copy-Item .env.example .env.local
```

Open `.env.local` and fill in your values. Do not commit this file — it is gitignored.

| Variable | Description |
| --- | --- |
| `FIREBASE_ADMIN_PROJECT_ID` | Firebase Admin project ID (server-side) |
| `FIREBASE_ADMIN_CLIENT_EMAIL` | Firebase Admin service account email |
| `FIREBASE_ADMIN_PRIVATE_KEY` | Firebase Admin private key |
| `GEMINI_API_KEY` | Google Gemini API key |
| `JWT_SECRET` | Secret used to sign JWTs — generate one with: `node -e "console.log(require('crypto').randomBytes(64).toString('hex'))"` |

Variables prefixed with `NEXT_PUBLIC_` are exposed to the browser. All others are server-side only.

### 3. Start the dev server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). If the port is taken, Next.js will pick another — check your terminal.

### Other scripts

| Command | Purpose |
| --- | --- |
| `npm run build` | Create a production build |
| `npm run start` | Serve the production build (run `build` first) |
| `npm run lint` | Run ESLint |
| `npm test` | Run Jest |

---

## Dependencies

| | Package | Purpose |
| --- | --- | --- |
| Framework | [Next.js 15](https://nextjs.org/) (App Router), [React 19](https://react.dev/), [TypeScript](https://www.typescriptlang.org/) | Core framework and language |
| Styling | [Tailwind CSS v4](https://tailwindcss.com/), [shadcn/ui](https://ui.shadcn.com/), [lucide-react](https://lucide.dev/) | UI components and icons |
| Forms | [react-hook-form](https://react-hook-form.com/), [Zod](https://zod.dev/) | Form state and validation |
| AI | [Google Generative AI](https://ai.google.dev/) (Gemini 2.5 Flash) | Path and step generation |
| Auth | [jose](https://github.com/panva/jose), [bcryptjs](https://github.com/dcodeIO/bcrypt.js) | JWT signing, password hashing |
| Database | [Firebase Admin SDK](https://firebase.google.com/docs/admin/setup), [Firestore](https://firebase.google.com/docs/firestore) | Server-side data persistence |
| CI | [GitHub Actions](https://docs.github.com/en/actions) | Automated test runs on PRs |
| Deployment | [Vercel](https://www.vercel.com/) | 

---

## Contributing

This project was built during Chingu Voyage 62. If you find a bug or want to suggest an improvement:

1. Check the [open issues](https://github.com/chingu-voyages/V62-tier2-team-24/issues) to avoid duplicates
2. Open a new issue describing the bug or feature request
3. Fork the repo, create a branch (`git checkout -b fix/your-fix`), make your changes, then open a pull request against `main`
4. PRs are reviewed by the team — please include a clear description of what changed and why

> **Security vulnerabilities** — please do not report these through public issues. Contact a team member directly.

---

## Our Team

| Name | Role | Links |
| --- | --- | --- |
| Yangchen Dema | Scrum Master | [GitHub](https://github.com/dema66) · [LinkedIn](https://www.linkedin.com/in/yangchendema/) |
| Abiola Tijani | Developer | [GitHub](https://github.com/polanty) · [LinkedIn](https://www.linkedin.com/in/abiola-tijani-polanty/) |
| Bader Amer | Developer | [GitHub](https://github.com/baderamer-dev) · [LinkedIn](https://www.linkedin.com/in/baderamer/)  |
| Ayoub Ouachra | Developer | [GitHub](https://github.com/lobisloby) |
| Hadeel ALTalli | Shadow Scrum Master | [GitHub](https://github.com/Hadeel-AL-Talli) · [LinkedIn](https://www.linkedin.com/in/hadeel-tali/) |

---

## Team documents

- [Team Project Ideas](./docs/team_project_ideas.md)
- [Team Decision Log](./docs/team_decision_log.md)

---

## Developer reference

This section is for contributors who need to understand the internals.

### App routes

| Route | Description |
| --- | --- |
| `/` | Landing page |
| `/login` | Login page |
| `/signup` | Sign up page |
| `/dashboard` | All saved paths for the logged-in user |
| `/paths/new` | Path generation form |
| `/paths/[id]` | Path detail — step tracking and regeneration |

### API routes

All authenticated routes require a `Bearer` JWT in the `Authorization` header.

**Auth**

| Method | Route | Auth | Description |
| --- | --- | --- | --- |
| `POST` | `/api/auth/signup` | No | Creates a user account, returns a JWT |
| `POST` | `/api/auth/login` | No | Verifies credentials, returns a JWT |
| `GET` | `/api/auth/me` | Yes | Returns the authenticated user's profile |

**Paths**

| Method | Route | Auth | Description |
| --- | --- | --- | --- |
| `POST` | `/api/generate-path` | No | Generates a path via Gemini (does not persist) |
| `POST` | `/api/paths` | Yes | Saves a generated path to Firestore |
| `GET` | `/api/paths` | Yes | Returns all paths for the user, newest first |
| `GET` | `/api/paths/[id]` | Yes | Returns a single path (owner only) |

**Steps**

| Method | Route | Auth | Description |
| --- | --- | --- | --- |
| `PATCH` | `/api/paths/[id]/steps/[stepNumber]` | Yes | Toggles a step's completed state |
| `PUT` | `/api/paths/[id]/steps/[stepNumber]` | Yes | Regenerates a single step via Gemini |

### Data model

```ts
// Firestore collection: "paths"
interface LearningPath {
  id: string;                              // "path_<uuid>"
  goal: string;
  skillLevel: "beginner" | "intermediate" | "advanced";
  totalSteps: number;
  steps: LearningPathStep[];
  completedSteps: Record<number, boolean>;
  createdAt: string;                       // ISO 8601
  userId: string;
}

interface LearningPathStep {
  stepNumber: number;
  title: string;
  description: string;
  estimatedWeeks: number;
  resources: Resource[];
}

interface Resource {
  title: string;
  url: string;
  type: "course" | "article" | "video" | "documentation" | "book" | "other";
  free: boolean;
  description: string;
}
```

### Project structure

```
src/
  app/
    (auth)/           # /login and /signup pages
    api/              # API route handlers
      auth/           # signup, login, me
      generate-path/  # AI path generation (unauthenticated)
      paths/          # CRUD for saved paths + step toggle/regenerate
    dashboard/        # Dashboard page
    paths/            # /paths/new and /paths/[id] pages
  components/         # Shared UI — Navbar, Footer, theme toggle, shadcn/ui wrappers
  features/
    auth/             # Auth form logic, token helpers, client API
    paths/            # Path form schema, client API helpers
  hooks/              # useAuth hook
  lib/
    ai-service.ts     # Gemini integration — generateLearningPath, regenerateStep
    auth.ts           # hashPassword, comparePassword, signToken, verifyToken
    firebase-admin.ts # Singleton Firebase Admin / Firestore instance
    firebase.ts       # Firebase client SDK initialisation
    require-auth.ts   # Auth middleware for API routes
    user-id.ts        # Guest user ID helpers
    utils.ts          # cn() and other shared utilities
  types/              # Shared TypeScript types
```

Tailwind v4 is configured in `src/app/globals.css`. shadcn/ui is configured via `components.json`.
