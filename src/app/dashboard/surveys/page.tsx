import { SurveyList } from "@/components/dashboard/surveys/SurveyList";
import { SurveyHeader } from "@/components/dashboard/surveys/SurveyHeader";
import { SurveyFilters } from "@/components/dashboard/surveys/SurveyFilters";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Surveys - Askvia",
  description: "Manage your surveys, view statistics and analyze responses",
};

export default function SurveysPage() {
  return (
    <div className="space-y-6">
      <SurveyHeader />
      <SurveyFilters />
      <SurveyList />
    </div>
  );
} 