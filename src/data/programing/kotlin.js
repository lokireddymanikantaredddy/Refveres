import { SiKotlin } from "react-icons/si";

/* eslint-disable no-undef */
export const kotlinContent = {
    icon: SiKotlin,
    title: "Kotlin",
    color: '#7F52FF', // Kotlin's official brand color
    description: "A comprehensive Kotlin reference with examples and explanations based on best practices and Kotlin conventions.",
    sections: [
        {
            "id": "kotlin-basics",
            "title": "Kotlin Basics",
            "examples": [
                {
                    "title": "Hello World",
                    "code": `// Simple hello world
fun main() {
    println("Hello, World!")
}`,
                    "explanation": "The most basic Kotlin program demonstrating the println function."
                },
                {
                    "title": "Variables and Types",
                    "code": `// Variables and type inference
fun main() {
    // Immutable variables (read-only)
    val name = "Alice"          // String
    val age = 30                // Int
    val height = 5.9            // Double
    val isStudent = true        // Boolean
    
    // Mutable variables
    var counter = 0
    counter += 1
    
    // Explicit type declarations
    val explicitDouble: Double = 70.0
    val explicitString: String = "Hello"
    
    // Nullable types
    var nullableString: String? = null
    nullableString = "Now it has a value"
    
    // String templates
    println("Name: \${name}, Age: \${age + 1}")
}`,
                    "explanation": "Kotlin has val (immutable) and var (mutable) variables. Type inference is used when possible. Null safety is built into the type system."
                },
                {
                    "title": "Basic Operations",
                    "code": `// Basic operations
fun main() {
    // Arithmetic operations
    println(5 + 3)    // Addition
    println(5 - 3)    // Subtraction
    println(5 * 3)    // Multiplication
    println(5 / 3)    // Division (integer result)
    println(5 / 3.0)  // Division (floating-point result)
    println(5 % 3)    // Modulus
    
    // String operations
    val firstName = "John"
    val lastName = "Doe"
    val fullName = "\${firstName} \${lastName}"
    println(fullName.uppercase())
    println(fullName.split(" "))
    
    // Range operator
    for (i in 1..5) print("\${i} ")  // 1 2 3 4 5
    println()
    for (i in 1 until 5) print("\${i} ")  // 1 2 3 4
    println()
    for (i in 5 downTo 1) print("\${i} ")  // 5 4 3 2 1
    println()
    for (i in 1..10 step 2) print("\${i} ")  // 1 3 5 7 9
}`,
                    "explanation": "Basic arithmetic and string operations with string templates. Range operators provide concise ways to create sequences."
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
fun main() {
    val age = 18
    
    // If expression (returns a value)
    val status = if (age < 13) {
        "Child"
    } else if (age in 13..17) {
        "Teenager"
    } else {
        "Adult"
    }
    println(status)
    
    // When expression (like switch)
    val grade = 'B'
    when (grade) {
        'A' -> println("Excellent")
        'B' -> println("Good")
        'C' -> println("Average")
        else -> println("Fail")
    }
    
    // When with ranges
    when (age) {
        in 0..12 -> println("Child")
        in 13..19 -> println("Teenager")
        else -> println("Adult")
    }
    
    // When as expression
    val description = when {
        age < 13 -> "Child"
        age < 18 -> "Teenager"
        else -> "Adult"
    }
}`,
                    "explanation": "Kotlin has if expressions (not statements) that return values. The when expression is more powerful than traditional switch statements."
                },
                {
                    "title": "Loops",
                    "code": `// Loops
fun main() {
    // For loop
    val fruits = listOf("apple", "banana", "cherry")
    for (fruit in fruits) {
        println(fruit)
    }
    
    // With index
    for ((index, fruit) in fruits.withIndex()) {
        println("$index: $fruit")
    }
    
    // While loop
    var count = 0
    while (count < 5) {
        println(count)
        count++
    }
    
    // Do-while
    do {
        println("This runs at least once")
    } while (false)
    
    // Loop control
    for (num in 1..10) {
        if (num % 2 == 0) continue  // Skip even numbers
        if (num > 7) break          // Exit loop
        println(num)
    }
}`,
                    "explanation": "Different loop constructs with examples of loop control statements. Kotlin's for loop works with any iterable."
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
fun greet(name: String, greeting: String = "Hello"): String {
    return "\${greeting}, \${name}!"
}

// Single-expression function
fun square(x: Int) = x * x

// Function with varargs
fun sumAll(vararg numbers: Int): Int {
    return numbers.sum()
}

// Extension function
fun String.addExclamation() = "\${this}!"

fun main() {
    // Calling functions
    println(greet("Alice"))
    println(greet("Bob", "Hi"))
    println(square(5))
    println(sumAll(1, 2, 3, 4))
    
    // Using extension function
    val s = "Hello"
    println(s.addExclamation())
    
    // Lambda functions
    val square: (Int) -> Int = { x -> x * x }
    println(square(4))
    
    // Higher-order functions
    val numbers = listOf(1, 2, 3, 4)
    val squared = numbers.map { x -> x * x }
    println(squared)
}`,
                    "explanation": "Function definition with default arguments and varargs. Extension functions add functionality to existing classes. Lambdas and higher-order functions enable functional programming."
                },
                {
                    "title": "Infix and Operator Functions",
                    "code": `// Infix and operator functions
data class Point(val x: Int, val y: Int) {
    // Infix function
    infix fun move(dx: Int) = Point(x + dx, y)
    
    // Operator function
    operator fun plus(other: Point) = Point(x + other.x, y + other.y)
}

fun main() {
    val p1 = Point(10, 20)
    
    // Using infix notation
    val p2 = p1 move 5
    println(p2)  // Point(x=15, y=20)
    
    // Using operator
    val p3 = p1 + Point(2, 3)
    println(p3)  // Point(x=12, y=23)
}`,
                    "explanation": "Infix functions allow cleaner syntax for certain operations. Operator overloading enables natural syntax for mathematical operations."
                }
            ]
        },
        {
            "id": "collections",
            "title": "Collections",
            "examples": [
                {
                    "title": "Lists",
                    "code": `// Lists
fun main() {
    // Immutable list
    val numbers = listOf(1, 2, 3, 4, 5)
    println(numbers[0])  // Access by index
    println(numbers.first())
    println(numbers.last())
    
    // Mutable list
    val mutableNumbers = mutableListOf(1, 2, 3)
    mutableNumbers.add(4)
    mutableNumbers.removeAt(0)
    mutableNumbers[0] = 10
    println(mutableNumbers)
    
    // List operations
    val doubled = numbers.map { x -> x * 2 }
    val evens = numbers.filter { x -> x % 2 == 0 }
    val sum = numbers.reduce { acc, x -> acc + x }
    val grouped = numbers.groupBy { x -> if (x % 2 == 0) "even" else "odd" }
    
    println("""
        Doubled: \${doubled}
        Evens: \${evens}
        Sum: \${sum}
        Grouped: \${grouped}
    """.trimIndent())
}`,
                    "explanation": "Lists are ordered collections. Kotlin distinguishes between immutable (listOf) and mutable (mutableListOf) lists. Many extension functions are available."
                },
                {
                    "title": "Sets and Maps",
                    "code": `// Sets and Maps
fun main() {
    // Sets
    val immutableSet = setOf("apple", "banana", "cherry")
    val mutableSet = mutableSetOf("apple", "banana")
    mutableSet.add("orange")
    mutableSet.remove("apple")
    
    println(immutableSet.contains("banana"))
    println(mutableSet)
    
    // Maps
    val immutableMap = mapOf(1 to "one", 2 to "two", 3 to "three")
    val mutableMap = mutableMapOf("one" to 1, "two" to 2)
    mutableMap["three"] = 3
    mutableMap.remove("one")
    
    println(immutableMap[2])  // Access by key
    println(mutableMap)
    
    // Map operations
    val filtered = immutableMap.filter { entry -> entry.key > 1 }
    val keys = immutableMap.keys
    val values = immutableMap.values
    
    println("""
        Filtered: \${filtered}
        Keys: \${keys}
        Values: \${values}
    """.trimIndent())
}`,
                    "explanation": "Sets store unique elements. Maps store key-value pairs. Both have immutable and mutable variants. Various extension functions are available for transformations."
                }
            ]
        },
        {
            "id": "null-safety",
            "title": "Null Safety",
            "examples": [
                {
                    "title": "Nullable Types",
                    "code": `// Null safety
fun main() {
    // Nullable types
    var nullableString: String? = null
    nullableString = "Now it has a value"
    
    // Safe calls
    val length = nullableString?.length
    println("Length: \${length}")
    
    // Elvis operator (provide default)
    val safeLength = nullableString?.length ?: 0
    println("Safe length: \${safeLength}")
    
    // Not-null assertion (use with caution)
    val forcedLength = nullableString!!.length
    println("Forced length: \${forcedLength}")
    
    // Safe casts
    val obj: Any = "Hello"
    val str: String? = obj as? String
    val num: Int? = obj as? Int
    println("Str: \${str}, Num: \${num}")
    
    // let scope function
    nullableString?.let { value ->
        println("String is not null: \${value}")
    }
}`,
                    "explanation": "Kotlin's type system distinguishes nullable and non-nullable types. Safe calls (?.), Elvis operator (?:), and not-null assertions (!!) help handle nulls."
                },
                {
                    "title": "Scope Functions",
                    "code": `// Scope functions
data class Person(var name: String, var age: Int)

fun main() {
    val person = Person("Alice", 30)
    
    // let - execute block on non-null object
    person.let {
        it.age += 1
        println("let: \${it.name} is now \${it.age}")
    }
    
    // run - similar to let but with this
    val ageAfter5Years = person.run {
        age += 5
        age
    }
    println("run: Age after 5 years: $ageAfter5Years")
    
    // with - like run but not an extension
    with(person) {
        name = "Bob"
        age = 25
    }
    println("with: $person")
    
    // apply - configure object and return it
    val newPerson = Person("Charlie", 40).apply {
        age += 2
    }
    println("apply: $newPerson")
    
    // also - perform additional actions
    person.also {
        println("also: Before modification: $it")
    }.apply {
        age += 10
    }.also {
        println("also: After modification: $it")
    }
}`,
                    "explanation": "Scope functions (let, run, with, apply, also) provide concise ways to work with objects. Each has slightly different behavior regarding context object and return value."
                }
            ]
        },
        {
            "id": "classes-oop",
            "title": "Classes & OOP",
            "examples": [
                {
                    "title": "Classes and Inheritance",
                    "code": `// Classes and inheritance
open class Person(val name: String, var age: Int) {
    open fun greet() {
        println("Hello, my name is $name")
    }
    
    // Secondary constructor
    constructor(name: String) : this(name, 0)
}

class Student(name: String, age: Int, val studentId: String) : Person(name, age) {
    override fun greet() {
        println("Hi, I'm student $name with ID $studentId")
    }
}

interface Movable {
    fun move()
}

class Car : Movable {
    override fun move() {
        println("Car is moving")
    }
}

fun main() {
    val person = Person("Alice", 30)
    person.greet()
    
    val student = Student("Bob", 20, "S12345")
    student.greet()
    
    val car = Car()
    car.move()
}`,
                    "explanation": "Kotlin classes are final by default (must be marked open to allow inheritance). Primary constructors are part of the class header. Interfaces define contracts."
                },
                {
                    "title": "Data Classes and Sealed Classes",
                    "code": `// Data classes and sealed classes
data class User(val name: String, val age: Int)

sealed class Result {
    data class Success(val data: String) : Result()
    data class Error(val message: String) : Result()
}

fun process(result: Result) {
    when (result) {
        is Result.Success -> println("Success: \${result.data}")
        is Result.Error -> println("Error: \${result.message}")
    }
}

fun main() {
    // Data class automatically provides toString, equals, hashCode, copy
    val user1 = User("Alice", 30)
    val user2 = user1.copy(age = 31)
    println(user1)
    println(user2)
    
    // Sealed classes for restricted hierarchies
    val success = Result.Success("Data loaded")
    val error = Result.Error("Failed to load")
    
    process(success)
    process(error)
}`,
                    "explanation": "Data classes automatically provide useful methods (toString, equals, hashCode, copy). Sealed classes restrict inheritance and are great for representing restricted hierarchies."
                },
                {
                    "title": "Properties and Delegates",
                    "code": `// Properties and delegates
class Person {
    var name: String by Delegates.observable("<no name>") { 
        prop, old, new -> println("$old -> $new")
    }
    
    var age: Int = 0
        get() {
            println("Getting age: $field")
            return field
        }
        set(value) {
            println("Setting age: $value")
            field = value
        }
}

class LazyExample {
    val lazyValue: String by lazy {
        println("Computed!")
        "Hello"
    }
}

fun main() {
    val person = Person()
    person.name = "Alice"  // Prints: <no name> -> Alice
    person.name = "Bob"    // Prints: Alice -> Bob
    
    person.age = 30        // Prints: Setting age: 30
    println(person.age)    // Prints: Getting age: 30 \n 30
    
    val example = LazyExample()
    println(example.lazyValue)  // Prints: Computed! \n Hello
    println(example.lazyValue)  // Prints: Hello
}`,
                    "explanation": "Properties can have custom getters/setters. Delegates (like observable and lazy) provide reusable property behavior without boilerplate code."
                }
            ]
        },
        {
            "id": "coroutines",
            "title": "Coroutines",
            "examples": [
                {
                    "title": "Coroutine Basics",
                    "code": `// Coroutine basics
import kotlinx.coroutines.*

fun main() = runBlocking {
    // Launch a coroutine
    launch {
        delay(1000L)
        println("World!")
    }
    
    println("Hello,")
    
    // Async returns a value
    val deferred = async {
        delay(1000L)
        "Result"
    }
    
    println("Waiting...")
    println(deferred.await())
    
    // Structured concurrency
    coroutineScope {
        launch {
            delay(500L)
            println("Task 1")
        }
        
        launch {
            delay(1000L)
            println("Task 2")
        }
    }
    
    println("Done")
}

/*
// Add to build.gradle.kts:
dependencies {
    implementation("org.jetbrains.kotlinx:kotlinx-coroutines-core:1.6.0")
}
*/`,
                    "explanation": "Coroutines enable lightweight concurrency. launch starts a coroutine. async returns a Deferred value. runBlocking bridges non-coroutine code. Structured concurrency manages coroutine lifetimes."
                },
                {
                    "title": "Flows and Channels",
                    "code": `// Flows and channels
import kotlinx.coroutines.*
import kotlinx.coroutines.flow.*

fun simpleFlow(): Flow<Int> = flow {
    for (i in 1..3) {
        delay(100)
        emit(i)
    }
}

fun main() = runBlocking {
    // Flow is cold - runs when collected
    simpleFlow().collect { value -> println(value) }
    
    // Channels are hot
    val channel = Channel<Int>()
    launch {
        for (x in 1..5) {
            channel.send(x * x)
        }
        channel.close()
    }
    
    for (y in channel) {
        println(y)
    }
}`,
                    "explanation": "Flows represent cold asynchronous streams. Channels are hot communication primitives for coroutines. Both provide ways to handle asynchronous data streams."
                }
            ]
        },
        {
            "id": "dsa",
            "title": "Data Structures & Algorithms",
            "examples": [
                {
                    "title": "Common Patterns",
                    "code": `// Common DSA patterns
fun binarySearch(arr: List<Int>, target: Int): Int {
    var left = 0
    var right = arr.size - 1
    
    while (left <= right) {
        val mid = left + (right - left) / 2
        when {
            arr[mid] == target -> return mid
            arr[mid] < target -> left = mid + 1
            else -> right = mid - 1
        }
    }
    return -1
}

fun dfs(graph: Map<Int, List<Int>>, start: Int) {
    val visited = mutableSetOf<Int>()
    fun helper(node: Int) {
        if (node in visited) return
        visited.add(node)
        println("Visited $node")
        graph[node]?.forEach { neighbor -> helper(neighbor) }
    }
    helper(start)
}

fun main() {
    val sortedList = listOf(1, 3, 5, 7, 9)
    println("Index of 5: \${binarySearch(sortedList, 5)}")
    
    val graph = mapOf(
        1 to listOf(2, 3),
        2 to listOf(4),
        3 to listOf(5),
        4 to listOf(),
        5 to listOf()
    )
    println("DFS traversal:")
    dfs(graph, 1)
}`,
                    "explanation": "Common algorithms like binary search and DFS implemented in Kotlin. Shows how to work with collections and recursion."
                },
                {
                    "title": "Custom Data Structures",
                    "code": `// Custom data structures
class TreeNode<T>(val value: T) {
    val children = mutableListOf<TreeNode<T>>()
    
    fun addChild(child: TreeNode<T>) {
        children.add(child)
    }
    
    fun traverse(visit: (T) -> Unit) {
        visit(value)
        children.forEach { it.traverse(visit) }
    }
}

class LinkedList<T> {
    private var head: Node<T>? = null
    private var tail: Node<T>? = null
    
    private data class Node<T>(val value: T, var next: Node<T>? = null)
    
    fun add(value: T) {
        val newNode = Node(value)
        if (head == null) {
            head = newNode
            tail = newNode
        } else {
            tail?.next = newNode
            tail = newNode
        }
    }
    
    fun printAll() {
        var current = head
        while (current != null) {
            println(current.value)
            current = current.next
        }
    }
}

fun main() {
    val tree = TreeNode("Root").apply {
        addChild(TreeNode("Child1").apply {
            addChild(TreeNode("Grandchild1"))
        })
        addChild(TreeNode("Child2"))
    }
    println("Tree traversal:")
    tree.traverse { println(it) }
    
    val list = LinkedList<Int>().apply {
        add(1)
        add(2)
        add(3)
    }
    println("Linked list:")
    list.printAll()
}`,
                    "explanation": "Implementing tree and linked list data structures in Kotlin. Shows how to create recursive structures and manage references."
                }
            ]
        },
        {
            "id": "functional",
            "title": "Functional Programming",
            "examples": [
                {
                    "title": "Higher-Order Functions",
                    "code": `// Higher-order functions
fun calculate(x: Int, y: Int, operation: (Int, Int) -> Int): Int {
    return operation(x, y)
}

fun String.filter(predicate: (Char) -> Boolean): String {
    return this.filter(predicate)
}

fun main() {
    // Passing lambda
    val sum = calculate(4, 5) { a, b -> a + b }
    val mul = calculate(4, 5) { a, b -> a * b }
    println("Sum: \${sum}, Mul: \${mul}")
    
    // Extension function with lambda
    val filtered = "Hello123".filter { char -> char.isLetter() }
    println(filtered)
    
    // Function references
    val numbers = listOf(1, 2, 3)
    val doubled = numbers.map(::timesTwo)
    println(doubled)
}

fun timesTwo(x: Int) = x * 2`,
                    "explanation": "Higher-order functions take functions as parameters or return them. Lambdas provide concise syntax. Function references (::) allow passing named functions."
                },
                {
                    "title": "Sequence and Collection Operations",
                    "code": `// Sequence and collection operations
fun main() {
    val numbers = listOf(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)
    
    // Eager operations (on collections)
    val eagerResult = numbers
        .filter { num -> num % 2 == 0 }
        .map { num -> num * 2 }
        .take(2)
    println("Eager: \${eagerResult}")
    
    // Lazy operations (on sequences)
    val lazyResult = numbers.asSequence()
        .filter { num -> 
            println("Filtering \${num}")
            num % 2 == 0 
        }
        .map { num -> 
            println("Mapping \${num}")
            num * 2 
        }
        .take(2)
        .toList()
    println("Lazy: \${lazyResult}")
    
    // More operations
    val grouped = numbers.groupBy { num -> if (num % 2 == 0) "even" else "odd" }
    val partitioned = numbers.partition { num -> num % 2 == 0 }
    val reduced = numbers.reduce { acc, num -> acc + num }
    val folded = numbers.fold(10) { acc, num -> acc + num }
    
    println("""
        Grouped: \${grouped}
        Partitioned: \${partitioned.first} and \${partitioned.second}
        Reduced: \${reduced}
        Folded: \${folded}
    """.trimIndent())
}`,
                    "explanation": "Collections provide eager operations. Sequences provide lazy operations for better performance with chained operations. Various operations like groupBy, partition, reduce, fold."
                }
            ]
        },
        {
            "id": "interop",
            "title": "Java Interoperability",
            "examples": [
                {
                    "title": "Calling Java from Kotlin",
                    "code": `// Calling Java from Kotlin
/*
// Java class (would be in separate file)
public class JavaClass {
    public static String greet(String name) {
        return "Hello, " + name + "!";
    }
    
    private int value;
    
    public int getValue() { return value; }
    public void setValue(int value) { this.value = value; }
}
*/

fun main() {
    // Calling Java static method
    val greeting = JavaClass.greet("Kotlin")
    println(greeting)
    
    // Working with Java class
    val javaObj = JavaClass()
    javaObj.value = 42  // Calls setValue
    println(javaObj.value)  // Calls getValue
    
    // Handling nullability
    val list = ArrayList<String>()  // Java collection
    list.add("Item")
    val firstItem: String = list[0]  // Platform type (String! - either String or String?)
    println(firstItem.length)  // Warning but compiles
}`,
                    "explanation": "Kotlin can call Java code seamlessly. Java getters/setters become Kotlin properties. Platform types (Type!) come from Java and require careful null handling."
                },
                {
                    "title": "Calling Kotlin from Java",
                    "code": `// Calling Kotlin from Java
/*
// Kotlin file MyKotlinClass.kt
@file:JvmName("KotlinUtils")

fun greetKotlin(name: String): String = "Hello from Kotlin, $name!"

class KotlinClass {
    @JvmField
    val constant = 42
    
    @JvmOverloads
    fun defaultArgs(x: Int, y: Int = 10) = x + y
}
*/

/*
// Java code calling Kotlin
public class JavaCaller {
    public static void main(String[] args) {
        // Calling top-level function
        System.out.println(KotlinUtils.greetKotlin("Java"));
        
        // Using Kotlin class
        KotlinClass obj = new KotlinClass();
        System.out.println(obj.constant);  // JvmField
        System.out.println(obj.defaultArgs(5));  // JvmOverloads
        System.out.println(obj.defaultArgs(5, 3));
    }
}
*/`,
                    "explanation": "Kotlin provides annotations (@JvmName, @JvmField, @JvmOverloads) to customize how Kotlin code appears to Java. Helps with interoperability."
                }
            ]
        },
        {
            "id": "testing",
            "title": "Testing",
            "examples": [
                {
                    "title": "Unit Testing",
                    "code": `// Unit testing with JUnit
import org.junit.Test
import org.junit.Assert.*

class Calculator {
    fun add(a: Int, b: Int) = a + b
    fun divide(a: Int, b: Int) = a / b
}

class CalculatorTest {
    @Test
    fun testAdd() {
        val calculator = Calculator()
        assertEquals(5, calculator.add(2, 3))
    }
    
    @Test(expected = ArithmeticException::class)
    fun testDivideByZero() {
        val calculator = Calculator()
        calculator.divide(5, 0)
    }
}

/*
// Add to build.gradle.kts:
dependencies {
    testImplementation("junit:junit:4.13.2")
}
*/`,
                    "explanation": "Basic unit testing with JUnit. Kotlin works well with Java testing frameworks. Shows assertions and expected exceptions."
                },
                {
                    "title": "Mocking with MockK",
                    "code": `// Mocking with MockK
import io.mockk.*
import org.junit.Test
import kotlin.test.assertEquals

interface Repository {
    fun getData(id: Int): String
}

class Service(private val repository: Repository) {
    fun process(id: Int): String {
        val data = repository.getData(id)
        return "Processed: $data"
    }
}

class ServiceTest {
    @Test
    fun testProcess() {
        // Create mock
        val repo = mockk<Repository>()
        
        // Define behavior
        every { repo.getData(42) } returns "Mocked Data"
        
        // Test
        val service = Service(repo)
        val result = service.process(42)
        
        // Verify
        assertEquals("Processed: Mocked Data", result)
        verify { repo.getData(42) }
    }
}

/*
// Add to build.gradle.kts:
dependencies {
    testImplementation("io.mockk:mockk:1.12.0")
}
*/`,
                    "explanation": "MockK is a Kotlin mocking library with clean DSL. Shows how to define mock behavior, verify calls, and use in tests."
                }
            ]
        },
        {
            "id": "android",
            "title": "Android Development",
            "examples": [
                {
                    "title": "Basic Activity",
                    "code": `// Android Activity in Kotlin
/*
class MainActivity : AppCompatActivity() {
    private lateinit var binding: ActivityMainBinding
    
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        binding = ActivityMainBinding.inflate(layoutInflater)
        setContentView(binding.root)
        
        binding.button.setOnClickListener {
            Toast.makeText(this, "Button clicked!", Toast.LENGTH_SHORT).show()
        }
    }
    
    companion object {
        fun start(context: Context) {
            val intent = Intent(context, MainActivity::class.java)
            context.startActivity(intent)
        }
    }
}

// XML layout (activity_main.xml)
<LinearLayout xmlns:android="http://schemas.android.com/apk/res/android"
    android:layout_width="match_parent"
    android:layout_height="match_parent"
    android:orientation="vertical">
    
    <Button
        android:id="@+id/button"
        android:layout_width="wrap_content"
        android:layout_height="wrap_content"
        android:text="Click me" />
</LinearLayout>
*/`,
                    "explanation": "Basic Android Activity using view binding. Companion object provides static factory method. Shows click listener setup."
                },
                {
                    "title": "ViewModel and LiveData",
                    "code": `// ViewModel with LiveData
/*
class CounterViewModel : ViewModel() {
    private val _count = MutableLiveData(0)
    val count: LiveData<Int> = _count
    
    fun increment() {
        _count.value = _count.value?.plus(1)
    }
}

class CounterActivity : AppCompatActivity() {
    private lateinit var binding: ActivityCounterBinding
    private lateinit var viewModel: CounterViewModel
    
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        binding = ActivityCounterBinding.inflate(layoutInflater)
        setContentView(binding.root)
        
        viewModel = ViewModelProvider(this)[CounterViewModel::class.java]
        
        viewModel.count.observe(this) { count ->
            binding.countText.text = count.toString()
        }
        
        binding.incrementButton.setOnClickListener {
            viewModel.increment()
        }
    }
}
*/`,
                    "explanation": "ViewModel survives configuration changes. LiveData provides lifecycle-aware observable data. Activity observes changes and updates UI."
                }
            ]
        },
        {
            "id": "dsl",
            "title": "Domain-Specific Languages",
            "examples": [
                {
                    "title": "Type-Safe Builders",
                    "code": `// Type-safe builders
class HTML {
    fun body(block: Body.() -> Unit) = Body().apply(block)
}

class Body {
    var content = ""
    
    fun p(block: P.() -> Unit) {
        content += P().apply(block).toString()
    }
}

class P {
    var text = ""
    
    operator fun String.unaryPlus() {
        text += this
    }
    
    override fun toString() = "<p>$text</p>"
}

fun html(block: HTML.() -> Unit): HTML {
    return HTML().apply(block)
}

fun main() {
    val page = html {
        body {
            p {
                +"This is a paragraph"
                +" with multiple lines"
            }
            p {
                +"Another paragraph"
            }
        }
    }
    
    println(page.body().content)
}`,
                    "explanation": "Kotlin's DSL capabilities allow creating type-safe builders. Lambda with receiver (A.() -> Unit) provides clean syntax. Used in libraries like Kotlin HTML builders."
                },
                {
                    "title": "Gradle Kotlin DSL",
                    "code": `// Gradle Kotlin DSL example
/*
// build.gradle.kts
plugins {
    kotlin("jvm") version "1.6.0"
    application
}

dependencies {
    implementation(kotlin("stdlib"))
    testImplementation("junit:junit:4.13.2")
}

application {
    mainClass.set("com.example.MainKt")
}

tasks.test {
    useJUnit()
}

tasks.withType<org.jetbrains.kotlin.gradle.tasks.KotlinCompile> {
    kotlinOptions {
        jvmTarget = "11"
    }
}
*/`,
                    "explanation": "Gradle Kotlin DSL provides type-safe build configuration. Better IDE support and refactoring than Groovy DSL. Uses Kotlin language features."
                }
            ]
        },
        {
            "id": "multiplatform",
            "title": "Multiplatform",
            "examples": [
                {
                    "title": "Shared Code",
                    "code": `// Multiplatform shared code
/*
// commonMain/kotlin/com.example/Platform.kt
expect class Platform() {
    val platform: String
}

// androidMain/kotlin/com.example/Platform.kt
actual class Platform actual constructor() {
    actual val platform: String = "Android"
}

// iosMain/kotlin/com.example/Platform.kt
actual class Platform actual constructor() {
    actual val platform: String = "iOS"
}

// Common function
fun getPlatformMessage(): String {
    return "Running on \${Platform().platform}"
}
*/`,
                    "explanation": "Kotlin Multiplatform allows sharing code between platforms. 'expect' declares expected API, 'actual' provides platform-specific implementations."
                },
                {
                    "title": "Using in Android/iOS",
                    "code": `// Using shared code in platforms
/*
// Android app
class MainActivity : AppCompatActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)
        
        val textView = findViewById<TextView>(R.id.text_view)
        textView.text = getPlatformMessage()
    }
}

// iOS app (Swift)
func viewDidLoad() {
    super.viewDidLoad()
    label.text = CommonKt.getPlatformMessage()
}
*/`,
                    "explanation": "Shared Kotlin code can be called from both Android (as regular Kotlin) and iOS (through generated Objective-C/Swift headers)."
                }
            ]
        },
        {
            "id": "best-practices",
            "title": "Best Practices",
            "examples": [
                {
                    "title": "Idiomatic Kotlin",
                    "code": `// Idiomatic Kotlin
data class User(val name: String, val age: Int)

fun processUsers(users: List<User>) {
    users
        .filter { it.age >= 21 }
        .groupBy { it.name.first() }
        .forEach { (initial, users) ->
            println("$initial: \${users.size} users")
        }
}

fun String.countVowels(): Int {
    val vowels = setOf('a', 'e', 'i', 'o', 'u')
    return count { it.lowercaseChar() in vowels }
}

fun main() {
    val users = listOf(
        User("Alice", 30),
        User("Bob", 25),
        User("Charlie", 20)
    )
    
    processUsers(users)
    println("Vowels in 'Hello': \${"Hello".countVowels()}")
}`,
                    "explanation": "Idiomatic Kotlin uses data classes, extension functions, collection operations, and expressive syntax. Prefer immutability (val over var) when possible."
                },
                {
                    "title": "Effective Kotlin",
                    "code": `// Effective Kotlin practices
class Repository private constructor(
    private val localDataSource: DataSource,
    private val remoteDataSource: DataSource
) {
    // Companion object for factory methods
    companion object {
        fun create(): Repository {
            val local = LocalDataSource()
            val remote = RemoteDataSource()
            return Repository(local, remote)
        }
    }
    
    fun getData() = sequence {
        yieldAll(localDataSource.getData())
        yieldAll(remoteDataSource.getData())
    }
}

interface DataSource {
    fun getData(): Sequence<String>
}

class LocalDataSource : DataSource {
    override fun getData() = sequence {
        yield("Local data")
    }
}

class RemoteDataSource : DataSource {
    override fun getData() = sequence {
        delay(1000) // Simulate network
        yield("Remote data")
    }
}

suspend fun main() {
    val repo = Repository.create()
    repo.getData().forEach { println(it) }
}`,
                    "explanation": "Effective practices include: using factory methods, preferring interfaces, using sequences for lazy operations, proper class encapsulation, and clear separation of concerns."
                }
            ]
        },
        {
            "id": "project-ideas",
            "title": "Project Ideas",
            "examples": [
                {
                    "title": "REST API with Ktor",
                    "code": `// REST API with Ktor
/*
import io.ktor.server.application.*
import io.ktor.server.engine.*
import io.ktor.server.netty.*
import io.ktor.server.routing.*
import io.ktor.server.response.*
import io.ktor.server.request.*
import kotlinx.serialization.Serializable

@Serializable
data class User(val id: Int, val name: String)

fun Application.module() {
    val users = mutableListOf(User(1, "Alice"))
    
    routing {
        route("/users") {
            get {
                call.respond(users)
            }
            
            post {
                val user = call.receive<User>()
                users.add(user)
                call.respond(user)
            }
            
            get("/{id}") {
                val id = call.parameters["id"]?.toInt()
                val user = users.find { it.id == id }
                if (user != null) {
                    call.respond(user)
                } else {
                    call.respondText("User not found", status = HttpStatusCode.NotFound)
                }
            }
        }
    }
}

fun main() {
    embeddedServer(Netty, port = 8080, module = Application::module).start(wait = true)
}

// Add to build.gradle.kts:
dependencies {
    implementation("io.ktor:ktor-server-core:2.0.0")
    implementation("io.ktor:ktor-server-netty:2.0.0")
    implementation("io.ktor:ktor-serialization-kotlinx-json:2.0.0")
    implementation("io.ktor:ktor-server-content-negotiation:2.0.0")
}
*/`,
                    "explanation": "Ktor is a Kotlin framework for building asynchronous servers and clients. This example shows a simple REST API with JSON serialization."
                },
                {
                    "title": "Android Weather App",
                    "code": `// Android Weather App
/*
// ViewModel
class WeatherViewModel(private val repository: WeatherRepository) : ViewModel() {
    private val _weather = MutableLiveData<WeatherData>()
    val weather: LiveData<WeatherData> = _weather
    
    private val _error = MutableLiveData<String>()
    val error: LiveData<String> = _error
    
    fun loadWeather(city: String) {
        viewModelScope.launch {
            try {
                _weather.value = repository.getWeather(city)
            } catch (e: Exception) {
                _error.value = "Failed to load weather: \${e.message}"
            }
        }
    }
}

// Repository
class WeatherRepository(private val api: WeatherApi) {
    suspend fun getWeather(city: String): WeatherData {
        return api.getWeather(city)
    }
}

// Retrofit service
interface WeatherApi {
    @GET("weather")
    suspend fun getWeather(
        @Query("q") city: String,
        @Query("appid") apiKey: String = "YOUR_API_KEY"
    ): WeatherData
}

// Data classes
data class WeatherData(
    val name: String,
    val main: Main,
    val weather: List<Weather>
)

data class Main(val temp: Double)
data class Weather(val description: String)

// Activity
class WeatherActivity : AppCompatActivity() {
    private lateinit var binding: ActivityWeatherBinding
    private lateinit var viewModel: WeatherViewModel
    
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        binding = ActivityWeatherBinding.inflate(layoutInflater)
        setContentView(binding.root)
        
        val retrofit = Retrofit.Builder()
            .baseUrl("https://api.openweathermap.org/data/2.5/")
            .addConverterFactory(GsonConverterFactory.create())
            .build()
        
        val api = retrofit.create(WeatherApi::class.java)
        viewModel = ViewModelProvider(this, 
            WeatherViewModelFactory(WeatherRepository(api))
            [WeatherViewModel::class.java]
        
        viewModel.weather.observe(this) { weather ->
            binding.temperature.text = "\${weather.main.temp}°C"
            binding.description.text = weather.weather.first().description
            binding.city.text = weather.name
        }
        
        viewModel.error.observe(this) { error ->
            Toast.makeText(this, error, Toast.LENGTH_SHORT).show()
        }
        
        binding.searchButton.setOnClickListener {
            val city = binding.cityInput.text.toString()
            if (city.isNotBlank()) {
                viewModel.loadWeather(city)
            }
        }
    }
}
*/`,
                    "explanation": "Android app using ViewModel, LiveData, Retrofit, and coroutines. Shows clean architecture with separation of concerns."
                }
            ]
        }
    ]
}

/* eslint-enable no-undef */