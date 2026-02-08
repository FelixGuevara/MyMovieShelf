import Image from "next/image";
import { ActionCard } from "./components/actionCard";

import {
  Film, FolderOpenDot, ListChecks, Tags, UserRound, CalendarDays,
  Star, Eye, BarChart3, Settings, Upload, BookOpenText
} from "lucide-react";


export default function Home() {
  return (
    <div className="mx-auto max-w-4xl py-10">
      <main className="flex w-full max-w-3xl flex-col items-center justify-center py-10 dark:bg-black sm:items-start">
      
        <div className="mx-auto max-w-4xl py-10">
          {/* Top section */}
          <section className="mb-6">
            <h3 className="text-4xl font-extrabold tracking-tight text-gray-900">
              <span className="text-[rgb(0,76,157)]">What would you like to do?</span>
            </h3>
          </section>

          
          {/* Action grid */}
          <section aria-label="Quick actions">
            <div className="grid grid-cols-4 gap-3 sm:grid-cols-2 lg:grid-cols-1">
              <ActionCard href="/movies" label="My Movie Library" icon={<Film className="h-5 w-5" />} />
              <ActionCard href="/stats" label="My Movie Shelfs" icon={<BarChart3 className="h-5 w-5" />} />
              <ActionCard href="/about" label="About Us" icon={<BookOpenText className="h-5 w-5" />} />
              <ActionCard href="/userManager" label="User Manager" icon={<UserRound className="h-5 w-5" />} />
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
