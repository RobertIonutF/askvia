import { Settings } from "lucide-react";

export function SettingsHeader() {
  return (
    <div className="flex flex-col gap-1">
      <h1 className="text-2xl font-bold tracking-tight">
        <div className="flex items-center gap-2">
          <Settings className="h-6 w-6" />
          <span>Settings</span>
        </div>
      </h1>
      <p className="text-muted-foreground">
        Manage your account settings and preferences
      </p>
    </div>
  );
} 