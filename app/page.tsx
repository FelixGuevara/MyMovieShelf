import Image from "next/image";

export default function Home() {
  return (
    <div className="flex h-auto items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex w-full max-w-3xl flex-col items-center justify-center py-16 px-16 bg-white dark:bg-black sm:items-start">
      
        <div className="mx-auto max-w-4xl px-4 py-10">
          {/* Top section */}
          <section className="mb-6">
            <h1 className="text-4xl font-extrabold tracking-tight text-gray-900">
              About <span className="text-[rgb(0,76,157)]">MyMovieShelf</span>
            </h1>
            <p className="mt-4 text-lg text-gray-700">
              MyMovieShelf is your personal space to catalog, rate, and rediscover the movies you love.
              Whether you&apos;re curating a top‑10 list, tracking watch status, or organizing shelves by
              genres, directors, and years—our goal is to make your library delightful and fast.
            </p>
          </section>
        </div>

      </main>
    </div>
  );
}
