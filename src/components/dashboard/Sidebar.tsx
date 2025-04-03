"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { 
  LayoutDashboard, 
  BarChartHorizontal, 
  FileSpreadsheet, 
  Settings, 
  LogOut, 
  PlusCircle 
} from "lucide-react";

interface SidebarLinkProps {
  href: string;
  icon: React.ReactNode;
  label: string;
  active?: boolean;
}

function SidebarLink({ href, icon, label, active }: SidebarLinkProps) {
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

export function Sidebar() {
  const pathname = usePathname();
  
  const links = [
    {
      href: "/dashboard",
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
    <aside className="w-64 border-r border-gray-200 dark:border-gray-800 h-screen sticky top-0 overflow-y-auto py-6 hidden md:block">
      <div className="px-4 mb-6">
        <Link href="/dashboard" className="flex items-center">
          <span className="text-xl font-bold">Askvia</span>
        </Link>
      </div>
      
      <div className="px-3 mb-6">
        <Link href="/dashboard/surveys/new" className="flex items-center justify-center gap-2 w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg transition-colors">
          <PlusCircle size={18} />
          <span>New Survey</span>
        </Link>
      </div>
      
      <div className="space-y-1 px-3">
        {links.map((link) => (
          <SidebarLink
            key={link.href}
            href={link.href}
            icon={link.icon}
            label={link.label}
            active={
              link.href === "/dashboard" 
                ? pathname === "/dashboard" 
                : pathname === link.href || pathname.startsWith(link.href + "/")
            }
          />
        ))}
      </div>
      
      <div className="border-t border-gray-200 dark:border-gray-800 mt-6 pt-6 px-3">
        <SidebarLink
          href="/auth/logout"
          icon={<LogOut size={20} />}
          label="Log Out"
        />
      </div>
    </aside>
  );
} 