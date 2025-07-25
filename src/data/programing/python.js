import { FaPython } from "react-icons/fa";
import { SiPython } from 'react-icons/si';

export const pythonContent = {
    "icon": FaPython,
    "title": "Python",
    "color": '#3776AB',
    "description": "A comprehensive Python reference with examples and explanations based on best practices and PEP standards.",
    "sections": [
        {
            "id": "python-basics",
            "title": "Python Basics",
            "examples": [
                {
                    "title": "Hello World",
                    "code": `# Simple hello world 
print("Hello, World!")`,
                    "explanation": "The most basic Python program demonstrating the print function."
                },
                {
                    "title": "Variables and Types",
                    "code": `# Variable assignment and dynamic typing
name = "Alice"          # String
age = 30                # Integer
height = 5.9            # Float
is_student = True       # Boolean

# Type hints (Python 3.5+)
from typing import Union
def greet(name: str, age: Union[int, float]) -> str:
    return f"Hello {name}, you are {age} years old"

# Multiple assignment
x, y, z = 1, 2, 3
a = b = c = 0`,
                    "explanation": "Python is dynamically typed but supports type hints. Multiple assignment is also possible."
                },
                {
                    "title": "Basic Operations",
                    "code": `# Arithmetic operations
print(5 + 3)    # Addition
print(5 - 3)    # Subtraction
print(5 * 3)    # Multiplication
print(5 / 3)    # Division (returns float)
print(5 // 3)   # Floor division
print(5 % 3)    # Modulus
print(5 ** 3)   # Exponentiation

# String operations
first_name = "John"
last_name = "Doe"
full_name = f"{first_name} {last_name}"  # f-string (Python 3.6+)
print(full_name.upper())
print(full_name.split())`,
                    "explanation": "Basic arithmetic and string operations with modern f-strings for string formatting."
                }
            ]
        },
        {
            "id": "control-flow",
            "title": "Control Flow",
            "examples": [
                {
                    "title": "Conditionals",
                    "code": `# If-elif-else statements
age = 18

if age < 13:
    print("Child")
elif 13 <= age < 18:
    print("Teenager")
else:
    print("Adult")

# Ternary operator
status = "Adult" if age >= 18 else "Minor"

# Match-case (Python 3.10+)
match status:
    case "Child":
        print("Playing")
    case "Teenager":
        print("Studying")
    case "Adult":
        print("Working")`,
                    "explanation": "Conditional statements including the new match-case syntax (structural pattern matching)."
                },
                {
                    "title": "Loops",
                    "code": `# For loop
fruits = ["apple", "banana", "cherry"]
for fruit in fruits:
    print(fruit)

# With index
for i, fruit in enumerate(fruits, start=1):
    print(f"{i}. {fruit}")

# While loop
count = 0
while count < 5:
    print(count)
    count += 1

# Loop control
for num in range(10):
    if num % 2 == 0:
        continue  # Skip even numbers
    if num > 7:
        break     # Exit loop
    print(num)`,
                    "explanation": "Different loop constructs with examples of loop control statements."
                }
            ]
        },
        {
            "id": "data-structures",
            "title": "Data Structures",
            "examples": [
                {
                    "title": "Lists",
                    "code": `# List creation and operations
numbers = [1, 2, 3, 4, 5]
numbers.append(6)           # Add to end
numbers.insert(0, 0)        # Insert at index
last = numbers.pop()        # Remove and return last item
numbers.remove(3)           # Remove first occurrence
numbers.sort()              # In-place sort
sorted_nums = sorted(numbers)  # New sorted list

# List comprehension
squares = [x**2 for x in numbers if x % 2 == 0]

# Slicing
first_three = numbers[:3]
last_two = numbers[-2:]
reversed_list = numbers[::-1]`,
                    "explanation": "Lists are mutable sequences with various operations and comprehensions for concise creation."
                },
                {
                    "title": "Tuples",
                    "code": `# Tuple creation (immutable)
point = (10, 20)
x, y = point  # Unpacking

# Named tuples
from collections import namedtuple
Person = namedtuple('Person', ['name', 'age'])
alice = Person("Alice", 30)
print(alice.name)`,
                    "explanation": "Tuples are immutable sequences, often used for fixed collections of items. Named tuples add readability."
                },
                {
                    "title": "Dictionaries",
                    "code": `# Dictionary operations
person = {
    "name": "Alice",
    "age": 30,
    "city": "New York"
}

# Accessing
print(person["name"])  # Raises KeyError if missing
print(person.get("country", "USA"))  # Default if missing

# Adding/updating
person["email"] = "alice@example.com"
person.update({"age": 31, "job": "Engineer"})

# Dictionary comprehension
squares = {x: x**2 for x in range(1, 6)}

# Python 3.9+ merge dictionaries
dict1 = {"a": 1, "b": 2}
dict2 = {"b": 3, "c": 4}
merged = dict1 | dict2`,
                    "explanation": "Dictionaries store key-value pairs with efficient lookup. Modern Python offers clean merging syntax."
                },
                {
                    "title": "Sets",
                    "code": `# Set operations
primes = {2, 3, 5, 7}
evens = {2, 4, 6, 8}

# Set operations
print(primes & evens)   # Intersection
print(primes | evens)   # Union
print(primes - evens)   # Difference
print(primes ^ evens)   # Symmetric difference

# Set comprehension
unique_letters = {char.lower() for char in "Hello World" if char.isalpha()}`,
                    "explanation": "Sets store unique elements and support mathematical set operations."
                }
            ]
        },
        {
            "id": "functions",
            "title": "Functions",
            "examples": [
                {
                    "title": "Basic Functions",
                    "code": `# Function definition
def greet(name: str, greeting: str = "Hello") -> str:
    """Return a greeting message.
    
    Args:
        name: Name to greet
        greeting: Greeting word (default 'Hello')
        
    Returns:
        Formatted greeting string
    """
    return f"{greeting}, {name}!"

# Calling
message = greet("Alice")
print(message)

# Lambda functions
square = lambda x: x ** 2
numbers = [1, 2, 3, 4]
squared = list(map(square, numbers))`,
                    "explanation": "Function definition with type hints, docstrings, default arguments, and lambda functions."
                },
                {
                    "title": "Advanced Function Features",
                    "code": `# Variable arguments
def sum_all(*args):
    return sum(args)

print(sum_all(1, 2, 3, 4))

# Keyword arguments
def create_profile(**kwargs):
    for key, value in kwargs.items():
        print(f"{key}: {value}")

create_profile(name="Alice", age=30, city="NY")

# Function annotations
def apply_func(func: callable, value: float) -> float:
    return func(value)

# Decorators
def log_execution(func):
    def wrapper(*args, **kwargs):
        print(f"Executing {func.__name__}")
        result = func(*args, **kwargs)
        print(f"Finished executing {func.__name__}")
        return result
    return wrapper

@log_execution
def complex_calculation(x, y):
    return x * y"`,
                    "explanation": "Advanced function features including variable arguments, decorators, and annotations."
                }
            ]
        },
        {
            "id": "classes-oop",
            "title": "Classes & OOP",
            "examples": [
                {
                    "title": "Basic Class",
                    "code": `class Person:
    def __init__(self, name: str, age: int):
        self.name = name
        self.age = age
        
    def greet(self) -> str:
        return f"Hello, my name is {self.name} and I'm {self.age} years old"
    
    def __str__(self) -> str:
        return f"Person(name={self.name}, age={self.age})"

# Usage
alice = Person("Alice", 30)
print(alice.greet())
print(alice)  # Calls __str__"`,
                    "explanation": "Basic class definition with initialization, methods, and string representation."
                },
                {
                    "title": "Inheritance",
                    "code": `class Animal:
    def __init__(self, name: str):
        self.name = name
        
    def speak(self) -> str:
        raise NotImplementedError("Subclass must implement this method")

class Dog(Animal):
    def speak(self) -> str:
        return "Woof!"
    
    def __str__(self) -> str:
        return f"Dog(name={self.name})"

class Cat(Animal):
    def speak(self) -> str:
        return "Meow!"
    
    def __str__(self) -> str:
        return f"Cat(name={self.name})"

# Polymorphism
animals = [Dog("Rex"), Cat("Whiskers")]
for animal in animals:
    print(f"{animal}: {animal.speak()}")"`,
                    "explanation": "Inheritance and polymorphism in Python with abstract method pattern."
                },
                {
                    "title": "Properties and Decorators",
                    "code": `class Circle:
    def __init__(self, radius: float):
        self._radius = radius
        
    @property
    def radius(self) -> float:
        return self._radius
    
    @radius.setter
    def radius(self, value: float):
        if value <= 0:
            raise ValueError("Radius must be positive")
        self._radius = value
        
    @property
    def area(self) -> float:
        return 3.14159 * self._radius ** 2
    
    @classmethod
    def from_diameter(cls, diameter: float) -> 'Circle':
        return cls(diameter / 2)
    
    @staticmethod
    def is_valid_radius(radius: float) -> bool:
        return radius > 0

# Usage
circle = Circle(5)
print(circle.area)  # Access as property
circle.radius = 10  # Uses setter
big_circle = Circle.from_diameter(20)`,
                    "explanation": "Using properties for getters/setters, class methods as alternative constructors, and static methods."
                },
                {
                    "title": "Dataclasses (Python 3.7+)",
                    "code": `from dataclasses import dataclass, field
from typing import List

@dataclass(order=True)
class InventoryItem:
    name: str
    unit_price: float
    quantity: int = 0
    tags: List[str] = field(default_factory=list)
    
    def total_cost(self) -> float:
        return self.unit_price * self.quantity

# Usage
item = InventoryItem("Widget", 9.99, 5)
print(item)  # Auto-generated __repr__
print(item.total_cost())`,
                    "explanation": "Dataclasses reduce boilerplate code by auto-generating special methods like __init__ and __repr__."
                }
            ]
        },
        {
            "id": "error-handling",
            "title": "Error Handling",
            "examples": [
                {
                    "title": "Try-Except Blocks",
                    "code": `def divide(x: float, y: float) -> float:
    try:
        result = x / y
    except ZeroDivisionError:
        print("Error: Division by zero")
        return float('nan')  # Return Not a Number
    except TypeError as e:
        print(f"Type error: {e}")
        raise  # Re-raise the exception
    else:
        print("Division successful")
        return result
    finally:
        print("This always executes")

# Usage
print(divide(10, 2))
print(divide(10, 0))
# print(divide("10", "2"))  # Would raise TypeError"`,
                    "explanation": "Basic error handling with try-except blocks, including else and finally clauses."
                },
                {
                    "title": "Custom Exceptions",
                    "code": `class InvalidEmailError(Exception):
    """Raised when an invalid email format is detected"""
    def __init__(self, email: str, message: str = "Invalid email format"):
        self.email = email
        self.message = message
        super().__init__(self.message)

def validate_email(email: str):
    if "@" not in email or "." not in email:
        raise InvalidEmailError(email)
    return True

try:
    validate_email("invalid-email")
except InvalidEmailError as e:
    print(f"Error with email {e.email}: {e}")`,
                    "explanation": "Creating custom exceptions for more specific error handling in your application."
                }
            ]
        },
        {
            "id": "file-io",
            "title": "File I/O",
            "examples": [
                {
                    "title": "Reading and Writing Files",
                    "code": `# Writing to a file
with open('example.txt', 'w', encoding='utf-8') as f:
    f.write("Hello, World!\\n")
    f.writelines(["Second line\\n", "Third line\\n"])

# Reading from a file
with open('example.txt', 'r', encoding='utf-8') as f:
    content = f.read()  # Read entire file
    # OR
    lines = f.readlines()  # Read as list of lines
    # OR iterate line by line
    for line in f:
        print(line.strip())

# Working with paths
from pathlib import Path
file_path = Path('example.txt')
print(file_path.exists())
print(file_path.read_text())`,
                    "explanation": "File operations using context managers (with statement) for automatic file closing, and modern Path object."
                },
                {
                    "title": "CSV and JSON",
                    "code": `import csv
import json

# Writing CSV
data = [["Name", "Age"], ["Alice", 30], ["Bob", 25]]
with open('data.csv', 'w', newline='') as f:
    writer = csv.writer(f)
    writer.writerows(data)

# Reading CSV
with open('data.csv', 'r') as f:
    reader = csv.DictReader(f)
    for row in reader:
        print(row['Name'], row['Age'])

# JSON serialization
person = {"name": "Alice", "age": 30, "city": "New York"}
with open('data.json', 'w') as f:
    json.dump(person, f, indent=2)

# JSON deserialization
with open('data.json', 'r') as f:
    loaded = json.load(f)
    print(loaded['name'])`,
                    "explanation": "Working with common data formats like CSV and JSON for data interchange."
                }
            ]
        },
        {
            "id": "modules-packages",
            "title": "Modules & Packages",
            "examples": [
                {
                    "title": "Creating Modules",
                    "code": `# mymodule.py
"""This is a docstring for the module"""

def greet(name: str) -> str:
    return f"Hello, {name}!"

class Calculator:
    @staticmethod
    def add(a: float, b: float) -> float:
        return a + b

# In another file:
# import mymodule
# from mymodule import greet, Calculator"`,
                    "explanation": "Basic module structure with functions and classes that can be imported elsewhere."
                },
                {
                    "title": "Package Structure",
                    "code": `# Package directory structure:
# mypackage/
#     __init__.py
#     module1.py
#     module2.py
#     subpackage/
#         __init__.py
#         module3.py

# __init__.py can be empty or contain package-level code
# Example import statements:
# import mypackage.module1
# from mypackage.subpackage import module3
# from mypackage.module2 import some_function"`,
                    "explanation": "Package structure for organizing larger projects with multiple modules."
                },
                {
                    "title": "Virtual Environments",
                    "code": `# Creating a virtual environment
# python -m venv venv

# Activating on Windows:
# venv\\Scripts\\activate

# Activating on Unix/macOS:
# source venv/bin/activate

# Installing packages:
# pip install requests numpy pandas

# Creating requirements.txt:
# pip freeze > requirements.txt

# Installing from requirements.txt:
# pip install -r requirements.txt"`,
                    "explanation": "Using virtual environments to manage project dependencies in isolation."
                }
            ]
        },
        {
            "id": "popular-libraries",
            "title": "Popular Libraries",
            "examples": [
                {
                    "title": "Requests (HTTP)",
                    "code": `import requests
from requests.exceptions import HTTPError

try:
    response = requests.get(
        'https://api.github.com/user',
        params={'since': 1000},
        headers={'Accept': 'application/vnd.github.v3+json'},
        auth=('user', 'pass'),
        timeout=3
    )
    response.raise_for_status()  # Raises HTTPError for bad responses
    data = response.json()
    print(data)
except HTTPError as http_err:
    print(f'HTTP error occurred: {http_err}')
except Exception as err:
    print(f'Other error occurred: {err}')`,
                    "explanation": "Making HTTP requests with the popular Requests library, including error handling."
                },
                {
                    "title": "NumPy (Numerical Computing)",
                    "code": `import numpy as np

# Creating arrays
a = np.array([1, 2, 3])          # 1D array
b = np.array([[1, 2], [3, 4]])   # 2D array

# Array operations
c = a * 2               # Broadcasting
d = np.dot(b, a)        # Matrix multiplication
e = np.sin(a)           # Universal functions

# Array attributes
print(a.shape)          # (3,)
print(b.dtype)          # int64

# Indexing and slicing
print(b[0, 1])          # 2
print(b[:, 1])          # Second column [2, 4]

# Random numbers
random_arr = np.random.rand(3, 2)`,
                    "explanation": "Basic NumPy array operations for numerical computing in Python."
                },
                {
                    "title": "Pandas (Data Analysis)",
                    "code": `import pandas as pd

# Creating DataFrames
data = {
    'Name': ['Alice', 'Bob', 'Charlie'],
    'Age': [25, 30, 35],
    'City': ['NY', 'LA', 'Chicago']
}
df = pd.DataFrame(data)

# Basic operations
print(df.head())          # First few rows
print(df.describe())      # Summary statistics
print(df['Age'].mean())   # Column mean

# Filtering
adults = df[df['Age'] >= 30]

# Grouping
city_groups = df.groupby('City').mean()

# Reading/writing data
df_csv = pd.read_csv('data.csv')
df.to_excel('output.xlsx', index=False)`,
                    "explanation": "Pandas DataFrame basics for data manipulation and analysis."
                },
                {
                    "title": "Matplotlib (Visualization)",
                    "code": `import matplotlib.pyplot as plt
import numpy as np

# Create data
x = np.linspace(0, 10, 100)
y = np.sin(x)

# Basic plot
plt.figure(figsize=(8, 4))
plt.plot(x, y, label='sin(x)', color='blue', linestyle='--')
plt.title('Sine Wave')
plt.xlabel('x')
plt.ylabel('sin(x)')
plt.legend()
plt.grid(True)
plt.show()

# Subplots
fig, (ax1, ax2) = plt.subplots(1, 2, figsize=(10, 4))
ax1.plot(x, y)
ax2.scatter(x, np.cos(x))`,
                    "explanation": "Basic data visualization with Matplotlib, the foundational Python plotting library."
                }
            ]
        },
        {
            "id": "advanced-features",
            "title": "Advanced Features",
            "examples": [
                {
                    "title": "Generators",
                    "code": `# Generator function
def fibonacci(limit):
    a, b = 0, 1
    while a < limit:
        yield a
        a, b = b, a + b

# Using generator
for num in fibonacci(100):
    print(num)

# Generator expression
squares = (x**2 for x in range(10))
print(sum(squares))  # Consumes the generator"`,
                    "explanation": "Generators produce values on-the-fly, saving memory compared to lists."
                },
                {
                    "title": "Context Managers",
                    "code": `# Using context managers
with open('file.txt', 'r') as f:
    content = f.read()

# Creating custom context manager
from contextlib import contextmanager

@contextmanager
def timer(name):
    start = time.time()
    try:
        yield
    finally:
        duration = time.time() - start
        print(f"{name} took {duration:.2f} seconds")

# Usage
with timer("Calculation"):
    result = sum(x**2 for x in range(1000000))"`,
                    "explanation": "Context managers handle resource setup and teardown automatically."
                },
                {
                    "title": "Decorators",
                    "code": `# Simple decorator
def log_calls(func):
    def wrapper(*args, **kwargs):
        print(f"Calling {func.__name__} with {args}, {kwargs}")
        result = func(*args, **kwargs)
        print(f"{func.__name__} returned {result}")
        return result
    return wrapper

@log_calls
def add(a, b):
    return a + b

# Decorator with arguments
def repeat(num_times):
    def decorator(func):
        def wrapper(*args, **kwargs):
            for _ in range(num_times):
                result = func(*args, **kwargs)
            return result
        return wrapper
    return decorator

@repeat(3)
def greet(name):
    print(f"Hello {name}")"`,
                    "explanation": "Decorators modify or enhance functions without changing their source code."
                },
                {
                    "title": "Async/Await",
                    "code": `import asyncio

async def fetch_data(url):
    print(f"Fetching {url}")
    await asyncio.sleep(2)  # Simulate I/O operation
    print(f"Received data from {url}")
    return f"Data from {url}"

async def main():
    # Run tasks concurrently
    task1 = asyncio.create_task(fetch_data("api.example.com/data1"))
    task2 = asyncio.create_task(fetch_data("api.example.com/data2"))
    
    # Gather results
    results = await asyncio.gather(task1, task2)
    print(results)

# Run the event loop
asyncio.run(main())"`,
                    "explanation": "Asynchronous programming with async/await syntax for concurrent I/O operations."
                }
            ]
        },
        {
            "id": "testing-debugging",
            "title": "Testing & Debugging",
            "examples": [
                {
                    "title": "Unit Testing",
                    "code": `import unittest
from mymodule import Calculator

class TestCalculator(unittest.TestCase):
    @classmethod
    def setUpClass(cls):
        cls.calc = Calculator()
    
    def test_add(self):
        self.assertEqual(self.calc.add(2, 3), 5)
        self.assertEqual(self.calc.add(-1, 1), 0)
    
    def test_add_type_error(self):
        with self.assertRaises(TypeError):
            self.calc.add("2", 3)

if __name__ == '__main__':
    unittest.main()"`,
                    "explanation": "Writing unit tests with Python's built-in unittest framework."
                },
                {
                    "title": "pytest",
                    "code": `# test_calculator.py (pytest style)
import pytest
from mymodule import Calculator

@pytest.fixture
def calculator():
    return Calculator()

def test_add(calculator):
    assert calculator.add(2, 3) == 5
    assert calculator.add(-1, 1) == 0

def test_add_type_error(calculator):
    with pytest.raises(TypeError):
        calculator.add("2", 3)

# Run with: pytest -v test_calculator.py"`,
                    "explanation": "More concise testing with pytest, including fixtures for test setup."
                },
                {
                    "title": "Debugging",
                    "code": `# Using pdb (Python Debugger)
import pdb

def buggy_function(x, y):
    result = x + y
    pdb.set_trace()  # Breakpoint
    return result * 2

# Common pdb commands:
# n(ext) - execute next line
# c(ontinue) - continue execution
# l(ist) - show code context
# p(rint) - print expression
# q(uit) - quit debugger

# Alternative: breakpoint() in Python 3.7+
def better_function(x, y):
    result = x + y
    breakpoint()  # Enters debugger
    return result * 2"`,
                    "explanation": "Debugging techniques using Python's built-in debugger."
                }
            ]
        },
        {
            "id": "best-practices",
            "title": "Best Practices",
            "examples": [
                {
                    "title": "PEP 8 Style Guide",
                    "code": `# Naming conventions
variable_name = "snake_case"
CONSTANT_NAME = "UPPER_SNAKE_CASE"
ClassName = "PascalCase"

# Indentation: 4 spaces per level
def function_with_args(
        long_argument_name1,
        long_argument_name2,
        long_argument_name3):
    pass

# Imports: grouped and ordered
import os
import sys
from typing import Dict, List

from third_party import library1, library2

# Maximum line length: 79 chars (72 for docstrings)
long_string = (
    "This is a very long string that exceeds the "
    "recommended line length, so it's split."
)`,
                    "explanation": "Following PEP 8 style guide for consistent, readable Python code."
                },
                {
                    "title": "Type Hints",
                    "code": `from typing import List, Dict, Tuple, Optional, Union, Any

def process_data(
    items: List[str],
    settings: Dict[str, Union[int, float]],
    verbose: bool = False
) -> Tuple[bool, Optional[str]]:
    """Process data with type hints for better documentation and IDE support."""
    if not items:
        return False, "Empty items list"
    
    if verbose:
        print(f"Processing {len(items)} items")
    
    return True, None

# Python 3.9+ simpler type hints
def new_style(items: list[str], config: dict[str, int | float]) -> bool:
    return len(items) == len(config)`,
                    "explanation": "Using type hints to improve code clarity and enable better tooling support."
                },
                {
                    "title": "Documentation",
                    "code": `def calculate_stats(data, method='mean'):
    """Calculate statistical measures from numerical data.
    
    Args:
        data: List or array of numerical values
        method: Statistical method to apply ('mean', 'median', or 'mode')
        
    Returns:
        Calculated statistical value as float
        
    Raises:
        ValueError: If method is not supported or data is empty
        TypeError: If data contains non-numerical values
        
    Examples:
        >>> calculate_stats([1, 2, 3, 4])
        2.5
        >>> calculate_stats([1, 2, 2, 3], 'mode')
        2
    """
    if not data:
        raise ValueError("Data cannot be empty")
    
    if method == 'mean':
        return sum(data) / len(data)
    elif method == 'median':
        sorted_data = sorted(data)
        n = len(sorted_data)
        # ... rest of implementation
    else:
        raise ValueError(f"Unsupported method: {method}")`,
                    "explanation": "Writing comprehensive docstrings following numpydoc or Google style for documentation."
                }
            ]
        },
        {
            "id": "project-structure",
            "title": "Project Structure",
            "examples": [
                {
                    "title": "Typical Project Layout",
                    "code": `# Recommended project structure for a Python package
"""
                    """my_project/
├── mypackage/             # Main package directory
│   ├── __init__.py        # Package initialization
│   ├── module1.py         # Module files
│   ├── module2.py
│   └── subpackage/
│       ├── __init__.py
│       └── module3.py
├── tests/                 # Test directory
│   ├── __init__.py
│   ├── test_module1.py
│   └── test_module2.py
├── docs/                  # Documentation
│   └── conf.py
├── scripts/               # Utility scripts
│   └── setup.py
├── requirements.txt       # Production dependencies
├── requirements-dev.txt   # Development dependencies
├── README.md              # Project documentation
└── pyproject.toml        # Build system config (PEP 518)"""`,
                    "explanation": "Standard project structure for maintainable and distributable Python packages."
                },
                {
                    "title": "setup.py Example",
                    "code": `from setuptools import setup, find_packages

setup(
    name="mypackage",
    version="0.1.0",
    author="Your Name",
    author_email="your.email@example.com",
    description="A short description of your package",
    long_description=open("README.md").read(),
    long_description_content_type="text/markdown",
    url="https://github.com/yourusername/mypackage",
    packages=find_packages(where="src"),
    package_dir={"": "src"},
    install_requires=[
        "requests>=2.25.0",
        "numpy>=1.20.0",
    ],
    extras_require={
        "dev": [
            "pytest>=6.0",
            "black>=21.0",
            "mypy>=0.900",
        ],
    },
    classifiers=[
        "Programming Language :: Python :: 3",
        "License :: OSI Approved :: MIT License",
        "Operating System :: OS Independent",
    ],
    python_requires=">=3.7",
)`,
                    "explanation": "Basic setup.py configuration for packaging and distributing Python projects."
                }
            ]
        },
        {
            "id": "performance",
            "title": "Performance Tips",
            "examples": [
                {
                    "title": "Profiling",
                    "code": `# Using cProfile
import cProfile

def slow_function():
    total = 0
    for i in range(100000):
        total += i**2
    return total

profiler = cProfile.Profile()
profiler.enable()
slow_function()
profiler.disable()
profiler.print_stats(sort='time')

# Using timeit
import timeit
time = timeit.timeit('"-".join(str(n) for n in range(100))', number=10000)
print(f"Time taken: {time:.4f} seconds")

# Using memory_profiler
# @profile  # Decorator from memory_profiler
# def memory_intensive_function():
#     data = [0] * 1000000
#     return sum(data)`,
                    "explanation": "Tools for profiling code to identify performance bottlenecks."
                },
                {
                    "title": "Optimization Techniques",
                    "code": `# Use built-in functions and libraries
# Slow:
result = []
for item in some_list:
    result.append(item * 2)

# Fast:
result = list(map(lambda x: x * 2, some_list))
# Or better:
result = [x * 2 for x in some_list]

# Use local variables
def fast_function():
    local_len = len  # Local lookup is faster
    for i in range(1000000):
        local_len(str(i))

# Use generators for large datasets
def process_large_file(filename):
    with open(filename) as f:
        for line in f:
            yield process_line(line)

# Use appropriate data structures
from collections import defaultdict, deque, Counter

# String concatenation
# Slow:
s = ""
for substring in list_of_strings:
    s += substring

# Fast:
s = "".join(list_of_strings)`,
                    "explanation": "Common Python optimization techniques for writing more efficient code."
                }
            ]
        },
        {
            "id": "project-ideas",
            "title": "Project Ideas",
            "examples": [
                {
                    "title": "Web Scraper",
                    "code": `import requests
from bs4 import BeautifulSoup
import csv
from urllib.parse import urljoin

def scrape_website(base_url, output_file):
    visited = set()
    to_visit = {base_url}
    results = []
    
    while to_visit:
        url = to_visit.pop()
        try:
            response = requests.get(url, timeout=5)
            soup = BeautifulSoup(response.text, 'html.parser')
            
            # Extract data
            title = soup.title.string if soup.title else "No title"
            paragraphs = [p.get_text() for p in soup.find_all('p')]
            
            results.append({
                'url': url,
                'title': title,
                'paragraph_count': len(paragraphs)
            })
            
            # Find links
            for link in soup.find_all('a', href=True):
                absolute_url = urljoin(base_url, link['href'])
                if absolute_url.startswith(base_url) and absolute_url not in visited:
                    to_visit.add(absolute_url)
            
            visited.add(url)
            
        except Exception as e:
            print(f"Error scraping {url}: {e}")
    
    # Save results
    with open(output_file, 'w', newline='', encoding='utf-8') as f:
        writer = csv.DictWriter(f, fieldnames=['url', 'title', 'paragraph_count'])
        writer.writeheader()
        writer.writerows(results)

# Usage
scrape_website('https://example.com', 'scraped_data.csv')`,
                    "explanation": "A basic web scraper using Requests and BeautifulSoup to extract and store website data."
                },
                {
                    "title": "REST API with Flask",
                    "code": `from flask import Flask, request, jsonify
from flask_sqlalchemy import SQLAlchemy
from flask_marshmallow import Marshmallow
import os

app = Flask(__name__)
basedir = os.path.abspath(os.path.dirname(__file__))
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///' + os.path.join(basedir, 'db.sqlite')
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

db = SQLAlchemy(app)
ma = Marshmallow(app)

# Model
class Product(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), unique=True)
    price = db.Column(db.Float)

# Schema
class ProductSchema(ma.SQLAlchemyAutoSchema):
    class Meta:
        model = Product

# Routes
@app.route('/product', methods=['POST'])
def add_product():
    name = request.json['name']
    price = request.json['price']
    
    new_product = Product(name=name, price=price)
    db.session.add(new_product)
    db.session.commit()
    
    product_schema = ProductSchema()
    return product_schema.jsonify(new_product)

@app.route('/product', methods=['GET'])
def get_products():
    all_products = Product.query.all()
    product_schema = ProductSchema(many=True)
    return jsonify(product_schema.dump(all_products))

if __name__ == '__main__':
    with app.app_context():
        db.create_all()
    app.run(debug=True)`,
                    "explanation": "A simple REST API using Flask with SQLAlchemy for database operations and Marshmallow for serialization."
                },
                {
                    "title": "Data Analysis Pipeline",
                    "code": `import pandas as pd
import numpy as np
import matplotlib.pyplot as plt
from sklearn.model_selection import train_test_split
from sklearn.ensemble import RandomForestClassifier
from sklearn.metrics import classification_report

def data_analysis_pipeline(data_file):
    # Load and clean data
    df = pd.read_csv(data_file)
    df = df.dropna()
    df = df[df['age'] > 0]  # Remove invalid ages
    
    # Feature engineering
    df['age_group'] = pd.cut(df['age'], 
                            bins=[0, 18, 35, 60, 100],
                            labels=['child', 'young', 'adult', 'senior'])
    
    # Visualization
    df['target'].value_counts().plot(kind='bar')
    plt.title('Class Distribution')
    plt.savefig('class_distribution.png')
    
    # Prepare for modeling
    X = df.drop('target', axis=1)
    y = df['target']
    X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2)
    
    # Train model
    model = RandomForestClassifier()
    model.fit(X_train, y_train)
    
    # Evaluate
    predictions = model.predict(X_test)
    report = classification_report(y_test, predictions, output_dict=True)
    report_df = pd.DataFrame(report).transpose()
    report_df.to_csv('classification_report.csv')
    
    return model, report_df

# Usage
trained_model, metrics = data_analysis_pipeline('health_data.csv')`,
                    "explanation": "A complete data analysis pipeline from data loading to machine learning modeling."
                }
            ]
        }
    ]
}