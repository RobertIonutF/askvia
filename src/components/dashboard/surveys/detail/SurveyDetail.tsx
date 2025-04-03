"use client";

import { useState, useEffect } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { SurveyOverview } from "./SurveyOverview";
import { SurveyQuestions } from "./SurveyQuestions";
import { SurveyResponses } from "./SurveyResponses";
import { SurveySettings } from "./SurveySettings";
import { Survey } from "../types";
import { toast } from "sonner";
import { Share2, Edit, Trash2 } from "lucide-react";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";

interface SurveyDetailProps {
  surveyId: string;
}

// Mock function to fetch survey data
// In a real application, this would be an API call
const fetchSurvey = async (id: string): Promise<Survey> => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 1000));
  
  return {
    id,
    title: "Customer Satisfaction Survey",
    status: "active",
    responseCount: 127,
    createdAt: "2023-06-15T10:30:00Z",
    updatedAt: "2023-08-20T14:45:00Z",
    description: "Help us understand how we can improve our service by providing your feedback.",
    questions: [
      {
        id: "q1",
        type: "multipleChoice",
        title: "How satisfied are you with our service?",
        required: true,
        options: [
          { id: "opt1", text: "Very satisfied" },
          { id: "opt2", text: "Satisfied" },
          { id: "opt3", text: "Neutral" },
          { id: "opt4", text: "Dissatisfied" },
          { id: "opt5", text: "Very dissatisfied" }
        ]
      },
      {
        id: "q2",
        type: "rating",
        title: "How likely are you to recommend our product to others?",
        required: true,
        settings: {
          min: 1,
          max: 10,
          step: 1
        }
      },
      {
        id: "q3",
        type: "text",
        title: "What improvements would you suggest for our service?",
        required: false
      }
    ],
    settings: {
      isPublic: true,
      collectEmail: true,
      allowAnonymous: false,
      responsesLimit: 500,
      expiresAt: new Date("2023-12-31T23:59:59Z")
    }
  };
};

export function SurveyDetail({ surveyId }: SurveyDetailProps) {
  const [survey, setSurvey] = useState<Survey | null>(null);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState("overview");
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);
  
  useEffect(() => {
    const loadSurvey = async () => {
      try {
        const data = await fetchSurvey(surveyId);
        setSurvey(data);
      } catch (error) {
        console.error("Failed to load survey:", error);
        toast.error("Failed to load survey details");
      } finally {
        setLoading(false);
      }
    };
    
    loadSurvey();
  }, [surveyId]);
  
  const handleDeleteSurvey = () => {
    // In a real application, this would call an API to delete the survey
    toast.success("Survey deleted successfully");
    setIsDeleteDialogOpen(false);
    // Redirect would happen here
  };
  
  if (loading) {
    return <SurveyDetailSkeleton />;
  }
  
  if (!survey) {
    return (
      <Card>
        <CardContent className="flex flex-col items-center justify-center p-6">
          <h3 className="text-lg font-medium">Survey not found</h3>
          <p className="text-sm text-muted-foreground mt-1">
            The survey you&apos;re looking for doesn&apos;t exist or has been deleted.
          </p>
        </CardContent>
      </Card>
    );
  }
  
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader className="pb-3">
          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
            <div>
              <CardTitle className="text-xl font-bold">{survey.title}</CardTitle>
              <CardDescription className="mt-1 text-muted-foreground">
                {survey.description}
              </CardDescription>
            </div>
            <div className="flex flex-wrap gap-2">
              <Button variant="outline" size="sm" className="h-8">
                <Share2 className="h-4 w-4 mr-2" />
                Share
              </Button>
              <Button variant="outline" size="sm" className="h-8">
                <Edit className="h-4 w-4 mr-2" />
                Edit
              </Button>
              <Dialog open={isDeleteDialogOpen} onOpenChange={setIsDeleteDialogOpen}>
                <DialogTrigger asChild>
                  <Button variant="destructive" size="sm" className="h-8">
                    <Trash2 className="h-4 w-4 mr-2" />
                    Delete
                  </Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Delete Survey</DialogTitle>
                    <DialogDescription>
                      Are you sure you want to delete this survey? This action cannot be undone and all responses will be permanently deleted.
                    </DialogDescription>
                  </DialogHeader>
                  <DialogFooter>
                    <Button variant="outline" onClick={() => setIsDeleteDialogOpen(false)}>Cancel</Button>
                    <Button variant="destructive" onClick={handleDeleteSurvey}>Delete Survey</Button>
                  </DialogFooter>
                </DialogContent>
              </Dialog>
            </div>
          </div>
        </CardHeader>
      </Card>
      
      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid grid-cols-4">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="questions">Questions</TabsTrigger>
          <TabsTrigger value="responses">Responses</TabsTrigger>
          <TabsTrigger value="settings">Settings</TabsTrigger>
        </TabsList>
        
        <TabsContent value="overview" className="space-y-4 pt-4">
          <SurveyOverview survey={survey} />
        </TabsContent>
        
        <TabsContent value="questions" className="space-y-4 pt-4">
          <SurveyQuestions survey={survey} />
        </TabsContent>
        
        <TabsContent value="responses" className="space-y-4 pt-4">
          <SurveyResponses survey={survey} />
        </TabsContent>
        
        <TabsContent value="settings" className="space-y-4 pt-4">
          <SurveySettings survey={survey} />
        </TabsContent>
      </Tabs>
    </div>
  );
}

function SurveyDetailSkeleton() {
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader className="pb-3">
          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
            <div className="space-y-2">
              <Skeleton className="h-8 w-[250px]" />
              <Skeleton className="h-4 w-[350px]" />
            </div>
            <div className="flex gap-2">
              <Skeleton className="h-8 w-[80px]" />
              <Skeleton className="h-8 w-[80px]" />
              <Skeleton className="h-8 w-[80px]" />
            </div>
          </div>
        </CardHeader>
      </Card>
      
      <div className="space-y-4">
        <Skeleton className="h-10 w-full" />
        <Card>
          <CardHeader>
            <Skeleton className="h-6 w-[150px]" />
          </CardHeader>
          <CardContent className="space-y-4">
            <Skeleton className="h-20 w-full" />
            <Skeleton className="h-20 w-full" />
            <Skeleton className="h-20 w-full" />
          </CardContent>
        </Card>
      </div>
    </div>
  );
} 