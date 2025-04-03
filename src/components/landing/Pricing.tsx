export function Pricing() {
  return (
    <section id="pricing" className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Simple Pricing</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md">
            <h3 className="text-2xl font-bold mb-4">Free</h3>
            <p className="text-4xl font-bold mb-6">$0</p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✓</span>
                Unlimited surveys
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✓</span>
                Up to 100 responses per survey
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✓</span>
                CSV export only
              </li>
            </ul>
            <button className="w-full bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 py-3 rounded-lg font-medium transition-colors">
              Start for Free
            </button>
          </div>
          
          <div className="bg-blue-600 text-white p-8 rounded-lg shadow-md relative">
            <div className="absolute top-0 right-0 bg-yellow-400 text-black text-xs font-bold px-3 py-1 rounded-bl-lg rounded-tr-lg">
              POPULAR
            </div>
            <h3 className="text-2xl font-bold mb-4">Pro</h3>
            <p className="text-4xl font-bold mb-6">$9<span className="text-lg font-normal">/month</span></p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-center">
                <span className="text-yellow-400 mr-2">✓</span>
                Unlimited responses
              </li>
              <li className="flex items-center">
                <span className="text-yellow-400 mr-2">✓</span>
                JSON + CSV export
              </li>
              <li className="flex items-center">
                <span className="text-yellow-400 mr-2">✓</span>
                Analytics preview
              </li>
              <li className="flex items-center">
                <span className="text-yellow-400 mr-2">✓</span>
                Custom branding
              </li>
            </ul>
            <button className="w-full bg-white text-blue-600 hover:bg-gray-100 py-3 rounded-lg font-medium transition-colors">
              Upgrade to Pro
            </button>
          </div>
        </div>
      </div>
    </section>
  );
} 