import { FaReact } from 'react-icons/fa';

export const reactContent = {
  icon: FaReact,
  title: 'React',
  color: '#61DAFB',
  description: 'A comprehensive React.js reference covering components, JSX, state management, hooks, context API, routing, forms, performance optimization, testing, and advanced patterns.',
  sections: [
    // 1. React Fundamentals
    {
      id: 'fundamentals',
      title: 'React Fundamentals',
      examples: [
        {
          title: 'Components & JSX',
          code: `// Functional Component
function Greeting({ name }) {
  return <h1>Hello, {name}!</h1>;
}

// Class Component
class Welcome extends React.Component {
  render() {
    return <h1>Welcome, {this.props.name}!</h1>;
  }
}

// JSX Syntax
const element = (
  <div className="app">
    <Greeting name="Alice" />
    <Welcome name="Bob" />
  </div>
);`,
          explanation: 'React components can be functions or classes. JSX is a syntax extension that looks like HTML but compiles to JavaScript function calls. Components accept props (properties) as input.'
        },
        {
          title: 'Rendering Elements',
          code: `// HTML file
<div id="root"></div>

// React DOM render
import React from 'react';
import ReactDOM from 'react-dom';

function App() {
  return <h1>Hello React!</h1>;
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);`,
          explanation: 'React applications are rendered into a DOM node (usually "root"). React DOM efficiently updates only what changes in the DOM.'
        },
        {
          title: 'Props & Children',
          code: `// Parent Component
function Card({ title, children }) {
  return (
    <div className="card">
      <h2>{title}</h2>
      <div className="card-content">
        {children}
      </div>
    </div>
  );
}

// Usage
function App() {
  return (
    <Card title="User Profile">
      <p>Name: Alice</p>
      <p>Age: 30</p>
    </Card>
  );
}`,
          explanation: 'Props are read-only inputs to components. The special children prop contains content between opening and closing tags of a component.'
        }
      ]
    },
    // 2. State & Lifecycle
    {
      id: 'state-lifecycle',
      title: 'State & Lifecycle',
      examples: [
        {
          title: 'Class Component State',
          code: `class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }

  increment = () => {
    this.setState({ count: this.state.count + 1 });
  };

  componentDidMount() {
    console.log('Component mounted');
  }

  componentDidUpdate() {
    console.log('Count updated:', this.state.count);
  }

  render() {
    return (
      <div>
        <p>Count: {this.state.count}</p>
        <button onClick={this.increment}>Increment</button>
      </div>
    );
  }
}`,
          explanation: 'Class components have local state initialized in constructor. setState() schedules updates. Lifecycle methods like componentDidMount and componentDidUpdate run at specific times.'
        },
        {
          title: 'Functional Component State (Hooks)',
          code: `import { useState, useEffect } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log('Count changed:', count);
    
    return () => {
      console.log('Cleanup on unmount');
    };
  }, [count]);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>
    </div>
  );
}`,
          explanation: 'useState hook adds state to functional components. useEffect handles side effects and replaces lifecycle methods. The dependency array controls when effects run.'
        }
      ]
    },
    // 3. Handling Events
    {
      id: 'events',
      title: 'Handling Events',
      examples: [
        {
          title: 'Event Handling Basics',
          code: `function ButtonClick() {
  function handleClick(e) {
    e.preventDefault();
    console.log('Button clicked');
  }

  return (
    <button onClick={handleClick}>
      Click Me
    </button>
  );
}

// Inline arrow function
function Toggle() {
  const [isOn, setIsOn] = useState(false);

  return (
    <button onClick={() => setIsOn(!isOn)}>
      {isOn ? 'ON' : 'OFF'}
    </button>
  );
}`,
          explanation: 'React events are camelCase (onClick vs onclick). Event handlers receive synthetic events that wrap native events. You can use inline functions or defined handlers.'
        },
        {
          title: 'Event Propagation',
          code: `function EventDemo() {
  const handleParentClick = () => {
    console.log('Parent clicked');
  };

  const handleChildClick = (e) => {
    e.stopPropagation();
    console.log('Child clicked');
  };

  return (
    <div onClick={handleParentClick}>
      <button onClick={handleChildClick}>
        Click Me
      </button>
    </div>
  );
}`,
          explanation: 'Events bubble up by default. Use e.stopPropagation() to prevent bubbling. e.preventDefault() prevents default browser behavior.'
        }
      ]
    },
    // 4. Conditional Rendering
    {
      id: 'conditional-rendering',
      title: 'Conditional Rendering',
      examples: [
        {
          title: 'Conditional Techniques',
          code: `function UserGreeting({ isLoggedIn, user }) {
  // If-else
  if (!isLoggedIn) {
    return <GuestGreeting />;
  }

  // Ternary operator
  return (
    <div>
      {user ? (
        <h1>Welcome back, {user.name}!</h1>
      ) : (
        <h1>Loading user...</h1>
      )}
    </div>
  );

  // Logical && operator
  function Mailbox({ unreadMessages }) {
    return (
      <div>
        <h1>Hello!</h1>
        {unreadMessages.length > 0 && (
          <h2>You have {unreadMessages.length} unread messages.</h2>
        )}
      </div>
    );
  }
}`,
          explanation: 'React offers multiple ways to conditionally render elements: if-else statements, ternary operators, and logical && operators. Components can return null to render nothing.'
        }
      ]
    },
    // 5. Lists & Keys
    {
      id: 'lists-keys',
      title: 'Lists & Keys',
      examples: [
        {
          title: 'Rendering Lists',
          code: `function NumberList({ numbers }) {
  return (
    <ul>
      {numbers.map((number) => (
        <li key={number.id}>
          {number.value}
        </li>
      ))}
    </ul>
  );
}

// Usage
const numbers = [
  { id: 1, value: 1 },
  { id: 2, value: 2 },
  { id: 3, value: 3 }
];

function App() {
  return <NumberList numbers={numbers} />;
}`,
          explanation: 'Use map() to transform arrays into lists of elements. Keys help React identify which items have changed and should be stable, unique identifiers.'
        }
      ]
    },
    // 6. Forms
    {
      id: 'forms',
      title: 'Forms',
      examples: [
        {
          title: 'Controlled Components',
          code: `function NameForm() {
  const [name, setName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Submitted: ' + name);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
}`,
          explanation: 'In controlled components, form data is handled by React state. The input value is controlled by React and updated via onChange handlers.'
        },
        {
          title: 'Form Validation',
          code: `function EmailForm() {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');

  const validateEmail = (email) => {
    const re = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/;
    return re.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateEmail(email)) {
      setError('Please enter a valid email');
      return;
    }
    // Submit form
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="email"
        value={email}
        onChange={(e) => {
          setEmail(e.target.value);
          setError('');
        }}
      />
      {error && <div className="error">{error}</div>}
      <button type="submit">Submit</button>
    </form>
  );
}`,
          explanation: 'Form validation can be implemented with state to track errors. Validation can occur on submit or on change depending on requirements.'
        }
      ]
    },
    // 7. Composition vs Inheritance
    {
      id: 'composition',
      title: 'Composition vs Inheritance',
      examples: [
        {
          title: 'Component Composition',
          code: `function Layout({ header, sidebar, content }) {
  return (
    <div className="layout">
      <div className="header">{header}</div>
      <div className="sidebar">{sidebar}</div>
      <div className="content">{content}</div>
    </div>
  );
}

function App() {
  return (
    <Layout
      header={<Header title="My App" />}
      sidebar={<Sidebar />}
      content={<MainContent />}
    />
  );
}`,
          explanation: 'React favors composition over inheritance. Components can accept other components as props to achieve flexible reuse.'
        },
        {
          title: 'Specialization',
          code: `function Dialog({ title, message }) {
  return (
    <div className="dialog">
      <h1>{title}</h1>
      <p>{message}</p>
    </div>
  );
}

function WelcomeDialog() {
  return (
    <Dialog
      title="Welcome"
      message="Thank you for visiting our website!"
    />
  );
}`,
          explanation: 'Specialized components can render more generic ones with specific props, rather than using inheritance.'
        }
      ]
    },
    // 8. Context API
    {
      id: 'context',
      title: 'Context API',
      examples: [
        {
          title: 'Creating Context',
          code: `// ThemeContext.js
import { createContext, useState } from 'react';

const ThemeContext = createContext();

function ThemeProvider({ children }) {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export { ThemeContext, ThemeProvider };

// App.js
import { ThemeProvider } from './ThemeContext';

function App() {
  return (
    <ThemeProvider>
      <Header />
      <Main />
      <Footer />
    </ThemeProvider>
  );
}

// Header.js
import { useContext } from 'react';
import { ThemeContext } from './ThemeContext';

function Header() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  
  return (
    <header className={theme}>
      <button onClick={toggleTheme}>
        Toggle Theme
      </button>
    </header>
  );
}`,
          explanation: 'Context provides a way to share values between components without explicitly passing props. createContext creates a context object, Provider supplies the value, and useContext consumes it.'
        }
      ]
    },
    // 9. React Router
    {
      id: 'router',
      title: 'React Router',
      examples: [
        {
          title: 'Basic Routing',
          code: `import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';

function App() {
  return (
    <Router>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
      </nav>

      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/users/:id">
          <User />
        </Route>
        <Route>
          <NotFound />
        </Route>
      </Switch>
    </Router>
  );
}

function User() {
  const { id } = useParams();
  return <h1>User ID: {id}</h1>;
}`,
          explanation: 'React Router enables navigation between views. Router wraps the app, Route defines paths, Link provides navigation, and Switch renders the first matching route.'
        },
        {
          title: 'Programmatic Navigation',
          code: `function LoginForm() {
  const history = useHistory();
  const [user, setUser] = useState(null);

  const handleLogin = async () => {
    const user = await loginUser();
    setUser(user);
    history.push('/dashboard');
  };

  return (
    <form onSubmit={handleLogin}>
      {/* Form inputs */}
      <button type="submit">Login</button>
    </form>
  );
}`,
          explanation: 'useHistory hook provides access to the history instance for programmatic navigation. Methods like push, replace, and go allow navigation.'
        }
      ]
    },
    // 10. Hooks
    {
      id: 'hooks',
      title: 'React Hooks',
      examples: [
        {
          title: 'useState & useEffect',
          code: `function Timer() {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds(prev => prev + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []); // Empty array means run once on mount

  return <div>Seconds: {seconds}</div>;
}`,
          explanation: 'useState manages local component state. useEffect handles side effects (data fetching, subscriptions, etc.). The cleanup function runs when component unmounts.'
        },
        {
          title: 'useReducer',
          code: `const initialState = { count: 0 };

function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    default:
      throw new Error();
  }
}

function Counter() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      Count: {state.count}
      <button onClick={() => dispatch({ type: 'increment' })}>
        +
      </button>
      <button onClick={() => dispatch({ type: 'decrement' })}>
        -
      </button>
    </div>
  );
}`,
          explanation: 'useReducer is preferable to useState when you have complex state logic or when the next state depends on the previous one.'
        },
        {
          title: 'useRef',
          code: `function TextInputWithFocusButton() {
  const inputEl = useRef(null);

  const onButtonClick = () => {
    inputEl.current.focus();
  };

  return (
    <div>
      <input ref={inputEl} type="text" />
      <button onClick={onButtonClick}>
        Focus the input
      </button>
    </div>
  );
}`,
          explanation: 'useRef returns a mutable ref object whose .current property is initialized to the passed argument. Useful for accessing DOM nodes or storing mutable values.'
        },
        {
          title: 'Custom Hooks',
          code: `function useLocalStorage(key, initialValue) {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      return initialValue;
    }
  });

  const setValue = (value) => {
    try {
      const valueToStore =
        value instanceof Function ? value(storedValue) : value;
      setStoredValue(valueToStore);
      window.localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (error) {
      console.log(error);
    }
  };

  return [storedValue, setValue];
}

// Usage
function App() {
  const [name, setName] = useLocalStorage('name', 'Bob');
  return <input value={name} onChange={e => setName(e.target.value)} />;
}`,
          explanation: 'Custom hooks let you extract component logic into reusable functions. They can use other hooks and must start with "use".'
        }
      ]
    },
    // 11. Performance Optimization
    {
      id: 'performance',
      title: 'Performance Optimization',
      examples: [
        {
          title: 'React.memo',
          code: `const ExpensiveComponent = React.memo(function MyComponent({ value }) {
  // Only re-renders if props change
  return <div>{value}</div>;
});

function Parent() {
  const [count, setCount] = useState(0);
  
  return (
    <div>
      <button onClick={() => setCount(c => c + 1)}>
        Count: {count}
      </button>
      <ExpensiveComponent value="Hello" />
    </div>
  );
}`,
          explanation: 'React.memo is a higher-order component that memoizes the result, preventing unnecessary re-renders when props stay the same.'
        },
        {
          title: 'useCallback & useMemo',
          code: `function Parent() {
  const [count, setCount] = useState(0);
  
  // Memoize callback function
  const increment = useCallback(() => {
    setCount(c => c + 1);
  }, []); // No dependencies
  
  // Memoize expensive calculation
  const expensiveValue = useMemo(() => {
    return calculateExpensiveValue(count);
  }, [count]); // Only recalculate when count changes

  return (
    <div>
      <Child onClick={increment} />
      <div>Value: {expensiveValue}</div>
    </div>
  );
}`,
          explanation: 'useCallback memoizes functions, useMemo memoizes values. Both help avoid unnecessary recalculations and prevent unnecessary re-renders of child components.'
        }
      ]
    },
    // 12. Advanced Patterns
    {
      id: 'advanced',
      title: 'Advanced Patterns',
      examples: [
        {
          title: 'Render Props',
          code: `function MouseTracker({ render }) {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    setPosition({ x: e.clientX, y: e.clientY });
  };

  return (
    <div onMouseMove={handleMouseMove}>
      {render(position)}
    </div>
  );
}

function App() {
  return (
    <MouseTracker
      render={({ x, y }) => (
        <h1>
          Mouse position: {x}, {y}
        </h1>
      )}
    />
  );
}`,
          explanation: 'Render props pattern involves a component that accepts a function as a prop and uses it to render content, enabling code reuse and composition.'
        },
        {
          title: 'Higher-Order Components',
          code: `function withLogger(WrappedComponent) {
  return function(props) {
    useEffect(() => {
      console.log('Component mounted:', WrappedComponent.name);
      return () => {
        console.log('Component unmounted:', WrappedComponent.name);
      };
    }, []);

    return <WrappedComponent {...props} />;
  };
}

// Usage
const EnhancedComponent = withLogger(MyComponent);`,
          explanation: 'HOCs are functions that take a component and return a new component with additional functionality. Useful for cross-cutting concerns.'
        },
        {
          title: 'Portals',
          code: `function Modal({ children }) {
  return ReactDOM.createPortal(
    <div className="modal">
      {children}
    </div>,
    document.getElementById('modal-root')
  );
}

function App() {
  const [showModal, setShowModal] = useState(false);

  return (
    <div>
      <button onClick={() => setShowModal(true)}>
        Show Modal
      </button>
      {showModal && (
        <Modal>
          <h1>Modal Content</h1>
          <button onClick={() => setShowModal(false)}>
            Close
          </button>
        </Modal>
      )}
    </div>
  );
}`,
          explanation: 'Portals provide a way to render children into a DOM node that exists outside the DOM hierarchy of the parent component.'
        }
      ]
    },
    // 13. Testing
    {
      id: 'testing',
      title: 'Testing',
      examples: [
        {
          title: 'Component Testing',
          code: `// Button.js
function Button({ onClick, children }) {
  return (
    <button onClick={onClick} className="btn">
      {children}
    </button>
  );
}

// Button.test.js
import { render, screen, fireEvent } from '@testing-library/react';
import Button from './Button';

test('renders button with text', () => {
  render(<Button>Click Me</Button>);
  const button = screen.getByText(/click me/i);
  expect(button).toBeInTheDocument();
});

test('calls onClick prop when clicked', () => {
  const handleClick = jest.fn();
  render(<Button onClick={handleClick}>Click Me</Button>);
  fireEvent.click(screen.getByText(/click me/i));
  expect(handleClick).toHaveBeenCalledTimes(1);
});`,
          explanation: 'React Testing Library provides utilities to test components in a way that resembles how users interact with them.'
        },
        {
          title: 'Hooks Testing',
          code: `// useCounter.js
function useCounter(initialValue = 0) {
  const [count, setCount] = useState(initialValue);
  
  const increment = () => setCount(c => c + 1);
  const decrement = () => setCount(c => c - 1);
  
  return { count, increment, decrement };
}

// useCounter.test.js
import { renderHook, act } from '@testing-library/react-hooks';
import useCounter from './useCounter';

test('should increment counter', () => {
  const { result } = renderHook(() => useCounter());
  
  act(() => {
    result.current.increment();
  });
  
  expect(result.current.count).toBe(1);
});`,
          explanation: 'React Hooks Testing Library provides utilities to test custom hooks in isolation.'
        }
      ]
    },
    // 14. React Ecosystem
    {
      id: 'ecosystem',
      title: 'React Ecosystem',
      examples: [
        {
          title: 'State Management (Redux)',
          code: `// store.js
import { createStore } from 'redux';

function counterReducer(state = { value: 0 }, action) {
  switch (action.type) {
    case 'counter/incremented':
      return { value: state.value + 1 };
    case 'counter/decremented':
      return { value: state.value - 1 };
    default:
      return state;
  }
}

const store = createStore(counterReducer);

// Counter.js
import { useSelector, useDispatch } from 'react-redux';

function Counter() {
  const count = useSelector(state => state.value);
  const dispatch = useDispatch();

  return (
    <div>
      <button onClick={() => dispatch({ type: 'counter/incremented' })}>
        +
      </button>
      <span>{count}</span>
      <button onClick={() => dispatch({ type: 'counter/decremented' })}>
        -
      </button>
    </div>
  );
}

// App.js
import { Provider } from 'react-redux';

function App() {
  return (
    <Provider store={store}>
      <Counter />
    </Provider>
  );
}`,
          explanation: 'Redux is a predictable state container for JavaScript apps. It helps manage global state with actions and reducers.'
        },
        {
          title: 'Styling (Styled Components)',
          code: `import styled from 'styled-components';

const Button = styled.button\`
  background: \${props => props.primary ? 'palevioletred' : 'white'};
  color: \${props => props.primary ? 'white' : 'palevioletred'};
  font-size: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
  cursor: pointer;

  &:hover {
    opacity: 0.9;
  }
\`;

function App() {
  return (
    <div>
      <Button>Normal</Button>
      <Button primary>Primary</Button>
    </div>
  );
}`,
          explanation: 'Styled-components is a CSS-in-JS library that lets you write actual CSS in your JavaScript with template literals.'
        }
      ]
    }
  ]
};