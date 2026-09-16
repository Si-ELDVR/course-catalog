import Link from "next/link";

type CourseCardProps = {
  id: string;
  title: string;
  description: string;
  credits: number;
  likes: number;
};

export default function CourseCard({
  id,
  title,
  description,
  credits,
  likes,
}: CourseCardProps) {
  return (
    <Link
      href={`/courses/${id}`}
      className="block rounded-lg border border-gray-200 p-5 hover:border-gray-400 hover:shadow-sm transition"
    >
      <div className="flex items-start justify-between gap-4">
        <h2 className="text-lg font-semibold">{title}</h2>
        <span className="whitespace-nowrap text-sm text-gray-500">
          {credits} credits
        </span>
      </div>
      <p className="mt-2 text-sm text-gray-600">{description}</p>
      <div className="mt-3 text-sm text-gray-500">❤ {likes}</div>
    </Link>
  );
}
