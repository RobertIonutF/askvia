"use client";

import { MobileHeader } from "./MobileHeader";
import { Sidebar } from "./Sidebar";

interface DashboardLayoutProps {
  children: React.ReactNode;
}

export function DashboardLayout({ children }: DashboardLayoutProps) {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <MobileHeader />
      <div className="flex">
        <Sidebar />
        <main className="flex-1 px-4 sm:px-6 md:px-8 py-6 md:ml-64">
          {children}
        </main>
      </div>
    </div>
  );
} 