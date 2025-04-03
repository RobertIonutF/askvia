export function HowItWorks() {
  const steps = [
    {
      icon: (
        <svg className="w-14 h-14 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
      title: "Build Your Survey",
      description: "Use a simple drag-and-drop interface to add questions. Multiple choice, short answer, rating scales—just what you need."
    },
    {
      icon: (
        <svg className="w-14 h-14 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
        </svg>
      ),
      title: "Share the Link",
      description: "Get a unique link to your survey. Anyone can respond—no signup required."
    },
    {
      icon: (
        <svg className="w-14 h-14 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
        </svg>
      ),
      title: "Export the Data",
      description: "Download all responses as clean, structured CSV or JSON—perfect for reports, dashboards, or training datasets."
    }
  ];

  return (
    <section id="how-it-works" className="py-24 bg-gradient-to-b from-white to-gray-50 dark:from-gray-950 dark:to-gray-900 w-full">
      <div className="max-w-6xl mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">Simple Process</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">How It Works</h2>
          <p className="text-gray-600 dark:text-gray-300">Three simple steps to get insights from your audience</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 px-4">
          {steps.map((step, index) => (
            <div key={index} className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow border border-gray-100 dark:border-gray-700 relative group">
              <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-white dark:bg-gray-800 p-3 rounded-xl shadow-md border border-gray-100 dark:border-gray-700 group-hover:-translate-y-1 transition-transform">
                {step.icon}
              </div>
              <div className="pt-10 text-center">
                <h3 className="text-xl font-bold mb-4">{step.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {step.description}
                </p>
              </div>
              <div className="absolute top-1/2 -right-6 hidden md:block">
                {index < steps.length - 1 && (
                  <svg className="w-8 h-8 text-gray-300 dark:text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 