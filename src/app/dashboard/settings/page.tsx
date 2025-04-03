import { Metadata } from "next";
import { SettingsDashboard } from "@/components/dashboard/settings/SettingsDashboard";

export const metadata: Metadata = {
  title: "Settings - Askvia",
  description: "Manage your account settings and preferences",
};

export default function SettingsPage() {
  return <SettingsDashboard />;
} 