"use client";

import { 
  FileJson, 
  FileSpreadsheet, 
  MoreHorizontal 
} from "lucide-react";

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
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface Survey {
  id: string;
  title: string;
  responseCount: number;
  lastUpdated: string;
}

interface DataTableProps {
  surveys: Survey[];
}

export function DataTable({ surveys }: DataTableProps) {
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  const handleExport = (surveyId: string, format: string) => {
    console.log(`Exporting survey ${surveyId} in ${format} format`);
    // Actual export logic would go here
  };

  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Survey</TableHead>
            <TableHead className="text-center">Responses</TableHead>
            <TableHead>Last Updated</TableHead>
            <TableHead className="text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {surveys.map((survey) => (
            <TableRow key={survey.id}>
              <TableCell className="font-medium">{survey.title}</TableCell>
              <TableCell className="text-center">
                {survey.responseCount > 0 ? (
                  <Badge variant="outline">{survey.responseCount}</Badge>
                ) : (
                  <Badge variant="outline" className="text-gray-500">0</Badge>
                )}
              </TableCell>
              <TableCell>{formatDate(survey.lastUpdated)}</TableCell>
              <TableCell className="text-right">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="sm">
                      <MoreHorizontal className="h-4 w-4" />
                      <span className="sr-only">Open menu</span>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem onClick={() => handleExport(survey.id, 'csv')}>
                      <FileSpreadsheet className="mr-2 h-4 w-4" />
                      <span>Export as CSV</span>
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => handleExport(survey.id, 'json')}>
                      <FileJson className="mr-2 h-4 w-4" />
                      <span>Export as JSON</span>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
} 