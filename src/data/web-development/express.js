import { SiExpress } from 'react-icons/si';

export const expressContent = {
  icon: SiExpress,
  title: 'Express.js',
  color: '#000000',
  description: 'A comprehensive Express.js reference covering routing, middleware, error handling, template engines, database integration, authentication, REST APIs, and deployment.',
  sections: [
    // 1. Express Fundamentals
    {
      id: 'fundamentals',
      title: 'Express Fundamentals',
      examples: [
        {
          title: 'Basic Application Setup',
          code: `const express = require('express');
const app = express();
const port = 3000;

// Basic route
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Start server
app.listen(port, () => {
  console.log(\`Server running at http://localhost:\${port}\`);
});`,
          explanation: 'Express is a minimal and flexible Node.js web application framework. This shows a basic setup with a single route that responds to GET requests on the root path.'
        },
        {
          title: 'Route Handling',
          code: `// HTTP methods
app.get('/products', (req, res) => {
  res.send('GET all products');
});

app.post('/products', (req, res) => {
  res.send('POST a new product');
});

app.put('/products/:id', (req, res) => {
  res.send(\`PUT update product \${req.params.id}\`);
});

app.delete('/products/:id', (req, res) => {
  res.send(\`DELETE product \${req.params.id}\`);
});

// Route parameters
app.get('/users/:userId/orders/:orderId', (req, res) => {
  res.send(\`User \${req.params.userId}, Order \${req.params.orderId}\`);
});

// Route handlers can be chained
app.route('/books')
  .get((req, res) => res.send('Get all books'))
  .post((req, res) => res.send('Add a book'))
  .put((req, res) => res.send('Update all books'));`,
          explanation: 'Express supports all HTTP methods (GET, POST, PUT, DELETE, etc.). Route parameters capture values from the URL. Handlers can be chained for the same path.'
        }
      ]
    },
    // 2. Middleware
    {
      id: 'middleware',
      title: 'Middleware',
      examples: [
        {
          title: 'Using Middleware',
          code: `// Application-level middleware
app.use((req, res, next) => {
  console.log('Time:', Date.now());
  next(); // Pass control to next middleware
});

// Route-specific middleware
const authMiddleware = (req, res, next) => {
  if (req.headers.authorization) {
    next();
  } else {
    res.status(401).send('Unauthorized');
  }
};

app.get('/protected', authMiddleware, (req, res) => {
  res.send('Protected resource');
});

// Built-in middleware
app.use(express.json()); // Parse JSON bodies
app.use(express.urlencoded({ extended: true })); // Parse URL-encoded bodies
app.use(express.static('public')); // Serve static files

// Third-party middleware
const morgan = require('morgan');
app.use(morgan('dev')); // HTTP request logger

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});`,
          explanation: 'Middleware functions have access to request/response objects and the next middleware. They can execute code, modify req/res, end the cycle, or call next().'
        }
      ]
    },
    // 3. Request & Response
    {
      id: 'req-res',
      title: 'Request & Response',
      examples: [
        {
          title: 'Working with Request',
          code: `app.post('/login', (req, res) => {
  // Access request properties
  console.log(req.method); // HTTP method
  console.log(req.path); // URL path
  console.log(req.headers); // Request headers
  console.log(req.query); // Query parameters
  console.log(req.params); // Route parameters
  console.log(req.body); // Request body (needs body-parser)
  console.log(req.cookies); // Cookies (needs cookie-parser)
  console.log(req.ip); // Client IP address
  
  // Access uploaded files (with multer)
  console.log(req.file); // Single file
  console.log(req.files); // Multiple files
});`,
          explanation: 'The request object contains properties for the HTTP request including query parameters, route parameters, headers, body, and more.'
        },
        {
          title: 'Working with Response',
          code: `app.get('/api/data', (req, res) => {
  // Send responses
  res.send('Plain text response');
  res.json({ message: 'JSON response' });
  res.status(201).send('Created');
  res.sendStatus(200); // Just status code
  res.redirect('/new-location');
  res.download('/path/to/file.pdf');
  res.sendFile('/path/to/file.html');
  
  // Set response headers
  res.set('Content-Type', 'text/plain');
  res.set({
    'Content-Type': 'text/plain',
    'X-Custom-Header': 'value'
  });
  
  // Cookies
  res.cookie('name', 'value', { maxAge: 900000 });
  res.clearCookie('name');
});`,
          explanation: 'The response object provides methods to send different types of responses (text, JSON, files, redirects) and set headers, status codes, and cookies.'
        }
      ]
    },
    // 4. Error Handling
    {
      id: 'error-handling',
      title: 'Error Handling',
      examples: [
        {
          title: 'Error Handling Patterns',
          code: `// Sync error handling
app.get('/sync-error', (req, res) => {
  throw new Error('BROKEN'); // Express will catch this
});

// Async error handling
app.get('/async-error', async (req, res, next) => {
  try {
    await someAsyncOperation();
  } catch (err) {
    next(err); // Pass to error handler
  }
});

// 404 handler
app.use((req, res, next) => {
  res.status(404).send("Sorry can't find that!");
});

// Error handler middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  
  // Different responses based on environment
  if (process.env.NODE_ENV === 'development') {
    res.status(500).json({
      error: err.message,
      stack: err.stack
    });
  } else {
    res.status(500).send('Something broke!');
  }
});`,
          explanation: 'Express catches synchronous errors automatically. For async code, pass errors to next(). Define error-handling middleware last with four arguments.'
        }
      ]
    },
    // 5. Template Engines
    {
      id: 'templates',
      title: 'Template Engines',
      examples: [
        {
          title: 'Using Template Engines',
          code: `// Set up EJS (install with npm install ejs)
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Basic route with template
app.get('/', (req, res) => {
  res.render('index', {
    title: 'Home Page',
    users: ['Alice', 'Bob', 'Charlie']
  });
});

<!-- views/index.ejs -->
<!DOCTYPE html>
<html>
<head>
  <title><%= title %></title>
</head>
<body>
  <h1><%= title %></h1>
  <ul>
    <% users.forEach(user => { %>
      <li><%= user %></li>
    <% }); %>
  </ul>
</body>
</html>

// Other popular engines:
// Pug (formerly Jade)
// Handlebars
// Mustache`,
          explanation: 'Express supports various template engines for server-side rendering. EJS is one popular option that embands JavaScript in HTML. Set view engine and views directory.'
        }
      ]
    },
    // 6. Database Integration
    {
      id: 'database',
      title: 'Database Integration',
      examples: [
        {
          title: 'MongoDB with Mongoose',
          code: `const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/mydb');

// Define schema and model
const userSchema = new mongoose.Schema({
  name: String,
  email: { type: String, required: true, unique: true },
  age: { type: Number, min: 18 }
});
const User = mongoose.model('User', userSchema);

// CRUD operations
app.post('/users', async (req, res) => {
  try {
    const user = new User(req.body);
    await user.save();
    res.status(201).send(user);
  } catch (err) {
    res.status(400).send(err);
  }
});

app.get('/users', async (req, res) => {
  const users = await User.find();
  res.send(users);
});`,
          explanation: 'Mongoose provides schema-based solution for MongoDB. It includes validation, middleware, and query building. Models represent collections.'
        },
        {
          title: 'SQL with Sequelize',
          code: `const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('sqlite::memory:');

// Define model
const User = sequelize.define('User', {
  name: DataTypes.STRING,
  email: { type: DataTypes.STRING, unique: true }
});

// CRUD operations
app.get('/users', async (req, res) => {
  try {
    const users = await User.findAll();
    res.json(users);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Sync database
(async () => {
  await sequelize.sync();
  console.log('Database synced');
})();`,
          explanation: 'Sequelize is a promise-based ORM for SQL databases (PostgreSQL, MySQL, SQLite). Supports transactions, relations, validation, and more.'
        }
      ]
    },
    // 7. Authentication
    {
      id: 'authentication',
      title: 'Authentication',
      examples: [
        {
          title: 'JWT Authentication',
          code: `const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

// Login route
app.post('/login', async (req, res) => {
  const { email, password } = req.body;
  
  // 1. Find user
  const user = await User.findOne({ email });
  if (!user) return res.status(401).send('Invalid credentials');
  
  // 2. Validate password
  const valid = await bcrypt.compare(password, user.password);
  if (!valid) return res.status(401).send('Invalid credentials');
  
  // 3. Generate token
  const token = jwt.sign(
    { userId: user.id },
    process.env.JWT_SECRET,
    { expiresIn: '1h' }
  );
  
  // 4. Send token
  res.json({ token });
});

// Protected route middleware
function authenticateToken(req, res, next) {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];
  
  if (!token) return res.sendStatus(401);
  
  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) return res.sendStatus(403);
    req.user = user;
    next();
  });
}

// Protected route
app.get('/profile', authenticateToken, (req, res) => {
  res.json({ message: 'Protected data', user: req.user });
});`,
          explanation: 'JWT (JSON Web Tokens) provide stateless authentication. Tokens are signed with a secret and contain claims (like user ID). Store in HTTP-only cookies or Authorization header.'
        },
        {
          title: 'Session Authentication',
          code: `const session = require('express-session');
const MongoStore = require('connect-mongo');

// Session configuration
app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: false,
  store: MongoStore.create({ mongoUrl: 'mongodb://localhost/sessions' }),
  cookie: { 
    maxAge: 1000 * 60 * 60 * 24, // 1 day
    secure: process.env.NODE_ENV === 'production'
  }
}));

// Login route
app.post('/login', (req, res) => {
  const { username, password } = req.body;
  
  // Validate credentials
  if (username === 'admin' && password === 'password') {
    req.session.user = { username, role: 'admin' };
    return res.send('Logged in');
  }
  
  res.status(401).send('Invalid credentials');
});

// Protected route
app.get('/dashboard', (req, res) => {
  if (!req.session.user) return res.redirect('/login');
  res.send(\`Welcome \${req.session.user.username}\`);
});

// Logout
app.post('/logout', (req, res) => {
  req.session.destroy();
  res.send('Logged out');
});`,
          explanation: 'Session-based authentication stores user data server-side. express-session middleware handles session management. Can store sessions in memory, databases, or Redis.'
        }
      ]
    },
    // 8. REST API Best Practices
    {
      id: 'rest-api',
      title: 'REST API Best Practices',
      examples: [
        {
          title: 'Structured API',
          code: `// routes/products.js
const express = require('express');
const router = express.Router();
const Product = require('../models/Product');

// GET all products
router.get('/', async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// GET single product
router.get('/:id', getProduct, (req, res) => {
  res.json(res.product);
});

// Middleware to get product by ID
async function getProduct(req, res, next) {
  let product;
  try {
    product = await Product.findById(req.params.id);
    if (!product) return res.status(404).json({ message: 'Product not found' });
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
  
  res.product = product;
  next();
}

module.exports = router;

// app.js
const productsRouter = require('./routes/products');
app.use('/api/products', productsRouter);`,
          explanation: 'Organize routes into separate modules. Use consistent naming (plural nouns). Separate concerns with middleware. Return proper status codes and JSON responses.'
        },
        {
          title: 'API Features',
          code: `// Advanced query features
router.get('/', async (req, res) => {
  // Filtering
  const query = {};
  if (req.query.category) {
    query.category = req.query.category;
  }
  
  // Sorting
  const sort = {};
  if (req.query.sortBy) {
    const parts = req.query.sortBy.split(':');
    sort[parts[0]] = parts[1] === 'desc' ? -1 : 1;
  }
  
  // Pagination
  const page = parseInt(req.query.page) || 1;
  const limit = parseInt(req.query.limit) || 10;
  const skip = (page - 1) * limit;
  
  try {
    const products = await Product.find(query)
      .sort(sort)
      .skip(skip)
      .limit(limit);
      
    const count = await Product.countDocuments(query);
    
    res.json({
      data: products,
      pagination: {
        page,
        limit,
        total: count,
        pages: Math.ceil(count / limit)
      }
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});`,
          explanation: 'Enhance APIs with filtering, sorting, pagination, and field selection. Return metadata like pagination info. Validate and sanitize query parameters.'
        }
      ]
    },
    // 9. Security
    {
      id: 'security',
      title: 'Security',
      examples: [
        {
          title: 'Security Middleware',
          code: `const helmet = require('helmet');
const rateLimit = require('express-rate-limit');
const xss = require('xss-clean');
const hpp = require('hpp');
const cors = require('cors');

// Security headers
app.use(helmet());

// Rate limiting
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100 // limit each IP to 100 requests per windowMs
});
app.use(limiter);

// Data sanitization
app.use(xss()); // Prevent XSS attacks
app.use(hpp()); // Prevent HTTP parameter pollution

// CORS
app.use(cors({
  origin: ['https://yourdomain.com', 'https://yourotherdomain.com'],
  methods: ['GET', 'POST', 'PUT', 'DELETE']
}));

// CSRF protection (for sessions)
const csrf = require('csurf');
const cookieParser = require('cookie-parser');
app.use(cookieParser());
app.use(csrf({ cookie: true }));

app.get('/form', (req, res) => {
  res.render('form', { csrfToken: req.csrfToken() });
});`,
          explanation: 'Essential security middleware includes helmet for headers, rate limiting, CORS, data sanitization, and CSRF protection (for session-based auth).'
        }
      ]
    },
    // 10. Testing & Debugging
    {
      id: 'testing',
      title: 'Testing & Debugging',
      examples: [
        {
          title: 'Testing with Jest',
          code: `// __tests__/app.test.js
const request = require('supertest');
const app = require('../app');
const User = require('../models/User');

describe('User API', () => {
  beforeEach(async () => {
    await User.deleteMany();
  });

  test('GET /users - should return empty array', async () => {
    const res = await request(app).get('/api/users');
    expect(res.statusCode).toBe(200);
    expect(res.body).toEqual([]);
  });

  test('POST /users - should create new user', async () => {
    const res = await request(app)
      .post('/api/users')
      .send({ name: 'John', email: 'john@example.com' });
    
    expect(res.statusCode).toBe(201);
    expect(res.body).toHaveProperty('_id');
    expect(res.body.name).toBe('John');
  });
});

// Debugging middleware
const util = require('util');
app.use((req, res, next) => {
  console.log(\`\${req.method} \${req.url}\`);
  console.log('Headers:', util.inspect(req.headers));
  console.log('Body:', util.inspect(req.body));
  next();
});`,
          explanation: 'Supertest allows testing Express apps with simulated HTTP requests. Jest provides test structure and assertions. Debug middleware can log request details.'
        }
      ]
    },
    // 11. Deployment
    {
      id: 'deployment',
      title: 'Deployment',
      examples: [
        {
          title: 'Production Best Practices',
          code: `// Environment configuration
require('dotenv').config();

// Set NODE_ENV
process.env.NODE_ENV = process.env.NODE_ENV || 'development';

// Cluster mode (utilize multiple CPUs)
const cluster = require('cluster');
const numCPUs = require('os').cpus().length;

if (cluster.isMaster && process.env.NODE_ENV === 'production') {
  for (let i = 0; i < numCPUs; i++) {
    cluster.fork();
  }
  cluster.on('exit', (worker) => {
    console.log(\`Worker \${worker.process.pid} died\`);
    cluster.fork();
  });
} else {
  const app = require('./app');
  const port = process.env.PORT || 3000;
  
  app.listen(port, () => {
    console.log(\`Server running in \${process.env.NODE_ENV} mode on port \${port}\`);
  });
}

// Graceful shutdown
process.on('SIGTERM', () => {
  server.close(() => {
    console.log('Process terminated');
    process.exit(0);
  });
});`,
          explanation: 'Production considerations include environment variables, clustering for performance, graceful shutdown, logging, and process management (PM2 is recommended).'
        }
      ]
    }
  ]
};