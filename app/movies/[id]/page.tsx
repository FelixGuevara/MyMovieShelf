// app/movies/[id]/page.tsx
import MovieDetailsClient from "./MovieDetailsClient";

export const dynamic = "force-dynamic";

export default function MovieDetailsPage({ params }: { params: { id: string } }) {
  const { id } = params;
  // Add this log to your server console (terminal) to verify params are present
  console.log("Server params:", params);
  return <MovieDetailsClient id={id} />;
}