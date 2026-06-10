import React, { useState, useMemo, useEffect } from "react";
import ListingCard from "./ListingCard";
import { listings } from "../data/Homedata";

export default function ListingsPanel({
  activeCategory,
  selectedCity = "",
  searchQuery = "",
  onClose,
}) {
  const [selectedFilter, setSelectedFilter] = useState("All");

  useEffect(() => {
    setSelectedFilter("All");
  }, [activeCategory]);

  const allItems = listings;

  const filtered = useMemo(() => {
    let data = allItems;

    if (selectedCity) {
      data = data.filter(
        (i) => i.city.toLowerCase() === selectedCity.toLowerCase()
      );
    }

    if (searchQuery) {
      data = data.filter((i) =>
        i.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    if (selectedFilter === "Top Rated") {
      data = [...data].sort((a, b) => b.rating - a.rating);
    }

    return data;
  }, [allItems, selectedCity, searchQuery, selectedFilter]);

  if (!activeCategory) return null;

  return (
    <div className="fixed inset-0 bg-white z-50 overflow-auto">

      <div className="p-4 border-b flex justify-between">
        <h2 className="font-bold">Listings</h2>
        <button onClick={onClose}>Close</button>
      </div>

      <div className="p-4 grid gap-4">
        {filtered.length === 0 ? (
          <p className="text-center text-gray-500">
            No listings found
          </p>
        ) : (
          filtered.map((item) => (
            <ListingCard key={item.id} item={item} />
          ))
        )}
      </div>

    </div>
  );
}