import Link from "next/link";

export default function HomePage() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-16">
      <h1 className="text-3xl font-bold mb-4">Course Catalog</h1>
      <p className="text-gray-600 mb-8">
        Welcome! This is a small catalog of courses from our program —
        browse what&apos;s on offer and like the ones you find interesting.
      </p>
      <Link
        href="/courses"
        className="inline-block rounded-md bg-black px-4 py-2 text-white hover:bg-gray-800 transition-colors"
      >
        Browse courses
      </Link>
    </main>
  );
}
