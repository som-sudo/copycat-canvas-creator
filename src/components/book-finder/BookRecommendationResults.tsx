
import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Book } from "lucide-react";

interface Book {
  id: string;
  title: string;
  author: string;
  description: string;
  coverUrl?: string;
}

interface BookRecommendationResultsProps {
  books: Book[];
  isLoading: boolean;
  onReset: () => void;
}

export function BookRecommendationResults({ 
  books, 
  isLoading,
  onReset 
}: BookRecommendationResultsProps) {
  return (
    <div className="w-full max-w-4xl mx-auto">
      <div className="mb-8 flex justify-between items-center">
        <h2 className="text-2xl font-playfair text-amber-900 font-semibold">Your Magical Recommendations</h2>
        <Button 
          onClick={onReset} 
          variant="outline" 
          className="border-amber-300 text-amber-700 hover:bg-amber-100"
        >
          Start New Search
        </Button>
      </div>

      {isLoading ? (
        <div className="flex flex-col items-center justify-center py-20 text-amber-800">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-amber-500 mb-4"></div>
          <p className="text-lg font-serif">Our magical librarians are finding the perfect books for you...</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {books.map((book) => (
            <Card key={book.id} className="overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1 border-amber-200 bg-white/90 group">
              <div className="flex flex-col md:flex-row h-full">
                <div className="md:w-1/3 relative">
                  {book.coverUrl ? (
                    <img 
                      src={book.coverUrl} 
                      alt={`Cover of ${book.title}`} 
                      className="h-full w-full object-cover"
                    />
                  ) : (
                    <div className="h-full flex items-center justify-center bg-gradient-to-b from-amber-200 to-amber-100 p-4">
                      <Book className="h-16 w-16 text-amber-600" />
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="md:w-2/3 flex flex-col">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-amber-900 font-playfair">{book.title}</CardTitle>
                    <CardDescription className="text-amber-800 font-serif">by {book.author}</CardDescription>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <p className="text-amber-700 font-serif">{book.description}</p>
                  </CardContent>
                  <CardFooter>
                    <Button variant="ghost" className="text-amber-600 hover:text-amber-800 hover:bg-amber-100 ml-auto">
                      More Details
                    </Button>
                  </CardFooter>
                </div>
              </div>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}
