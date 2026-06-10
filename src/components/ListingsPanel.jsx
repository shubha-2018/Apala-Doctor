// src/components/ListingsPanel.jsx

import React, { useEffect, useMemo } from "react";
import ListingCard from "./ListingCard";
import { listingsData } from "../data/listingsData";

const categoryTitles = {
  hospitals: "Hospitals",
  clinics: "Clinics",
  doctors: "Doctors",
  pharmacy: "Pharmacies",
  labTests: "Lab Tests",
  dentist: "Dentists",
  ambulance: "Ambulance Services",
};

const MAX_RESULTS = 6;

export default function ListingsPanel({
  activeCategory,
  searchQuery = "",
  selectedCity = "",
  onClose,
}) {
  useEffect(() => {
    if (!activeCategory) return;

    document.body.style.overflow = "hidden";

    const handleEsc = (e) => {
      if (e.key === "Escape") onClose();
    };

    window.addEventListener("keydown", handleEsc);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleEsc);
    };
  }, [activeCategory, onClose]);

  const allItems = listingsData?.[activeCategory] || [];

  const cityFiltered = useMemo(() => {
    if (!selectedCity) return allItems;

    return allItems.filter(
      (item) =>
        item.city?.toLowerCase() === selectedCity.toLowerCase()
    );
  }, [allItems, selectedCity]);

  const queryFiltered = useMemo(() => {
    if (!searchQuery.trim()) return cityFiltered;

    const q = searchQuery.toLowerCase();

    return cityFiltered.filter(
      (item) =>
        item.name.toLowerCase().includes(q) ||
        item.type.toLowerCase().includes(q) ||
        item.tags.some((tag) =>
          tag.toLowerCase().includes(q)
        )
    );
  }, [cityFiltered, searchQuery]);

  const items = queryFiltered.slice(0, MAX_RESULTS);

  if (!activeCategory) return null;

  const title = searchQuery
    ? `${searchQuery} — ${
        categoryTitles[activeCategory] || activeCategory
      }`
    : categoryTitles[activeCategory] || activeCategory;

  const subtitle = [
    selectedCity && `in ${selectedCity}`,
    `${queryFiltered.length} result${
      queryFiltered.length !== 1 ? "s" : ""
    } found`,
    queryFiltered.length > MAX_RESULTS &&
      `(showing ${MAX_RESULTS})`,
  ]
    .filter(Boolean)
    .join(" • ");

  return (
    <>
      {/* Overlay */}
      <div
        onClick={onClose}
        className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40 animate-fadeIn"
      />

      {/* Panel */}
      <div className="fixed inset-0 z-50 bg-white flex flex-col overflow-hidden">

        {/* Header */}
        <div className="sticky top-0 bg-white border-b border-gray-100 z-10">
          <div className="flex items-start sm:items-center justify-between gap-4 px-4 sm:px-6 py-4 max-w-7xl mx-auto">

            <div className="flex-1 min-w-0">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 break-words">
                {title}
              </h2>

              <p className="text-xs sm:text-sm text-gray-500 mt-1">
                {subtitle}
              </p>
            </div>

            <button
              onClick={onClose}
              className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition flex-shrink-0"
            >
              <svg
                className="w-5 h-5 text-gray-700"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

          </div>
        </div>

        {/* Listings */}
        <div className="flex-1 overflow-y-auto py-4 sm:py-6 px-4 sm:px-6">

          {items.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center px-4">

              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gray-100 flex items-center justify-center mb-4">
                <svg
                  className="w-8 h-8 sm:w-10 sm:h-10 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9.172 9.172a4 4 0 015.656 5.656M15 15l6 6"
                  />
                </svg>
              </div>

              <h3 className="text-base sm:text-lg font-semibold text-gray-800">
                No listings found
              </h3>

              <p className="text-gray-500 text-xs sm:text-sm mt-2 max-w-md">
                {selectedCity
                  ? `No ${
                      categoryTitles[activeCategory] ||
                      activeCategory
                    } found in ${selectedCity}. Try selecting a different city.`
                  : "Try another category."}
              </p>

            </div>
          ) : (
            <div className="max-w-7xl mx-auto space-y-4">
              {items.map((item) => (
                <ListingCard
                  key={item.id}
                  item={item}
                />
              ))}
            </div>
          )}

        </div>

      </div>
    </>
  );
}