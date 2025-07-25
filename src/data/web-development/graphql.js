import { GrGraphQl } from "react-icons/gr";

export const graphqlContent = {
  icon: GrGraphQl,
  title: 'GraphQL',
  color: '#E10098',
  description: 'A complete GraphQL reference covering queries, mutations, schemas, types, resolvers, subscriptions, error handling, best practices, and integration with various clients.',
  sections: [
    // 1. GraphQL Fundamentals
    {
      id: 'fundamentals',
      title: 'GraphQL Fundamentals',
      examples: [
        {
          title: 'Basic Query',
          code: `# Client-side query
query GetUser {
  user(id: "123") {
    id
    name
    email
    posts {
      title
    }
  }
}

# Server response
{
  "data": {
    "user": {
      "id": "123",
      "name": "Alice",
      "email": "alice@example.com",
      "posts": [
        { "title": "First Post" },
        { "title": "GraphQL is Awesome" }
      ]
    }
  }
}`,
          explanation: 'GraphQL queries allow clients to request exactly the data they need. The server responds with JSON data matching the query structure. Fields can be nested to fetch related data in a single request.'
        },
        {
          title: 'Arguments & Variables',
          code: `# Query with variables
query GetUser($userId: ID!, $withPosts: Boolean = false) {
  user(id: $userId) {
    id
    name
    email
    posts @include(if: $withPosts) {
      title
    }
  }
}

# Variables
{
  "userId": "123",
  "withPosts": true
}`,
          explanation: 'Arguments can be passed to fields to filter or customize responses. Variables make queries dynamic and reusable. Default values can be specified, and directives like @include conditionally include fields.'
        }
      ]
    },
    // 2. Schema Definition
    {
      id: 'schema',
      title: 'Schema Definition',
      examples: [
        {
          title: 'Type Definitions',
          code: `type User {
  id: ID!
  name: String!
  email: String!
  posts: [Post!]!
  createdAt: DateTime!
}

type Post {
  id: ID!
  title: String!
  content: String!
  author: User!
  published: Boolean!
}

type Query {
  user(id: ID!): User
  posts(search: String): [Post!]!
}

type Mutation {
  createUser(input: UserInput!): User!
  updatePost(id: ID!, input: PostInput!): Post!
}

input UserInput {
  name: String!
  email: String!
  password: String!
}

scalar DateTime`,
          explanation: 'The schema defines all types and operations available in the API. Types represent objects, ! indicates non-nullable fields, [] indicates lists. Input types are special types for mutation arguments. Custom scalars can be defined for special data types.'
        },
        {
          title: 'Interfaces & Unions',
          code: `interface Notification {
  id: ID!
  createdAt: DateTime!
  recipient: User!
}

type EmailNotification implements Notification {
  id: ID!
  createdAt: DateTime!
  recipient: User!
  emailAddress: String!
  subject: String!
}

type PushNotification implements Notification {
  id: ID!
  createdAt: DateTime!
  recipient: User!
  deviceId: String!
  message: String!
}

union SearchResult = User | Post | Comment

type Query {
  notifications: [Notification!]!
  search(text: String!): [SearchResult!]!
}`,
          explanation: 'Interfaces define common fields that implementing types must include. Unions represent types that could be one of several options. Both enable polymorphic fields that can return different types.'
        }
      ]
    },
    // 3. Resolvers
    {
      id: 'resolvers',
      title: 'Resolvers',
      examples: [
        {
          title: 'Basic Resolver Structure',
          code: `const resolvers = {
  Query: {
    user: async (parent, args, context, info) => {
      // args contains the arguments passed to the query
      const { id } = args;
      // context contains shared data like auth, db connections
      const user = await context.db.users.findOne({ id });
      return user;
    },
    posts: async (_, { search }, { db }) => {
      const query = search ? { title: { $regex: search, $options: 'i' } } : {};
      return await db.posts.find(query).toArray();
    }
  },
  User: {
    posts: async (user, _, { db }) => {
      return await db.posts.find({ authorId: user.id }).toArray();
    }
  },
  Mutation: {
    createUser: async (_, { input }, { db }) => {
      const newUser = { ...input, createdAt: new Date() };
      const result = await db.users.insertOne(newUser);
      return { ...newUser, id: result.insertedId };
    }
  }
};`,
          explanation: 'Resolvers are functions that handle fetching data for each field. They receive four arguments: parent object, args from the query, context with shared data, and info about the execution state. Each type in the schema needs resolvers for its fields.'
        },
        {
          title: 'DataLoader Pattern',
          code: `// Setup DataLoader for batching
const batchUsers = async (ids) => {
  const users = await db.users.find({ id: { $in: ids } }).toArray();
  return ids.map(id => users.find(user => user.id === id));
};

const userLoader = new DataLoader(batchUsers);

// In resolvers
const resolvers = {
  User: {
    posts: async (user, _, { postLoader }) => {
      return postLoader.load(user.id);
    }
  },
  Post: {
    author: async (post, _, { userLoader }) => {
      return userLoader.load(post.authorId);
    }
  }
};`,
          explanation: 'DataLoader solves the N+1 problem by batching requests and caching results. It groups individual loads that occur within a single tick of the event loop and calls the batch function with all requested keys.'
        }
      ]
    },
    // 4. Mutations
    {
      id: 'mutations',
      title: 'Mutations',
      examples: [
        {
          title: 'Basic Mutation',
          code: `# Client mutation
mutation CreatePost($input: PostInput!) {
  createPost(input: $input) {
    id
    title
    author {
      name
    }
  }
}

# Variables
{
  "input": {
    "title": "New Post",
    "content": "GraphQL is great!",
    "authorId": "123",
    "published": true
  }
}

# Server response
{
  "data": {
    "createPost": {
      "id": "456",
      "title": "New Post",
      "author": {
        "name": "Alice"
      }
    }
  }
}`,
          explanation: 'Mutations modify data on the server. They should explicitly declare what data they return. Input types are recommended for complex arguments. The mutation response should include the modified data to avoid follow-up queries.'
        },
        {
          title: 'Optimistic UI Updates',
          code: `// Apollo Client mutation with optimistic response
const [createPost] = useMutation(CREATE_POST_MUTATION, {
  variables: { input: newPost },
  optimisticResponse: {
    __typename: 'Mutation',
    createPost: {
      __typename: 'Post',
      id: 'temp-id',
      title: newPost.title,
      author: {
        __typename: 'User',
        id: currentUser.id,
        name: currentUser.name
      }
    }
  },
  update: (cache, { data: { createPost } }) => {
    // Update cache with real data when response arrives
    cache.modify({
      fields: {
        posts(existingPosts = []) {
          return [...existingPosts, createPost];
        }
      }
    });
  }
});`,
          explanation: 'Optimistic UI updates make apps feel faster by immediately showing expected results before server confirmation. When the real response arrives, the UI is updated if needed. This pattern works well with mutations that have predictable outcomes.'
        }
      ]
    },
    // 5. Subscriptions
    {
      id: 'subscriptions',
      title: 'Subscriptions',
      examples: [
        {
          title: 'Real-time Updates',
          code: `# Schema
type Subscription {
  postCreated: Post!
  commentAdded(postId: ID!): Comment!
}

# Client subscription
subscription OnPostCreated {
  postCreated {
    id
    title
    author {
      name
    }
  }
}

# Server implementation (using PubSub)
const { PubSub } = require('graphql-subscriptions');
const pubsub = new PubSub();

const resolvers = {
  Mutation: {
    createPost: async (_, { input }, { db }) => {
      const post = { ...input, createdAt: new Date() };
      const result = await db.posts.insertOne(post);
      const createdPost = { ...post, id: result.insertedId };
      pubsub.publish('POST_CREATED', { postCreated: createdPost });
      return createdPost;
    }
  },
  Subscription: {
    postCreated: {
      subscribe: () => pubsub.asyncIterator(['POST_CREATED'])
    }
  }
};`,
          explanation: 'Subscriptions allow clients to receive real-time updates. They use WebSockets to maintain a persistent connection. The server publishes events to channels, and subscribed clients receive updates matching their subscription.'
        }
      ]
    },
    // 6. Error Handling
    {
      id: 'errors',
      title: 'Error Handling',
      examples: [
        {
          title: 'Custom Errors',
          code: `# Schema with custom error type
type Mutation {
  login(email: String!, password: String!): LoginResponse!
}

type LoginResponse {
  user: User
  token: String
  errors: [FieldError!]
}

type FieldError {
  field: String!
  message: String!
}

# Resolver implementation
const resolvers = {
  Mutation: {
    login: async (_, { email, password }, { db }) => {
      const errors = [];
      
      if (!email) errors.push({ field: 'email', message: 'Email is required' });
      if (!password) errors.push({ field: 'password', message: 'Password is required' });
      
      if (errors.length > 0) {
        return { errors };
      }
      
      const user = await db.users.findOne({ email });
      if (!user) {
        return { errors: [{ field: 'email', message: 'User not found' }] };
      }
      
      // Validate password...
      return { user, token: generateToken(user) };
    }
  }
};`,
          explanation: 'GraphQL errors can be handled by returning error details as part of the normal response payload. This allows for fine-grained error handling on the client and associating errors with specific form fields.'
        },
        {
          title: 'GraphQL Error Format',
          code: `{
  "errors": [
    {
      "message": "Unauthorized",
      "locations": [ { "line": 2, "column": 3 } ],
      "path": [ "createPost" ],
      "extensions": {
        "code": "UNAUTHENTICATED",
        "timestamp": "2023-01-01T00:00:00Z"
      }
    }
  ],
  "data": null
}`,
          explanation: 'GraphQL has a standard error format that includes the error message, location in the query, path to the field, and optional extensions for additional metadata. The response may include partial data if some fields resolved successfully.'
        }
      ]
    },
    // 7. Fragments
    {
      id: 'fragments',
      title: 'Fragments',
      examples: [
        {
          title: 'Fragment Usage',
          code: `# Define fragments
fragment UserDetails on User {
  id
  name
  email
  createdAt
}

fragment PostDetails on Post {
  id
  title
  content
  author {
    ...UserDetails
  }
}

# Use fragments in queries
query GetPostsWithAuthors {
  posts {
    ...PostDetails
  }
}

query GetUser($id: ID!) {
  user(id: $id) {
    ...UserDetails
    posts {
      title
    }
  }
}`,
          explanation: 'Fragments allow you to define reusable sets of fields that can be included in multiple queries. They help reduce duplication and make queries more maintainable. Fragments must specify which type they apply to.'
        }
      ]
    },
    // 8. Directives
    {
      id: 'directives',
      title: 'Directives',
      examples: [
        {
          title: 'Built-in Directives',
          code: `query GetUser($id: ID!, $withPosts: Boolean!, $skipEmail: Boolean!) {
  user(id: $id) {
    id
    name
    email @skip(if: $skipEmail)
    posts @include(if: $withPosts) {
      title
    }
  }
}

# Variables
{
  "id": "123",
  "withPosts": true,
  "skipEmail": false
}`,
          explanation: 'Directives can conditionally include or skip fields in the response. @include(if: Boolean) only includes the field if true. @skip(if: Boolean) skips the field if true. These are useful for dynamic queries.'
        },
        {
          title: 'Custom Directives',
          code: `# Schema definition
directive @auth(requires: Role = ADMIN) on OBJECT | FIELD_DEFINITION

enum Role {
  ADMIN
  USER
  GUEST
}

type Query {
  adminData: String @auth(requires: ADMIN)
  userData: String @auth(requires: USER)
}

# Directive implementation
const authDirective = (schema, directiveName = 'auth') => {
  return {
    authDirectiveTransformer: (schema) => {
      return mapSchema(schema, {
        [MapperKind.OBJECT_FIELD]: (fieldConfig) => {
          const authDirective = getDirective(schema, fieldConfig, directiveName)?.[0];
          if (authDirective) {
            const { requires } = authDirective;
            const originalResolver = fieldConfig.resolve || defaultFieldResolver;
            fieldConfig.resolve = async (source, args, context, info) => {
              if (context.user.role !== requires) {
                throw new Error('Not authorized');
              }
              return originalResolver(source, args, context, info);
            };
          }
          return fieldConfig;
        }
      });
    }
  };
};`,
          explanation: 'Custom directives can modify schema behavior. They are powerful for cross-cutting concerns like authentication, formatting, or logging. Directives can be applied to types, fields, or other schema elements.'
        }
      ]
    },
    // 9. Pagination
    {
      id: 'pagination',
      title: 'Pagination',
      examples: [
        {
          title: 'Cursor-based Pagination',
          code: `# Schema
type Query {
  posts(first: Int, after: String, last: Int, before: String): PostConnection!
}

type PostConnection {
  edges: [PostEdge!]!
  pageInfo: PageInfo!
  totalCount: Int!
}

type PostEdge {
  node: Post!
  cursor: String!
}

type PageInfo {
  hasNextPage: Boolean!
  hasPreviousPage: Boolean!
  startCursor: String
  endCursor: String
}

# Query example
query GetPosts($first: Int, $after: String) {
  posts(first: $first, after: $after) {
    edges {
      node {
        id
        title
      }
      cursor
    }
    pageInfo {
      hasNextPage
      endCursor
    }
    totalCount
  }
}

# Resolver implementation
const resolvers = {
  Query: {
    posts: async (_, { first, after }, { db }) => {
      const limit = first || 10;
      const query = after ? { _id: { $gt: fromCursor(after) } } : {};
      
      const posts = await db.posts.find(query)
        .sort({ _id: 1 })
        .limit(limit + 1)
        .toArray();
      
      const hasNextPage = posts.length > limit;
      const edges = hasNextPage ? posts.slice(0, -1) : posts;
      
      return {
        edges: edges.map(post => ({
          node: post,
          cursor: toCursor(post._id)
        })),
        pageInfo: {
          hasNextPage,
          endCursor: edges.length > 0 ? toCursor(edges[edges.length - 1]._id) : null
        },
        totalCount: await db.posts.countDocuments()
      };
    }
  }
};`,
          explanation: 'Cursor-based pagination is preferred for large datasets as it\'s more stable than offset-based pagination. The connection pattern provides edges with nodes and cursors, plus pageInfo for navigation. Cursors are typically base64-encoded positions.'
        }
      ],
    },
    // 10. Federation
    {
      id: 'federation',
      title: 'Schema Federation',
      examples: [
        {
          title: 'Federated Services',
          code: `# Users service
extend type Query {
  me: User
}

type User @key(fields: "id") {
  id: ID!
  name: String!
  email: String!
}

# Posts service
type Post @key(fields: "id") {
  id: ID!
  title: String!
  content: String!
  author: User @provides(fields: "name")
}

extend type User @key(fields: "id") {
  id: ID! @external
  name: String @external
  posts: [Post]
}

# Reviews service
type Review @key(fields: "id") {
  id: ID!
  rating: Int!
  content: String!
  author: User @provides(fields: "name")
  post: Post
}

extend type User @key(fields: "id") {
  id: ID! @external
  name: String @external
  reviews: [Review]
}

extend type Post @key(fields: "id") {
  id: ID! @external
  reviews: [Review]
}`,
          explanation: 'Apollo Federation allows splitting a GraphQL schema across multiple services. Each service extends types with @key fields and can reference types from other services. The gateway composes the complete schema and routes queries appropriately.'
        }
      ]
    },
    // 11. Performance & Caching
    {
      id: 'performance',
      title: 'Performance & Caching',
      examples: [
        {
          title: 'Persisted Queries',
          code: `# Client sends query hash instead of full query
POST /graphql
{
  "extensions": {
    "persistedQuery": {
      "version": 1,
      "sha256Hash": "abc123..."
    }
  }
}

# Server responds with PERSISTED_QUERY_NOT_FOUND if unknown
{
  "errors": [
    {
      "message": "PersistedQueryNotFound",
      "extensions": { "code": "PERSISTED_QUERY_NOT_FOUND" }
    }
  ]
}

# Client then sends full query
POST /graphql
{
  "query": "query GetUser { user(id: \"123\") { id name } }",
  "extensions": {
    "persistedQuery": {
      "version": 1,
      "sha256Hash": "abc123..."
    }
  }
}`,
          explanation: 'Persisted queries improve performance by sending a query hash instead of the full query text. The server maintains a map of hashes to queries. This reduces bandwidth and enables CDN caching of common queries.'
        },
        {
          title: 'Response Caching',
          code: `# Schema with cache control
type Post @cacheControl(maxAge: 60) {
  id: ID!
  title: String!
  content: String! @cacheControl(maxAge: 30)
  author: User @cacheControl(maxAge: 120)
}

type Query {
  posts: [Post!]! @cacheControl(maxAge: 10)
}

# HTTP response headers
Cache-Control: max-age=10, public
Apollo-Require-Preflight: true

# Client-side caching (Apollo)
const client = new ApolloClient({
  cache: new InMemoryCache({
    typePolicies: {
      Post: {
        fields: {
          comments: {
            merge(existing = [], incoming) {
              return [...existing, ...incoming];
            }
          }
        }
      }
    }
  })
});`,
          explanation: 'Caching can be implemented at multiple levels - HTTP caching for entire responses, persisted queries in CDNs, and normalized client-side caching. The @cacheControl directive helps specify caching policies.'
        }
      ]
    },
    // 12. Security
    {
      id: 'security',
      title: 'Security',
      examples: [
        {
          title: 'Query Depth Limiting',
          code: `const depthLimit = require('graphql-depth-limit');

const server = new ApolloServer({
  typeDefs,
  resolvers,
  validationRules: [
    depthLimit(5, { ignore: ['__typename'] }, depths => {
      console.log('Query depths:', depths);
    })
  ]
});

# Example of a deep query that would be blocked
query DeepQuery {
  user(id: "123") {
    posts {
      comments {
        author {
          posts {
            comments {
              author {
                name
              }
            }
          }
        }
      }
    }
  }
}`,
          explanation: 'Query depth limiting prevents overly complex queries that could be used for denial of service attacks. The maximum depth should be set based on your schema complexity, typically 5-10 levels.'
        },
        {
          title: 'Query Cost Analysis',
          code: `const { createComplexityLimitRule } = require('graphql-validation-complexity');

const complexityRule = createComplexityLimitRule(1000, {
  scalarCost: 1,
  objectCost: 5,
  listFactor: 10,
  onCost: cost => {
    console.log('Query cost:', cost);
  }
});

const server = new ApolloServer({
  typeDefs,
  resolvers,
  validationRules: [complexityRule]
});

# Example query with cost calculation
query ExpensiveQuery {
  posts(limit: 100) {  # 100 * listFactor = 1000
    title             # 100 * objectCost = 500
    comments {        # 100 * listFactor = 1000
      content         # Assume average 5 comments per post = 500 * objectCost = 2500
      author {        # 500 * objectCost = 2500
        name          # 500 * scalarCost = 500
      }
    }
  }
}
# Total cost: ~7000 (would be rejected)`,
          explanation: 'Query cost analysis estimates the computational cost of queries based on their structure. More complex operations (lists, nested objects) are assigned higher costs. Queries exceeding the limit are rejected.'
        }
      ]
    },
    // 13. Tooling & Ecosystem
    {
      id: 'tooling',
      title: 'Tooling & Ecosystem',
      examples: [
        {
          title: 'Apollo Studio',
          code: `# Apollo configuration (apollo.config.js)
module.exports = {
  client: {
    service: {
      name: 'my-service',
      url: 'http://localhost:4000/graphql',
      // For federated schemas:
      // name: 'my-service',
      // url: 'http://localhost:4001/graphql'
    },
    includes: ['./src/**/*.{ts,tsx,js,jsx}'],
    excludes: ['**/__tests__/**']
  }
};

# CLI commands
# Publish schema to Apollo Studio
npx apollo service:push --endpoint=http://localhost:4000/graphql

# Check schema against operations
npx apollo service:check

# Generate TypeScript types
npx apollo codegen:generate --localSchemaFile=schema.graphql \\
  --target=typescript --outputFlat=src/generated/graphql.ts`,
          explanation: 'Apollo Studio provides schema management, performance monitoring, and collaboration tools. The CLI helps with schema publishing, validation, and client code generation. It integrates with CI/CD pipelines.'
        },
        {
          title: 'GraphQL Code Generator',
          code: `# codegen.yml
schema: http://localhost:4000/graphql
documents: ./src/**/*.graphql
generates:
  ./src/generated/graphql.ts:
    plugins:
      - typescript
      - typescript-operations
      - typescript-react-apollo
    config:
      withHooks: true
      withHOC: false
      withComponent: false

# Example generated hooks
const { data, loading, error } = useGetUserQuery({
  variables: { id: '123' },
  skip: !isLoggedIn
});

const [createPost] = useCreatePostMutation({
  onCompleted: (data) => {
    history.push(\`/post/\${data.createPost.id}\`);
  }
});`,
          explanation: 'GraphQL Code Generator creates TypeScript types and React hooks from GraphQL operations. This provides end-to-end type safety, auto-completion, and reduces boilerplate code. It supports various plugins for different use cases.'
        }
      ]
    },
    // 14. Client Integration
    {
      id: 'clients',
      title: 'Client Integration',
      examples: [
        {
          title: 'Apollo Client',
          code: `import { ApolloClient, InMemoryCache, HttpLink, ApolloProvider } from '@apollo/client';

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: new HttpLink({
    uri: '/graphql',
    headers: {
      authorization: localStorage.getItem('token') || ''
    }
  })
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <Header />
        <Routes />
        <Footer />
      </Router>
    </ApolloProvider>
  );
}

// Component using hooks
function UserProfile() {
  const { loading, error, data } = useQuery(GET_USER, {
    variables: { id: '123' },
    fetchPolicy: 'cache-first'
  });

  const [updateUser] = useMutation(UPDATE_USER, {
    refetchQueries: ['GetUser']
  });

  // Render UI...
}`,
          explanation: 'Apollo Client manages local and remote data with a normalized cache. It provides React hooks for queries and mutations. The client handles request lifecycle, caching, error states, and can be customized with middleware.'
        },
        {
          title: 'URQL Client',
          code: `import { Provider, createClient, dedupExchange, fetchExchange } from 'urql';
import { cacheExchange } from '@urql/exchange-graphcache';

const client = createClient({
  url: '/graphql',
  exchanges: [
    dedupExchange,
    cacheExchange({
      keys: {
        Product: data => data.upc,
        User: data => data.id + '-' + data.role
      },
      resolvers: {
        Query: {
          product: (parent, args) => ({ __typename: 'Product', upc: args.upc })
        }
      }
    }),
    fetchExchange
  ]
});

function App() {
  return (
    <Provider value={client}>
      <Router>
        <Header />
        <Routes />
        <Footer />
      </Router>
    </Provider>
  );
}

// Component using hooks
function ProductPage() {
  const [result] = useQuery({
    query: GET_PRODUCT,
    variables: { upc: '123' },
    requestPolicy: 'cache-and-network'
  });

  // Render UI...
}`,
          explanation: 'URQL is a lightweight GraphQL client with React bindings. It offers a flexible exchange system for caching and middleware. The normalized cache supports optimistic updates and schema awareness.'
        }
      ]
    }
  ]
};