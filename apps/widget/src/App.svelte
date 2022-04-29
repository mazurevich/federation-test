<script>
	import { Router, Route } from 'svelte-routing';
	import Home from './components/pages/Home.svelte';
</script>

<Router>
	<Route path="/" component="{Home}" />
</Router>
