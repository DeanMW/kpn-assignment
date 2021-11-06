<template>
  <div>
    <v-card
      outlined
      class="rounded-lg pa-5 d-flex"
    >
      <multi-selector id="brand" name="Merk" :options="brands" />
      <multi-selector id="color" name="Kleur" :options="colors" />
      <multi-selector id="network" name="5G" :options="has5g" />
      <multi-selector id="os" name="Besturingssysteem" :options="operatingSystem" />
      <multi-selector id="esim" name="E-sim" :options="hasEsim" />
      <multi-selector id="condition" name="Refurbished" :options="isRefurbished" />
      <multi-selector id="condition" class="ml-auto" name="Refurbished" :options="options" label="Sortered op:" />
    </v-card>
    <!-- <v-chip-group
      column
      multiple
    >
      <v-chip
        v-for="brand in brands"
        v-if="brand.isSelected"
        :key="brand.name"
        v-model="brands"
        filter
        outlined
      >
        {{ brand.name }}
      </v-chip>
      <v-chip
        filter
        outlined
      >
        Washer / Dryer
      </v-chip>
    </v-chip-group> -->
  </div>
</template>
<script lang="ts">
import {
  computed,
  defineComponent,
  useStore
} from '@nuxtjs/composition-api';
import { RootStoreState } from '~/types/state';

export default defineComponent({
  setup () {
    const store = useStore<RootStoreState>();
    const brands = computed(
      () => store.getters['devices/getBrands']
    );
    const colors = computed(
      () => store.getters['devices/getColors']
    );
    const operatingSystem = computed(
      () => store.getters['devices/getOS']
    );
    const has5g = computed(
      () => store.getters['devices/get5g']
    );
    const hasEsim = computed(
      () => store.getters['devices/getEsim']
    );
    const isRefurbished = computed(
      () => store.getters['devices/isRefurbished']
    );

    return {
      brands,
      colors,
      operatingSystem,
      has5g,
      hasEsim,
      isRefurbished
    };
  },
  data () {
    return {
      value: [],
      options: [
        {
          value: 'Alabama',
          name: 'Alabama'
        }
      ]
    };
  }
});
</script>
