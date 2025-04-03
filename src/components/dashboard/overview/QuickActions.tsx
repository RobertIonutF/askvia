import Link from "next/link";
import { Plus, FileUp, Copy } from "lucide-react";

const actions = [
  {
    title: "Create New Survey",
    description: "Build a custom survey from scratch",
    icon: <Plus className="h-5 w-5" />,
    href: "/dashboard/surveys/new",
    color: "bg-blue-600 hover:bg-blue-700 text-white"
  },
  {
    title: "Import Data",
    description: "Upload existing survey data",
    icon: <FileUp className="h-5 w-5" />,
    href: "/dashboard/data/import",
    color: "bg-gray-50 hover:bg-gray-100 text-gray-900 dark:bg-gray-800 dark:hover:bg-gray-700 dark:text-white border border-gray-200 dark:border-gray-700"
  },
  {
    title: "Use Template",
    description: "Start with a pre-built survey",
    icon: <Copy className="h-5 w-5" />,
    href: "/dashboard/templates",
    color: "bg-gray-50 hover:bg-gray-100 text-gray-900 dark:bg-gray-800 dark:hover:bg-gray-700 dark:text-white border border-gray-200 dark:border-gray-700"
  }
];

export function QuickActions() {
  return (
    <div className="space-y-4">
      <h3 className="font-semibold mb-4">Quick Actions</h3>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {actions.map((action, index) => (
          <Link 
            key={index}
            href={action.href}
            className={`${action.color} rounded-lg p-4 flex flex-col transition-shadow hover:shadow-md`}
          >
            <div className="flex items-center gap-3 mb-2">
              {action.icon}
              <span className="font-medium">{action.title}</span>
            </div>
            <p className="text-sm opacity-90">{action.description}</p>
          </Link>
        ))}
      </div>
    </div>
  );
} 