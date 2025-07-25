import { SiJavascript } from 'react-icons/si';

export const jsContent = {
  icon: SiJavascript,
  title: 'JavaScript',
  color: '#F7DF1E', 
  description: 'A comprehensive JavaScript reference covering syntax, control flow, functions, scope, objects, prototypes, asynchronous programming, error handling, modules, browser APIs, advanced topics, and modern tooling.',
  sections: [
    // 1. JavaScript Basics
    {
      id: 'basics',
      title: 'JavaScript Basics',
      examples: [
        {
          title: 'Syntax & Comments',
          code: `// Single-line comment
/* Multi-line
   comment */
console.log("Hello, world!"); // Output to console`,
          explanation: 'JavaScript uses // for single-line comments and /* */ for multi-line comments. The console.log() function outputs messages to the console.'
        },
        {
          title: 'Variables (let, const, var)',
          code: `let count = 1;       // mutable variable
const PI = 3.14159;  // immutable constant
var oldVar = 'legacy'; // avoid (function-scoped)

count = 2;  // Valid
// PI = 3.14; // TypeError: Assignment to constant variable`,
          explanation: 'Use let for variables that change, const for constants that never change, and avoid var which has function scope and can lead to unexpected behavior.'
        },
        {
          title: 'Data Types',
          code: `// Primitives
let name = "Alice";       // string
let age = 30;             // number
let isStudent = true;     // boolean
let nothing = null;       // null
let notDefined;           // undefined
let id = Symbol("id");    // symbol

// Object types
let person = {            // object
  name: "Bob",
  age: 25
};
let numbers = [1, 2, 3];  // array
function greet() {        // function
  return "Hello!";
}`,
          explanation: 'JavaScript has 7 primitive types (string, number, boolean, null, undefined, symbol, bigint) and object types (objects, arrays, functions). typeof operator helps check types.'
        },
        {
          title: 'Operators',
          code: `// Arithmetic
let sum = 10 + 5;    // 15
let product = 10 * 5; // 50

// Comparison
10 == "10";   // true (loose equality)
10 === "10";  // false (strict equality)

// Logical
true && false;  // false (AND)
true || false;  // true (OR)
!true;          // false (NOT)

// Assignment
let x = 10;
x += 5;  // x = x + 5 → 15

// Ternary
let result = age >= 18 ? 'Adult' : 'Minor';`,
          explanation: 'JavaScript includes arithmetic, comparison (== vs ===), logical, assignment, and ternary operators. Always prefer strict equality (===) over loose equality (==).'
        }
      ]
    },
    // 2. Control Flow
    {
      id: 'control-flow',
      title: 'Control Flow',
      examples: [
        {
          title: 'Conditionals',
          code: `// if-else
let temperature = 25;

if (temperature > 30) {
  console.log("Hot");
} else if (temperature > 20) {
  console.log("Warm");  // This will execute
} else {
  console.log("Cool");
}

// switch
let day = "Monday";
switch (day) {
  case "Monday":
    console.log("Start of work week");
    break;
  case "Friday":
    console.log("Weekend coming");
    break;
  default:
    console.log("Midweek");
}`,
          explanation: 'Use if/else for conditional branching and switch for multiple fixed cases. Always include break in switch cases to prevent fall-through.'
        },
        {
          title: 'Loops',
          code: `// for loop
for (let i = 0; i < 3; i++) {
  console.log(i); // 0, 1, 2
}

// while loop
let j = 0;
while (j < 3) {
  console.log(j); // 0, 1, 2
  j++;
}

// for...of (arrays)
let fruits = ['apple', 'banana', 'orange'];
for (let fruit of fruits) {
  console.log(fruit);
}

// for...in (object properties)
let user = {name: 'Alice', age: 30};
for (let key in user) {
  console.log(key, user[key]);
}`,
          explanation: 'JavaScript provides multiple loop types: for (counter-based), while (condition-based), for...of (iterables), and for...in (object properties).'
        },
        {
          title: 'Loop Control',
          code: `// break - exit loop
for (let i = 0; i < 5; i++) {
  if (i === 3) break;
  console.log(i); // 0, 1, 2
}

// continue - skip iteration
for (let i = 0; i < 5; i++) {
  if (i === 2) continue;
  console.log(i); // 0, 1, 3, 4
}`,
          explanation: 'Use break to exit a loop completely and continue to skip the current iteration and move to the next one.'
        }
      ]
    },
    // 3. Functions
    {
      id: 'functions',
      title: 'Functions',
      examples: [
        {
          title: 'Function Declarations',
          code: `// Function declaration
function greet(name) {
  return "Hello, " + name;
}

// Function expression
const greetExpr = function(name) {
  return "Hello, " + name;
};

// Arrow function
const greetArrow = name => "Hello, " + name;

console.log(greet("Alice"));     // "Hello, Alice"
console.log(greetExpr("Bob"));   // "Hello, Bob"
console.log(greetArrow("Eve"));  // "Hello, Eve"`,
          explanation: 'Functions can be declared traditionally, as expressions, or as arrow functions. Arrow functions have concise syntax and lexical this binding.'
        },
        {
          title: 'Parameters & Arguments',
          code: `// Default parameters
function createUser(name, role = 'user') {
  return { name, role };
}

// Rest parameters
function sum(...numbers) {
  return numbers.reduce((total, num) => total + num, 0);
}

console.log(createUser("Alice")); // {name: "Alice", role: "user"}
console.log(sum(1, 2, 3));       // 6`,
          explanation: 'Functions can have default parameters and rest parameters (...args) to handle variable numbers of arguments.'
        },
        {
          title: 'Higher-Order Functions',
          code: `// Function that returns a function
function multiplier(factor) {
  return function(number) {
    return number * factor;
  };
}

const double = multiplier(2);
console.log(double(5)); // 10

// Function that accepts a function
function applyOperation(num, operation) {
  return operation(num);
}

console.log(applyOperation(3, x => x * x)); // 9`,
          explanation: 'Higher-order functions either take functions as arguments or return functions. They enable powerful patterns like function composition.'
        }
      ]
    },
    // 4. Scope & Closures
    {
      id: 'scope-closures',
      title: 'Scope & Closures',
      examples: [
        {
          title: 'Variable Scope',
          code: `let globalVar = "I'm global";

function scopeTest() {
  let functionVar = "I'm function-scoped";
  
  if (true) {
    let blockVar = "I'm block-scoped";
    console.log(blockVar);    // Works
    console.log(functionVar); // Works
  }
  
  // console.log(blockVar); // ReferenceError
}

scopeTest();
console.log(globalVar);    // Works
// console.log(functionVar); // ReferenceError`,
          explanation: 'Variables have different scopes: global (entire program), function (inside function), and block (inside {} with let/const). var is function-scoped.'
        },
        {
          title: 'Closures',
          code: `function createCounter() {
  let count = 0;
  
  return function() {
    count++;
    return count;
  };
}

const counter = createCounter();
console.log(counter()); // 1
console.log(counter()); // 2
console.log(counter()); // 3`,
          explanation: 'Closures allow functions to "remember" their lexical scope even when executed outside that scope. Here, counter maintains access to count.'
        }
      ]
    },
    // 5. Objects & Arrays
    {
      id: 'objects-arrays',
      title: 'Objects & Arrays',
      examples: [
        {
          title: 'Objects',
          code: `// Object literal
const person = {
  name: "Alice",
  age: 30,
  greet: function() {
    return "Hello, I'm " + this.name;
  }
};

// Accessing properties
console.log(person.name);       // "Alice"
console.log(person['age']);     // 30
console.log(person.greet());    // "Hello, I'm Alice"

// Adding properties
person.job = "Developer";
console.log(person.job);        // "Developer"`,
          explanation: 'Objects store key-value pairs and methods. Properties can be accessed with dot notation or bracket notation. Objects are mutable.'
        },
        {
          title: 'Arrays',
          code: `const fruits = ['apple', 'banana'];

// Adding/removing elements
fruits.push('orange');     // Add to end
fruits.pop();             // Remove from end
fruits.unshift('kiwi');   // Add to start
fruits.shift();           // Remove from start

// Common methods
const numbers = [1, 2, 3, 4];
const doubled = numbers.map(n => n * 2);  // [2, 4, 6, 8]
const evens = numbers.filter(n => n % 2 === 0); // [2, 4]
const sum = numbers.reduce((acc, n) => acc + n, 0); // 10

// Destructuring
const [first, second] = numbers;
console.log(first, second); // 1, 2`,
          explanation: 'Arrays are ordered lists with many useful methods like map, filter, and reduce. Destructuring allows easy extraction of values.'
        }
      ]
    },
    // 6. Prototypes & Inheritance
    {
      id: 'prototypes-inheritance',
      title: 'Prototypes & Inheritance',
      examples: [
        {
          title: 'Prototypes',
          code: `// Every object has a prototype
const obj = {};
console.log(obj.__proto__ === Object.prototype); // true

// Adding to prototype
Array.prototype.last = function() {
  return this[this.length - 1];
};
console.log([1, 2, 3].last()); // 3`,
          explanation: 'JavaScript uses prototypal inheritance. Objects inherit properties and methods from their prototype. Modifying prototypes affects all instances.'
        },
        {
          title: 'Classes',
          code: `class Animal {
  constructor(name) {
    this.name = name;
  }
  
  speak() {
    return this.name + ' makes a sound';
  }
}

class Dog extends Animal {
  constructor(name, breed) {
    super(name);
    this.breed = breed;
  }
  
  speak() {
    return super.speak() + ' and barks!';
  }
}

const dog = new Dog('Rex', 'Labrador');
console.log(dog.speak()); // "Rex makes a sound and barks!"`,
          explanation: 'ES6 class syntax provides cleaner inheritance. extends creates child classes, super calls parent constructor/methods.'
        }
      ]
    },
    // 7. Asynchronous JavaScript
    {
      id: 'async',
      title: 'Asynchronous JavaScript',
      examples: [
        {
          title: 'Promises',
          code: `const fetchData = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const success = Math.random() > 0.5;
      success ? resolve("Data fetched!") : reject("Error!");
    }, 1000);
  });
};

fetchData()
  .then(data => console.log(data))
  .catch(error => console.error(error))
  .finally(() => console.log("Done"));`,
          explanation: 'Promises represent eventual completion of async operations. They can be in pending, fulfilled, or rejected states. Chain with then/catch/finally.'
        },
        {
          title: 'Async/Await',
          code: `async function getData() {
  try {
    const response = await fetch('https://api.example.com/data');
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error("Error:", error);
  }
}

getData();`,
          explanation: 'Async/await provides cleaner syntax for working with promises. async functions always return promises. await pauses execution until promise settles.'
        }
      ],
      preview: '<div style="background:#eee;padding:1rem;border-radius:4px;font-family:monospace;font-size:14px;">Async output: "Data fetched!" or "Error!" (after 1s)</div>'
    },
    // 8. Error Handling
    {
      id: 'error-handling',
      title: 'Error Handling',
      examples: [
        {
          title: 'try/catch',
          code: `function parseJSON(jsonString) {
  try {
    const result = JSON.parse(jsonString);
    console.log("Success:", result);
    return result;
  } catch (error) {
    console.error("Failed to parse JSON:", error.message);
    return null;
  } finally {
    console.log("Attempted to parse JSON");
  }
}

parseJSON('{"valid": true}');   // Success
parseJSON('invalid json');      // Failure`,
          explanation: 'try/catch/finally allows graceful handling of errors. Code in try runs first, catch handles errors, finally always executes.'
        },
        {
          title: 'Custom Errors',
          code: `class ValidationError extends Error {
  constructor(message) {
    super(message);
    this.name = "ValidationError";
  }
}

function validateInput(input) {
  if (!input) {
    throw new ValidationError("Input cannot be empty");
  }
}

try {
  validateInput("");
} catch (error) {
  if (error instanceof ValidationError) {
    console.error("Validation failed:", error.message);
  } else {
    console.error("Unknown error:", error);
  }
}`,
          explanation: 'Custom errors extend the Error class for more specific error handling. Use instanceof to check error types.'
        }
      ]
    },
    // 9. Modules
    {
      id: 'modules',
      title: 'Modules',
      examples: [
        {
          title: 'Export/Import',
          code: `// math.js
export const add = (a, b) => a + b;
export const subtract = (a, b) => a - b;
const secret = 42;
export default function multiply(a, b) {
  return a * b;
}

// app.js
import multiply, { add, subtract } from './math.js';
console.log(add(2, 3));        // 5
console.log(multiply(2, 3));   // 6`,
          explanation: 'ES modules allow organized code splitting. Use named exports for multiple values and default export for primary functionality.'
        },
        {
          title: 'Dynamic Imports',
          code: `// Load module dynamically when needed
button.addEventListener('click', async () => {
  const module = await import('./dialog.js');
  module.openDialog();
});`,
          explanation: 'Dynamic imports load modules on demand, improving performance. Returns a promise that resolves to the module.'
        }
      ]
    },
    // 10. Browser API & DOM
    {
      id: 'browser-dom',
      title: 'Browser API & DOM',
      examples: [
        {
          title: 'DOM Manipulation',
          code: `// Create element
const div = document.createElement('div');
div.textContent = 'Hello World';
div.className = 'greeting';

// Add to DOM
document.body.appendChild(div);

// Event listener
div.addEventListener('click', () => {
  div.style.backgroundColor = 'lightblue';
});`,
          explanation: 'The DOM API allows creating, modifying, and removing elements. Event listeners respond to user interactions.'
        },
        {
          title: 'Fetch API',
          code: `async function getUsers() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    if (!response.ok) throw new Error('Network response was not ok');
    const users = await response.json();
    console.log(users);
  } catch (error) {
    console.error('Error fetching users:', error);
  }
}

getUsers();`,
          explanation: 'Fetch API provides interface for HTTP requests. Returns a promise that resolves to the response. Always handle errors.'
        }
      ],
      preview: '<div style="background:#eee;padding:1rem;border-radius:4px;font-family:monospace;font-size:14px;">DOM output: <div class="greeting">Hello World</div></div>'
    },
    // 11. Advanced Topics
    {
      id: 'advanced',
      title: 'Advanced Topics',
      examples: [
        {
          title: 'this Keyword',
          code: `const person = {
  name: "Alice",
  greet: function() {
    console.log('Hello, ' + this.name);
  },
  greetArrow: () => {
    console.log('Hello, ' + this.name); // undefined
  }
};

person.greet();       // "Hello, Alice"
person.greetArrow();  // "Hello, undefined"

const greetFn = person.greet;
greetFn();            // "Hello, undefined" (lost context)`,
          explanation: 'this refers to execution context. In methods, it refers to the object. Arrow functions inherit this from surrounding scope. Can be bound with bind().'
        },
        {
          title: 'Generators',
          code: `function* idGenerator() {
  let id = 1;
  while (true) {
    yield id++;
  }
}

const gen = idGenerator();
console.log(gen.next().value); // 1
console.log(gen.next().value); // 2
console.log(gen.next().value); // 3`,
          explanation: 'Generators can pause and resume execution using yield. Useful for creating iterators or managing async flow.'
        }
      ]
    },
    // 12. Tooling & Modern Workflow
    {
      id: 'tooling',
      title: 'Tooling & Modern Workflow',
      examples: [
        {
          title: 'Modern JS Features',
          code: `// Optional chaining
const street = user?.address?.street;

// Nullish coalescing
const defaultValue = input ?? 'default';

// Logical assignment
let x = 0;
x ||= 10; // 10 (if x is falsy)

// Top-level await
const data = await fetchData(); // In modules`,
          explanation: 'Modern JavaScript includes optional chaining (?.), nullish coalescing (??), logical assignment (||=, &&=, ??=), and top-level await.'
        },
        {
          title: 'Testing Example',
          code: `// Example Jest test
function sum(a, b) {
  return a + b;
}

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});`,
          explanation: 'Testing frameworks like Jest provide utilities for writing and running tests. Essential for maintaining code quality.'
        }
      ]
    }
  ]
};