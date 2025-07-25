import React from 'react';
import CodeBlock from './CodeBlock';

const ExampleSection = ({ 
  title, 
  description, 
  code, 
  language = 'javascript', 
  filename, 
  children,
  className = '',
  showLineNumbers = false
}) => {
  return (
    <div className={`mb-8 dark:text-white text-black ${className}`}>
      <div className="mb-4">
        {title && <h3 className="text-xl font-bold dark:text-white text-black  mb-2">{title}</h3>}
        {description && <p className="text-gray-400">{description}</p>}
      </div>

      <div className="flex flex-col gap-4">
        {code && (
          <CodeBlock
            code={code}
            language={language}
            filename={filename}
            showLineNumbers={showLineNumbers}
          />
        )}
        {children && (
          <div className="bg-[#2d333b] rounded-lg p-4 w-full">
            {children}
          </div>
        )}
      </div>
    </div>
  );
};

export default ExampleSection;