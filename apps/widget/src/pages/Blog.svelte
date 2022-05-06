<script>
  import {Link} from 'svelte-routing'
  import { getContext } from 'svelte'

  const basePath = getContext('basePath')
</script>
<styles>
</styles>

<div>
  <h1>Blog Page</h1>
  <Link to={`${basePath}/`}>Go Home</Link>
</div>
