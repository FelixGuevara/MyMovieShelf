import MovieDetailsClient from "./MovieDetailsClient";
import { notFound } from "next/navigation";

export default function MovieDetailsPage({ params }: { params: { id?: string } }) {
  if (!params?.id) notFound();
  return <MovieDetailsClient id={decodeURIComponent(params.id)} />;
}