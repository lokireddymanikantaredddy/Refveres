/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'programming': {
          light: '#E3F2FD',
          dark: '#1A237E',
        },
        'ai-tools': {
          light: '#E8F5E9',
          dark: '#1B5E20',
        },
        'linux': {
          light: '#E0F2F1',
          dark: '#004D40',
        },
        'keyboard': {
          light: '#FFF3E0',
          dark: '#E65100',
        },
      },
      animation: {
        'shine': 'shine 2s linear infinite',
      },
      keyframes: {
        shine: {
          '0%': { backgroundPosition: '200% 0' },
          '100%': { backgroundPosition: '-200% 0' },
        },
      },
    },
  },
  plugins: [],
} 