# course-catalog

Lab 1 project scaffold for "Advanced Web Technologies" — a small course
catalog built with Next.js 16 (App Router) and TypeScript.

## What's implemented

- **`/`** — home page with a welcome message and a link to `/courses`.
- **`/about`** — static page describing the project.
- **`/courses`** — list of courses fetched with `await getCourses()` in a
  Server Component, rendered via the `CourseCard` component.
- **`/courses/[id]`** — dynamic course page. `params` is typed as
  `Promise<{ id: string }>` and awaited; unknown ids trigger `notFound()`,
  handled by `app/courses/not-found.tsx`. `generateStaticParams` pre-builds
  a page for every course in the mock data.
- **`app/courses/[id]/loading.tsx`** — loading state shown during the
  simulated 300ms data fetch.
- **`components/LikeButton.tsx`** — the only Client Component in the
  project (`'use client'`); tracks likes locally with `useState`.
- Shared navigation (Home / Courses / About) in `app/layout.tsx`.

## Data

All data comes from mock functions in `lib/courses.ts` (`getCourses`,
`getCourse`), simulating a backend with an artificial 300ms delay. A real
backend will be introduced in a later lab with FastAPI.

## Running locally

```bash
npm install
npm run dev
```

Then open http://localhost:3000.

## Deployment

_(add your Vercel link here if you deploy it)_
