"use client";

import { useEffect, useState } from "react";
import AccommodationList from "../components/accommodation/AccommodationList";
import type { Accommodation } from "../components/accommodation/types/Accommodation";
import { useSearchLocation } from "../components/search/SearchLocationContext";

const popular: Accommodation[] = [
  {
    id: "1",
    name: "Cozy loft downtown",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80",
    location: "Paris, France",
    dateRange: "June 12–15",
    hostType: "Individual",
    price: 120,
    rating: 4.8,
    isFavorite: true,
    isRecommended: true,
  },
  {
    id: "2",
    name: "Modern studio",
    image: "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=400&q=80",
    location: "Lyon, France",
    dateRange: "June 18–21",
    hostType: "Pro",
    price: 90,
    rating: 4.6,
  },
  {
    id: "3",
    name: "Rustic countryside house",
    image: "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=400&q=80",
    location: "Bordeaux, France",
    dateRange: "June 25–28",
    hostType: "Individual",
    price: 130,
    rating: 4.7,
  },
  {
    id: "4",
    name: "Luxury penthouse",
    image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=400&q=80",
    location: "Cannes, France",
    dateRange: "July 1–4",
    hostType: "Pro",
    price: 300,
    rating: 4.9,
  },
  {
    id: "5",
    name: "Charming studio",
    image: "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&w=400&q=80",
    location: "Toulouse, France",
    dateRange: "July 5–8",
    hostType: "Individual",
    price: 100,
    rating: 4.5,
  },
  {
    id: "6",
    name: "Beachfront villa",
    image: "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&w=400&q=80",
    location: "Biarritz, France",
    dateRange: "July 10–13",
    hostType: "Pro",
    price: 250,
    rating: 4.8,
  },
  {
    id: "7",
    name: "Urban apartment",
    image: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80",
    location: "Nantes, France",
    dateRange: "July 15–18",
    hostType: "Individual",
    price: 110,
    rating: 4.6,
  },
];

const deals: Accommodation[] = [
  {
    id: "8",
    name: "House with pool",
    image: "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&w=400&q=80",
    location: "Nice, France",
    dateRange: "June 22–25",
    hostType: "Individual",
    price: 150,
    rating: 4.9,
    isRecommended: true,
  },
  {
    id: "9",
    name: "Apartment with sea view",
    image: "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&w=400&q=80",
    location: "Marseille, France",
    dateRange: "July 10–13",
    hostType: "Pro",
    price: 110,
    rating: 4.7,
  },
  {
    id: "10",
    name: "Mountain cabin",
    image: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=400&q=80",
    location: "Grenoble, France",
    dateRange: "July 20–23",
    hostType: "Individual",
    price: 140,
    rating: 4.8,
  },
  {
    id: "11",
    name: "City loft",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80",
    location: "Montpellier, France",
    dateRange: "July 25–28",
    hostType: "Pro",
    price: 120,
    rating: 4.6,
  },
  {
    id: "12",
    name: "Historic townhouse",
    image: "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=400&q=80",
    location: "Avignon, France",
    dateRange: "August 1–4",
    hostType: "Individual",
    price: 160,
    rating: 4.7,
  },
  {
    id: "13",
    name: "Eco-friendly retreat",
    image: "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=400&q=80",
    location: "Arles, France",
    dateRange: "August 5–8",
    hostType: "Pro",
    price: 180,
    rating: 4.9,
  },
  {
    id: "14",
    name: "Secluded cottage",
    image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=400&q=80",
    location: "Dijon, France",
    dateRange: "August 10–13",
    hostType: "Individual",
    price: 130,
    rating: 4.8,
  },
];

const trendy: Accommodation[] = [
  {
    id: "15",
    name: "Treehouse",
    image: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80",
    location: "Annecy, France",
    price: 80,
    rating: 4.5,
  },
  {
    id: "16",
    name: "Alpine chalet",
    image: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=400&q=80",
    location: "Chamonix, France",
    price: 200,
    rating: 4.9,
    isFavorite: true,
  },
  {
    id: "17",
    name: "Beach bungalow",
    image: "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&w=400&q=80",
    location: "Saint-Tropez, France",
    price: 220,
    rating: 4.8,
  },
  {
    id: "18",
    name: "Urban hideaway",
    image: "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&w=400&q=80",
    location: "Strasbourg, France",
    price: 90,
    rating: 4.6,
  },
  {
    id: "19",
    name: "Countryside manor",
    image: "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=400&q=80",
    location: "Reims, France",
    price: 170,
    rating: 4.7,
  },
  {
    id: "20",
    name: "Luxury yacht",
    image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=400&q=80",
    location: "Monaco, France",
    price: 500,
    rating: 5.0,
  },
  {
    id: "21",
    name: "Charming farmhouse",
    image: "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=400&q=80",
    location: "Clermont-Ferrand, France",
    price: 140,
    rating: 4.8,
  },
];

export default function Home() {
  const { searchLocation } = useSearchLocation();
  const [visiblePopular, setVisiblePopular] = useState<Accommodation[]>(popular);
  const [visibleDeals, setVisibleDeals] = useState<Accommodation[]>(deals);
  const [visibleTrendy, setVisibleTrendy] = useState<Accommodation[]>(trendy);

  useEffect(() => {
    const normalizedQuery = searchLocation.trim().toLowerCase();

    if (!normalizedQuery) {
      setVisiblePopular(popular);
      setVisibleDeals(deals);
      setVisibleTrendy(trendy);
      return;
    }

    setVisiblePopular(
      popular.filter((item) => item.location.toLowerCase().includes(normalizedQuery)),
    );
    setVisibleDeals(
      deals.filter((item) => item.location.toLowerCase().includes(normalizedQuery)),
    );
    setVisibleTrendy(
      trendy.filter((item) => item.location.toLowerCase().includes(normalizedQuery)),
    );
  }, [searchLocation]);

  return (
    <main className="p-4 space-y-8">
      <AccommodationList title="Popular near you" items={visiblePopular} />
      <AccommodationList title="Great deals" items={visibleDeals} />
      <AccommodationList title="Trendy cities & destinations" items={visibleTrendy} />
    </main>
  );
}
