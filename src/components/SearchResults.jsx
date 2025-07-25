import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FiBook, FiHash } from 'react-icons/fi';

const SearchResults = ({ results, onResultClick, visible }) => {
  const navigate = useNavigate();

  if (!visible || results.length === 0) return null;

  const handleResultClick = (result) => {
    onResultClick();
    if (result.type === 'section') {
      navigate(result.path);
      setTimeout(() => {
        const element = document.getElementById(result.id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
          const navButton = document.querySelector(`button[data-section-id="${result.id}"]`);
          if (navButton) {
            navButton.click();
          }
        }
      }, 100);
    } else {
      navigate(result.path);
    }
  };

  return (
    <div className="absolute top-full left-0 right-0 mt-1 bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 max-h-96 overflow-y-auto z-50">
      {results.map((result, index) => (
        <button
          key={index}
          className="w-full text-left px-4 py-3 hover:bg-gray-100 dark:hover:bg-gray-700 flex items-center gap-3 border-b border-gray-200 dark:border-gray-700 last:border-0"
          onClick={() => handleResultClick(result)}
        >
          {result.type === 'section' ? (
            <FiHash className="text-gray-400 flex-shrink-0" />
          ) : (
            <FiBook className="text-gray-400 flex-shrink-0" />
          )}
          <div>
            <div className="font-medium text-gray-900 dark:text-gray-100">
              {result.title}
            </div>
            {result.type === 'section' && (
              <div className="text-sm text-gray-500 dark:text-gray-400">
                {result.parentTitle}
              </div>
            )}
          </div>
        </button>
      ))}
    </div>
  );
};

export default SearchResults; 