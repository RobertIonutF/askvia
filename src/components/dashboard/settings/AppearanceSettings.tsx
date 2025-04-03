"use client";

import { useTheme } from "next-themes";
import { Save, SunMoon, Moon, Sun } from "lucide-react";
import { useState } from "react";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import {
  RadioGroup,
  RadioGroupItem
} from "@/components/ui/radio-group";
import { toast } from "sonner";

export function AppearanceSettings() {
  const { theme, setTheme } = useTheme();
  const [isLoading, setIsLoading] = useState(false);
  const [selectedTheme, setSelectedTheme] = useState(theme || "system");

  const handleSave = () => {
    setIsLoading(true);
    
    // Apply the theme
    setTheme(selectedTheme);
    
    // Simulate API call to save preference
    setTimeout(() => {
      toast.success("Appearance settings updated");
      setIsLoading(false);
    }, 1000);
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Appearance</CardTitle>
        <CardDescription>
          Customize how Askvia looks on your device
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-2">
          <Label>Theme</Label>
          <RadioGroup 
            value={selectedTheme} 
            onValueChange={setSelectedTheme}
            className="grid grid-cols-3 gap-4 pt-2"
          >
            <div>
              <RadioGroupItem
                value="light"
                id="theme-light"
                className="sr-only"
              />
              <Label
                htmlFor="theme-light"
                className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground [&:has([data-state=checked])]:border-primary"
              >
                <Sun className="mb-3 h-6 w-6" />
                Light
              </Label>
            </div>
            
            <div>
              <RadioGroupItem
                value="dark"
                id="theme-dark"
                className="sr-only"
              />
              <Label
                htmlFor="theme-dark"
                className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground [&:has([data-state=checked])]:border-primary"
              >
                <Moon className="mb-3 h-6 w-6" />
                Dark
              </Label>
            </div>
            
            <div>
              <RadioGroupItem
                value="system"
                id="theme-system"
                className="sr-only"
              />
              <Label
                htmlFor="theme-system"
                className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground [&:has([data-state=checked])]:border-primary"
              >
                <SunMoon className="mb-3 h-6 w-6" />
                System
              </Label>
            </div>
          </RadioGroup>
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