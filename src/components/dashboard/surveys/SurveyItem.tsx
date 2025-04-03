"use client";

import { formatDistanceToNow } from "date-fns";
import { 
  MoreHorizontal, 
  Edit, 
  Copy, 
  BarChart, 
  Trash,
  Eye
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Survey } from "./types";
import Link from "next/link";

interface SurveyItemProps {
  survey: Survey;
}

export function SurveyItem({ survey }: SurveyItemProps) {
  const getStatusBadge = (status: Survey["status"]) => {
    switch (status) {
      case "active":
        return <Badge className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300">Active</Badge>;
      case "draft":
        return <Badge className="bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300">Draft</Badge>;
      case "completed":
        return <Badge className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300">Completed</Badge>;
      case "archived":
        return <Badge className="bg-amber-100 text-amber-800 dark:bg-amber-900 dark:text-amber-300">Archived</Badge>;
      default:
        return null;
    }
  };

  return (
    <tr className="bg-white dark:bg-gray-950 hover:bg-gray-50 dark:hover:bg-gray-900/50">
      <td className="px-4 py-3">
        <Link href={`/dashboard/surveys/${survey.id}`} className="hover:underline">
          <div className="font-medium text-gray-900 dark:text-gray-100">{survey.title}</div>
          <div className="text-sm text-gray-500 dark:text-gray-400">Created {formatDistanceToNow(new Date(survey.createdAt))} ago</div>
        </Link>
      </td>
      <td className="px-4 py-3">
        {getStatusBadge(survey.status)}
      </td>
      <td className="px-4 py-3">
        <div className="text-sm">{survey.responseCount}</div>
      </td>
      <td className="px-4 py-3">
        <div className="text-sm">{formatDistanceToNow(new Date(survey.updatedAt))} ago</div>
      </td>
      <td className="px-4 py-3 text-right">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button size="icon" variant="ghost">
              <MoreHorizontal className="h-4 w-4" />
              <span className="sr-only">Open menu</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <Link href={`/dashboard/surveys/${survey.id}`} className="w-full">
              <DropdownMenuItem className="flex items-center cursor-pointer">
                <Eye className="mr-2 h-4 w-4" />
                <span>View</span>
              </DropdownMenuItem>
            </Link>
            <DropdownMenuItem className="flex items-center cursor-pointer">
              <Edit className="mr-2 h-4 w-4" />
              <span>Edit</span>
            </DropdownMenuItem>
            <DropdownMenuItem className="flex items-center cursor-pointer">
              <BarChart className="mr-2 h-4 w-4" />
              <span>Results</span>
            </DropdownMenuItem>
            <DropdownMenuItem className="flex items-center cursor-pointer">
              <Copy className="mr-2 h-4 w-4" />
              <span>Duplicate</span>
            </DropdownMenuItem>
            <DropdownMenuItem className="flex items-center cursor-pointer text-red-600 dark:text-red-400">
              <Trash className="mr-2 h-4 w-4" />
              <span>Delete</span>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </td>
    </tr>
  );
} 