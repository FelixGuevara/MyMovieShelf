// app/movies/[id]/MovieDetailsClient.tsx
"use client";

import * as React from "react";
import { useRouter } from "next/navigation";
import { ArrowLeft, Pencil, Trash2 } from "lucide-react";
import { Button } from "../../components/ui/button";
import { MovieStatusBadge } from "../../components/MovieStatusBadge";
import { useMovies } from "../../contexts/MovieProvider";
import type { Movie } from "../../types/movie";
import { toast } from "sonner";

function formatDate(value: string) {
  const d = new Date(value);
  return isNaN(d.getTime()) ? value : d.toLocaleDateString();
}

function DetailItem({ label, value }: { label: string; value: React.ReactNode }) {
  return (
    <div className="rounded-md border border-gray-200 p-4">
      <div className="text-xs uppercase tracking-wide text-gray-500">{label}</div>
      <div className="mt-1 text-gray-900">{value}</div>
    </div>
  );
}

export default function MovieDetailsClient({ id }: { id: string }) {
  const router = useRouter();
  const { getById, deleteMovie } = useMovies();

  console.log("Details page received id:", id);
  const movie = getById(id);

  if (!movie) {
    return (
      <div className="p-4">
        <Button variant="ghost" onClick={() => router.back()} className="mb-4">
          <ArrowLeft className="mr-2 h-4 w-4" /> Back
        </Button>
        <div className="rounded-lg border border-gray-200 bg-white p-6">
          <h1 className="text-lg font-semibold text-gray-900">Movie not found</h1>
          <p className="mt-2 text-gray-600">
            We couldn't find a movie with id <span className="font-mono">{id}</span>.
          </p>
        </div>
      </div>
    );
  }

  const handleEdit = () => {
    // For now, mimic your current UX
    toast.info(`Edit functionality for ${movie.title} will be implemented.`);
    // You can later navigate to /movies/${id}/edit if you add that route.
  };

  const handleDelete = () => {
    if (window.confirm(`Are you sure you want to delete ${movie.title}?`)) {
      deleteMovie(movie.id);
      toast.success(`${movie.title} has been deleted successfully.`);
      router.push("/movies");
    }
  };

  return (
    <div className="p-4">
      <Button variant="ghost" onClick={() => router.back()} className="mb-4">
        <ArrowLeft className="mr-2 h-4 w-4" /> Back
      </Button>

      <div className="rounded-lg border border-gray-200 bg-white p-6">
        {/* Header */}
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h1 className="text-2xl font-semibold text-gray-900">{movie.title}</h1>
            <p className="text-gray-600">
              Added by {movie.user.name} on {formatDate(movie.date)}
            </p>
          </div>
          <div className="flex items-center gap-2">
            <MovieStatusBadge status={movie.status} />
            <Button variant="outline" onClick={handleEdit}>
              <Pencil className="mr-2 h-4 w-4" /> Edit
            </Button>
            <Button variant="destructive" onClick={handleDelete}>
              <Trash2 className="mr-2 h-4 w-4" /> Delete
            </Button>
          </div>
        </div>

        {/* Meta grid */}
        <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <DetailItem label="Title" value={movie.title} />
          <DetailItem label="Release Year" value={movie.releaseYear} />
          <DetailItem label="Run Time" value={movie.runTime} />
          <DetailItem label="Genre" value={movie.genre} />
          <DetailItem label="Director" value={movie.director} />
          <DetailItem label="Added By (ID)" value={`${movie.user.name} (${movie.user.id})`} />
          <DetailItem label="Date Added" value={formatDate(movie.date)} />
          <DetailItem label="Status" value={<MovieStatusBadge status={movie.status} />} />
        </div>

        {/* Future sections: poster, synopsis, cast, ratings, links... */}
      </div>
    </div>
  );
}