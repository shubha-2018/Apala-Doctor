// src/data/homeData.js

export const popularSearches = [
  "Cardiologist", "Orthopedic", "Gynecologist",
  "Pediatrician", "Dermatologist", "Dentist", "Neurologist",
];

export const listings = [
  { name: "Apollo Hospital",    category: "Multi-Specialty",  city: "Mumbai",     rating: 4.9, reviews: 2341, badge: "Top Rated", image: "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?w=400&q=80" },
  { name: "Lilavati Hospital",  category: "Super Specialty",  city: "Bandra",     rating: 4.8, reviews: 1890, badge: "Open 24/7", image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=400&q=80" },
  { name: "Kokilaben Hospital", category: "Cancer Centre",    city: "Andheri",    rating: 4.7, reviews: 1540, badge: "New",       image: "https://images.unsplash.com/photo-1538108149393-fbbd81895907?w=400&q=80" },
  { name: "Fortis Hiranandani", category: "Cardiac Care",    city: "Vashi",      rating: 4.8, reviews: 987,  badge: "Emergency", image: "https://images.unsplash.com/photo-1516549655169-df83a0774514?w=400&q=80" },
  { name: "Nanavati Hospital",  category: "General Hospital", city: "Vile Parle", rating: 4.6, reviews: 1230, badge: "Govt. Aid", image: "https://images.unsplash.com/photo-1632833239869-a37e3a5806d2?w=400&q=80" },
];

export const cities = [
  { name: "Pune",       listings: "1200+", image: "https://images.unsplash.com/photo-1570168007204-dfb528c6958f?w=400&q=80" },
  { name: "Mumbai",     listings: "2500+", image: "https://images.unsplash.com/photo-1529253355930-ddbe423a2ac7?w=400&q=80" },
  { name: "Nagpur",     listings: "900+",  image: "https://images.unsplash.com/photo-1587474260584-136574528ed5?w=400&q=80" },
  { name: "Nashik",     listings: "800+",  image: "https://images.unsplash.com/photo-1567157577867-05ccb1388e66?w=400&q=80" },
  { name: "Aurangabad", listings: "700+",  image: "https://images.unsplash.com/photo-1564507592333-c60657eea523?w=400&q=80" },
];

export const badgeColors = {
  "Top Rated": "bg-[#B5D4F4] text-[#0C447C]",
  "Open 24/7": "bg-[#9FE1CB] text-[#085041]",
  "New":        "bg-[#CECBF6] text-[#3C3489]",
  "Emergency":  "bg-[#F5C4B3] text-[#712B13]",
  "Govt. Aid":  "bg-[#C0DD97] text-[#27500A]",
};

export const stats = [
  { icon: "shield",      number: "5000+",  label: "Healthcare Providers" },
  { icon: "map-pin",     number: "100+",   label: "Cities Covered" },
  { icon: "users",       number: "50+",    label: "Categories" },
  { icon: "mood-smile",  number: "1Lakh+", label: "Happy Users" },
];

export const reviews = [
  { name: "Rahul Sharma", review: "Very useful platform for finding hospitals." },
  { name: "Priya Patel",  review: "Found a specialist doctor easily." },
  { name: "Amit Verma",   review: "Excellent healthcare directory." },
];

// ✅ homeData export add केला — PopularCities.jsx साठी
export const homeData = {
  popularSearches,
  listings,
  cities,
  badgeColors,
  stats,
  reviews,
};