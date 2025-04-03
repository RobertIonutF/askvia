"use client";

import { useState } from "react";
import { Save } from "lucide-react";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";

export function NotificationSettings() {
  const [isLoading, setIsLoading] = useState(false);
  const [emailNotifications, setEmailNotifications] = useState(true);
  const [surveyResponses, setSurveyResponses] = useState(true);
  const [marketingEmails, setMarketingEmails] = useState(false);
  const [securityAlerts, setSecurityAlerts] = useState(true);

  const handleSave = () => {
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      toast.success("Notification preferences updated");
      setIsLoading(false);
    }, 1000);
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Notification Preferences</CardTitle>
        <CardDescription>
          Choose what updates you want to receive
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label htmlFor="email-notifications">Email Notifications</Label>
              <p className="text-sm text-muted-foreground">
                Receive notifications via email
              </p>
            </div>
            <Switch
              id="email-notifications"
              checked={emailNotifications}
              onCheckedChange={setEmailNotifications}
            />
          </div>
          
          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label htmlFor="survey-responses">Survey Responses</Label>
              <p className="text-sm text-muted-foreground">
                Get notified when someone completes your survey
              </p>
            </div>
            <Switch
              id="survey-responses"
              checked={surveyResponses}
              onCheckedChange={setSurveyResponses}
              disabled={!emailNotifications}
            />
          </div>
          
          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label htmlFor="marketing-emails">Marketing Emails</Label>
              <p className="text-sm text-muted-foreground">
                Receive tips, product updates and news
              </p>
            </div>
            <Switch
              id="marketing-emails"
              checked={marketingEmails}
              onCheckedChange={setMarketingEmails}
              disabled={!emailNotifications}
            />
          </div>
          
          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label htmlFor="security-alerts">Security Alerts</Label>
              <p className="text-sm text-muted-foreground">
                Get important security notifications about your account
              </p>
            </div>
            <Switch
              id="security-alerts"
              checked={securityAlerts}
              onCheckedChange={setSecurityAlerts}
              disabled={!emailNotifications}
            />
          </div>
        </div>
        
        <Button onClick={handleSave} disabled={isLoading}>
          {isLoading ? (
            <>
              <span className="animate-spin h-4 w-4 mr-2 border-2 border-b-transparent rounded-full border-white"></span>
              Saving...
            </>
          ) : (
            <>
              <Save className="h-4 w-4 mr-2" />
              Save Preferences
            </>
          )}
        </Button>
      </CardContent>
    </Card>
  );
} 