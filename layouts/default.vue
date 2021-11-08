<template>
  <div>
    <Header />
    <Nuxt />
    <Footer />
  </div>
</template>
<script lang="ts" setup>
</script>
<style lang="scss">
// remove default nuxt body margin
// add fonts
// set flex
body {
    margin: 0;
    font-family: -apple-system,BlinkMacSystemFont,"Segoe UI","Roboto","Oxygen-Sans","Ubuntu","Cantarell","Helvetica Neue",sans-serif;
    font-size: 16px;
    font-weight: 300;
    background-color: #f3f3f3;
}
</style>
