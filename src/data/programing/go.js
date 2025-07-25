import { SiGo } from "react-icons/si";

export const goContent = {
    icon: SiGo,
    title: "Go",
    color: '#00ADD8', // Go's official brand color
    description: "A concise Golang quick reference with essential topics for interviews, starting from basic concepts.",
    sections: [
        {
            id: 'basic-concepts',
            title: 'Basic Concepts',
            examples: [
                {
                    id: 'go-workspace-package',
                    title: 'Go Workspace and Package Structure',
                    code: `// Go files belong to a package
package main

// Import packages
import "fmt"

// main function: program entry point
func main() {
    fmt.Println("Hello, Go!") // Print message to console
}`,
                    explanation: 'Every Go source file belongs to a package. Executable programs start in package main with a main() function.'
                },
                {
                    id: 'importing-packages',
                    title: 'Importing Packages',
                    code: `import (
    "fmt"      // Format package for IO
    "math/rand"// Random number generation
)

// Use imported packages in code
func main() {
    fmt.Println("Random:", rand.Intn(100)) // Print random number
}`,
                    explanation: 'Multiple packages can be imported using a block import syntax.'
                },
                {
                    id: 'error-handling-basics',
                    title: 'Error Handling Basics',
                    code: `// Function returns a value and error
func safeDivide(a, b int) (int, error) {
    if b == 0 {
        return 0, fmt.Errorf("cannot divide by zero") // Return error on invalid input
    }
    return a / b, nil // Return result with nil error
}

// Usage
result, err := safeDivide(10, 0)
if err != nil {
    fmt.Println("Error:", err) // Handle error gracefully
} else {
    fmt.Println("Result:", result)
}`,
                    explanation: 'In Go, errors are values returned explicitly and handled by the caller.'
                },
                {
                    id: 'go-toolchain-basics',
                    title: 'Go Toolchain Basics',
                    code: `// To run a Go program without building executable
$ go run main.go

// To build an executable
$ go build main.go

// To install the binary in your Go workspace
$ go install main.go`,
                    explanation: 'Common Go commands for running, building, and installing Go programs.'
                }
            ]
        },
        {
            id: 'getting-started',
            title: 'Getting Started',
            examples: [
                {
                    id: 'hello-world',
                    title: 'Hello World',
                    code: `package main
  
import "fmt"

// Entry point of the program
func main() {
    fmt.Println("Hello, World!") // Print message to console
}`,
                    explanation: 'This is a basic Go program that prints "Hello, World!" to the console.'
                }
            ]
        },
        {
            id: 'variables-data-types',
            title: 'Variables & Data Types',
            examples: [
                {
                    id: 'variable-declaration',
                    title: 'Variable Declaration',
                    code: `// Explicit typing
var name string = "John" // Declare a string variable
var age int = 30         // Declare an integer variable

// Type inference
name := "John"  // Implicitly typed as string
age := 30       // Implicitly typed as int`,
                    explanation: 'Go supports both explicit and implicit variable declaration.'
                },
                {
                    id: 'basic-data-types',
                    title: 'Basic Data Types',
                    code: `// Basic data types
var isActive bool = true // Boolean
var pi float64 = 3.14    // Floating-point
var message string = "Hello"`,
                    explanation: 'Go has several basic data types including bool, int, float64, and string.'
                }
            ]
        },
        {
            id: 'control-flow',
            title: 'Control Flow',
            examples: [
                {
                    id: 'conditionals',
                    title: 'Conditionals',
                    code: `// If-else statement
if x > 10 {
    fmt.Println("Greater than 10") // Print if x is greater than 10
} else {
    fmt.Println("10 or less") // Print if x is 10 or less
}`,
                    explanation: 'This demonstrates the use of if-else statements for conditional logic.'
                },
                {
                    id: 'switch-statement',
                    title: 'Switch Statement',
                    code: `// Switch statement
switch day {
case "Mon":
    fmt.Println("Monday")
case "Tue":
    fmt.Println("Tuesday")
default:
    fmt.Println("Other day") // Default case
}`,
                    explanation: 'Switch statements provide a cleaner way to handle multiple conditions.'
                }
            ]
        },
        {
            id: 'loops',
            title: 'Loops',
            examples: [
                {
                    id: 'for-loop',
                    title: 'For Loop',
                    code: `// For loop
for i := 0; i < 5; i++ {
    fmt.Println(i) // Print numbers from 0 to 4
}`,
                    explanation: 'Go has a single looping construct: the for loop.'
                },
                {
                    id: 'range-loop',
                    title: 'Range Loop',
                    code: `// Range loop
nums := []int{1, 2, 3}
for i, num := range nums {
    fmt.Printf("Index: %d, Value: %d\n", i, num) // Print index and value
}`,
                    explanation: 'The range loop is used to iterate over slices, arrays, and maps.'
                }
            ]
        },
        {
            id: 'functions',
            title: 'Functions',
            examples: [
                {
                    id: 'basic-functions',
                    title: 'Basic Functions',
                    code: `// Function to add two integers
func add(a int, b int) int {
    return a + b // Return the sum of a and b
}`,
                    explanation: 'This function takes two integers as input and returns their sum.'
                },
                {
                    id: 'variadic-functions',
                    title: 'Variadic Functions',
                    code: `// Variadic function
func sum(nums ...int) int {
    total := 0
    for _, num := range nums {
        total += num // Sum all numbers
    }
    return total
}

// Usage
fmt.Println(sum(1, 2, 3)) // Output: 6`,
                    explanation: 'Variadic functions can accept a variable number of arguments.'
                }
            ]
        },
        {
            id: 'data-structures',
            title: 'Data Structures',
            examples: [
                {
                    id: 'arrays-slices',
                    title: 'Arrays & Slices',
                    code: `// Arrays (fixed size)
var a [3]int // Declare an array of size 3
a[0] = 1

// Slices (dynamic arrays)
s := []int{2, 3, 5} // Declare a slice
s = append(s, 7)    // Append to slice
fmt.Println(s)      // Output: [2 3 5 7]`,
                    explanation: 'Arrays have a fixed size, while slices are dynamic and can grow.'
                },
                {
                    id: 'maps',
                    title: 'Maps',
                    code: `// Map declaration
ages := make(map[string]int) // Create a map with string keys and int values
ages["Alice"] = 30           // Assign value to key "Alice"

// Check existence
if age, exists := ages["Bob"]; exists {
    fmt.Println(age) // Print age if Bob exists in the map
}`,
                    explanation: 'Maps are key-value pairs, similar to dictionaries in other languages.'
                },
                {
                    id: 'structs',
                    title: 'Structs',
                    code: `// Struct declaration
type Person struct {
    Name string
    Age  int
}

// Create instance
p := Person{Name: "Alice", Age: 30}
fmt.Println(p.Name) // Output: Alice`,
                    explanation: 'Structs are used to create custom data types.'
                }
            ]
        },
        {
            id: 'concurrency',
            title: 'Concurrency',
            examples: [
                {
                    id: 'goroutines',
                    title: 'Goroutines',
                    code: `// Function to print a message
func say(s string) {
    fmt.Println(s) // Print the message
}

// Launch goroutine
go say("world") // Run say in a new goroutine
say("hello")    // Run say in the main goroutine`,
                    explanation: 'Goroutines are lightweight threads managed by the Go runtime.'
                },
                {
                    id: 'channels',
                    title: 'Channels',
                    code: `// Create a channel
messages := make(chan string)

// Send in goroutine
go func() { messages <- "ping" }()

// Receive
msg := <-messages
fmt.Println(msg) // Output: ping`,
                    explanation: 'Channels are used for communication between goroutines.'
                }
            ]
        },
        {
            id: 'error-handling',
            title: 'Error Handling',
            examples: [
                {
                    id: 'basic-error-handling',
                    title: 'Basic Error Handling',
                    code: `// Function to divide two numbers
func divide(a, b float64) (float64, error) {
    if b == 0.0 {
        return 0.0, fmt.Errorf("cannot divide by zero") // Return error if b is zero
    }
    return a / b, nil // Return result and no error
}`,
                    explanation: 'Go uses explicit error returns instead of exceptions for error handling.'
                }
            ]
        },
        {
            id: 'interfaces',
            title: 'Interfaces',
            examples: [
                {
                    id: 'basic-interface',
                    title: 'Basic Interface',
                    code: `// Define an interface
type Shape interface {
    Area() float64 // Method signature
}

// Implementing the interface
type Circle struct {
    Radius float64
}

func (c Circle) Area() float64 {
    return math.Pi * c.Radius * c.Radius // Calculate area
}

// Function that takes an interface
func printArea(s Shape) {
    fmt.Println("Area:", s.Area()) // Print area
}

// Usage
c := Circle{Radius: 5}
printArea(c)`,
                    explanation: 'Interfaces allow for polymorphism by defining method sets.'
                }
            ]
        },
        {
            id: 'file-io',
            title: 'File I/O',
            examples: [
                {
                    id: 'reading-files',
                    title: 'Reading Files',
                    code: `// Read entire file
data, err := os.ReadFile("file.txt")
if err != nil {
    log.Fatal(err) // Handle error
}
fmt.Println(string(data)) // Print file content`,
                    explanation: 'This demonstrates how to read an entire file in Go.'
                },
                {
                    id: 'writing-files',
                    title: 'Writing Files',
                    code: `// Write entire file
content := []byte("Hello, Go!")
err := os.WriteFile("output.txt", content, 0644)
if err != nil {
    log.Fatal(err) // Handle error
}`,
                    explanation: 'This demonstrates how to write data to a file in Go.'
                }
            ]
        }
    ]
};
