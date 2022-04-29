<script>
  import Header from './components/Header/Header.vue';

  export default {
    components: {
      Header,
    }
  }
</script>

<template>
  <div class="container">
    <Header />
    <main>
      <div>Framework: vue3</div>
      <div>Language: JavaScript</div>
      <div>CSS: Empty CSS</div>
    </main>
    <footer>Article Footer</footer>
  </div>
</template>

<style>
  .container {
    display: flex;
    flex-direction: column;
    justify-content: stretch;
  }
</style>
