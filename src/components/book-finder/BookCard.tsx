
import React from "react";

interface BookCardProps {
  title: string;
  onSeeMore?: () => void;
}

export function BookCard({ title, onSeeMore }: BookCardProps) {
  return (
    <div className="bg-primary text-primary-foreground flex flex-col items-center justify-center p-5 rounded-lg shadow-soft transition-all hover:shadow-md">
      <div
        className="w-[60px] h-[60px] bg-background-secondary mb-5 rounded-md"
        aria-label="Book cover"
      />
      <span className="text-base font-medium">{title}</span>
      <button
        className="text-sm text-accent hover:text-accent/80 mt-2 transition-colors"
        onClick={onSeeMore}
      >
        See More ›
      </button>
    </div>
  );
}

