export function HowItWorks() {
  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-3">Build Your Survey</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Use a simple drag-and-drop interface to add questions. Multiple choice, short answer, rating scales—just what you need.
            </p>
          </div>
          
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-3">Share the Link</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Get a unique link to your survey. Anyone can respond—no signup required.
            </p>
          </div>
          
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-3">Export the Data</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Download all responses as clean, structured CSV or JSON—perfect for reports, dashboards, or training datasets.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
} 