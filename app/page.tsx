import Image from "next/image";

export default function Home() {
  return (
    <div className="flex h-auto items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex w-full max-w-3xl flex-col items-center justify-center py-16 px-16 bg-white dark:bg-black sm:items-start">

        <div className="flex flex-col items-center text-center sm:items-start sm:text-left w-full">
          <h1 className="w-full text-3xl font-semibold leading-10 tracking-tight text-[rgb(0,74,156)]">
            MyMovieShelf initial deployment.
          </h1>

          <p className="max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400">
            MyMovieShelf is a modern, cloud hosted web application designed for movie enthusiasts who want to catalog, organize, and showcase their personal film collections.
          </p>
        </div>

      </main>
    </div>
  );
}
