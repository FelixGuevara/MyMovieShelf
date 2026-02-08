import Image from "next/image";
import { ActionCard } from "./components/actionCard";

import {
  Film, FolderOpenDot, ListChecks, Tags, UserRound, CalendarDays,
  Star, Eye, BarChart3, Settings, Upload, BookOpenText
} from "lucide-react";


export default function Home() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-10">
      <main className="flex w-full max-w-3xl flex-col items-center justify-center py-16 px-16 dark:bg-black sm:items-start">
      
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

          
          {/* Action grid */}
          <section aria-label="Quick actions">
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
              <ActionCard href="/stats" label="Stats" icon={<BarChart3 className="h-5 w-5" />} />
              <ActionCard href="/directors" label="Directors" icon={<UserRound className="h-5 w-5" />} />
              <ActionCard href="/movies" label="Movies" icon={<Film className="h-5 w-5" />} />
              <ActionCard href="/settings" label="Settings" icon={<Settings className="h-5 w-5" />} />
              <ActionCard href="/about" label="About" icon={<BookOpenText className="h-5 w-5" />} />
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
