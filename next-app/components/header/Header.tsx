"use client";

import Link from "next/link";
import SearchBar from "../search/SearchBar";

export default function Header() {
  return (
    <header className="sticky top-0 z-30 bg-white/95 backdrop-blur border-b border-gray-100">
      <div className="flex flex-col md:flex-row md:items-start md:justify-between px-4 md:px-6 pt-3">
        <div className="flex items-center justify-between w-full md:w-auto">
          <Link href="/" className="text-xl font-bold tracking-tight text-primary">Alexbnb</Link>
          {/* Optionnel: placer ici un bouton menu mobile plus tard */}
        </div>
        <div className="w-full md:w-auto py-2 md:py-2 px-0 md:px-4">
          <SearchBar />
        </div>
        <div className="hidden md:block w-16" aria-hidden="true" />
      </div>
    </header>
  );
}
