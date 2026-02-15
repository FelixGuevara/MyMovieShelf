// app/movieLibrary/[id]/page.tsx
import { notFound } from "next/navigation";
import MovieDetailsClient from "./MovieDetailsClient";

//export const dynamic = "force-dynamic";


type PageProps = { params: Record<string, string | undefined> };

export default function MovieDetailsPage({ params }: PageProps) {
  console.log(">>> SERVER: params =", params);

  const rawId =
    params.id?.trim() ??
    (params as any).Id?.trim() ??
    (params as any).movieId?.trim();

  //if (!rawId) notFound();

  return (
    <>
      {/* Visual proof on the page */}
      <div style={{ padding: 8, fontFamily: "monospace", color: "#475569" }}>
        server params.id = <b>{params.id}</b>
      </div>
      <MovieDetailsClient id={rawId} />
    </>
  );
}