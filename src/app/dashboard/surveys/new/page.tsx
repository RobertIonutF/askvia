import { Metadata } from "next";
import { SurveyCreationForm } from "@/components/dashboard/surveys/creation/SurveyCreationForm";
import { Button } from "@/components/ui/button";
import { ChevronLeft } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Create Survey - Askvia",
  description: "Create a new survey to collect feedback and responses",
};

export default function CreateSurveyPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center gap-4">
        <Link href="/dashboard/surveys">
          <Button variant="outline" size="icon" className="h-8 w-8">
            <ChevronLeft className="h-4 w-4" />
          </Button>
        </Link>
        <h1 className="text-2xl font-bold">Create New Survey</h1>
      </div>
      
      <SurveyCreationForm />
    </div>
  );
} 