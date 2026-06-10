import { cities } from "../data/homeData.js";

export default function PopularCities() {
  return (
    <section className="py-6 sm:py-8 lg:py-10 px-3 sm:px-4 md:px-6 lg:px-10 bg-white">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="flex items-center justify-between mb-5">
          <h2 className="text-lg sm:text-xl font-bold text-gray-900">
            Popular Cities in Maharashtra
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

        {/* Cities Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          {cities.map((city, index) => (
            <div
              key={index}
              className="group relative h-[220px] sm:h-[220px] md:h-[210px] lg:h-[200px] rounded-[18px] overflow-hidden cursor-pointer hover:-translate-y-1.5 transition-transform duration-200"
            >
              <img
                src={city.image}
                alt={city.name}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

              <span className="absolute top-2.5 right-2.5 bg-white/90 text-blue-700 text-[10px] sm:text-[11px] font-semibold px-2.5 py-1 rounded-full">
                {city.listings} listings
              </span>

              <div className="absolute bottom-0 left-0 right-0 px-3.5 pb-4">
                <h3 className="font-semibold text-sm sm:text-[15px] text-white mb-1">
                  {city.name}
                </h3>

                <p className="flex items-center gap-1 text-[11px] text-white/80">
                  <svg
                    className="w-3 h-3 shrink-0"
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

                  Maharashtra
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}