<script>
    import {Link} from 'svelte-routing'
    import { getContext } from 'svelte'

    const basePath = getContext('basePath')
</script>
<style>

</style>

<h1>Home</h1>
<Link to={`${basePath}/blog`}>Go to Blog</Link>
