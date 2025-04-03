"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Survey } from "../types";
import { 
  BarChart, 
  Calendar, 
  Users, 
  CheckSquare, 
  Clock, 
  Link as LinkIcon,
  ExternalLink,
  ClipboardCheck
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { format } from "date-fns";
import { toast } from "sonner";

interface SurveyOverviewProps {
  survey: Survey;
}

export function SurveyOverview({ survey }: SurveyOverviewProps) {
  const formatDate = (dateString: string) => {
    return format(new Date(dateString), "PPP");
  };
  
  const getStatusColor = (status: string) => {
    switch (status) {
      case "active":
        return "bg-green-500";
      case "draft":
        return "bg-yellow-500";
      case "completed":
        return "bg-blue-500";
      case "archived":
        return "bg-gray-500";
      default:
        return "bg-gray-500";
    }
  };
  
  const copyShareLink = () => {
    // In a real app, this would be a proper share URL
    navigator.clipboard.writeText(`https://askvia.com/s/${survey.id}`);
    toast.success("Share link copied to clipboard");
  };
  
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-sm font-medium">Survey Status</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col justify-between h-full">
            <div className="flex items-center mt-2">
              <div className={`h-3 w-3 rounded-full ${getStatusColor(survey.status)} mr-2`}></div>
              <span className="capitalize font-medium">{survey.status}</span>
            </div>
            {survey.status === "active" && (
              <div className="mt-4">
                <Button variant="outline" size="sm" className="w-full">
                  <CheckSquare className="h-4 w-4 mr-2" />
                  Complete Survey
                </Button>
              </div>
            )}
          </div>
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-sm font-medium">Response Rate</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-center gap-2">
            <Users className="h-4 w-4 text-muted-foreground" />
            <span className="text-2xl font-bold">{survey.responseCount}</span>
          </div>
          <p className="text-xs text-muted-foreground mt-1">
            {survey.settings?.responsesLimit 
              ? `${survey.responseCount} / ${survey.settings.responsesLimit} responses`
              : `${survey.responseCount} total responses`
            }
          </p>
          <div className="relative pt-4">
            <div className="h-2 w-full bg-muted rounded-full overflow-hidden">
              <div 
                className="h-full bg-primary rounded-full" 
                style={{ 
                  width: survey.settings?.responsesLimit 
                    ? `${Math.min(100, (survey.responseCount / survey.settings.responsesLimit) * 100)}%`
                    : "100%"
                }}
              ></div>
            </div>
          </div>
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-sm font-medium">Share Survey</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            <p className="text-xs text-muted-foreground">Copy the link to share this survey with respondents</p>
            <div className="flex gap-2">
              <Button variant="outline" size="sm" onClick={copyShareLink} className="flex-1">
                <LinkIcon className="h-4 w-4 mr-2" />
                Copy Link
              </Button>
              <Button variant="outline" size="sm">
                <ExternalLink className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-sm font-medium">Questions</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-center gap-2">
            <ClipboardCheck className="h-4 w-4 text-muted-foreground" />
            <span className="text-2xl font-bold">{survey.questions?.length || 0}</span>
          </div>
          <div className="flex items-center mt-2">
            <span className="text-xs text-muted-foreground">
              {survey.questions?.filter(q => q.required).length || 0} required questions
            </span>
          </div>
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-sm font-medium">Created</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-center gap-2">
            <Calendar className="h-4 w-4 text-muted-foreground" />
            <span className="font-medium">{formatDate(survey.createdAt)}</span>
          </div>
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-sm font-medium">Expiry Date</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-center gap-2">
            <Clock className="h-4 w-4 text-muted-foreground" />
            <span className="font-medium">
              {survey.settings?.expiresAt 
                ? format(new Date(survey.settings.expiresAt), "PPP") 
                : "No expiry date set"
              }
            </span>
          </div>
        </CardContent>
      </Card>
      
      <Card className="md:col-span-2 lg:col-span-3">
        <CardHeader className="pb-2">
          <CardTitle className="text-sm font-medium">Response Metrics</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-center h-[120px] justify-center">
            <div className="flex flex-col items-center text-muted-foreground">
              <BarChart className="h-8 w-8 mb-2" />
              <p>Detailed response metrics will be shown here</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
} 