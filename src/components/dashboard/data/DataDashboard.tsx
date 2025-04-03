"use client";

import { useState, useEffect } from "react";
import { Download, Search } from "lucide-react";

import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select";
import { DataTable } from "./DataTable";
import { DataHeader } from "./DataHeader";
import { DataEmpty } from "./DataEmpty";

// Shared Survey interface (same as in DataTable)
interface Survey {
  id: string;
  title: string;
  responseCount: number;
  lastUpdated: string;
}

// Sample data for development purposes
const SAMPLE_SURVEYS: Survey[] = [
  {
    id: "survey-1",
    title: "Customer Satisfaction Survey",
    responseCount: 125,
    lastUpdated: "2025-03-30T10:00:00Z"
  },
  {
    id: "survey-2",
    title: "Product Feedback Form",
    responseCount: 78,
    lastUpdated: "2025-04-01T14:30:00Z"
  },
  {
    id: "survey-3",
    title: "Website Usability Test",
    responseCount: 42,
    lastUpdated: "2025-04-02T09:15:00Z"
  }
];

export function DataDashboard() {
  const [searchQuery, setSearchQuery] = useState("");
  const [exportFormat, setExportFormat] = useState("csv");
  const [surveys, setSurveys] = useState<Survey[]>([]);
  const [loading, setLoading] = useState(true);

  // Simulate data fetching with useEffect
  useEffect(() => {
    const loadSurveys = async () => {
      // This would be an API call in a real application
      await new Promise(resolve => setTimeout(resolve, 1000));
      setSurveys(SAMPLE_SURVEYS);
      setLoading(false);
    };

    loadSurveys();
  }, []);

  // Filter surveys based on search query
  const filteredSurveys = surveys.filter(survey => 
    survey.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleExport = (format: string) => {
    // Would handle bulk export logic here
    console.log(`Exporting all data in ${format} format`);
  };

  return (
    <div className="space-y-6">
      <DataHeader />
      
      <div className="flex flex-col gap-4">
        <Card>
          <CardHeader>
            <CardTitle>Data Export</CardTitle>
            <CardDescription>
              Export your survey data in CSV or JSON format for analysis
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col md:flex-row gap-4 items-start md:items-center justify-between">
              <div className="relative w-full md:w-auto">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500 dark:text-gray-400" />
                <Input
                  type="search"
                  placeholder="Search surveys..."
                  className="pl-8 w-full md:w-[300px]"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              
              <div className="flex gap-2 w-full md:w-auto">
                <Select value={exportFormat} onValueChange={setExportFormat}>
                  <SelectTrigger className="w-full md:w-[180px]">
                    <SelectValue placeholder="Export format" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="csv">CSV</SelectItem>
                    <SelectItem value="json">JSON</SelectItem>
                  </SelectContent>
                </Select>
                
                <Button onClick={() => handleExport(exportFormat)}>
                  <Download className="h-4 w-4 mr-2" />
                  Export
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {loading ? (
          <div className="flex justify-center py-8">
            <div className="animate-spin h-8 w-8 border-4 border-blue-600 rounded-full border-t-transparent"></div>
          </div>
        ) : filteredSurveys.length > 0 ? (
          <DataTable surveys={filteredSurveys} />
        ) : (
          <DataEmpty />
        )}
      </div>
    </div>
  );
} 