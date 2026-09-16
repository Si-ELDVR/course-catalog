import Link from "next/link";

export default function NotFound() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-16 text-center">
      <h1 className="text-3xl font-bold mb-4">Course not found</h1>
      <p className="text-gray-600 mb-8">
        We couldn&apos;t find a course with that id.
      </p>
      <Link href="/courses" className="text-blue-600 hover:underline">
        ← Back to courses
      </Link>
    </main>
  );
}
