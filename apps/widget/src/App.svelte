<script>
  export let basePath = ''

  import {Router, Route} from 'svelte-routing'
  import {setContext} from 'svelte'
  import Home from './pages/Home.svelte'
  import Blog from './pages/Blog.svelte'

  setContext('basePath', basePath)
</script>

<Router>
  <Route path={`${basePath}/`}>
    <Home/>
  </Route>
  <Route path={`${basePath}/blog`}>
    <Blog/>
  </Route>
</Router>

<!--<Router>-->
<!--	<Route path={`/`} >-->
<!--		<Home basePath />-->
<!--	</Route>-->
<!--	<Route path={`/blog`} component="{Blog}" />-->
<!--</Router>-->
