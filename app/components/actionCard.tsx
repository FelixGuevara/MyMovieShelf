// components/ActionCard.tsx
import Link from "next/link";
import { type ReactNode } from "react";

type ActionCardProps = {
  href: string;
  label: string;
  icon?: ReactNode; // you can pass a Lucide/Heroicon component here
  ariaLabel?: string;
};

export function ActionCard({ href, label, icon, ariaLabel }: ActionCardProps) {
  return (
    <Link
      href={href}
      aria-label={ariaLabel ?? label}
      className="
        action-card group flex h-full w-full items-center gap-3 rounded-lg border
        border-gray-200 bg-white p-4 text-gray-900 shadow-sm transition
        hover:border-blue-400 hover:shadow-md focus:outline-none focus:ring-4
        focus:ring-blue-100 dark:border-gray-800 dark:bg-gray-900 dark:text-gray-100
        dark:hover:border-blue-500 dark:focus:ring-blue-900
      "
    >
      <div className="action-card__icon flex h-10 w-10 items-center justify-center rounded-md bg-gray-50 text-gray-700 dark:bg-gray-800 dark:text-gray-300">
        {/* If an icon was provided, render it. Otherwise, show a fallback hashtag. */}
        {icon ? (
          <span className="text-xl leading-none">{icon}</span>
        ) : (
          <span className="text-xl leading-none">#</span>
        )}
      </div>
      <div className="action-card__label text-base font-semibold">{label}</div>
    </Link>
  );
}
