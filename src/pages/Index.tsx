import React, { useState } from "react";
import { Header } from "@/components/book-finder/Header";
import { TagPromptButton } from "@/components/book-finder/TagPromptButton";
import { QuoteSection } from "@/components/book-finder/QuoteSection";
import { BookGrid } from "@/components/book-finder/BookGrid";

// Sample book data
const sampleBooks = [
  { id: "1", title: "Book 1" },
  { id: "2", title: "Book 1" },
  { id: "3", title: "Book 1" },
  { id: "4", title: "Book 1" },
];

export default function Index() {
  const [books, setBooks] = useState(sampleBooks);
  const [searchTerm, setSearchTerm] = useState("");

  const handleTagPromptClick = () => {
    // In a real application, this would open a tag selection modal
    // or navigate to a tag selection page
    console.log("Tag prompt clicked");
  };

  const handleSeeMore = (bookId: string) => {
    // In a real application, this would navigate to a book details page
    console.log(`See more clicked for book ${bookId}`);
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, this would filter books based on search term
    console.log(`Searching for: ${searchTerm}`);
  };

  return (
    <main>
      <link
        href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&display=swap"
        rel="stylesheet"
      />
      <div className="flex flex-col items-center justify-center min-h-screen bg-neutral-100 p-4">
        <Header />

        {/* Search form */}
        <form onSubmit={handleSearch} className="w-full max-w-md mb-8">
          <div className="flex">
            <input
              type="text"
              placeholder="Search for books..."
              className="flex-grow px-4 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-gray-400"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button
              type="submit"
              className="bg-gray-800 text-white px-4 py-2 rounded-r-md hover:bg-gray-700 transition-colors"
            >
              Search
            </button>
          </div>
        </form>

        <TagPromptButton onClick={handleTagPromptClick} />
        <QuoteSection />
        <BookGrid books={books} onSeeMore={handleSeeMore} />
      </div>
    </main>
  );
}
