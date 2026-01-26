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
    <main className="flex-grow"> {children} 
      
    </main>

      
    <footer className="mt-auto p-4 bg-[rgb(0,74,156)]"> 
      <div className="text-center pb-3 text-white"> 
          <span> © {new Date().getFullYear()} Berry Global Inc. All rights reserved. </span> 
          </div> 
    </footer> 
  </body> 
</html>
  );
}
