<template>
  <v-app>
    <v-container>
      <v-row>
        <v-col>
          <h1 class="header">
            <span class="header--light"> Kies uit </span>
            {{ currentDevices.length }} telefoons
          </h1>
          <mobile-filter />
        </v-col>
      </v-row>
      <v-row>
        <v-col
          v-for="device in currentDevices"
          :key="device.id"
          cols="4"
        >
          <mobile-card
            :id="device.id"
            :brand="device.manufacturer"
            :model="device.model"
            :os="device.operating_system"
            :default-selection="device.default"
            :variants="device.variants"
            :has-promotion="device.has_promotion"
            :promotion-text="device.attributes.promotion_label"
            :has-sticker="!!device.variants[0].attributes.handset_cat_promotion_sticker"
          />
          <!-- TODO: get correct sticker for variants -->
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>

<script lang="ts">
import {
  defineComponent,
  useStore,
  computed
} from '@nuxtjs/composition-api';
import { RootStoreState } from '~/types/state';

export default defineComponent({
  setup () {
    const store = useStore<RootStoreState>();
    const currentDevices = computed(
      () => store.getters['devices/getDevices']
    );

    store.dispatch('devices/fetchDevices');

    return {
      currentDevices
    };
  }
});
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
