import MovieDetailsClient from "./MovieDetailsClient";
import { notFound } from "next/navigation";

export default function MovieDetailsPage({ params }: { params: { id?: string } }) {
  console.log("Route params:", params); // <-- should show { id: "1" } (or whatever)
  if (!params?.id) {
    // If id is missing, send to 404 (prevents empty id in the UI)
    notFound();
  }
  // decode in case the id is URL encoded
  return <MovieDetailsClient id={decodeURIComponent(params.id)} />;
}