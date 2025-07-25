import React from "react";
import { useLocation } from "react-router-dom";

const slugToName = (slug) => {
  if (!slug) return "";
  // Remove leading/trailing slashes, split by dash, capitalize each word
  return slug
    .replace(/^\/+|\/+$/g, "")
    .replace(/plus/g, "+")
    .replace(/sharp/g, "#")
    .split("-")
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
};

const InProgress = ({
  message = "We're working hard to bring you this feature. Please check back later!"
}) => {
  const location = useLocation();
  const path = location.pathname.replace(/^\/+|\/+$/g, "");
  const pageName = slugToName(path);

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gradient-to-br from-blue-100 via-blue-200 to-blue-300 dark:from-gray-900 dark:via-gray-800 dark:to-gray-700 p-4">
      <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-lg px-8 py-10 max-w-md w-full flex flex-col items-center">
        {/* Animated Spinner */}
        <div className="mb-6">
          <span className="inline-block w-14 h-14 border-4 border-blue-400 border-t-transparent rounded-full animate-spin"></span>
        </div>
        {/* Heading */}
        <h1 className="text-2xl md:text-3xl font-bold text-blue-700 dark:text-blue-300 mb-3 text-center">
          {pageName ? `${pageName} Coming Soon!` : "Coming Soon!"}
        </h1>
        {/* Message */}
        <p className="text-gray-600 dark:text-gray-300 text-center mb-6">
          {message}
        </p>
        {/* Call to Action */}
        <button
          className="mt-2 px-6 py-2 rounded-lg bg-blue-500 hover:bg-blue-600 text-white font-semibold transition-colors duration-200 shadow-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          onClick={() => window.location.href = '/'}
        >
          Back to Home
        </button>
      </div>
    </div>
  );
};

export default InProgress;