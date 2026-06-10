// src/components/SearchBox.jsx

import { useState } from "react";

const popularSearches = [
  { label: "Cardiologist", category: "doctors" },
  { label: "Orthopedic", category: "doctors" },
  { label: "Gynecologist", category: "doctors" },
  { label: "Pediatrician", category: "doctors" },
  { label: "Dermatologist", category: "doctors" },
  { label: "Dentist", category: "dentist" },
  { label: "Neurologist", category: "doctors" },
];

const categoryMap = {
  Hospitals: "hospitals",
  Clinics: "clinics",
  Doctors: "doctors",
  "Diagnostic Labs": "labTests",
  Pharmacies: "pharmacy",
};

const cities = [
  "Mumbai",
  "Delhi",
  "Bangalore",
  "Chennai",
  "Hyderabad",
  "Pune",
  "Kolkata",
  "Ahmedabad",
  "Jaipur",
  "Surat",
  "Lucknow",
  "Kanpur",
  "Nagpur",
  "Indore",
  "Bhopal",
  "Nanded",
  "Aurangabad",
  "Nashik",
  "Solapur",
  "Amravati",
];

export default function SearchBox({ onCategorySelect }) {
  const [query, setQuery] = useState("");
  const [location, setLocation] = useState("");
  const [category, setCategory] = useState("");

  const handleSearch = () => {
    if (category && categoryMap[category]) {
      onCategorySelect(categoryMap[category]);
    }
  };

  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
  };

  const handlePopularSearch = (item) => {
    setQuery(item.label);
    onCategorySelect(item.category);
  };

  return (
    <section className="w-full px-3 sm:px-4 py-4 sm:py-5">
      <div className="max-w-7xl mx-auto">
        <div className="bg-white rounded-2xl sm:rounded-3xl shadow-xl border border-gray-100 p-4 sm:p-6 md:p-7">

          {/* Desktop Labels */}
          <div className="hidden lg:grid lg:grid-cols-[2fr_1.4fr_1.4fr_140px] gap-4 mb-3">
            <h4 className="font-bold text-gray-900">
              What are you looking for?
            </h4>
            <h4 className="font-bold text-gray-900">Category</h4>
            <h4 className="font-bold text-gray-900">Location</h4>
            <div></div>
          </div>

          {/* Search Row */}
          <div className="flex flex-col lg:flex-row gap-3 sm:gap-4">

            {/* Search Input */}
            <div className="lg:flex-[2]">
              <label className="lg:hidden block text-sm font-bold mb-2 text-gray-900">
                What are you looking for?
              </label>

              <div className="flex items-center border border-gray-200 rounded-xl sm:rounded-2xl px-3 sm:px-4 h-[52px] sm:h-[56px]">
                <input
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && handleSearch()}
                  placeholder="Hospital, Clinic, Doctor..."
                  className="flex-1 outline-none bg-transparent text-gray-700 text-sm sm:text-base"
                />

                <svg
                  className="w-5 h-5 text-blue-700"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2.5}
                  viewBox="0 0 24 24"
                >
                  <circle cx="11" cy="11" r="8" />
                  <path d="m21 21-4.35-4.35" />
                </svg>
              </div>
            </div>

            {/* Category */}
            <div className="lg:flex-1">
              <label className="lg:hidden block text-sm font-bold mb-2 text-gray-900">
                Category
              </label>

              <div className="flex items-center border border-gray-200 rounded-xl sm:rounded-2xl px-3 sm:px-4 h-[52px] sm:h-[56px]">
                <select
                  value={category}
                  onChange={handleCategoryChange}
                  className="flex-1 outline-none bg-transparent text-gray-600 appearance-none text-sm sm:text-base"
                >
                  <option value="">Select Category</option>
                  <option>Hospitals</option>
                  <option>Clinics</option>
                  <option>Doctors</option>
                  <option>Diagnostic Labs</option>
                  <option>Pharmacies</option>
                </select>

                <svg
                  className="w-4 h-4 text-gray-500 pointer-events-none"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  viewBox="0 0 24 24"
                >
                  <path d="m6 9 6 6 6-6" />
                </svg>
              </div>
            </div>

            {/* Location */}
            <div className="lg:flex-1">
              <label className="lg:hidden block text-sm font-bold mb-2 text-gray-900">
                Location
              </label>

              <div className="flex items-center border border-gray-200 rounded-xl sm:rounded-2xl px-3 sm:px-4 h-[52px] sm:h-[56px]">
                <select
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  className="flex-1 outline-none bg-transparent text-gray-600 appearance-none text-sm sm:text-base"
                >
                  <option value="">Select City</option>

                  {cities.map((city) => (
                    <option key={city}>{city}</option>
                  ))}
                </select>

                <svg
                  className="w-5 h-5 text-blue-700 pointer-events-none"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" />
                  <circle cx="12" cy="9" r="2.5" />
                </svg>
              </div>
            </div>

            {/* Search Button */}
            <button
              onClick={handleSearch}
              className="h-[52px] sm:h-[56px] px-6 sm:px-8 bg-blue-700 hover:bg-blue-800 text-white rounded-xl sm:rounded-2xl flex items-center justify-center gap-2 font-semibold transition-all duration-200 lg:min-w-[130px] text-sm sm:text-base"
            >
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                strokeWidth={2.5}
                viewBox="0 0 24 24"
              >
                <circle cx="11" cy="11" r="8" />
                <path d="m21 21-4.35-4.35" />
              </svg>
              Search
            </button>
          </div>

          {/* Popular Searches */}
          <div className="mt-5 sm:mt-6 flex flex-wrap items-center gap-2 sm:gap-3">
            <div className="flex items-center gap-2 font-bold text-gray-900 text-sm">
              <svg
                className="w-4 h-4 text-blue-700"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 2c0 0-5 5.5-5 10a5 5 0 0 0 10 0C17 7.5 12 2 12 2z" />
              </svg>
              Popular Searches
            </div>

            {popularSearches.map((item) => (
              <button
                key={item.label}
                onClick={() => handlePopularSearch(item)}
                className="px-4 sm:px-5 py-2 border border-gray-300 rounded-full bg-white text-gray-800 text-xs sm:text-sm font-medium hover:border-blue-500 hover:text-blue-700 hover:bg-blue-50 transition"
              >
                {item.label}
              </button>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}