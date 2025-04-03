"use client";

import Link from "next/link";
import { Menu, X, LayoutDashboard, BarChartHorizontal, FileSpreadsheet, Settings, LogOut, PlusCircle } from "lucide-react";
import { useState } from "react";
import { ModeToggle } from "@/components/ui/mode-toggle";
import { usePathname } from "next/navigation";

function SidebarLink({ href, icon, label, active }: {
  href: string;
  icon: React.ReactNode;
  label: string;
  active?: boolean;
}) {
  return (
    <Link
      href={href}
      className={`flex items-center gap-3 px-3 py-2 rounded-md transition-colors ${
        active 
          ? "bg-blue-50 text-blue-600 dark:bg-blue-900/20 dark:text-blue-400" 
          : "text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800"
      }`}
    >
      {icon}
      <span>{label}</span>
    </Link>
  );
}

export function MobileHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  
  const links = [
    {
      href: "/dashboard/overview",
      icon: <LayoutDashboard size={20} />,
      label: "Overview"
    },
    {
      href: "/dashboard/surveys",
      icon: <BarChartHorizontal size={20} />,
      label: "Surveys"
    },
    {
      href: "/dashboard/data",
      icon: <FileSpreadsheet size={20} />,
      label: "Data"
    },
    {
      href: "/dashboard/settings",
      icon: <Settings size={20} />,
      label: "Settings"
    }
  ];

  return (
    <>
      <header className="md:hidden sticky top-0 z-50 w-full border-b bg-white dark:bg-gray-950 dark:border-gray-800">
        <div className="flex h-14 items-center justify-between px-4">
          <Link href="/dashboard/overview" className="flex items-center">
            <span className="text-lg font-bold">Askvia</span>
          </Link>
          <div className="flex items-center gap-4">
            <ModeToggle />
            <button 
              onClick={() => setIsMenuOpen(true)}
              className="p-2 text-gray-700 dark:text-gray-300"
            >
              <Menu className="h-5 w-5" />
              <span className="sr-only">Open menu</span>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Sidebar Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-black/50 z-50 md:hidden" onClick={() => setIsMenuOpen(false)}>
          <div 
            className="absolute right-0 top-0 h-full w-64 bg-white dark:bg-gray-950 shadow-xl overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center h-14 px-4 border-b dark:border-gray-800">
              <span className="font-semibold">Menu</span>
              <button 
                onClick={() => setIsMenuOpen(false)}
                className="p-2 text-gray-700 dark:text-gray-300"
              >
                <X className="h-5 w-5" />
                <span className="sr-only">Close menu</span>
              </button>
            </div>
            <div className="p-4">
              <div className="mb-6">
                <button className="flex items-center justify-center gap-2 w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg transition-colors">
                  <PlusCircle size={18} />
                  <span>New Survey</span>
                </button>
              </div>
              
              <div className="space-y-1">
                {links.map((link) => (
                  <SidebarLink
                    key={link.href}
                    href={link.href}
                    icon={link.icon}
                    label={link.label}
                    active={pathname === link.href}
                  />
                ))}
              </div>
              
              <div className="border-t border-gray-200 dark:border-gray-800 mt-6 pt-6">
                <SidebarLink
                  href="/logout"
                  icon={<LogOut size={20} />}
                  label="Log Out"
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
} 