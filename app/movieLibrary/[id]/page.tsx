import MovieDetailsClient from "./MovieDetailsClient";
import { notFound } from "next/navigation";

export default function MovieDetailsPage({
  params,
}: {
  params: { id?: string };
}) {
  // params should be populated here ONLY if this file is a Server Component.
  if (!params?.id) {
    // Optional: show 404 page if id is missing
    notFound();
  }

  // Pass the id down to your Client Component
  return <MovieDetailsClient id={decodeURIComponent(params.id)} />;
}