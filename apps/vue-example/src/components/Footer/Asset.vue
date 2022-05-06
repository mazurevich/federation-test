<script>
</script>

<template>
  <div class="asset">
    <div class="preview" />
    <div class="metadata">
      Asset Placeholder
    </div>
  </div>
</template>

<style scoped>
  .asset {
    display: flex;
    flex-flow: column nowrap;
    align-items: stretch;
    justify-content: stretch;

    border-radius: 12px;
    width: 20%;
    height: 310px;
    background-color: white;
  }
  .preview {
    height: 50%;
    border-radius: 12px 12px 0 0;
    background-color: #808080;
  }
  .metadata {
    display: flex;
    flex-direction: column;
    padding: 16px;
    justify-content: center;
  }
</style>
