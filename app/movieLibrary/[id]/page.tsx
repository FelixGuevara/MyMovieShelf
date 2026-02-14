// app/movies/[id]/page.tsx
import MovieDetailsClient from "./MovieDetailsClient";

export default function MovieDetailsPage({ params }: { params: { id: string } }) {
  return <MovieDetailsClient id={params.id} />;
}