import { DiPhp } from 'react-icons/di';

export const phpContent = {
  icon: DiPhp,
  title: 'PHP',
  color: '#4F5B93', // PHP's official brand color
  description: 'A complete guide to PHP for beginners, starting from the absolute basics and progressing to advanced topics like OOP, security, and modern framework usage.',
  sections: [
    {
      id: 'getting-started',
      title: '1. Getting Started',
      examples: [
        {
          title: 'What is PHP?',
          code: `// PHP stands for "PHP: Hypertext Preprocessor".
// It's a server-side scripting language.
// This means the code runs on your web server, not in the user's browser.

// Use Case:
// 1. Your server receives a request for a .php file.
// 2. The server executes the PHP code in the file.
// 3. The PHP code generates HTML content.
// 4. The server sends the final HTML back to the user's browser.`,
          explanation: 'PHP is primarily used to create dynamic web pages. It can connect to databases, manage user sessions, send emails, and much more, all before the page is sent to the user.'
        },
        {
          title: 'Local Development Environment',
          code: `// To run PHP on your computer, you need a server stack.
// Popular all-in-one packages include:
// XAMPP (for Windows, macOS, Linux)
// MAMP (for macOS, Windows)
// WAMP (for Windows)
// Laravel Herd (for macOS, Windows)

// These packages typically bundle:
// - Apache or Nginx (the web server)
// - PHP (the language itself)
// - MySQL or MariaDB (the database)`,
          explanation: 'A local server environment simulates a live web server on your machine, allowing you to build and test your PHP applications without needing to upload them to the internet.'
        }
      ]
    },
    {
      id: 'php-syntax-basics',
      title: '2. Syntax Basics',
      examples: [
        {
          title: 'PHP Tags & Echo',
          code: `<?php
  // This is the standard opening PHP tag.
  // All PHP code must go inside these tags.

  // 'echo' is used to output text to the browser.
  echo "Hello, World!"; 
  
  // Every PHP statement must end with a semicolon (;).
?>`,
          explanation: 'A `.php` file can contain both HTML and PHP code. The server executes only the code found within `<?php ... ?>` tags and outputs the result as plain text or HTML.'
        },
        {
          title: 'Variables',
          code: `<?php
  // A variable stores a piece of information.
  // In PHP, all variables start with a dollar sign ($).
  $greeting = "Hello";
  $userCount = 10;
  
  // You can output variables using echo.
  echo $greeting; // Outputs: Hello
  echo $userCount; // Outputs: 10
  
  // Variables are case-sensitive ($name is different from $Name).
  $name = "Alice";
  echo "Welcome, $name"; // You can embed variables in double-quoted strings.
?>`,
          explanation: 'Variables are fundamental for storing and manipulating data. PHP does not require you to declare the data type of a variable before assigning a value.'
        },
        {
          title: 'Constants',
          code: `<?php
  // Constants are like variables, but their value cannot be changed.
  // They are useful for values that never change, like API keys or config settings.
  
  // Old way (still valid):
  define("SITE_URL", "https://www.example.com");
  
  // Modern way (preferred, defined at compile time):
  const MAX_USERS = 100;
  
  echo SITE_URL; // Outputs: https://www.example.com
  echo MAX_USERS; // Outputs: 100
?>`,
          explanation: 'Unlike variables, constants do not use the `$` prefix. By convention, constant names are written in all-uppercase letters.'
        }
      ]
    },
    {
      id: 'data-types',
      title: '3. Data Types',
      examples: [
        {
          title: 'Scalar Types',
          code: `$aString = "This is text!"; // String (text)
$anInteger = 123;         // Integer (whole number)
$aFloat = 19.99;          // Float (decimal number)
$aBoolean = true;         // Boolean (true or false)`,
          explanation: 'These are the simplest data types for holding single values. Strings can be enclosed in single (`\'\'`) or double (`""`) quotes.'
        },
        {
          title: 'Compound Types',
          code: `// Array: A collection of values.
$colors = ["Red", "Green", "Blue"];

// Object: An instance of a class.
class Car { public $color = "Red"; }
$myCar = new Car();

// Callable: A reference to a function.
$myFunction = function() { echo "Hello"; };

// Iterable: Any type that can be looped over (like arrays).`,
          explanation: 'Compound types can hold multiple values or complex structures. Arrays and Objects are the most commonly used compound types in PHP.'
        },
        {
          title: 'Special Types',
          code: `$noValue = null; // Null: Represents "no value" or an unassigned variable.
$aResource = fopen("file.txt", "r"); // Resource: A special variable holding a reference to an external resource (like a file or database connection).`,
          explanation: '`null` is a special type that can only have one value: `null`. It signifies the intentional absence of a value.'
        }
      ]
    },
    {
      id: 'string-manipulation',
      title: '4. String Manipulation',
      examples: [
        {
          title: 'Concatenation & Interpolation',
          code: `$firstName = "John";
$lastName = "Doe";

// Concatenation uses the dot (.) operator.
$fullName = $firstName . " " . $lastName;
echo $fullName; // Outputs: John Doe

// Interpolation only works with double quotes.
$greeting = "Hello, \${firstName}!";
echo $greeting; // Outputs: Hello, John!

// Single quotes treat variables as literal text.
$badGreeting = 'Hello, $firstName!';
echo $badGreeting; // Outputs: Hello, $firstName!`,
          explanation: 'Combining strings is a very common operation. Use the `.` operator for concatenation or double quotes `""` for direct variable interpolation.'
        },
        {
          title: 'Common String Functions',
          code: `$text = "The quick brown fox.";

// Get string length
echo strlen($text); // Outputs: 20

// Replace text
echo str_replace("fox", "cat", $text); // Outputs: The quick brown cat.

// Convert to lower/upper case
echo strtolower($text); // the quick brown fox.
echo strtoupper($text); // THE QUICK BROWN FOX.

// Find position of a substring
echo strpos($text, "quick"); // Outputs: 4 (position starts at 0)`,
          explanation: 'PHP has a rich library of built-in functions for manipulating strings, making tasks like searching, replacing, and formatting easy.'
        }
      ]
    },
    {
      id: 'arrays-in-depth',
      title: '5. Arrays In-Depth',
      examples: [
        {
          title: 'Indexed and Associative Arrays',
          code: `// Indexed Array (keys are numeric, starting from 0)
$fruits = ["Apple", "Banana", "Cherry"];
echo $fruits[1]; // Outputs: Banana

// Associative Array (keys are custom strings)
$user = [
  "name" => "Alice",
  "email" => "alice@example.com",
  "age" => 30
];
echo $user["email"]; // Outputs: alice@example.com`,
          explanation: 'Arrays are versatile data structures in PHP. Indexed arrays are used for ordered lists, while associative arrays are perfect for key-value pairs (like dictionaries or maps in other languages).'
        },
        {
          title: 'Modifying Arrays',
          code: `$colors = ["Red", "Green"];

// Add an element to the end
$colors[] = "Blue"; // $colors is now ["Red", "Green", "Blue"]
array_push($colors, "Yellow"); // Same effect

// Change an element
$colors[0] = "Orange"; // $colors is now ["Orange", "Green", "Blue", "Yellow"]

// Remove an element
unset($colors[1]); // Removes "Green"`,
          explanation: 'PHP provides multiple ways to add, update, and remove elements from an array, both via direct assignment and built-in functions.'
        },
        {
          title: 'Iterating with `foreach`',
          code: `$fruits = ["Apple", "Banana", "Cherry"];
foreach ($fruits as $fruit) {
  echo $fruit . "<br>";
}

$user = ["name" => "Alice", "age" => 30];
foreach ($user as $key => $value) {
  echo "$key: $value <br>";
}`,
          explanation: 'The `foreach` loop is the standard and most convenient way to iterate over every element in an array.'
        }
      ]
    },
    {
      id: 'control-structures',
      title: '6. Control Structures',
      examples: [
        {
          title: 'If, Elseif, Else',
          code: `$hour = date('H'); // Get current hour (0-23)

if ($hour < 12) {
  echo "Good morning!";
} elseif ($hour < 18) {
  echo "Good afternoon!";
} else {
  echo "Good evening!";
}`,
          explanation: 'Conditional statements allow your program to make decisions and execute different blocks of code based on whether a condition is true or false.'
        },
        {
          title: 'Switch vs. Match',
          code: `$day = "Wednesday";

// Switch statement (loose comparison `==`)
switch ($day) {
  case "Monday":
    echo "It's the start of the week.";
    break;
  case "Friday":
    echo "TGIF!";
    break;
  default:
    echo "It's a regular day.";
}

// Match expression (PHP 8.0+) (strict comparison `===`)
$greeting = match ($day) {
  "Monday" => "Welcome to a new week!",
  "Wednesday" => "Happy hump day!",
  "Friday" => "The weekend is almost here!",
  default => "Have a great day!",
};
echo $greeting;`,
          explanation: 'The modern `match` expression is often preferred over `switch`. It uses stricter comparison, is less error-prone (no `break` needed), and can return a value.'
        },
      ]
    },
    {
      id: 'functions',
      title: '7. Functions',
      examples: [
        {
          title: 'Defining and Calling Functions',
          code: `// A simple function definition
function sayHello() {
  echo "Hello there!";
}

// Calling the function
sayHello(); // Outputs: Hello there!

// Function with a parameter
function greet($name) {
  echo "Hello, $name!";
}

greet("Bob"); // Outputs: Hello, Bob!`,
          explanation: 'Functions are reusable blocks of code that perform a specific task. They help organize your code and prevent repetition.'
        },
        {
          title: 'Return Values & Type Hinting',
          code: `// Function with typed parameters and a return type (PHP 7+)
function add(int $a, int $b): int {
  return $a + $b;
}

$sum = add(5, 10);
echo $sum; // Outputs: 15

// This would cause an error because of the type hint
// $wrongSum = add("5", "ten");`,
          explanation: 'Functions can return a value using the `return` keyword. Modern PHP strongly encourages using type hints for parameters and return values to make code more robust and self-documenting.'
        }
      ]
    },
    {
      id: 'handling-web-requests',
      title: '8. Handling Web Requests',
      examples: [
        {
          title: 'HTML Form',
          code: `<form action="process.php" method="POST">
    <label for="username">Username:</label>
    <input type="text" id="username" name="username">
    
    <label for="password">Password:</label>
    <input type="password" id="password" name="password">
    
    <button type="submit">Log In</button>
</form>`,
          explanation: 'HTML forms are the primary way users send data to your PHP scripts. The `action` attribute specifies the PHP file that will process the data, and `method` determines how it is sent (`POST` or `GET`).'
        },
        {
          title: 'Handling POST Data',
          code: `// process.php
<?php
// $_POST is a superglobal array containing data sent via the POST method.

if (!empty($_POST['username'])) {
  // Always sanitize user input to prevent XSS attacks!
  $username = htmlspecialchars($_POST['username']);
  echo "Welcome, " . $username;
} else {
  echo "Username is required.";
}
?>`,
          explanation: 'Data sent from a form using `method="POST"` is available in the `$_POST` superglobal array. It is critical to sanitize this data with functions like `htmlspecialchars` before displaying it.'
        },
        {
          title: 'Handling GET Data (URL Parameters)',
          code: `// To access this page, use a URL like: /user.php?id=123
// user.php
<?php
// $_GET is a superglobal array containing data from the URL query string.

if (isset($_GET['id'])) {
  $userId = htmlspecialchars($_GET['id']);
  echo "Showing profile for User ID: " . $userId;
} else {
  echo "No user ID specified.";
}
?>`,
          explanation: 'Data passed in the URL (e.g., `?key=value`) is available in the `$_GET` superglobal. This is typically used for non-sensitive data, like page numbers or search queries.'
        }
      ]
    },
    {
      id: 'oop-fundamentals',
      title: '9. Object-Oriented Programming (OOP)',
      examples: [
        {
          title: 'Classes and Objects',
          code: `class Dog {
  // Property (a variable belonging to the class)
  public $name;

  // Method (a function belonging to the class)
  public function bark() {
    return "Woof!";
  }
}

// Create an object (an instance of the class)
$myDog = new Dog();
$myDog->name = "Buddy";

echo $myDog->name; // Outputs: Buddy
echo $myDog->bark(); // Outputs: Woof!`,
          explanation: 'A class is a blueprint for creating objects. An object combines data (properties) and behavior (methods) into a single unit.'
        },
        {
          title: 'Constructor & `$this`',
          code: `class Person {
  public $name;

  // The constructor method is called automatically when a new object is created.
  public function __construct($name) {
    // '$this' refers to the current object instance.
    $this->name = $name;
  }
  
  public function greet() {
    return "Hello, my name is " . $this->name;
  }
}

$alice = new Person("Alice");
echo $alice->greet(); // Outputs: Hello, my name is Alice`,
          explanation: 'The constructor (`__construct`) is ideal for setting up an object\'s initial state. The `$this` keyword is used inside a class to access its own properties and methods.'
        },
        {
          title: 'Access Modifiers',
          code: `class BankAccount {
  public $accountNumber; // Can be accessed from anywhere
  protected $branchCode;   // Can be accessed within this class and its child classes
  private $balance;      // Can only be accessed within this class
  
  public function __construct($accountNumber, $initialBalance) {
    $this->accountNumber = $accountNumber;
    $this->balance = $initialBalance;
  }

  public function getBalance() {
    // We can access the private property from within the class.
    return $this->balance;
  }
}

$myAccount = new BankAccount("123", 1000);
echo $myAccount->accountNumber; // OK
// echo $myAccount->balance; // ERROR! Cannot access private property.
echo $myAccount->getBalance(); // OK, outputs 1000`,
          explanation: 'Access modifiers (`public`, `protected`, `private`) control the visibility of properties and methods, a key principle of encapsulation.'
        },
        {
            title: 'Inheritance',
            code: `class Animal {
  public function eat() {
    return "This animal is eating.";
  }
}

// The 'Cat' class inherits all public and protected methods from 'Animal'.
class Cat extends Animal {
  public function meow() {
    return "Meow!";
  }
}

$myCat = new Cat();
echo $myCat->eat();  // Outputs: This animal is eating.
echo $myCat->meow(); // Outputs: Meow!`,
            explanation: 'Inheritance allows a class (child) to inherit properties and methods from another class (parent), promoting code reuse.'
        }
      ]
    },
    {
      id: 'database-interaction-pdo',
      title: '10. Database Interaction (PDO)',
      examples: [
        {
          title: 'Establishing a Connection',
          code: `$host = '127.0.0.1';
$dbName = 'my_app_db';
$username = 'root';
$password = 'your_password'; // Use a secure password!

$dsn = "mysql:host=$host;dbname=$dbName;charset=utf8mb4";
$options = [
  PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
  PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
];

try {
  $pdo = new PDO($dsn, $username, $password, $options);
  echo "Connection successful!";
} catch (PDOException $e) {
  // In a real app, log this error, don't show it to the user.
  throw new PDOException("Database connection failed: " . $e->getMessage());
}`,
          explanation: 'PDO (PHP Data Objects) is the modern, secure way to connect to databases. A `try...catch` block is used to handle potential connection errors gracefully.'
        },
        {
          title: 'Prepared Statements (Security)',
          code: `// Assume $pdo connection from previous example.
$userInputId = $_GET['id']; // This is untrusted data!

// 1. Prepare the SQL statement with placeholders (:id).
$stmt = $pdo->prepare("SELECT * FROM users WHERE id = :id");

// 2. Execute the statement, binding the user data to the placeholder.
// PDO handles the sanitization, preventing SQL Injection.
$stmt->execute(['id' => $userInputId]);

// 3. Fetch the result.
$user = $stmt->fetch();

if ($user) {
  echo "Hello, " . htmlspecialchars($user['name']);
}`,
          explanation: 'This is the most critical concept for database security. Never put variables directly into your SQL queries. Always use prepared statements with placeholders to prevent SQL injection attacks.'
        }
      ]
    },
    {
      id: 'security-best-practices',
      title: '11. Security Best Practices',
      examples: [
        {
          title: 'Password Hashing',
          code: `// HASHING a password (when a user signs up)
$plainTextPassword = "password123";
$hashedPassword = password_hash($plainTextPassword, PASSWORD_BCRYPT);

// $hashedPassword is what you store in the database.
// It will look something like: '$2y$10$...'

// VERIFYING a password (when a user logs in)
$loginAttempt = "password123";
if (password_verify($loginAttempt, $hashedPassword)) {
  echo "Password is correct!";
} else {
  echo "Invalid password.";
}`,
          explanation: 'Never, ever store passwords as plain text. Use PHP\'s built-in `password_hash()` and `password_verify()` functions, which are designed to be secure and updated over time.'
        },
        {
          title: 'Preventing Cross-Site Scripting (XSS)',
          code: `// An attacker might submit this as their "comment":
$maliciousInput = '<script>alert("XSS Attack!");</script>';

// If you just echo it, the script will run in the browser.
// echo $maliciousInput; // VERY DANGEROUS

// ALWAYS use htmlspecialchars() when displaying user-provided content.
$safeOutput = htmlspecialchars($maliciousInput, ENT_QUOTES, 'UTF-8');
echo $safeOutput; 
// The browser will display the harmless text: <script>alert("XSS Attack!");</script>`,
          explanation: 'XSS occurs when malicious scripts are injected into web pages viewed by other users. Always escape any user-generated content before rendering it in HTML.'
        }
      ]
    },
    {
      id: 'intro-to-frameworks-laravel',
      title: '12. Next Steps: Introduction to Frameworks',
      examples: [
        {
          title: 'What is a Framework?',
          code: `// A framework provides a structure and pre-built components for your applications.
// It handles common tasks like:
// - Routing (e.g., mapping /about to the About Us page)
// - Database interaction (Object-Relational Mapping - ORM)
// - Templating (mixing HTML and logic safely)
// - Security (built-in protection for common vulnerabilities)

// Popular PHP frameworks:
// - Laravel (very popular, great ecosystem)
// - Symfony (robust, used by many large projects)
// - CodeIgniter (lightweight and fast)`,
          explanation: 'While you can build everything from scratch, frameworks dramatically speed up development and help you write more organized, secure, and maintainable code by providing a solid foundation.'
        },
        {
          title: 'Example: Laravel Route and Controller',
          code: `// In Laravel, you define routes that point to controller methods.

// File: routes/web.php
use App\\Http\\Controllers\\UserController;
Route::get('/user/{id}', [UserController::class, 'show']);

// File: app/Http/Controllers/UserController.php
namespace App\\Http\\Controllers;
use App\\Models\\User;

class UserController extends Controller
{
    // Laravel automatically finds the User with the given {id} from the database.
    public function show(User $user)
    {
        // 'user.profile' is a view file.
        // The user data is passed to the view.
        return view('user.profile', ['user' => $user]);
    }
}`,
          explanation: 'This small example shows the power of a framework. Routing is clean, database fetching is automatic (Route Model Binding), and logic is neatly separated in a controller.'
        }
      ]
    }
  ]
};