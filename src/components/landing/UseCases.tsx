export function UseCases() {
  const useCases = [
    {
      emoji: "👩‍🏫",
      title: "Teachers",
      description: "Collecting quiz responses and gauging student understanding"
    },
    {
      emoji: "📊",
      title: "Researchers",
      description: "Building datasets for academic studies and analysis"
    },
    {
      emoji: "🧑‍💻",
      title: "Developers",
      description: "Gathering data to train machine learning models"
    },
    {
      emoji: "🧠",
      title: "Marketers",
      description: "Running quick polls to understand customer preferences"
    },
    {
      emoji: "👥",
      title: "Founders",
      description: "Validating product ideas and gathering early feedback"
    }
  ];

  return (
    <section id="use-cases" className="py-24 w-full">
      <div className="max-w-6xl mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">For Everyone</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">Perfect For</h2>
          <p className="text-gray-600 dark:text-gray-300">Designed to serve professionals from various fields</p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {useCases.map((useCase, index) => (
            <div 
              key={index} 
              className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 border border-gray-100 dark:border-gray-700 flex flex-col items-center text-center"
            >
              <div className="text-4xl mb-4 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-full">{useCase.emoji}</div>
              <h3 className="text-lg font-bold mb-2">{useCase.title}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                {useCase.description}
              </p>
            </div>
          ))}
        </div>
        
        <div className="mt-16 max-w-3xl mx-auto text-center bg-blue-50 dark:bg-blue-900/20 p-8 rounded-2xl">
          <h3 className="text-xl font-bold mb-3">Don&apos;t see your use case?</h3>
          <p className="text-gray-700 dark:text-gray-300 mb-6">
            Askvia&apos;s flexible format works for almost any data collection need. Try it for free and see how it fits your specific requirements.
          </p>
          <button className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-6 py-3 font-medium shadow-md hover:shadow-lg transition-all">
            Start Creating Now
          </button>
        </div>
      </div>
    </section>
  );
} 