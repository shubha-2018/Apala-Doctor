// src/components/Hero.jsx

import { useState, useEffect } from "react";
import s2 from "../assets/s2.png";
import s1 from "../assets/s1.png";
import h11 from "../assets/h11.png";

export default function Hero() {
  const images = [s2, s1, h11];
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) =>
      prev === 0 ? images.length - 1 : prev - 1
    );
  };

  return (
    <section className="w-full bg-slate-50 py-2 sm:py-3">
      <div className="max-w-7xl mx-auto px-2 sm:px-3 md:px-4">
        <div className="relative overflow-hidden rounded-xl sm:rounded-2xl lg:rounded-3xl shadow-xl bg-white">

          {/* Responsive Hero */}
          <div className="relative w-full aspect-[16/6] sm:aspect-[16/7] md:aspect-[16/6] lg:aspect-[16/5]">

            {/* Images */}
            {images.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`Banner ${index + 1}`}
                className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
                  currentSlide === index
                    ? "opacity-100"
                    : "opacity-0"
                }`}
              />
            ))}

            {/* Dots */}
            <div className="absolute bottom-2 sm:bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`rounded-full transition-all duration-300 ${
                    currentSlide === index
                      ? "w-6 sm:w-8 h-2 bg-blue-600"
                      : "w-2 h-2 bg-white/70"
                  }`}
                />
              ))}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}