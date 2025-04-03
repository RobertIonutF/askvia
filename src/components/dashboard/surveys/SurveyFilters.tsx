"use client";

import { useState } from "react";
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue 
} from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { X } from "lucide-react";

type FilterType = "status" | "date" | "responses";
type FilterValue = string;

interface ActiveFilter {
  type: FilterType;
  value: FilterValue;
}

export function SurveyFilters() {
  const [activeFilters, setActiveFilters] = useState<ActiveFilter[]>([]);

  const addFilter = (type: FilterType, value: FilterValue) => {
    if (!activeFilters.some(filter => filter.type === type && filter.value === value)) {
      setActiveFilters([...activeFilters, { type, value }]);
    }
  };

  const removeFilter = (type: FilterType, value: FilterValue) => {
    setActiveFilters(activeFilters.filter(
      filter => !(filter.type === type && filter.value === value)
    ));
  };

  const getFilterLabel = (filter: ActiveFilter) => {
    const { type, value } = filter;
    switch (type) {
      case "status":
        return `Status: ${value}`;
      case "date":
        return `Date: ${value}`;
      case "responses":
        return `Responses: ${value}`;
      default:
        return `${type}: ${value}`;
    }
  };

  return (
    <div className="space-y-3">
      <div className="flex flex-wrap gap-3">
        <Select onValueChange={(value) => addFilter("status", value)}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Filter by status" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="active">Active</SelectItem>
            <SelectItem value="draft">Draft</SelectItem>
            <SelectItem value="completed">Completed</SelectItem>
            <SelectItem value="archived">Archived</SelectItem>
          </SelectContent>
        </Select>

        <Select onValueChange={(value) => addFilter("date", value)}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Filter by date" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="last-7-days">Last 7 days</SelectItem>
            <SelectItem value="last-30-days">Last 30 days</SelectItem>
            <SelectItem value="last-90-days">Last 90 days</SelectItem>
            <SelectItem value="this-year">This year</SelectItem>
          </SelectContent>
        </Select>

        <Select onValueChange={(value) => addFilter("responses", value)}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Filter by responses" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="no-responses">No responses</SelectItem>
            <SelectItem value="1-10">1-10 responses</SelectItem>
            <SelectItem value="11-50">11-50 responses</SelectItem>
            <SelectItem value="50+">50+ responses</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {activeFilters.length > 0 && (
        <div className="flex flex-wrap gap-2 mt-3">
          {activeFilters.map((filter, index) => (
            <Badge 
              key={index} 
              variant="secondary"
              className="flex items-center gap-1 px-2 py-1"
            >
              {getFilterLabel(filter)}
              <X 
                className="h-3 w-3 cursor-pointer" 
                onClick={() => removeFilter(filter.type, filter.value)} 
              />
            </Badge>
          ))}
        </div>
      )}
    </div>
  );
} 