import React from 'react';
import Navbar from '../Navbar';


const PageHeader = ({ 
  title, 
  icon: Icon, 
  description,
  className = '',
  iconSize = 'w-12 h-12',
  iconBg = '',
  color
}) => {
  const iconStyle = color ? { backgroundColor: color } : undefined;

  return (
    <div className='pt-12' >
      <Navbar/>
    <div className={`mb-8 ${className}`} >
      <div className="flex items-center gap-4 mb-4" >
        {Icon && (
          <div 
            className={`${iconSize} rounded-lg flex items-center justify-center`}
            style={iconStyle}
          >
            <Icon className="w-6 h-6 text-white" />
          </div>
        )}
        <h1 className="text-3xl font-bold dark:text-blue-400 text-blue-600">{title}</h1>
      </div>
      {description && (
        <p className="dark:text-gray-400 text-gray-600 text-lg">{description}</p>
      )}
    </div>
    </div>
  );
};

export default PageHeader;