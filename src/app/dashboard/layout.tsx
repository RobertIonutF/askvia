import { DashboardLayout } from "@/components/dashboard/DashboardLayout";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dashboard - Askvia",
  description: "Manage your surveys and analyze data with Askvia dashboard",
};

export default function DashboardRootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <DashboardLayout>{children}</DashboardLayout>;
} 