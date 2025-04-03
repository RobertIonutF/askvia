"use client";

import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { SettingsHeader } from "./SettingsHeader";
import { AccountSettings } from "./AccountSettings";
import { NotificationSettings } from "./NotificationSettings";
import { AppearanceSettings } from "./AppearanceSettings";
import { BillingSettings } from "./BillingSettings";

export function SettingsDashboard() {
  const [activeTab, setActiveTab] = useState("account");
  
  return (
    <div className="space-y-6">
      <SettingsHeader />
      
      <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-4">
        <TabsList className="grid grid-cols-4 w-full max-w-md">
          <TabsTrigger value="account">Account</TabsTrigger>
          <TabsTrigger value="notifications">Notifications</TabsTrigger>
          <TabsTrigger value="appearance">Appearance</TabsTrigger>
          <TabsTrigger value="billing">Billing</TabsTrigger>
        </TabsList>
        
        <TabsContent value="account" className="space-y-4">
          <AccountSettings />
        </TabsContent>
        
        <TabsContent value="notifications" className="space-y-4">
          <NotificationSettings />
        </TabsContent>
        
        <TabsContent value="appearance" className="space-y-4">
          <AppearanceSettings />
        </TabsContent>
        
        <TabsContent value="billing" className="space-y-4">
          <BillingSettings />
        </TabsContent>
      </Tabs>
    </div>
  );
} 