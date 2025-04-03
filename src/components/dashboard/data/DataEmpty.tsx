import { FileSpreadsheet, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function DataEmpty() {
  return (
    <div className="flex flex-col items-center justify-center py-12 px-4 border rounded-lg bg-gray-50 dark:bg-gray-900">
      <div className="flex h-20 w-20 items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900/20 mb-4">
        <FileSpreadsheet className="h-10 w-10 text-blue-600 dark:text-blue-400" />
      </div>
      <h3 className="text-lg font-semibold mb-1">No survey data available</h3>
      <p className="text-muted-foreground text-center max-w-md mb-6">
        You haven&apos;t created any surveys yet, or your surveys have no responses. Create your first survey to start collecting data.
      </p>
      <Link href="/dashboard/surveys/new">
        <Button>
          <Plus className="mr-2 h-4 w-4" />
          Create New Survey
        </Button>
      </Link>
    </div>
  );
} 