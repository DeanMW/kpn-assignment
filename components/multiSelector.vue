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
              v-model="value"
              :label="item.name"
              :value="item.value"
            />
          </v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
  </span>
</template>
<script lang="ts">
import {
  defineComponent
} from '@nuxtjs/composition-api';
import { mdiMenuDown, mdiMenuUp } from '@mdi/js';

type SelectProps = {
    name: string,
    value: any
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
</style>
