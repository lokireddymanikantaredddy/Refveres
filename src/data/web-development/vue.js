import { FaVuejs } from 'react-icons/fa';

export const vueContent = {
  icon: FaVuejs,
  title: 'Vue.js',
  color: '#41B883',
  description: 'A comprehensive Vue.js reference covering components, directives, reactivity, composition API, state management, routing, forms, transitions, and advanced patterns.',
  sections: [
    // 1. Vue Fundamentals
    {
      id: 'fundamentals',
      title: 'Vue Fundamentals',
      examples: [
        {
          title: 'Vue Instance & Template Syntax',
          code: `<!-- HTML Template -->
<div id="app">
  <p>{{ message }}</p>
  <button @click="reverseMessage">Reverse Message</button>
</div>

// JavaScript
const app = new Vue({
  el: '#app',
  data: {
    message: 'Hello Vue!'
  },
  methods: {
    reverseMessage() {
      this.message = this.message.split('').reverse().join('')
    }
  }
})`,
          explanation: 'The Vue instance is the root of every Vue application. Data properties are reactive. Template syntax uses mustache {{ }} for text and v- directives for attributes.'
        },
        {
          title: 'Components Basics',
          code: `<!-- Child Component -->
<template>
  <div class="greeting">
    <h2>{{ title }}</h2>
    <button @click="$emit('enlarge-text')">Enlarge text</button>
  </div>
</template>

<script>
export default {
  props: ['title']
}
</script>

<!-- Parent Component -->
<template>
  <div>
    <greeting 
      :title="greetingTitle"
      @enlarge-text="fontSize += 0.1"
    />
  </div>
</template>

<script>
import Greeting from './Greeting.vue'

export default {
  components: { Greeting },
  data() {
    return {
      greetingTitle: 'Welcome to Vue!',
      fontSize: 1
    }
  }
}
</script>`,
          explanation: 'Components are reusable Vue instances with custom names. Props pass data from parent to child. Events ($emit) communicate from child to parent.'
        },
        {
          title: 'Directives',
          code: `<!-- Conditionals -->
<div v-if="show">Now you see me</div>
<div v-else>Now you don't</div>

<!-- Lists -->
<ul>
  <li v-for="(item, index) in items" :key="item.id">
    {{ index }} - {{ item.text }}
  </li>
</ul>

<!-- Two-way Binding -->
<input v-model="message">

<!-- Dynamic Attributes -->
<a :href="url">Link</a>

<!-- Event Handling -->
<button @click="doSomething">Click</button>`,
          explanation: 'Directives are special attributes with v- prefix. Common directives: v-if, v-for, v-model, v-bind (shorthand :), v-on (shorthand @).'
        }
      ]
    },
    // 2. Reactivity & Computed Properties
    {
      id: 'reactivity',
      title: 'Reactivity & Computed Properties',
      examples: [
        {
          title: 'Data & Methods',
          code: `new Vue({
  data() {
    return {
      count: 0,
      firstName: 'John',
      lastName: 'Doe'
    }
  },
  methods: {
    increment() {
      this.count++
    }
  },
  computed: {
    fullName() {
      return this.firstName + ' ' + this.lastName
    }
  },
  watch: {
    count(newVal, oldVal) {
      console.log(\`Count changed from \${oldVal} to \${newVal}\`)
    }
  }
})`,
          explanation: 'Data properties are reactive. Methods can be called from templates or other methods. Computed properties cache results until dependencies change. Watchers perform side effects in response to changes.'
        },
        {
          title: 'Reactivity in Depth',
          code: `// Adding new reactive properties
Vue.set(vm.someObject, 'newProperty', 'value')
// or in components
this.$set(this.someObject, 'newProperty', 'value')

// For arrays
Vue.set(vm.items, indexOfItem, newValue)
vm.items.splice(indexOfItem, 1, newValue)

// Async update queue
this.message = 'updated'
this.$nextTick(() => {
  // DOM updated
})`,
          explanation: 'Vue cannot detect property addition/deletion or array mutations directly. Use Vue.set or array mutation methods. $nextTick waits for DOM updates.'
        }
      ]
    },
    // 3. Components In-Depth
    {
      id: 'components',
      title: 'Components In-Depth',
      examples: [
        {
          title: 'Props & Custom Events',
          code: `// Child Component
export default {
  props: {
    // Basic type check
    propA: Number,
    // Multiple types
    propB: [String, Number],
    // Required + default
    propC: {
      type: String,
      required: true
    },
    // Default function for objects/arrays
    propD: {
      type: Object,
      default() {
        return { message: 'hello' }
      }
    },
    // Custom validator
    propE: {
      validator(value) {
        return ['success', 'warning', 'danger'].includes(value)
      }
    }
  },
  methods: {
    submit() {
      this.$emit('submit', { data: 123 })
    }
  }
}

// Parent Usage
<child-component 
  :prop-a="42"
  @submit="handleSubmit"
/>`,
          explanation: 'Props can be strictly validated with types and validators. Events can emit values to parent components. Use kebab-case for event names in templates.'
        },
        {
          title: 'Slots & Scoped Slots',
          code: `<!-- Child Component -->
<div class="container">
  <header>
    <slot name="header"></slot>
  </header>
  <main>
    <slot :user="user"></slot>
  </main>
  <footer>
    <slot name="footer"></slot>
  </footer>
</div>

<!-- Parent Usage -->
<child-component>
  <template v-slot:header>
    <h1>Page Title</h1>
  </template>

  <template v-slot:default="slotProps">
    <p>Main content for {{ slotProps.user.name }}</p>
  </template>

  <template #footer>
    <p>Copyright info</p>
  </template>
</child-component>`,
          explanation: 'Slots allow content distribution. Named slots target specific locations. Scoped slots give child data to parent content. v-slot can be shortened to #.'
        },
        {
          title: 'Dynamic & Async Components',
          code: `<!-- Dynamic Component -->
<component :is="currentTabComponent"></component>

<!-- Async Component -->
const AsyncComponent = () => ({
  component: import('./MyComponent.vue'),
  loading: LoadingComponent,
  error: ErrorComponent,
  delay: 200,
  timeout: 3000
})

export default {
  components: {
    AsyncComponent
  }
}`,
          explanation: 'Dynamic components switch between components using :is. Async components load lazily for code splitting. Can show loading/error states.'
        }
      ]
    },
    // 4. Composition API (Vue 3)
    {
      id: 'composition',
      title: 'Composition API',
      examples: [
        {
          title: 'Basic Setup',
          code: `import { ref, computed, watch, onMounted } from 'vue'

export default {
  setup() {
    const count = ref(0)
    const double = computed(() => count.value * 2)
    
    function increment() {
      count.value++
    }
    
    watch(count, (newVal, oldVal) => {
      console.log(\`Count changed from \${oldVal} to \${newVal}\`)
    })
    
    onMounted(() => {
      console.log('Component mounted')
    })
    
    return {
      count,
      double,
      increment
    }
  }
}`,
          explanation: 'setup() is the entry point for Composition API. ref creates reactive references. computed creates computed properties. watch reacts to changes. Lifecycle hooks are available as functions.'
        },
        {
          title: 'Composables (Custom Hooks)',
          code: `// useMouse.js
import { ref, onMounted, onUnmounted } from 'vue'

export function useMouse() {
  const x = ref(0)
  const y = ref(0)
  
  function update(event) {
    x.value = event.pageX
    y.value = event.pageY
  }
  
  onMounted(() => window.addEventListener('mousemove', update))
  onUnmounted(() => window.removeEventListener('mousemove', update))
  
  return { x, y }
}

// Component Usage
import { useMouse } from './useMouse'

export default {
  setup() {
    const { x, y } = useMouse()
    return { x, y }
  }
}`,
          explanation: 'Composables are reusable logic functions using Composition API. Similar to React hooks. Can use all Composition API features.'
        }
      ]
    },
    // 5. State Management (Vuex)
    {
      id: 'state-management',
      title: 'State Management (Vuex)',
      examples: [
        {
          title: 'Vuex Basics',
          code: `// store.js
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    count: 0
  },
  mutations: {
    increment(state) {
      state.count++
    }
  },
  actions: {
    incrementAsync({ commit }) {
      setTimeout(() => {
        commit('increment')
      }, 1000)
    }
  },
  getters: {
    doubleCount(state) {
      return state.count * 2
    }
  }
})

// Component Usage
export default {
  computed: {
    count() {
      return this.$store.state.count
    },
    doubleCount() {
      return this.$store.getters.doubleCount
    }
  },
  methods: {
    increment() {
      this.$store.commit('increment')
    },
    incrementAsync() {
      this.$store.dispatch('incrementAsync')
    }
  }
}`,
          explanation: 'Vuex manages global state. State is single source of truth. Mutations change state (must be synchronous). Actions commit mutations (can be async). Getters compute derived state.'
        },
        {
          title: 'Modules',
          code: `const moduleA = {
  namespaced: true,
  state: { ... },
  mutations: { ... },
  actions: { ... },
  getters: { ... }
}

const moduleB = {
  namespaced: true,
  state: { ... },
  mutations: { ... },
  actions: { ... }
}

const store = new Vuex.Store({
  modules: {
    a: moduleA,
    b: moduleB
  }
})

// Component Usage
this.$store.state.a // -> moduleA's state
this.$store.state.b // -> moduleB's state

// Access namespaced getters/actions/mutations
this.$store.getters['a/someGetter']
this.$store.dispatch('a/someAction')
this.$store.commit('a/someMutation')`,
          explanation: 'Modules divide store into smaller parts. Each can have own state/mutations/actions/getters. namespaced: true avoids naming conflicts.'
        }
      ]
    },
    // 6. Routing (Vue Router)
    {
      id: 'routing',
      title: 'Routing (Vue Router)',
      examples: [
        {
          title: 'Basic Routing',
          code: `// router.js
import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from './views/Home.vue'
import User from './views/User.vue'

Vue.use(VueRouter)

const routes = [
  { path: '/', component: Home },
  { path: '/user/:id', component: User, props: true },
  { path: '*', redirect: '/' } // catch-all
]

const router = new VueRouter({
  mode: 'history',
  routes
})

// Component Usage
<router-link to="/">Home</router-link>
<router-link :to="{ name: 'user', params: { id: 123 }}">User</router-link>
<router-view></router-view>

// Programmatic Navigation
this.$router.push('/')
this.$router.push({ name: 'user', params: { id: 123 } })
this.$router.replace('/') // no history record
this.$router.go(-1) // back`,
          explanation: 'Vue Router maps URLs to components. router-link navigates. router-view renders matched component. Dynamic segments start with :. Can use named routes.'
        },
        {
          title: 'Navigation Guards',
          code: `// Global guard
router.beforeEach((to, from, next) => {
  if (to.meta.requiresAuth && !isAuthenticated) {
    next('/login')
  } else {
    next()
  }
})

// Per-route guard
{
  path: '/admin',
  component: Admin,
  beforeEnter: (to, from, next) => {
    // ...
  }
}

// In-component guards
export default {
  beforeRouteEnter(to, from, next) {
    // Can't access component instance
    next(vm => {
      // Access via vm
    })
  },
  beforeRouteUpdate(to, from, next) {
    // React to route changes
    next()
  },
  beforeRouteLeave(to, from, next) {
    if (!saved) {
      if (confirm('Leave without saving?')) {
        next()
      } else {
        next(false)
      }
    } else {
      next()
    }
  }
}`,
          explanation: 'Navigation guards control route navigation. Can be global, per-route, or in-component. Use next() to continue or next(false) to abort.'
        },
        {
          title: 'Lazy Loading Routes',
          code: `// router.js
const User = () => import('./views/User.vue')

const routes = [
  { path: '/user/:id', component: User }
]

// With webpack magic comments
const User = () => import(/* webpackChunkName: "user" */ './views/User.vue')

// Grouping components in same chunk
const User = () => import(/* webpackChunkName: "group-user" */ './views/User.vue')
const Profile = () => import(/* webpackChunkName: "group-user" */ './views/Profile.vue')`,
          explanation: 'Dynamic imports split code into separate chunks. Loaded only when route is visited. Webpack magic comments customize chunk names.'
        }
      ]
    },
    // 7. Forms & Validation
    {
      id: 'forms',
      title: 'Forms & Validation',
      examples: [
        {
          title: 'Form Handling',
          code: `<template>
  <form @submit.prevent="handleSubmit">
    <input v-model="form.name" placeholder="Name">
    <input v-model="form.email" type="email" placeholder="Email">
    <textarea v-model="form.message"></textarea>
    
    <select v-model="form.country">
      <option v-for="country in countries" :value="country">
        {{ country }}
      </option>
    </select>
    
    <input type="checkbox" v-model="form.subscribe">
    
    <button type="submit">Submit</button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      form: {
        name: '',
        email: '',
        message: '',
        country: '',
        subscribe: false
      },
      countries: ['USA', 'Canada', 'Mexico']
    }
  },
  methods: {
    handleSubmit() {
      console.log('Form submitted:', this.form)
    }
  }
}
</script>`,
          explanation: 'v-model creates two-way binding for form inputs. .prevent modifier stops page reload. Works with text, textarea, select, checkbox, radio.'
        },
        {
          title: 'Form Validation with Vuelidate',
          code: `import { required, minLength, email } from 'vuelidate/lib/validators'

export default {
  data() {
    return {
      form: {
        name: '',
        email: ''
      }
    }
  },
  validations: {
    form: {
      name: {
        required,
        minLength: minLength(3)
      },
      email: {
        required,
        email
      }
    }
  },
  methods: {
    submit() {
      this.$v.$touch()
      if (!this.$v.$invalid) {
        // Submit form
      }
    }
  }
}

<!-- Template -->
<input v-model="form.name" @blur="$v.form.name.$touch()">
<div v-if="$v.form.name.$error">
  <span v-if="!$v.form.name.required">Name is required</span>
  <span v-if="!$v.form.name.minLength">
    Name must be at least 3 characters
  </span>
</div>`,
          explanation: 'Vuelidate provides model-based validation. Define validation rules. $touch() marks fields as touched. $error shows validation state.'
        }
      ]
    },
    // 8. Transitions & Animations
    {
      id: 'transitions',
      title: 'Transitions & Animations',
      examples: [
        {
          title: 'Transition Component',
          code: `<template>
  <button @click="show = !show">Toggle</button>
  
  <transition name="fade">
    <p v-if="show">Hello</p>
  </transition>
</template>

<style>
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>`,
          explanation: 'transition wrapper component applies enter/leave transitions. CSS classes define transition effects. Name attribute prefixes classes.'
        },
        {
          title: 'JavaScript Hooks',
          code: `<transition
  @before-enter="beforeEnter"
  @enter="enter"
  @after-enter="afterEnter"
  @enter-cancelled="enterCancelled"
  @before-leave="beforeLeave"
  @leave="leave"
  @after-leave="afterLeave"
  @leave-cancelled="leaveCancelled"
>
  <div v-if="show">Content</div>
</transition>

<script>
export default {
  methods: {
    beforeEnter(el) {
      el.style.opacity = 0
    },
    enter(el, done) {
      anime({
        targets: el,
        opacity: 1,
        duration: 1000,
        complete: done
      })
    },
    afterEnter(el) {
      // ...
    }
  }
}
</script>`,
          explanation: 'JavaScript hooks provide more control over animations. Call done() when animation completes. Can integrate with GSAP, Anime.js, etc.'
        }
      ]
    },
    // 9. Advanced Patterns
    {
      id: 'advanced',
      title: 'Advanced Patterns',
      examples: [
        {
          title: 'Render Functions & JSX',
          code: `export default {
  props: ['items'],
  render(h) {
    if (this.items.length) {
      return h('ul', this.items.map(item => {
        return h('li', item.name)
      }))
    } else {
      return h('p', 'No items found.')
    }
  }
}

// With JSX
export default {
  props: ['items'],
  render() {
    return (
      <div>
        {this.items.length ? (
          <ul>
            {this.items.map(item => (
              <li>{item.name}</li>
            ))}
          </ul>
        ) : (
          <p>No items found.</p>
        )}
      </div>
    )
  }
}`,
          explanation: 'Render functions provide programmatic component creation. h is hyperscript function. JSX can be used with Babel plugin.'
        },
        {
          title: 'Custom Directives',
          code: `// Global directive
Vue.directive('focus', {
  inserted(el) {
    el.focus()
  }
})

// Local directive
export default {
  directives: {
    pin: {
      inserted(el, binding) {
        el.style.position = 'fixed'
        const s = binding.arg || 'top'
        el.style[s] = binding.value + 'px'
      }
    }
  }
}

<!-- Usage -->
<input v-focus>
<div v-pin:bottom="200">Pinned 200px from bottom</div>`,
          explanation: 'Custom directives provide low-level DOM access. Hook functions: bind, inserted, update, componentUpdated, unbind. Binding object contains arguments.'
        },
        {
          title: 'Plugins',
          code: `// plugin.js
export default {
  install(Vue, options) {
    // Add global method/property
    Vue.myGlobalMethod = function() {
      // ...
    }
    
    // Add global directive
    Vue.directive('my-directive', {
      bind(el, binding, vnode, oldVnode) {
        // ...
      }
    })
    
    // Add instance method
    Vue.prototype.$myMethod = function(methodOptions) {
      // ...
    }
  }
}

// main.js
import MyPlugin from './plugin'
Vue.use(MyPlugin, { someOption: true })`,
          explanation: 'Plugins add global-level functionality. Must expose install method. Vue.use() installs plugin. Can pass options.'
        }
      ]
    },
    // 10. Testing
    {
      id: 'testing',
      title: 'Testing',
      examples: [
        {
          title: 'Component Testing with Vue Test Utils',
          code: `import { mount } from '@vue/test-utils'
import Counter from './Counter.vue'

describe('Counter', () => {
  it('increments count when button is clicked', () => {
    const wrapper = mount(Counter)
    expect(wrapper.vm.count).toBe(0)
    
    const button = wrapper.find('button')
    button.trigger('click')
    
    expect(wrapper.vm.count).toBe(1)
    expect(wrapper.text()).toContain('Count: 1')
  })
  
  it('emits increment event with count', () => {
    const wrapper = mount(Counter)
    wrapper.vm.increment()
    
    expect(wrapper.emitted().increment).toBeTruthy()
    expect(wrapper.emitted().increment[0]).toEqual([1])
  })
})`,
          explanation: 'Vue Test Utils mounts components in isolation. find() locates elements. trigger() simulates events. emitted() checks custom events.'
        },
        {
          title: 'Vuex Store Testing',
          code: `import { createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import storeConfig from './store'

const localVue = createLocalVue()
localVue.use(Vuex)

describe('store', () => {
  let store
  
  beforeEach(() => {
    store = new Vuex.Store(storeConfig)
  })
  
  it('increments count', () => {
    expect(store.state.count).toBe(0)
    store.commit('increment')
    expect(store.state.count).toBe(1)
  })
  
  it('actions commit mutations', async () => {
    const commit = jest.fn()
    const action = storeConfig.actions.incrementAsync.bind({ commit })
    
    await action()
    expect(commit).toHaveBeenCalledWith('increment')
  })
})`,
          explanation: 'Test Vuex mutations, actions, and getters in isolation. createLocalVue() avoids polluting global Vue. Mock dependencies with Jest.'
        }
      ]
    },
    // 11. Vue CLI & Tooling
    {
      id: 'tooling',
      title: 'Vue CLI & Tooling',
      examples: [
        {
          title: 'Vue CLI Commands',
          code: `# Create project
vue create my-project

# Add plugin
vue add router
vue add vuex
vue add @vue/cli-plugin-typescript

# Run dev server
npm run serve

# Build for production
npm run build

# Run tests
npm run test:unit
npm run test:e2e

# Inspect webpack config
vue inspect > output.js`,
          explanation: 'Vue CLI scaffolds projects with zero-config setup. Plugins add features like routing, state management, TypeScript. Commands handle dev/build/test.'
        },
        {
          title: 'Vue Config (vue.config.js)',
          code: `module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/my-app/'
    : '/',
    
  devServer: {
    proxy: {
      '/api': {
        target: 'http://localhost:3000',
        changeOrigin: true
      }
    }
  },
  
  chainWebpack: config => {
    config.module
      .rule('svg')
      .use('file-loader')
      .loader('svg-inline-loader')
  },
  
  css: {
    loaderOptions: {
      sass: {
        prependData: \`@import "@/styles/variables.scss";\`
      }
    }
  }
}`,
          explanation: 'vue.config.js customizes build configuration. Set public path, configure dev server, modify webpack, pass options to loaders.'
        }
      ]
    }
  ]
};