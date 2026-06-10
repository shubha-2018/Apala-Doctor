import React from "react";
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";
import logo from "../assets/logo.jpeg";

function Footer() {
  return (
    <footer style={{ background: "linear-gradient(160deg, #0a1628 0%, #0d1f3c 40%, #0a1a33 70%, #071020 100%)", color: "white", position: "relative", overflow: "hidden" }}>

      <div style={{ position: "relative", zIndex: 1, maxWidth: "1280px", margin: "0 auto", padding: "40px 24px" }}>

        <div style={{ background: "rgba(255,255,255,0.04)", borderRadius: "24px", padding: "32px", border: "1px solid rgba(255,255,255,0.09)" }}>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))", gap: "32px" }}>

            {/* Logo */}
            <div>
              <img
                src={logo}
                alt="Logo"
                style={{ height: "64px", width: "auto", borderRadius: "12px", marginBottom: "16px" }}
              />
              <p style={{ color: "#bfdbfe", fontSize: "14px", lineHeight: "1.6" }}>
                Find trusted hospitals, clinics, doctors, diagnostics, pharmacies and healthcare services across Maharashtra.
              </p>
              <div style={{ display: "flex", gap: "12px", marginTop: "20px" }}>
                <a href="#" style={{ width: "40px", height: "40px", borderRadius: "12px", display: "flex", alignItems: "center", justifyContent: "center", background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.12)", color: "white", textDecoration: "none" }}>
                  <FaFacebookF />
                </a>
                <a href="#" style={{ width: "40px", height: "40px", borderRadius: "12px", display: "flex", alignItems: "center", justifyContent: "center", background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.12)", color: "white", textDecoration: "none" }}>
                  <FaInstagram />
                </a>
                <a href="#" style={{ width: "40px", height: "40px", borderRadius: "12px", display: "flex", alignItems: "center", justifyContent: "center", background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.12)", color: "white", textDecoration: "none" }}>
                  <FaYoutube />
                </a>
              </div>
            </div>

            {/* Company */}
            <div>
              <h3 style={{ fontWeight: "600", color: "white", marginBottom: "16px", fontSize: "16px" }}>Company</h3>
              <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                <li style={{ marginBottom: "12px" }}><a href="/" style={{ color: "#bfdbfe", fontSize: "14px", textDecoration: "none" }}>Home</a></li>
                <li style={{ marginBottom: "12px" }}><a href="/about" style={{ color: "#bfdbfe", fontSize: "14px", textDecoration: "none" }}>About Us</a></li>
                <li style={{ marginBottom: "12px" }}><a href="/contact" style={{ color: "#bfdbfe", fontSize: "14px", textDecoration: "none" }}>Contact</a></li>
                <li style={{ marginBottom: "12px" }}><a href="/careers" style={{ color: "#bfdbfe", fontSize: "14px", textDecoration: "none" }}>Careers</a></li>
              </ul>
            </div>

            {/* Services */}
            <div>
              <h3 style={{ fontWeight: "600", color: "white", marginBottom: "16px", fontSize: "16px" }}>Services</h3>
              <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                <li style={{ marginBottom: "12px", color: "#bfdbfe", fontSize: "14px" }}>Hospitals</li>
                <li style={{ marginBottom: "12px", color: "#bfdbfe", fontSize: "14px" }}>Doctors</li>
                <li style={{ marginBottom: "12px", color: "#bfdbfe", fontSize: "14px" }}>Clinics</li>
                <li style={{ marginBottom: "12px", color: "#bfdbfe", fontSize: "14px" }}>Diagnostics</li>
                <li style={{ marginBottom: "12px", color: "#bfdbfe", fontSize: "14px" }}>Pharmacies</li>
              </ul>
            </div>

            {/* Cities */}
            <div>
              <h3 style={{ fontWeight: "600", color: "white", marginBottom: "16px", fontSize: "16px" }}>Cities</h3>
              <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                <li style={{ marginBottom: "12px", color: "#bfdbfe", fontSize: "14px" }}>Pune</li>
                <li style={{ marginBottom: "12px", color: "#bfdbfe", fontSize: "14px" }}>Mumbai</li>
                <li style={{ marginBottom: "12px", color: "#bfdbfe", fontSize: "14px" }}>Nagpur</li>
                <li style={{ marginBottom: "12px", color: "#bfdbfe", fontSize: "14px" }}>Nashik</li>
                <li style={{ marginBottom: "12px", color: "#bfdbfe", fontSize: "14px" }}>Aurangabad</li>
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h3 style={{ fontWeight: "600", color: "white", marginBottom: "16px", fontSize: "16px" }}>Legal</h3>
              <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                <li style={{ marginBottom: "12px" }}><a href="/privacy" style={{ color: "#bfdbfe", fontSize: "14px", textDecoration: "none" }}>Privacy Policy</a></li>
                <li style={{ marginBottom: "12px" }}><a href="/terms" style={{ color: "#bfdbfe", fontSize: "14px", textDecoration: "none" }}>Terms & Conditions</a></li>
                <li style={{ marginBottom: "12px" }}><a href="/cookies" style={{ color: "#bfdbfe", fontSize: "14px", textDecoration: "none" }}>Cookie Policy</a></li>
              </ul>
            </div>

          </div>

          {/* Bottom Bar */}
          <div style={{ marginTop: "32px", paddingTop: "20px", borderTop: "1px solid rgba(255,255,255,0.09)", display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: "12px" }}>

            <p style={{ color: "#93c5fd", fontSize: "14px", margin: 0 }}>
              © 2026 AAPLE DOCTOR. All Rights Reserved.
            </p>

            <a
              href="https://wisdomtechservices.in/"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#93c5fd", fontSize: "14px", textDecoration: "underline" }}
            >
              Designed &amp; Developed by Wishdom Tech IT Services
            </a>

          </div>

        </div>
      </div>
    </footer>
  );
}

export default Footer;