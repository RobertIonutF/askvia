"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Survey } from "../types";
import { 
  Download, 
  FilterX, 
  MoreHorizontal, 
  Search, 
  SlidersHorizontal 
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useState } from "react";
import { format } from "date-fns";

interface SurveyResponsesProps {
  survey: Survey;
}

// Mock data for responses
const mockResponses = [
  {
    id: "resp1",
    submittedAt: "2023-07-01T14:30:00Z",
    email: "john.doe@example.com",
    answers: [
      { questionId: "q1", answer: "Very satisfied" },
      { questionId: "q2", answer: "8" },
      { questionId: "q3", answer: "The customer service team was very helpful!" }
    ]
  },
  {
    id: "resp2",
    submittedAt: "2023-07-02T09:15:00Z",
    email: "emily.smith@example.com",
    answers: [
      { questionId: "q1", answer: "Satisfied" },
      { questionId: "q2", answer: "7" },
      { questionId: "q3", answer: "Would like to see more features in the product." }
    ]
  },
  {
    id: "resp3",
    submittedAt: "2023-07-03T18:45:00Z",
    email: "michael.brown@example.com",
    answers: [
      { questionId: "q1", answer: "Neutral" },
      { questionId: "q2", answer: "5" },
      { questionId: "q3", answer: "Product meets basic needs but could be improved." }
    ]
  },
  {
    id: "resp4",
    submittedAt: "2023-07-04T11:20:00Z",
    email: "sarah.wilson@example.com",
    answers: [
      { questionId: "q1", answer: "Very satisfied" },
      { questionId: "q2", answer: "9" },
      { questionId: "q3", answer: "Very intuitive interface, easy to use!" }
    ]
  },
  {
    id: "resp5",
    submittedAt: "2023-07-05T15:10:00Z",
    email: "robert.johnson@example.com",
    answers: [
      { questionId: "q1", answer: "Dissatisfied" },
      { questionId: "q2", answer: "3" },
      { questionId: "q3", answer: "Had several issues with the product." }
    ]
  }
];

export function SurveyResponses({ survey }: SurveyResponsesProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [responses] = useState(mockResponses);
  
  const formatDate = (dateString: string) => {
    return format(new Date(dateString), "PPP 'at' p");
  };
  
  const getResponseAnswer = (responseId: string, questionId: string) => {
    const response = responses.find(r => r.id === responseId);
    if (!response) return "";
    
    const answer = response.answers.find(a => a.questionId === questionId);
    return answer ? answer.answer : "";
  };
  
  return (
    <div className="space-y-4">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div className="space-y-1">
          <h2 className="text-lg font-medium">Survey Responses</h2>
          <p className="text-sm text-muted-foreground">
            View and analyze responses to your survey.
          </p>
        </div>
        <div className="flex flex-wrap gap-2">
          <Button variant="outline" size="sm">
            <Download className="h-4 w-4 mr-2" />
            Export
          </Button>
          <Button variant="outline" size="sm">
            <SlidersHorizontal className="h-4 w-4 mr-2" />
            Filter
          </Button>
        </div>
      </div>
      
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Search responses..."
            className="pl-8"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        {searchQuery && (
          <Button variant="ghost" size="sm" onClick={() => setSearchQuery("")}>
            <FilterX className="h-4 w-4 mr-2" />
            Clear
          </Button>
        )}
      </div>
      
      <Card>
        <CardContent className="p-0">
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[180px]">Date Submitted</TableHead>
                  <TableHead>Email</TableHead>
                  {survey.questions?.slice(0, 2).map((question) => (
                    <TableHead key={question.id}>{question.title}</TableHead>
                  ))}
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {responses.map((response) => (
                  <TableRow key={response.id}>
                    <TableCell className="font-medium">{formatDate(response.submittedAt)}</TableCell>
                    <TableCell>{response.email}</TableCell>
                    {survey.questions?.slice(0, 2).map((question) => (
                      <TableCell key={question.id}>
                        {getResponseAnswer(response.id, question.id)}
                      </TableCell>
                    ))}
                    <TableCell className="text-right">
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" size="icon">
                            <MoreHorizontal className="h-4 w-4" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuLabel>Actions</DropdownMenuLabel>
                          <DropdownMenuSeparator />
                          <DropdownMenuItem>View Details</DropdownMenuItem>
                          <DropdownMenuItem>Download</DropdownMenuItem>
                          <DropdownMenuItem className="text-destructive">Delete</DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
          
          {responses.length === 0 && (
            <div className="flex flex-col items-center justify-center p-6">
              <p className="text-center text-muted-foreground">
                No responses have been received for this survey yet.
              </p>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
} 