<script>
  export let prop = []
  export let onWidgetClick = () => null


</script>

<style>
  .widget {
      background: aquamarine;
      width: 200px;
      height: 200px;
      display: flex;
  }
</style>

<div class="widget" on:click={onWidgetClick}>
  <span>Widget will be here</span>
</div>
