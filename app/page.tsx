import Image from "next/image";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <Image
          className="dark:invert"
          src="/next.svg"
          alt="Next.js logo"
          width={100}
          height={20}
          priority
        />

        <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left w-full">
          <h1 className="w-full text-3xl font-semibold leading-10 tracking-tight text-blue-600">
            Welcome to initial deployment of MyMovieShelf.
          </h1>

          <p className="max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400">
            MyMovieShelf is a modern, cloud hosted web application designed for movie enthusiasts who want to catalog, organize, and showcase their personal film collections.
          </p>
        </div>

        <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left w-full">
            <Image
              className="dark:invert"
              src="/movie-camera.svg"
              alt="camera"
              width={100}
              height={100}
            />
        </div>
      </main>
    </div>
  );
}
