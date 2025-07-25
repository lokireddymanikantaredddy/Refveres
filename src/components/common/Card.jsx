import React from 'react';
import CopyButton from './CopyButton';

const Card = ({ 
  title, 
  code, 
  jsfiddleLink, 
  children,
  className = '',
  badgeColor = 'bg-emerald-700'
}) => {
  return (
    <div className={`relative w-full bg-[#0f172a] dark:text-white text-black rounded-2xl p-4 mb-6 shadow-lg ${className}`}>
      {title && (
        <div className={`absolute -top-3 right-4 text-sm ${badgeColor} text-white px-3 py-1 rounded-full`}>
          {title}
        </div>
      )}
      
      <div className="mt-6">
        {children || (
          <pre className="whitespace-pre-wrap overflow-auto text-sm font-mono">
            {code}
          </pre>
        )}
      </div>

      {(code || jsfiddleLink) && (
        <div className="flex justify-between items-center mt-4">
          {code && <CopyButton text={code} />}
          {jsfiddleLink && (
            <a
              href={jsfiddleLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-emerald-400 hover:text-emerald-300 text-sm underline"
            >
              Try it in JSFiddle
            </a>
          )}
        </div>
      )}
    </div>
  );
};

export default Card;