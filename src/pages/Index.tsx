
import React, { useState } from "react";
import { BookRecommendationForm } from "@/components/book-finder/BookRecommendationForm";
import { BookRecommendationResults } from "@/components/book-finder/BookRecommendationResults";
import { Header } from "@/components/book-finder/Header";
import { QuoteSection } from "@/components/book-finder/QuoteSection";

interface Book {
  id: string;
  title: string;
  author: string;
  description: string;
  coverUrl?: string;
}

interface FormData {
  interests: string;
  genres: string[];
  readingLevel: string;
  favoriteAuthors: string;
  mood: string;
  language: string;
  location: string;
  ageGroup: string;
  readingTime: string;
}

export default function Index() {
  const [isLoading, setIsLoading] = useState(false);
  const [recommendations, setRecommendations] = useState<Book[]>([]);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleFormSubmit = async (formData: FormData) => {
    setIsLoading(true);
    setFormSubmitted(true);
    
    console.log("Form submitted with data:", formData);
    
    // Simulate API call to LLM for book recommendations
    setTimeout(() => {
      // Mock data - in a real app this would come from an API
      const mockRecommendations: Book[] = [
        {
          id: "1",
          title: "The Hidden Garden",
          author: "Eleanor Montgomery",
          description: "A magical tale of discovery and wonder in a forgotten garden that holds secrets of the past.",
          coverUrl: "https://source.unsplash.com/random/300x450/?book,garden"
        },
        {
          id: "2",
          title: "Whispers in the Fog",
          author: "James Holloway",
          description: "Set in a misty coastal town, this mystery unravels dark secrets that have been buried for generations.",
          coverUrl: "https://source.unsplash.com/random/300x450/?book,fog"
        },
        {
          id: "3",
          title: "Starlight Memories",
          author: "Sophia Chen",
          description: "A heartwarming journey of family bonds and childhood memories under the summer night sky.",
          coverUrl: "https://source.unsplash.com/random/300x450/?book,stars"
        },
        {
          id: "4",
          title: "The Clockmaker's Daughter",
          author: "Thomas Wright",
          description: "An intricate tale of time, love, and the delicate mechanisms that connect our lives.",
          coverUrl: "https://source.unsplash.com/random/300x450/?book,clock"
        }
      ];
      
      setRecommendations(mockRecommendations);
      setIsLoading(false);
    }, 2000); // Simulate 2-second API call
  };

  return (
    <main className="font-serif">
      <link
        href="https://fonts.googleapis.com/css2?family=Lora:wght@400;500;600;700&family=Playfair+Display:wght@400;500;600;700&display=swap"
        rel="stylesheet"
      />
      <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-amber-50 to-orange-50 p-4">
        <Header title="Find Your Next Magical Read" />
        
        {!formSubmitted ? (
          <>
            <QuoteSection />
            <BookRecommendationForm onSubmit={handleFormSubmit} />
          </>
        ) : (
          <BookRecommendationResults 
            books={recommendations} 
            isLoading={isLoading} 
            onReset={() => {
              setFormSubmitted(false);
              setRecommendations([]);
            }} 
          />
        )}
      </div>
    </main>
  );
}
