import { IconContext } from "react-icons";
import * as FeatherIcons from 'react-feather';
import { Link } from 'react-router-dom';
import { FiBox } from 'react-icons/fi';

const ItemCard = ({ name, icon, color }) => {
  let IconComponent = null;

  // If icon is a React component (direct import), use it directly
  if (typeof icon === "function" || typeof icon === "object") {
    IconComponent = icon;
  } else if (typeof icon === "string") {
    // Try react-icons/si (Simple Icons)
    try {
      const iconModule = require('react-icons/si');
      IconComponent = iconModule[`Si${icon.replace(/\s+/g, '')}`];
    } catch (e) {
      // ignore
    }

    // If not found, try FeatherIcons
    if (!IconComponent) {
      IconComponent = FeatherIcons[icon];
    }
  }

  // If still not found, use a generic fallback icon
  if (!IconComponent) {
    IconComponent = FiBox;
  }

  // Convert name to URL-friendly format
  let path = name.toLowerCase()
  .replace(/\+/g, 'plus')   // Replace + with plus
  .replace(/#/g, 'sharp')   // Replace # with sharp
  .replace(/[^a-z0-9]+/g, '-') // Replace other non-alphanumerics with -
  .replace(/^-+|-+$/g, ''); 

  return (
    <Link 
      to={path}
      className="block"
    >
      <div 
        className="flex items-center gap-1 py-3 px-10 rounded-md transition-all duration-200 cursor-pointer h-20 w-full hover:opacity-90 hover:shadow-lg"
        style={{ backgroundColor: color }}
      >
        <div className="flex-shrink-0 pl-2">
          <IconContext.Provider value={{ className: "text-white", size: "28" }}>
            <IconComponent />
          </IconContext.Provider>
        </div>
        <div className="flex-grow flex items-center justify-center pr-2">
          <span className="text-white text-sm font-medium text-center leading-tight">
            {name}
          </span>
        </div>
      </div>
    </Link>
  );
};

export default ItemCard;