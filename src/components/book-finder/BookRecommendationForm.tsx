
import React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";

const formSchema = z.object({
  interests: z.string().min(2, {
    message: "Please share at least a few interests.",
  }),
  genres: z.string().optional(),
  readingLevel: z.string({
    required_error: "Please select a reading level.",
  }),
  favoriteAuthors: z.string().optional(),
  mood: z.string({
    required_error: "Please select a mood.",
  }),
  language: z.string().optional(),
  location: z.string().optional(),
  ageGroup: z.string({
    required_error: "Please select an age group.",
  }),
  readingTime: z.string({
    required_error: "Please select preferred reading time.",
  }),
});

interface BookRecommendationFormProps {
  onSubmit: (data: any) => void;
}

export function BookRecommendationForm({ onSubmit }: BookRecommendationFormProps) {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      interests: "",
      genres: "",
      readingLevel: "",
      favoriteAuthors: "",
      mood: "",
      language: "English",
      location: "",
      ageGroup: "",
      readingTime: "",
    },
  });

  const handleSubmit = (values: z.infer<typeof formSchema>) => {
    // Process genres as an array from the comma-separated string
    const processedValues = {
      ...values,
      genres: values.genres ? values.genres.split(",").map(g => g.trim()) : [],
    };
    
    onSubmit(processedValues);
  };

  return (
    <div className="w-full max-w-2xl mx-auto p-6 bg-white/80 backdrop-blur-sm rounded-lg shadow-lg border border-amber-100 animate-fade-in">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <FormField
              control={form.control}
              name="interests"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-amber-900">Interests</FormLabel>
                  <FormControl>
                    <Textarea 
                      placeholder="What topics interest you? (e.g., history, space, cooking, travel)" 
                      className="border-amber-200 focus:border-amber-400 transition-all duration-300 hover:border-amber-300"
                      {...field} 
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="genres"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-amber-900">Genres (Optional)</FormLabel>
                  <FormControl>
                    <Textarea 
                      placeholder="Enter genres separated by commas (e.g., Fantasy, Mystery, Romance)" 
                      className="border-amber-200 focus:border-amber-400 transition-all duration-300 hover:border-amber-300"
                      {...field} 
                    />
                  </FormControl>
                  <FormDescription className="text-amber-700/70">
                    Separate multiple genres with commas
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="readingLevel"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-amber-900">Reading Level</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger className="border-amber-200 focus:border-amber-400 transition-all duration-300 hover:border-amber-300">
                        <SelectValue placeholder="Select reading level" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="beginner">Beginner</SelectItem>
                      <SelectItem value="intermediate">Intermediate</SelectItem>
                      <SelectItem value="advanced">Advanced</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="favoriteAuthors"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-amber-900">Favorite Authors (Optional)</FormLabel>
                  <FormControl>
                    <Input 
                      placeholder="E.g., Jane Austen, Neil Gaiman" 
                      className="border-amber-200 focus:border-amber-400 transition-all duration-300 hover:border-amber-300"
                      {...field} 
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="mood"
              render={({ field }) => (
                <FormItem className="space-y-3">
                  <FormLabel className="text-amber-900">Mood</FormLabel>
                  <FormControl>
                    <RadioGroup
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                      className="grid grid-cols-2 gap-2"
                    >
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="uplifting" id="uplifting" className="text-amber-600 border-amber-400" />
                        <Label htmlFor="uplifting" className="text-amber-800">Uplifting</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="thoughtProvoking" id="thoughtProvoking" className="text-amber-600 border-amber-400" />
                        <Label htmlFor="thoughtProvoking" className="text-amber-800">Thought-provoking</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="dark" id="dark" className="text-amber-600 border-amber-400" />
                        <Label htmlFor="dark" className="text-amber-800">Dark</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="romantic" id="romantic" className="text-amber-600 border-amber-400" />
                        <Label htmlFor="romantic" className="text-amber-800">Romantic</Label>
                      </div>
                    </RadioGroup>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="language"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-amber-900">Language (Optional)</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger className="border-amber-200 focus:border-amber-400 transition-all duration-300 hover:border-amber-300">
                        <SelectValue placeholder="Select language" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="English">English</SelectItem>
                      <SelectItem value="Spanish">Spanish</SelectItem>
                      <SelectItem value="French">French</SelectItem>
                      <SelectItem value="German">German</SelectItem>
                      <SelectItem value="Japanese">Japanese</SelectItem>
                      <SelectItem value="Other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="location"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-amber-900">Location (Optional)</FormLabel>
                  <FormControl>
                    <Input 
                      placeholder="Where are you from?" 
                      className="border-amber-200 focus:border-amber-400 transition-all duration-300 hover:border-amber-300"
                      {...field} 
                    />
                  </FormControl>
                  <FormDescription className="text-amber-700/70">
                    We'll find books relevant to your region
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="ageGroup"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-amber-900">Age Group</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger className="border-amber-200 focus:border-amber-400 transition-all duration-300 hover:border-amber-300">
                        <SelectValue placeholder="Select age group" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="kids">Kids</SelectItem>
                      <SelectItem value="teens">Teens</SelectItem>
                      <SelectItem value="adults">Adults</SelectItem>
                      <SelectItem value="seniors">Seniors</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="readingTime"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-amber-900">Reading Time</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger className="border-amber-200 focus:border-amber-400 transition-all duration-300 hover:border-amber-300">
                        <SelectValue placeholder="Select reading time" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="short">Short Stories</SelectItem>
                      <SelectItem value="medium">Medium Reads</SelectItem>
                      <SelectItem value="long">Epic Sagas</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div className="flex justify-center pt-4">
            <Button 
              type="submit" 
              className="bg-gradient-to-r from-amber-600 to-amber-500 hover:from-amber-500 hover:to-amber-400 text-white border-none px-8 py-6 rounded-full text-lg font-medium transition-all duration-300 hover:shadow-lg"
            >
              Find My Magical Reads
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
}
