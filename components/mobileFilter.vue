<template>
  <div>
    <v-card
      outlined
      class="rounded-lg pa-5 d-flex"
    >
      <multi-selector selector-id="brand" name="Merk" :options="brands" />
      <multi-selector selector-id="color" name="Kleur" :options="colors" />
      <multi-selector selector-id="network" name="5G" :options="has5g" />
      <multi-selector selector-id="os" name="Besturingssysteem" :options="operatingSystem" />
      <multi-selector selector-id="esim" name="E-sim" :options="hasEsim" />
      <multi-selector selector-id="refurbished" name="Refurbished" :options="isRefurbished" />
      <multi-selector selector-id="sort" class="ml-auto" name="Refurbished" :options="[]" label="Sortered op:" />
    </v-card>
    <v-chip-group
      column
      multiple
    >
      <span
        v-for="(options, key) in filteredOptions"
        :key="key"
      >
        <v-chip
          v-for="item in options"
          :key="item"
          close
          @click="setFilteredOptions(key, item)"
        >
          {{ item }}
        </v-chip>
      </span>
    </v-chip-group>
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

    const filteredOptions = computed(
      () => store.state.devices.filteredOptions
    );

    const setFilteredOptions = (key: string, item: string | boolean) => {
      store.dispatch('devices/setFilteredOptions', { name: item, id: key });
    };

    return {
      brands,
      colors,
      operatingSystem,
      has5g,
      hasEsim,
      isRefurbished,
      filteredOptions,
      setFilteredOptions
    };
  }
});
</script>
