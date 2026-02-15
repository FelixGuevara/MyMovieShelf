// app/movieLibrary/[id]/page.tsx
import { notFound } from "next/navigation";
import MovieDetailsClient from "./MovieDetailsClient";

export const dynamic = "force-dynamic";

type PageProps = { params: { id?: string } };

export default function MovieDetailsPage({ params }: PageProps) {
  // This log appears in the **terminal** where you run `npm run dev` (or in Vercel logs in prod)
  console.log(">>> SERVER: [/movieLibrary/[id]] params =", params);

  const rawId = params?.id;
  if (!rawId || rawId.trim() === "") {
    notFound();
  }
  return <MovieDetailsClient id={decodeURIComponent("1")} />;
}