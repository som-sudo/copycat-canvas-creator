
import React from "react";
import { BookOpen } from "lucide-react";

interface HeaderProps {
  title?: string;
}

export function Header({ title = "Ready to get started?" }: HeaderProps) {
  return (
    <div className="text-center mb-10 animate-fade-in">
      <div className="flex items-center justify-center mb-3">
        <BookOpen className="w-8 h-8 text-amber-700 mr-2" />
        <span className="text-3xl font-playfair font-semibold text-amber-900">
          {title}
        </span>
      </div>
      <div className="text-base text-amber-800/80 mt-2 font-serif">
        Let our magical book finder discover your perfect read
      </div>
      <div className="text-base text-amber-700/70 font-serif">
        Curated recommendations just for you
      </div>
    </div>
  );
}
