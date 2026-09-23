import Link from "next/link";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export type CourseCardProps = {
  id: number | string;
  title: string;
  description: string;
  credits: number;
  likes: number;
};

// Server Component: no "use client" here
export default function CourseCard({
  id,
  title,
  description,
  credits,
  likes,
}: CourseCardProps) {
  return (
    <Link href={`/courses/${id}`}>
      <Card className="h-full hover:shadow-md hover:border-blue-300 transition">
        <CardHeader>
          <CardTitle className="text-lg">{title}</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground">{description}</p>
        </CardContent>
        <CardFooter className="flex items-center justify-between">
          <span className="text-sm">{credits} credits</span>
          <Button variant="ghost" size="sm">
            ❤ {likes}
          </Button>
        </CardFooter>
      </Card>
    </Link>
  );
}
