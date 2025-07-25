import {SiCplusplus} from 'react-icons/si';

export const cppContent = {
    icon: SiCplusplus,
    title: "C++",
    color: '#00599C',
    description: "A comprehensive C++ reference with detailed examples and line-by-line explanations based on modern C++ best practices.",
    sections: [
      {
        id: 'intro-to-cpp',
        title: 'Introduction to C++',
        examples: [
          {
            title: 'Hello World with Detailed Explanation',
            code: `#include <iostream>  // Include the input/output stream library
using namespace std;    // Use the standard namespace (optional, but simplifies code)

int main() {           // Main function - program entry point
    // cout is used for output, << is the stream insertion operator
    cout << "Hello, World!" << endl;  // endl adds a newline and flushes the buffer
    return 0;          // Return 0 indicates successful program execution
}`,
            explanation: 'This basic program demonstrates essential C++ concepts: header inclusion, namespace usage, main function, and console output. Each line is commented to explain its purpose.'
          },
          {
            title: 'Variables and Data Types with Memory Explanation',
            code: `// Integer types with different sizes and ranges
int age = 25;          // 4 bytes, range: -2^31 to 2^31-1
short smallNum = 100;  // 2 bytes, range: -2^15 to 2^15-1
long bigNum = 1000000; // At least 4 bytes, platform dependent

// Floating-point types with different precision
float price = 19.99f;  // 4 bytes, 7 decimal digits precision
double pi = 3.14159;   // 8 bytes, 15 decimal digits precision

// Character types
char grade = 'A';      // 1 byte, stores a single character
wchar_t wideChar = L'Ω'; // Wide character for international symbols

// Boolean type
bool isActive = true;  // 1 byte, stores true or false

// String type (from standard library)
string name = "John Doe";  // Dynamic string, size can change

// Auto type deduction (C++11)
auto score = 95;       // Compiler deduces type as int
auto rate = 4.5;       // Compiler deduces type as double`,
            explanation: 'This example shows various C++ data types with their memory sizes and typical uses. Each variable declaration is commented to explain its characteristics and memory requirements.'
          }
        ]
      },
      {
        id: 'basic-syntax',
        title: 'Basic Syntax and Control Flow',
        examples: [
          {
            title: 'Control Structures with Detailed Flow',
            code: `// If-else with multiple conditions
int score = 85;
if (score >= 90) {     // First condition check
    cout << "Grade: A" << endl;
} else if (score >= 80) {  // Second condition check
    cout << "Grade: B" << endl;
} else if (score >= 70) {  // Third condition check
    cout << "Grade: C" << endl;
} else {               // Default case
    cout << "Grade: F" << endl;
}

// Switch statement with fall-through
char grade = 'B';
switch (grade) {
    case 'A':          // Case for grade A
        cout << "Excellent!" << endl;
        break;         // Exit switch after this case
    case 'B':          // Case for grade B
        cout << "Good!" << endl;
        break;
    default:           // Handle any other grade
        cout << "Needs improvement" << endl;
}

// For loop with different styles
// Traditional for loop
for (int i = 0; i < 5; i++) {  // Initialize, condition, increment
    cout << "Count: " << i << endl;
}

// Range-based for loop (C++11)
vector<int> numbers = {1, 2, 3, 4, 5};
for (const auto& num : numbers) {  // Iterate over container
    cout << "Number: " << num << endl;
}

// While loop with condition
int count = 0;
while (count < 3) {    // Continue while condition is true
    cout << "While count: " << count << endl;
    count++;
}

// Do-while loop (executes at least once)
int value = 0;
do {
    cout << "Do-while value: " << value << endl;
    value++;
} while (value < 3);   // Check condition after execution`,
            explanation: 'This comprehensive example demonstrates various control structures in C++. Each structure is commented to explain its purpose and flow. The example includes if-else chains, switch statements, and different types of loops with their specific use cases.'
          }
        ]
      },
      {
        id: 'object-oriented-programming',
        title: 'Object-Oriented Programming',
        examples: [
          {
            title: 'Classes and Objects with Access Modifiers',
            code: `#include <iostream>
#include <string>

class BankAccount {
private:    // Private members - only accessible within the class
    string accountNumber;  // Private data member
    double balance;        // Private data member
    
    // Private helper method
    void logTransaction(const string& type, double amount) {
        cout << "Transaction: " << type << " $" << amount << endl;
    }

public:     // Public members - accessible from outside the class
    // Constructor - initializes object
    BankAccount(const string& accNum, double initialBalance) 
        : accountNumber(accNum), balance(initialBalance) {
        cout << "Account created: " << accountNumber << endl;
    }
    
    // Public methods
    void deposit(double amount) {
        if (amount > 0) {
            balance += amount;
            logTransaction("Deposit", amount);
        }
    }
    
    bool withdraw(double amount) {
        if (amount > 0 && amount <= balance) {
            balance -= amount;
            logTransaction("Withdrawal", amount);
            return true;
        }
        return false;
    }
    
    // Getter method
    double getBalance() const {  // const method - won't modify object
        return balance;
    }
};

// Usage example
int main() {
    // Create object using constructor
    BankAccount account("12345", 1000.0);
    
    // Use public methods
    account.deposit(500.0);
    if (account.withdraw(200.0)) {
        cout << "New balance: $" << account.getBalance() << endl;
    }
    
    return 0;
}`,
            explanation: 'This example demonstrates a complete class implementation with proper encapsulation. It shows private and public members, constructors, methods, and const correctness. Each section is commented to explain its purpose and access level.'
          },
          {
            title: 'Inheritance and Polymorphism',
            code: `#include <iostream>
#include <string>
#include <memory>
#include <vector>

// Base class
class Shape {
protected:  // Protected members - accessible by derived classes
    string name;
    double area;
    
public:
    Shape(const string& n) : name(n), area(0.0) {}
    
    // Virtual method - can be overridden by derived classes
    virtual void calculateArea() = 0;  // Pure virtual - makes Shape abstract
    
    // Virtual destructor - important for proper cleanup
    virtual ~Shape() = default;
    
    // Virtual method with default implementation
    virtual void display() const {
        cout << "Shape: " << name << ", Area: " << area << endl;
    }
    
protected:
    void setArea(double a) { area = a; }
};

// Derived class
class Circle : public Shape {
private:
    double radius;
    
public:
    Circle(double r) : Shape("Circle"), radius(r) {}
    
    // Override virtual method
    void calculateArea() override {
        setArea(3.14159 * radius * radius);
    }
    
    // Override display method
    void display() const override {
        cout << "Circle with radius " << radius << ": ";
        Shape::display();  // Call base class method
    }
};

// Another derived class
class Rectangle : public Shape {
private:
    double width, height;
    
public:
    Rectangle(double w, double h) 
        : Shape("Rectangle"), width(w), height(h) {}
    
    void calculateArea() override {
        setArea(width * height);
    }
    
    void display() const override {
        cout << "Rectangle " << width << "x" << height << ": ";
        Shape::display();
    }
};

int main() {
    // Using smart pointers for memory management
    vector<unique_ptr<Shape>> shapes;
    shapes.push_back(make_unique<Circle>(5.0));
    shapes.push_back(make_unique<Rectangle>(4.0, 6.0));
    
    // Polymorphic behavior
    for (const auto& shape : shapes) {
        shape->calculateArea();  // Calls appropriate derived class method
        shape->display();        // Calls appropriate derived class method
    }
    
    return 0;
}`,
            explanation: 'This example demonstrates advanced OOP concepts including inheritance, polymorphism, and smart pointers. It shows proper use of virtual methods, abstract classes, and override specifiers. Each class and method is commented to explain its role in the inheritance hierarchy.'
          }
        ]
      },
      {
        id: 'collections',
        title: 'Collections and STL',
        examples: [
          {
            title: 'STL Containers and Algorithms',
            code: `#include <iostream>
#include <vector>
#include <map>
#include <set>
#include <algorithm>
#include <string>

void demonstrateVector() {
    // Vector - dynamic array
    vector<int> numbers = {5, 2, 8, 1, 9};  // Initialize with values
    
    // Add elements
    numbers.push_back(7);        // Add to end
    numbers.insert(numbers.begin() + 2, 3);  // Insert at position
    
    // Sort using algorithm
    sort(numbers.begin(), numbers.end());  // Sort in ascending order
    
    // Find element
    auto it = find(numbers.begin(), numbers.end(), 8);
    if (it != numbers.end()) {
        cout << "Found 8 at position: " << (it - numbers.begin()) << endl;
    }
    
    // Range-based for loop
    for (const auto& num : numbers) {
        cout << num << " ";
    }
    cout << endl;
}

void demonstrateMap() {
    // Map - key-value pairs
    map<string, int> scores;
    
    // Insert elements
    scores["Alice"] = 95;    // Using operator[]
    scores.insert({"Bob", 88});  // Using insert
    scores.emplace("Charlie", 92);  // Using emplace
    
    // Access elements
    cout << "Alice's score: " << scores["Alice"] << endl;
    
    // Check if key exists
    if (scores.find("Bob") != scores.end()) {
        cout << "Bob's score: " << scores["Bob"] << endl;
    }
    
    // Iterate over map
    for (const auto& [name, score] : scores) {
        cout << name << ": " << score << endl;
    }
}

void demonstrateSet() {
    // Set - unique elements
    set<int> uniqueNumbers;
    
    // Insert elements
    uniqueNumbers.insert(5);
    uniqueNumbers.insert(2);
    uniqueNumbers.insert(5);  // Duplicate - won't be inserted
    
    // Check if element exists
    if (uniqueNumbers.count(5) > 0) {
        cout << "5 is in the set" << endl;
    }
    
    // Iterate over set
    for (const auto& num : uniqueNumbers) {
        cout << num << " ";
    }
    cout << endl;
}

int main() {
    cout << "Vector demonstration:" << endl;
    demonstrateVector();
    
    cout << "\nMap demonstration:" << endl;
    demonstrateMap();
    
    cout << "\nSet demonstration:" << endl;
    demonstrateSet();
    
    return 0;
}`,
            explanation: 'This comprehensive example demonstrates the use of various STL containers and algorithms. Each container type (vector, map, set) is shown with common operations and best practices. The code includes detailed comments explaining each operation and its purpose.'
          }
        ]
      },
      {
        id: 'error-handling',
        title: 'Error Handling and Exceptions',
        examples: [
          {
            title: 'Exception Handling with Custom Exceptions',
            code: `#include <iostream>
#include <stdexcept>
#include <string>

// Custom exception class
class BankException : public std::runtime_error {
public:
    explicit BankException(const string& message) 
        : std::runtime_error(message) {}
};

class BankAccount {
private:
    double balance;
    
public:
    BankAccount(double initialBalance) : balance(initialBalance) {
        if (initialBalance < 0) {
            throw BankException("Initial balance cannot be negative");
        }
    }
    
    void withdraw(double amount) {
        if (amount < 0) {
            throw std::invalid_argument("Withdrawal amount cannot be negative");
        }
        if (amount > balance) {
            throw BankException("Insufficient funds");
        }
        balance -= amount;
    }
    
    double getBalance() const { return balance; }
};

void processTransaction(BankAccount& account, double amount) {
    try {
        // Try to withdraw
        account.withdraw(amount);
        cout << "Withdrawal successful. New balance: $" 
             << account.getBalance() << endl;
             
    } catch (const BankException& e) {
        // Handle bank-specific exceptions
        cerr << "Bank error: " << e.what() << endl;
        
    } catch (const std::invalid_argument& e) {
        // Handle invalid argument exceptions
        cerr << "Invalid argument: " << e.what() << endl;
        
    } catch (const std::exception& e) {
        // Handle any other standard exceptions
        cerr << "Standard exception: " << e.what() << endl;
        
    } catch (...) {
        // Handle any other type of exception
        cerr << "Unknown exception occurred" << endl;
    }
}

int main() {
    try {
        // Create account with valid balance
        BankAccount account(1000.0);
        
        // Try various transactions
        processTransaction(account, 500.0);   // Valid withdrawal
        processTransaction(account, -100.0);  // Invalid amount
        processTransaction(account, 1000.0);  // Insufficient funds
        
    } catch (const BankException& e) {
        // Handle exceptions during account creation
        cerr << "Failed to create account: " << e.what() << endl;
    }
    
    return 0;
}`,
            explanation: 'This example demonstrates comprehensive exception handling in C++. It shows how to create custom exception classes, throw exceptions with specific messages, and handle different types of exceptions appropriately. Each section is commented to explain the error handling strategy.'
          }
        ]
      },
      {
        id: 'advanced-features',
        title: 'Modern C++ Features',
        examples: [
          {
            title: 'Modern C++ Features (C++11 and later)',
            code: `#include <iostream>
#include <vector>
#include <memory>
#include <functional>
#include <chrono>
#include <thread>

// Lambda expressions and function objects
void demonstrateLambdas() {
    // Basic lambda
    auto add = [](int a, int b) { return a + b; };
    cout << "Sum: " << add(5, 3) << endl;
    
    // Lambda with capture
    int multiplier = 10;
    auto multiply = [multiplier](int x) { return x * multiplier; };
    cout << "Product: " << multiply(5) << endl;
    
    // Lambda with generic capture (C++14)
    auto createMultiplier = [](auto factor) {
        return [factor](auto x) { return x * factor; };
    };
    auto doubleIt = createMultiplier(2.0);
    cout << "Double: " << doubleIt(5.0) << endl;
}

// Smart pointers and RAII
void demonstrateSmartPointers() {
    // Unique pointer - exclusive ownership
    auto uniquePtr = std::make_unique<int>(42);
    cout << "Unique ptr value: " << *uniquePtr << endl;
    
    // Shared pointer - shared ownership
    auto sharedPtr1 = std::make_shared<string>("Hello");
    auto sharedPtr2 = sharedPtr1;  // Both point to same object
    cout << "Shared ptr use count: " << sharedPtr1.use_count() << endl;
    
    // Weak pointer - non-owning reference
    std::weak_ptr<string> weakPtr = sharedPtr1;
    if (auto locked = weakPtr.lock()) {
        cout << "Weak ptr value: " << *locked << endl;
    }
}

// Move semantics
class Resource {
private:
    std::vector<int> data;
    
public:
    Resource() : data(1000, 42) {}  // Initialize with 1000 elements
    
    // Move constructor
    Resource(Resource&& other) noexcept 
        : data(std::move(other.data)) {
        cout << "Move constructor called" << endl;
    }
    
    // Move assignment operator
    Resource& operator=(Resource&& other) noexcept {
        if (this != &other) {
            data = std::move(other.data);
            cout << "Move assignment called" << endl;
        }
        return *this;
    }
};

void demonstrateMoveSemantics() {
    Resource r1;
    Resource r2 = std::move(r1);  // Move construction
    Resource r3;
    r3 = std::move(r2);          // Move assignment
}

// Async programming
void demonstrateAsync() {
    // Async task
    auto future = std::async(std::launch::async, []() {
        std::this_thread::sleep_for(std::chrono::seconds(1));
        return "Async task completed";
    });
    
    // Do other work while task is running
    cout << "Main thread working..." << endl;
    
    // Get result when ready
    cout << future.get() << endl;
}

int main() {
    cout << "Lambda demonstration:" << endl;
    demonstrateLambdas();
    
    cout << "\nSmart pointers demonstration:" << endl;
    demonstrateSmartPointers();
    
    cout << "\nMove semantics demonstration:" << endl;
    demonstrateMoveSemantics();
    
    cout << "\nAsync programming demonstration:" << endl;
    demonstrateAsync();
    
    return 0;
}`,
            explanation: 'This example showcases modern C++ features introduced in C++11 and later. It demonstrates lambda expressions, smart pointers, move semantics, and async programming. Each feature is explained with detailed comments and practical examples.'
          }
        ]
      }
    ]
  };
  