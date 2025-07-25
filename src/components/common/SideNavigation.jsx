import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const SideNavigation = ({ 
  sections, 
  activeSection, 
  onSectionClick,
  className = '',
  title = 'Quick Navigation'
}) => {
  const location = useLocation();

  // Check for section ID in URL on mount and after navigation
  useEffect(() => {
    const hash = location.hash.replace('#', '');
    if (hash && sections.some(section => section.id === hash)) {
      onSectionClick(hash);
      const element = document.getElementById(hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location, sections, onSectionClick]);

  return (
    <nav className={`sticky top-24 bg-[#1b1f24] rounded-lg p-4 max-h-[85vh] overflow-y-auto ${className}`}>
      <h2 className="text-white font-semibold mb-4">{title}</h2>
      <ul className="space-y-2">
        {sections.map((section) => (
          <li key={section.id}>
            <button
              data-section-id={section.id}
              onClick={() => onSectionClick(section.id)}
              className={`w-full text-left px-3 py-2 rounded-lg transition-colors ${
                activeSection === section.id
                  ? 'bg-[#2d333b] text-white'
                  : 'text-gray-400 hover:text-white hover:bg-[#2d333b]'
              }`}
            >
              {section.title}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default SideNavigation;