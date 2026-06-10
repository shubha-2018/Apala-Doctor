// src/components/FeaturedListings.jsx

// import { listings, badgeColors } from "../data/homeData";
import { listings, badgeColors } from "../data/Homedata";

export default function FeaturedListings() {
  return (
    <section className="py-8 sm:py-10 lg:py-12 px-3 sm:px-4 md:px-6 lg:px-10 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="flex items-center justify-between mb-5 sm:mb-6">
          <h2 className="text-lg sm:text-xl font-bold text-gray-900">
            Explore by Category
          </h2>

          <a
            href="#"
            className="text-blue-600 text-xs sm:text-sm font-semibold hover:underline flex items-center gap-1"
          >
            View All

            <svg
              className="w-3 h-3 sm:w-4 sm:h-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </a>
        </div>

        {/* Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          {listings.map((item, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl border border-gray-100 hover:border-gray-200 hover:-translate-y-1 transition-all duration-200 overflow-hidden"
            >
              {/* Image */}
              <div className="relative h-[180px] sm:h-[170px] md:h-[160px] lg:h-[140px] xl:h-[110px] overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />

                <span
                  className={`absolute top-2 left-2 text-[9px] sm:text-[10px] font-semibold px-2 py-0.5 rounded-full ${
                    badgeColors[item.badge]
                  }`}
                >
                  {item.badge}
                </span>
              </div>

              {/* Content */}
              <div className="p-3">
                <h3 className="font-semibold text-sm text-gray-900 truncate">
                  {item.name}
                </h3>

                <p className="text-xs text-gray-400 mb-2">
                  {item.category}
                </p>

                <div className="flex items-center justify-between mb-3">
                  <span className="flex items-center gap-1 text-xs text-gray-500 truncate max-w-[55%]">
                    <svg
                      className="w-3 h-3 text-blue-500 shrink-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a2 2 0 01-2.828 0l-4.243-4.243a8 8 0 1111.314 0z"
                      />
                    </svg>
                    {item.city}
                  </span>

                  <span className="text-xs font-semibold text-amber-600 flex items-center gap-0.5">
                    ★ {item.rating}
                    <span className="text-gray-400 font-normal text-[10px]">
                      ({item.reviews})
                    </span>
                  </span>
                </div>

                <button className="w-full bg-blue-700 hover:bg-blue-800 text-white font-semibold py-2 rounded-lg text-xs sm:text-sm transition duration-200">
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}