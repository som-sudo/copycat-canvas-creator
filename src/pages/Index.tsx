import React, { useState } from "react";
import { Header } from "@/components/book-finder/Header";
import { TagPromptButton } from "@/components/book-finder/TagPromptButton";
import { QuoteSection } from "@/components/book-finder/QuoteSection";
import { BookGrid } from "@/components/book-finder/BookGrid";
import { PromptBar } from "@/components/book-finder/PromptBar";
import { BookPreferences } from "@/types/promptTypes";

// Sample book data
const sampleBooks = [
  { id: "1", title: "Book 1" },
  { id: "2", title: "Book 1" },
  { id: "3", title: "Book 1" },
  { id: "4", title: "Book 1" },
];

export default function Index() {
  const [books, setBooks] = useState(sampleBooks);

  const handlePreferencesComplete = (preferences: BookPreferences) => {
    // In a real application, this would call the LLM API with the preferences
    console.log("Preferences submitted:", preferences);
  };

  const handleTagPromptClick = () => {
    // In a real application, this would open a tag selection modal
    // or navigate to a tag selection page
    console.log("Tag prompt clicked");
  };

  const handleSeeMore = (bookId: string) => {
    // In a real application, this would navigate to a book details page
    console.log(`See more clicked for book ${bookId}`);
  };

  return (
    <main>
      <link
        href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&display=swap"
        rel="stylesheet"
      />
      <div className="flex flex-col items-center justify-center min-h-screen bg-neutral-100 p-4">
        <Header />
        <PromptBar onComplete={handlePreferencesComplete} />
        <TagPromptButton onClick={handleTagPromptClick} />
        <QuoteSection />
        <BookGrid books={books} onSeeMore={handleSeeMore} />
      </div>
    </main>
  );
}
