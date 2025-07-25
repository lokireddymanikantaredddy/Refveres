import { SiJquery } from "react-icons/si";

export const jqueryContent = {
  icon: SiJquery,
  title: 'jQuery',
  color: '#0769AD',
  description: 'A comprehensive jQuery reference covering DOM manipulation, event handling, AJAX, animations, utilities, plugins, and best practices for modern web development.',
  sections: [
    // 1. jQuery Basics
    {
      id: 'basics',
      title: 'jQuery Basics',
      examples: [
        {
          title: 'Document Ready & Selectors',
          code: `// Wait for DOM to be ready
$(document).ready(function() {
  // All jQuery code goes here
});

// Shorthand version
$(function() {
  // DOM ready
});

// Selecting elements
$('#header');          // ID selector
$('.menu-item');       // Class selector
$('div');              // Tag selector
$('input[type="text"]'); // Attribute selector
$('ul li:first');      // Pseudo-selector

// Chaining methods
$('p')
  .addClass('highlight')
  .css('color', 'blue')
  .text('Updated text');`,
          explanation: 'jQuery code should wait for the DOM to be ready before executing. jQuery uses CSS-style selectors to find elements. Methods can be chained together for concise code.'
        },
        {
          title: 'DOM Traversal',
          code: `// Navigating the DOM
$('#container').children();      // Immediate children
$('#item').parent();            // Direct parent
$('#item').parents('div');      // All ancestor divs
$('#item').closest('.wrapper'); // Closest ancestor with class
$('#item').next();              // Next sibling
$('#item').prev();              // Previous sibling
$('#item').siblings();          // All siblings
$('#list').find('li');          // Descendants matching selector

// Filtering selections
$('li').filter(':even');        // Even-indexed elements
$('div').not('.special');       // Exclude elements
$('input').first();             // First in selection
$('p').eq(2);                   // Third p element`,
          explanation: 'jQuery provides methods to navigate up, down, and sideways through the DOM tree. Traversal methods help refine selections and move between related elements.'
        }
      ]
    },
    // 2. DOM Manipulation
    {
      id: 'dom-manipulation',
      title: 'DOM Manipulation',
      examples: [
        {
          title: 'Content Manipulation',
          code: `// Getting and setting content
$('#element').html();           // Get HTML
$('#element').html('<p>New</p>'); // Set HTML
$('#element').text();           // Get text
$('#element').text('New text'); // Set text
$('input').val();              // Get form value
$('input').val('New value');   // Set form value

// Attributes and properties
$('img').attr('src');          // Get attribute
$('img').attr('src', 'new.jpg'); // Set attribute
$('input').prop('checked');    // Get property
$('input').prop('disabled', true); // Set property

// Classes and CSS
$('#box').addClass('active');
$('#box').removeClass('inactive');
$('#box').toggleClass('hidden');
$('#box').hasClass('special'); // Returns boolean
$('#box').css('color');        // Get CSS
$('#box').css('color', 'red'); // Set CSS`,
          explanation: 'jQuery provides simple methods to read and modify element content, attributes, properties, and styles. These methods handle cross-browser inconsistencies.'
        },
        {
          title: 'Creating & Inserting Elements',
          code: `// Creating new elements
const $newDiv = $('<div>', {
  id: 'new-box',
  class: 'container',
  text: 'Hello',
  css: { color: 'blue' }
});

// Inserting elements
$('#parent').append($newDiv);      // Inside, at end
$('#parent').prepend($newDiv);     // Inside, at start
$('#child').before($newDiv);       // Outside, before
$('#child').after($newDiv);        // Outside, after

// Wrapping elements
$('.item').wrap('<div class="wrap"></div>');
$('.items').wrapAll('<div class="group"></div>');
$('.content').wrapInner('<div class="inner"></div>');

// Removing elements
$('#old').remove();               // Remove completely
$('#temp').empty();               // Remove children only
$('#item').detach();              // Remove but keep data`,
          explanation: 'jQuery makes it easy to create new elements with attributes and insert them anywhere in the DOM. Various insertion methods provide precise placement control.'
        }
      ]
    },
    // 3. Event Handling
    {
      id: 'events',
      title: 'Event Handling',
      examples: [
        {
          title: 'Basic Event Binding',
          code: `// Standard event binding
$('#button').click(function() {
  console.log('Button clicked');
});

// Alternative syntax
$('#button').on('click', function() {
  console.log('Button clicked');
});

// Multiple events
$('#input').on('focus blur', function(e) {
  console.log(e.type + ' event occurred');
});

// Event object
$('#link').click(function(e) {
  e.preventDefault();
  console.log('Default action prevented');
});

// Namespaced events
$('#element').on('click.myNamespace', handler);
$('#element').off('click.myNamespace');`,
          explanation: 'jQuery provides consistent cross-browser event handling. The event object normalizes browser differences. Namespacing helps manage event handlers.'
        },
        {
          title: 'Delegated Events',
          code: `// Direct binding (only existing elements)
$('.item').click(function() {
  $(this).toggleClass('active');
});

// Delegated binding (works for future elements)
$('#container').on('click', '.item', function() {
  $(this).toggleClass('active');
});

// Document-level delegation
$(document).on('click', '.dynamic-element', function() {
  // Handle click even if element was added later
});

// Form events
$('form').submit(function(e) {
  e.preventDefault();
  // Handle form submission
});

// Keyboard events
$(document).keydown(function(e) {
  if (e.which === 27) { // ESC key
    $('#modal').hide();
  }
});`,
          explanation: 'Event delegation allows handling events for elements that don"t exist yet. This is essential for dynamic content. jQuery normalizes keyboard codes and form events.'
        }
      ]
    },
    // 4. Effects & Animations
    {
      id: 'effects',
      title: 'Effects & Animations',
      examples: [
        {
          title: 'Basic Effects',
          code: `// Showing and hiding
$('#box').show();        // Show immediately
$('#box').hide(400);     // Hide with 400ms animation
$('#box').toggle(300);   // Toggle visibility

// Fading
$('#box').fadeIn();
$('#box').fadeOut('slow');
$('#box').fadeToggle(200);
$('#box').fadeTo(500, 0.5); // Fade to specific opacity

// Sliding
$('#menu').slideDown();
$('#panel').slideUp('fast');
$('#drawer').slideToggle();

// Custom animations
$('#object').animate({
  left: '+=100px',
  opacity: 0.5,
  height: 'toggle'
}, 1000, 'linear', function() {
  // Animation complete callback
});`,
          explanation: 'jQuery provides built-in animations for common effects. All methods accept duration (ms or keywords), easing type, and completion callbacks.'
        },
        {
          title: 'Animation Control',
          code: `// Queueing animations
$('#box')
  .animate({ left: '200px' }, 1000)
  .animate({ top: '200px' }, 1000)
  .delay(500)
  .fadeOut();

// Stopping animations
$('#box').stop();        // Stop current animation
$('#box').stop(true);    // Clear animation queue
$('#box').finish();      // Jump to end state

// Checking animation state
$('#box').is(':animated'); // Returns boolean

// Custom easing
$.easing.customEase = function (x, t, b, c, d) {
  return c * (t /= d) * t + b;
};
$('#box').animate({ left: '200px' }, 1000, 'customEase');`,
          explanation: 'jQuery maintains an animation queue for each element. Animations can be controlled and queried. Custom easing functions can be defined for unique motion curves.'
        }
      ]
    },
    // 5. AJAX
    {
      id: 'ajax',
      title: 'AJAX',
      examples: [
        {
          title: 'AJAX Methods',
          code: `// Basic GET request
$.get('/api/data', function(response) {
  $('#result').html(response);
});

// GET with parameters
$.get('/api/search', { q: 'jquery' }, function(data) {
  console.log(data.results);
});

// POST request
$.post('/api/save', { name: 'John' }, function() {
  alert('Data saved');
});

// Load HTML fragment
$('#content').load('/partials/about.html #main');

// Full AJAX control
$.ajax({
  url: '/api/data',
  type: 'GET',
  dataType: 'json',
  data: { id: 123 },
  success: function(data) {
    // Handle success
  },
  error: function(xhr, status, error) {
    // Handle error
  }
});`,
          explanation: 'jQuery simplifies AJAX with shorthand methods for common scenarios and a full-featured $.ajax() method for complete control. Handles JSON parsing automatically.'
        },
        {
          title: 'AJAX Events & Helpers',
          code: `// Global AJAX events
$(document)
  .ajaxStart(function() {
    $('#loading').show();
  })
  .ajaxStop(function() {
    $('#loading').hide();
  });

// AJAX setup defaults
$.ajaxSetup({
  timeout: 5000,
  headers: { 'X-Requested-With': 'XMLHttpRequest' }
});

// JSONP for cross-domain requests
$.getJSON('https://api.example.com?callback=?', function(data) {
  console.log(data);
});

// Form serialization
$('form').submit(function(e) {
  e.preventDefault();
  const formData = $(this).serialize();
  $.post('/submit', formData);
});`,
          explanation: 'jQuery provides global AJAX event handlers and configuration options. Helpers simplify form data handling and cross-domain JSONP requests.'
        }
      ]
    },
    // 6. Utilities
    {
      id: 'utilities',
      title: 'Utilities',
      examples: [
        {
          title: 'Array & Object Operations',
          code: `// Iteration
$.each(['a', 'b', 'c'], function(index, value) {
  console.log(index + ': ' + value);
});

// Filtering arrays
const numbers = [1, 2, 3, 4, 5];
const evens = $.grep(numbers, function(n) {
  return n % 2 === 0;
});

// Checking array contents
if ($.inArray('value', array) !== -1) {
  // Value exists in array
}

// Object iteration
$.each({ name: 'John', age: 30 }, function(key, value) {
  console.log(key + ': ' + value);
});

// Extending objects
const defaults = { color: 'red', size: 'medium' };
const options = $.extend({}, defaults, userOptions);`,
          explanation: 'jQuery provides utilities for common array and object operations that work consistently across browsers. These methods complement native JavaScript functionality.'
        },
        {
          title: 'Other Utilities',
          code: `// Type checking
$.isArray(obj);      // Returns boolean
$.isFunction(obj);   // Returns boolean
$.isNumeric(obj);    // Returns boolean
$.type(obj);         // Returns string type

// String trimming
const trimmed = $.trim('  hello  ');

// Parsing JSON
try {
  const obj = $.parseJSON(jsonString);
} catch(e) {
  console.error('Invalid JSON');
}

// Browser detection (not recommended)
if ($.browser.webkit) {
  // WebKit-specific code
}

// Deferred execution
$(function() {
  // Shorthand for $(document).ready()
});`,
          explanation: 'jQuery includes various helper functions for type checking, string manipulation, JSON parsing, and basic browser detection (though feature detection is preferred).'
        }
      ]
    },
    // 7. Plugins
    {
      id: 'plugins',
      title: 'Plugins',
      examples: [
        {
          title: 'Creating Plugins',
          code: `// Basic plugin pattern
(function($) {
  $.fn.highlight = function(options) {
    // Default settings
    const settings = $.extend({
      color: 'yellow',
      duration: 1000
    }, options);

    // Plugin logic
    return this.each(function() {
      const $this = $(this);
      const originalColor = $this.css('backgroundColor');
      
      $this
        .css('backgroundColor', settings.color)
        .animate({ backgroundColor: originalColor }, settings.duration);
    });
  };
})(jQuery);

// Using the plugin
$('p').highlight({ color: '#ffff00' });`,
          explanation: 'jQuery plugins extend the jQuery.fn object. Good plugins maintain chainability by returning "this". Options should be customizable with defaults.'
        },
        {
          title: 'Popular jQuery Plugins',
          code: `// jQuery UI - Widgets and interactions
$('#datepicker').datepicker();
$('#sortable').sortable();

// DataTables - Enhanced tables
$('#table').DataTable();

// Slick - Carousel
$('.slider').slick({
  dots: true,
  infinite: true
});

// Validate - Form validation
$('#form').validate({
  rules: {
    email: { required: true, email: true }
  }
});

// Select2 - Enhanced selects
$('.select-box').select2();

// Lightbox - Image galleries
$('[data-lightbox]').lightbox();`,
          explanation: 'Many jQuery plugins exist for common UI needs. Popular ones include jQuery UI for widgets, DataTables for tables, Slick for carousels, and Validate for forms.'
        }
      ]
    },
    // 8. Performance
    {
      id: 'performance',
      title: 'Performance',
      examples: [
        {
          title: 'Optimization Techniques',
          code: `// Cache jQuery objects
const $header = $('#header');

// Use efficient selectors
$('div.container');         // Better than just 'div'
$('#nav li.active');        // Specific is faster

// Limit DOM manipulation
const $list = $('#list');
const items = [];

for (let i = 0; i < 100; i++) {
  items.push('<li>Item ' + i + '</li>');
}

$list.append(items.join('')); // Single DOM update

// Event delegation over direct binding
$(document).on('click', '.dynamic-item', handler);

// Use native JS for simple tasks
const id = element.id;      // Instead of $(element).attr('id')

// Detach elements during heavy manipulation
const $table = $('#large-table').detach();
// Perform many operations on $table
$table.appendTo('body');`,
          explanation: 'jQuery performance best practices include caching selectors, using specific selectors, minimizing DOM updates, leveraging event delegation, and knowing when to use native JS.'
        },
        {
          title: 'Modern jQuery Usage',
          code: `// Using jQuery with modern JS
const elements = document.querySelectorAll('.items');
$(elements).addClass('highlight');

// Using jQuery with ES6+
const $items = $('.items').map((index, element) => {
  return {
    id: element.dataset.id,
    name: $(element).text()
  };
}).get();

// Promises with AJAX
$.when(
  $.get('/api/users'),
  $.get('/api/products')
).then((users, products) => {
  // Handle both responses
}).catch(error => {
  console.error(error);
});

// Using with module bundlers
import $ from 'jquery';
import 'jquery-plugin'; // For plugins that modify $.fn`,
          explanation: 'Modern jQuery can be used alongside vanilla JS and ES6+ features. It works well with module systems and provides promise interfaces for AJAX operations.'
        }
      ]
    }
  ]
};