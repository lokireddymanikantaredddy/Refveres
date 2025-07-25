import { FaSass } from 'react-icons/fa';

export const sassContent = {
  icon: FaSass,
  title: 'SASS',
  color: '#CC6699',
  description: 'A comprehensive SASS reference covering variables, nesting, mixins, functions, control directives, inheritance, operators, and advanced features.',
  sections: [
    // 1. SASS Basics
    {
      id: 'basics',
      title: 'SASS Basics',
      examples: [
        {
          title: 'Variables',
          code: `// Define variables
$primary-color: #3498db;
$secondary-color: #2ecc71;
$font-stack: Helvetica, sans-serif;
$max-width: 1200px;

// Use variables
body {
  font-family: $font-stack;
  color: $primary-color;
}

.container {
  max-width: $max-width;
  margin: 0 auto;
}`,
          explanation: 'Variables store values for reuse throughout stylesheets. They start with $ and can hold colors, fonts, sizes, or any CSS value. Variables make styles more maintainable.'
        },
        {
          title: 'Nesting',
          code: `// SCSS nesting
nav {
  ul {
    margin: 0;
    padding: 0;
    list-style: none;
    
    li {
      display: inline-block;
      
      a {
        text-decoration: none;
        padding: 6px 12px;
        
        &:hover {
          color: $primary-color;
        }
      }
    }
  }
}

// Compiled CSS
nav ul { /* ... */ }
nav ul li { /* ... */ }
nav ul li a { /* ... */ }
nav ul li a:hover { /* ... */ }`,
          explanation: 'Nesting mirrors HTML structure, making stylesheets more readable. The & parent selector references the current parent. Avoid excessive nesting (max 3-4 levels).'
        },
        {
          title: 'Partials & Import',
          code: `// _variables.scss (partial)
$primary-color: #3498db;
$secondary-color: #2ecc71;

// _mixins.scss (partial)
@mixin transform($property) {
  -webkit-transform: $property;
  -ms-transform: $property;
  transform: $property;
}

// main.scss
@import 'variables';
@import 'mixins';

.box {
  @include transform(rotate(30deg));
  background: $primary-color;
}`,
          explanation: 'Partials (files starting with _) are not compiled to CSS. @import combines multiple files into one. Imports can be nested within rules.'
        }
      ]
    },
    // 2. Mixins & Functions
    {
      id: 'mixins-functions',
      title: 'Mixins & Functions',
      examples: [
        {
          title: 'Mixins',
          code: `// Define mixin with parameters
@mixin border-radius($radius) {
  -webkit-border-radius: $radius;
  -moz-border-radius: $radius;
  -ms-border-radius: $radius;
  border-radius: $radius;
}

// Mixin with default value
@mixin box-shadow($x: 0, $y: 0, $blur: 5px, $color: rgba(0,0,0,0.5)) {
  -webkit-box-shadow: $x $y $blur $color;
  -moz-box-shadow: $x $y $blur $color;
  box-shadow: $x $y $blur $color;
}

// Using mixins
.button {
  @include border-radius(5px);
  @include box-shadow($y: 10px, $color: rgba(0,0,0,0.2));
}`,
          explanation: 'Mixins let you reuse style declarations. Can accept parameters and default values. Great for vendor prefixes and complex style patterns.'
        },
        {
          title: 'Functions',
          code: `// Built-in functions
$base-color: #036;
$light-color: lighten($base-color, 30%);
$dark-color: darken($base-color, 20%);
$transparent-color: transparentize($base-color, 0.5);

// Custom function
@function em($pixels, $context: 16px) {
  @return ($pixels / $context) * 1em;
}

// Using functions
body {
  font-size: em(16px); // 1em
  h1 {
    font-size: em(32px); // 2em
  }
}`,
          explanation: 'Functions compute and return values. SASS has built-in color, string, list, and math functions. Custom functions start with @function.'
        }
      ]
    },
    // 3. Control Directives
    {
      id: 'control-directives',
      title: 'Control Directives',
      examples: [
        {
          title: '@if, @else, @else if',
          code: `// Simple conditional
@mixin text-color($color) {
  @if lightness($color) > 50% {
    color: #000;
  } @else {
    color: #fff;
  }
}

// Multiple conditions
@mixin triangle($size, $color, $direction) {
  width: 0;
  height: 0;
  
  @if $direction == up {
    border-left: $size solid transparent;
    border-right: $size solid transparent;
    border-bottom: $size solid $color;
  } @else if $direction == down {
    border-left: $size solid transparent;
    border-right: $size solid transparent;
    border-top: $size solid $color;
  } @else {
    @error "Unknown direction #{$direction}";
  }
}

// Usage
.box {
  @include text-color(#777);
  @include triangle(10px, #333, up);
}`,
          explanation: '@if/@else directives conditionally include styles. @error prints error messages. Useful for mixins with multiple configuration options.'
        },
        {
          title: '@for, @each, @while',
          code: `// @for loop
@for $i from 1 through 12 {
  .col-#{$i} {
    width: $i * (100% / 12);
  }
}

// @each loop
$social-colors: (
  facebook: #3b5998,
  twitter: #1da1f2,
  instagram: #e1306c
);

@each $name, $color in $social-colors {
  .btn-#{$name} {
    background-color: $color;
  }
}

// @while loop
$i: 1;
@while $i <= 5 {
  .mt-#{$i} { margin-top: #{$i}rem; }
  $i: $i + 1;
}`,
          explanation: 'Loops generate repetitive styles. @for counts through ranges. @each iterates over lists/maps. @while repeats until condition is met.'
        }
      ]
    },
    // 4. Inheritance & Operators
    {
      id: 'inheritance-operators',
      title: 'Inheritance & Operators',
      examples: [
        {
          title: '@extend',
          code: `// Base styles
%message-shared {
  border: 1px solid #ccc;
  padding: 10px;
  margin: 10px 0;
}

.success {
  @extend %message-shared;
  border-color: green;
}

.error {
  @extend %message-shared;
  border-color: red;
}

.warning {
  @extend %message-shared;
  border-color: yellow;
}

// Compiled CSS
.message-shared, .success, .error, .warning {
  border: 1px solid #ccc;
  padding: 10px;
  margin: 10px 0;
}
.success { border-color: green; }
.error { border-color: red; }
.warning { border-color: yellow; }`,
          explanation: '@extend shares styles between selectors. Placeholder selectors (%) only output when extended. More efficient than mixins for purely static rules.'
        },
        {
          title: 'Operators',
          code: `// Math operations
.container {
  width: 100% - 30px;
  padding: 10px * 2;
  font-size: 12px + 2px;
}

// Color operations
$primary: #036;
.header {
  background-color: $primary + #222;
  color: rgba($primary, 0.7);
}

// String operations
$prefix: "my-";
.#{$prefix}button {
  // ...
}

// Comparison and boolean
@if $width > 800px and $columns == 12 {
  // ...
}`,
          explanation: 'SASS supports math, color, string, and boolean operations. Math preserves units. Color operations modify RGB channels separately.'
        }
      ]
    },
    // 5. Advanced Features
    {
      id: 'advanced',
      title: 'Advanced Features',
      examples: [
        {
          title: 'Maps',
          code: `// Define map
$theme-colors: (
  primary: #3498db,
  secondary: #2ecc71,
  danger: #e74c3c,
  warning: #f39c12
);

// Access map values
.button {
  background-color: map-get($theme-colors, primary);
}

// Iterate over map
@each $name, $color in $theme-colors {
  .text-#{$name} {
    color: $color;
  }
}

// Map functions
$merged: map-merge($theme-colors, (info: #17a2b8));
$keys: map-keys($theme-colors);
$has-danger: map-has-key($theme-colors, danger);`,
          explanation: 'Maps store key-value pairs. Useful for theme colors, configurations. Access with map-get() or iterate with @each. Various map functions available.'
        },
        {
          title: 'Content Directives',
          code: `// @content in mixins
@mixin media($breakpoint) {
  @if $breakpoint == phone {
    @media (max-width: 600px) { @content; }
  } @else if $breakpoint == tablet {
    @media (max-width: 900px) { @content; }
  }
}

// Usage with content block
.hero {
  padding: 2rem;
  
  @include media(phone) {
    padding: 1rem;
  }
}

// Compiled CSS
.hero { padding: 2rem; }
@media (max-width: 600px) {
  .hero { padding: 1rem; }
}`,
          explanation: '@content passes style blocks to mixins. Essential for media query mixins. The block is inserted where @content appears.'
        },
        {
          title: 'Parent Selector Tricks',
          code: `// BEM syntax with &
.block {
  &__element {
    color: red;
    
    &--modifier {
      color: blue;
    }
  }
}

// Compiled to:
.block__element { color: red; }
.block__element--modifier { color: blue; }

// Contextual variations
.button {
  .sidebar & {
    width: 100%;
  }
}

// Compiled to:
.sidebar .button { width: 100%; }

// Suffixing
.icon {
  &-large { font-size: 2em; }
  &-small { font-size: 0.5em; }
}`,
          explanation: 'The & parent selector is extremely flexible. Can be used for BEM syntax, contextual styles, or class name manipulation.'
        }
      ]
    },
    // 6. Best Practices
    {
      id: 'best-practices',
      title: 'Best Practices',
      examples: [
        {
          title: 'Architecture (7-1 Pattern)',
          code: `sass/
|
|– abstracts/
|   |– _variables.scss    // Sass Variables
|   |– _functions.scss    // Sass Functions
|   |– _mixins.scss       // Sass Mixins
|   |– _placeholders.scss // Sass Placeholders
|
|– base/
|   |– _reset.scss        // Reset/normalize
|   |– _typography.scss   // Typography rules
|   |– _base.scss         // Global styles
|
|– components/
|   |– _buttons.scss      // Buttons
|   |– _carousel.scss     // Carousel
|   |– _slider.scss       // Slider
|
|– layout/
|   |– _navigation.scss   // Navigation
|   |– _grid.scss         // Grid system
|   |– _header.scss       // Header
|   |– _footer.scss       // Footer
|   |– _sidebar.scss      // Sidebar
|
|– pages/
|   |– _home.scss         // Home specific styles
|   |– _contact.scss      // Contact specific styles
|
|– themes/
|   |– _theme.scss        // Default theme
|   |– _admin.scss        // Admin theme
|
|– vendors/
|   |– _bootstrap.scss    // Bootstrap
|   |– _jquery-ui.scss    // jQuery UI
|
-– main.scss              // Main Sass file`,
          explanation: 'The 7-1 pattern organizes SASS into 7 folders and 1 main file. Abstracts contain helpers, base contains boilerplate, components contains UI elements, layout contains structural styles, pages contains page-specific styles, themes contains theme variations, and vendors contains third-party CSS.'
        },
        {
          title: 'Performance Tips',
          code: `// 1. Avoid deep nesting (max 3-4 levels)
.parent {
  .child {
    .grandchild {
      // Avoid this!
    }
  }
}

// 2. Use @extend for static styles
%clearfix {
  &:after {
    content: "";
    display: table;
    clear: both;
  }
}

// 3. Minimize @import in nested contexts
// Bad:
.container {
  @import 'component';
}

// 4. Use mixins for dynamic styles
@mixin transition($properties...) {
  @if length($properties) == 0 {
    $properties: all 0.3s ease;
  }
  transition: $properties;
}

// 5. Split large files into partials`,
          explanation: 'Key performance tips: limit nesting depth to prevent overly specific selectors, use @extend for static styles rather than mixins, avoid @import in nested contexts, use mixins for dynamic styles, and organize code into partials.'
        }
      ]
    },
    // 7. SASS vs SCSS
    {
      id: 'sass-vs-scss',
      title: 'SASS vs SCSS',
      examples: [
        {
          title: 'Syntax Comparison',
          code: `// SCSS Syntax (Sassy CSS)
$primary-color: #333;

body {
  color: $primary-color;
  
  .container {
    width: 100%;
  }
}

// SASS Syntax (Indented)
$primary-color: #333

body
  color: $primary-color
  
  .container
    width: 100%

// Both compile to:
body {
  color: #333;
}
body .container {
  width: 100%;
}`,
          explanation: 'SCSS uses CSS-like syntax with braces and semicolons. SASS uses indentation and omits braces/semicolons. SCSS is more popular and recommended for new projects as it\'s closer to regular CSS.'
        }
      ]
    },
    // 8. Frameworks & Tools
    {
      id: 'frameworks-tools',
      title: 'Frameworks & Tools',
      examples: [
        {
          title: 'Popular SASS Frameworks',
          code: `// Bootstrap SASS
@import "bootstrap/scss/bootstrap";

// Customizing Bootstrap
$theme-colors: (
  primary: #3498db,
  secondary: #2ecc71
);

// Bourbon mixin library
@import "bourbon/bourbon";
.element {
  @include linear-gradient(to top, red, blue);
}

// Susy grid system
@import "susy/susy";
$susy: (
  columns: 12,
  gutters: 1/4
);`,
          explanation: 'Popular SASS frameworks include Bootstrap SASS (for customization), Bourbon (mixin library), Susy (grid system), and Compass (now deprecated). These provide pre-built mixins and components.'
        },
        {
          title: 'Build Tools',
          // eslint-disable-next-line no-useless-escape
          code: `// Using with Node-sass
const sass = require('node-sass');
sass.render({
  file: 'styles/main.scss',
  outputStyle: 'compressed'
}, (err, result) => {
  // Handle result
});

// Webpack config
module.exports = {
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader'
        ]
      }
    ]
  }
};

// Gulp task
const gulp = require('gulp');
const sass = require('gulp-sass');

gulp.task('sass', () => {
  return gulp.src('./sass/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./css'));
});`,
          explanation: 'Common build tools for SASS include node-sass (Node binding), sass-loader (Webpack), gulp-sass (Gulp plugin), and the Dart Sass CLI. These compile SASS to CSS during development/build processes.'
        }
      ]
    }
  ]
};