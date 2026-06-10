import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaHeart,
  FaPlus,
  FaHeartbeat,
} from "react-icons/fa";

export default function Header() {
  return (
    <header className="bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4">

        <div className="h-24 flex flex-col lg:flex-row items-center justify-between gap-4">

          {/* Logo */}
          <div className="flex items-center gap-3">

            <div className="bg-blue-700 text-white p-3 rounded-xl">
              <FaHeartbeat className="text-3xl" />
            </div>

            <div>
              <h1 className="text-3xl font-extrabold text-blue-700 leading-none">
                AAPLE
              </h1>

              <h2 className="text-sm font-bold tracking-wider text-gray-800">
                DOCTOR
              </h2>

              <p className="text-xs text-gray-500">
                Find • Connect • Care
              </p>
            </div>

          </div>

        {/* Location 
          <div className="hidden md:flex items-center gap-3 border border-gray-200 px-6 py-3 rounded-xl hover:border-blue-600 transition cursor-pointer">

            <FaMapMarkerAlt className="text-blue-700" />

            <span className="font-medium text-gray-700">
              Maharashtra
            </span>

          </div>

          {/* Right *
          <div className="flex items-center gap-4 lg:gap-6 flex-wrap justify-center">

            <div className="hidden md:flex items-center gap-2">
              <FaPhoneAlt className="text-blue-700" />

              <div>
                <p className="text-xs text-gray-500">
                  Call Us
                </p>

                <p className="font-semibold text-gray-800">
                  24/7
                </p>
              </div>
            </div>

            <div className="hidden sm:flex items-center gap-2 text-gray-700">
              <FaHeart className="text-blue-700" />
              <span>Saved</span>
            </div>

            <button className="bg-blue-700 hover:bg-blue-800 text-white px-5 py-3 rounded-xl font-medium flex items-center gap-2 transition">
              <FaPlus />
              Add Listing
            </button>

          </div>*/}

        </div>

      </div>
    </header>
  );
}   
   