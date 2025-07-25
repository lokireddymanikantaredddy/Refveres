import { SiCss3 } from 'react-icons/si';

export const cssContent = {
  icon: SiCss3,
  title: 'CSS',
  description: 'A comprehensive CSS reference with practical examples and explanations.',
  sections: [
    {
      id: 'introduction',
      title: 'Introduction',
      examples: [
        {
          title: 'What is CSS?',
          code: `/* CSS stands for Cascading Style Sheets */\n/* It controls the look and feel of HTML elements */`,
          explanation: 'CSS is used to style and layout web pages.'
        }
      ]
    },
    {
      id: 'external-stylesheet',
      title: 'External Stylesheet',
      examples: [
        {
          title: 'Linking CSS',
          code: `<link rel="stylesheet" href="styles.css">`,
          explanation: 'Reference an external CSS file in your HTML <head>.'
        }
      ]
    },
    {
      id: 'internal-stylesheet',
      title: 'Internal Stylesheet',
      examples: [
        {
          title: 'Internal CSS',
          code: `<style>\n  body { background: #f0f0f0; }\n</style>`,
          explanation: 'Place <style> in the <head> for page-specific styles.'
        }
      ]
    },
    {
      id: 'inline-styles',
      title: 'Inline Styles',
      examples: [
        {
          title: 'Inline Style',
          code: `<h1 style="color: red;">Hello</h1>`,
          explanation: 'Use the style attribute for quick, one-off styles.'
        }
      ]
    },
    {
      id: 'class-id',
      title: 'Class & ID Usage',
      examples: [
        {
          title: 'Class Selector',
          code: `<div class="box">Box</div>\n\n.box { border: 1px solid #333; }`,
          explanation: 'Use class for reusable styles. Prefix with a dot in CSS.'
        },
        {
          title: 'ID Selector',
          code: `<div id="main">Main</div>\n\n#main { background: #eee; }`,
          explanation: 'Use ID for unique elements. Prefix with # in CSS.'
        }
      ]
    },
    {
      id: 'important',
      title: '!important',
      examples: [
        {
          title: 'Override Styles',
          code: `.box { color: blue !important; }`,
          explanation: 'Use !important to override other rules. Use sparingly.'
        }
      ]
    },
    {
      id: 'selectors',
      title: 'CSS Selectors (Expanded)',
      examples: [
        {
          title: 'Basic Selectors',
          code: `* { box-sizing: border-box; }\nh1 { color: navy; }\n.box { padding: 1rem; }\n#main { margin: 0 auto; }`,
          explanation: 'Universal (*), type, class (.), and ID (#) selectors.'
        },
        {
          title: 'Group Selector',
          code: `h1, h2, h3 { color: blue; }`,
          explanation: 'Apply the same style to multiple elements.'
        },
        {
          title: 'Chaining Selector',
          code: `.btn.primary { background: green; }`,
          explanation: 'Select elements with both classes.'
        },
        {
          title: 'Attribute Selector',
          code: `input[type="text"] { border: 1px solid #ccc; }`,
          explanation: 'Select elements by attribute.'
        },
        {
          title: 'First Child Selector',
          code: `li:first-child { font-weight: bold; }`,
          explanation: 'Select the first child of a parent.'
        },
        {
          title: 'No Children Selector',
          code: `li:empty { display: none; }`,
          explanation: 'Select elements with no children.'
        },
        {
          title: 'Combinators',
          code: `div > p { color: red; } /* Direct child */\ndiv p { color: green; } /* Any descendant */\nh2 + p { margin-top: 0; } /* Adjacent sibling */\nh2 ~ p { color: orange; } /* General sibling */`,
          explanation: 'Combine selectors for advanced targeting.'
        },
        {
          title: 'Attribute Selector Variants',
          code: `a[href^="https"] { color: green; } /* Starts with */\na[href$=".pdf"] { color: red; } /* Ends with */\na[href*="quick"] { font-weight: bold; } /* Contains */\ninput[placeholder~="name"] { border: 1px solid blue; } /* Word contains */`,
          explanation: 'Use ^, $, *, ~ for advanced attribute matching.'
        }
      ]
    },
    {
      id: 'text-color',
      title: 'Text Color',
      examples: [
        {
          title: 'Text Color',
          code: `p { color: #3498db; }`,
          explanation: 'Set the text color.'
        }
      ]
    },
    {
      id: 'background',
      title: 'Background',
      examples: [
        {
          title: 'Background Color',
          code: `body { background: #222; }`,
          explanation: 'Set the background color.'
        },
        {
          title: 'Background Image',
          code: `body { background-image: url('bg.png'); }`,
          explanation: 'Set a background image.'
        }
      ]
    },
    {
      id: 'font',
      title: 'Font',
      examples: [
        {
          title: 'Font Family',
          code: `body { font-family: 'Segoe UI', Arial, sans-serif; }`,
          explanation: 'Set the font family.'
        },
        {
          title: 'Font Size & Weight',
          code: `h1 { font-size: 2.5rem; font-weight: bold; }`,
          explanation: 'Set the font size and weight.'
        }
      ]
    },
    {
      id: 'position',
      title: 'Position',
      examples: [
        {
          title: 'Positioning',
          code: `.box { position: absolute; top: 20px; left: 30px; }`,
          explanation: 'Use position (static, relative, absolute, fixed, sticky) to control layout.'
        },
        {
          title: 'Z-Index',
          code: `.box { z-index: 10; }`,
          explanation: 'Control stacking order with z-index.'
        }
      ]
    },
    {
      id: 'animation',
      title: 'Animation',
      examples: [
        {
          title: 'Keyframes Animation',
          code: `@keyframes bounce {\n  0%, 100% { transform: translateY(0); }\n  50% { transform: translateY(-30px); }\n}\n.box {\n  animation: bounce 1s infinite;\n}`,
          explanation: 'Create smooth animations with @keyframes.'
        },
        {
          title: 'Transition',
          code: `.btn {\n  transition: background 0.3s;\n}\n.btn:hover {\n  background: #2ecc71;\n}`,
          explanation: 'Use transition for smooth property changes.'
        }
      ]
    },
    {
      id: 'comment',
      title: 'Comment',
      examples: [
        {
          title: 'CSS Comment',
          code: `/* This is a CSS comment */`,
          explanation: 'Use comments to annotate your CSS.'
        }
      ]
    },
    {
      id: 'flex-layout',
      title: 'Flex Layout',
      examples: [
        {
          title: 'Flexbox Container',
          code: `.container {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  gap: 1rem;\n}\n.item {\n  flex: 1;\n}`,
          explanation: 'Flexbox is used for 1D layouts (row or column).'
        }
      ],
      preview: '<div style="display:flex;gap:1rem;"><div style="background:#3498db;color:#fff;padding:1rem;flex:1;">Item 1</div><div style="background:#2ecc71;color:#fff;padding:1rem;flex:1;">Item 2</div></div>'
    },
    {
      id: 'grid-layout',
      title: 'Grid Layout',
      examples: [
        {
          title: 'CSS Grid',
          code: `.container {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 1rem;\n}\n.item {\n  background: #eee;\n  padding: 1rem;\n}`,
          explanation: 'Grid is used for 2D layouts (rows and columns).'
        }
      ],
      preview: '<div style="display:grid;grid-template-columns:repeat(3,1fr);gap:1rem;"><div style="background:#eee;padding:1rem;">1</div><div style="background:#eee;padding:1rem;">2</div><div style="background:#eee;padding:1rem;">3</div></div>'
    },
    {
      id: 'variables-counters',
      title: 'Variables & Counters',
      examples: [
        {
          title: 'CSS Variables',
          code: `:root {\n  --main-color: #3498db;\n}\n.box {\n  color: var(--main-color);\n}`,
          explanation: 'Define and use custom properties (variables).'
        },
        {
          title: 'CSS Counter',
          code: `.list {\n  counter-reset: section;\n}\n.list li::before {\n  counter-increment: section;\n  content: counter(section) ". ";\n}`,
          explanation: 'Use counters for automatic numbering.'
        }
      ]
    },
    {
      id: 'box-model',
      title: 'Box Model',
      examples: [
        {
          title: 'Understanding Box Model',
          code: `div {\n  margin: 10px;\n  border: 2px solid #000;\n  padding: 15px;\n  width: 200px;\n}`,
          explanation: 'The CSS box model includes margins, borders, padding, and the actual content area.'
        }
      ],
      preview: '<div style="margin:10px;border:2px solid #000;padding:15px;width:200px;">Box Model</div>'
    },
    {
      id: 'media-queries',
      title: 'Responsive Design (Media Queries)',
      examples: [
        {
          title: 'Media Query Example',
          code: `@media (max-width: 600px) {\n  body {\n    background-color: lightblue;\n  }\n}`,
          explanation: 'Use media queries to apply styles based on screen size.'
        }
      ]
    },
    {
      id: 'css-units',
      title: 'CSS Units',
      examples: [
        {
          title: 'Absolute vs Relative Units',
          code: `p { font-size: 16px; }\n\nh1 { font-size: 2em; }`,
          explanation: 'Use absolute units like px for fixed sizes, or em/rem for scalable text.'
        }
      ]
    },
    {
      id: 'pseudo-elements',
      title: 'Pseudo-elements',
      examples: [
        {
          title: 'Using ::before and ::after',
          code: `h1::before { content: "★ "; color: gold; }`,
          explanation: 'Pseudo-elements let you style specific parts of elements like before or after content.'
        }
      ]
    },
    {
      id: 'object-fit',
      title: 'Object Fit & Position',
      examples: [
        {
          title: 'Cover Image',
          code: `img { width: 100%; height: 200px; object-fit: cover; }`,
          explanation: 'Use object-fit to control how media like images are resized.'
        }
      ]
    }
  ]
};