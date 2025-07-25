import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import CopyButton from './CopyButton';

// Custom theme based on atomDark with more subtle comments
const customTheme = {
  ...atomDark,
  // Common comment styles for all languages
  'comment': {
    color: '#6b7280', // A more subtle gray color for comments
    fontStyle: 'normal' // Remove italic style from comments
  },
  'prolog': {
    color: '#6b7280',
    fontStyle: 'normal'
  },
  'doctype': {
    color: '#6b7280',
    fontStyle: 'normal'
  },
  'cdata': {
    color: '#6b7280',
    fontStyle: 'normal'
  },
  // Language-specific comment styles
  'comment.line': {
    color: '#6b7280',
    fontStyle: 'normal'
  },
  'comment.block': {
    color: '#6b7280',
    fontStyle: 'normal'
  },
  'comment.doc': {
    color: '#6b7280',
    fontStyle: 'normal'
  },
  'comment.documentation': {
    color: '#6b7280',
    fontStyle: 'normal'
  },
  'comment.multiline': {
    color: '#6b7280',
    fontStyle: 'normal'
  },
  'comment.singleline': {
    color: '#6b7280',
    fontStyle: 'normal'
  },
  'comment.hashbang': {
    color: '#6b7280',
    fontStyle: 'normal'
  },
  'comment.preproc': {
    color: '#6b7280',
    fontStyle: 'normal'
  },
  'comment.special': {
    color: '#6b7280',
    fontStyle: 'normal'
  }
};

// Language mapping for Prism.js
const LANGUAGE_MAP = {
  'js': 'javascript',
  'javascript': 'javascript',
  'py': 'python',
  'python': 'python',
  'html': 'html',
  'css': 'css',
  'git': 'bash',
  'c#': 'csharp',
  'csharp': 'csharp',
  'c++': 'cpp',
  'cpp': 'cpp',
  'c': 'c',
  'java': 'java',
  'ruby': 'ruby',
  'php': 'php',
  'go': 'go',
  'rust': 'rust',
  'swift': 'swift',
  'kotlin': 'kotlin',
  'typescript': 'typescript',
  'ts': 'typescript',
  'tsx': 'tsx',
  'jsx': 'jsx',
  'json': 'json',
  'yaml': 'yaml',
  'yml': 'yaml',
  'markdown': 'markdown',
  'md': 'markdown',
  'sql': 'sql',
  'bash': 'bash',
  'shell': 'bash',
  'sh': 'bash',
  'powershell': 'powershell',
  'ps': 'powershell',
  'xml': 'xml',
  'svg': 'svg',
  'diff': 'diff',
  'plaintext': 'plaintext',
  'text': 'plaintext'
};

const CodeBlock = ({ code, language, filename }) => {
  // Map language to proper Prism language name
  const getLanguage = (lang) => {
    if (!lang) return 'plaintext';
    
    const normalizedLang = lang.toLowerCase().trim();
    return LANGUAGE_MAP[normalizedLang] || 'plaintext';
  };

  return (
    <div className="relative rounded-lg overflow-hidden mb-4">
      <div className="bg-[#2d333b] px-4 py-2 text-gray-400 text-sm flex items-center justify-between">
        <span>{filename || `${language} example`}</span>
        <div className="flex items-center gap-4">
          <a
            href={`https://jsfiddle.net/`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-emerald-400 hover:text-emerald-300 text-sm"
          >
            Try it in JSFiddle
          </a>
          <CopyButton text={code} />
        </div>
      </div>
      <SyntaxHighlighter
        language={getLanguage(language)}
        style={customTheme}
        customStyle={{
          margin: 0,
          padding: '1rem',
          background: '#1b1f24',
        }}
        showLineNumbers={false}
        wrapLines={true}
        wrapLongLines={true}
      >
        {code}
      </SyntaxHighlighter>
    </div>
    
  );
};

export default CodeBlock; 