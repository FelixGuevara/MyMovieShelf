// app/movies/[id]/page.tsx
import { notFound } from "next/navigation";
import MovieDetailsClient from "./MovieDetailsClient";

export const dynamic = "force-dynamic";

// app/movies/[id]/page.tsx
export default function MovieDetailsPage({ params }: { params: { id: string } }) {
  const { id } = params;
  return <div>Details for movie {id}</div>;
}