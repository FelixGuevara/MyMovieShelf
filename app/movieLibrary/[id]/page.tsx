// app/movieLibrary/[id]/page.tsx
import { notFound } from "next/navigation";
import { headers } from "next/headers"; 
import MovieDetailsClient from "./MovieDetailsClient";

export const dynamic = "force-dynamic";

type PageProps = { params: { id?: string } };

export default function MovieDetailsPage({ params }: PageProps) {
  // 🔎 This will throw if this file is accidentally a Client Component
  const h = headers();

  // Server log: MUST appear in the terminal running `npm run dev`
  console.log(">>> SERVER: [/movieLibrary/[id]] params =", params);

  const rawId = params?.id?.trim();
  //if (!rawId) {
    //notFound();
  //}
  const id = "1";//decodeURIComponent(rawId);
  console.log(">>> SERVER: [/movieLibrary/[id]] params =", id);
  return (
    <>
      {/* Visual proof on the page */}
      <div style={{ padding: 8, fontFamily: "monospace", color: "#475569" }}>
        server params.id = <b>{params?.id?.trim()}</b>
      </div>
      <MovieDetailsClient id={id} />
    </>
  );
}