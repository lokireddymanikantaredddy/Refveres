import { SiTailwindcss } from 'react-icons/si';

export const tailwindContent = {
  icon: SiTailwindcss,
  title: 'Tailwind CSS',
  color: '#38B2AC',
  description: 'A comprehensive Tailwind CSS reference covering core concepts, utility classes, responsive design, dark mode, customization, plugins, and advanced patterns.',
  sections: [
    // 1. Tailwind Fundamentals
    {
      id: 'fundamentals',
      title: 'Tailwind Fundamentals',
      examples: [
        {
          title: 'Utility-First Approach',
          code: `<!-- Traditional CSS -->
<div class="chat-notification">
  <div class="chat-notification-logo-wrapper">
    <img class="chat-notification-logo" src="/img/logo.svg">
  </div>
  <div class="chat-notification-content">
    <h4 class="chat-notification-title">ChitChat</h4>
    <p class="chat-notification-message">You have a new message!</p>
  </div>
</div>

<style>
  .chat-notification { /* ... */ }
  .chat-notification-logo-wrapper { /* ... */ }
  .chat-notification-logo { /* ... */ }
  .chat-notification-content { /* ... */ }
  .chat-notification-title { /* ... */ }
  .chat-notification-message { /* ... */ }
</style>

<!-- Tailwind CSS -->
<div class="max-w-sm mx-auto flex p-6 bg-white rounded-lg shadow-xl">
  <div class="flex-shrink-0">
    <img class="h-12 w-12" src="/img/logo.svg">
  </div>
  <div class="ml-6 pt-1">
    <h4 class="text-xl text-gray-900 leading-tight">ChitChat</h4>
    <p class="text-base text-gray-600 leading-normal">You have a new message!</p>
  </div>
</div>`,
          explanation: 'Tailwind uses utility classes directly in HTML instead of writing custom CSS. This approach provides constraints, reduces context switching, and makes designs more consistent.'
        },
        {
          title: 'Core Concepts',
          code: `<!-- Spacing -->
<div class="m-4 p-4 space-y-4">
  <div class="mb-2">Margin bottom 0.5rem</div>
  <div class="px-4">Padding left/right 1rem</div>
</div>

<!-- Colors -->
<button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
  Button
</button>

<!-- Typography -->
<h1 class="text-4xl font-bold text-gray-900 tracking-tight">
  Large Heading
</h1>

<!-- Flexbox -->
<div class="flex justify-between items-center">
  <div>Left</div>
  <div>Right</div>
</div>`,
          explanation: 'Tailwind provides utilities for spacing (m/p), colors (bg/text/border), typography (text/font/tracking), flexbox (flex/justify/items), and dozens of other CSS properties.'
        }
      ]
    },
    // 2. Responsive Design
    {
      id: 'responsive',
      title: 'Responsive Design',
      examples: [
        {
          title: 'Breakpoints',
          code: `<!-- Default (smallest screens) -->
<div class="text-sm bg-red-500">
  Small screens
</div>

<!-- sm (640px) -->
<div class="text-sm sm:text-base sm:bg-blue-500">
  Medium screens and up
</div>

<!-- md (768px) -->
<div class="text-sm md:text-lg md:bg-green-500">
  Large screens and up
</div>

<!-- lg (1024px) -->
<div class="text-sm lg:text-xl lg:bg-yellow-500">
  Extra large screens and up
</div>

<!-- xl (1280px) -->
<div class="text-sm xl:text-2xl xl:bg-purple-500">
  2XL screens and up
</div>

<!-- 2xl (1536px) -->
<div class="text-sm 2xl:text-3xl 2xl:bg-pink-500">
  Largest screens
</div>`,
          explanation: 'Tailwind uses mobile-first breakpoints. unprefixed utilities apply to all screens, prefixed utilities (sm:, md:, etc) apply at that breakpoint and up. Default breakpoints can be customized.'
        },
        {
          title: 'Responsive Patterns',
          code: `<!-- Stack vertically on mobile, row on desktop -->
<div class="flex flex-col md:flex-row">
  <div class="w-full md:w-1/2">Left</div>
  <div class="w-full md:w-1/2">Right</div>
</div>

<!-- Grid columns responsive to screen size -->
<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
  <div>Item 4</div>
</div>

<!-- Show/hide elements based on screen size -->
<div class="block md:hidden">Mobile only</div>
<div class="hidden md:block">Desktop only</div>`,
          explanation: 'Common responsive patterns include changing flex direction, adjusting grid columns, and conditionally showing elements. The gap utility handles consistent spacing.'
        }
      ]
    },
    // 3. Dark Mode
    {
      id: 'dark-mode',
      title: 'Dark Mode',
      examples: [
        {
          title: 'Implementing Dark Mode',
          code: `<!-- tailwind.config.js -->
module.exports = {
  darkMode: 'class', // or 'media'
  // ...
}

<!-- HTML -->
<html class="dark">
<body class="bg-white dark:bg-gray-900">
  <h1 class="text-gray-900 dark:text-white">Hello</h1>
  <p class="text-gray-600 dark:text-gray-300">
    This is dark mode enabled text
  </p>
</body>
</html>

<!-- Toggle with JavaScript -->
<button onclick="document.documentElement.classList.toggle('dark')">
  Toggle Dark Mode
</button>`,
          explanation: 'Dark mode can be system-preference based (media) or manually toggled (class). Use dark: prefix for dark mode variants. Typically combine with a JS toggle.'
        }
      ]
    },
    // 4. Customization
    {
      id: 'customization',
      title: 'Customization',
      examples: [
        {
          title: 'Configuration File',
          code: `// tailwind.config.js
module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#5eead4',
          DEFAULT: '#14b8a6',
          dark: '#0f766e',
        },
      },
      spacing: {
        '128': '32rem',
      }
    },
  },
  plugins: [],
}

<!-- Using custom values -->
<div class="bg-primary-dark text-primary-light p-128">
  Custom styled element
</div>`,
          explanation: 'The tailwind.config.js file lets you customize colors, spacing, fonts, breakpoints, and more. Use extend to add to defaults or override to replace them.'
        },
        {
          title: 'Arbitrary Values',
          code: `<!-- Arbitrary color -->
<div class="bg-[#1da1f2]">
  Twitter blue
</div>

<!-- Arbitrary width -->
<div class="w-[300px]">
  Fixed width
</div>

<!-- Arbitrary CSS -->
<div class="[mask-type:alpha]">
  Custom property
</div>`,
          explanation: 'Use square brackets for arbitrary values when needed. Works for colors, sizes, and even custom CSS properties. Avoid overusing in favor of configured values.'
        }
      ]
    },
    // 5. Hover, Focus & States
    {
      id: 'interactivity',
      title: 'Hover, Focus & States',
      examples: [
        {
          title: 'State Variants',
          code: `<!-- Hover -->
<button class="bg-blue-500 hover:bg-blue-700">
  Hover me
</button>

<!-- Focus -->
<input class="border focus:ring-2 focus:ring-blue-500">

<!-- Active -->
<button class="active:scale-95 transform transition">
  Press me
</button>

<!-- Disabled -->
<button class="bg-gray-500 disabled:opacity-50" disabled>
  Can't click
</button>

<!-- Group hover -->
<div class="group">
  <div class="group-hover:bg-blue-500">Hover over parent</div>
</div>`,
          explanation: 'Tailwind provides variants for hover, focus, active, disabled, and more. Group variants style children based on parent state. Requires enabling in config.'
        },
        {
          title: 'Transitions & Animations',
          code: `<!-- Basic transition -->
<button class="transition-colors duration-200 hover:bg-blue-500">
  Smooth color change
</button>

<!-- Custom transition -->
<div class="transition-all duration-300 ease-in-out transform hover:scale-105">
  Scale on hover
</div>

<!-- Animation -->
<div class="animate-bounce">Bouncing</div>
<div class="animate-pulse">Pulsing</div>

<!-- Custom animation -->
@keyframes spin {
  to { transform: rotate(360deg); }
}
module.exports = {
  theme: {
    extend: {
      animation: {
        spin: 'spin 3s linear infinite',
      }
    }
  }
}`,
          explanation: 'Tailwind includes transition utilities and basic animations. Custom animations can be added via config. Combine with transform for smooth interactions.'
        }
      ]
    },
    // 6. Layout & Flexbox/Grid
    {
      id: 'layout',
      title: 'Layout & Flexbox/Grid',
      examples: [
        {
          title: 'Flexbox',
          code: `<!-- Flex container -->
<div class="flex flex-wrap justify-between items-center gap-4">
  <!-- Flex items -->
  <div class="flex-none w-32">Item 1</div>
  <div class="flex-grow">Item 2</div>
  <div class="flex-shrink-0">Item 3</div>
</div>

<!-- Flex direction -->
<div class="flex flex-col sm:flex-row">
  <div>Top/Left</div>
  <div>Bottom/Right</div>
</div>

<!-- Flex alignment -->
<div class="flex items-start">
  <div>Top aligned</div>
</div>
<div class="flex items-center">
  <div>Center aligned</div>
</div>`,
          explanation: 'Tailwind provides comprehensive flexbox utilities. flex creates container, flex-wrap controls wrapping, justify-* aligns horizontally, items-* aligns vertically, and gap adds spacing.'
        },
        {
          title: 'CSS Grid',
          code: `<!-- Basic grid -->
<div class="grid grid-cols-3 gap-4">
  <div>1</div>
  <div>2</div>
  <div>3</div>
</div>

<!-- Responsive grid -->
<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
  <div>1</div>
  <div>2</div>
  <div>3</div>
  <div>4</div>
</div>

<!-- Grid placement -->
<div class="grid grid-cols-3 gap-4">
  <div class="col-span-2">Span 2 columns</div>
  <div class="row-span-2">Span 2 rows</div>
</div>

<!-- Grid template areas -->
<div class="grid grid-areas-layout">
  <div class="grid-in-header">Header</div>
  <div class="grid-in-main">Main</div>
  <div class="grid-in-sidebar">Sidebar</div>
</div>

/* tailwind.config.js */
module.exports = {
  theme: {
    extend: {
      gridTemplateAreas: {
        'layout': [
          'header header header',
          'main main sidebar',
        ],
      }
    }
  }
}`,
          explanation: 'Tailwind supports CSS Grid with utilities for creating grids (grid-cols-*), gaps (gap-*), placement (col-span-*), and template areas (requires config).'
        }
      ]
    },
    // 7. Plugins & Extensions
    {
      id: 'plugins',
      title: 'Plugins & Extensions',
      examples: [
        {
          title: 'Official Plugins',
          code: `// tailwind.config.js
const plugin = require('tailwindcss/plugin')

module.exports = {
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/line-clamp'),
    require('@tailwindcss/aspect-ratio'),
    plugin(function({ addUtilities }) {
      addUtilities({
        '.rotate-y-180': {
          transform: 'rotateY(180deg)',
        },
      })
    })
  ]
}

<!-- Using plugin utilities -->
<div class="prose">Typography styles</div>
<input class="form-input">Form styles</input>
<div class="line-clamp-3">Clamped text</div>
<div class="aspect-w-16 aspect-h-9">Aspect ratio</div>
<div class="rotate-y-180">Custom transform</div>`,
          explanation: 'Official plugins add typography styles, form controls, line clamping, and aspect ratios. Custom plugins can add new utilities, components, or variants.'
        }
      ]
    },
    // 8. Optimization
    {
      id: 'optimization',
      title: 'Optimization',
      examples: [
        {
          title: 'PurgeCSS',
          code: `// tailwind.config.js
module.exports = {
  purge: {
    content: [
      './src/**/*.html',
      './src/**/*.js',
      './src/**/*.jsx',
      './src/**/*.ts',
      './src/**/*.tsx',
    ],
    options: {
      safelist: ['bg-red-500', 'px-4'], // Always include
    }
  },
  // ...
}

// package.json
{
  "scripts": {
    "build": "NODE_ENV=production tailwindcss -o dist/tailwind.css --minify"
  }
}`,
          explanation: 'In production, Tailwind removes unused classes via PurgeCSS. Configure content sources to scan. safelist preserves classes. Minification further reduces file size.'
        },
        {
          title: 'JIT Mode',
          code: `// tailwind.config.js
module.exports = {
  mode: 'jit',
  purge: [
    './src/**/*.html',
    './src/**/*.js',
    // ...
  ],
  // ...
}`,
          explanation: 'Just-in-Time mode generates styles on-demand for faster builds and smaller files. Enables arbitrary value support and variant stacking out of the box.'
        }
      ]
    }
  ]
};