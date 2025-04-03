import { StatsCard } from "@/components/dashboard/stats/StatsCard";
import { RecentSurveys } from "@/components/dashboard/recent/RecentSurveys";
import { QuickActions } from "@/components/dashboard/overview/QuickActions";
import { BarChartHorizontal, Users, FileText, ArrowUpRight } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dashboard Overview - Askvia",
  description: "View your surveys, responses, and account statistics",
};

export default function DashboardOverview() {
  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Dashboard Overview</h1>
        <div className="text-sm text-gray-500 dark:text-gray-400">
          Last updated: {new Date().toLocaleDateString()}
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <StatsCard 
          title="Total Surveys" 
          value={12} 
          icon={BarChartHorizontal}
          trend={{ value: 8.2, isPositive: true }}
        />
        <StatsCard 
          title="Total Responses" 
          value={256} 
          icon={Users}
          trend={{ value: 12.6, isPositive: true }}
        />
        <StatsCard 
          title="Data Exports" 
          value={5} 
          icon={FileText}
          trend={{ value: 2.1, isPositive: false }}
        />
      </div>
      
      <QuickActions />
      
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
        <div className="xl:col-span-3">
          <RecentSurveys />
        </div>
      </div>
      
      <div className="rounded-lg bg-blue-50 dark:bg-blue-900/20 p-4 border border-blue-100 dark:border-blue-800">
        <div className="flex items-start">
          <div className="flex-1">
            <h3 className="font-semibold text-blue-800 dark:text-blue-300">Pro Tip</h3>
            <p className="text-sm text-blue-700 dark:text-blue-400 mt-1">
              You can organize your surveys into folders to keep them organized. Try creating a folder for each project or research area.
            </p>
          </div>
          <a href="/dashboard/help" className="flex items-center text-sm font-medium text-blue-700 dark:text-blue-300 hover:underline">
            Learn more
            <ArrowUpRight className="ml-1 h-3 w-3" />
          </a>
        </div>
      </div>
    </div>
  );
} 