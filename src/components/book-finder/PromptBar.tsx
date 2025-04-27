
import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  BookPreferences,
  PromptStep,
  ReadingLevel,
  AgeGroup,
  Mood,
  ReadingTime,
} from "@/types/promptTypes";

interface PromptBarProps {
  onComplete: (preferences: BookPreferences) => void;
}

export function PromptBar({ onComplete }: PromptBarProps) {
  const [currentStep, setCurrentStep] = useState<PromptStep>("interests");
  const [preferences, setPreferences] = useState<Partial<BookPreferences>>({});

  const promptSteps: Record<PromptStep, string> = {
    interests: "What are your interests? (comma-separated)",
    genres: "What genres do you enjoy reading?",
    readingLevel: "What's your reading level?",
    favoriteAuthors: "Who are your favorite authors? (comma-separated)",
    mood: "What kind of mood are you looking for?",
    language: "Preferred language for reading?",
    location: "Where are you from?",
    ageGroup: "What's your age group?",
    readingTime: "How long of a read are you looking for?",
  };

  const steps: PromptStep[] = [
    "interests",
    "genres",
    "readingLevel",
    "favoriteAuthors",
    "mood",
    "language",
    "location",
    "ageGroup",
    "readingTime",
  ];

  const handleNext = () => {
    const currentIndex = steps.indexOf(currentStep);
    if (currentIndex < steps.length - 1) {
      setCurrentStep(steps[currentIndex + 1]);
    } else {
      onComplete(preferences as BookPreferences);
    }
  };

  const updatePreference = (value: any) => {
    setPreferences((prev) => ({
      ...prev,
      [currentStep]: value,
    }));
  };

  const renderPromptInput = () => {
    switch (currentStep) {
      case "interests":
      case "favoriteAuthors":
      case "location":
        return (
          <Input
            placeholder={promptSteps[currentStep]}
            onChange={(e) =>
              updatePreference(
                currentStep === "interests" || currentStep === "favoriteAuthors"
                  ? e.target.value.split(",").map((item) => item.trim())
                  : e.target.value
              )
            }
            className="w-full"
          />
        );

      case "readingLevel":
        return (
          <Select onValueChange={updatePreference}>
            <SelectTrigger>
              <SelectValue placeholder="Select reading level" />
            </SelectTrigger>
            <SelectContent>
              {["Beginner", "Intermediate", "Advanced"].map((level) => (
                <SelectItem key={level} value={level}>
                  {level}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        );

      case "mood":
        return (
          <Select onValueChange={updatePreference}>
            <SelectTrigger>
              <SelectValue placeholder="Select mood" />
            </SelectTrigger>
            <SelectContent>
              {["Uplifting", "Thought-provoking", "Dark", "Romantic"].map(
                (mood) => (
                  <SelectItem key={mood} value={mood}>
                    {mood}
                  </SelectItem>
                )
              )}
            </SelectContent>
          </Select>
        );

      case "ageGroup":
        return (
          <Select onValueChange={updatePreference}>
            <SelectTrigger>
              <SelectValue placeholder="Select age group" />
            </SelectTrigger>
            <SelectContent>
              {["Kids", "Teens", "Adults", "Seniors"].map((group) => (
                <SelectItem key={group} value={group}>
                  {group}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        );

      case "readingTime":
        return (
          <Select onValueChange={updatePreference}>
            <SelectTrigger>
              <SelectValue placeholder="Select reading time" />
            </SelectTrigger>
            <SelectContent>
              {["Short stories", "Medium reads", "Epic sagas"].map((time) => (
                <SelectItem key={time} value={time}>
                  {time}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        );

      default:
        return (
          <Input
            placeholder={promptSteps[currentStep]}
            onChange={(e) => updatePreference(e.target.value)}
            className="w-full"
          />
        );
    }
  };

  return (
    <div className="w-full max-w-md mb-8 space-y-4">
      <div className="text-sm text-gray-500 mb-2">{promptSteps[currentStep]}</div>
      <div className="flex gap-2">
        {renderPromptInput()}
        <Button
          onClick={handleNext}
          className="bg-gray-800 text-white hover:bg-gray-700"
        >
          {steps.indexOf(currentStep) === steps.length - 1 ? "Finish" : "Next"}
        </Button>
      </div>
      <div className="h-1 bg-gray-200 rounded">
        <div
          className="h-full bg-gray-800 rounded transition-all duration-300"
          style={{
            width: `${((steps.indexOf(currentStep) + 1) / steps.length) * 100}%`,
          }}
        />
      </div>
    </div>
  );
}
