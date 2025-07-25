import { FaRust } from "react-icons/fa";

export const rustContent = {
    "icon": FaRust,
    "title": "Rust",
    "color": "#000000",
    "description": "A comprehensive Rust reference with examples and explanations based on best practices and Rust conventions.",
    "sections": [
        {
            "id": "rust-basics",
            "title": "Rust Basics",
            "examples": [
                {
                    "title": "Hello World",
                    "code": `// Simple hello world
fn main() {
    println!("Hello, World!");
}`,
                    "explanation": "The most basic Rust program demonstrating the println! macro."
                },
                {
                    "title": "Variables and Mutability",
                    "code": `// Variable binding and mutability
fn main() {
    let immutable = 5;        // Immutable by default
    let mut mutable = 10;     // Mutable variable
    
    println!("Before: {}", mutable);
    mutable += 1;             // Can modify mutable variables
    println!("After: {}", mutable);
    
    // Shadowing
    let shadowed = "hello";
    println!("First shadowed: {}", shadowed);
    let shadowed = shadowed.len();  // New variable with same name
    println!("Shadowed to number: {}", shadowed);
    
    // Constants
    const MAX_POINTS: u32 = 100_000;
    println!("Max points: {}", MAX_POINTS);
}`,
                    "explanation": "Rust variables are immutable by default. Use `mut` for mutable variables. Shadowing allows reusing variable names."
                },
                {
                    "title": "Data Types",
                    "code": `// Scalar and compound types
fn main() {
    // Scalar types
    let integer: i32 = 42;        // Signed 32-bit integer
    let float: f64 = 3.14;        // 64-bit float
    let boolean: bool = true;     // Boolean
    let character: char = 'z';    // Unicode scalar value
    
    // Compound types
    let tuple: (i32, f64, char) = (500, 6.4, 'j');
    let (x, y, z) = tuple;        // Destructuring
    println!("Tuple elements: {}, {}, {}", x, y, z);
    
    let array: [i32; 5] = [1, 2, 3, 4, 5];  // Fixed-size array
    println!("First array element: {}", array[0]);
    
    // Type inference
    let inferred = "This is a &str";  // String slice
    println!("Inferred type: {}", inferred);
}`,
                    "explanation": "Rust is statically typed with scalar (single value) and compound (multiple values) types. Type annotations are optional when types can be inferred."
                }
            ]
        },
        {
            "id": "control-flow",
            "title": "Control Flow",
            "examples": [
                {
                    "title": "Conditionals",
                    "code": `// If expressions and match
fn main() {
    let number = 6;
    
    // If expression
    if number % 4 == 0 {
        println!("Divisible by 4");
    } else if number % 3 == 0 {
        println!("Divisible by 3");
    } else {
        println!("Not divisible by 4 or 3");
    }
    
    // If as expression (like ternary)
    let condition = true;
    let result = if condition { 5 } else { 6 };
    println!("Result: {}", result);
    
    // Match expression (exhaustive)
    match number {
        1 => println!("One"),
        2 | 3 | 5 | 7 => println!("Prime"),
        4..=10 => println!("Between 4 and 10"),
        _ => println!("Something else"),
    }
}`,
                    "explanation": "Rust has if expressions (not statements) that can return values. Match expressions are exhaustive and powerful for pattern matching."
                },
                {
                    "title": "Loops",
                    "code": `// Looping constructs
fn main() {
    // Infinite loop (can return value)
    let mut count = 0;
    let result = loop {
        count += 1;
        if count == 10 {
            break count * 2;  // Breaks with value
        }
    };
    println!("Result: {}", result);
    
    // While loop
    let mut number = 3;
    while number != 0 {
        println!("{}!", number);
        number -= 1;
    }
    
    // For loop (most common)
    let array = [10, 20, 30, 40, 50];
    for element in array.iter() {
        println!("Value: {}", element);
    }
    
    // Range with for
    for number in (1..4).rev() {
        println!("{}!", number);
    }
}`,
                    "explanation": "Rust has several looping constructs. `loop` creates infinite loops, `while` for conditional loops, and `for` is preferred for iteration."
                }
            ]
        },
        {
            "id": "ownership",
            "title": "Ownership & Borrowing",
            "examples": [
                {
                    "title": "Ownership Basics",
                    "code": `// Ownership rules demonstration
fn main() {
    let s1 = String::from("hello");  // String allocated on heap
    let s2 = s1;                     // Move (not shallow copy)
    // println!("{}", s1);           // Error! s1 no longer valid
    
    let x = 5;                       // i32 on stack
    let y = x;                       // Copy (implements Copy trait)
    println!("x: {}, y: {}", x, y);  // Fine
    
    takes_ownership(s2);             // s2 moves into function
    // println!("{}", s2);           // Error! s2 no longer valid
    
    makes_copy(y);                   // y copied into function
    println!("y still accessible: {}", y);
}

fn takes_ownership(some_string: String) {
    println!("{}", some_string);
} // some_string dropped here

fn makes_copy(some_integer: i32) {
    println!("{}", some_integer);
} // some_integer goes out of scope (nothing special)`,
                    "explanation": "Rust's ownership system ensures memory safety. Values have a single owner. Stack types implement Copy trait. Heap values are moved, not shallow copied."
                },
                {
                    "title": "Borrowing",
                    "code": `// References and borrowing
fn main() {
    let s1 = String::from("hello");
    
    let len = calculate_length(&s1);  // Pass reference
    println!("Length of '{}' is {}", s1, len);
    
    let mut s = String::from("hello");
    change(&mut s);                  // Mutable reference
    println!("Changed string: {}", s);
    
    // Only one mutable reference in scope
    let r1 = &mut s;
    // let r2 = &mut s;             // Error! Can't have two mutable refs
    println!("r1: {}", r1);
    
    // Multiple immutable references are fine
    let r3 = &s;
    let r4 = &s;
    println!("r3: {}, r4: {}", r3, r4);
}

fn calculate_length(s: &String) -> usize {  // Borrows a reference
    s.len()
} // s goes out of scope but doesn't drop String

fn change(some_string: &mut String) {
    some_string.push_str(", world");
}`,
                    "explanation": "References allow borrowing without taking ownership. Rules: 1) One mutable reference XOR any number of immutable refs, 2) References must always be valid."
                },
                {
                    "title": "Slices",
                    "code": `// String and array slices
fn main() {
    let s = String::from("hello world");
    
    let hello = &s[0..5];      // String slice
    let world = &s[6..11];
    println!("{} {}", hello, world);
    
    let a = [1, 2, 3, 4, 5];
    let slice = &a[1..3];      // Array slice
    println!("Slice: {:?}", slice);
    
    // First word function
    let first = first_word(&s);
    println!("First word: {}", first);
}

fn first_word(s: &str) -> &str {  // Takes string slice (more general than &String)
    let bytes = s.as_bytes();
    
    for (i, &item) in bytes.iter().enumerate() {
        if item == b' ' {
            return &s[0..i];
        }
    }
    
    &s[..]
}`,
                    "explanation": "Slices are references to contiguous sequences. String slices (&str) are references to parts of Strings. Array slices work similarly."
                }
            ]
        },
        {
            "id": "structs-enums",
            "title": "Structs & Enums",
            "examples": [
                {
                    "title": "Structs",
                    "code": `// Defining and using structs
struct User {
    username: String,
    email: String,
    sign_in_count: u64,
    active: bool,
}

fn main() {
    // Creating an instance
    let mut user1 = User {
        email: String::from("someone@example.com"),
        username: String::from("someusername123"),
        active: true,
        sign_in_count: 1,
    };
    
    // Accessing fields
    user1.email = String::from("anotheremail@example.com");
    
    // Creating from function
    let user2 = build_user(String::from("user2@example.com"), String::from("user2"));
    println!("User2 email: {}", user2.email);
    
    // Struct update syntax
    let user3 = User {
        email: String::from("user3@example.com"),
        username: String::from("user3"),
        ..user2  // Use remaining fields from user2
    };
    
    // Tuple structs
    struct Color(i32, i32, i32);
    let black = Color(0, 0, 0);
    println!("Black: {}, {}, {}", black.0, black.1, black.2);
}

fn build_user(email: String, username: String) -> User {
    User {
        email,    // Field init shorthand
        username,
        active: true,
        sign_in_count: 1,
    }
}`,
                    "explanation": "Structs define custom data types with named fields. Tuple structs have unnamed fields. Field init shorthand avoids repetition when names match."
                },
                {
                    "title": "Enums",
                    "code": `// Enums and pattern matching
enum IpAddr {
    V4(u8, u8, u8, u8),
    V6(String),
}

enum Message {
    Quit,
    Move { x: i32, y: i32 },
    Write(String),
    ChangeColor(i32, i32, i32),
}

impl Message {
    fn call(&self) {
        // Method implementation
    }
}

fn main() {
    let home = IpAddr::V4(127, 0, 0, 1);
    let loopback = IpAddr::V6(String::from("::1"));
    
    let m = Message::Write(String::from("hello"));
    m.call();
    
    // Option enum (built-in)
    let some_number = Some(5);
    let absent_number: Option<i32> = None;
    
    match some_number {
        Some(i) => println!("Number: {}", i),
        None => println!("No number"),
    }
    
    // if let syntax
    if let Some(i) = some_number {
        println!("Number is: {}", i);
    }
}`,
                    "explanation": "Enums define types that can be one of several variants. They can contain data. Option<T> is a built-in enum for handling absence of value safely."
                }
            ]
        },
        {
            "id": "collections",
            "title": "Collections",
            "examples": [
                {
                    "title": "Vectors",
                    "code": `// Working with vectors
fn main() {
    // Creating vectors
    let v: Vec<i32> = Vec::new();
    let mut v = vec![1, 2, 3];  // Macro for initialization
    
    // Updating
    v.push(4);
    v.push(5);
    
    // Accessing
    let third: &i32 = &v[2];    // Panics if out of bounds
    println!("Third element: {}", third);
    
    match v.get(2) {            // Returns Option
        Some(third) => println!("Third element: {}", third),
        None => println!("No third element"),
    }
    
    // Iterating
    for i in &v {
        println!("{}", i);
    }
    
    // Iterating mutable
    for i in &mut v {
        *i += 50;  // Dereference to modify
    }
    
    // Using enum to store multiple types
    enum SpreadsheetCell {
        Int(i32),
        Float(f64),
        Text(String),
    }
    
    let row = vec![
        SpreadsheetCell::Int(3),
        SpreadsheetCell::Text(String::from("blue")),
        SpreadsheetCell::Float(10.12),
    ];
}`,
                    "explanation": "Vectors are growable arrays. They store values contiguously on the heap. Can use enums to store different types in a vector."
                },
                {
                    "title": "Strings",
                    "code": `// String manipulation
fn main() {
    // Creating strings
    let mut s = String::new();
    let data = "initial contents";
    let s = data.to_string();
    let s = String::from("initial contents");
    
    // Updating
    let mut s = String::from("foo");
    s.push_str("bar");
    s.push('!');
    
    // Concatenation
    let s1 = String::from("Hello, ");
    let s2 = String::from("world!");
    let s3 = s1 + &s2;  // s1 moved, can't be used after
    
    // Format macro
    let s = format!("{}-{}-{}", "tic", "tac", "toe");
    
    // Indexing strings is not allowed (UTF-8)
    // Iterating
    for c in "नमस्ते".chars() {
        println!("{}", c);
    }
    
    for b in "नमस्ते".bytes() {
        println!("{}", b);
    }
}`,
                    "explanation": "String is growable, mutable UTF-8 encoded string type. String slices (&str) are immutable views. Strings don't support direct indexing due to UTF-8."
                },
                {
                    "title": "Hash Maps",
                    "code": `// Hash maps
use std::collections::HashMap;

fn main() {
    // Creating
    let mut scores = HashMap::new();
    scores.insert(String::from("Blue"), 10);
    scores.insert(String::from("Yellow"), 50);
    
    // Accessing
    let team_name = String::from("Blue");
    let score = scores.get(&team_name).copied().unwrap_or(0);
    
    // Iterating
    for (key, value) in &scores {
        println!("{}: {}", key, value);
    }
    
    // Updating
    scores.insert(String::from("Blue"), 25);  // Overwrite
    
    // Only insert if key has no value
    scores.entry(String::from("Yellow")).or_insert(50);
    scores.entry(String::from("Red")).or_insert(100);
    
    // Update based on old value
    let text = "hello world wonderful world";
    let mut map = HashMap::new();
    
    for word in text.split_whitespace() {
        let count = map.entry(word).or_insert(0);
        *count += 1;
    }
    
    println!("{:?}", map);
}`,
                    "explanation": "Hash maps store key-value pairs. Keys must be the same type, values must be the same type. Various methods for updating values."
                }
            ]
        },
        {
            "id": "error-handling",
            "title": "Error Handling",
            "examples": [
                {
                    "title": "Result & Unwrap",
                    "code": `// Recoverable errors with Result
use std::fs::File;
use std::io::ErrorKind;

fn main() {
    // Using unwrap (panics on error)
    // let f = File::open("hello.txt").unwrap();
    
    // Using expect (with custom message)
    // let f = File::open("hello.txt").expect("Failed to open hello.txt");
    
    // Proper error handling
    let f = File::open("hello.txt");
    
    let f = match f {
        Ok(file) => file,
        Err(error) => match error.kind() {
            ErrorKind::NotFound => match File::create("hello.txt") {
                Ok(fc) => fc,
                Err(e) => panic!("Problem creating file: {:?}", e),
            },
            other_error => {
                panic!("Problem opening file: {:?}", other_error)
            }
        },
    };
    
    // More concise with closures
    let f = File::open("hello.txt").unwrap_or_else(|error| {
        if error.kind() == ErrorKind::NotFound {
            File::create("hello.txt").unwrap_or_else(|error| {
                panic!("Problem creating file: {:?}", error);
            })
        } else {
            panic!("Problem opening file: {:?}", error);
        }
    });
}`,
                    "explanation": "Result enum is used for recoverable errors. unwrap and expect are shortcuts that panic on error. Proper error handling matches on Result variants."
                },
                {
                    "title": "Propagating Errors",
                    "code": `// Propagating errors with ?
use std::fs::File;
use std::io;
use std::io::Read;

fn read_username_from_file() -> Result<String, io::Error> {
    // Long way with match
    /*
    let f = File::open("hello.txt");
    
    let mut f = match f {
        Ok(file) => file,
        Err(e) => return Err(e),
    };
    
    let mut s = String::new();
    
    match f.read_to_string(&mut s) {
        Ok(_) => Ok(s),
        Err(e) => Err(e),
    }
    */
    
    // Concise way with ?
    let mut f = File::open("hello.txt")?;
    let mut s = String::new();
    f.read_to_string(&mut s)?;
    Ok(s)
    
    // Even more concise
    // let mut s = String::new();
    // File::open("hello.txt")?.read_to_string(&mut s)?;
    // Ok(s)
    
    // Shortest (fs::read_to_string exists)
    // fs::read_to_string("hello.txt")
}

fn main() {
    match read_username_from_file() {
        Ok(username) => println!("Username: {}", username),
        Err(e) => println!("Error: {}", e),
    }
}`,
                    "explanation": "The ? operator propagates errors up the call stack. It's a concise alternative to match expressions when the function returns Result."
                },
                {
                    "title": "Custom Error Types",
                    "code": `// Custom error types
use std::fmt;
use std::error::Error;

#[derive(Debug)]
struct MyError {
    details: String,
}

impl MyError {
    fn new(msg: &str) -> MyError {
        MyError { details: msg.to_string() }
    }
}

impl fmt::Display for MyError {
    fn fmt(&self, f: &mut fmt::Formatter) -> fmt::Result {
        write!(f, "{}", self.details)
    }
}

impl Error for MyError {
    fn description(&self) -> &str {
        &self.details
    }
}

fn do_something() -> Result<(), MyError> {
    Err(MyError::new("Something went wrong"))
}

fn main() {
    match do_something() {
        Ok(_) => println!("Success"),
        Err(e) => println!("Error: {}", e),
    }
}`,
                    "explanation": "Custom error types can be created by implementing the Error trait. This allows for more specific error handling in your application."
                }
            ]
        },
        {
            "id": "generics-traits",
            "title": "Generics & Traits",
            "examples": [
                {
                    "title": "Generics",
                    "code": `// Generic functions and structs
struct Point<T> {
    x: T,
    y: T,
}

impl<T> Point<T> {
    fn x(&self) -> &T {
        &self.x
    }
}

impl Point<f32> {
    fn distance_from_origin(&self) -> f32 {
        (self.x.powi(2) + self.y.powi(2)).sqrt()
    }
}

struct MixedPoint<T, U> {
    x: T,
    y: U,
}

fn main() {
    let integer = Point { x: 5, y: 10 };
    let float = Point { x: 1.0, y: 4.0 };
    let mixed = MixedPoint { x: 5, y: 4.0 };
    
    println!("integer.x = {}", integer.x());
    println!("float distance = {}", float.distance_from_origin());
    
    let numbers = vec![34, 50, 25, 100, 65];
    let result = largest(&numbers);
    println!("Largest number is {}", result);
}

fn largest<T: PartialOrd>(list: &[T]) -> &T {
    let mut largest = &list[0];
    
    for item in list {
        if item > largest {
            largest = item;
        }
    }
    
    largest
}`,
                    "explanation": "Generics allow code to be written abstractly about types. Functions and structs can be generic. Implementations can be generic or type-specific."
                },
                {
                    "title": "Traits",
                    "code": `// Defining and implementing traits
pub trait Summary {
    fn summarize(&self) -> String {
        String::from("(Read more...)")  // Default implementation
    }
}

pub struct NewsArticle {
    pub headline: String,
    pub location: String,
    pub author: String,
    pub content: String,
}

impl Summary for NewsArticle {
    fn summarize(&self) -> String {
        format!("{}, by {} ({})", self.headline, self.author, self.location)
    }
}

pub struct Tweet {
    pub username: String,
    pub content: String,
    pub reply: bool,
    pub retweet: bool,
}

impl Summary for Tweet {
    fn summarize(&self) -> String {
        format!("{}: {}", self.username, self.content)
    }
}

// Trait bounds
pub fn notify<T: Summary>(item: &T) {
    println!("Breaking news! {}", item.summarize());
}

// Alternative syntax with where clause
fn some_function<T, U>(t: &T, u: &U) -> i32
where
    T: Display + Clone,
    U: Clone + Debug,
{
    // Function body
}

fn main() {
    let tweet = Tweet {
        username: String::from("horse_ebooks"),
        content: String::from("of course, as you probably already know, people"),
        reply: false,
        retweet: false,
    };
    
    println!("1 new tweet: {}", tweet.summarize());
    notify(&tweet);
}`,
                    "explanation": "Traits define shared behavior. Types can implement traits. Default implementations can be provided. Trait bounds specify that a generic type must implement certain traits."
                },
                {
                    "title": "Trait Objects",
                    "code": `// Using trait objects for dynamic dispatch
trait Draw {
    fn draw(&self);
}

struct Button {
    width: u32,
    height: u32,
    label: String,
}

impl Draw for Button {
    fn draw(&self) {
        println!("Drawing button: {}x{} with text '{}'", 
            self.width, self.height, self.label);
    }
}

struct SelectBox {
    width: u32,
    height: u32,
    options: Vec<String>,
}

impl Draw for SelectBox {
    fn draw(&self) {
        println!("Drawing select box: {}x{} with options {:?}", 
            self.width, self.height, self.options);
    }
}

struct Screen {
    components: Vec<Box<dyn Draw>>,
}

impl Screen {
    fn run(&self) {
        for component in self.components.iter() {
            component.draw();
        }
    }
}

fn main() {
    let screen = Screen {
        components: vec![
            Box::new(Button {
                width: 50,
                height: 10,
                label: String::from("OK"),
            }),
            Box::new(SelectBox {
                width: 75,
                height: 10,
                options: vec![
                    String::from("Yes"),
                    String::from("Maybe"),
                    String::from("No"),
                ],
            }),
        ],
    };
    
    screen.run();
}`,
                    "explanation": "Trait objects allow for dynamic dispatch at runtime using dyn keyword. This enables heterogeneous collections where different types implement the same trait."
                }
            ]
        },
        {
            "id": "lifetimes",
            "title": "Lifetimes",
            "examples": [
                {
                    "title": "Lifetime Basics",
                    "code": `// Understanding lifetimes
fn main() {
    let string1 = String::from("abcd");
    let string2 = "xyz";
    
    let result = longest(string1.as_str(), string2);
    println!("The longest string is {}", result);
}

// Annotating lifetimes in functions
fn longest<'a>(x: &'a str, y: &'a str) -> &'a str {
    if x.len() > y.len() {
        x
    } else {
        y
    }
}

// Lifetime annotations in structs
struct ImportantExcerpt<'a> {
    part: &'a str,
}

impl<'a> ImportantExcerpt<'a> {
    fn level(&self) -> i32 {
        3
    }
    
    fn announce_and_return_part(&self, announcement: &str) -> &str {
        println!("Attention please: {}", announcement);
        self.part
    }
}

fn main() {
    let novel = String::from("Call me Ishmael. Some years ago...");
    let first_sentence = novel.split('.').next().expect("Could not find a '.'");
    let i = ImportantExcerpt {
        part: first_sentence,
    };
    
    println!("Excerpt: {}", i.part);
}`,
                    "explanation": "Lifetimes ensure references are valid as long as needed. The compiler can often infer lifetimes, but sometimes annotations are needed to clarify relationships."
                },
                {
                    "title": "Static Lifetime",
                    "code": `// The 'static lifetime
fn main() {
    let s: &'static str = "I have a static lifetime";
    
    // This string literal is stored directly in the binary
    println!("{}", s);
    
    // Example where static might be used
    let name = "John";  // string literals have static lifetime
    print_name(name);
}

fn print_name(name: &'static str) {
    println!("Name: {}", name);
}

// Lifetime elision rules
fn first_word(s: &str) -> &str {  // No need for explicit lifetime
    let bytes = s.as_bytes();
    
    for (i, &item) in bytes.iter().enumerate() {
        if item == b' ' {
            return &s[0..i];
        }
    }
    
    &s[..]
}`,
                    "explanation": "'static lifetime means the reference can live for the entire program duration. String literals have static lifetime. Lifetime elision rules allow omitting annotations in common cases."
                }
            ]
        },
        {
            "id": "testing",
            "title": "Testing",
            "examples": [
                {
                    "title": "Unit Tests",
                    "code": `// Writing unit tests
#[derive(Debug)]
struct Rectangle {
    width: u32,
    height: u32,
}

impl Rectangle {
    fn can_hold(&self, other: &Rectangle) -> bool {
        self.width > other.width && self.height > other.height
    }
}

#[cfg(test)]
mod tests {
    use super::*;
    
    #[test]
    fn larger_can_hold_smaller() {
        let larger = Rectangle {
            width: 8,
            height: 7,
        };
        let smaller = Rectangle {
            width: 5,
            height: 1,
        };
        
        assert!(larger.can_hold(&smaller));
    }
    
    #[test]
    fn smaller_cannot_hold_larger() {
        let larger = Rectangle {
            width: 8,
            height: 7,
        };
        let smaller = Rectangle {
            width: 5,
            height: 1,
        };
        
        assert!(!smaller.can_hold(&larger));
    }
    
    #[test]
    fn it_adds_two() {
        assert_eq!(4, add_two(2));
    }
    
    #[test]
    #[should_panic(expected = "Guess value must be between 1 and 100")]
    fn greater_than_100() {
        Guess::new(200);
    }
    
    #[test]
    fn it_works() -> Result<(), String> {
        if 2 + 2 == 4 {
            Ok(())
        } else {
            Err(String::from("two plus two does not equal four"))
        }
    }
}

pub fn add_two(a: i32) -> i32 {
    a + 2
}

pub struct Guess {
    value: i32,
}

impl Guess {
    pub fn new(value: i32) -> Guess {
        if value < 1 || value > 100 {
            panic!("Guess value must be between 1 and 100, got {}.", value);
        }
        
        Guess { value }
    }
}`,
                    "explanation": "Unit tests are written in modules annotated with #[cfg(test)]. Use assert!, assert_eq!, and assert_ne! macros. Tests can return Result or expect panics."
                },
                {
                    "title": "Integration Tests",
                    "code": `// Integration tests (in tests directory)
// File: tests/integration_test.rs

use adder;  // Assuming our library is named "adder"

#[test]
fn it_adds_two() {
    assert_eq!(4, adder::add_two(2));
}

// File: tests/common/mod.rs
// Helper module for shared test code
pub fn setup() {
    // Setup code specific to your tests
}

// Using the helper module
mod common;

#[test]
fn test_with_helper() {
    common::setup();
    // Test code
}`,
                    "explanation": "Integration tests are external to your library and use it as any other code would. They go in the tests directory. Shared test code can be placed in a common module."
                }
            ]
        },
        {
            "id": "advanced-features",
            "title": "Advanced Features",
            "examples": [
                {
                    "title": "Closures",
                    "code": `// Using closures
fn main() {
    let expensive_closure = |num: u32| -> u32 {
        println!("Calculating slowly...");
        thread::sleep(Duration::from_secs(2));
        num
    };
    
    let example_closure = |x| x;
    let s = example_closure(String::from("hello"));
    // let n = example_closure(5);  // Error! Type already inferred as String
    
    // Capturing environment
    let x = 4;
    let equal_to_x = |z| z == x;
    let y = 4;
    assert!(equal_to_x(y));
    
    // Moving ownership
    let x = vec![1, 2, 3];
    let equal_to_x = move |z| z == x;
    // println!("Can't use x here: {:?}", x);  // x was moved
    
    // Using closures with iterators
    let v1 = vec![1, 2, 3];
    let v2: Vec<_> = v1.iter().map(|x| x + 1).collect();
    assert_eq!(v2, vec![2, 3, 4]);
}

// Storing closures
struct Cacher<T>
where
    T: Fn(u32) -> u32,
{
    calculation: T,
    value: Option<u32>,
}

impl<T> Cacher<T>
where
    T: Fn(u32) -> u32,
{
    fn new(calculation: T) -> Cacher<T> {
        Cacher {
            calculation,
            value: None,
        }
    }
    
    fn value(&mut self, arg: u32) -> u32 {
        match self.value {
            Some(v) => v,
            None => {
                let v = (self.calculation)(arg);
                self.value = Some(v);
                v
            }
        }
    }
}`,
                    "explanation": "Closures are anonymous functions that can capture their environment. They implement Fn, FnMut, or FnOnce traits. Can be stored in structs."
                },
                {
                    "title": "Iterators",
                    "code": `// Using iterators
#[derive(Debug, PartialEq)]
struct Shoe {
    size: u32,
    style: String,
}

fn shoes_in_size(shoes: Vec<Shoe>, shoe_size: u32) -> Vec<Shoe> {
    shoes.into_iter().filter(|s| s.size == shoe_size).collect()
}

struct Counter {
    count: u32,
}

impl Counter {
    fn new() -> Counter {
        Counter { count: 0 }
    }
}

impl Iterator for Counter {
    type Item = u32;
    
    fn next(&mut self) -> Option<Self::Item> {
        if self.count < 5 {
            self.count += 1;
            Some(self.count)
        } else {
            None
        }
    }
}

fn main() {
    let v1 = vec![1, 2, 3];
    let v1_iter = v1.iter();
    
    for val in v1_iter {
        println!("Got: {}", val);
    }
    
    // Iterator adapters
    let sum: u32 = v1.iter().sum();
    let v2: Vec<_> = v1.iter().map(|x| x + 1).collect();
    
    // Using our custom iterator
    let mut counter = Counter::new();
    assert_eq!(counter.next(), Some(1));
    assert_eq!(counter.next(), Some(2));
    assert_eq!(counter.next(), Some(3));
    assert_eq!(counter.next(), Some(4));
    assert_eq!(counter.next(), Some(5));
    assert_eq!(counter.next(), None);
    
    // Combining iterator methods
    let sum: u32 = Counter::new()
        .zip(Counter::new().skip(1))
        .map(|(a, b)| a * b)
        .filter(|x| x % 3 == 0)
        .sum();
    assert_eq!(18, sum);
}`,
                    "explanation": "Iterators are lazy and only consume values when needed. Implement the Iterator trait to create custom iterators. Many adapter methods available."
                },
                {
                    "title": "Smart Pointers",
                    "code": `// Using smart pointers
use std::rc::Rc;
use std::cell::RefCell;

fn main() {
    // Box<T> for heap allocation
    let b = Box::new(5);
    println!("b = {}", b);
    
    // Recursive types with Box
    enum List {
        Cons(i32, Box<List>),
        Nil,
    }
    
    let list = List::Cons(1, Box::new(List::Cons(2, Box::new(List::Nil)));
    
    // Rc<T> for reference counting
    let a = Rc::new(Cons(5, Rc::new(Cons(10, Rc::new(Nil))));
    println!("Count after creating a = {}", Rc::strong_count(&a));
    let b = Cons(3, Rc::clone(&a));
    println!("Count after creating b = {}", Rc::strong_count(&a));
    {
        let c = Cons(4, Rc::clone(&a));
        println!("Count after creating c = {}", Rc::strong_count(&a));
    }
    println!("Count after c goes out of scope = {}", Rc::strong_count(&a));
    
    // RefCell<T> for interior mutability
    let x = RefCell::new(42);
    
    {
        let mut y = x.borrow_mut();
        *y += 1;
    }
    
    println!("x = {:?}", x);
    
    // Combining Rc and RefCell
    let value = Rc::new(RefCell::new(5));
    
    let a = Rc::new(Cons(Rc::clone(&value), Rc::new(Nil)));
    let b = Cons(Rc::new(RefCell::new(3)), Rc::clone(&a));
    let c = Cons(Rc::new(RefCell::new(4)), Rc::clone(&a));
    
    *value.borrow_mut() += 10;
    
    println!("a after = {:?}", a);
    println!("b after = {:?}", b);
    println!("c after = {:?}", c);
}

#[derive(Debug)]
enum ConsList {
    Cons(Rc<RefCell<i32>>, Rc<ConsList>),
    Nil,
}`,
                    "explanation": "Smart pointers like Box, Rc, and RefCell enable more complex memory management patterns. Box provides heap allocation. Rc enables multiple ownership. RefCell allows interior mutability."
                },
                {
                    "title": "Concurrency",
                    "code": `// Threads and concurrency
use std::thread;
use std::sync::{mpsc, Arc, Mutex};
use std::time::Duration;

fn main() {
    // Spawning threads
    let handle = thread::spawn(|| {
        for i in 1..10 {
            println!("hi number {} from the spawned thread!", i);
            thread::sleep(Duration::from_millis(1));
        }
    });
    
    for i in 1..5 {
        println!("hi number {} from the main thread!", i);
        thread::sleep(Duration::from_millis(1));
    }
    
    handle.join().unwrap();
    
    // Message passing with channels
    let (tx, rx) = mpsc::channel();
    
    thread::spawn(move || {
        let val = String::from("hi");
        tx.send(val).unwrap();
        // println!("val is {}", val);  // Error! Value was moved
    });
    
    let received = rx.recv().unwrap();
    println!("Got: {}", received);
    
    // Shared state concurrency
    let counter = Arc::new(Mutex::new(0));
    let mut handles = vec![];
    
    for _ in 0..10 {
        let counter = Arc::clone(&counter);
        let handle = thread::spawn(move || {
            let mut num = counter.lock().unwrap();
            *num += 1;
        });
        handles.push(handle);
    }
    
    for handle in handles {
        handle.join().unwrap();
    }
    
    println!("Result: {}", *counter.lock().unwrap());
}`,
                    "explanation": "Rust's concurrency model emphasizes message passing and shared state with ownership rules enforced at compile time. Threads, channels, and mutexes are the main tools."
                }
            ]
        },
        {
            "id": "macros",
            "title": "Macros",
            "examples": [
                {
                    "title": "Declarative Macros",
                    "code": `// Declarative macros with macro_rules!
#[macro_export]
macro_rules! vec {
    ( $( $x:expr ),* ) => {
        {
            let mut temp_vec = Vec::new();
            $(
                temp_vec.push($x);
            )*
            temp_vec
        }
    };
}

fn main() {
    let v = vec![1, 2, 3];
    println!("{:?}", v);
}

// Another example macro
macro_rules! my_println {
    ($($arg:tt)*) => {
        println!("Custom: {}", format_args!($($arg)*));
    };
}

fn main() {
    my_println!("Hello, world! {}", 42);
}`,
                    "explanation": "Declarative macros use pattern matching to generate code. They're defined with macro_rules! and work by matching against patterns and expanding to code."
                },
                {
                    "title": "Procedural Macros",
                    "code": `// Procedural macro example (would be in separate crate)
/*
// Cargo.toml
[lib]
proc-macro = true

// lib.rs
use proc_macro::TokenStream;
use quote::quote;
use syn;

#[proc_macro_derive(HelloMacro)]
pub fn hello_macro_derive(input: TokenStream) -> TokenStream {
    // Parse the input
    let ast = syn::parse(input).unwrap();
    
    // Build the implementation
    impl_hello_macro(&ast)
}

fn impl_hello_macro(ast: &syn::DeriveInput) -> TokenStream {
    let name = &ast.ident;
    let gen = quote! {
        impl HelloMacro for #name {
            fn hello_macro() {
                println!("Hello, Macro! My name is {}!", stringify!(#name));
            }
        }
    };
    gen.into()
}
*/

// Using the procedural macro
/*
use hello_macro::HelloMacro;
use hello_macro_derive::HelloMacro;

#[derive(HelloMacro)]
struct Pancakes;

fn main() {
    Pancakes::hello_macro();  // Prints: Hello, Macro! My name is Pancakes!
}
*/`,
                    "explanation": "Procedural macros allow for more complex code generation. They come in three flavors: custom derive, attribute-like, and function-like. They operate on token streams."
                }
            ]
        },
        {
            "id": "project-organization",
            "title": "Project Organization",
            "examples": [
                {
                    "title": "Modules",
                    "code": `// Module system example
// File: src/lib.rs
mod front_of_house {
    pub mod hosting {
        pub fn add_to_waitlist() {}
        fn seat_at_table() {}
    }
    
    mod serving {
        fn take_order() {}
        fn serve_order() {}
        fn take_payment() {}
    }
}

pub use crate::front_of_house::hosting;

pub fn eat_at_restaurant() {
    hosting::add_to_waitlist();
}

// File: src/main.rs
/*
use restaurant::hosting;

fn main() {
    hosting::add_to_waitlist();
}
*/

// Separating modules into files
// File: src/front_of_house.rs
pub mod hosting;

// File: src/front_of_house/hosting.rs
pub fn add_to_waitlist() {}`,
                    "explanation": "Rust's module system organizes code hierarchically. Modules can be declared inline or in separate files. Use pub to make items public."
                },
                {
                    "title": "Workspaces",
                    "code": `// Workspace example
/*
// Directory structure:
my_project/
├── Cargo.toml
├── adder/
│   ├── Cargo.toml
│   └── src/
│       └── lib.rs
└── add_one/
    ├── Cargo.toml
    └── src/
        └── lib.rs

// Top-level Cargo.toml
[workspace]
members = [
    "adder",
    "add_one",
]

// adder/Cargo.toml
[dependencies]
add_one = { path = "../add_one" }
*/`,
                    "explanation": "Workspaces help manage multiple related packages that share Cargo.lock and output directory. Useful for large projects with multiple crates."
                }
            ]
        },
        {
            "id": "unsafe-rust",
            "title": "Unsafe Rust",
            "examples": [
                {
                    "title": "Unsafe Basics",
                    "code": `// Unsafe operations
unsafe fn dangerous() {
    println!("Doing something unsafe");
}

fn main() {
    // Calling unsafe code
    unsafe {
        dangerous();
    }
    
    // Dereferencing raw pointers
    let mut num = 5;
    let r1 = &num as *const i32;
    let r2 = &mut num as *mut i32;
    
    unsafe {
        println!("r1 is: {}", *r1);
        println!("r2 is: {}", *r2);
    }
    
    // Calling external code
    unsafe {
        println!("Absolute value of -3 according to C: {}", abs(-3));
    }
}

extern "C" {
    fn abs(input: i32) -> i32;
}

// Safe abstraction over unsafe code
fn split_at_mut(slice: &mut [i32], mid: usize) -> (&mut [i32], &mut [i32]) {
    let len = slice.len();
    let ptr = slice.as_mut_ptr();
    
    assert!(mid <= len);
    
    unsafe {
        (
            std::slice::from_raw_parts_mut(ptr, mid),
            std::slice::from_raw_parts_mut(ptr.add(mid), len - mid),
        )
    }
}`,
                    "explanation": "Unsafe Rust allows operations that bypass compiler checks. Used for low-level systems programming, FFI, or performance optimizations. Should be encapsulated in safe abstractions."
                }
            ]
        },
        {
            "id": "ffi",
            "title": "Foreign Function Interface",
            "examples": [
                {
                    "title": "Calling C from Rust",
                    "code": `// Calling C code from Rust
extern "C" {
    fn abs(input: i32) -> i32;
}

fn main() {
    unsafe {
        println!("Absolute value of -3 according to C: {}", abs(-3));
    }
}

// Building with C code
/*
// src/main.rs
#[link(name = "myccode", kind = "static")]
extern "C" {
    fn hello_from_c();
}

fn main() {
    unsafe {
        hello_from_c();
    }
}

// csrc/myccode.c
#include <stdio.h>

void hello_from_c() {
    printf("Hello from C!\n");
}

// build.rs
fn main() {
    println!("cargo:rustc-link-search=csrc");
    println!("cargo:rustc-link-lib=static=myccode");
}
*/`,
                    "explanation": "Rust can call C functions using extern blocks. Need to specify calling convention and link to external libraries. Unsafe is required for FFI calls."
                },
                {
                    "title": "Calling Rust from C",
                    "code": `// Making Rust code callable from C
/*
// lib.rs
#[no_mangle]
pub extern "C" fn hello_from_rust() {
    println!("Hello from Rust!");
}

// C header file
#ifdef __cplusplus
extern "C" {
#endif

void hello_from_rust();

#ifdef __cplusplus
}
#endif

// Compile Rust as cdylib
# [lib]
# crate-type = ["cdylib"]
*/`,
                    "explanation": "Rust functions can be exported for C to call using extern \"C\" and #[no_mangle]. Compile as a C-compatible dynamic library."
                }
            ]
        },
        {
            "id": "async",
            "title": "Async/Await",
            "examples": [
                {
                    "title": "Async Basics",
                    "code": `// Async/await basics
use std::time::Duration;
use tokio::time::sleep;

async fn hello_world() {
    println!("hello, world!");
}

async fn learn_song() {
    sleep(Duration::from_secs(1)).await;
    println!("Learned song!");
}

async fn sing_song() {
    println!("Singing song!");
}

async fn dance() {
    println!("Dancing!");
}

async fn learn_and_sing() {
    // Wait for learn_song to complete before sing_song
    learn_song().await;
    sing_song().await;
}

#[tokio::main]
async fn main() {
    // Join multiple futures to run concurrently
    let f1 = learn_and_sing();
    let f2 = dance();
    
    futures::join!(f1, f2);
    
    // Using spawn
    let handle = tokio::spawn(async {
        sleep(Duration::from_secs(1)).await;
        println!("Done after 1 second");
    });
    
    handle.await.unwrap();
}`,
                    "explanation": "Async/await allows writing asynchronous code that looks synchronous. Futures are lazy and need an executor to run. .await yields control while waiting."
                },
                {
                    "title": "Channels",
                    "code": `// Async channels
use tokio::sync::mpsc;

#[tokio::main]
async fn main() {
    let (tx, mut rx) = mpsc::channel(32);
    let tx2 = tx.clone();
    
    tokio::spawn(async move {
        tx.send("Hello").await.unwrap();
    });
    
    tokio::spawn(async move {
        tx2.send("World").await.unwrap();
    });
    
    while let Some(message) = rx.recv().await {
        println!("Got: {}", message);
    }
}`,
                    "explanation": "Async channels allow communication between async tasks. MPSC (multi-producer, single-consumer) channels are commonly used for message passing."
                }
            ]
        },
        {
            "id": "best-practices",
            "title": "Best Practices",
            "examples": [
                {
                    "title": "Error Handling",
                    "code": `// Proper error handling
use std::fs::File;
use std::io::{self, Read};
use std::path::Path;

fn read_username_from_file(path: &Path) -> Result<String, io::Error> {
    let mut file = File::open(path)?;
    let mut username = String::new();
    file.read_to_string(&mut username)?;
    Ok(username)
}

// Custom error type
#[derive(Debug)]
enum MyError {
    Io(io::Error),
    Parse(String),
}

impl From<io::Error> for MyError {
    fn from(err: io::Error) -> MyError {
        MyError::Io(err)
    }
}

impl std::fmt::Display for MyError {
    fn fmt(&self, f: &mut std::fmt::Formatter) -> std::fmt::Result {
        match self {
            MyError::Io(e) => write!(f, "IO error: {}", e),
            MyError::Parse(s) => write!(f, "Parse error: {}", s),
        }
    }
}

impl std::error::Error for MyError {}

fn might_fail() -> Result<(), MyError> {
    let path = Path::new("hello.txt");
    let _username = read_username_from_file(path)?;
    Ok(())
}

fn main() {
    if let Err(e) = might_fail() {
        eprintln!("Error: {}", e);
    }
}`,
                    "explanation": "Proper error handling uses Result and custom error types. Implement the Error trait for custom errors. Use ? for ergonomic error propagation."
                },
                {
                    "title": "Performance Tips",
                    "code": `// Performance considerations
fn process_data(data: &[u32]) -> Vec<u32> {
    // Pre-allocate capacity when possible
    let mut result = Vec::with_capacity(data.len());
    
    // Use iterators for efficient loops
    result.extend(
        data.iter()
            .filter(|&&x| x % 2 == 0)
            .map(|&x| x * 2)
    );
    
    result
}

// Avoid unnecessary clones
fn process_string(s: &str) -> String {
    // Only allocate new String if needed
    if s.starts_with("special") {
        s.to_uppercase()
    } else {
        s.to_string()
    }
}

// Use Cow for flexible borrowing
use std::borrow::Cow;

fn process_input(input: &str) -> Cow<str> {
    if input.len() > 10 {
        Cow::Owned(input.to_uppercase())
    } else {
        Cow::Borrowed(input)
    }
}

fn main() {
    let data = vec![1, 2, 3, 4, 5, 6];
    let processed = process_data(&data);
    println!("{:?}", processed);
    
    let input = "hello";
    let output = process_input(input);
    println!("{}", output);
}`,
                    "explanation": "Performance tips: prefer iterators, avoid unnecessary allocations, use Cow for flexible borrowing, and leverage Rust's zero-cost abstractions."
                }
            ]
        },
        {
            "id": "project-ideas",
            "title": "Project Ideas",
            "examples": [
                {
                    "title": "CLI Tool",
                    "code": `// Simple CLI tool with clap
use clap::{Arg, App};

fn main() {
    let matches = App::new("My CLI Tool")
        .version("1.0")
        .author("Your Name")
        .about("Does awesome things")
        .arg(Arg::with_name("input")
            .help("The input file to use")
            .required(true)
            .index(1))
        .arg(Arg::with_name("verbose")
            .short("v")
            .multiple(true)
            .help("Sets the level of verbosity"))
        .get_matches();
    
    let input = matches.value_of("input").unwrap();
    let verbosity = matches.occurrences_of("verbose");
    
    println!("Processing file: {}", input);
    if verbosity > 0 {
        println!("Verbose mode enabled (level: {})", verbosity);
    }
    
    // File processing would go here
}

/*
// Cargo.toml dependencies
[dependencies]
clap = "2.33"
*/`,
                    "explanation": "Command-line tools are a great way to learn Rust. The clap crate provides powerful argument parsing."
                },
                {
                    "title": "Web Server",
                    "code": `// Simple web server with Actix
use actix_web::{web, App, HttpResponse, HttpServer, Responder};

async fn hello() -> impl Responder {
    HttpResponse::Ok().body("Hello world!")
}

async fn greet(name: web::Path<String>) -> impl Responder {
    format!("Hello {}!", name)
}

#[actix_web::main]
async fn main() -> std::io::Result<()> {
    HttpServer::new(|| {
        App::new()
            .route("/", web::get().to(hello))
            .route("/{name}", web::get().to(greet))
    })
    .bind("127.0.0.1:8080")?
    .run()
    .await
}

/*
// Cargo.toml dependencies
[dependencies]
actix-web = "4.0"
*/`,
                    "explanation": "Rust has excellent web frameworks like Actix. This example shows a simple web server with route handling."
                },
                {
                    "title": "Systems Utility",
                    "code": `// Simple systems utility
use std::fs;
use std::path::Path;

fn find_largest_file(dir: &Path) -> std::io::Result<Option<(String, u64)>> {
    let mut largest = None;
    
    for entry in fs::read_dir(dir)? {
        let entry = entry?;
        let path = entry.path();
        
        if path.is_file() {
            let size = entry.metadata()?.len();
            
            if largest.map(|(_, s)| s < size).unwrap_or(true) {
                let name = path.to_string_lossy().into_owned();
                largest = Some((name, size));
            }
        }
    }
    
    Ok(largest)
}

fn main() -> std::io::Result<()> {
    let dir = Path::new(".");
    if let Some((name, size)) = find_largest_file(dir)? {
        println!("Largest file: {} ({} bytes)", name, size);
    } else {
        println!("No files found");
    }
    Ok(())
}`,
                    "explanation": "Rust excels at systems programming. This utility finds the largest file in a directory, demonstrating file system operations."
                }
            ]
        }
    ]
}