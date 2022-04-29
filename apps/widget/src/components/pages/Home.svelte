<script>
  import Widget from '../Widget/Widget.svelte'

</script>
<style>
  .widget-wrapper {
      width: 250px;
      height: 250px;
  }
</style>

<h1>Home</h1>
<div class="widget-wrapper">
  <Widget onMenuClick={() => console.log('widget was clicked!')}/>
</div>
