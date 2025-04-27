
export type ReadingLevel = "Beginner" | "Intermediate" | "Advanced";
export type AgeGroup = "Kids" | "Teens" | "Adults" | "Seniors";
export type Mood = "Uplifting" | "Thought-provoking" | "Dark" | "Romantic";
export type ReadingTime = "Short stories" | "Medium reads" | "Epic sagas";

export interface BookPreferences {
  interests: string[];
  genres: string[];
  readingLevel: ReadingLevel;
  favoriteAuthors: string[];
  mood: Mood;
  language: string;
  location: string;
  ageGroup: AgeGroup;
  readingTime: ReadingTime;
}

export type PromptStep =
  | "interests"
  | "genres"
  | "readingLevel"
  | "favoriteAuthors"
  | "mood"
  | "language"
  | "location"
  | "ageGroup"
  | "readingTime";
