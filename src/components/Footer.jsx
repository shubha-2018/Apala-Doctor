import React from "react";
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden text-white"
      style={{
        background: "linear-gradient(160deg, #0a1628 0%, #0d1f3c 40%, #0a1a33 70%, #071020 100%)",
      }}
    >
      {/* Soft radial glow accents */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute -top-20 -left-20 w-72 h-72 rounded-full"
          style={{ background: "radial-gradient(circle, rgba(59,130,246,0.12) 0%, transparent 70%)" }}
        />
        <div
          className="absolute top-10 right-0 w-80 h-80 rounded-full"
          style={{ background: "radial-gradient(circle, rgba(99,179,237,0.08) 0%, transparent 70%)" }}
        />
        <div
          className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[250px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(255,255,255,0.04) 0%, transparent 70%)" }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 py-8 sm:py-10 md:py-12">

        {/* Glass Container */}
        <div
          className="rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 shadow-2xl"
          style={{
            background: "rgba(255,255,255,0.04)",
            backdropFilter: "blur(16px)",
            WebkitBackdropFilter: "blur(16px)",
            border: "1px solid rgba(255,255,255,0.09)",
          }}
        >

          {/* Main Footer Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-5 gap-6 md:gap-8">

            {/* Logo Section — full width on mobile */}
            <div className="col-span-2 sm:col-span-2 lg:col-span-1 text-center sm:text-left">

              {/* SVG Logo */}
              <div className="flex justify-center sm:justify-start mb-4">
                <svg width="190" height="62" viewBox="0 0 190 62" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <linearGradient id="badgeGrad" x1="0" y1="0" x2="48" y2="48" gradientUnits="userSpaceOnUse">
                      <stop offset="0%" stopColor="#3b82f6" />
                      <stop offset="100%" stopColor="#1d4ed8" />
                    </linearGradient>
                    <linearGradient id="doctorGrad" x1="0" y1="0" x2="1" y2="0">
                      <stop offset="0%" stopColor="#60a5fa" />
                      <stop offset="100%" stopColor="#93c5fd" />
                    </linearGradient>
                  </defs>
                  {/* Icon badge */}
                  <rect x="0" y="4" width="48" height="48" rx="12" fill="url(#badgeGrad)" />
                  {/* Cross */}
                  <rect x="20" y="12" width="8" height="32" rx="3" fill="white" />
                  <rect x="10" y="22" width="28" height="8" rx="3" fill="white" />
                  {/* Heartbeat line */}
                  <polyline
                    points="5,40 12,40 16,32 21,48 25,36 29,40 43,40"
                    stroke="rgba(255,255,255,0.5)"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="none"
                  />
                  {/* AAPLE */}
                  <text x="58" y="27" fontFamily="'Segoe UI',system-ui,sans-serif" fontSize="18" fontWeight="700" letterSpacing="1.5" fill="white">AAPLE</text>
                  {/* DOCTOR */}
                  <text x="58" y="47" fontFamily="'Segoe UI',system-ui,sans-serif" fontSize="18" fontWeight="700" letterSpacing="1.5" fill="url(#doctorGrad)">DOCTOR</text>
                  {/* HEALTHCARE tagline */}
                  <text x="59" y="58" fontFamily="'Segoe UI',system-ui,sans-serif" fontSize="7" fontWeight="400" letterSpacing="3.5" fill="rgba(147,197,253,0.7)">HEALTHCARE</text>
                </svg>
              </div>

              <p className="text-blue-100 text-sm leading-6 max-w-xs mx-auto sm:mx-0" style={{ opacity: 0.8 }}>
                Find trusted hospitals, clinics, doctors, diagnostics,
                pharmacies and healthcare services across Maharashtra.
              </p>

              {/* Social Icons */}
              <div className="flex justify-center sm:justify-start gap-3 mt-5">
                {[FaFacebookF, FaInstagram, FaYoutube].map((Icon, i) => (
                  <a
                    key={i}
                    href="#"
                    className="w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300"
                    style={{
                      background: "rgba(255,255,255,0.08)",
                      border: "1px solid rgba(255,255,255,0.12)",
                    }}
                    onMouseEnter={e => e.currentTarget.style.background = "rgba(255,255,255,0.18)"}
                    onMouseLeave={e => e.currentTarget.style.background = "rgba(255,255,255,0.08)"}
                  >
                    <Icon />
                  </a>
                ))}
              </div>
            </div>

            {/* Company */}
            <div className="text-center sm:text-left">
              <h3 className="font-semibold text-white mb-4 text-base sm:text-lg">Company</h3>
              <ul className="space-y-3 text-blue-100 text-sm" style={{ opacity: 0.85 }}>
                {[["Home", "/"], ["About Us", "/about"], ["Contact", "/contact"], ["Careers", "/careers"]].map(([label, href]) => (
                  <li key={label}>
                    <a
                      href={href}
                      className="transition-colors duration-200"
                      onMouseEnter={e => e.currentTarget.style.color = "#fff"}
                      onMouseLeave={e => e.currentTarget.style.color = ""}
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div className="text-center sm:text-left">
              <h3 className="font-semibold text-white mb-4 text-base sm:text-lg">Services</h3>
              <ul className="space-y-3 text-blue-100 text-sm" style={{ opacity: 0.85 }}>
                {["Hospitals", "Doctors", "Clinics", "Diagnostics", "Pharmacies"].map(s => (
                  <li key={s}>{s}</li>
                ))}
              </ul>
            </div>

            {/* Cities */}
            <div className="text-center sm:text-left">
              <h3 className="font-semibold text-white mb-4 text-base sm:text-lg">Cities</h3>
              <ul className="space-y-3 text-blue-100 text-sm" style={{ opacity: 0.85 }}>
                {["Pune", "Mumbai", "Nagpur", "Nashik", "Aurangabad"].map(c => (
                  <li key={c}>{c}</li>
                ))}
              </ul>
            </div>

            {/* Legal */}
            <div className="text-center sm:text-left">
              <h3 className="font-semibold text-white mb-4 text-base sm:text-lg">Legal</h3>
              <ul className="space-y-3 text-blue-100 text-sm" style={{ opacity: 0.85 }}>
                {[["Privacy Policy", "/privacy"], ["Terms & Conditions", "/terms"], ["Cookie Policy", "/cookies"]].map(([label, href]) => (
                  <li key={label}>
                    <a
                      href={href}
                      className="transition-colors duration-200"
                      onMouseEnter={e => e.currentTarget.style.color = "#fff"}
                      onMouseLeave={e => e.currentTarget.style.color = ""}
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

          </div>

          {/* Bottom Section */}
          <div
            className="mt-8 pt-5"
            style={{ borderTop: "1px solid rgba(255,255,255,0.09)" }}
          >
            <div className="flex flex-col md:flex-row items-center justify-between gap-3 text-center md:text-left">
              <p className="text-blue-200 text-sm" style={{ opacity: 0.7 }}>
                © 2026 AAPLE DOCTOR. All Rights Reserved.
              </p>
              <p className="text-blue-200 text-sm" style={{ opacity: 0.7 }}>
                Trusted Healthcare Directory for Maharashtra
              </p>
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
}