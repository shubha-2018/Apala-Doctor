import { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

// ✅ Place your logo image in /src/assets/ and update the path below
import logo from "../assets/logo.jpeg"; // <-- update this path to your logo file

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-blue-700 shadow-lg">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">

        <div className="flex items-center justify-between h-16 sm:h-18 md:h-20">

          {/* ── Logo ── */}
          <Link
            to="/"
            className="flex items-center flex-shrink-0"
          >
            <img
              src={logo}
              alt="Majhe Doctor Logo"
              className="h-10 sm:h-12 md:h-14 w-auto object-contain bg-white rounded-xl px-2 py-1 shadow-md"
            />
          </Link>

          {/* ── Desktop Menu ── */}
          <div className="hidden md:flex items-center gap-6 lg:gap-10 xl:gap-12">
            <Link
              to="/"
              className="text-white font-medium hover:text-blue-200 transition duration-300"
            >
              Home
            </Link>

            <Link
              to="/about"
              className="text-white font-medium hover:text-blue-200 transition duration-300"
            >
              About
            </Link>

            <Link
              to="/contact"
              className="text-white font-medium hover:text-blue-200 transition duration-300"
            >
              Contact
            </Link>
          </div>

          {/* ── Desktop Login ── */}
          <div className="hidden md:block">
            <button className="bg-white text-blue-700 px-4 lg:px-5 py-2.5 rounded-xl font-semibold shadow-md hover:bg-gray-100 transition duration-300">
              Login
            </button>
          </div>

          {/* ── Mobile Menu Button ── */}
          <button
            className="md:hidden text-white text-2xl"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menu"
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>

        </div>
      </div>

      {/* ── Mobile Menu ── */}
      <div
        className={`md:hidden bg-blue-800 overflow-hidden transition-all duration-300 ease-in-out ${
          menuOpen ? "max-h-96" : "max-h-0"
        }`}
      >
        <div className="px-5 py-5 flex flex-col gap-4">

          <Link
            to="/"
            className="text-white text-base sm:text-lg hover:text-blue-200"
            onClick={() => setMenuOpen(false)}
          >
            Home
          </Link>

          <Link
            to="/about"
            className="text-white text-base sm:text-lg hover:text-blue-200"
            onClick={() => setMenuOpen(false)}
          >
            About
          </Link>

          <Link
            to="/contact"
            className="text-white text-base sm:text-lg hover:text-blue-200"
            onClick={() => setMenuOpen(false)}
          >
            Contact
          </Link>

          <button className="w-full bg-white text-blue-700 py-3 rounded-xl font-semibold shadow-md">
            Login
          </button>

        </div>
      </div>
    </nav>
  );
}