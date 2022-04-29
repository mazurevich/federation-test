<script>
  import Widget from '../Widget/Widget.svelte'
  // import isAuthenticated from '../../store/auth';
  // let isAuth = false;
  //
  // isAuthenticated.subscribe((value) => (isAuth = value));

  let items = [
    {
      id: '1',
      label: 'test'
    },
    {
      id: '2',
      label: 'Some other menu'
    }
  ]
</script>

<h1>Home</h1>
<Widget items={items} onMenuClick={id => console.log(id)}/>
