<script>
import Asset from './Asset.vue';

export default {
  components: {
    Asset,
  },
}
</script>

<template>
  <footer class="footer">
    <div class="container">
      <h3 class="title">Similar News</h3>
      <span class="subtitle">See All</span>
    </div>
    <div class="container">
      <Asset />
      <Asset />
      <Asset />
      <Asset />
    </div>
  </footer>
</template>

<style scoped>
  .footer {
    display: flex;
    flex-flow: column nowrap;

    padding: 60px 120px;
    background-color: #F5F7F9;
  }
  .container {
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    align-items: center;
  }
  .title {
    color: #455664;
    font-size: 24px;
    line-height: 30px;
  }
  .subtitle {
    color: #205CDF;
    font-size: 16px;
    line-height: 20px;
    cursor: pointer;
  }
</style>
