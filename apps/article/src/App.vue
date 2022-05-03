<script>
  import Article from './components/Article/Article.vue';
  import Footer from './components/Footer/Footer.vue';
  import Header from './components/Header/Header.vue';

  export default {
    components: {
      Article,
      Footer,
      Header,
    }
  }
</script>

<template>
  <div class="container">
    <Header />
    <Article />
    <Footer />
  </div>
</template>

<style scoped>
  .container {
    display: flex;
    flex-direction: column;
    justify-content: stretch;
  }
</style>
