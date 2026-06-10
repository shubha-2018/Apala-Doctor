import {
  FaHospital,
  FaUserMd,
  FaHeartbeat,
  FaShieldAlt,
} from "react-icons/fa";

export default function About() {
  return (
    <div className="bg-gray-50 min-h-screen">

      {/* Hero Section */}
      <section className="bg-blue-100 py-12 sm:py-16 md:py-20 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto text-center">

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-blue-700">
            About Aaple Doctor
          </h1>

          <p className="max-w-3xl mx-auto text-base sm:text-lg text-gray-700">
            Connecting patients with trusted hospitals, doctors,
            clinics, pharmacies and healthcare services across India.
          </p>

        </div>
      </section>

      {/* About Company */}
      <section className="py-10 sm:py-14 md:py-16 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">

          {/* Image */}
          <div>
            <img
              src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1200"
              alt="Healthcare"
              className="rounded-2xl sm:rounded-3xl shadow-xl w-full"
            />
          </div>

          {/* Content */}
          <div>

            <span className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-xs sm:text-sm font-semibold">
              ABOUT US
            </span>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mt-5 mb-6">
              Your Trusted Healthcare Partner
            </h2>

            <p className="text-gray-600 leading-7 sm:leading-8 mb-5 text-sm sm:text-base">
              Aaple Doctor is a healthcare platform designed to help
              patients find the best hospitals, doctors, clinics,
              diagnostic centers, pharmacies, and emergency services
              nearby.
            </p>

            <p className="text-gray-600 leading-7 sm:leading-8 text-sm sm:text-base">
              Our mission is to make healthcare information easily
              accessible, reliable, and available to everyone. We aim
              to bridge the gap between patients and healthcare
              providers through technology.
            </p>

          </div>

        </div>
      </section>

      {/* Mission Vision */}
      <section className="py-10 sm:py-14 md:py-16 bg-white px-4 sm:px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">

          <div className="bg-blue-50 p-6 sm:p-8 rounded-2xl sm:rounded-3xl shadow-sm">
            <h3 className="text-xl sm:text-2xl font-bold text-blue-700 mb-4">
              Our Mission
            </h3>

            <p className="text-gray-600 leading-7 text-sm sm:text-base">
              To simplify healthcare access by connecting patients with
              trusted medical professionals and healthcare facilities
              across India.
            </p>
          </div>

          <div className="bg-blue-50 p-6 sm:p-8 rounded-2xl sm:rounded-3xl shadow-sm">
            <h3 className="text-xl sm:text-2xl font-bold text-blue-700 mb-4">
              Our Vision
            </h3>

            <p className="text-gray-600 leading-7 text-sm sm:text-base">
              To become India's most trusted healthcare discovery and
              appointment platform, helping millions receive better care.
            </p>
          </div>

        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-10 sm:py-14 md:py-16 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">

          <h2 className="text-center text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-8 sm:mb-12">
            Why Choose Us
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">

            <div className="bg-white p-6 sm:p-8 rounded-2xl sm:rounded-3xl shadow-md text-center hover:shadow-xl transition">
              <FaHospital className="text-4xl sm:text-5xl text-blue-700 mx-auto mb-5" />
              <h3 className="font-bold text-lg sm:text-xl mb-3">
                Verified Hospitals
              </h3>
              <p className="text-gray-600 text-sm sm:text-base">
                Find trusted hospitals and healthcare facilities.
              </p>
            </div>

            <div className="bg-white p-6 sm:p-8 rounded-2xl sm:rounded-3xl shadow-md text-center hover:shadow-xl transition">
              <FaUserMd className="text-4xl sm:text-5xl text-blue-700 mx-auto mb-5" />
              <h3 className="font-bold text-lg sm:text-xl mb-3">
                Expert Doctors
              </h3>
              <p className="text-gray-600 text-sm sm:text-base">
                Connect with qualified specialists and doctors.
              </p>
            </div>

            <div className="bg-white p-6 sm:p-8 rounded-2xl sm:rounded-3xl shadow-md text-center hover:shadow-xl transition">
              <FaHeartbeat className="text-4xl sm:text-5xl text-blue-700 mx-auto mb-5" />
              <h3 className="font-bold text-lg sm:text-xl mb-3">
                Better Care
              </h3>
              <p className="text-gray-600 text-sm sm:text-base">
                Access quality healthcare services quickly.
              </p>
            </div>

            <div className="bg-white p-6 sm:p-8 rounded-2xl sm:rounded-3xl shadow-md text-center hover:shadow-xl transition">
              <FaShieldAlt className="text-4xl sm:text-5xl text-blue-700 mx-auto mb-5" />
              <h3 className="font-bold text-lg sm:text-xl mb-3">
                Trusted Platform
              </h3>
              <p className="text-gray-600 text-sm sm:text-base">
                Secure and reliable healthcare information.
              </p>
            </div>

          </div>

        </div>
      </section>

    </div>
  );
}