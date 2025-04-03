"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Survey } from "../types";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { CalendarIcon, Save } from "lucide-react";
import { Calendar } from "@/components/ui/calendar";
import { format } from "date-fns";
import { cn } from "@/lib/utils";
import { toast } from "sonner";
import { useState } from "react";

interface SurveySettingsProps {
  survey: Survey;
}

export function SurveySettings({ survey }: SurveySettingsProps) {
  const [settings, setSettings] = useState({
    isPublic: survey.settings?.isPublic ?? true,
    collectEmail: survey.settings?.collectEmail ?? false,
    allowAnonymous: survey.settings?.allowAnonymous ?? true,
    responsesLimit: survey.settings?.responsesLimit?.toString() || "",
    expiresAt: survey.settings?.expiresAt || undefined,
  });
  
  const handleSwitchChange = (field: string) => (checked: boolean) => {
    setSettings({
      ...settings,
      [field]: checked,
    });
  };
  
  const handleLimitChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSettings({
      ...settings,
      responsesLimit: e.target.value,
    });
  };
  
  const handleExpiryDateChange = (date: Date | undefined) => {
    setSettings({
      ...settings,
      expiresAt: date,
    });
  };
  
  const saveSettings = () => {
    // Here you would typically save the settings to your backend
    console.log("Saving settings:", settings);
    toast.success("Survey settings saved successfully");
  };
  
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-lg font-medium">Survey Settings</h2>
        <Button onClick={saveSettings}>
          <Save className="h-4 w-4 mr-2" />
          Save Settings
        </Button>
      </div>
      
      <Card>
        <CardHeader>
          <CardTitle>Privacy & Visibility</CardTitle>
          <CardDescription>
            Configure who can access your survey and how responses are collected.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="flex flex-row items-center justify-between rounded-lg border p-4">
            <div className="space-y-0.5">
              <Label className="text-base">Public Survey</Label>
              <p className="text-sm text-muted-foreground">
                Make this survey available to anyone with the link.
              </p>
            </div>
            <Switch 
              checked={settings.isPublic}
              onCheckedChange={handleSwitchChange("isPublic")}
            />
          </div>
          
          <div className="flex flex-row items-center justify-between rounded-lg border p-4">
            <div className="space-y-0.5">
              <Label className="text-base">Collect Email Addresses</Label>
              <p className="text-sm text-muted-foreground">
                Request respondents to provide their email address.
              </p>
            </div>
            <Switch 
              checked={settings.collectEmail}
              onCheckedChange={handleSwitchChange("collectEmail")}
            />
          </div>
          
          <div className="flex flex-row items-center justify-between rounded-lg border p-4">
            <div className="space-y-0.5">
              <Label className="text-base">Allow Anonymous Responses</Label>
              <p className="text-sm text-muted-foreground">
                Allow responses without requiring identification.
              </p>
            </div>
            <Switch 
              checked={settings.allowAnonymous}
              onCheckedChange={handleSwitchChange("allowAnonymous")}
            />
          </div>
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader>
          <CardTitle>Response Limits</CardTitle>
          <CardDescription>
            Set limits on how many responses can be collected and when the survey expires.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="flex flex-row items-center justify-between rounded-lg border p-4">
            <div className="space-y-0.5">
              <Label className="text-base" htmlFor="responses-limit">Response Limit</Label>
              <p className="text-sm text-muted-foreground">
                Maximum number of responses to collect (leave empty for unlimited).
              </p>
            </div>
            <Input
              id="responses-limit"
              type="number"
              className="w-24"
              value={settings.responsesLimit}
              onChange={handleLimitChange}
              min={0}
            />
          </div>
          
          <div className="flex flex-row items-center justify-between rounded-lg border p-4">
            <div className="space-y-0.5">
              <Label className="text-base">Expiry Date</Label>
              <p className="text-sm text-muted-foreground">
                Set a date when the survey will no longer accept responses.
              </p>
            </div>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant={"outline"}
                  className={cn(
                    "w-[240px] pl-3 text-left font-normal",
                    !settings.expiresAt && "text-muted-foreground"
                  )}
                >
                  {settings.expiresAt ? (
                    format(settings.expiresAt, "PPP")
                  ) : (
                    "Pick a date"
                  )}
                  <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0" align="end">
                <Calendar
                  mode="single"
                  selected={settings.expiresAt}
                  onSelect={handleExpiryDateChange}
                  disabled={(date) =>
                    date < new Date(new Date().setHours(0, 0, 0, 0))
                  }
                  initialFocus
                />
              </PopoverContent>
            </Popover>
          </div>
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader>
          <CardTitle>Danger Zone</CardTitle>
          <CardDescription>
            Irreversible actions that affect your survey.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-row items-center justify-between rounded-lg border border-destructive p-4">
            <div className="space-y-0.5">
              <Label className="text-base text-destructive">Delete Survey</Label>
              <p className="text-sm text-muted-foreground">
                Permanently delete this survey and all its responses.
              </p>
            </div>
            <Button variant="destructive">Delete Survey</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
} 