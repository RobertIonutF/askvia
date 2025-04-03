import Link from "next/link";

// This would be fetched from the API in a real app
const recentSurveys = [
  {
    id: "1",
    title: "Customer Satisfaction Survey",
    created: "2023-04-02",
    responses: 87,
    status: "Active"
  },
  {
    id: "2",
    title: "Product Feedback Form",
    created: "2023-03-28",
    responses: 45,
    status: "Active"
  },
  {
    id: "3",
    title: "Website User Experience",
    created: "2023-03-25",
    responses: 129,
    status: "Closed"
  },
  {
    id: "4",
    title: "Employee Satisfaction",
    created: "2023-03-15",
    responses: 32,
    status: "Draft"
  }
];

export function RecentSurveys() {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700 overflow-hidden">
      <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100 dark:border-gray-700">
        <h3 className="font-semibold">Recent Surveys</h3>
        <Link 
          href="/dashboard/surveys" 
          className="text-sm text-blue-600 dark:text-blue-400 hover:underline"
        >
          View all
        </Link>
      </div>
      
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gray-50 dark:bg-gray-900/50 text-xs uppercase">
            <tr>
              <th className="px-6 py-3 text-left font-medium text-gray-500 dark:text-gray-400 tracking-wider">Title</th>
              <th className="px-6 py-3 text-left font-medium text-gray-500 dark:text-gray-400 tracking-wider">Created</th>
              <th className="px-6 py-3 text-left font-medium text-gray-500 dark:text-gray-400 tracking-wider">Responses</th>
              <th className="px-6 py-3 text-left font-medium text-gray-500 dark:text-gray-400 tracking-wider">Status</th>
              <th className="px-6 py-3 text-right font-medium text-gray-500 dark:text-gray-400 tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100 dark:divide-gray-700">
            {recentSurveys.map((survey) => (
              <tr key={survey.id} className="hover:bg-gray-50 dark:hover:bg-gray-900/20">
                <td className="px-6 py-4 text-sm font-medium">{survey.title}</td>
                <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-300">{survey.created}</td>
                <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-300">{survey.responses}</td>
                <td className="px-6 py-4 text-sm">
                  <span className={`px-2 py-1 text-xs rounded-full ${
                    survey.status === 'Active' 
                      ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400' 
                      : survey.status === 'Closed'
                      ? 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300'
                      : 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400'
                  }`}>
                    {survey.status}
                  </span>
                </td>
                <td className="px-6 py-4 text-sm text-right">
                  <Link 
                    href={`/dashboard/surveys/${survey.id}`} 
                    className="text-blue-600 dark:text-blue-400 hover:underline"
                  >
                    View
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
} 