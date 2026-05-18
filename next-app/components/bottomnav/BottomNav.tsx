"use client";

import { FaCompass, FaHeart, FaUser } from "react-icons/fa6";
import Link from "next/link";
import useScrollDirection from "../hooks/useScrollDirection";

const NAV = [
  { label: "Explore", href: "/", icon: <FaCompass /> },
  { label: "Favorites", href: "/favorites", icon: <FaHeart /> },
  { label: "Sign in", href: "/signin", icon: <FaUser /> },
];

export default function BottomNav() {
  const isScrollingDown = useScrollDirection();

  return (
    <nav
      className={`fixed bottom-0 left-0 right-0 z-30 bg-white border-t border-gray-200 flex justify-around items-center h-14 shadow-md sm:hidden transition-transform duration-300 ${isScrollingDown ? "translate-y-full" : "translate-y-0"}`}
    >
      {NAV.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className="flex flex-col items-center text-xs text-gray-700 hover:text-primary"
        >
          <span className="text-lg mb-1">{item.icon}</span>
          <span>{item.label}</span>
        </Link>
      ))}
    </nav>
  );
}
