<template>
  <span class="px-1">
    <label>{{ label }}</label>
    <v-menu
      open-on-hover
      offset-y
      :close-on-content-click="false"
    >
      <template #activator="{ on, attrs }">
        <v-hover v-slot="{ hover }">
          <v-btn
            v-bind="attrs"
            class="black--text font-weight-regular px-2"
            tile
            outlined
            v-on="on"
          >
            {{ name }}
            <v-icon v-if="hover">{{ svgPath.mdiMenuUp }}</v-icon>
            <v-icon v-else>{{ svgPath.mdiMenuDown }}</v-icon>
          </v-btn>
        </v-hover>
      </template>

      <v-list>
        <v-list-item
          v-for="(item, index) in options"
          :key="index"
        >
          <v-list-item-title>
            <v-checkbox
              :label="`${item.name} (${item.count})`"
              :value="item.isSelected"
              @change="setFilter(item)"
            />
          </v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
  </span>
</template>
<script lang="ts">
import {
  defineComponent, useStore
} from '@nuxtjs/composition-api';
import { mdiMenuDown, mdiMenuUp } from '@mdi/js';
import { RootStoreState } from '~/types/state';

type SelectProps = {
    name: string,
    isSelected: boolean
    count: number | undefined
}

export default defineComponent({
  props: {
    name: {
      type: String,
      default: 'Selector',
      required: true
    },
    label: {
      type: String,
      default: null
    },
    options: {
      type: Array as ()=> Array<SelectProps>,
      default: () => [],
      required: true
    }
  },
  setup () {
    const store = useStore<RootStoreState>();
    const setFilter = (item: SelectProps) => {
      item.isSelected = !item.isSelected;
      store.dispatch('devices/filterDevices', item);
    };

    return { setFilter };
  },
  data: () => ({
    svgPath: {
      mdiMenuDown,
      mdiMenuUp
    },
    value: []
  })
});
</script>
<style lang="scss" scoped>
    label {
        font-weight: 700;
    }
    v-label {
      text-transform: capitalize !important;
    }
</style>
