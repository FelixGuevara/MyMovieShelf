import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

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
  return (
<html lang="en"> 
  <body className="flex flex-col min-h-screen"> 

      {/* Header */}
        <header className="w-full p-4 bg-[rgb(0,74,156)] text-white">
          <div className="max-w-6xl mx-auto flex items-center justify-between">
            <h1 className="text-xl font-semibold tracking-wide">
              MyMovieShelf
            </h1>

            <nav className="flex gap-6 text-sm">
              <a href="/" className="hover:underline">Home</a>
              <a href="/about" className="hover:underline">About</a>
              <a href="/contact" className="hover:underline">Contact</a>
            </nav>
          </div>
        </header>

        {/* Page content */}
        <main className="flex-grow">
          {children}
        </main>

      {/* Footer */}
    <footer className="mt-auto p-4 bg-[rgb(0,74,156)]"> 
      <div className="text-center pb-3 text-white"> 
          <span> © {new Date().getFullYear()} MyMovieShelf Inc. All rights reserved. </span> 
          </div> 
    </footer> 
  </body> 
</html>
  );
}
