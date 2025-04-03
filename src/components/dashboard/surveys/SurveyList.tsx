"use client";

import { useState } from "react";
import { SurveyItem } from "./SurveyItem";
import { EmptySurveyState } from "./EmptySurveyState";
import { SurveyTableHeader } from "./SurveyTableHeader";
import { Survey } from "./types";

export function SurveyList() {
  const [sortField, setSortField] = useState<keyof Survey>("updatedAt");
  const [sortDirection, setSortDirection] = useState<"asc" | "desc">("desc");
  
  // Mock data - in a real app this would come from an API
  const mockSurveys: Survey[] = [
    {
      id: "1",
      title: "Customer Satisfaction Survey",
      status: "active",
      responseCount: 128,
      createdAt: "2023-10-15",
      updatedAt: "2023-10-28"
    },
    {
      id: "2",
      title: "Product Feedback",
      status: "draft",
      responseCount: 0,
      createdAt: "2023-11-02",
      updatedAt: "2023-11-02"
    },
    {
      id: "3",
      title: "Employee Engagement",
      status: "completed",
      responseCount: 42,
      createdAt: "2023-09-10",
      updatedAt: "2023-10-01"
    },
    {
      id: "4",
      title: "Market Research 2023",
      status: "archived",
      responseCount: 215,
      createdAt: "2023-05-22",
      updatedAt: "2023-06-30"
    }
  ];
  
  const handleSort = (field: keyof Survey) => {
    if (sortField === field) {
      setSortDirection(sortDirection === "asc" ? "desc" : "asc");
    } else {
      setSortField(field);
      setSortDirection("asc");
    }
  };
  
  // Sort the surveys based on the current sort field and direction
  const sortedSurveys = [...mockSurveys].sort((a, b) => {
    if (sortField === "responseCount") {
      return sortDirection === "asc" 
        ? a.responseCount - b.responseCount 
        : b.responseCount - a.responseCount;
    }
    
    if (a[sortField] < b[sortField]) return sortDirection === "asc" ? -1 : 1;
    if (a[sortField] > b[sortField]) return sortDirection === "asc" ? 1 : -1;
    return 0;
  });

  if (sortedSurveys.length === 0) {
    return <EmptySurveyState />;
  }

  return (
    <div className="border rounded-lg overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full">
          <SurveyTableHeader 
            sortField={sortField}
            sortDirection={sortDirection}
            onSort={handleSort}
          />
          <tbody className="divide-y">
            {sortedSurveys.map(survey => (
              <SurveyItem key={survey.id} survey={survey} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
} 