// src/data/quickFiltersData.js

export const quickFilters = [
  { id: "hospitals", title: "Hospitals", color: "blue",   icon: "hospitals" },
  { id: "clinics",   title: "Clinics",   color: "green",  icon: "clinics"   },
  { id: "doctors",   title: "Doctors",   color: "pink",   icon: "doctors"   },
  { id: "pharmacy",  title: "Pharmacy",  color: "purple", icon: "pharmacy"  },
  { id: "labTests",  title: "Lab Tests", color: "yellow", icon: "labTests"  },
  { id: "dentist",   title: "Dentist",   color: "rose",   icon: "dentist"   },
  { id: "ambulance", title: "Ambulance", color: "lime",   icon: "ambulance" },
];

export const colorMap = {
  blue:   { bg: "bg-blue-100",    text: "text-blue-600",    hover: "group-hover:bg-blue-200"    },
  green:  { bg: "bg-emerald-100", text: "text-emerald-600", hover: "group-hover:bg-emerald-200" },
  pink:   { bg: "bg-orange-100",  text: "text-orange-600",  hover: "group-hover:bg-orange-200"  },
  purple: { bg: "bg-purple-100",  text: "text-purple-600",  hover: "group-hover:bg-purple-200"  },
  yellow: { bg: "bg-yellow-100",  text: "text-yellow-600",  hover: "group-hover:bg-yellow-200"  },
  rose:   { bg: "bg-pink-100",    text: "text-pink-600",    hover: "group-hover:bg-pink-200"    },
  lime:   { bg: "bg-green-100",   text: "text-green-600",   hover: "group-hover:bg-green-200"   },
};