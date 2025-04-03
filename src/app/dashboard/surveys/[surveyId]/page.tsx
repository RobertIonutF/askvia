import { Metadata } from "next";
import { SurveyDetail } from "@/components/dashboard/surveys/detail/SurveyDetail";
import { Button } from "@/components/ui/button";
import { ChevronLeft } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Survey Details - Askvia",
  description: "View and manage your survey details, responses, and settings",
};

interface SurveyDetailsPageProps {
  params: {
    surveyId: string;
  };
}

export default function SurveyDetailsPage({ params }: SurveyDetailsPageProps) {
  return (
    <div className="space-y-6">
      <div className="flex items-center gap-4">
        <Link href="/dashboard/surveys">
          <Button variant="outline" size="icon" className="h-8 w-8">
            <ChevronLeft className="h-4 w-4" />
          </Button>
        </Link>
        <h1 className="text-2xl font-bold">Survey Details</h1>
      </div>
      
      <SurveyDetail surveyId={params.surveyId} />
    </div>
  );
} 