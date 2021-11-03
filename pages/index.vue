<template>
  <div class="container">
    <h1 class="header">
      <span class="header--light"> Kies uit </span>
      52 telefoons
    </h1>

    <mobile-filter />
  </div>
</template>

<script lang="ts">
import {
  defineComponent
} from '@nuxtjs/composition-api';

export default defineComponent({ });
</script>
<style lang="scss" scoped>
  .container {
    display: flex;
    justify-content: center;
    height: 100vh;
  }

  .header {
    margin: 24px 0;
    color: #090;

    &--light {
      font-weight: 300;
    }
  }
</style>
