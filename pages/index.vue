<template>
  <v-app>
    <v-container>
      <v-row>
        <v-col>
          <h1 class="header">
            <span class="header--light"> Kies uit </span>
            52 telefoons
          </h1>

          <mobile-filter />
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>

<script lang="ts">
import {
  defineComponent
} from '@nuxtjs/composition-api';

export default defineComponent({ });
</script>
<style lang="scss" scoped>
  .header {
    margin: 24px 0;
    color: #090;
    font-size: 44px;

    &--light {
      font-weight: 300;
    }
  }
</style>
