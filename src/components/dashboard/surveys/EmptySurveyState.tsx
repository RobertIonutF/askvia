"use client";

import { FileQuestion } from "lucide-react";
import { Button } from "@/components/ui/button";

export function EmptySurveyState() {
  return (
    <div className="text-center py-12 px-4 border border-dashed rounded-lg bg-gray-50 dark:bg-gray-900/50">
      <div className="flex justify-center">
        <FileQuestion className="h-12 w-12 text-gray-400" />
      </div>
      <h3 className="mt-4 text-lg font-medium text-gray-900 dark:text-gray-100">No surveys yet</h3>
      <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
        Get started by creating your first survey to gather feedback.
      </p>
      <div className="mt-6">
        <Button>
          Create Your First Survey
        </Button>
      </div>
    </div>
  );
} 