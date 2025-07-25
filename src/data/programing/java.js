import { FaJava } from 'react-icons/fa';

export const javaContent = {
  icon: FaJava,
  title: 'Java',
  color: '#007396', // Java's official brand color
  description: 'A comprehensive Java reference with examples and explanations based on best practices and modern Java features.',
  sections: [
    {
      id: 'java-basics',
      title: 'Java Basics',
      examples: [
        {
          title: 'Hello World',
          code: `public class HelloWorld {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`,
          explanation: 'The most basic Java program demonstrating class structure and the main method entry point.'
        },
        {
          title: 'Variables and Data Types',
          code: `// Primitive types
int age = 30;                // 32-bit integer
double price = 19.99;        // 64-bit floating point
boolean isJavaFun = true;    // true or false
char grade = 'A';            // Single 16-bit Unicode character

// Reference types
String name = "Alice";       // String object
int[] numbers = {1, 2, 3};  // Array

// Constants
final double PI = 3.14159;   // Cannot be reassigned

// Type inference (Java 10+)
var message = "Hello";       // Inferred as String`,
          explanation: 'Java is statically typed with primitive and reference types. The `var` keyword enables local variable type inference.'
        },
        {
          title: 'Operators',
          code: `// Arithmetic
int sum = 5 + 3;     // Addition
int diff = 5 - 3;    // Subtraction
int product = 5 * 3; // Multiplication
double quotient = 5 / 3.0; // Division
int remainder = 5 % 3; // Modulus

// Comparison
boolean isEqual = (5 == 3);  // false
boolean isGreater = (5 > 3); // true

// Logical
boolean result = (5 > 3) && (2 < 4); // AND - true
boolean result2 = (5 < 3) || (2 > 4); // OR - false
boolean result3 = !(5 == 3); // NOT - true

// Ternary operator
String message = (age >= 18) ? "Adult" : "Minor";`,
          explanation: 'Java supports standard arithmetic, comparison, and logical operators, plus the ternary conditional operator.'
        }
      ]
    },
    {
      id: 'control-flow',
      title: 'Control Flow',
      examples: [
        {
          title: 'Conditionals',
          code: `// If-else
int age = 20;
if (age < 13) {
    System.out.println("Child");
} else if (age < 18) {
    System.out.println("Teenager");
} else {
    System.out.println("Adult");
}

// Switch (Java 14+ enhanced)
String day = "MONDAY";
switch (day) {
    case "MONDAY", "FRIDAY" -> System.out.println("Weekday");
    case "SATURDAY", "SUNDAY" -> System.out.println("Weekend");
    default -> System.out.println("Invalid day");
}

// Switch expression (Java 12+)
String type = switch(day) {
    case "MONDAY", "TUESDAY" -> "Start of week";
    case "WEDNESDAY" -> "Midweek";
    case "THURSDAY", "FRIDAY" -> "End of week";
    default -> "Weekend";
};`,
          explanation: 'Conditional statements including modern switch expressions that can return values.'
        },
        {
          title: 'Loops',
          code: `// For loop
for (int i = 0; i < 5; i++) {
    System.out.println(i);
}

// Enhanced for loop (for-each)
int[] numbers = {1, 2, 3, 4, 5};
for (int num : numbers) {
    System.out.println(num);
}

// While loop
int count = 0;
while (count < 5) {
    System.out.println(count);
    count++;
}

// Do-while
do {
    System.out.println(count);
    count--;
} while (count > 0);`,
          explanation: 'Different loop constructs for iteration. Enhanced for loop is preferred when working with collections/arrays.'
        }
      ]
    },
    {
      id: 'arrays-collections',
      title: 'Arrays & Collections',
      examples: [
        {
          title: 'Arrays',
          code: `// Array declaration and initialization
int[] numbers = new int[5];          // All zeros
String[] names = {"Alice", "Bob"};   // Initialized

// Accessing elements
numbers[0] = 10;
int first = numbers[0];

// Multidimensional arrays
int[][] matrix = new int[3][3];
matrix[0][0] = 1;

// Array properties
int length = numbers.length;  // Not a method!

// Array utilities
import java.util.Arrays;
Arrays.sort(numbers);
int[] copy = Arrays.copyOf(numbers, numbers.length);
String arrayString = Arrays.toString(numbers);`,
          explanation: 'Arrays are fixed-size containers. Java provides utility methods in the Arrays class.'
        },
        {
          title: 'Collections Framework',
          code: `import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

// List (ordered, allows duplicates)
List<String> names = new ArrayList<>();
names.add("Alice");
names.add("Bob");
String first = names.get(0);

// Set (unique elements)
Set<Integer> uniqueNumbers = new HashSet<>();
uniqueNumbers.add(1);
uniqueNumbers.add(1);  // No effect

// Map (key-value pairs)
Map<String, Integer> ageMap = new HashMap<>();
ageMap.put("Alice", 30);
int aliceAge = ageMap.get("Alice");

// Iterating collections
for (String name : names) {
    System.out.println(name);
}

// Java 8+ forEach
ageMap.forEach((name, age) -> 
    System.out.println(name + " is " + age + " years old"));`,
          explanation: 'The Collections Framework provides interfaces and implementations for common data structures.'
        }
      ]
    },
    {
      id: 'object-oriented',
      title: 'Object-Oriented Programming',
      examples: [
        {
          title: 'Classes and Objects',
          code: `// Class definition
public class Person {
    // Fields (instance variables)
    private String name;
    private int age;
    
    // Constructor
    public Person(String name, int age) {
        this.name = name;
        this.age = age;
    }
    
    // Method
    public void greet() {
        System.out.println("Hello, my name is " + name);
    }
    
    // Getters and setters
    public String getName() {
        return name;
    }
    
    public void setAge(int age) {
        if (age > 0) {
            this.age = age;
        }
    }
}

// Creating objects
Person alice = new Person("Alice", 30);
alice.greet();`,
          explanation: 'Classes are blueprints for objects, encapsulating state (fields) and behavior (methods).'
        },
        {
          title: 'Inheritance',
          code: `// Base class
class Animal {
    protected String name;
    
    public Animal(String name) {
        this.name = name;
    }
    
    public void eat() {
        System.out.println(name + " is eating");
    }
}

// Derived class
class Dog extends Animal {
    private String breed;
    
    public Dog(String name, String breed) {
        super(name);  // Call parent constructor
        this.breed = breed;
    }
    
    @Override
    public void eat() {
        super.eat();  // Call parent method
        System.out.println("Dog food");
    }
    
    public void bark() {
        System.out.println("Woof!");
    }
}

// Usage
Dog myDog = new Dog("Buddy", "Golden Retriever");
myDog.eat();
myDog.bark();`,
          explanation: 'Inheritance allows classes to extend other classes, inheriting fields and methods while adding specialization.'
        },
        {
          title: 'Interfaces and Abstract Classes',
          code: `// Interface (Java 8+)
interface Drawable {
    void draw();  // Abstract method
    
    default void resize() {  // Default method
        System.out.println("Resizing");
    }
    
    static void printInfo() {  // Static method
        System.out.println("Drawable interface");
    }
}

// Abstract class
abstract class Shape implements Drawable {
    protected String color;
    
    public Shape(String color) {
        this.color = color;
    }
    
    abstract double area();  // Abstract method
}

// Concrete class
class Circle extends Shape {
    private double radius;
    
    public Circle(String color, double radius) {
        super(color);
        this.radius = radius;
    }
    
    @Override
    public void draw() {
        System.out.println("Drawing a " + color + " circle");
    }
    
    @Override
    double area() {
        return Math.PI * radius * radius;
    }
}

// Usage
Shape circle = new Circle("Red", 5.0);
circle.draw();
System.out.println("Area: " + circle.area());
Drawable.printInfo();`,
          explanation: 'Interfaces define contracts (Java 8+ allows default/static methods). Abstract classes provide partial implementations.'
        }
      ]
    },
    {
      id: 'exceptions',
      title: 'Exception Handling',
      examples: [
        {
          title: 'Try-Catch Blocks',
          code: `try {
    // Code that might throw an exception
    int result = divide(10, 0);
    System.out.println("Result: " + result);
} catch (ArithmeticException e) {
    System.out.println("Cannot divide by zero: " + e.getMessage());
} catch (Exception e) {
    System.out.println("Something went wrong");
} finally {
    System.out.println("This always executes");
}

// Method that throws exception
int divide(int a, int b) throws ArithmeticException {
    if (b == 0) {
        throw new ArithmeticException("Division by zero");
    }
    return a / b;
}`,
          explanation: 'Exceptions disrupt normal flow. Catch specific exceptions first. Finally blocks execute regardless of exceptions.'
        },
        {
          title: 'Custom Exceptions',
          code: `// Custom checked exception
class InsufficientFundsException extends Exception {
    private double amount;
    
    public InsufficientFundsException(double amount) {
        super("Insufficient funds: " + amount);
        this.amount = amount;
    }
    
    public double getAmount() {
        return amount;
    }
}

// Custom unchecked exception
class InvalidAccountException extends RuntimeException {
    public InvalidAccountException(String message) {
        super(message);
    }
}

// Usage
class BankAccount {
    private double balance;
    
    public void withdraw(double amount) throws InsufficientFundsException {
        if (amount > balance) {
            throw new InsufficientFundsException(amount - balance);
        }
        balance -= amount;
    }
}`,
          explanation: 'Create custom exceptions when standard ones don\'t fit. Checked exceptions must be declared or handled.'
        }
      ]
    },
    {
      id: 'java-8-features',
      title: 'Java 8+ Features',
      examples: [
        {
          title: 'Lambda Expressions',
          code: `// Functional interface (single abstract method)
interface Calculator {
    int operate(int a, int b);
}

// Lambda implementations
Calculator add = (a, b) -> a + b;
Calculator multiply = (a, b) -> a * b;

System.out.println(add.operate(5, 3));      // 8
System.out.println(multiply.operate(5, 3)); // 15

// Using with Java's functional interfaces
Runnable runnable = () -> System.out.println("Running");
new Thread(runnable).start();

// Comparator with lambda
List<String> names = Arrays.asList("Alice", "Bob", "Charlie");
names.sort((s1, s2) -> s1.length() - s2.length());`,
          explanation: 'Lambdas enable functional programming by providing concise syntax for implementing functional interfaces.'
        },
        {
          title: 'Stream API',
          code: `List<String> names = Arrays.asList("Alice", "Bob", "Charlie", "Anna");

// Stream operations
long count = names.stream()
    .filter(name -> name.startsWith("A"))
    .count();

List<String> upperCaseNames = names.stream()
    .map(String::toUpperCase)
    .collect(Collectors.toList());

// Parallel stream
int sum = IntStream.range(1, 100)
    .parallel()
    .sum();

// Grouping
Map<Integer, List<String>> namesByLength = names.stream()
    .collect(Collectors.groupingBy(String::length));`,
          explanation: 'Streams enable functional-style operations on collections with map/filter/reduce operations.'
        },
        {
          title: 'Optional',
          code: `Optional<String> optionalName = Optional.ofNullable(getName());

// Traditional check
if (optionalName.isPresent()) {
    System.out.println(optionalName.get());
}

// Functional style
optionalName.ifPresent(name -> System.out.println(name));

// Default value
String name = optionalName.orElse("Unknown");

// Throw exception if empty
String name2 = optionalName.orElseThrow(
    () -> new IllegalArgumentException("Name required"));

// Map and filter
optionalName
    .map(String::toUpperCase)
    .ifPresent(System.out::println);

// Avoid this!
Optional.ofNullable(getName())
    .ifPresent(name -> {
        if (name.length() > 3) {
            System.out.println(name);
        }
    });`,
          explanation: 'Optional helps avoid null checks and NullPointerExceptions by explicitly modeling optional values.'
        }
      ]
    },
    {
      id: 'concurrency',
      title: 'Concurrency',
      examples: [
        {
          title: 'Thread Basics',
          code: `// Extending Thread
class MyThread extends Thread {
    public void run() {
        System.out.println("Thread running");
    }
}

// Implementing Runnable
class MyRunnable implements Runnable {
    public void run() {
        System.out.println("Runnable running");
    }
}

// Creating threads
Thread thread1 = new MyThread();
Thread thread2 = new Thread(new MyRunnable());

thread1.start();
thread2.start();

// Lambda version
new Thread(() -> System.out.println("Lambda thread")).start();`,
          explanation: 'Two ways to create threads. Prefer Runnable over extending Thread for better flexibility.'
        },
        {
          title: 'Executor Service',
          code: `ExecutorService executor = Executors.newFixedThreadPool(4);

// Submit tasks
Future<Integer> future = executor.submit(() -> {
    Thread.sleep(1000);
    return 42;
});

// Other tasks can run while waiting
System.out.println("Doing other work");

try {
    int result = future.get();  // Blocks until done
    System.out.println("Result: " + result);
} catch (Exception e) {
    e.printStackTrace();
}

// Shutdown
executor.shutdown();
executor.awaitTermination(1, TimeUnit.MINUTES);`,
          explanation: 'ExecutorService manages thread pools efficiently. Futures represent asynchronous results.'
        },
        {
          title: 'Synchronization',
          code: `class Counter {
    private int count = 0;
    
    // Synchronized method
    public synchronized void increment() {
        count++;
    }
    
    // Synchronized block
    public void decrement() {
        synchronized(this) {
            count--;
        }
    }
    
    public int getCount() {
        return count;
    }
}

// Atomic variables (better for simple cases)
AtomicInteger atomicCount = new AtomicInteger(0);
atomicCount.incrementAndGet();

// Concurrent collections
Map<String, String> concurrentMap = new ConcurrentHashMap<>();
List<String> copyOnWriteList = new CopyOnWriteArrayList<>();`,
          explanation: 'Synchronization prevents thread interference. Prefer concurrent collections and atomic variables when possible.'
        }
      ]
    },
    {
      id: 'io-nio',
      title: 'I/O & NIO',
      examples: [
        {
          title: 'File I/O',
          code: `import java.io.*;
import java.nio.file.*;

// Traditional I/O
try (BufferedReader reader = new BufferedReader(new FileReader("file.txt"))) {
    String line;
    while ((line = reader.readLine()) != null) {
        System.out.println(line);
    }
} catch (IOException e) {
    e.printStackTrace();
}

// Writing with try-with-resources
try (PrintWriter writer = new PrintWriter(new FileWriter("output.txt"))) {
    writer.println("Hello, file!");
}

// NIO (Java 7+)
Path path = Paths.get("file.txt");
List<String> lines = Files.readAllLines(path);
Files.write(Paths.get("output.txt"), lines);

// WatchService for directory changes
WatchService watchService = FileSystems.getDefault().newWatchService();
Path dir = Paths.get(".");
dir.register(watchService, StandardWatchEventKinds.ENTRY_MODIFY);`,
          explanation: 'Java provides both traditional I/O and NIO (New I/O) packages. Try-with-resources ensures proper resource cleanup.'
        },
        {
          title: 'Serialization',
          code: `class Person implements Serializable {
    private static final long serialVersionUID = 1L;
    private String name;
    private transient int age;  // Won't be serialized
    
    // Constructor, getters, setters...
}

// Serialize object
try (ObjectOutputStream oos = new ObjectOutputStream(
        new FileOutputStream("person.ser"))) {
    Person person = new Person("Alice", 30);
    oos.writeObject(person);
}

// Deserialize
try (ObjectInputStream ois = new ObjectInputStream(
        new FileInputStream("person.ser"))) {
    Person person = (Person) ois.readObject();
    System.out.println(person.getName());
}`,
          explanation: 'Serialization converts objects to byte streams. Use transient for non-serializable fields and serialVersionUID for versioning.'
        }
      ]
    },
    {
      id: 'modern-java',
      title: 'Modern Java (9-17)',
      examples: [
        {
          title: 'Modules (Java 9+)',
          code: `// module-info.java
module com.example.myapp {
    requires java.base;          // Implicit
    requires java.logging;
    requires transitive com.example.mylib;  // Transitive dependency
    
    exports com.example.myapp.api;
    opens com.example.myapp.internal to com.example.framework;
}

// Using modules
java --module-path out -m com.example.myapp/com.example.myapp.Main`,
          explanation: 'Java Platform Module System (JPMS) provides better encapsulation and dependency management.'
        },
        {
          title: 'Var with Lambdas (Java 11)',
          code: `// Before Java 11
Function<String, Integer> lengthFunc = (String s) -> s.length();

// Java 11+
Function<String, Integer> lengthFunc = (var s) -> s.length();

// Useful with annotations
BiFunction<String, Integer, String> func = 
    (@NonNull var str, @Positive var num) -> str.repeat(num);`,
          explanation: 'var can be used in lambda parameters, especially useful with annotations.'
        },
        {
          title: 'Records (Java 16)',
          code: `// Automatically generates:
// - private final fields
// - Constructor
// - Getters
// - equals(), hashCode(), toString()
public record Person(String name, int age) {
    // Compact constructor for validation
    public Person {
        if (age < 0) {
            throw new IllegalArgumentException("Age cannot be negative");
        }
    }
    
    // Can add methods
    public String nameInUpperCase() {
        return name.toUpperCase();
    }
}

// Usage
Person person = new Person("Alice", 30);
System.out.println(person.name());  // Getter`,
          explanation: 'Records are transparent carriers for immutable data, reducing boilerplate code.'
        },
        {
          title: 'Pattern Matching (Java 16+)',
          code: `// instanceof pattern matching
Object obj = "Hello";
if (obj instanceof String s) {  // s is automatically cast
    System.out.println(s.length());
}

// Switch expression with patterns (Java 17 preview)
String formatted = switch(obj) {
    case Integer i -> String.format("int %d", i);
    case String s -> String.format("String %s", s);
    case null -> "null";
    default -> obj.toString();
};`,
          explanation: 'Pattern matching simplifies common coding patterns by combining type checking and casting.'
        }
      ]
    },
    {
      id: 'testing',
      title: 'Testing',
      examples: [
        {
          title: 'JUnit 5',
          code: `import org.junit.jupiter.api.*;
import static org.junit.jupiter.api.Assertions.*;

class CalculatorTest {
    private Calculator calculator;
    
    @BeforeEach
    void setUp() {
        calculator = new Calculator();
    }
    
    @Test
    @DisplayName("Test addition")
    void testAdd() {
        assertEquals(5, calculator.add(2, 3));
    }
    
    @Test
    @Disabled("Not implemented yet")
    void testDivide() {
        assertThrows(ArithmeticException.class, 
            () -> calculator.divide(1, 0));
    }
    
    @ParameterizedTest
    @ValueSource(ints = {1, 2, 3})
    void testIsPositive(int number) {
        assertTrue(number > 0);
    }
}`,
          explanation: 'JUnit 5 is the modern testing framework with improved annotations and assertions.'
        },
        {
          title: 'Mockito',
          code: `import static org.mockito.Mockito.*;

@Test
void testUserService() {
    // Create mock
    UserRepository mockRepo = mock(UserRepository.class);
    
    // Stub behavior
    when(mockRepo.findById(1L)).thenReturn(new User(1L, "Alice"));
    when(mockRepo.findById(2L)).thenThrow(new NotFoundException());
    
    // Inject mock
    UserService service = new UserService(mockRepo);
    
    // Test
    User user = service.getUser(1L);
    assertEquals("Alice", user.getName());
    
    // Verify interaction
    verify(mockRepo, times(1)).findById(1L);
}`,
          explanation: 'Mockito creates test doubles (mocks) to isolate units under test from their dependencies.'
        }
      ]
    },
    {
      id: 'best-practices',
      title: 'Best Practices',
      examples: [
        {
          title: 'Effective Java',
          code: `// 1. Use static factory methods instead of constructors
public class Connection {
    private Connection() {}
    
    public static Connection create() {
        return new Connection();
    }
}

// 2. Builder pattern for complex objects
public class Pizza {
    private final int size;
    private final boolean cheese;
    
    public static class Builder {
        private final int size;
        private boolean cheese = false;
        
        public Builder(int size) {
            this.size = size;
        }
        
        public Builder addCheese() {
            this.cheese = true;
            return this;
        }
        
        public Pizza build() {
            return new Pizza(this);
        }
    }
    
    private Pizza(Builder builder) {
        this.size = builder.size;
        this.cheese = builder.cheese;
    }
}

// Usage
Pizza pizza = new Pizza.Builder(12).addCheese().build();`,
          explanation: 'Following Joshua Bloch\'s Effective Java principles leads to more maintainable code.'
        },
        {
          title: 'Clean Code',
          code: `// 1. Meaningful names
public List<Account> getActiveAccounts() { ... }

// 2. Small methods with single responsibility
public double calculateTotal(List<OrderItem> items) {
    double subtotal = calculateSubtotal(items);
    return applyDiscounts(subtotal);
}

private double calculateSubtotal(List<OrderItem> items) { ... }
private double applyDiscounts(double subtotal) { ... }

// 3. Avoid magic numbers
private static final double TAX_RATE = 0.08;

public double calculateTax(double amount) {
    return amount * TAX_RATE;
}

// 4. Prefer immutability
public final class Point {
    private final double x;
    private final double y;
    
    public Point(double x, double y) {
        this.x = x;
        this.y = y;
    }
    
    // No setters
}`,
          explanation: 'Clean code principles emphasize readability, maintainability, and simplicity.'
        }
      ]
    },
    {
      id: 'project-ideas',
      title: 'Project Ideas',
      examples: [
        {
          title: 'Banking System',
          code: `public interface BankAccount {
    void deposit(double amount);
    void withdraw(double amount) throws InsufficientFundsException;
    double getBalance();
    String getAccountNumber();
}

public class SavingsAccount implements BankAccount {
    private final String accountNumber;
    private double balance;
    private final double interestRate;
    
    public SavingsAccount(String accountNumber, double interestRate) {
        this.accountNumber = accountNumber;
        this.interestRate = interestRate;
    }
    
    @Override
    public void deposit(double amount) {
        if (amount <= 0) {
            throw new IllegalArgumentException("Amount must be positive");
        }
        balance += amount;
    }
    
    @Override
    public void withdraw(double amount) throws InsufficientFundsException {
        if (amount > balance) {
            throw new InsufficientFundsException(amount - balance);
        }
        balance -= amount;
    }
    
    public void applyInterest() {
        balance += balance * interestRate;
    }
    
    // Other methods...
}

public class Bank {
    private final Map<String, BankAccount> accounts = new HashMap<>();
    
    public void addAccount(BankAccount account) {
        accounts.put(account.getAccountNumber(), account);
    }
    
    public Optional<BankAccount> getAccount(String accountNumber) {
        return Optional.ofNullable(accounts.get(accountNumber));
    }
}`,
          explanation: 'A banking system demonstrating interfaces, exception handling, and collections.'
        },
        {
          title: 'Spring Boot REST API',
          code: `@RestController
@RequestMapping("/api/products")
public class ProductController {
    private final ProductService productService;
    
    @Autowired
    public ProductController(ProductService productService) {
        this.productService = productService;
    }
    
    @GetMapping
    public List<Product> getAllProducts() {
        return productService.findAll();
    }
    
    @GetMapping("/{id}")
    public ResponseEntity<Product> getProductById(@PathVariable Long id) {
        return productService.findById(id)
            .map(ResponseEntity::ok)
            .orElse(ResponseEntity.notFound().build());
    }
    
    @PostMapping
    public ResponseEntity<Product> createProduct(@RequestBody Product product) {
        Product saved = productService.save(product);
        return ResponseEntity.created(URI.create("/api/products/" + saved.getId()))
            .body(saved);
    }
}

@Service
@Transactional
public class ProductService {
    private final ProductRepository productRepository;
    
    public ProductService(ProductRepository productRepository) {
        this.productRepository = productRepository;
    }
    
    public List<Product> findAll() {
        return productRepository.findAll();
    }
    
    public Optional<Product> findById(Long id) {
        return productRepository.findById(id);
    }
    
    public Product save(Product product) {
        return productRepository.save(product);
    }
}

public interface ProductRepository extends JpaRepository<Product, Long> {
    List<Product> findByNameContaining(String name);
}`,
          explanation: 'A Spring Boot REST API showing modern Java web development with dependency injection and JPA.'
        }
      ]
    }
  ]
};