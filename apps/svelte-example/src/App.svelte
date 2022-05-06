<script>
  export let basePath = ''

  import {Router, Route} from 'svelte-routing'
  import Home from './pages/Home.svelte'
  import Blog from './pages/Blog.svelte'

  console.log('svelte', basePath)
</script>

<h1>Hello from Svelte example</h1>
<Router basepath={basePath}>
  <Route path="/" component={Home} />
  <Route path="blog" component={Blog} />

</Router>
