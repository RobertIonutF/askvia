export function Hero() {
  return (
    <section className="py-20 flex flex-col items-center text-center max-w-4xl mx-auto px-4">
      <h1 className="text-4xl md:text-5xl font-bold mb-6">
        Create Surveys. Collect Responses. Export Data Instantly.
      </h1>
      <p className="text-lg text-gray-600 dark:text-gray-300 mb-10 max-w-2xl">
        Askvia is a minimalist survey builder that helps you turn questions into ready-to-use datasets. 
        No account needed for responders, and your data is always yours—downloadable in CSV or JSON.
      </p>
      <button 
        className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-8 py-4 font-medium shadow-lg transition-colors"
      >
        Create a Survey — Start in 30 seconds
      </button>
    </section>
  );
} 