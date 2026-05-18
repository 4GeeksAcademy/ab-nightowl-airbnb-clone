"use client";

import { createContext, useContext, useMemo, useState } from "react";

type SearchLocationContextValue = {
  searchLocation: string;
  setSearchLocation: (value: string) => void;
  activeLocation: string;
  setActiveLocation: (value: string) => void;
};

const SearchLocationContext = createContext<SearchLocationContextValue | null>(null);

export function SearchLocationProvider({ children }: { children: React.ReactNode }) {
  const [searchLocation, setSearchLocation] = useState("");
  const [activeLocation, setActiveLocation] = useState("");

  const value = useMemo(
    () => ({
      searchLocation,
      setSearchLocation,
      activeLocation,
      setActiveLocation,
    }),
    [searchLocation, activeLocation],
  );

  return (
    <SearchLocationContext.Provider value={value}>
      {children}
    </SearchLocationContext.Provider>
  );
}

export function useSearchLocation() {
  const context = useContext(SearchLocationContext);

  if (!context) {
    throw new Error("useSearchLocation must be used within a SearchLocationProvider");
  }

  return context;
}