import { SiRuby } from 'react-icons/si';

export const rubyContent = {
  icon: SiRuby,
  title: 'Ruby',
  color: '#CC342D',
  description: 'A beginner-friendly guide to Ruby, a dynamic, open-source programming language with a focus on simplicity and developer productivity. Learn the elegant syntax and discover the power of its premier web framework, Ruby on Rails.',
  sections: [
    {
      id: 'getting-started',
      title: '1. Getting Started',
      examples: [
        {
          title: 'What is Ruby?',
          code: `# Ruby is a language designed for "developer happiness".
# It prioritizes clear, readable syntax.
# Everything in Ruby is an object, even numbers and booleans.

# Core Philosophy:
# - Convention over Configuration
# - Don't Repeat Yourself (DRY)
# - Expressive and elegant code

puts "Hello, Ruby!" # 'puts' is like 'echo' or 'print'.`,
          explanation: 'Ruby was created by Yukihiro "Matz" Matsumoto in the mid-1990s. Its primary goal is to make programming enjoyable and productive by providing a clean and intuitive syntax.'
        },
        {
          title: 'Installation (Version Managers)',
          code: `# It's best practice to use a version manager to install Ruby.
# This lets you have multiple Ruby versions on one machine.
# Popular options: rbenv, RVM, asdf

# Example using rbenv:
# 1. Install rbenv (via Homebrew on macOS or git on Linux)
#    brew install rbenv

# 2. Install a specific Ruby version
#    rbenv install 3.2.2

# 3. Set the global Ruby version
#    rbenv global 3.2.2`,
          explanation: 'A version manager like `rbenv` or `RVM` is crucial for managing different projects that may require different versions of Ruby, preventing conflicts.'
        }
      ]
    },
    {
      id: 'ruby-syntax-basics',
      title: '2. Syntax Basics',
      examples: [
        {
          title: 'Variables and Constants',
          code: `# Variables use snake_case by convention.
first_name = "Alice"
user_age = 30

# Constants start with an uppercase letter.
# By convention, they are written in all caps.
MAX_LOGIN_ATTEMPTS = 5
PI = 3.14

puts first_name # Outputs: Alice
puts MAX_LOGIN_ATTEMPTS # Outputs: 5`,
          explanation: 'Variables in Ruby are dynamically typed, meaning you don\'t need to declare their type. The naming convention (snake_case for variables, SCREAMING_SNAKE_CASE for constants) is a strong community standard.'
        },
        {
          title: 'Strings and Interpolation',
          code: `# Double quotes allow for string interpolation.
name = "Bob"
puts "Hello, #{name}!" # Outputs: Hello, Bob!

# Single quotes do not interpolate. They are literal.
puts 'Hello, #{name}!' # Outputs: Hello, #{name}!

# String concatenation uses the + operator.
greeting = "Hello"
puts greeting + " " + name # Outputs: Hello Bob`,
          explanation: 'String interpolation with `#{}` inside double-quoted strings is the most common and convenient way to build strings from variables.'
        },
        {
            title: 'Symbols',
            code: `# Symbols are like lightweight, immutable strings.
# They are often used as keys in Hashes for performance.
# A symbol is guaranteed to be a single object in memory.

a_symbol = :user_status
another_symbol = :user_status

# Both variables point to the exact same object in memory.
puts a_symbol.object_id  # e.g., 1035628
puts another_symbol.object_id # e.g., 1035628

# Compare with strings:
"user_status".object_id # e.g., 7015...140
"user_status".object_id # e.g., 7015...120 (a different object)`,
            explanation: 'Symbols are prefixed with a colon `:`. They are highly memory efficient and are the preferred choice for keys in hashes or for representing fixed states.'
        }
      ]
    },
    {
      id: 'collections',
      title: '3. Collections: Arrays and Hashes',
      examples: [
        {
          title: 'Arrays',
          code: `# An array is an ordered list of items.
numbers = [1, 2, 3, 4, 5]
fruits = ["apple", "banana", "cherry"]

# Accessing elements (index starts at 0)
puts fruits[0] # Outputs: apple
puts fruits.last # Outputs: cherry

# Adding to an array
fruits << "date" # The 'shovel' operator is a common idiom
fruits.push("elderberry")

# Iterating over an array
fruits.each do |fruit|
  puts "I love #{fruit}!"
end`,
          explanation: 'Arrays are a fundamental data structure for storing lists of objects. Ruby provides a rich set of methods for interacting with them, with `.each` being the primary way to iterate.'
        },
        {
          title: 'Hashes (Key-Value Pairs)',
          code: `# A hash is a dictionary-like collection of key-value pairs.
# Modern syntax (Ruby 1.9+) uses symbols as keys.
user = { name: "Alice", email: "alice@example.com", age: 30 }

# Accessing values by key
puts user[:name] # Outputs: Alice

# Adding a new key-value pair
user[:city] = "New York"

# Iterating over a hash
user.each do |key, value|
  puts "#{key.capitalize}: #{value}"
end`,
          explanation: 'Hashes are the primary way to store associated data. Using symbols for keys is a strong convention due to performance benefits and readability.'
        }
      ]
    },
    {
      id: 'control-structures',
      title: '4. Control Structures',
      examples: [
        {
          title: 'Conditionals: if, unless',
          code: `temperature = 25

if temperature > 20
  puts "It's a warm day."
elsif temperature > 10
  puts "It's a pleasant day."
else
  puts "It's cold!"
end

# 'unless' is the opposite of 'if'
is_raining = false
puts "Don't forget your umbrella!" unless is_raining == false

# Postfix conditional (modifier) for single lines
puts "The heater is on." if temperature < 15`,
          explanation: 'Ruby\'s control flow is very readable. `unless` provides a more natural way to express a negative condition. The postfix syntax is a common idiom for simple, one-line conditions.'
        },
        {
          title: 'Case Statement',
          code: `http_status = 200

message = case http_status
when 200, 201
  "Success"
when 404
  "Not Found"
when 500..599 # Ranges can be used
  "Server Error"
else
  "Unknown Status"
end

puts message # Outputs: Success`,
          explanation: 'The `case` statement is a powerful way to handle multiple conditions, acting as a more readable substitute for a long series of `if/elsif` statements.'
        }
      ]
    },
    {
      id: 'methods-blocks',
      title: '5. Methods and Blocks',
      examples: [
        {
          title: 'Defining Methods',
          code: `# Methods are defined with 'def' and 'end'.
def greet(name = "guest")
  "Hello, #{name}!"
end

# The last evaluated expression is automatically returned (implicit return).
puts greet("Charlie") # Outputs: Hello, Charlie!
puts greet # Outputs: Hello, guest!

# Keyword arguments (Ruby 2.0+)
def create_user(name:, email:)
  puts "Creating user #{name} with email #{email}"
end

create_user(name: "David", email: "david@example.com")`,
          explanation: 'A key feature of Ruby is implicit return; you rarely need to use the `return` keyword. This contributes to cleaner, less verbose code.'
        },
        {
          title: 'Blocks and Iterators',
          code: `# A block is a chunk of code that can be passed to a method.
# It's one of Ruby's most powerful features.

# Using a block with .each
[1, 2, 3].each do |number|
  puts "The number is #{number}"
end

# The .map method uses a block to transform an array.
# The curly brace syntax is for single-line blocks.
numbers = [1, 2, 3]
squared_numbers = numbers.map { |n| n * n }
puts squared_numbers.inspect # Outputs: [1, 4, 9]`,
          explanation: 'Blocks are unnamed chunks of code that are central to Ruby\'s idiomatic style, especially for iteration. `do...end` is used for multi-line blocks, and `{...}` for single lines.'
        },
        {
          title: 'Yielding to a Block',
          code: `def my_wrapper
  puts "--- About to run your code ---"
  yield # This is where the block's code is executed
  puts "--- Finished running your code ---"
end

my_wrapper do
  puts "This is the code inside the block."
end`,
          explanation: 'The `yield` keyword within a method pauses the method and executes the code from the block that was passed to it, enabling powerful abstractions and patterns like wrappers or setup/teardown logic.'
        }
      ]
    },
    {
      id: 'oop-in-ruby',
      title: '6. Object-Oriented Programming',
      examples: [
        {
          title: 'Classes and `initialize`',
          code: `class Car
  # The initialize method is the constructor.
  def initialize(make, model)
    # @instance_variables belong to a specific object instance.
    @make = make
    @model = model
  end
  
  def info
    "A #{@make} #{@model}"
  end
end

my_car = Car.new("Toyota", "Camry")
puts my_car.info # Outputs: A Toyota Camry`,
          explanation: 'A class is a blueprint. The `initialize` method is called when `Car.new` is executed. Instance variables (prefixed with `@`) store the state of each object.'
        },
        {
          title: 'Attribute Accessors',
          code: `class User
  # This one line creates getter and setter methods for @name and @email.
  attr_accessor :name, :email

  def initialize(name, email)
    @name = name
    @email = email
  end
end

user = User.new("Eve", "eve@example.com")
user.name = "Eva" # Using the setter
puts user.name # Using the getter. Outputs: Eva`,
          explanation: '`attr_accessor` is a shortcut that automatically generates methods for reading (`attr_reader`) and writing (`attr_writer`) instance variables. This avoids boilerplate code and is a classic example of Ruby\'s focus on productivity.'
        },
        {
          title: 'Inheritance and Modules (Mixins)',
          code: `# A Module contains a collection of methods.
module Flyable
  def fly
    "I'm flying!"
  end
end

class Animal
  def breathe
    "Inhale, exhale"
  end
end

# Bird inherits from Animal
class Bird < Animal
  include Flyable # Mixes in the Flyable methods
end

bird = Bird.new
puts bird.breathe # From Animal class
puts bird.fly     # From Flyable module`,
          explanation: 'Ruby has single inheritance (`<`) but achieves code reuse through Modules. When a module is `include`d, its methods are "mixed in" to the class, a powerful pattern for sharing behavior across different classes.'
        }
      ]
    },
    {
      id: 'dependency-management',
      title: '7. Dependency Management: Gems',
      examples: [
        {
          title: 'Gemfile and Bundler',
          code: `# A Gem is a packaged Ruby library. Bundler manages these gems for a project.
# This is a sample 'Gemfile'.

# Specifies where to download gems from
source 'https://rubygems.org'

# Specify the ruby version for this project
ruby '3.2.2'

# List the gems your project needs
gem 'httparty', '~> 0.21' # For making HTTP requests
gem 'rspec', group: :test # RSpec is a testing framework, only for development/test`,
          explanation: 'The `Gemfile` is the central place where you declare your project\'s dependencies (gems). `Bundler` reads this file to install the correct versions.'
        },
        {
          title: 'Installing Gems',
          code: `# To install all the gems listed in your Gemfile:
# Run this command in your terminal in the project directory.
$ bundle install

# To use a gem in your code:
require 'httparty'

response = HTTParty.get('http://api.open-notify.org/iss-now.json')
puts response['iss_position']`,
          explanation: 'Running `bundle install` creates a `Gemfile.lock` file, which locks the exact versions of all gems, ensuring that the application works consistently across different machines.'
        }
      ]
    },
    {
      id: 'web-dev-with-rails',
      title: '8. Intro to Web Dev: Ruby on Rails',
      examples: [
        {
          title: 'What is Ruby on Rails?',
          code: `# Rails is the most popular web framework for Ruby.
# It follows the MVC (Model-View-Controller) architecture.
# - Model: Interacts with the database (e.g., a User model).
# - View: The template that becomes the HTML page (e.g., a user profile).
# - Controller: The traffic cop that handles requests and talks to the model and view.

# To install Rails:
$ gem install rails

# To create a new Rails app:
$ rails new my_awesome_app`,
          explanation: 'Rails provides a full-stack framework with strong conventions for building web applications quickly. Its philosophy of "Convention over Configuration" means you write less boilerplate code.'
        },
        {
          title: 'Rails: Routing, Controller, View',
          code: `# 1. Routing (config/routes.rb)
# This maps a URL to a controller action.
Rails.application.routes.draw do
  get '/hello', to: 'welcome#index'
end

# 2. Controller (app/controllers/welcome_controller.rb)
# The controller handles the request.
class WelcomeController < ApplicationController
  def index
    # Instance variables set in a controller are available in the view.
    @greeting = "Hello from Rails!"
  end
end

# 3. View (app/views/welcome/index.html.erb)
# The view is the template. ERB lets you embed Ruby.
<h1>A Greeting for You</h1>
<p><%= @greeting %></p>
`,
          explanation: 'This shows the basic flow of a request in Rails. The router matches the URL, calls the `index` action in the `WelcomeController`, which sets an `@greeting` variable that is then displayed in the `index.html.erb` view file.'
        }
      ]
    },
    {
        id: 'database-in-rails',
        title: '9. Database Interaction with ActiveRecord',
        examples: [
            {
                title: 'What is ActiveRecord?',
                code: `# ActiveRecord is the Model in Rails' MVC.
# It's an ORM (Object-Relational Mapper).
# It maps database tables to Ruby classes and table rows to Ruby objects.

# To create a User model and a corresponding database migration:
$ rails generate model User name:string email:string

# This creates a User class (app/models/user.rb)
class User < ApplicationRecord
end

# And a migration file to create the 'users' table.
# Run 'rails db:migrate' to apply it to the database.`,
                explanation: 'ActiveRecord is one of the most powerful features of Rails. It allows you to interact with your database using intuitive Ruby objects and methods, instead of writing raw SQL.'
            },
            {
                title: 'CRUD Operations with ActiveRecord',
                code: `# ActiveRecord provides simple methods for database operations.
# C - Create
user = User.create(name: "Finn", email: "finn@example.com")

# R - Read
found_user = User.find_by(name: "Finn")
all_users = User.all

# U - Update
user.update(email: "finn.the.human@example.com")

# D - Delete
user.destroy`,
                explanation: 'With ActiveRecord, performing Create, Read, Update, and Delete (CRUD) operations is simple and readable, abstracting away the underlying SQL.'
            }
        ]
    }
  ]
};