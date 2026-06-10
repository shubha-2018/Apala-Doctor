import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

function Contact() {
  return (
    <section className="bg-gray-100 py-6 sm:py-10 md:py-16 px-3 sm:px-4">
      <div className="max-w-7xl mx-auto">

        {/* Hero Section */}
        <div className="bg-blue-700 text-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12 text-center mb-8 sm:mb-10 shadow-lg">
          <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold">
            Contact Aaple Doctor Support
          </h1>

          <p className="mt-4 text-sm sm:text-base md:text-lg text-blue-100 max-w-3xl mx-auto">
            Get help with hospitals, doctors, diagnostics,
            medicines and healthcare services.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">

          {/* Contact Form */}
          <div className="bg-white p-5 sm:p-6 md:p-8 rounded-2xl sm:rounded-3xl shadow-md">

            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800 mb-3">
              Send a Healthcare Enquiry
            </h2>

            <p className="text-gray-500 mb-6 sm:mb-8 text-sm sm:text-base">
              Ask about hospitals, doctors, appointments,
              diagnostic services and healthcare assistance.
            </p>

            <form className="space-y-4 sm:space-y-5">

              <input
                type="text"
                placeholder="Your Name *"
                className="w-full border border-gray-300 rounded-xl px-4 py-3 sm:py-4 focus:outline-none focus:border-blue-700"
              />

              <input
                type="email"
                placeholder="Email Address *"
                className="w-full border border-gray-300 rounded-xl px-4 py-3 sm:py-4 focus:outline-none focus:border-blue-700"
              />

              <input
                type="text"
                placeholder="City"
                className="w-full border border-gray-300 rounded-xl px-4 py-3 sm:py-4 focus:outline-none focus:border-blue-700"
              />

              <textarea
                rows="6"
                placeholder="Tell us about your healthcare requirement *"
                className="w-full border border-gray-300 rounded-xl px-4 py-3 sm:py-4 focus:outline-none focus:border-blue-700 resize-none"
              ></textarea>

              <button
                type="submit"
                className="w-full bg-blue-700 hover:bg-blue-800 text-white py-3 sm:py-4 rounded-xl font-semibold transition"
              >
                Send Enquiry
              </button>

            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-4 sm:space-y-6">

            {/* Phone */}
            <div className="bg-white p-4 sm:p-6 rounded-2xl sm:rounded-3xl shadow-md flex items-center gap-3 sm:gap-4">
              <div className="bg-blue-700 text-white p-3 sm:p-4 rounded-xl flex-shrink-0">
                <FaPhoneAlt size={22} />
              </div>

              <div>
                <p className="text-gray-500 text-xs sm:text-sm">
                  Call for Healthcare Support
                </p>

                <h3 className="font-semibold text-sm sm:text-base md:text-lg">
                  +91 98765 43210
                </h3>
              </div>
            </div>

            {/* Email */}
            <div className="bg-white p-4 sm:p-6 rounded-2xl sm:rounded-3xl shadow-md flex items-center gap-3 sm:gap-4">
              <div className="bg-blue-700 text-white p-3 sm:p-4 rounded-xl flex-shrink-0">
                <FaEnvelope size={22} />
              </div>

              <div className="min-w-0">
                <p className="text-gray-500 text-xs sm:text-sm">
                  Email Support
                </p>

                <h3 className="font-semibold text-sm sm:text-base md:text-lg break-all">
                  support@aaplehealth.com
                </h3>
              </div>
            </div>

            {/* Address */}
            <div className="bg-white p-4 sm:p-6 rounded-2xl sm:rounded-3xl shadow-md flex items-center gap-3 sm:gap-4">
              <div className="bg-blue-700 text-white p-3 sm:p-4 rounded-xl flex-shrink-0">
                <FaMapMarkerAlt size={22} />
              </div>

              <div>
                <p className="text-gray-500 text-xs sm:text-sm">
                  Office Location
                </p>

                <h3 className="font-semibold text-sm sm:text-base md:text-lg">
                  Nagpur, Maharashtra
                </h3>
              </div>
            </div>

            {/* About */}
            <div className="bg-white p-5 sm:p-6 rounded-2xl sm:rounded-3xl shadow-md">

              <h3 className="text-blue-700 text-xl sm:text-2xl font-bold mb-4">
                Aaple Doctor
              </h3>

              <p className="text-gray-600 leading-6 sm:leading-7 text-sm sm:text-base">
                Aaple Health helps patients discover trusted hospitals,
                doctors, clinics, diagnostic centers and pharmacies
                across India. Our mission is to make healthcare more
                accessible and easier to find for everyone.
              </p>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Contact;