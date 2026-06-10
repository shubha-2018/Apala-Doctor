// src/data/Homedata.js

export const homeData = [
  {
    name: "Mumbai",
    image: "https://images.unsplash.com/photo-1595658658481-d53d3f999875",
    listings: 120,
  },
  {
    name: "Pune",
    image: "https://images.unsplash.com/photo-1609921212029-bb5a28e60960",
    listings: 95,
  },
  {
    name: "Nagpur",
    image: "https://images.unsplash.com/photo-1597040663342-45b6af2c3c04",
    listings: 70,
  },
];

export const listings = [
  {
    id: 1,
    name: "Apollo Hospital",
    image: "https://images.unsplash.com/photo-1586773860418-d37222d8fce3",
    badge: "Hospital",
    category: "Multi-speciality",
    city: "Mumbai",
    rating: 4.5,
    reviews: 120,
    type: "hospital",
    tags: ["24x7", "verified"],
    verified: true,
  },
  {
    id: 2,
    name: "City Clinic",
    image: "https://images.unsplash.com/photo-1580281658628-9e8c1b3c7b6b",
    badge: "Clinic",
    category: "General Care",
    city: "Pune",
    rating: 4.2,
    reviews: 80,
    type: "clinic",
    tags: ["open"],
    verified: false,
  },
  {
    id: 3,
    name: "MedPlus Pharmacy",
    image: "https://images.unsplash.com/photo-1587854692152-cbe660dbde88",
    badge: "Pharmacy",
    category: "Medical Store",
    city: "Nagpur",
    rating: 4.6,
    reviews: 200,
    type: "pharmacy",
    tags: ["24x7"],
    verified: true,
  },
];

export const badgeColors = {
  Hospital: "bg-red-100 text-red-600",
  Clinic: "bg-blue-100 text-blue-600",
  Pharmacy: "bg-green-100 text-green-600",
};