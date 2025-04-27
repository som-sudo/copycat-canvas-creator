import React from "react";
import { BookCard } from "./BookCard";

interface Book {
  id: string;
  title: string;
}

interface BookGridProps {
  books: Book[];
  onSeeMore: (bookId: string) => void;
}

export function BookGrid({ books, onSeeMore }: BookGridProps) {
  return (
    <div className="grid grid-cols-4 gap-5 max-md:grid-cols-2 max-sm:grid-cols-1">
      {books.map((book) => (
        <BookCard
          key={book.id}
          title={book.title}
          onSeeMore={() => onSeeMore(book.id)}
        />
      ))}
    </div>
  );
}
