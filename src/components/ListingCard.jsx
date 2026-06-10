// src/components/ListingCard.jsx

import React from "react";

function StarIcon() {
  return (
    <svg className="w-3.5 h-3.5 inline" viewBox="0 0 20 20" fill="currentColor">
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
  );
}

function VerifiedIcon() {
  return (
    <svg className="w-4 h-4 text-blue-500 inline ml-1" viewBox="0 0 24 24" fill="currentColor">
      <path
        fillRule="evenodd"
        d="M8.603 3.799A4.49 4.49 0 0112 2.25c1.357 0 2.573.6 3.397 1.549a4.49 4.49 0 013.498 1.307 4.491 4.491 0 011.307 3.497A4.49 4.49 0 0121.75 12a4.49 4.49 0 01-1.549 3.397 4.491 4.491 0 01-1.307 3.497 4.491 4.491 0 01-3.497 1.307A4.49 4.49 0 0112 21.75a4.49 4.49 0 01-3.397-1.549 4.491 4.491 0 01-3.497-1.307 4.491 4.491 0 01-1.307-3.497A4.49 4.49 0 012.25 12c0-1.357.6-2.573 1.549-3.397a4.49 4.49 0 011.307-3.497 4.49 4.49 0 013.497-1.307zm7.007 6.387a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
        clipRule="evenodd"
      />
    </svg>
  );
}

function LocationIcon() {
  return (
    <svg className="w-3.5 h-3.5 text-gray-400 inline mr-1" viewBox="0 0 24 24" fill="currentColor">
      <path
        fillRule="evenodd"
        d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-2.034 3.875-5.06 3.875-8.977C20.144 7.053 16.322 3 12 3S3.856 7.053 3.856 10.366c0 3.917 1.931 6.943 3.875 8.977a19.58 19.58 0 002.683 2.282 16.975 16.975 0 001.125.742zM12 13.25a2.75 2.75 0 100-5.5 2.75 2.75 0 000 5.5z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export default function ListingCard({ item }) {
  return (
    <div className="bg-white border border-gray-100 rounded-2xl p-4 flex gap-4 hover:shadow-md transition-shadow duration-200">
      {/* Image */}
      <div className="flex-shrink-0">
        <img
          src={item.image}
          alt={item.name}
          className="w-28 h-28 md:w-36 md:h-36 rounded-xl object-cover"
          onError={(e) => {
            e.target.src =
              "https://images.unsplash.com/photo-1587351021759-3e566b6af7cc?w=300&q=80";
          }}
        />
      </div>

      {/* Content */}
      <div className="flex-1 min-w-0">
        {/* Name + Rating */}
        <div className="flex items-start justify-between gap-2 flex-wrap">
          <div>
            <h3 className="text-base md:text-lg font-bold text-gray-900 leading-tight">
              {item.name}
              {item.verified && <VerifiedIcon />}
            </h3>
            <p className="text-sm text-gray-500 mt-0.5">{item.type}</p>
          </div>
          <div className="bg-green-600 text-white text-sm font-bold px-2.5 py-1.5 rounded-lg flex items-center gap-1 flex-shrink-0">
            {item.rating} <StarIcon />
          </div>
        </div>

        {/* Reviews count */}
        <p className="text-xs text-gray-400 mt-0.5">({item.reviews} Reviews)</p>

        {/* Address */}
        <p className="text-sm text-gray-500 mt-2">
          <LocationIcon />
          {item.address}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mt-3">
          {item.tags.map((tag, i) => (
            <span
              key={i}
              className="text-xs text-gray-600 bg-gray-50 border border-gray-200 rounded-full px-3 py-1"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex gap-3 mt-4">
          <button className="flex items-center gap-2 border border-blue-600 text-blue-600 text-sm font-semibold px-4 py-2 rounded-lg hover:bg-blue-50 transition-colors">
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
              <path
                fillRule="evenodd"
                d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z"
                clipRule="evenodd"
              />
            </svg>
            Call Now
          </button>
          <button className="flex items-center gap-2 bg-blue-600 text-white text-sm font-semibold px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
              <path
                fillRule="evenodd"
                d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-2.034 3.875-5.06 3.875-8.977C20.144 7.053 16.322 3 12 3S3.856 7.053 3.856 10.366c0 3.917 1.931 6.943 3.875 8.977a19.58 19.58 0 002.683 2.282 16.975 16.975 0 001.125.742zM12 13.25a2.75 2.75 0 100-5.5 2.75 2.75 0 000 5.5z"
                clipRule="evenodd"
              />
            </svg>
            Location
          </button>
        </div>
      </div>
    </div>
  );
}