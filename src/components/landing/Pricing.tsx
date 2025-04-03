export function Pricing() {
  return (
    <section id="pricing" className="py-24 bg-gradient-to-b from-white to-gray-50 dark:from-gray-950 dark:to-gray-900 w-full">
      <div className="max-w-6xl mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">Transparent Pricing</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">Simple Pricing</h2>
          <p className="text-gray-600 dark:text-gray-300">Choose the plan that works for your needs</p>
        </div>
        
        <div className="flex flex-col lg:flex-row gap-8 max-w-5xl mx-auto">
          {/* Free Plan */}
          <div className="flex-1 bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-xl border border-gray-100 dark:border-gray-700 relative">
            <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-600 rounded-t-2xl"></div>
            <div className="mb-8">
              <h3 className="text-2xl font-bold mb-2">Free</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">Perfect for small projects and testing</p>
            </div>
            
            <div className="mb-8">
              <span className="text-5xl font-bold">$0</span>
              <span className="text-gray-600 dark:text-gray-300 ml-2">forever</span>
            </div>
            
            <ul className="space-y-4 mb-10">
              <li className="flex items-start">
                <svg className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                </svg>
                <div>
                  <span className="font-medium">Unlimited surveys</span>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">Create as many surveys as you need</p>
                </div>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                </svg>
                <div>
                  <span className="font-medium">Up to 100 responses per survey</span>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">Collect feedback from up to 100 people</p>
                </div>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                </svg>
                <div>
                  <span className="font-medium">CSV export only</span>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">Download your data in CSV format</p>
                </div>
              </li>
            </ul>
            
            <button className="w-full bg-gray-100 hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600 py-3 rounded-xl font-medium transition-colors">
              Start for Free
            </button>
          </div>
          
          {/* Pro Plan */}
          <div className="flex-1 bg-gradient-to-br from-blue-600 to-blue-700 p-8 rounded-2xl shadow-xl text-white relative scale-[1.03] lg:scale-100 lg:translate-y-[-20px]">
            <div className="absolute -top-5 right-0 bg-yellow-400 text-black text-xs font-bold px-4 py-1 rounded-full shadow-lg">
              POPULAR
            </div>
            <div className="mb-8">
              <h3 className="text-2xl font-bold mb-2">Pro</h3>
              <p className="text-blue-100 text-sm">Advanced features for serious users</p>
            </div>
            
            <div className="mb-8">
              <span className="text-5xl font-bold">$9</span>
              <span className="text-blue-100 ml-2">/month</span>
            </div>
            
            <ul className="space-y-4 mb-10">
              <li className="flex items-start">
                <svg className="w-5 h-5 text-yellow-400 mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                </svg>
                <div>
                  <span className="font-medium">Unlimited responses</span>
                  <p className="text-sm text-blue-100 mt-1">No cap on the number of responses</p>
                </div>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-yellow-400 mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                </svg>
                <div>
                  <span className="font-medium">JSON + CSV export</span>
                  <p className="text-sm text-blue-100 mt-1">Export in multiple formats</p>
                </div>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-yellow-400 mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                </svg>
                <div>
                  <span className="font-medium">Analytics preview</span>
                  <p className="text-sm text-blue-100 mt-1">Visual reports of your survey data</p>
                </div>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-yellow-400 mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                </svg>
                <div>
                  <span className="font-medium">Custom branding</span>
                  <p className="text-sm text-blue-100 mt-1">Add your logo and customize colors</p>
                </div>
              </li>
            </ul>
            
            <button className="w-full bg-white text-blue-600 hover:bg-blue-50 py-3 rounded-xl font-medium transition-colors">
              Upgrade to Pro
            </button>
          </div>
        </div>
        
        <div className="mt-16 text-center">
          <p className="text-gray-600 dark:text-gray-300 mb-2">Need a custom plan for your enterprise?</p>
          <a href="#contact" className="text-blue-600 font-medium hover:underline">Contact us for custom pricing →</a>
        </div>
      </div>
    </section>
  );
} 