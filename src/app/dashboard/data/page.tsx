import { Metadata } from "next";
import { DataDashboard } from "@/components/dashboard/data/DataDashboard";

export const metadata: Metadata = {
  title: "Data Export - Askvia",
  description: "View and export your survey data in CSV or JSON format",
};

export default function DataPage() {
  return <DataDashboard />;
} 