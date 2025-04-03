export function Hero() {
  return (
    <section className="py-20 md:py-28 overflow-hidden relative w-full">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500 opacity-10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500 opacity-10 rounded-full blur-3xl"></div>
      </div>

      <div className="container max-w-6xl mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="text-center lg:text-left max-w-2xl mx-auto lg:mx-0">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
              Create Surveys. Collect Responses. Export Data Instantly.
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-10 max-w-xl mx-auto lg:mx-0">
              Askvia is a minimalist survey builder that helps you turn questions into ready-to-use datasets. 
              No account needed for responders, and your data is always yours—downloadable in CSV or JSON.
            </p>
            <button className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-8 py-4 font-medium shadow-lg transition-all hover:scale-105 hover:shadow-xl">
              Create a Survey — Start in 30 seconds
            </button>
            <div className="mt-6 flex items-center justify-center lg:justify-start text-sm text-gray-500 dark:text-gray-400">
              <span className="flex items-center mr-4">
                <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                No credit card required
              </span>
              <span className="flex items-center">
                <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                Instant setup
              </span>
            </div>
          </div>
          <div className="w-full max-w-md mx-auto lg:mx-0">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
              <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-blue-500 to-purple-500"></div>
              <div className="p-6">
                <div className="mb-6">
                  <h3 className="text-lg font-semibold mb-2">Customer Satisfaction Survey</h3>
                  <p className="text-sm text-gray-500">Rate your experience with our product</p>
                </div>
                <div className="space-y-6">
                  <div className="space-y-2">
                    <label className="block font-medium text-sm">How would you rate your overall experience?</label>
                    <div className="flex justify-between">
                      {[1, 2, 3, 4, 5].map((num) => (
                        <button 
                          key={num} 
                          className={`w-10 h-10 rounded-full ${num === 5 ? 'bg-blue-500 text-white' : 'bg-gray-100 dark:bg-gray-700'} flex items-center justify-center font-medium`}
                        >
                          {num}
                        </button>
                      ))}
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="block font-medium text-sm">What did you like most about our product?</label>
                    <div className="h-20 border rounded-lg bg-gray-50 dark:bg-gray-900 border-gray-200 dark:border-gray-700"></div>
                  </div>
                  <button className="bg-blue-600 hover:bg-blue-700 w-full text-white rounded-lg px-4 py-2 text-sm font-medium">
                    Submit Response
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 