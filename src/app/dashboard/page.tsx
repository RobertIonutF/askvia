import { redirect } from "next/navigation";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dashboard - Askvia",
  description: "Access your surveys, responses, and account statistics",
};

export default function DashboardPage() {
  // Redirect to the overview page as this is the main dashboard entry point
  redirect("/dashboard/overview");
}
