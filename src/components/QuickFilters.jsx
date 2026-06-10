// src/components/QuickFilters.jsx

import { useState } from "react";
import { quickFilters, colorMap } from "../data/quickFiltersData";
import ListingsPanel from "./ListingsPanel";

const iconMap = {
  hospitals: (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.6}
      className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21"
      />
    </svg>
  ),

  clinics: (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.6}
      className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
      />
    </svg>
  ),

  doctors: (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.6}
      className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
      />
    </svg>
  ),

  pharmacy: (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.6}
      className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9 12h6m-3-3v6"
      />
    </svg>
  ),

  labTests: (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.6}
      className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23-.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5"
      />
    </svg>
  ),

  dentist: (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.6}
      className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M15.182 15.182a4.5 4.5 0 01-6.364 0M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z"
      />
    </svg>
  ),

  ambulance: (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.6}
      className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12"
      />
    </svg>
  ),
};

export default function QuickFilters({
  activeCategory: externalCategory,
  onCategorySelect,
}) {
  const [internalCategory, setInternalCategory] = useState(null);
  const [expanded, setExpanded] = useState(false);

  const isControlled =
    externalCategory !== undefined &&
    onCategorySelect !== undefined;

  const activeCategory = isControlled
    ? externalCategory
    : internalCategory;

  const handleFilterClick = (id) => {
    if (isControlled) {
      onCategorySelect(id);
    } else {
      setInternalCategory((prev) =>
        prev === id ? null : id
      );
    }
  };

  const handleClose = () => {
    if (isControlled) {
      onCategorySelect(null);
    } else {
      setInternalCategory(null);
    }
  };

  const visibleFilters = expanded
    ? quickFilters
    : quickFilters.slice(0, 7);

  return (
    <>
      <section className="py-6 sm:py-8 lg:py-10 px-3 sm:px-4 md:px-6 lg:px-10 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto">

          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-5 sm:mb-7">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900">
              Quick Filters
            </h2>

            <button
              onClick={() => setExpanded(!expanded)}
              className="text-blue-600 text-sm font-semibold hover:underline flex items-center gap-1"
            >
              {expanded ? "Show Less" : "Expand More"}

              <svg
                className={`w-4 h-4 transition-transform ${
                  expanded ? "rotate-180" : ""
                }`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-3 sm:gap-4">
            {visibleFilters.map((item) => {
              const c = colorMap[item.color];
              const isActive = activeCategory === item.id;

              return (
                <button
                  key={item.id}
                  onClick={() => handleFilterClick(item.id)}
                  className={`group bg-white border rounded-xl sm:rounded-2xl py-4 sm:py-5 px-3 sm:px-4 flex flex-col items-center gap-2 sm:gap-3 transition-all duration-200 cursor-pointer hover:-translate-y-1 ${
                    isActive
                      ? "border-blue-400 shadow-md bg-blue-50"
                      : "border-gray-100 hover:bg-gray-50 hover:border-gray-200"
                  }`}
                >
                  <div
                    className={`${c.bg} ${c.text} ${c.hover} w-12 h-12 sm:w-14 sm:h-14 rounded-[14px] flex items-center justify-center transition-colors duration-200 [box-shadow:inset_1px_1px_0px_rgba(255,255,255,0.7),inset_-1px_-1px_0px_rgba(0,0,0,0.15)]`}
                  >
                    {iconMap[item.icon]}
                  </div>

                  <span
                    className={`text-xs sm:text-sm font-semibold text-center leading-tight transition-colors ${
                      isActive
                        ? "text-blue-700"
                        : "text-gray-700 group-hover:text-gray-900"
                    }`}
                  >
                    {item.title}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      <ListingsPanel
        activeCategory={activeCategory}
        onClose={handleClose}
      />
    </>
  );
}