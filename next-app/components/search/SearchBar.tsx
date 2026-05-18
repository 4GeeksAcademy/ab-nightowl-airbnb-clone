"use client";

import { useState } from "react";
import SearchFiltersWrapper from "./SearchFiltersWrapper";
import WhereFilter from "./WhereFilter";
import WhenFilter from "./WhenFilter";
import WhoFilter from "./WhoFilter";
import WhatServiceFilter from "./WhatServiceFilter";
import ReactDOM from "react-dom";
import { useSearchLocation } from "./SearchLocationContext";

const TABS = [
  { label: "Accommodations", value: "accommodations", icon: "🏠" },
  { label: "Experiences", value: "experiences", icon: "🎉" },
  { label: "Services", value: "services", icon: "🛎️" },
];

type SearchTab = "accommodations" | "experiences" | "services";

export default function SearchBar() {
  const [tab, setTab] = useState<SearchTab>("accommodations");
  const [popover, setPopover] = useState<null | "where" | "when" | "who">(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileStep, setMobileStep] = useState(0); // 0: Where, 1: When, 2: Who/What
  const { searchLocation, setSearchLocation, activeLocation, setActiveLocation } = useSearchLocation();
  const [where, setWhere] = useState(searchLocation);
  const [when, setWhen] = useState<{ start?: string; end?: string; margin?: string }>({});
  const [who, setWho] = useState<Record<string, number>>({});
  const [what, setWhat] = useState<string[]>([]);

  const handleWhereChange = (value: string) => {
    setWhere(value);
    setSearchLocation(value);
  };

  const handleActiveLocationChange = (value: string) => {
    setActiveLocation(value);
  };

  // Dynamic summaries
  const whereSummary = where || "Search destinations";
  const whenSummary = when.start ? `${when.start}${when.end ? ` - ${when.end}` : ""}` : "Add dates";
  const whoSummary =
    tab === "services"
      ? what.length > 0
        ? what.join(", ")
        : "Add service type"
      : Object.values(who).reduce((acc, v) => acc + v, 0) > 0
        ? `${Object.values(who).reduce((acc, v) => acc + v, 0)} guests`
        : "Add guests";

  const clearAll = () => {
    setWhere("");
    setSearchLocation("");
    setActiveLocation("");
    setWhen({});
    setWho({});
    setWhat([]);
  };

  // Desktop/tablet popover rendering
  const renderPopover = () => {
    if (!popover) return null;

    const popoverPositionClass =
      popover === "where"
        ? "left-0"
        : popover === "when"
          ? "left-1/2 -translate-x-1/2"
          : "right-0";

    return (
      <div className={`absolute top-full mt-3 w-full md:w-[420px] bg-white rounded-2xl shadow-2xl border border-gray-100 z-50 p-5 animate-fade-in ${popoverPositionClass}`}>
        <div className="absolute top-3 right-4">
          <button aria-label="Close" className="text-2xl text-gray-400 hover:text-gray-700" onClick={() => setPopover(null)}>
            ×
          </button>
        </div>
        {popover === "where" && (
          <WhereFilter
            value={where}
            activeLocation={activeLocation}
            onChange={handleWhereChange}
            onSelectLocation={handleActiveLocationChange}
          />
        )}
        {popover === "when" && (
          <WhenFilter value={when} onChange={setWhen} withRange={tab === "accommodations"} />
        )}
        {popover === "who" && tab === "accommodations" && (
          <WhoFilter value={who} onChange={setWho} showPets={true} />
        )}
        {popover === "who" && tab === "experiences" && (
          <WhoFilter value={who} onChange={setWho} showPets={false} />
        )}
        {popover === "who" && tab === "services" && (
          <WhatServiceFilter value={what} onChange={setWhat} />
        )}
        {/* Mobile footer in popover */}
        <div className="flex justify-between mt-4 border-t pt-4">
          <button className="text-gray-500 font-medium" onClick={clearAll}>Clear all</button>
          <button className="bg-primary text-white px-4 py-2 rounded-full font-semibold shadow" onClick={() => setPopover(null)}>Search</button>
        </div>
      </div>
    );
  };

  // Mobile overlay rendering (full page)
  const renderMobileOverlay = () => {
    if (typeof window === "undefined" || !mobileOpen) return null;
    return ReactDOM.createPortal(
      <div className="fixed inset-0 z-[99999] bg-white flex flex-col px-4 py-6 animate-fade-in overflow-y-auto">
        <button
          type="button"
          aria-label="Close search"
          className="absolute top-4 right-6 text-2xl text-gray-400 hover:text-gray-700"
          onClick={() => setMobileOpen(false)}
        >
          ×
        </button>
        <div className="flex justify-center gap-2 mb-4">
          {TABS.map((t) => (
            <button
              key={t.value}
              className={`flex flex-col items-center justify-center px-3 py-2 rounded-full text-sm font-medium border transition-all min-w-[72px] ${tab === t.value ? "bg-primary text-white border-primary" : "bg-gray-100 text-gray-600 border-transparent"}`}
              onClick={() => setTab(t.value as SearchTab)}
            >
              <span className="text-2xl mb-0.5">{t.icon}</span>
              <span className="text-xs font-medium">{t.label}</span>
            </button>
          ))}
        </div>
        {/* 3 filter rows */}
        <div className="space-y-2 mb-4">
          {/* Where */}
          <button
            type="button"
            onClick={() => setMobileStep(0)}
            className={`w-full rounded-xl border px-4 py-3 text-left flex justify-between items-center ${mobileStep === 0 ? "border-primary bg-teal-50" : "border-gray-200"}`}
          >
            <div>
              <div className="text-base font-semibold text-gray-900">Where?</div>
              <div className="text-sm text-gray-500">{whereSummary}</div>
            </div>
            <span className="text-xl text-primary">{mobileStep === 0 ? "▼" : ""}</span>
          </button>
          {mobileStep === 0 && (
            <div className="mt-2">
              <WhereFilter
                value={where}
                activeLocation={activeLocation}
                onChange={handleWhereChange}
                onSelectLocation={handleActiveLocationChange}
              />
            </div>
          )}
          {/* When */}
          <button
            type="button"
            onClick={() => setMobileStep(1)}
            className={`w-full rounded-xl border px-4 py-3 text-left flex justify-between items-center ${mobileStep === 1 ? "border-primary bg-teal-50" : "border-gray-200"}`}
          >
            <div>
              <div className="text-base font-semibold text-gray-900">When</div>
              <div className="text-sm text-gray-500">{whenSummary}</div>
            </div>
            <span className="text-xl text-primary">{mobileStep === 1 ? "▼" : ""}</span>
          </button>
          {mobileStep === 1 && <div className="mt-2"><WhenFilter value={when} onChange={setWhen} withRange={tab === "accommodations"} /></div>}
          {/* Who/What */}
          <button
            type="button"
            onClick={() => setMobileStep(2)}
            className={`w-full rounded-xl border px-4 py-3 text-left flex justify-between items-center ${mobileStep === 2 ? "border-primary bg-teal-50" : "border-gray-200"}`}
          >
            <div>
              <div className="text-base font-semibold text-gray-900">{tab === "services" ? "What" : "Who"}</div>
              <div className="text-sm text-gray-500">{whoSummary}</div>
            </div>
            <span className="text-xl text-primary">{mobileStep === 2 ? "▼" : ""}</span>
          </button>
          {mobileStep === 2 && (
            <div className="mt-2">
              {tab === "accommodations" && <WhoFilter value={who} onChange={setWho} showPets={true} />}
              {tab === "experiences" && <WhoFilter value={who} onChange={setWho} showPets={false} />}
              {tab === "services" && <WhatServiceFilter value={what} onChange={setWhat} />}
            </div>
          )}
        </div>
        {/* Mobile footer */}
        <div className="flex justify-between mt-auto pt-4 border-t">
          <button className="text-gray-700 font-semibold" onClick={clearAll}>Clear all</button>
          <button
            className="bg-primary text-white px-6 py-3 rounded-full font-semibold shadow flex items-center gap-2"
            onClick={() => setMobileOpen(false)}
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 104.5 4.5a7.5 7.5 0 0012.15 12.15z" />
            </svg>
            Search
          </button>
        </div>
      </div>,
      document.body
    );
  };

  return (
    <>
      {/* Tabs desktop */}
      <div className="hidden md:flex w-full justify-center gap-2 z-10 mb-4">
        {TABS.map((t) => (
          <button
            key={t.value}
            className={`flex flex-col items-center justify-center px-3 py-2 rounded-full text-sm font-medium border transition-all min-w-[72px] ${tab === t.value ? "bg-primary text-white border-primary" : "bg-gray-100 text-gray-600 border-transparent"}`}
            onClick={() => setTab(t.value as SearchTab)}
          >
            <span className="text-2xl mb-0.5">{t.icon}</span>
            <span className="text-xs font-medium">{t.label}</span>
          </button>
        ))}
      </div>
      {/* Desktop/tablet: 3 filtres côte à côte, popover contextuel */}
      <div className="hidden md:flex relative items-center w-full md:max-w-2xl mx-auto bg-white rounded-full shadow-md border border-gray-200 px-2 py-1 md:py-2">
        {/* Filtres et bouton Search dans un wrapper pour l'espacement */}
        <SearchFiltersWrapper>
          <button
            className="flex-1 flex flex-col items-start px-4 py-2 rounded-full hover:bg-gray-50 focus:outline-none"
            onClick={() => setPopover("where")}
            aria-label="Where"
          >
            <span className="text-xs font-semibold text-gray-500">Where</span>
            <span className="text-sm text-gray-900 truncate">{whereSummary}</span>
          </button>
          <span className="w-px h-8 bg-gray-200 mx-1" />
          <button
            className="flex-1 flex flex-col items-start px-4 py-2 rounded-full hover:bg-gray-50 focus:outline-none"
            onClick={() => setPopover("when")}
            aria-label="When"
          >
            <span className="text-xs font-semibold text-gray-500">When</span>
            <span className="text-sm text-gray-900 truncate">{whenSummary}</span>
          </button>
          <span className="w-px h-8 bg-gray-200 mx-1" />
          <button
            className="flex-1 flex flex-col items-start px-4 py-2 rounded-full hover:bg-gray-50 focus:outline-none"
            onClick={() => setPopover("who")}
            aria-label={tab === "services" ? "What" : "Who"}
          >
            <span className="text-xs font-semibold text-gray-500">{tab === "services" ? "What" : "Who"}</span>
            <span className="text-sm text-gray-900 truncate">{whoSummary}</span>
          </button>
          {/* Bouton Search */}
          <button className="ml-2 bg-primary text-white rounded-full p-3 shadow hover:bg-primary/90 focus:outline-none" aria-label="Search">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 104.5 4.5a7.5 7.5 0 0012.15 12.15z" />
            </svg>
          </button>
        </SearchFiltersWrapper>
        {/* Popover contextuel */}
        {renderPopover()}
      </div>
      {/* Mobile: tabs + apercu filtres visibles */}
      <div className="md:hidden w-full space-y-3">
        <div className="w-full flex justify-center gap-2 z-10">
          {TABS.map((t) => (
            <button
              key={t.value}
              className={`flex flex-col items-center justify-center px-3 py-2 rounded-full text-sm font-medium border transition-all min-w-[72px] ${tab === t.value ? "bg-primary text-white border-primary" : "bg-gray-100 text-gray-600 border-transparent"}`}
              onClick={() => setTab(t.value as SearchTab)}
            >
              <span className="text-2xl mb-0.5">{t.icon}</span>
              <span className="text-xs font-medium">{t.label}</span>
            </button>
          ))}
        </div>
        <div className="w-full rounded-2xl border border-gray-200 bg-white shadow-sm p-2 space-y-2">
          <button
            type="button"
            onClick={() => { setMobileOpen(true); setMobileStep(0); }}
            className="w-full rounded-xl border border-gray-200 px-4 py-3 text-left"
          >
            <div className="text-base font-semibold text-gray-900">Where?</div>
            <div className="text-sm text-gray-500">{whereSummary}</div>
          </button>
          <button
            type="button"
            onClick={() => { setMobileOpen(true); setMobileStep(1); }}
            className="w-full rounded-xl border border-gray-200 px-4 py-3 text-left"
          >
            <div className="text-base font-semibold text-gray-900">When</div>
            <div className="text-sm text-gray-500">{whenSummary}</div>
          </button>
          <button
            type="button"
            onClick={() => { setMobileOpen(true); setMobileStep(2); }}
            className="w-full rounded-xl border border-gray-200 px-4 py-3 text-left"
          >
            <div className="text-base font-semibold text-gray-900">{tab === "services" ? "What" : "Who"}</div>
            <div className="text-sm text-gray-500">{whoSummary}</div>
          </button>
          <button
            type="button"
            aria-label="Open search"
            onClick={() => { setMobileOpen(true); setMobileStep(0); }}
            className="w-full bg-primary text-white px-4 py-3 rounded-full font-semibold shadow flex items-center justify-center gap-2"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 104.5 4.5a7.5 7.5 0 0012.15 12.15z" />
            </svg>
            Search
          </button>
        </div>
      </div>
      {/* Overlay mobile via portail */}
      {renderMobileOverlay()}
    </>
  );
}
