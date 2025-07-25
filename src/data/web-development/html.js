import { SiHtml5 } from 'react-icons/si';
import catImage from '../../assets/catImage.jpg';

export const htmlContent = {
  icon: SiHtml5,
  title: 'HTML',
  color: '#E34F26',
  description: 'A comprehensive HTML reference with practical examples, updated best practices, and extended coverage.',
  sections: [
    {
      id: 'boilerplate',
      title: 'HTML Boilerplate & Comments',
      examples: [
        {
          title: 'Modern HTML5 Boilerplate',
          filename: 'index.html',
          code: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="description" content="An HTML5 starter template">
  <title>HTML5 Template</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <main>
    <h1>Hello, HTML5!</h1>
  </main>
  <script src="script.js" defer></script>
</body>
</html>`,
          explanation: 'A clean and semantic HTML5 boilerplate with viewport configuration, linked CSS, and deferred JS for optimal performance.'
        },
        {
          title: 'HTML Comments',
          code: ``,
          explanation: 'Comments help document the code for other developers and can be used to temporarily disable elements.'
        }
      ]
    },
    {
        id: 'structural-semantic',
        title: 'Structural & Semantic Elements',
        examples: [
            {
                title: 'Semantic Page Layout',
                code: `<header>
    <h1>My Website</h1>
    <nav>
        <a href="/home">Home</a> | <a href="/about">About</a>
    </nav>
</header>
<main>
    <article>
        <h2>Article Title</h2>
        <p>This is the main content of the article...</p>
    </article>
    <aside>
        <h3>Related Links</h3>
        <p>Some extra information.</p>
    </aside>
</main>
<footer>
    <p>&copy; 2025 My Website</p>
</footer>`,
                explanation: 'Using semantic elements like <header>, <nav>, <main>, <article>, <aside>, and <footer> gives structure and meaning to your content, improving SEO and accessibility.',
                preview: `_Note: This preview is unstyled. These tags define structure._
<header style="border:1px solid #ccc; padding:10px; margin-bottom:10px;">
    <h1>My Website</h1>
    <nav>
        <a href="#">Home</a> | <a href="#">About</a>
    </nav>
</header>
<main style="border:1px solid #ccc; padding:10px; margin-bottom:10px;">
    <article>
        <h2>Article Title</h2>
        <p>This is the main content of the article...</p>
    </article>
    <aside style="border:1px dotted #ccc; padding:10px; margin-top:10px;">
        <h3>Related Links</h3>
        <p>Some extra information.</p>
    </aside>
</main>
<footer style="border:1px solid #ccc; padding:10px;">
    <p>&copy; 2025 My Website</p>
</footer>`
            }
        ]
    },
    {
      id: 'headings-paragraphs',
      title: 'Headings & Paragraphs',
      examples: [
        {
          title: 'Semantic Headings',
          code: `<h1>Main Heading (Level 1)</h1>
<h2>Subheading (Level 2)</h2>
<h3>Topic Title (Level 3)</h3>
<h4>Detail Title (Level 4)</h4>
<h5>Minor Detail (Level 5)</h6>
<h6>Smallest Heading (Level 6)</h6>`,
          explanation: 'Use <h1> for the main title and subsequent levels to organize content hierarchically. Avoid skipping levels for better accessibility.',
          preview: `<h1>Main Heading (Level 1)</h1>
<h2>Subheading (Level 2)</h2>
<h3>Topic Title (Level 3)</h3>
<h4>Detail Title (Level 4)</h4>
<h5>Minor Detail (Level 5)</h6>
<h6>Smallest Heading (Level 6)</h6>`
        },
        {
          title: 'Paragraphs & Blockquotes',
          code: `<p>This is a standard paragraph that explains something important.</p>
<hr>
<blockquote>
  <p>"This is a quote from a famous person. It's indented to stand out."</p>
  <cite>– Source</cite>
</blockquote>`,
          explanation: '<p> tags define blocks of text. Use <blockquote> for extended quotations, which are often indented by browsers.',
          preview: `<p>This is a standard paragraph that explains something important.</p>
<hr>
<blockquote style="margin-left: 20px; border-left: 3px solid #ccc; padding-left: 15px;">
  <p>"This is a quote from a famous person. It's indented to stand out."</p>
  <cite>– Source</cite>
</blockquote>`
        }
      ]
    },
    {
      id: 'text-semantic',
      title: 'Text Formatting & Semantic Tags',
      examples: [
        {
          title: 'Text Styling Tags',
          code: `<p>
  <strong>This text is important (bold).</strong><br>
  <em>This text is emphasized (italic).</em><br>
  <mark>This text is highlighted.</mark><br>
  <del>This text is deleted.</del> <ins>This text is inserted.</ins><br>
  This is <sub>subscript</sub> and <sup>superscript</sup>.<br>
  <code>const x = 10;</code> is inline code.<br>
  <q>This is a short, inline quote.</q>
</p>
<pre><code>// Multi-line code block
function greet() {
  return "Hello";
}</code></pre>`,
          explanation: 'Use semantic tags like <strong> and <em> for emphasis. <pre> preserves whitespace for code blocks.',
          preview: `<p>
  <strong>This text is important (bold).</strong><br>
  <em>This text is emphasized (italic).</em><br>
  <mark>This text is highlighted.</mark><br>
  <del>This text is deleted.</del> <ins>This text is inserted.</ins><br>
  This is <sub>subscript</sub> and <sup>superscript</sup>.<br>
  <code>const x = 10;</code> is inline code.<br>
  <q>This is a short, inline quote.</q>
</p>
<pre style="background-color:#f4f4f4; padding:10px; border:1px solid #ccc;"><code>// Multi-line code block
function greet() {
  return "Hello";
}</code></pre>`
        }
      ]
    },
    {
      id: 'links',
      title: 'Hyperlinks',
      examples: [
        {
          title: 'Common Link Types',
          code: `<a href="https://developer.mozilla.org" target="_blank" rel="noopener noreferrer">MDN Docs</a>

<a href="mailto:hello@example.com">Send Email</a>

<a href="tel:+911234567890">Call Us</a>

<a href="#forms">Jump to Forms Section</a>`,
          explanation: 'The <a> tag creates hyperlinks. Use target="_blank" for external links and href="#element-id" for internal page navigation.',
          preview: `<a href="#" target="_blank" rel="noopener noreferrer">MDN Docs</a><br>
<a href="#">Send Email</a><br>
<a href="#">Call Us</a><br>
<a href="#forms">Jump to Forms Section</a>`
        }
      ]
    },
    {
      id: 'images',
      title: 'Images',
      examples: [
        {
          title: 'Responsive Image',
          code: `<img 
  src="image.jpg" 
  alt="A cute orange cat looking curiously at the camera" 
  width="400" 
  height="267"
  style="max-width:100%; height:auto;"
>`,
          explanation: 'Use descriptive alt text for accessibility and responsive CSS for mobile support. Specifying width and height prevents layout shifts.',
          preview: `<img src="${catImage}" alt="A cute orange cat looking curiously at the camera" width="400" height="267" style="max-width:100%; height:auto;">`
        },
        {
          title: 'Image with Caption',
          code: `<figure>
  <img src="image.jpg" alt="A cute orange cat looking curiously at the camera">
  <figcaption>Fig.1 - A cat demonstrating the 'curiosity' property.</figcaption>
</figure>`,
          explanation: 'The <figure> and <figcaption> elements semantically group an image with its caption, which is good for accessibility and SEO.',
          preview: `<figure style="border:1px solid #ccc; padding:10px; display:inline-block;">
  <img src="${catImage}" alt="A cute orange cat looking curiously at the camera" style="max-width:300px;">
  <figcaption style="text-align:center; margin-top:8px;">Fig.1 - A cat demonstrating the 'curiosity' property.</figcaption>
</figure>`
        }
      ]
    },
    {
      id: 'lists',
      title: 'Lists',
      examples: [
        {
          title: 'All Types of Lists',
          code: `<ul>
  <li>Apple</li>
  <li>Banana</li>
</ul>

<ol>
  <li>First step</li>
  <li>Second step</li>
</ol>

<dl>
  <dt>HTML</dt>
  <dd>HyperText Markup Language</dd>
  <dt>CSS</dt>
  <dd>Cascading Style Sheets</dd>
</dl>`,
          explanation: 'Choose <ul> for unordered, <ol> for ordered, and <dl> for description lists (term/definition pairs).',
          preview: `<h4>Unordered List</h4>
<ul><li>Apple</li><li>Banana</li></ul>
<h4>Ordered List</h4>
<ol><li>First step</li><li>Second step</li></ol>
<h4>Description List</h4>
<dl><dt>HTML</dt><dd>HyperText Markup Language</dd><dt>CSS</dt><dd>Cascading Style Sheets</dd></dl>`
        }
      ]
    },
    {
      id: 'tables',
      title: 'Tables',
      examples: [
        {
          title: 'Advanced Table Example',
          code: `<table border="1">
  <caption>Student Timetable</caption>
  <thead>
    <tr>
      <th>Time</th>
      <th>Monday</th>
      <th>Tuesday</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>9 AM - 11 AM</td>
      <td>Math</td>
      <td>History</td>
    </tr>
    <tr>
      <td>11 AM - 1 PM</td>
      <td colspan="2">Lunch Break</td>
    </tr>
  </tbody>
  <tfoot>
    <tr>
      <td colspan="3">Exams are scheduled for next month.</td>
    </tr>
  </tfoot>
</table>`,
          explanation: 'Use <caption> for titles, <thead>, <tbody>, <tfoot> for structure, and colspan to merge columns.',
          preview: `<table border="1" style="width:100%; border-collapse: collapse;">
  <caption style="caption-side:bottom; padding-top:8px;">Student Timetable</caption>
  <thead style="background-color:#f2f2f2;">
    <tr>
      <th style="padding:8px;">Time</th>
      <th style="padding:8px;">Monday</th>
      <th style="padding:8px;">Tuesday</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style="padding:8px;">9 AM - 11 AM</td>
      <td style="padding:8px;">Math</td>
      <td style="padding:8px;">History</td>
    </tr>
    <tr>
      <td style="padding:8px;">11 AM - 1 PM</td>
      <td colspan="2" style="text-align:center; padding:8px;">Lunch Break</td>
    </tr>
  </tbody>
  <tfoot style="background-color:#f2f2f2; font-style:italic;">
    <tr>
      <td colspan="3" style="text-align:center; padding:8px;">Exams are scheduled for next month.</td>
    </tr>
  </tfoot>
</table>`
        }
      ]
    },
    {
      id: 'forms',
      title: 'Forms & Inputs',
      examples: [
        {
          title: 'Comprehensive Form Example',
          code: `<form action="/register" method="post">
  <fieldset>
    <legend>User Registration</legend>

    <label for="name">Name:</label><br>
    <input type="text" id="name" name="name" required><br><br>
    
    <label for="email">Email:</label><br>
    <input type="email" id="email" name="email" required><br><br>

    <p>Membership Tier:</p>
    <input type="radio" id="free" name="tier" value="free" checked>
    <label for="free">Free</label><br>
    <input type="radio" id="premium" name="tier" value="premium">
    <label for="premium">Premium</label><br><br>

    <label for="topics">Interests:</label><br>
    <select id="topics" name="topics">
      <option value="tech">Technology</option>
      <option value="art">Art</option>
    </select><br><br>

    <label for="comments">Comments:</label><br>
    <textarea id="comments" name="comments" rows="4"></textarea><br><br>

    <input type="checkbox" id="terms" name="terms" required>
    <label for="terms">I agree to the terms.</label><br><br>

    <button type="submit">Register</button>
    <button type="reset">Reset Form</button>
  </fieldset>
</form>`,
          explanation: 'A comprehensive form using <fieldset> and <legend> for grouping, with various input types like radio, select, textarea, and checkbox.',
          preview: `<form action="#" method="post">
  <fieldset style="padding:15px; border:1px solid #ccc;">
    <legend>User Registration</legend>

    <label for="preview-name">Name:</label><br>
    <input type="text" id="preview-name" name="name" required style="width:95%; padding:5px;"><br><br>
    
    <label for="preview-email">Email:</label><br>
    <input type="email" id="preview-email" name="email" required style="width:95%; padding:5px;"><br><br>

    <p>Membership Tier:</p>
    <input type="radio" id="preview-free" name="tier" value="free" checked>
    <label for="preview-free">Free</label><br>
    <input type="radio" id="preview-premium" name="tier" value="premium">
    <label for="preview-premium">Premium</label><br><br>

    <label for="preview-topics">Interests:</label><br>
    <select id="preview-topics" name="topics" style="width:100%; padding:5px;">
      <option value="tech">Technology</option>
      <option value="art">Art</option>
    </select><br><br>

    <label for="preview-comments">Comments:</label><br>
    <textarea id="preview-comments" name="comments" rows="4" style="width:95%; padding:5px;"></textarea><br><br>

    <input type="checkbox" id="preview-terms" name="terms" required>
    <label for="preview-terms">I agree to the terms.</label><br><br>

    <button type="submit">Register</button>
    <button type="reset">Reset Form</button>
  </fieldset>
</form>`
        }
      ]
    },
    {
      id: 'media',
      title: 'Media Elements',
      examples: [
        {
          title: 'HTML Video',
          code: `<video controls width="300" poster="${catImage}">
  <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>`,
          explanation: 'The <video> tag embeds a media player. Use the `poster` attribute to show an image before playback.',
          preview: `<video controls width="300" poster="${catImage}">
  <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>`
        },
        {
          title: 'HTML Audio',
          code: `<audio controls>
  <source src="https://www.w3schools.com/html/horse.mp3" type="audio/mpeg">
  Your browser does not support the audio element.
</audio>`,
          explanation: 'Use the <audio> tag to play sound files. Include multiple <source> tags for different formats to ensure cross-browser compatibility.',
          preview: `<audio controls>
  <source src="https://www.w3schools.com/html/horse.mp3" type="audio/mpeg">
  Your browser does not support the audio element.
</audio>`
        },
        {
          title: 'Iframe Embed',
          code: `<iframe 
  src="https://example.com" 
  width="300" 
  height="200" 
  style="border:1px solid #ccc;"
  title="An embedded example website"
></iframe>`,
          explanation: 'The <iframe> embeds external websites. Always include a `title` attribute for accessibility.',
          preview: `<iframe src="https://example.com" width="300" height="200" style="border:1px solid #ccc;" title="An embedded example website"></iframe>`
        }
      ]
    },
    {
      id: 'accessibility',
      title: 'Accessibility (a11y)',
      examples: [
        {
          title: 'ARIA Roles & Labels',
          code: `<nav aria-label="Main navigation">
  <ul>
    <li><a href="#">Home</a></li>
  </ul>
</nav>

<label for="search-input">Search:</label>
<input type="search" id="search-input">`,
          explanation: 'Use ARIA attributes like `aria-label` to provide descriptive names for elements. Always pair a `<label>` with its form control using the `for` and `id` attributes.',
          preview: `<nav aria-label="Main navigation" style="border:1px solid #ccc; padding: 5px;">
  <strong style="font-size:small;">Nav Element</strong>
  <ul>
    <li><a href="#">Home</a></li>
  </ul>
</nav>
<br>
<label for="search-input-preview">Search:</label>
<input type="search" id="search-input-preview">`
        }
      ]
    }
  ]
};