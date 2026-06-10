// src/components/PopularCities.jsx

import { homeData } from "../data/homeData";

export default function PopularCities() {
  const cities = homeData?.cities || [];

  return (
    <section className="py-6 sm:py-8 lg:py-10 px-3 sm:px-4 md:px-6 lg:px-10 bg-white">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="flex items-center justify-between mb-5">
          <h2 className="text-lg sm:text-xl font-bold text-gray-900">
            Popular Cities in Maharashtra
          </h2>
        </div>

        {/* Cities Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">

          {cities.map((city, index) => (
            <div
              key={index}
              className="group relative h-[220px] rounded-[18px] overflow-hidden cursor-pointer hover:-translate-y-1.5 transition-transform duration-200"
            >
              <img
                src={city.image || "https://images.unsplash.com/photo-1524492449090-1e60c9f4f2b4?w=800"}
                alt={city.name}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

              <span className="absolute top-2.5 right-2.5 bg-white/90 text-blue-700 text-[10px] font-semibold px-2.5 py-1 rounded-full">
                {city.listings || 0} listings
              </span>

              <div className="absolute bottom-0 left-0 right-0 px-3.5 pb-4">
                <h3 className="font-semibold text-sm text-white mb-1">
                  {city.name}
                </h3>

                <p className="flex items-center gap-1 text-[11px] text-white/80">
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