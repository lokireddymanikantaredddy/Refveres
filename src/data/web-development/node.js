import { FaNodeJs } from 'react-icons/fa';

export const nodeContent = {
  icon: FaNodeJs,
  title: 'Node.js',
  color: '#339933',
  description: 'A comprehensive Node.js reference covering core modules, asynchronous programming, file system operations, streams, networking, child processes, debugging, and best practices.',
  sections: [
    // 1. Node.js Fundamentals
    {
      id: 'fundamentals',
      title: 'Node.js Fundamentals',
      examples: [
        {
          title: 'Hello World Server',
          code: `// Import core HTTP module
const http = require('http');

// Create server
const server = http.createServer((req, res) => {
  // Set response header
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  
  // Send response
  res.end('Hello World\\n');
});

// Listen on port 3000
server.listen(3000, () => {
  console.log('Server running at http://localhost:3000/');
});`,
          explanation: 'This demonstrates the most basic Node.js HTTP server using the core http module. The createServer method takes a request listener callback that handles each incoming request.'
        },
        {
          title: 'CommonJS Modules',
          code: `// math.js - Module exports
const add = (a, b) => a + b;
const subtract = (a, b) => a - b;

module.exports = {
  add,
  subtract
};

// app.js - Module imports
const math = require('./math');
const { add } = require('./math');

console.log(math.add(2, 3)); // 5
console.log(subtract(5, 2)); // 3

// ES Modules (Node.js 12+)
// math.mjs
export const multiply = (a, b) => a * b;

// app.mjs
import { multiply } from './math.mjs';
console.log(multiply(2, 3)); // 6`,
          explanation: 'Node.js uses CommonJS modules by default (require/module.exports). ES Modules (import/export) are supported in newer versions with .mjs extension or package.json type field.'
        }
      ]
    },
    // 2. Asynchronous Programming
    {
      id: 'async',
      title: 'Asynchronous Programming',
      examples: [
        {
          title: 'Callbacks',
          code: `const fs = require('fs');

// Read file with callback
fs.readFile('file.txt', 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading file:', err);
    return;
  }
  console.log('File content:', data);
});

// Callback hell example (avoid)
fs.readFile('file1.txt', 'utf8', (err, data1) => {
  if (err) throw err;
  fs.readFile('file2.txt', 'utf8', (err, data2) => {
    if (err) throw err;
    fs.writeFile('output.txt', data1 + data2, (err) => {
      if (err) throw err;
      console.log('Files combined');
    });
  });
});`,
          explanation: 'Callbacks are Node.js traditional async pattern. The error-first callback convention is standard. Nested callbacks lead to "callback hell" which should be avoided using Promises or async/await.'
        },
        {
          title: 'Promises and Async/Await',
          code: `const fs = require('fs').promises;

// Using Promises
fs.readFile('file.txt', 'utf8')
  .then(data => console.log(data))
  .catch(err => console.error(err));

// Async/Await
async function processFiles() {
  try {
    const data1 = await fs.readFile('file1.txt', 'utf8');
    const data2 = await fs.readFile('file2.txt', 'utf8');
    await fs.writeFile('output.txt', data1 + data2);
    console.log('Files combined successfully');
  } catch (err) {
    console.error('Error:', err);
  }
}

processFiles();

// Promise utilities
Promise.all([
  fs.readFile('file1.txt', 'utf8'),
  fs.readFile('file2.txt', 'utf8')
])
  .then(([data1, data2]) => {
    console.log('Both files loaded');
  });`,
          explanation: 'Promises provide cleaner async handling than callbacks. Async/await makes promise-based code look synchronous. Promise.all runs promises in parallel. Node.js core modules have promise-based versions.'
        },
        {
          title: 'Event Emitters',
          code: `const EventEmitter = require('events');

// Create custom emitter
class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();

// Register event listener
myEmitter.on('event', (arg1, arg2) => {
  console.log('Event occurred with:', arg1, arg2);
});

// Emit event
myEmitter.emit('event', 'arg1', 'arg2');

// Built-in event emitters
const server = require('http').createServer();

server.on('request', (req, res) => {
  res.end('Hello World');
});

server.listen(3000);`,
          explanation: 'EventEmitter is Node.js implementation of the observer pattern. Many Node.js objects (servers, streams) are event emitters. Custom emitters can be created by extending EventEmitter class.'
        }
      ]
    },
    // 3. File System Operations
    {
      id: 'filesystem',
      title: 'File System Operations',
      examples: [
        {
          title: 'File Operations',
          code: `const fs = require('fs');
const path = require('path');

// Read file (sync version)
try {
  const data = fs.readFileSync('file.txt', 'utf8');
  console.log(data);
} catch (err) {
  console.error(err);
}

// Write file (async)
fs.writeFile('output.txt', 'Hello Node.js', (err) => {
  if (err) throw err;
  console.log('File written');
});

// File info
fs.stat('file.txt', (err, stats) => {
  if (err) throw err;
  console.log(\`Size: \${stats.size} bytes\`);
  console.log(\`Modified: \${stats.mtime}\`);
});

// Working with paths
const fullPath = path.join(__dirname, 'files', 'file.txt');
console.log('Full path:', fullPath);
console.log('File extension:', path.extname(fullPath));`,
          explanation: 'The fs module provides file I/O operations. Both synchronous and asynchronous versions exist. The path module helps with cross-platform path manipulation.'
        },
        {
          title: 'Directories',
          code: `const fs = require('fs').promises;

// Create directory
async function createDir() {
  try {
    await fs.mkdir('new-directory');
    console.log('Directory created');
  } catch (err) {
    if (err.code === 'EEXIST') {
      console.log('Directory already exists');
    } else {
      throw err;
    }
  }
}

// Read directory
async function listFiles() {
  try {
    const files = await fs.readdir('.');
    console.log('Files:', files);
  } catch (err) {
    console.error('Error reading directory:', err);
  }
}

// Recursive directory operations
const fsExtra = require('fs-extra');

async function copyDir() {
  try {
    await fsExtra.copy('source', 'destination');
    console.log('Directory copied');
  } catch (err) {
    console.error('Error:', err);
  }
}`,
          explanation: 'Directory operations include creating, reading, and removing directories. For advanced operations like recursive copying, third-party modules like fs-extra are useful.'
        }
      ]
    },
    // 4. Streams
    {
      id: 'streams',
      title: 'Streams',
      examples: [
        {
          title: 'Working with Streams',
          code: `const fs = require('fs');
const zlib = require('zlib');

// Readable stream
const readStream = fs.createReadStream('largefile.txt');

// Writable stream
const writeStream = fs.createWriteStream('output.txt');

// Pipe streams
readStream.pipe(writeStream);

// Transform stream
const gzip = zlib.createGzip();
fs.createReadStream('largefile.txt')
  .pipe(gzip)
  .pipe(fs.createWriteStream('largefile.txt.gz'));

// Custom transform stream
const { Transform } = require('stream');

const upperCaseTransform = new Transform({
  transform(chunk, encoding, callback) {
    this.push(chunk.toString().toUpperCase());
    callback();
  }
});

process.stdin
  .pipe(upperCaseTransform)
  .pipe(process.stdout);`,
          explanation: 'Streams process data in chunks rather than loading everything into memory. Types include Readable, Writable, Duplex, and Transform. Piping connects streams together.'
        }
      ]
    },
    // 5. Networking
    {
      id: 'networking',
      title: 'Networking',
      examples: [
        {
          title: 'HTTP/HTTPS Servers',
          code: `const http = require('http');
const https = require('https');
const fs = require('fs');

// HTTP server
const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello HTTP\\n');
});

server.listen(3000, () => {
  console.log('HTTP server running on port 3000');
});

// HTTPS server
const options = {
  key: fs.readFileSync('server.key'),
  cert: fs.readFileSync('server.cert')
};

const secureServer = https.createServer(options, (req, res) => {
  res.writeHead(200);
  res.end('Hello HTTPS\\n');
});

secureServer.listen(3001, () => {
  console.log('HTTPS server running on port 3001');
});`,
          explanation: 'Node.js can create both HTTP and HTTPS servers. HTTPS requires SSL/TLS certificates. The http/https modules provide low-level server functionality.'
        },
        {
          title: 'Making HTTP Requests',
          code: `const https = require('https');

// Making GET request
https.get('https://jsonplaceholder.typicode.com/posts/1', (res) => {
  let data = '';
  
  res.on('data', (chunk) => {
    data += chunk;
  });
  
  res.on('end', () => {
    console.log(JSON.parse(data));
  });
}).on('error', (err) => {
  console.error('Error:', err);
});

// Using axios (third-party library)
const axios = require('axios');

async function fetchData() {
  try {
    const response = await axios.get('https://api.example.com/data');
    console.log(response.data);
  } catch (error) {
    console.error('Error:', error.message);
  }
}`,
          explanation: 'Node.js can make HTTP requests using the core http/https modules or third-party libraries like axios which provide a simpler interface and promise support.'
        }
      ]
    },
    // 6. Child Processes
    {
      id: 'child-processes',
      title: 'Child Processes',
      examples: [
        {
          title: 'Spawning Processes',
          code: `const { spawn, exec, fork } = require('child_process');

// Spawn a command
const ls = spawn('ls', ['-lh', '/usr']);

ls.stdout.on('data', (data) => {
  console.log(\`stdout: \${data}\`);
});

ls.stderr.on('data', (data) => {
  console.error(\`stderr: \${data}\`);
});

ls.on('close', (code) => {
  console.log(\`Child process exited with code \${code}\`);
});

// Execute a command
exec('cat *.js | wc -l', (error, stdout, stderr) => {
  if (error) {
    console.error(\`exec error: \${error}\`);
    return;
  }
  console.log(\`stdout: \${stdout}\`);
  console.error(\`stderr: \${stderr}\`);
});

// Fork a Node.js process
const child = fork('child.js');

child.on('message', (msg) => {
  console.log('Message from child:', msg);
});

child.send({ hello: 'world' });`,
          explanation: 'The child_process module allows spawning subprocesses. spawn is for streaming data, exec for simple commands, and fork for Node.js processes that can communicate via IPC.'
        }
      ]
    },
    // 7. Debugging & Profiling
    {
      id: 'debugging',
      title: 'Debugging & Profiling',
      examples: [
        {
          title: 'Debugging Techniques',
          code: `// Using console.log
console.log('Simple debugging');
console.dir({ deep: { nested: { object: true } } });
console.trace('Show stack trace');

// Node.js built-in debugger
// Start script with: node inspect script.js
// Commands: next, cont, repl, watch('myVar')

// Chrome DevTools
// Start with: node --inspect script.js
// Then open chrome://inspect

// Error handling
process.on('uncaughtException', (err) => {
  console.error('Uncaught exception:', err);
  process.exit(1); // Mandatory (as per the docs)
});

process.on('unhandledRejection', (reason, promise) => {
  console.error('Unhandled rejection at:', promise, 'reason:', reason);
});

// Memory leak debugging
const heapdump = require('heapdump');

setInterval(() => {
  heapdump.writeSnapshot((err, filename) => {
    console.log('Heap snapshot written to', filename);
  });
}, 60000);`,
          explanation: 'Node.js debugging can be done with console methods, built-in debugger, Chrome DevTools, or IDEs. Handle uncaught exceptions and rejections. Use heapdump for memory leak analysis.'
        }
      ]
    },
    // 8. Worker Threads
    {
      id: 'worker-threads',
      title: 'Worker Threads',
      examples: [
        {
          title: 'Using Worker Threads',
          code: `const { Worker, isMainThread, parentPort, workerData } = require('worker_threads');

if (isMainThread) {
  // Main thread
  const worker = new Worker(__filename, {
    workerData: { value: 42 }
  });
  
  worker.on('message', (msg) => {
    console.log('Message from worker:', msg);
  });
  
  worker.on('error', (err) => {
    console.error('Worker error:', err);
  });
  
  worker.on('exit', (code) => {
    if (code !== 0) {
      console.error(\`Worker stopped with exit code \${code}\`);
    }
  });
} else {
  // Worker thread
  const heavyComputation = (data) => {
    // CPU-intensive work
    return data.value * 2;
  };
  
  const result = heavyComputation(workerData);
  parentPort.postMessage({ result });
}`,
          explanation: 'Worker Threads allow CPU-intensive tasks to run in parallel without blocking the event loop. Each worker has isolated Node.js instance and communicates via message passing.'
        }
      ]
    },
    // 9. Best Practices
    {
      id: 'best-practices',
      title: 'Best Practices',
      examples: [
        {
          title: 'Security Practices',
          code: `// Always validate and sanitize input
const validator = require('validator');
const xss = require('xss');

app.post('/submit', (req, res) => {
  const userInput = req.body.input;
  
  if (!validator.isEmail(userInput)) {
    return res.status(400).send('Invalid email');
  }
  
  const sanitized = xss(userInput);
  // Process sanitized input
});

// Use environment variables for secrets
require('dotenv').config();
const dbPassword = process.env.DB_PASSWORD;

// Set secure HTTP headers
const helmet = require('helmet');
app.use(helmet());

// Rate limiting
const rateLimit = require('express-rate-limit');
app.use(rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100 // limit each IP to 100 requests
}));`,
          explanation: 'Key security practices include input validation/sanitization, using environment variables for secrets, setting secure headers, and implementing rate limiting.'
        },
        {
          title: 'Performance Optimization',
          code: `// Use clustering for multi-core systems
const cluster = require('cluster');
const numCPUs = require('os').cpus().length;

if (cluster.isMaster) {
  console.log(\`Master \${process.pid} is running\`);
  
  // Fork workers
  for (let i = 0; i < numCPUs; i++) {
    cluster.fork();
  }
  
  cluster.on('exit', (worker, code, signal) => {
    console.log(\`worker \${worker.process.pid} died\`);
    cluster.fork(); // Restart worker
  });
} else {
  // Worker can share any TCP connection
  require('./server');
}

// Optimize database queries
async function getUsers() {
  // Only select needed fields
  return User.find().select('name email').lean();
}

// Use connection pooling
const pool = require('mysql2').createPool({
  connectionLimit: 10,
  host: 'localhost',
  user: 'root',
  database: 'test'
});`,
          explanation: 'Performance can be improved by using clustering, optimizing database queries, implementing connection pooling, using streams for large data, and avoiding synchronous operations.'
        }
      ]
    }
  ]
};