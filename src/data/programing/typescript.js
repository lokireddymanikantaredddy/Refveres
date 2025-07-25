import {SiTypescript} from 'react-icons/si';

export const tsContent = {
    icon: SiTypescript,
    title: "TypeScript Programming",
    color: '#3178C6',
    description: "A comprehensive TypeScript reference with examples and explanations based on best practices.",
    sections: [
      {
        id: 'intro-to-ts',
        title: 'Intro to TypeScript',
        examples: [
          {
            title: 'Hello World',
            code: "let message = 'Hello, World!';\nconsole.log(message);",
            explanation: 'Basic TypeScript program with type inference. TypeScript automatically infers the string type.'
          },
          {
            title: 'Type Annotations',
            code: "let age: number = 25;\nlet name: string = 'John';\nlet isActive: boolean = true;\nlet numbers: number[] = [1, 2, 3];\nlet tuple: [string, number] = ['age', 25];",
            explanation: 'TypeScript allows explicit type annotations for variables, arrays, and tuples.'
          }
        ]
      },
      {
        id: 'interfaces-types',
        title: 'Interfaces and Types',
        examples: [
          {
            title: 'Interfaces',
            code: "interface User {\n  name: string;\n  age: number;\n  email?: string;  // Optional property\n  readonly id: number;  // Read-only property\n}\n\nconst user: User = {\n  name: 'John',\n  age: 30,\n  id: 1\n};",
            explanation: 'Interfaces define object shapes with optional and read-only properties.'
          },
          {
            title: 'Type Aliases',
            code: "type Point = {\n  x: number;\n  y: number;\n};\n\ntype ID = string | number;  // Union type\ntype Status = 'active' | 'inactive';  // Literal type\n\nconst point: Point = { x: 10, y: 20 };\nconst userId: ID = '123';",
            explanation: 'Type aliases create custom types and can use unions and literals.'
          }
        ]
      },
      {
        id: 'functions',
        title: 'Functions',
        examples: [
          {
            title: 'Function Types',
            code: "function add(x: number, y: number): number {\n  return x + y;\n}\n\nconst multiply = (x: number, y: number): number => x * y;\n\n// Function type\nlet operation: (x: number, y: number) => number;\noperation = add;",
            explanation: 'Functions can have parameter and return type annotations.'
          },
          {
            title: 'Function Overloads',
            code: "function process(x: number): number;\nfunction process(x: string): string;\nfunction process(x: number | string): number | string {\n  return typeof x === 'number' ? x * 2 : x.toUpperCase();\n}",
            explanation: 'Function overloads allow different parameter and return types.'
          }
        ]
      },
      {
        id: 'generics',
        title: 'Generics',
        examples: [
          {
            title: 'Generic Functions',
            code: "function identity<T>(arg: T): T {\n  return arg;\n}\n\nconst num = identity<number>(42);\nconst str = identity('hello');  // Type inference",
            explanation: 'Generics provide type-safe reusable components.'
          },
          {
            title: 'Generic Interfaces',
            code: "interface Container<T> {\n  value: T;\n  getValue(): T;\n}\n\nclass NumberContainer implements Container<number> {\n  constructor(public value: number) {}\n  getValue(): number { return this.value; }\n}",
            explanation: 'Generic interfaces and classes provide type-safe implementations.'
          }
        ]
      },
      {
        id: 'advanced-types',
        title: 'Advanced Types',
        examples: [
          {
            title: 'Utility Types',
            code: "interface User {\n  name: string;\n  age: number;\n  email: string;\n}\n\ntype PartialUser = Partial<User>;  // All properties optional\ntype ReadonlyUser = Readonly<User>;  // All properties readonly\ntype UserKeys = keyof User;  // Union of property names",
            explanation: 'TypeScript provides utility types for common type transformations.'
          },
          {
            title: 'Mapped Types',
            code: `type Nullable<T> = { [P in keyof T]: T[P] | null };
type Getters<T> = {
  [P in keyof T as \`get\${Capitalize<string & P>}\`]: () => T[P]
};

interface Person {
  name: string;
  age: number;
}

type NullablePerson = Nullable<Person>;`,
            explanation: 'Mapped types transform properties of existing types.'
          }
        ]
      },
      {
        id: 'error-handling',
        title: 'Error Handling',
        examples: [
          {
            title: 'Custom Error Types',
            code: "class ValidationError extends Error {\n  constructor(message: string) {\n    super(message);\n    this.name = 'ValidationError';\n  }\n}\n\nfunction validateAge(age: number): void {\n  if (age < 0) {\n    throw new ValidationError('Age cannot be negative');\n  }\n}",
            explanation: 'Custom error types help with type-safe error handling.'
          },
          {
            title: 'Error Handling with Type Guards',
            code: "function isError(error: unknown): error is Error {\n  return error instanceof Error;\n}\n\nasync function fetchData() {\n  try {\n    const response = await fetch('/api/data');\n    if (!response.ok) throw new Error('Network error');\n    return await response.json();\n  } catch (error) {\n    if (isError(error)) {\n      console.error(error.message);\n    }\n    throw error;\n  }\n}",
            explanation: 'Type guards help safely handle different error types.'
          }
        ]
      },
      {
        id: 'async',
        title: 'Async Programming',
        examples: [
          {
            title: 'Async/Await',
           code: `async function fetchUser(id: number): Promise<User> {
  const response = await fetch(\`/api/users/\${id}\`);
  if (!response.ok) {
    throw new Error('User not found');
  }
  return response.json();
}

async function main() {
  try {
    const user = await fetchUser(1);
    console.log(user);
  } catch (error) {
    console.error('Error:', error);
  }
}`,
            explanation: 'Async/await provides clean syntax for handling promises.'
          },
          {
            title: 'Promise Types',
            code: "type ApiResponse<T> = Promise<{\n  data: T;\n  status: number;\n  message: string;\n}>;\n\nasync function fetchData<T>(url: string): ApiResponse<T> {\n  const response = await fetch(url);\n  return {\n    data: await response.json(),\n    status: response.status,\n    message: response.statusText\n  };\n}",
            explanation: 'TypeScript allows typing promises and their resolved values.'
          }
        ]
      },
      {
        id: 'modules',
        title: 'Modules and Namespaces',
        examples: [
          {
            title: 'Module Exports',
            code: "// types.ts\nexport interface Config {\n  apiKey: string;\n  endpoint: string;\n}\n\nexport type ApiResponse<T> = {\n  data: T;\n  status: number;\n};\n\n// api.ts\nimport { Config, ApiResponse } from './types';\n\nexport async function fetchData<T>(config: Config): Promise<ApiResponse<T>> {\n  // Implementation\n}",
            explanation: 'TypeScript modules help organize and share types across files.'
          },
          {
            title: 'Namespace Usage',
            code: "namespace Utils {\n  export function formatDate(date: Date): string {\n    return date.toISOString();\n  }\n\n  export function validateEmail(email: string): boolean {\n    return /^[^@]+@[^@]+\\.[^@]+$/.test(email);\n  }\n}\n\n// Usage\nconst date = Utils.formatDate(new Date());\nconst isValid = Utils.validateEmail('user@example.com');",
            explanation: 'Namespaces help organize related code and prevent naming conflicts.'
          }
        ]
      },
      {
        id: 'enums',
        title: 'Enums',
        examples: [
          {
            title: 'Numeric Enums',
            code: "enum Direction {\n  Up = 1,\n  Down,\n  Left,\n  Right\n}\n\nlet move: Direction = Direction.Up;",
            explanation: 'Numeric enums auto-increment and improve code readability and type safety.'
          },
          {
            title: 'String Enums',
            code: "enum Status {\n  Active = 'ACTIVE',\n  Inactive = 'INACTIVE',\n  Paused = 'PAUSED'\n}\n\nlet userStatus: Status = Status.Active;",
            explanation: 'String enums provide readable values for debugging and APIs.'
          }
        ]
      },
      {
        id: 'type-narrowing',
        title: 'Type Narrowing',
        examples: [
          {
            title: 'Using typeof',
            code: "function printId(id: string | number) {\n  if (typeof id === 'string') {\n    console.log('ID:', id.toUpperCase());\n  } else {\n    console.log('ID:', id.toFixed(2));\n  }\n}",
            explanation: '`typeof` helps narrow the union type to make operations safe.'
          },
          {
            title: 'Using in Operator',
            code: "interface Admin { role: 'admin'; privileges: string[]; }\ninterface Employee { role: 'employee'; department: string; }\ntype User = Admin | Employee;\n\nfunction getInfo(user: User) {\n  if ('privileges' in user) {\n    console.log('Admin:', user.privileges);\n  } else {\n    console.log('Department:', user.department);\n  }\n}",
            explanation: '`in` operator checks property presence to narrow union types.'
          }
        ]
      },
      {
        id: 'type-guards',
        title: 'Custom Type Guards',
        examples: [
          {
            title: 'User-defined Guard Function',
            code: "interface Cat { meow: () => void; }\ninterface Dog { bark: () => void; }\ntype Pet = Cat | Dog;\n\nfunction isCat(pet: Pet): pet is Cat {\n  return (pet as Cat).meow !== undefined;\n}\n\nfunction speak(pet: Pet) {\n  if (isCat(pet)) pet.meow();\n  else pet.bark();\n}",
            explanation: 'Custom type guards refine types within conditionals.'
          }
        ]
      },
      {
        id: 'type-assertion',
        title: 'Type Assertion',
        examples: [
          {
            title: 'Using "as" keyword',
            code: "let someValue: unknown = 'hello world';\nlet strLength: number = (someValue as string).length;",
            explanation: 'Type assertions tell the compiler to treat a value as a specific type.'
          }
        ]
      },
      {
        id: 'decorators',
        title: 'Decorators',
        examples: [
          {
            title: 'Class Decorator Example',
            code: `function Logger(constructor: Function) {
  console.log(\`Class \${constructor.name} loaded.\`);
}

@Logger
class MyService {}`,
            explanation: 'Class decorators add metadata or logic to classes. Requires `"experimentalDecorators": true` in tsconfig.'
          }
        ]
      },
      {
        id: 'advanced-utility-types',
        title: 'Advanced Utility Types',
        examples: [
          {
            title: 'Record, Omit, Pick',
            code: "type Roles = 'admin' | 'user';\ntype Permissions = Record<Roles, boolean>;\n\ninterface User {\n  id: number;\n  name: string;\n  email: string;\n}\n\nconst user: Omit<User, 'email'> = { id: 1, name: 'Alex' };\nconst userPreview: Pick<User, 'name' | 'email'> = { name: 'Sam', email: 'sam@example.com' };",
            explanation: '`Record`, `Omit`, and `Pick` are utility types for transforming interfaces.'
          }
        ]
      },
      {
        id: 'type-compatibility',
        title: 'Type Compatibility & Structural Typing',
        examples: [
          {
            title: 'Structural Typing',
            code: "interface Point2D { x: number; y: number; }\ninterface Point3D { x: number; y: number; z: number; }\n\nconst point3D: Point3D = { x: 1, y: 2, z: 3 };\nconst point2D: Point2D = point3D;  // Allowed due to structural typing",
            explanation: 'TypeScript uses structural typing: compatible types are assignable if they have required structure.'
          }
        ]
      }
    ]
};
