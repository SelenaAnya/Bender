import Header from '@/components/Header/Header';

export default function Home() {
  return (
    <>
      <Header />

      <main className="min-h-screen bg-gray-50 dark:bg-zinc-900">
        {/* Hero Section */}
        <section className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl md:text-6xl">
              Bender Robots
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Інноваційні рішення в робототехніці для вашого бізнесу
            </p>
          </div>
        </section>

        {/* Products Section */}
        <section id="bender-2" className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
            Bender 2.0
          </h2>
          <p className="text-gray-600 dark:text-gray-300">
            Новітня модель з покращеними характеристиками...
          </p>
        </section>

        <section id="bender-m" className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
            Bender-M
          </h2>
          <p className="text-gray-600 dark:text-gray-300">
            Середня модель для універсального використання...
          </p>
        </section>

        <section id="bender-l" className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
            Bender-L
          </h2>
          <p className="text-gray-600 dark:text-gray-300">
            Велика модель для промислового використання...
          </p>
        </section>
      </main>
    </>
  );
}