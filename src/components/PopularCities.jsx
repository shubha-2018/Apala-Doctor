import { homeData } from "../data/Homedata";

export default function PopularCities() {
  return (
    <section className="py-6 px-4 bg-white">
      <div className="max-w-7xl mx-auto">

        <h2 className="text-xl font-bold mb-5">
          Popular Cities in Maharashtra
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {homeData.map((city, index) => (
            <div
              key={index}
              className="rounded-xl overflow-hidden shadow hover:shadow-lg transition"
            >
              <img
                src={city.image}
                alt={city.name}
                className="h-40 w-full object-cover"
              />

              <div className="p-3">
                <h3 className="font-semibold text-lg">{city.name}</h3>
                <p className="text-sm text-gray-500">
                  {city.listings} listings
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}