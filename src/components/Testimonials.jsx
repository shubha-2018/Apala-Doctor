import { useState } from "react";

const features = [
  {
    icon: "🎥",
    title: "Online Consultations",
    desc: "Video & chat appointments with certified doctors anytime.",
  },
  {
    icon: "🛡️",
    title: "Trusted & Verified",
    desc: "All doctors are licensed and background-verified specialists.",
  },
  {
    icon: "📅",
    title: "Easy Appointments",
    desc: "Book, reschedule, or cancel appointments in seconds.",
  },
];

function FeatureCard({ icon, title, desc }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: hovered ? "#eef1fd" : "#ffffff",
        border: hovered ? "1.5px solid #4169E1" : "1px solid #e0e6f7",
        borderRadius: "16px",
        padding: "36px 24px 28px",
        textAlign: "center",
        cursor: "pointer",
        transform: hovered ? "translateY(-8px)" : "translateY(0)",
        boxShadow: hovered
          ? "0 12px 32px rgba(65, 105, 225, 0.15)"
          : "0 2px 8px rgba(0,0,0,0.04)",
        transition: "all 0.28s ease",
        flex: "1 1 280px",
        minWidth: "260px",
        maxWidth: "350px",
        width: "100%",
        boxSizing: "border-box",
      }}
    >
      {/* Icon Circle */}
      <div
        style={{
          width: "70px",
          height: "70px",
          borderRadius: "50%",
          background: hovered ? "#2a4ecf" : "#4169E1",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          margin: "0 auto 20px",
          fontSize: "28px",
          transform: hovered ? "scale(1.12)" : "scale(1)",
          transition: "all 0.28s ease",
        }}
      >
        {icon}
      </div>

      {/* Title */}
      <p
        style={{
          fontSize: "16px",
          fontWeight: "600",
          color: hovered ? "#2a4ecf" : "#4169E1",
          marginBottom: "10px",
          transition: "color 0.28s ease",
        }}
      >
        {title}
      </p>

      {/* Description */}
      <p
        style={{
          fontSize: "14px",
          color: "#777",
          lineHeight: "1.7",
          margin: 0,
        }}
      >
        {desc}
      </p>
    </div>
  );
}

export default function WhyChooseAppleDoctor() {
  return (
    <section
      style={{
        padding: "60px 16px",
        textAlign: "center",
        backgroundColor: "#f4f6fb",
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      }}
    >
      {/* Heading */}
      <h2
        style={{
          fontSize: "clamp(22px, 4vw, 36px)",
          fontWeight: "700",
          color: "#4169E1",
          marginBottom: "10px",
        }}
      >
        Why Choose Apple Doctor?
      </h2>

      {/* Subtitle */}
      <p
        style={{
          fontSize: "clamp(14px, 2vw, 16px)",
          color: "#666",
          marginBottom: "48px",
        }}
      >
        Your health, our priority — all in one place.
      </p>

      {/* Cards Grid */}
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "24px",
          maxWidth: "1100px",
          margin: "0 auto",
        }}
      >
        {features.map((feature) => (
          <FeatureCard key={feature.title} {...feature} />
        ))}
      </div>
    </section>
  );
}