import { PiFileCSharp } from "react-icons/pi";


export const csharpContent = {
    icon: PiFileCSharp,
    title: 'C#',
    color: '#239120', // C#'s official brand color
    description: 'A comprehensive guide to C# programming language.',
    sections: [
      {
        id: 'getting-started',
        title: 'Getting Started',
        examples: [
          {
            title: 'Hello World',
            code: `class Hello {
    // Main method
    static void Main(string[] args)
    {
      // Output: Hello, world!
      Console.WriteLine("Hello, world!");
    }
  }`,
            explanation: 'Basic C# program structure. The entry point is the Main method.',
            usage: `$ dotnet run\nHello, world!`
          },
          {
            title: 'Compilation',
            code: `// Compile and run from project directory
  $ dotnet run`,
            explanation: 'How to compile and execute C# programs using .NET CLI'
          }
        ]
      },
      {
        id: 'variables-data-types',
        title: 'Variables & Data Types',
        examples: [
          {
            title: 'Variable Declaration',
            code: `int intNum = 9;
  long longNum = 9999999;
  float floatNum = 9.99F;
  double doubleNum = 99.999;
  decimal decimalNum = 99.9999M;
  char letter = 'D';
  bool @bool = true;
  string site = "quickref.me";
  
  // Implicit typing
  var num = 999;
  var str = "999";
  var bo = false;`,
            explanation: 'C# supports explicit and implicit variable declaration'
          },
          {
            title: 'Primitive Data Types',
            code: `// Integer types
int smallNumber = 42;          // 4 bytes, -2³¹ to 2³¹-1
long bigNumber = 42L;          // 8 bytes, -2⁶³ to 2⁶³-1

// Floating-point types
float pi = 3.14159f;           // 4 bytes, 6-7 decimal digits
double precise = 3.14159;      // 8 bytes, 15 decimal digits
decimal money = 3.14159m;      // 16 bytes, 28-29 decimal digits

// Other primitive types
char letter = 'A';             // 2 bytes, Unicode character
bool isTrue = true;            // 1 bit, true/false
string text = "Hello";         // 2 bytes per char, Unicode text

// Type information
Console.WriteLine($"int size: {sizeof(int)} bytes");
Console.WriteLine($"float range: {float.MinValue} to {float.MaxValue}");
Console.WriteLine($"decimal precision: {decimal.GetBits(money)[3]}");`,
            explanation: 'C# primitive types with their sizes and ranges. Use decimal for financial calculations.'
          }
        ]
      },
      {
        id: 'control-flow',
        title: 'Control Flow',
        examples: [
          {
            title: 'Conditionals',
            code: `int j = 10;
  
  if (j == 10) {
    Console.WriteLine("I get printed");
  } else if (j > 10) {
    Console.WriteLine("I don't");
  } else {
    Console.WriteLine("I also don't");
  }`,
            explanation: 'Basic if-else conditional logic'
          },
          {
            title: 'Loops',
            code: `int[] numbers = {1, 2, 3, 4, 5};
  
  // For loop
  for(int i = 0; i < numbers.Length; i++) {
    Console.WriteLine(numbers[i]);
  }
  
  // Foreach loop
  foreach(int num in numbers) {
    Console.WriteLine(num);
  }`,
            explanation: 'Different loop structures for iteration'
          }
        ]
      },
      {
        id: 'strings',
        title: 'Strings',
        examples: [
          {
            title: 'String Operations',
            code: `string first = "John";
  string last = "Doe";
  
  // Concatenation
  string name = first + " " + last;
  
  // Interpolation
  string name2 = $"{first} {last}";
  
  // Verbatim string
  string path = @"C:/Users/Public /Documents";`,
            explanation: 'Different ways to work with strings in C#'
          },
          {
            title: 'String Members',
            code: `string text = "  Hello, World!  ";

// Length property
int length = text.Length;  // Returns 15

// String comparison
bool areEqual = string.Compare("Hello", "hello", true) == 0;  // Case-insensitive
bool contains = text.Contains("World");  // true

// String equality
bool isEqual = text.Equals("  Hello, World!  ");  // true

// String formatting
string formatted = string.Format("Name: {0}, Age: {1}", "John", 30);
// Or using string interpolation
string interpolated = $"Name: {"John"}, Age: {30}";

// String manipulation
string trimmed = text.Trim();  // "Hello, World!"
string[] words = text.Split(',');  // ["  Hello", " World!  "]`,
            explanation: 'Common string methods and properties in C# for manipulation and comparison.'
          }
        ]
      },
      {
        id: 'arrays-collections',
        title: 'Arrays & Collections',
        examples: [
          {
            title: 'Arrays & Collections',
            code: `// Arrays
int[] numbers = new int[5];  // Fixed-size array
numbers[0] = 1;
numbers[1] = 2;

// Array initialization
string[] names = { "Alice", "Bob", "Charlie" };
int[,] matrix = new int[2, 2] { { 1, 2 }, { 3, 4 } };

// Collections
// List<T> - Dynamic array
List<string> fruits = new List<string> { "Apple", "Banana" };
fruits.Add("Orange");
fruits.Remove("Banana");
fruits.Sort();

// Dictionary<TKey, TValue> - Key-value pairs
Dictionary<string, int> ages = new Dictionary<string, int> {
    { "Alice", 30 },
    { "Bob", 25 }
};
ages["Charlie"] = 35;
if (ages.ContainsKey("Alice")) {
    Console.WriteLine($"Alice is {ages["Alice"]} years old");
}

// HashSet<T> - Unique elements
HashSet<int> uniqueNumbers = new HashSet<int> { 1, 2, 3 };
uniqueNumbers.Add(2);  // No effect, already exists
uniqueNumbers.Add(4);  // Added

// Queue<T> - First-in-first-out
Queue<string> tasks = new Queue<string>();
tasks.Enqueue("Task 1");
tasks.Enqueue("Task 2");
string nextTask = tasks.Dequeue();  // "Task 1"

// Stack<T> - Last-in-first-out
Stack<string> history = new Stack<string>();
history.Push("Page 1");
history.Push("Page 2");
string lastPage = history.Pop();  // "Page 2"`,
            explanation: 'C# provides various collection types for different use cases. Arrays are fixed-size, while collections like List<T>, Dictionary<TKey,TValue>, HashSet<T>, Queue<T>, and Stack<T> offer dynamic sizing and specialized operations.'
          },
          {
            title: 'LINQ (Language Integrated Query)',
            code: `// Sample data
var numbers = new[] { 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 };
var people = new List<Person> {
    new Person { Name = "Alice", Age = 30, City = "New York" },
    new Person { Name = "Bob", Age = 25, City = "London" },
    new Person { Name = "Charlie", Age = 35, City = "Paris" }
};

// Filtering
var evenNumbers = numbers.Where(n => n % 2 == 0);
var adults = people.Where(p => p.Age >= 18);

// Projection
var names = people.Select(p => p.Name);
var nameAndAge = people.Select(p => new { p.Name, p.Age });

// Aggregation
var sum = numbers.Sum();
var average = numbers.Average();
var maxAge = people.Max(p => p.Age);

// Grouping
var byCity = people.GroupBy(p => p.City);
foreach (var group in byCity) {
    Console.WriteLine($"City: {group.Key}");
    foreach (var person in group) {
        Console.WriteLine($"  {person.Name}");
    }
}

// Ordering
var sortedByAge = people.OrderBy(p => p.Age);
var sortedByAgeDesc = people.OrderByDescending(p => p.Age);

// Chaining
var result = people
    .Where(p => p.Age > 25)
    .OrderBy(p => p.Name)
    .Select(p => p.Name)
    .ToList();`,
            explanation: 'LINQ provides a powerful way to query and manipulate data using a SQL-like syntax. It works with any collection that implements IEnumerable<T> and supports operations like filtering, projection, aggregation, grouping, and ordering.'
          }
        ]
      },
      {
        id: 'oop',
        title: 'Object-Oriented Programming',
        examples: [
          {
            title: 'Classes & Objects',
            code: `// Basic class with properties and methods
public class Person {
    // Properties with auto-implemented getters/setters
    public string Name { get; set; }
    public int Age { get; private set; }  // Private setter
    
    // Constructor
    public Person(string name, int age) {
        Name = name;
        Age = age;
    }
    
    // Method
    public void HaveBirthday() {
        Age++;  // Can modify private setter within class
    }
    
    // Override ToString for string representation
    public override string ToString() => $"{Name}, {Age} years old";
}

// Usage
var person = new Person("Alice", 30);
person.HaveBirthday();
Console.WriteLine(person);  // "Alice, 31 years old"`,
            explanation: 'Classes encapsulate data (properties) and behavior (methods). Properties can have different access levels for getters and setters.'
          },
          {
            title: 'Inheritance & Polymorphism',
            code: `// Base class
public abstract class Animal {
    public string Name { get; protected set; }
    
    protected Animal(string name) {
        Name = name;
    }
    
    // Abstract method - must be implemented by derived classes
    public abstract string MakeSound();
    
    // Virtual method - can be overridden
    public virtual string GetInfo() {
        return $"I am {Name}";
    }
}

// Derived class
public class Dog : Animal {
    public string Breed { get; }
    
    public Dog(string name, string breed) : base(name) {
        Breed = breed;
    }
    
    // Implement abstract method
    public override string MakeSound() => "Woof!";
    
    // Override virtual method
    public override string GetInfo() {
        return $"{base.GetInfo()}, a {Breed} dog";
    }
}

// Another derived class
public class Cat : Animal {
    public Cat(string name) : base(name) { }
    
    public override string MakeSound() => "Meow!";
}

// Usage
Animal[] animals = {
    new Dog("Rex", "Golden Retriever"),
    new Cat("Whiskers")
};

foreach (var animal in animals) {
    Console.WriteLine($"{animal.GetInfo()}: {animal.MakeSound()}");
}`,
            explanation: 'Inheritance allows classes to share code through a base class. Abstract classes provide a template, while virtual methods can be overridden. Polymorphism enables treating derived classes through their base type.'
          },
          {
            title: 'Interfaces & Abstract Classes',
            code: `// Interface - defines a contract
public interface ILogger {
    void Log(string message);
    void LogError(string message, Exception ex);
}

// Interface with default implementation (C# 8.0+)
public interface IAdvancedLogger : ILogger {
    void LogWarning(string message) {
        Log($"WARNING: {message}");  // Default implementation
    }
}

// Abstract class - partial implementation
public abstract class BaseLogger : IAdvancedLogger {
    protected readonly string _source;
    
    protected BaseLogger(string source) {
        _source = source;
    }
    
    // Implement interface method
    public void LogError(string message, Exception ex) {
        Log($"[ERROR] {message}: {ex.Message}");
    }
    
    // Abstract method - must be implemented
    public abstract void Log(string message);
}

// Concrete implementation
public class FileLogger : BaseLogger {
    private readonly string _filePath;
    
    public FileLogger(string source, string filePath) 
        : base(source) {
        _filePath = filePath;
    }
    
    public override void Log(string message) {
        File.AppendAllText(_filePath, 
            $"[{_source}] {DateTime.Now}: {message}{Environment.NewLine}");
    }
}

// Usage
ILogger logger = new FileLogger("App", "app.log");
logger.Log("Application started");
logger.LogWarning("Resource usage high");  // Uses default implementation
logger.LogError("Failed to connect", new Exception("Network error"));`,
            explanation: 'Interfaces define contracts that classes must implement. Abstract classes provide partial implementations. C# 8.0+ allows default implementations in interfaces. Use interfaces for multiple inheritance and abstract classes for shared implementation.'
          }
        ]
      },
      {
        id: 'misc',
        title: 'Miscellaneous',
        examples: [
          {
            title: 'Comments',
            code: `// Single-line comment
  
  /* Multi-line 
     comment */
  
  /// XML documentation comment
  /// <summary>
  /// Sample method
  /// </summary>
  
  // TODO: Task list comment`,
            explanation: 'Different comment styles in C#'
          },
          {
            title: 'User Input',
            code: `Console.WriteLine("Enter number:");
  if(int.TryParse(Console.ReadLine(), out int input)) {
    Console.WriteLine($"You entered {input}");
  } else {
    Console.WriteLine("Invalid input");
  }`,
            explanation: 'Handling user input with validation'
          }
        ]
      },
      {
        id: 'dotnet-concepts',
        title: '.NET Concepts',
        examples: [
          {
            title: '.NET Terms',
            code: `// Runtime
// The .NET runtime (CLR) provides services like:
// - Memory management (garbage collection)
// - Type safety
// - Exception handling
// - Security
// - Thread management

// Example of runtime services in action
try {
    // Memory management
    using (var stream = new MemoryStream()) {
        // Type safety
        int number = 42;
        // string text = number;  // Compile-time error
        
        // Exception handling
        if (number == 0) {
            throw new DivideByZeroException();
        }
        
        // Thread management
        Task.Run(() => {
            Console.WriteLine("Running on a different thread");
        });
    }
} catch (Exception ex) {
    // Runtime exception handling
    Console.WriteLine($"Error: {ex.Message}");
}`,
            explanation: 'The .NET runtime provides essential services for executing managed code, including memory management, type safety, and exception handling.'
          }
        ]
      }
    ]
  };