"use client";

import { ArrowDown, ArrowUp } from "lucide-react";
import { Survey } from "./types";

interface SurveyTableHeaderProps {
  sortField: keyof Survey;
  sortDirection: "asc" | "desc";
  onSort: (field: keyof Survey) => void;
}

export function SurveyTableHeader({ 
  sortField, 
  sortDirection, 
  onSort 
}: SurveyTableHeaderProps) {
  const renderSortIcon = (field: keyof Survey) => {
    if (sortField !== field) return null;
    
    return sortDirection === "asc" 
      ? <ArrowUp className="h-4 w-4 ml-1" /> 
      : <ArrowDown className="h-4 w-4 ml-1" />;
  };
  
  const headerClass = "px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-800";
  
  return (
    <thead className="bg-gray-50 dark:bg-gray-900 border-b">
      <tr>
        <th 
          className={headerClass}
          onClick={() => onSort("title")}
        >
          <div className="flex items-center">
            Survey Name
            {renderSortIcon("title")}
          </div>
        </th>
        <th 
          className={headerClass}
          onClick={() => onSort("status")}
        >
          <div className="flex items-center">
            Status
            {renderSortIcon("status")}
          </div>
        </th>
        <th 
          className={headerClass}
          onClick={() => onSort("responseCount")}
        >
          <div className="flex items-center">
            Responses
            {renderSortIcon("responseCount")}
          </div>
        </th>
        <th 
          className={headerClass}
          onClick={() => onSort("updatedAt")}
        >
          <div className="flex items-center">
            Last Updated
            {renderSortIcon("updatedAt")}
          </div>
        </th>
        <th className="px-4 py-3">
          <span className="sr-only">Actions</span>
        </th>
      </tr>
    </thead>
  );
} 