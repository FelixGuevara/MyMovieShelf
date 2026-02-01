import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Image from "next/image"; 
import Link from "next/link";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "MyMovieShelf",
  description: "Your personal movie collection",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  
  // TODO: Replace with your real user name from auth/session
  const userName = "Felix Guevara"; // fallback placeholder

  return (
<html lang="en"> 
  <body className="flex flex-col min-h-screen"> 

      {/* Header */}
        <header className="w-full p-4 bg-[rgb(0,76,157)] text-white">
          <div className="max-w-6xl mx-auto flex items-center justify-between">
            <div className="flex items-center gap-10">

              {/* Logo */}
              <Link href="/" className="flex items-center">
                <Image src="/movie-camera.svg" alt="Home" width={70} height={70} className="object-contain" />
              </Link>

              <nav className="flex gap-8 text-lg font-bold">
                <a href="/" className="hover:underline">My Movie Library</a>
                <a href="/" className="hover:underline">My Movie Shelfs</a>
                <a href="/about" className="hover:underline">About Us</a>
                <a href="/contact" className="hover:underline">User Manager</a>
              </nav>
            </div>

            {/* Right: Hello label */}
            <label className="form-check-label">
              <span className="hello-label">Hello, {userName}</span>
            </label>

          </div>
        </header>

        {/* Page content */}
        <main className="flex-grow">
          {children}
        </main>

      {/* Footer */}
    <footer className="mt-auto p-4 bg-[rgb(0,76,157)]"> 
      <div className="text-center pb-3 text-sm text-white"> 
          <span>Copyright © {new Date().getFullYear()} MyMovieShelf. All rights reserved. </span> 
          </div> 
    </footer> 
  </body> 
</html>
  );
}
