import React from "react";

interface BookCardProps {
  title: string;
  onSeeMore?: () => void;
}

export function BookCard({ title, onSeeMore }: BookCardProps) {
  return (
    <div className="bg-black text-white flex flex-col items-center justify-center p-5">
      <div
        className="w-[60px] h-[60px] bg-white mb-5"
        aria-label="Book cover"
      />
      <span className="text-base font-medium">{title}</span>
      <button
        className="text-sm text-gray-400 mt-2 hover:text-gray-300 transition-colors"
        onClick={onSeeMore}
      >
        See More ›
      </button>
    </div>
  );
}
