// app/movieLibrary/[id]/page.tsx
import MovieDetailsClient from "./MovieDetailsClient";
import { notFound } from "next/navigation";

export const dynamic = 'force-dynamic';

type PageProps = { params: { id: string } };

export default function MovieDetailsPage({ params }: PageProps) {
  // If you really want to guard bad/empty ids:
  if (!params.id || params.id.trim() === "") {
    notFound(); // throws and renders the 404 page
  }

  return <MovieDetailsClient id={decodeURIComponent(params.id)} />;
}
``