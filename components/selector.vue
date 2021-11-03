<template>
  <span class="selector">
    <label>{{ label }}</label>
    <select :id="id" :name="name">
      <option v-for="option in options" :key="option.name" :value="option.value">{{ option.name }}</option>
    </select>
  </span>
</template>
<script lang="ts">
import {
  defineComponent
} from '@nuxtjs/composition-api';

type SelectProps = {
    name: string,
    value: any
}

export default defineComponent({
  props: {
    id: {
      type: String,
      default: `selector-${Math.floor(Math.random() * 90000) + 10000}`,
      require: true
    },
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
    const test = 'asdasd';
    return { test };
  }
});
</script>
<style lang="scss" scoped>
    .selector {
        label {
            font-weight: 700;
        }
    }
</style>
