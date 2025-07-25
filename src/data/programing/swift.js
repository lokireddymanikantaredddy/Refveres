import { SiSwift } from "react-icons/si";

export const swiftContent = {
    "icon": SiSwift,
    "title": "Swift",
    "color": "#FA7343",
    "description": "A comprehensive Swift reference with examples and explanations based on best practices and Swift conventions.",
    "sections": [
        {
            "id": "swift-basics",
            "title": "Swift Basics",
            "examples": [
                {
                    "title": "Hello World",
                    "code": `// Simple hello world
print("Hello, World!")`,
                    "explanation": "The most basic Swift program demonstrating the print function."
                },
                {
                    "title": "Variables and Constants",
                    "code": `// Variables and constants
var greeting = "Hello"  // Mutable variable
greeting = "Hi"         // Can be changed

let language = "Swift"  // Immutable constant
// language = "Obj-C"   // Error: Cannot assign to value

// Type annotations
var age: Int = 25
var price: Double = 19.99
var isAvailable: Bool = true

// String interpolation
let message = "(greeting), (language) is (isAvailable ? "available" : "unavailable")"
print(message)`,
                    "explanation": "Use `var` for variables and `let` for constants. Type inference is used when possible, but explicit types can be specified."
                },
                {
                    "title": "Basic Types",
                    "code": `// Basic types
let integer: Int = 42
let double: Double = 3.14159
let float: Float = 3.14
let boolean: Bool = true
let string: String = "Swift"
let character: Character = "S"

// Type aliases
typealias AudioSample = UInt16
var maxAmplitude = AudioSample.max

// Tuples
let http404Error = (statusCode: 404, description: "Not Found")
print(http404Error.statusCode)  // 404
print(http404Error.1)           // "Not Found"`,
                    "explanation": "Swift has strong typing with common primitive types. Tuples group multiple values into a single compound value."
                }
            ]
        },
        {
            "id": "control-flow",
            "title": "Control Flow",
            "examples": [
                {
                    "title": "Conditionals",
                    "code": `// Conditionals
let temperature = 25

// If statement
if temperature > 30 {
    print("It's hot")
} else if temperature > 20 {
    print("It's warm")
} else {
    print("It's cool")
}

// Ternary operator
let weather = temperature > 25 ? "Sunny" : "Cloudy"

// Switch statement
let someCharacter: Character = "z"
switch someCharacter {
case "a", "e", "i", "o", "u":
    print("Vowel")
case "b"..."d", "f"..."h":
    print("Consonant")
default:
    print("Not a letter")
}`,
                    "explanation": "Swift provides if/else statements, ternary operator, and powerful switch statements with pattern matching."
                },
                {
                    "title": "Loops",
                    "code": `// Loops
// For-in loop
for i in 1...5 {
    print(i)  // 1, 2, 3, 4, 5
}

for i in stride(from: 0, to: 10, by: 2) {
    print(i)  // 0, 2, 4, 6, 8
}

// While loop
var count = 0
while count < 5 {
    print(count)
    count += 1
}

// Repeat-while (do-while)
repeat {
    print(count)
    count -= 1
} while count > 0

// Control transfer
for i in 1...10 {
    if i % 2 == 0 { continue }
    if i > 7 { break }
    print("Odd: (i)")
}`,
                    "explanation": "Swift offers for-in, while, and repeat-while loops. Range operators (...) and stride provide flexible iteration."
                }
            ]
        },
        {
            "id": "functions",
            "title": "Functions",
            "examples": [
                {
                    "title": "Basic Functions",
                    "code": `// Functions
func greet(person: String) -> String {
    return "Hello, (person)!"
}

// Multiple parameters
func add(_ a: Int, _ b: Int) -> Int {
    return a + b
}

// Default parameters
func join(strings: [String], separator: String = ", ") -> String {
    return strings.joined(separator: separator)
}

// Variadic parameters
func average(_ numbers: Double...) -> Double {
    return numbers.reduce(0, +) / Double(numbers.count)
}

// Function types
let mathFunction: (Int, Int) -> Int = add
print(mathFunction(2, 3))  // 5`,
                    "explanation": "Functions are first-class citizens in Swift. Parameters can have external and internal names, default values, and variadic parameters."
                },
                {
                    "title": "Advanced Functions",
                    "code": `// Nested functions
func chooseStepFunction(backward: Bool) -> (Int) -> Int {
    func stepForward(input: Int) -> Int { return input + 1 }
    func stepBackward(input: Int) -> Int { return input - 1 }
    return backward ? stepBackward : stepForward
}

// In-out parameters
func swapTwoInts(_ a: inout Int, _ b: inout Int) {
    let temp = a
    a = b
    b = temp
}

// Function as return type
func makeIncrementer(incrementAmount: Int) -> () -> Int {
    var total = 0
    func incrementer() -> Int {
        total += incrementAmount
        return total
    }
    return incrementer
}

// Using functions
var x = 3, y = 5
swapTwoInts(&x, &y)
print("x: (x), y: (y)")  // x: 5, y: 3

let incrementByTwo = makeIncrementer(incrementAmount: 2)
print(incrementByTwo())  // 2
print(incrementByTwo())  // 4`,
                    "explanation": "Swift supports nested functions, in-out parameters for modifying variables, and functions that return other functions (closures)."
                }
            ]
        },
        {
            "id": "collections",
            "title": "Collections",
            "examples": [
                {
                    "title": "Arrays",
                    "code": `// Arrays
var shoppingList = ["Eggs", "Milk"]
shoppingList.append("Flour")
shoppingList += ["Baking Powder"]
shoppingList[0] = "Six eggs"

for item in shoppingList {
    print(item)
}

// Array operations
let filtered = shoppingList.filter { $0.count > 4 }
let mapped = shoppingList.map { $0.uppercased() }
let reduced = shoppingList.reduce("") { $0 + $1 + " " }

// Multidimensional array
var matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
print(matrix[1][2])  // 6`,
                    "explanation": "Arrays are ordered collections of values. Swift arrays are type-safe and provide many useful methods for manipulation."
                },
                {
                    "title": "Dictionaries and Sets",
                    "code": `// Dictionaries
var airports = ["YYZ": "Toronto Pearson", "DUB": "Dublin"]
airports["LHR"] = "London Heathrow"

if let airportName = airports["DUB"] {
    print("DUB stands for (airportName)")
}

for (code, name) in airports {
    print("(code): (name)")
}

// Sets
var favoriteGenres: Set = ["Rock", "Classical", "Hip hop"]
favoriteGenres.insert("Jazz")

if favoriteGenres.contains("Rock") {
    print("Rock is a favorite genre")
}

// Set operations
let oddDigits: Set = [1, 3, 5, 7, 9]
let evenDigits: Set = [0, 2, 4, 6, 8]
let union = oddDigits.union(evenDigits).sorted()`,
                    "explanation": "Dictionaries store key-value pairs. Sets store unordered unique values. Both are strongly typed and provide powerful operations."
                }
            ]
        },
        {
            "id": "optionals",
            "title": "Optionals",
            "examples": [
                {
                    "title": "Optional Basics",
                    "code": `// Optionals
var possibleNumber = "123"
let convertedNumber = Int(possibleNumber)  // Int?

possibleNumber = "hello"
let anotherNumber = Int(possibleNumber)  // nil

// Forced unwrapping
if convertedNumber != nil {
    print("Number is (convertedNumber!)")
}

// Optional binding
if let actualNumber = Int(possibleNumber) {
    print("Number is (actualNumber)")
} else {
    print("Couldn't convert")
}

// Implicitly unwrapped optionals
let assumedString: String! = "Implicitly unwrapped"
let implicitString: String = assumedString  // No need for !`,
                    "explanation": "Optionals represent values that might be missing. Use optional binding (if let) to safely unwrap values."
                },
                {
                    "title": "Advanced Optionals",
                    "code": `// Nil coalescing
let name: String? = nil
let greeting = "Hello, (name ?? "Guest")"

// Optional chaining
class Person {
    var residence: Residence?
}

class Residence {
    var rooms = [Room]()
    var address: Address?
}

class Room {
    let name: String
    init(name: String) { self.name = name }
}

class Address {
    var buildingName: String?
    func buildingIdentifier() -> String? {
        return buildingName
    }
}

let john = Person()
if let roomCount = john.residence?.rooms.count {
    print("John's residence has (roomCount) rooms")
} else {
    print("Unable to retrieve room count")
}

// Optional map and flatMap
let possibleNumber: String? = "123"
let mappedNumber = possibleNumber.map { Int($0) }  // Int?? (nested optional)
let flatMappedNumber = possibleNumber.flatMap { Int($0) }  // Int?`,
                    "explanation": "Swift provides nil coalescing operator (??), optional chaining (?.), and functional operations like map and flatMap for optionals."
                }
            ]
        },
        {
            "id": "closures",
            "title": "Closures",
            "examples": [
                {
                    "title": "Closure Basics",
                    "code": `// Closures
let names = ["Chris", "Alex", "Ewa", "Barry", "Daniella"]

// Closure expression
let reversedNames = names.sorted(by: { (s1: String, s2: String) -> Bool in
    return s1 > s2
})

// Type inference
let reversedNames2 = names.sorted(by: { s1, s2 in return s1 > s2 })

// Implicit returns
let reversedNames3 = names.sorted(by: { s1, s2 in s1 > s2 })

// Shorthand arguments
let reversedNames4 = names.sorted(by: { $0 > $1 })

// Operator method
let reversedNames5 = names.sorted(by: >)`,
                    "explanation": "Closures are self-contained blocks of functionality. Swift provides several syntax optimizations for writing closures concisely."
                },
                {
                    "title": "Capturing Values",
                    "code": `// Capturing values
func makeIncrementer(forIncrement amount: Int) -> () -> Int {
    var runningTotal = 0
    func incrementer() -> Int {
        runningTotal += amount
        return runningTotal
    }
    return incrementer
}

let incrementByTen = makeIncrementer(forIncrement: 10)
print(incrementByTen())  // 10
print(incrementByTen())  // 20

// Escaping closures
var completionHandlers = [() -> Void]()
func someFunctionWithEscapingClosure(completionHandler: @escaping () -> Void) {
    completionHandlers.append(completionHandler)
}

// Autoclosures
var customersInLine = ["Ewa", "Barry", "Daniella"]
func serve(customer customerProvider: @autoclosure () -> String) {
    print("Now serving (customerProvider())")
}
serve(customer: customersInLine.remove(at: 0))`,
                    "explanation": "Closures can capture and store references to variables. @escaping marks closures that outlive the function scope. @autoclosure automatically wraps expressions."
                }
            ]
        },
        {
            "id": "enums-structs-classes",
            "title": "Enums, Structs & Classes",
            "examples": [
                {
                    "title": "Enumerations",
                    "code": `// Enumerations
enum CompassPoint {
    case north
    case south
    case east
    case west
}

// Associated values
enum Barcode {
    case upc(Int, Int, Int, Int)
    case qrCode(String)
}

// Raw values
enum Planet: Int {
    case mercury = 1, venus, earth, mars
}

// Using enums
var direction = CompassPoint.north
direction = .east

let productBarcode = Barcode.upc(8, 85909, 51226, 3)
switch productBarcode {
case .upc(let numberSystem, let manufacturer, let product, let check):
    print("UPC: (numberSystem), (manufacturer), (product), (check)")
case .qrCode(let productCode):
    print("QR code: (productCode)")
}

let earthsOrder = Planet.earth.rawValue  // 3`,
                    "explanation": "Enums define common types with a finite set of cases. They can have associated values or raw values and support powerful pattern matching."
                },
                {
                    "title": "Structures",
                    "code": `// Structures
struct Point {
    var x = 0.0, y = 0.0
    mutating func moveBy(x deltaX: Double, y deltaY: Double) {
        x += deltaX
        y += deltaY
    }
}

struct Size {
    var width = 0.0, height = 0.0
}

struct Rect {
    var origin = Point()
    var size = Size()
    var center: Point {
        get {
            let centerX = origin.x + (size.width / 2)
            let centerY = origin.y + (size.height / 2)
            return Point(x: centerX, y: centerY)
        }
        set(newCenter) {
            origin.x = newCenter.x - (size.width / 2)
            origin.y = newCenter.y - (size.height / 2)
        }
    }
}

// Using structures
var square = Rect(origin: Point(x: 0.0, y: 0.0),
                  size: Size(width: 10.0, height: 10.0))
square.center = Point(x: 15.0, y: 15.0)
print("square.origin is now at (square.origin.x), (square.origin.y))"`,
                    "explanation": "Structures are value types that encapsulate data and behavior. They support properties, methods, subscripts, and initializers."
                },
                {
                    "title": "Classes",
                    "code": `// Classes
class Vehicle {
    var currentSpeed = 0.0
    var description: String {
        return "traveling at (currentSpeed) miles per hour"
    }
    func makeNoise() {
        // Do nothing
    }
}

class Bicycle: Vehicle {
    var hasBasket = false
}

class Tandem: Bicycle {
    var currentNumberOfPassengers = 0
    override func makeNoise() {
        print("Ring ring!")
    }
}

// Reference counting
class Person {
    let name: String
    init(name: String) {
        self.name = name
        print("(name) is being initialized")
    }
    deinit {
        print("(name) is being deinitialized")
    }
}

// Using classes
var tandem = Tandem()
tandem.hasBasket = true
tandem.currentNumberOfPassengers = 2
tandem.currentSpeed = 22.0
print("Tandem: (tandem.description)")

var reference1: Person?
var reference2: Person?
reference1 = Person(name: "John Appleseed")
reference2 = reference1
reference1 = nil
reference2 = nil  // Now deinitialized`,
                    "explanation": "Classes are reference types that support inheritance, type casting, deinitializers, and reference counting. They can conform to protocols."
                }
            ]
        },
        {
            "id": "properties-methods",
            "title": "Properties & Methods",
            "examples": [
                {
                    "title": "Properties",
                    "code": `// Properties
struct FixedLengthRange {
    var firstValue: Int
    let length: Int
}

class DataImporter {
    var filename = "data.txt"
}

class DataManager {
    lazy var importer = DataImporter()
    var data = [String]()
}

// Computed properties
struct Point {
    var x = 0.0, y = 0.0
}
struct Size {
    var width = 0.0, height = 0.0
}
struct Rect {
    var origin = Point()
    var size = Size()
    var center: Point {
        get {
            Point(x: origin.x + (size.width / 2),
                  y: origin.y + (size.height / 2))
        }
        set {
            origin.x = newValue.x - (size.width / 2)
            origin.y = newValue.y - (size.height / 2)
        }
    }
}

// Property observers
class StepCounter {
    var totalSteps: Int = 0 {
        willSet(newTotalSteps) {
            print("About to set totalSteps to (newTotalSteps)")
        }
        didSet {
            if totalSteps > oldValue {
                print("Added (totalSteps - oldValue) steps")
            }
        }
    }
}`,
                    "explanation": "Properties store values associated with a type. They can be stored or computed, and property observers can monitor value changes."
                },
                {
                    "title": "Methods",
                    "code": `// Methods
class Counter {
    var count = 0
    func increment() {
        count += 1
    }
    func increment(by amount: Int) {
        count += amount
    }
    func reset() {
        count = 0
    }
}

// Mutating methods
struct Point {
    var x = 0.0, y = 0.0
    mutating func moveBy(x deltaX: Double, y deltaY: Double) {
        x += deltaX
        y += deltaY
    }
}

// Type methods
class SomeClass {
    class func someTypeMethod() {
        // Type method implementation
    }
}
SomeClass.someTypeMethod()`,
                    "explanation": "Methods are functions associated with a type. Instance methods operate on instances, while type methods operate on the type itself."
                }
            ]
        },
        {
            "id": "protocols",
            "title": "Protocols",
            "examples": [
                {
                    "title": "Protocol Basics",
                    "code": `// Protocols
protocol FullyNamed {
    var fullName: String { get }
    func greet() -> String
}

struct Person: FullyNamed {
    var fullName: String
    func greet() -> String {
        return "Hello, (fullName)"
    }
}

// Protocol inheritance
protocol PrettyNamed: FullyNamed {
    var prettyName: String { get }
}

// Protocol composition
protocol Named {
    var name: String { get }
}
protocol Aged {
    var age: Int { get }
}
struct Person2: Named, Aged {
    var name: String
    var age: Int
}
func wishHappyBirthday(to celebrator: Named & Aged) {
    print("Happy birthday (celebrator.name), you're (celebrator.age)!")
}`,
                    "explanation": "Protocols define blueprints of methods, properties, and other requirements. Types can conform to multiple protocols."
                },
                {
                    "title": "Advanced Protocols",
                    "code": `// Protocol extensions
protocol RandomNumberGenerator {
    func random() -> Double
}

extension RandomNumberGenerator {
    func randomBool() -> Bool {
        return random() > 0.5
    }
}

class LinearCongruentialGenerator: RandomNumberGenerator {
    var lastRandom = 42.0
    let m = 139968.0
    let a = 3877.0
    let c = 29573.0
    func random() -> Double {
        lastRandom = ((a * lastRandom + c).truncatingRemainder(dividingBy: m))
        return lastRandom / m
    }
}

// Protocol-oriented programming
protocol Identifiable {
    var id: String { get set }
    func identify()
}

extension Identifiable {
    func identify() {
        print("My ID is (id)")
    }
}

struct User: Identifiable {
    var id: String
}

let user = User(id: "12345")
user.identify()`,
                    "explanation": "Protocol extensions can provide default implementations. Protocol-oriented programming emphasizes composition over inheritance."
                }
            ]
        },
        {
            "id": "error-handling",
            "title": "Error Handling",
            "examples": [
                {
                    "title": "Error Handling Basics",
                    "code": `// Error handling
enum VendingMachineError: Error {
    case invalidSelection
    case insufficientFunds(coinsNeeded: Int)
    case outOfStock
}

struct Item {
    var price: Int
    var count: Int
}

class VendingMachine {
    var inventory = [
        "Candy Bar": Item(price: 12, count: 7),
        "Chips": Item(price: 10, count: 4),
        "Pretzels": Item(price: 7, count: 11)
    ]
    var coinsDeposited = 0
    
    func vend(itemNamed name: String) throws {
        guard let item = inventory[name] else {
            throw VendingMachineError.invalidSelection
        }
        
        guard item.count > 0 else {
            throw VendingMachineError.outOfStock
        }
        
        guard item.price <= coinsDeposited else {
            throw VendingMachineError.insufficientFunds(coinsNeeded: item.price - coinsDeposited)
        }
        
        coinsDeposited -= item.price
        inventory[name]!.count -= 1
        
        print("Dispensing (name)")
    }
}

// Using throws
let machine = VendingMachine()
machine.coinsDeposited = 8

do {
    try machine.vend(itemNamed: "Chips")
} catch VendingMachineError.invalidSelection {
    print("Invalid Selection")
} catch VendingMachineError.insufficientFunds(let coinsNeeded) {
    print("Insufficient funds. Please insert an additional (coinsNeeded) coins.")
} catch {
    print("Unexpected error: (error)")
}`,
                    "explanation": "Swift uses throwing functions and do-try-catch blocks for error handling. Errors conform to the Error protocol."
                },
                {
                    "title": "Advanced Error Handling",
                    "code": `// Converting to optionals
func someThrowingFunction() throws -> Int {
    // ...
    return 42
}

let x = try? someThrowingFunction()

// Forced try (crash on error)
// let y = try! someThrowingFunction()

// defer statements
func processFile(filename: String) throws {
    let file = FileHandle(forReadingAtPath: filename)
    
    defer {
        file?.closeFile()
        print("File closed")
    }
    
    if let file = file {
        // Process the file
        print("Processing file")
    } else {
        throw FileError.fileNotFound
    }
}

// Result type
enum Result<Success, Failure: Error> {
    case success(Success)
    case failure(Failure)
}

func fetchData(completion: (Result<String, Error>) -> Void) {
    // Simulate network request
    DispatchQueue.global().async {
        let success = Bool.random()
        if success {
            completion(.success("Data received"))
        } else {
            completion(.failure(NetworkError.timeout))
        }
    }
}

fetchData { result in
    switch result {
    case .success(let data):
        print(data)
    case .failure(let error):
        print("Error: (error)")
    }
}`,
                    "explanation": "try? converts errors to optionals. defer statements execute code before leaving scope. The Result type provides another way to handle errors."
                }
            ]
        },
        {
            "id": "generics",
            "title": "Generics",
            "examples": [
                {
                    "title": "Generic Functions",
                    "code": `// Generic functions
func swapTwoValues<T>(_ a: inout T, _ b: inout T) {
    let temp = a
    a = b
    b = temp
}

var someInt = 3
var anotherInt = 107
swapTwoValues(&someInt, &anotherInt)

var someString = "hello"
var anotherString = "world"
swapTwoValues(&someString, &anotherString)

// Generic types
struct Stack<Element> {
    var items = [Element]()
    mutating func push(_ item: Element) {
        items.append(item)
    }
    mutating func pop() -> Element {
        return items.removeLast()
    }
}

var stackOfStrings = Stack<String>()
stackOfStrings.push("uno")
stackOfStrings.push("dos")
let popped = stackOfStrings.pop()`,
                    "explanation": "Generic functions and types work with any type. They enable code reuse while maintaining type safety."
                },
                {
                    "title": "Type Constraints",
                    "code": `// Type constraints
func findIndex<T: Equatable>(of valueToFind: T, in array:[T]) -> Int? {
    for (index, value) in array.enumerated() {
        if value == valueToFind {
            return index
        }
    }
    return nil
}

// Associated types
protocol Container {
    associatedtype Item
    mutating func append(_ item: Item)
    var count: Int { get }
    subscript(i: Int) -> Item { get }
}

struct IntStack: Container {
    typealias Item = Int
    var items = [Item]()
    mutating func append(_ item: Item) {
        items.append(item)
    }
    var count: Int {
        return items.count
    }
    subscript(i: Int) -> Item {
        return items[i]
    }
}

// Generic where clauses
func allItemsMatch<C1: Container, C2: Container>
    (_ someContainer: C1, _ anotherContainer: C2) -> Bool
    where C1.Item == C2.Item, C1.Item: Equatable {
        
        if someContainer.count != anotherContainer.count {
            return false
        }
        
        for i in 0..<someContainer.count {
            if someContainer[i] != anotherContainer[i] {
                return false
            }
        }
        
        return true
}`,
                    "explanation": "Type constraints specify requirements for generic types. Associated types make protocols generic. Where clauses add additional requirements."
                }
            ]
        },
        {
            "id": "memory-management",
            "title": "Memory Management",
            "examples": [
                {
                    "title": "ARC",
                    "code": `// Automatic Reference Counting
class Person {
    let name: String
    var apartment: Apartment?
    init(name: String) { self.name = name }
    deinit { print("(name) is being deinitialized") }
}

class Apartment {
    let unit: String
    weak var tenant: Person?
    init(unit: String) { self.unit = unit }
    deinit { print("Apartment (unit) is being deinitialized") }
}

var john: Person?
var unit4A: Apartment?

john = Person(name: "John Appleseed")
unit4A = Apartment(unit: "4A")

john!.apartment = unit4A
unit4A!.tenant = john

john = nil
unit4A = nil

// Unowned references
class Customer {
    let name: String
    var card: CreditCard?
    init(name: String) { self.name = name }
    deinit { print("(name) is being deinitialized") }
}

class CreditCard {
    let number: UInt64
    unowned let customer: Customer
    init(number: UInt64, customer: Customer) {
        self.number = number
        self.customer = customer
    }
    deinit { print("Card #(number) is being deinitialized") }
}

var customer: Customer?
customer = Customer(name: "John")
customer!.card = CreditCard(number: 1234_5678_9012_3456, customer: customer!)
customer = nil`,
                    "explanation": "ARC automatically manages memory. Weak references avoid strong reference cycles. Unowned references assume the reference is never nil."
                },
                {
                    "title": "Memory Safety",
                    "code": `// Memory safety
var stepSize = 1

func increment(_ number: inout Int) {
    number += stepSize  // Error: conflicting access
}

// Solution
var copyOfStepSize = stepSize
increment(&copyOfStepSize)
stepSize = copyOfStepSize

// Conflicting access
var playerInformation = (health: 10, energy: 20)
balance(&playerInformation.health, &playerInformation.energy)  // Error

// Solution
func someFunction() {
    var localPlayerInfo = (health: 10, energy: 20)
    balance(&localPlayerInfo.health, &localPlayerInfo.energy)  // OK
}`,
                    "explanation": "Swift prevents simultaneous access to memory. In-out parameters and mutating methods have exclusive access to memory for the duration of their access."
                }
            ]
        },
        {
            "id": "concurrency",
            "title": "Concurrency",
            "examples": [
                {
                    "title": "Dispatch Queues",
                    "code": `// Dispatch queues
let queue = DispatchQueue(label: "com.example.myqueue")

queue.async {
    // Perform work asynchronously
    print("Async work started")
    Thread.sleep(forTimeInterval: 2)
    print("Async work completed")
}

print("Main thread continues")

// Quality of service
let backgroundQueue = DispatchQueue(
    label: "com.example.background",
    qos: .background
)

let userInteractiveQueue = DispatchQueue(
    label: "com.example.userInteractive",
    qos: .userInteractive
)

// Dispatch groups
let group = DispatchGroup()
let urls = [
    "https://example.com/data1",
    "https://example.com/data2",
    "https://example.com/data3"
]

for url in urls {
    group.enter()
    DispatchQueue.global().async {
        // Download data
        print("Downloading (url)")
        Thread.sleep(forTimeInterval: Double.random(in: 1...3))
        print("Finished (url)")
        group.leave()
    }
}

group.notify(queue: .main) {
    print("All downloads completed")
}`,
                    "explanation": "Grand Central Dispatch (GCD) manages concurrent operations. Dispatch queues execute tasks serially or concurrently with different priorities."
                },
                {
                    "title": "Async/Await",
                    "code": `// Async/await (Swift 5.5+)
func fetchData() async throws -> String {
    let url = URL(string: "https://api.example.com/data")!
    let (data, _) = try await URLSession.shared.data(from: url)
    return String(data: data, encoding: .utf8)!
}

func processData() async {
    do {
        let data = try await fetchData()
        print("Received data: (data)")
    } catch {
        print("Error: (error)")
    }
}

// Task
Task {
    await processData()
}

// Async sequences
func countdown() async -> AsyncStream<Int> {
    AsyncStream { continuation in
        Task {
            for i in stride(from: 3, to: 0, by: -1) {
                continuation.yield(i)
                try await Task.sleep(nanoseconds: 1_000_000_000)
            }
            continuation.finish()
        }
    }
}

Task {
    for await count in countdown() {
        print("Countdown: (count)")
    }
    print("Lift off!")
}`,
                    "explanation": "Swift's async/await provides structured concurrency. Async functions can be suspended without blocking threads. Tasks manage concurrent work."
                }
            ]
        },
        {
            "id": "swiftui",
            "title": "SwiftUI",
            "examples": [
                {
                    "title": "Basic SwiftUI",
                    "code": `// Basic SwiftUI view
/*
import SwiftUI

struct ContentView: View {
    @State private var count = 0
    
    var body: some View {
        VStack {
            Text("Count: (count)")
                .font(.largeTitle)
            
            Button(action: {
                count += 1
            }) {
                Text("Increment")
                    .padding()
                    .background(Color.blue)
                    .foregroundColor(.white)
                    .cornerRadius(10)
            }
            
            List {
                ForEach(1..<6) { number in
                    Text("Item (number)")
                }
            }
        }
        .padding()
    }
}

@main
struct MyApp: App {
    var body: some Scene {
        WindowGroup {
            ContentView()
        }
    }
}
*/`,
                    "explanation": "SwiftUI is a declarative framework for building UIs. Views are structs that conform to the View protocol. @State manages local state."
                },
                {
                    "title": "Data Flow",
                    "code": `// SwiftUI data flow
/*
class UserSettings: ObservableObject {
    @Published var username = "Guest"
}

struct ProfileView: View {
    @EnvironmentObject var settings: UserSettings
    @ObservedObject var user: User
    
    var body: some View {
        VStack {
            Text("Hello, (settings.username)")
            Text("User ID: (user.id)")
        }
    }
}

struct ContentView: View {
    @StateObject private var settings = UserSettings()
    @State private var user = User(id: "123")
    
    var body: some View {
        NavigationView {
            VStack {
                TextField("Username", text: $settings.username)
                    .textFieldStyle(RoundedBorderTextFieldStyle())
                    .padding()
                
                NavigationLink(destination: ProfileView(user: user)) {
                    Text("Go to Profile")
                }
            }
        }
        .environmentObject(settings)
    }
}
*/`,
                    "explanation": "SwiftUI provides several property wrappers for data flow: @State for local state, @ObservedObject for external objects, @EnvironmentObject for shared data, and @StateObject for owned objects."
                }
            ]
        },
        {
            "id": "best-practices",
            "title": "Best Practices",
            "examples": [
                {
                    "title": "Code Organization",
                    "code": `// Code organization
// Model
struct User {
    let id: UUID
    let name: String
    let email: String
}

// Service
protocol UserService {
    func fetchUsers() async throws -> [User]
}

class NetworkUserService: UserService {
    func fetchUsers() async throws -> [User] {
        // Network request implementation
        return []
    }
}

// ViewModel
@MainActor
class UserViewModel: ObservableObject {
    @Published private(set) var users = [User]()
    @Published private(set) var isLoading = false
    @Published private(set) var error: Error?
    
    private let service: UserService
    
    init(service: UserService = NetworkUserService()) {
        self.service = service
    }
    
    func loadUsers() async {
        isLoading = true
        error = nil
        
        do {
            users = try await service.fetchUsers()
        } catch {
            self.error = error
        }
        
        isLoading = false
    }
}

// View
/*
struct UserListView: View {
    @StateObject var viewModel = UserViewModel()
    
    var body: some View {
        List(viewModel.users) { user in
            Text(user.name)
        }
        .task {
            await viewModel.loadUsers()
        }
    }
}
*/`,
                    "explanation": "Organize code into models, services, view models, and views. Use protocols for dependencies. @MainActor ensures UI updates on main thread."
                },
                {
                    "title": "Performance Tips",
                    "code": `// Performance tips
// Use value types when possible
struct Point {
    var x, y: Double
}

// Use lazy for expensive initialization
class DataManager {
    lazy var expensiveResource: Resource = {
        return Resource() // Only created when first accessed
    }()
}

// Use ContiguousArray for performance-critical code
var array = ContiguousArray<Int>()

// Optimize loops
let numbers = [1, 2, 3, 4, 5]
var sum = 0
numbers.withContiguousStorageIfAvailable { buffer in
    for i in 0..<buffer.count {
        sum += buffer[i]
    }
}

// Use autoreleasepool for memory-intensive loops
autoreleasepool {
    for _ in 0..<100000 {
        let temp = NSData() // Large temporary object
        // Process temp
    }
}

// Use @inlinable for small, frequently called functions
@inlinable func square(_ x: Int) -> Int {
    return x * x
}`,
                    "explanation": "Use value types, lazy properties, and optimized collections. Consider memory management in loops. @inlinable can optimize small functions."
                }
            ]
        },
        {
            "id": "project-ideas",
            "title": "Project Ideas",
            "examples": [
                {
                    "title": "Weather App",
                    "code": `// Weather app
/*
struct WeatherData: Codable {
    let name: String
    let main: Main
    let weather: [Weather]
    
    struct Main: Codable {
        let temp: Double
    }
    
    struct Weather: Codable {
        let description: String
        let icon: String
    }
}

@MainActor
class WeatherViewModel: ObservableObject {
    @Published var weather: WeatherData?
    @Published var isLoading = false
    @Published var error: Error?
    
    private let apiKey = "YOUR_API_KEY"
    
    func fetchWeather(for city: String) async {
        isLoading = true
        error = nil
        
        do {
            let url = URL(string: "https://api.openweathermap.org/data/2.5/weather?q=(city)&appid=(apiKey)&units=metric")!
            let (data, _) = try await URLSession.shared.data(from: url)
            weather = try JSONDecoder().decode(WeatherData.self, from: data)
        } catch {
            self.error = error
        }
        
        isLoading = false
    }
}

struct WeatherView: View {
    @StateObject private var viewModel = WeatherViewModel()
    @State private var city = ""
    
    var body: some View {
        VStack {
            TextField("Enter city", text: $city)
                .textFieldStyle(RoundedBorderTextFieldStyle())
                .padding()
            
            Button("Get Weather") {
                Task {
                    await viewModel.fetchWeather(for: city)
                }
            }
            
            if viewModel.isLoading {
                ProgressView()
            } else if let weather = viewModel.weather {
                VStack {
                    Text(weather.name)
                        .font(.title)
                    Text("(weather.main.temp, specifier: "%.1f")°C")
                        .font(.largeTitle)
                    Text(weather.weather.first?.description ?? "")
                }
            } else if let error = viewModel.error {
                Text("Error: (error.localizedDescription)")
                    .foregroundColor(.red)
            }
        }
        .padding()
    }
}
*/`,
                    "explanation": "A weather app demonstrates networking, JSON decoding, and SwiftUI state management. Uses async/await for asynchronous operations."
                },
                {
                    "title": "Task Manager",
                    "code": `// Task manager
/*
struct Task: Identifiable, Codable {
    let id: UUID
    var title: String
    var isCompleted: Bool
    var dueDate: Date?
}

class TaskStore: ObservableObject {
    @Published var tasks = [Task]()
    
    init() {
        loadTasks()
    }
    
    func addTask(title: String) {
        let task = Task(id: UUID(), title: title, isCompleted: false)
        tasks.append(task)
        saveTasks()
    }
    
    func toggleCompletion(for task: Task) {
        if let index = tasks.firstIndex(where: { $0.id == task.id }) {
            tasks[index].isCompleted.toggle()
            saveTasks()
        }
    }
    
    private func saveTasks() {
        if let encoded = try? JSONEncoder().encode(tasks) {
            UserDefaults.standard.set(encoded, forKey: "tasks")
        }
    }
    
    private func loadTasks() {
        if let data = UserDefaults.standard.data(forKey: "tasks"),
           let decoded = try? JSONDecoder().decode([Task].self, from: data) {
            tasks = decoded
        }
    }
}

struct TaskListView: View {
    @StateObject private var store = TaskStore()
    @State private var newTaskTitle = ""
    
    var body: some View {
        NavigationView {
            List {
                ForEach($store.tasks) { $task in
                    HStack {
                        Image(systemName: task.isCompleted ? "checkmark.circle.fill" : "circle")
                            .foregroundColor(task.isCompleted ? .green : .gray)
                            .onTapGesture {
                                store.toggleCompletion(for: task)
                            }
                        
                        Text(task.title)
                            .strikethrough(task.isCompleted)
                    }
                }
                .onDelete { indices in
                    store.tasks.remove(atOffsets: indices)
                    store.saveTasks()
                }
            }
            .navigationTitle("Tasks")
            .toolbar {
                ToolbarItem(placement: .navigationBarTrailing) {
                    EditButton()
                }
            }
            
            VStack {
                TextField("New task", text: $newTaskTitle, onCommit: {
                    if !newTaskTitle.isEmpty {
                        store.addTask(title: newTaskTitle)
                        newTaskTitle = ""
                    }
                })
                .textFieldStyle(RoundedBorderTextFieldStyle())
                .padding()
            }
        }
    }
}
*/`,
                    "explanation": "A task manager demonstrates CRUD operations, @Published properties, and persistence with UserDefaults. Shows SwiftUI list operations."
                }
            ]
        }
    ]
}