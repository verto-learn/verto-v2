'use client';

import { useDemoData } from "@/hooks/use-demo-data";
import { ModeToggle } from "../ui/mode-toggle";

export default function HomeView() {
  const { data, isLoading, error, showToast } = useDemoData();

  if (isLoading) return <div className="p-10 text-center">Loading...</div>;
  if (error) return <div className="p-10 text-red-500 text-center">Error!</div>;

  return (
    <>
      <main className="flex min-h-screen flex-col items-center justify-center gap-5 p-24">
        <h1 className="text-2xl font-bold">Setup Berhasil</h1>

        <div className="p-4 border rounded">
          Data: {data?.message}
        </div>

        <ModeToggle />
        <button
          onClick={showToast}
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded transition"
        >
          Tes Toast
        </button>
      </main>
    </>
  );
}