"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
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
import { QuestionTypeSelector } from "./QuestionTypeSelector";
import { SurveySettings } from "./SurveySettings";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { toast } from "sonner";

// Define the question types
export interface QuestionOption {
  id: string;
  text: string;
}

export interface Question {
  id: string;
  type: string;
  title: string;
  description?: string;
  required: boolean;
  options?: QuestionOption[];
  settings?: {
    allowMultiple?: boolean;
    includeOther?: boolean;
    min?: number;
    max?: number;
    step?: number;
  };
}

const surveyFormSchema = z.object({
  title: z.string().min(3, {
    message: "Survey title must be at least 3 characters.",
  }),
  description: z.string().optional(),
  settings: z.object({
    isPublic: z.boolean(),
    collectEmail: z.boolean(),
    allowAnonymous: z.boolean(),
    responsesLimit: z.number().min(0).optional(),
    expiresAt: z.date().optional(),
  }).optional(),
});

type SurveyFormValues = z.infer<typeof surveyFormSchema>;

export function SurveyCreationForm() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState("general");
  const [questions, setQuestions] = useState<Question[]>([]);
  
  const defaultValues: SurveyFormValues = {
    title: "",
    description: "",
    settings: {
      isPublic: true,
      collectEmail: false,
      allowAnonymous: true,
      responsesLimit: undefined,
      expiresAt: undefined,
    },
  };
  
  const form = useForm<SurveyFormValues>({
    resolver: zodResolver(surveyFormSchema),
    defaultValues,
  });

  function onSubmit(data: SurveyFormValues) {
    // Validate that there's at least one question
    if (questions.length === 0) {
      toast.error("Please add at least one question to your survey");
      setActiveTab("questions");
      return;
    }
    
    // Combine form data with questions
    const surveyData = {
      ...data,
      questions: questions,
    };
    
    // Here we would typically save the survey to the database
    console.log("Survey created:", surveyData);
    toast.success("Survey created successfully!");
    
    // Redirect to the surveys list
    router.push("/dashboard/surveys");
  }

  // Track when tabs change
  const handleTabChange = (value: string) => {
    setActiveTab(value);
  };

  const handleQuestionsChange = (updatedQuestions: Question[]) => {
    setQuestions(updatedQuestions);
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <Tabs value={activeTab} onValueChange={handleTabChange} className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="general">General</TabsTrigger>
            <TabsTrigger value="questions">Questions {questions.length > 0 && `(${questions.length})`}</TabsTrigger>
            <TabsTrigger value="settings">Settings</TabsTrigger>
          </TabsList>
          
          <TabsContent value="general" className="space-y-4 pt-4">
            <Card>
              <CardContent className="pt-6">
                <div className="space-y-4">
                  <FormField
                    control={form.control}
                    name="title"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Survey Title</FormLabel>
                        <FormControl>
                          <Input placeholder="Enter survey title" {...field} />
                        </FormControl>
                        <FormDescription>
                          A clear, descriptive title for your survey.
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="description"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Description</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="Enter a description for your survey"
                            className="min-h-[100px]"
                            {...field}
                          />
                        </FormControl>
                        <FormDescription>
                          Provide context about your survey to respondents.
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="questions" className="space-y-4 pt-4">
            <Card>
              <CardContent className="pt-6">
                <QuestionTypeSelector 
                  questions={questions} 
                  onQuestionsChange={handleQuestionsChange} 
                />
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="settings" className="space-y-4 pt-4">
            <Card>
              <CardContent className="pt-6">
                <SurveySettings form={form} />
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        <div className="flex justify-between md:justify-end space-x-4">
          <Button 
            type="button" 
            variant="outline"
            onClick={() => router.push("/dashboard/surveys")}
          >
            Cancel
          </Button>
          <Button type="submit">Create Survey</Button>
        </div>
      </form>
    </Form>
  );
} 