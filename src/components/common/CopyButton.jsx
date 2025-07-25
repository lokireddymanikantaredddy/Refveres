import React, { useState } from 'react';
import { FiCopy, FiCheck } from 'react-icons/fi';

const CopyButton = ({ 
  text, 
  className = '', 
  size = 'sm',
  iconOnly = false
}) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy text:', err);
    }
  };

  const sizeClasses = {
    sm: 'px-2 py-1 text-sm',
    md: 'px-3 py-1.5 text-base',
    lg: 'px-4 py-2 text-lg'
  };

  return (
    <button
      onClick={handleCopy}
      className={`flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-md transition-colors ${sizeClasses[size]} ${className}`}
      title={copied ? 'Copied!' : 'Copy to clipboard'}
    >
      {copied ? (
        <>
          <FiCheck className="w-4 h-4" />
          {!iconOnly && 'Copied'}
        </>
      ) : (
        <>
          <FiCopy className="w-4 h-4" />
          {!iconOnly && 'Copy'}
        </>
      )}
    </button>
  );
};

export default CopyButton;