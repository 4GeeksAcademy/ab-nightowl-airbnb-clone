import { FaHeart, FaStar } from "react-icons/fa6";
import type { Accommodation } from "./types/Accommodation";

export default function AccommodationCard({ data }: { data: Accommodation }) {
  return (
    <div className="relative w-56 flex-shrink-0 rounded-xl overflow-hidden bg-white shadow-sm border border-gray-100">
      <div className="relative h-36 w-full bg-gray-200">
        <img
          src={data.image}
          alt={data.name}
          className="object-cover w-full h-full"
        />
        {data.isRecommended && (
          <span className="absolute top-2 left-2 bg-primary text-white text-xs px-2 py-1 rounded-full shadow">Recommended</span>
        )}
        <button className="absolute top-2 right-2 bg-white/80 rounded-full p-1 text-primary shadow">
          <FaHeart className={data.isFavorite ? "fill-red-500" : "fill-none stroke-red-500"} />
        </button>
      </div>
      <div className="p-3 flex flex-col gap-1">
        <div className="font-semibold truncate" title={data.name}>{data.name}</div>
        <div className="text-xs text-gray-500 truncate">{data.location}</div>
        {data.dateRange && (
          <div className="text-xs text-gray-400">{data.dateRange}{data.hostType && ` · ${data.hostType}`}</div>
        )}
        <div className="flex items-center justify-between mt-1">
          <div className="font-bold text-base">{data.price} €</div>
          <div className="flex items-center gap-1 text-yellow-500 text-sm">
            <FaStar />
            <span>{data.rating}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
