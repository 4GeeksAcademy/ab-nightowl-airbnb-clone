"use client";

import { useRef } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";
import type { Accommodation } from "./types/Accommodation";
import AccommodationCard from "./AccommodationCard";

export default function AccommodationList({ title, items }: { title: string; items: Accommodation[] }) {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollByCard = (direction: "left" | "right") => {
    if (!scrollRef.current) {
      return;
    }

    scrollRef.current.scrollBy({
      left: direction === "left" ? -260 : 260,
      behavior: "smooth",
    });
  };

  return (
    <section className="relative z-10">
      <div className="flex items-center justify-between mb-2">
        <h2 className="text-xl font-semibold">{title}</h2>
        <div className="flex items-center gap-2">
          <button className="text-sm text-primary font-medium">See all</button>
          <div className="hidden md:flex items-center gap-1">
            <button
              type="button"
              aria-label="Previous"
              className="h-8 w-8 rounded-full border border-gray-200 text-gray-600 hover:text-primary"
              onClick={() => scrollByCard("left")}
            >
              <FaChevronLeft className="mx-auto" />
            </button>
            <button
              type="button"
              aria-label="Next"
              className="h-8 w-8 rounded-full border border-gray-200 text-gray-600 hover:text-primary"
              onClick={() => scrollByCard("right")}
            >
              <FaChevronRight className="mx-auto" />
            </button>
          </div>
        </div>
      </div>
      <div ref={scrollRef} className="flex space-x-4 overflow-x-auto pb-2">
        {items.map((acc) => (
          <AccommodationCard key={acc.id} data={acc} />
        ))}
      </div>
    </section>
  );
}
