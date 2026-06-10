export const popularSearches = [
  "Cardiologist", "Orthopedic", "Gynecologist",
  "Pediatrician", "Dermatologist", "Dentist", "Neurologist",
];

export const listings = [
  { name: "Apollo Hospital", category: "Multi-Specialty", city: "Mumbai", rating: 4.9, reviews: 2341, badge: "Top Rated", image: "https://images.pexels.com/photos/263402/pexels-photo-263402.jpeg?w=400" },
  { name: "Lilavati Hospital", category: "Super Specialty", city: "Bandra", rating: 4.8, reviews: 1890, badge: "Open 24/7", image: "https://images.pexels.com/photos/236380/pexels-photo-236380.jpeg?w=400" },
  { name: "Kokilaben Hospital", category: "Cancer Centre", city: "Andheri", rating: 4.7, reviews: 1540, badge: "New", image: "https://images.pexels.com/photos/668300/pexels-photo-668300.jpeg?w=400" },
  { name: "Fortis Hiranandani", category: "Cardiac Care", city: "Vashi", rating: 4.8, reviews: 987, badge: "Emergency", image: "https://images.pexels.com/photos/247786/pexels-photo-247786.jpeg?w=400" },
  { name: "Nanavati Hospital", category: "General Hospital", city: "Vile Parle", rating: 4.6, reviews: 1230, badge: "Govt. Aid", image: "https://images.pexels.com/photos/1692693/pexels-photo-1692693.jpeg?w=400" },
];

export const cities = [
  { name: "Pune", listings: "1200+", image: "https://images.pexels.com/photos/3573382/pexels-photo-3573382.jpeg?w=400" },
  { name: "Mumbai", listings: "2500+", image: "https://images.pexels.com/photos/2695679/pexels-photo-2695679.jpeg?w=400" },
  { name: "Nagpur", listings: "900+", image: "https://images.pexels.com/photos/1007426/pexels-photo-1007426.jpeg?w=400" },
  { name: "Nashik", listings: "800+", image: "https://images.pexels.com/photos/3889843/pexels-photo-3889843.jpeg?w=400" },
  { name: "Aurangabad", listings: "700+", image: "https://images.pexels.com/photos/1603650/pexels-photo-1603650.jpeg?w=400" },
];

export const badgeColors = {
  "Top Rated": "bg-[#B5D4F4] text-[#0C447C]",
  "Open 24/7": "bg-[#9FE1CB] text-[#085041]",
  "New": "bg-[#CECBF6] text-[#3C3489]",
  "Emergency": "bg-[#F5C4B3] text-[#712B13]",
  "Govt. Aid": "bg-[#C0DD97] text-[#27500A]",
};

export const stats = [
  { icon: "shield", number: "5000+", label: "Healthcare Providers" },
  { icon: "map-pin", number: "100+", label: "Cities Covered" },
  { icon: "users", number: "50+", label: "Categories" },
  { icon: "mood-smile", number: "1Lakh+", label: "Happy Users" },
];

export const reviews = [
  { name: "Rahul Sharma", review: "Very useful platform for finding hospitals." },
  { name: "Priya Patel", review: "Found a specialist doctor easily." },
  { name: "Amit Verma", review: "Excellent healthcare directory." },
];

export const homeData = {
  popularSearches,
  listings,
  cities,
  badgeColors,
  stats,
  reviews,
};