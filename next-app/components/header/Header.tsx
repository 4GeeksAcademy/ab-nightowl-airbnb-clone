"use client";

import Link from "next/link";
import SearchBar from "../search/SearchBar";
import { FaHeart, FaUser } from "react-icons/fa6";

export default function Header() {
  return (
    <header className="sticky top-0 z-30 bg-white/95 backdrop-blur border-b border-gray-100">
      <div className="flex flex-col md:flex-row md:items-start md:justify-between px-4 md:px-6 pt-3">
        <div className="flex items-center justify-between w-full md:w-auto">
          <Link href="/" className="flex items-center gap-2 text-xl font-bold tracking-tight text-primary">
            {/* Simple SVG logo */}
            <span aria-hidden="true" className="inline-block">
              <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="14" cy="14" r="13" stroke="#06b6d4" strokeWidth="2" fill="#e0f7fa" />
                <path d="M8 18L14 8L20 18Z" fill="#06b6d4" />
              </svg>
            </span>
            Alexbnb
          </Link>
          {/* Optionnel: placer ici un bouton menu mobile plus tard */}
        </div>
        <div className="w-full md:w-auto py-2 md:py-2 px-0 md:px-4">
          <SearchBar />
        </div>
        {/* User menu icons (desktop/tablet only) */}
        <div className="hidden md:flex items-center gap-4 min-w-[80px] justify-end">
          <Link href="/favorites" aria-label="Favorites" className="text-gray-500 hover:text-primary text-xl">
            <FaHeart />
          </Link>
          <Link href="/signin" aria-label="Sign in" className="text-gray-500 hover:text-primary text-xl">
            <FaUser />
          </Link>
        </div>
      </div>
    </header>
  );
}
