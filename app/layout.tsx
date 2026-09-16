import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: "Course Catalog",
  description: "Semester project course catalog built with Next.js",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">
        <nav className="border-b border-gray-200">
          <div className="mx-auto max-w-3xl px-6 py-4 flex gap-6">
            <Link href="/" className="hover:underline">
              Home
            </Link>
            <Link href="/courses" className="hover:underline">
              Courses
            </Link>
            <Link href="/about" className="hover:underline">
              About
            </Link>
          </div>
        </nav>
        <div className="flex-1">{children}</div>
      </body>
    </html>
  );
}
