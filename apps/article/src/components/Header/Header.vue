<script>
  import Metadata from './Metadata.vue';

  export default {
    components: {
      Metadata,
    },
    data() {
      return {
        provider: 'ADNOC Group',
        title: 'Hello world!',
        subtitle: 'This component was created using Vue.js',
      }
    }
  }
</script>

<template>
  <header class='header'>
    <Metadata />
    <aside class='image'>
      <span>Logo Placeholder</span>
    </aside>
  </header>
</template>

<style>
  .header {
    display: flex;
    align-items: stretch;
    height: 720px;
  }

  .image {
    display: flex;
    flex: 1;
    align-items: center;
    justify-content: center;

    border: 1px solid #205CDF;
    background-color: #808080;
  }
</style>
