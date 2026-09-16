"use client";

import { useState } from "react";

type LikeButtonProps = {
  initialLikes: number;
};

export default function LikeButton({ initialLikes }: LikeButtonProps) {
  const [likes, setLikes] = useState<number>(initialLikes);

  return (
    <button
      onClick={() => setLikes((prev) => prev + 1)}
      className="inline-flex items-center gap-2 rounded-md border border-gray-300 px-4 py-2 hover:bg-gray-50 transition-colors"
    >
      <span>❤</span>
      <span>{likes}</span>
    </button>
  );
}
