import MovieDetailsClient from "./MovieDetailsClient";
import { notFound } from "next/navigation";

export default function MovieDetailsPage({ params }: { params: { id?: string } }) {

  return <MovieDetailsClient id={"1"} />;
}